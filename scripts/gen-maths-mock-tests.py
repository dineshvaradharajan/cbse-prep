#!/usr/bin/env python3
"""Generate maths mock test data from PYQ MCQs with solved answers.

Reads:
  - data/pyq/maths/*.json (PYQ questions)
  - /tmp/answers_2024_2020.json
  - /tmp/answers_2025_batch1.json
  - /tmp/answers_2025_batch2.json

Outputs:
  - data/maths-mock-tests.js (mock test data file)
"""

import json
import glob
import random
import sys
import os

ANSWER_FILES = [
    '/tmp/answers_2024_2020.json',
    '/tmp/answers_2025_batch1.json',
    '/tmp/answers_2025_batch2.json',
]

def load_answers():
    """Load all answer keys into a lookup dict."""
    lookup = {}  # (year, set, qno) -> {answer, explanation}
    for f in ANSWER_FILES:
        if not os.path.exists(f):
            print(f"WARNING: Missing {f}")
            continue
        with open(f) as fh:
            answers = json.load(fh)
        for a in answers:
            key = (a['year'], a.get('set', ''), a['qno'])
            lookup[key] = a
    return lookup

def load_pyq_mcqs():
    """Load all MCQ questions from PYQ data."""
    mcqs = []
    for f in sorted(glob.glob('data/pyq/maths/*.json')):
        with open(f) as fh:
            for q in json.load(fh):
                if q['type'] == 'mcq' and q.get('options') and len(q['options']) == 4:
                    mcqs.append(q)
    return mcqs

def clean_option(opt):
    """Remove (a), (b) etc. prefix from option text."""
    import re
    return re.sub(r'^\([a-d]\)\s*', '', opt, flags=re.IGNORECASE).strip()

def build_mock_tests(mcqs, answers_lookup):
    """Create mock tests from MCQs with answers."""
    # Merge answers into MCQs
    answered = []
    for q in mcqs:
        key = (q['year'], q.get('set', ''), q['qno'])
        ans = answers_lookup.get(key)

        # Also try matching without set
        if not ans:
            for k, v in answers_lookup.items():
                if k[0] == q['year'] and k[2] == q['qno']:
                    ans = v
                    break

        if ans:
            q['solved_answer'] = ans['answer']  # A, B, C, or D
            q['explanation'] = ans.get('explanation', '')
            answered.append(q)
        elif q.get('answer'):
            # Already has answer in the data (2020 board)
            # Convert text answer to letter
            q['solved_answer'] = q['answer'] if len(q['answer']) == 1 else None
            q['explanation'] = ''
            if q['solved_answer']:
                answered.append(q)

    print(f"MCQs with answers: {len(answered)} / {len(mcqs)}")

    if len(answered) < 10:
        print("ERROR: Not enough answered MCQs to create tests")
        sys.exit(1)

    # Shuffle and create tests of 5 questions each (5-mark tests)
    random.seed(42)  # Reproducible
    random.shuffle(answered)

    # Create tests — each test has 5 MCQs, 5 minutes
    QUESTIONS_PER_TEST = 5
    DURATION = 300  # 5 minutes for 5 questions

    tests = []
    test_id = 1
    icons = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩',
             '⑪', '⑫', '⑬', '⑭', '⑮', '⑯', '⑰', '⑱', '⑲', '⑳']

    for start in range(0, len(answered), QUESTIONS_PER_TEST):
        batch = answered[start:start + QUESTIONS_PER_TEST]
        if len(batch) < QUESTIONS_PER_TEST:
            break  # Don't create incomplete tests

        # Count chapters in this batch
        chapters = {}
        for q in batch:
            ch = q['chapter']
            chapters[ch] = chapters.get(ch, 0) + 1

        top_chapters = sorted(chapters.items(), key=lambda x: -x[1])[:3]
        subtitle_parts = [f"{ch} ({n})" for ch, n in top_chapters]
        subtitle = ' · '.join(subtitle_parts)

        questions = []
        for qi, q in enumerate(batch):
            options = [clean_option(o) for o in q['options']]
            questions.append({
                'id': test_id * 100 + qi + 1,
                'chapter': q['chapter'],
                'year': q['year'],
                'difficulty': 'medium',
                'text': q['question'],
                'options': options,
                'answer': q['solved_answer'],
                'explanation': q.get('explanation', f"The correct answer is ({q['solved_answer']}).")
            })

        test = {
            'id': test_id,
            'name': f"PYQ Test {test_id}",
            'subtitle': subtitle,
            'icon': icons[test_id - 1] if test_id <= len(icons) else str(test_id),
            'duration': DURATION,
            'questions': questions
        }
        tests.append(test)
        test_id += 1

    return tests

def write_js(tests, outfile='data/maths-mock-tests.js'):
    """Write mock test data as JS file."""
    header = f"""/* Maths MCQ Mock Tests — PYQ Based (auto-generated)
   {len(tests)} tests × 5 MCQs each
   1 mark per correct answer | No negative marking | Duration: 5 minutes
   Generated from CBSE board papers 2019-2025
*/

const MATHS_MOCK_TESTS = """

    data = json.dumps(tests, indent=2, ensure_ascii=False)
    content = header + data + ';\n'

    with open(outfile, 'w') as f:
        f.write(content)

    print(f"Written {len(tests)} tests to {outfile}")
    print(f"Total questions: {sum(len(t['questions']) for t in tests)}")

def main():
    answers = load_answers()
    print(f"Loaded {len(answers)} answers from answer files")

    mcqs = load_pyq_mcqs()
    print(f"Loaded {len(mcqs)} MCQs from PYQ data")

    tests = build_mock_tests(mcqs, answers)
    write_js(tests)

if __name__ == '__main__':
    main()
