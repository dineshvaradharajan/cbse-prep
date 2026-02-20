# CBSEPrep Design Style Guide

Design system reference for all pages in this project.

---

## Typography

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display / Headings | Newsreader (serif) | 400, 500, 600, 700, italic | Page titles, chapter names, card headings, formula labels |
| Body / UI | Lato | 400, 700, 900 | Body text, MCQ options, buttons (chemistry pages) |
| Body / UI | DM Sans | 400, 500, 600, 700 | Body text, tab labels (chapter pages) |
| Hub page | Manrope | 400, 500, 600, 700, 800 | index.html only — subject tabs, card descriptions |
| Code / Equations | monospace (system) | 400 | `.fc-eq` formula blocks, `.qr-val` quick-ref values |

**Base font size:** `105%` on formula pages · `112%` on chapter pages · `120%` on index

**Google Fonts import (chapter + MCQ pages):**
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

**Google Fonts import (formula + MCQ pages):**
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
```

---

## Color Palette

### Base (Sand + Ink)

```css
--sand-50:  #fdfcfa   /* page background */
--sand-100: #f7f5f0   /* subtle fills, reset button bg */
--sand-200: #eae6dd   /* borders, dividers */
--sand-300: #d8d1c4   /* tab borders, input borders */
--sand-400: #b8ad9a   /* arrow icons, muted elements */
--sand-700: #5c5347   /* secondary text, inactive tabs */
--sand-900: #2c2822   /* active tab background, headings */

--ink:   #1c1917      /* primary text */
--ink-2: #44403c      /* secondary text */
--ink-3: #78716c      /* muted text, labels */
```

### Feature Accent Colors

| Feature | Accent | Background | Border |
|---------|--------|------------|--------|
| Formulas | `#b8860b` | `#fef9ee` | `#f0d68a` |
| Assertion–Reason | `#059669` | `#f0fdf4` | `#86efac` |
| Strategy | `#2563eb` | `#eff6ff` | `#93c5fd` |
| Diagrams | `#7c3aed` | `#f5f3ff` | `#c4b5fd` |
| Derivations | `#dc2626` | `#fef2f2` | `#fca5a5` |
| Numericals | `#ea580c` | `#fff7ed` | `#fdba74` |
| Mock Tests / Plan | `#0891b2` | `#ecfeff` | `#67e8f9` |
| Case Study | `#be185d` | `#fdf2f8` | `#f9a8d4` |
| Chapters (Q-paper) | `#4338ca` | `#eef2ff` | `#a5b4fc` |
| Units | `#0f766e` | `#f0fdfa` | `#5eead4` |
| Concepts | `#be185d` | `#fdf2f8` | `#f9a8d4` |

### Chemistry Subject Colors

| Subject | Chapter color | Header bg | Header text |
|---------|--------------|-----------|-------------|
| Physical — Solutions | Teal `#0891b2` | `#e0f2fe` | `#0c4a6e` |
| Physical — Electrochemistry | Green `#16a34a` | `#dcfce7` | `#14532d` |
| Physical — Kinetics | Orange `#ea580c` | `#ffedd5` | `#7c2d12` |
| Inorganic — d&f Block | Amber `#b45309` | amber tints | — |
| Inorganic — Coordination | Violet `#7c3aed` | violet tints | — |
| Organic — Haloalkanes | Pink `#be185d` | — | — |
| Organic — Carbonyl | Red `#dc2626` | — | — |
| Organic — Amines | Purple `#9333ea` | — | — |
| Organic — Biomolecules | Green `#15803d` | — | — |

### Semantic Colors (UI states)

```css
/* MCQ correct */
background: #f0fdf4;  border: #86efac;  text: #166534;  letter: #16a34a

/* MCQ wrong */
background: #fef2f2;  border: #fca5a5;  text: #991b1b;  letter: #dc2626

/* Formula equation block */
background: #f0fdf4;  border: #86efac;  text: #166534

/* Score bar — good (≥70%) */
#16a34a

/* Score bar — needs work (<70%) */
#ea580c
```

---

## Layout

```css
/* Standard container */
.container {
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
  padding: 0 1.25rem;
  position: relative;
  z-index: 1;
}

/* Mobile override */
@media (max-width: 640px) {
  .container { max-width: 100%; width: 100%; }
}
```

**Background texture** — two variants used across pages:

```css
/* Grid lines (index, chapter pages) */
body::before {
  background-image:
    linear-gradient(var(--sand-200) 1px, transparent 1px),
    linear-gradient(90deg, var(--sand-200) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
}

/* Dot grid (formula pages) */
body::before {
  background-image: radial-gradient(var(--sand-200) .5px, transparent .5px);
  background-size: 24px 24px;
  opacity: 0.3;
}
```

---

## Components

### Navigation Tab (chapter/section switcher)

```css
.tab {
  font-size: 0.82em;  font-weight: 700;
  padding: 8px 16px;
  border: 2px solid #d8d1c4;  border-radius: 10px;
  background: #fff;  color: #5c5347;
  white-space: nowrap;
  transition: all 0.2s;
}
.tab:hover  { border-color: #b8ad9a; color: #2c2822; }
.tab.active { background: #2c2822; color: #fff; border-color: #2c2822; }
```

### MCQ Card

```css
.mcq-card {
  background: #fff;
  border: 1px solid var(--sand-200);  border-radius: 12px;
  padding: 1.25rem;  margin-bottom: 1rem;
}

.opt {
  padding: 0.55rem 0.8rem;
  border: 1.5px solid var(--sand-200);  border-radius: 8px;
  background: var(--sand-50);  font-size: 0.8rem;
  transition: all 0.15s;
}
.opt:hover:not(:disabled) { border-color: var(--sand-300); background: var(--sand-100); }
.opt.correct { background: #f0fdf4; border-color: #86efac; color: #166534; }
.opt.wrong   { background: #fef2f2; border-color: #fca5a5; color: #991b1b; }

.mcq-exp {
  margin-top: 0.85rem;  padding: 0.75rem 1rem;
  background: #f8fafc;
  border-left: 3px solid var(--sand-300);  border-radius: 0 6px 6px 0;
  font-size: 0.76rem;  display: none;
}
```

### Score Bar

```css
.score-bar { display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1.25rem; }
.score-val { font-family: 'Newsreader', serif; font-size: 1.2rem; font-weight: 700; }
.score-progress { height: 6px; background: var(--sand-200); border-radius: 999px; }
.score-fill { height: 100%; transition: width 0.3s; }
```

### Formula Card

```css
.formula-card {
  background: #fff;
  border: 1px solid var(--sand-200);  border-radius: 10px;
  padding: 1rem 1.1rem;
  border-left: 4px solid <subject-color>;
}
.fc-name { font-size: 0.75rem; font-weight: 700; }
.fc-eq   { font-family: monospace; font-size: 0.8rem; color: #166534;
           background: #f0fdf4; border: 1px solid #86efac; border-radius: 5px;
           padding: 0.3rem 0.6rem; display: block; line-height: 1.6; }
.fc-note { font-size: 0.68rem; color: var(--ink-3); line-height: 1.55; }
.unit-tag { font-size: 0.58rem; font-weight: 700; font-family: monospace;
            background: var(--sand-100); border: 1px solid var(--sand-200);
            border-radius: 4px; padding: 0.1rem 0.4rem; }
```

### Quick Reference Box

```css
.quick-ref {
  border: 1.5px solid <subject-border>;  border-radius: 12px;
  padding: 1.25rem 1.5rem;  margin: 1.5rem 0;
  background: linear-gradient(135deg, <subject-bg-light> 0%, #fff 60%);
}
.qr-val {
  font-family: monospace; font-size: 0.8rem;
  background: <subject-bg>;  border: 1px solid <subject-border>;
  border-radius: 4px;  padding: 0.2rem 0.5rem;
}
```

### Home Page Card

```css
.card {
  display: grid;  grid-template-columns: 4.5rem 1fr auto;
  background: #fff;  border: 1px solid var(--sand-200);  border-radius: 16px;
  padding: 1.5rem;  gap: 1.25rem;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px -8px rgba(0,0,0,0.08); }

.card-icon { width: 4.5rem; height: 4.5rem; border-radius: 14px; font-size: 1.6rem; }
.card-body h2 { font-family: 'Newsreader', serif; font-size: 1.2rem; font-weight: 600; }
.card-body p  { font-size: 0.85rem; color: var(--ink-3); }
```

### Chapter Banner (chapter summary pages)

```css
.ch-banner {
  border-radius: 14px;  padding: 1.5rem 2rem;  margin-bottom: 1.75rem;
  display: flex;  align-items: flex-start;  justify-content: space-between;
}
.ch-title { font-family: 'Newsreader', serif; font-size: 1.6rem; font-weight: 700; }
.ch-marks-badge { font-family: 'Newsreader', serif; font-size: 2.2rem; font-weight: 700; }
```

### Callout Boxes (chapter pages)

| Class | Color | Purpose |
|-------|-------|---------|
| `.trick-box` | Amber/yellow | Exam tricks and shortcuts |
| `.mistake-box` | Red | Common mistakes to avoid |
| `.mustread` | Blue/teal | Must-read key points |
| `.num-card` | Orange | Numerical examples |

---

## Animation

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Staggered card entrance (index.html) */
.card { animation: fadeUp 0.6s ease-out both; }
.card:nth-child(n) { animation-delay: n * 0.1s; }  /* up to 10 cards */
```

---

## File Structure

```
CBSEPrep/
├── index.html              ← Hub page
├── study-plan.html
├── STYLE_GUIDE.md          ← this file
├── js/
│   ├── index.js            ← subject/chem tab switching
│   ├── mcq.js              ← shared MCQ logic (pick, score, reset)
│   ├── chapter-nav.js      ← chapter tab + overflow dropdown
│   └── tab-nav.js          ← section tab switching (showTab, showRxn)
├── physics/
│   ├── chapters.html
│   ├── formulas.html
│   ├── derivations.html
│   ├── diagrams.html       + diagrams.js
│   ├── assertion-reason.html
│   ├── units-dimensions.html
│   ├── concepts.html
│   ├── mock-tests.html     + mock-tests.js
│   ├── numericals.html     + numericals.js
│   ├── case-study.html     + case-study.js
│   └── strategy.html
└── chemistry/
    ├── physical/
    │   ├── chapters.html
    │   ├── formulas.html
    │   ├── concepts.html
    │   ├── mcq.html
    │   └── practice.html
    ├── organic/
    │   ├── chapters.html
    │   ├── formulas.html
    │   ├── concepts.html
    │   ├── mcq.html
    │   ├── practice.html
    │   ├── maps.html
    │   └── named-reactions.html
    └── inorganic/
        ├── chapters.html
        ├── formulas.html
        ├── concepts.html
        ├── mcq.html
        └── practice.html
```

---

## Shared JS Patterns

| File | Functions | Used by |
|------|-----------|---------|
| `js/mcq.js` | `pick()`, `updateScore()`, `resetCh()`, `showCh()` | all mcq.html, practice.html |
| `js/chapter-nav.js` | `showCh()`, `layoutChapterTabs()`, `toggleMoreDropdown()` | all chapters.html |
| `js/tab-nav.js` | `showTab()`, `showRxn()` | concepts.html, maps.html, named-reactions.html |
| `js/index.js` | `switchSubject()`, `switchChem()` | index.html only |

---

## Design Principles

1. **Sand-first palette** — warm off-whites and browns as the neutral base; never pure white backgrounds on the outermost layer
2. **Newsreader for all headings** — serif display type grounds the academic tone
3. **Feature colors are accent-only** — applied to borders, text, and icon backgrounds; never large filled areas
4. **80% container width** — prevents text from stretching too wide on large screens
5. **No decorative icons** — emoji used sparingly and semantically (🔥 = high-priority, ◉ = practice)
6. **Monospace for all equations** — consistent rendering for chemical formulas and math
7. **Left border accent on cards** — `border-left: 4px solid <subject-color>` is the primary subject indicator on formula/content cards
