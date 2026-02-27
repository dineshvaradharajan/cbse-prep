#!/usr/bin/env python3
"""Inject MCQ answers into question-bank.html."""

import json
import re
import sys

ANSWERS_FILE = '/tmp/ncert_mcq_answers.json'
QB_FILE = 'maths/question-bank.html'

def main():
    try:
        with open(ANSWERS_FILE) as f:
            answers = json.load(f)
    except FileNotFoundError:
        print(f"No answers file found at {ANSWERS_FILE}")
        sys.exit(1)

    ans_lookup = {}
    for a in answers:
        key = (a['chapter'], a['exercise'], a['qno'])
        ans_lookup[key] = a
    print(f"Loaded {len(ans_lookup)} MCQ answers")

    with open(QB_FILE) as f:
        html = f.read()

    # Strip previously injected answers
    html = re.sub(r'\n<div class="qb-ans-toggle"[^>]*>[^<]*</div>\n<div class="qb-answer">.*?</div>', '', html, flags=re.DOTALL)

    lines = html.split('\n')
    result_lines = []
    ch_num = 0
    ex_id = ''
    card_qno = None
    in_question = False
    question_content = ''
    injected = 0

    for line in lines:
        # Track chapter
        m = re.search(r'qb-ch-name[^>]*>Ch\s*(\d+)', line)
        if m:
            ch_num = int(m.group(1))

        # Track exercise - both numbered and miscellaneous
        m = re.search(r'>Exercise\s+([\d.]+)', line)
        if m:
            ex_id = m.group(1)
        elif 'Miscellaneous Exercise' in line:
            ex_id = 'misc'

        # Track Q number
        m = re.search(r'qb-year-badge[^>]*>Q(\d+)<', line)
        if m:
            card_qno = int(m.group(1))

        # Detect start of question div
        if 'class="qb-question"' in line:
            in_question = True
            question_content = line

        elif in_question:
            question_content += '\n' + line

        # Detect end of question div (closing </div> while in_question)
        if in_question and '</div>' in line:
            in_question = False
            # Now check if this question is an MCQ
            if card_qno and ch_num and ex_id:
                key = (ch_num, ex_id, card_qno)
                # Also try with chapter-prefixed misc
                key_alt = (ch_num, f'{ch_num}.misc', card_qno)
                key_7misc = (ch_num, '7.misc', card_qno) if ch_num == 7 else None

                ans = ans_lookup.get(key) or ans_lookup.get(key_alt)
                if key_7misc:
                    ans = ans or ans_lookup.get(key_7misc)

                if ans and ('(A)' in question_content or '(a)' in question_content):
                    result_lines.append(line)
                    a_html = f'<div class="qb-ans-toggle" onclick="toggleAnswer(this)">\u25b8 Show Answer</div>'
                    a_html += f'\n<div class="qb-answer">Answer: ({ans["answer"]})'
                    if ans.get('explanation'):
                        expl = ans["explanation"].replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                        a_html += f'\n{expl}'
                    a_html += '</div>'
                    result_lines.append(a_html)
                    injected += 1
                    # Remove to prevent double injection
                    for k in [key, key_alt]:
                        ans_lookup.pop(k, None)
                    if key_7misc:
                        ans_lookup.pop(key_7misc, None)
                    card_qno = None
                    continue  # Skip appending the line again

            question_content = ''

        result_lines.append(line)

    with open(QB_FILE, 'w') as f:
        f.write('\n'.join(result_lines))

    print(f"Injected {injected} answers into {QB_FILE}")
    remaining = len(ans_lookup)
    print(f"Remaining unmatched: {remaining}")
    if remaining:
        for k in sorted(ans_lookup.keys()):
            print(f"  Ch{k[0]} Ex{k[1]} Q{k[2]}")

if __name__ == '__main__':
    main()
