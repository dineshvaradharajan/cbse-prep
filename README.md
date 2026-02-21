# CBSE Class 12 Exam Preparation

A comprehensive, fully static revision platform for CBSE Class 12 Physics and Chemistry — live at **[ncert.myailab.space](https://ncert.myailab.space)**.

---

## What It Is

A structured study tool built specifically for CBSE board exam preparation. Every page is focused on one job: help a student score more marks. No accounts, no tracking, no paywall — just content.

---

## Subjects Covered

### Physics — 14 Chapters

| # | Chapter |
|---|---------|
| 1 | Electric Charges & Fields (+ Dipole sub-topic) |
| 2 | Electrostatic Potential & Capacitance |
| 3 | Current Electricity |
| 4 | Moving Charges & Magnetism |
| 5 | Magnetism & Matter |
| 6 | Electromagnetic Induction |
| 7 | Alternating Current |
| 8 | Electromagnetic Waves |
| 9 | Ray Optics & Optical Instruments |
| 10 | Wave Optics |
| 11 | Dual Nature of Radiation & Matter |
| 12 | Atoms |
| 13 | Nuclei |
| 14 | Semiconductor Electronics |

### Chemistry — 3 Branches

**Physical Chemistry** — Equilibrium, Electrochemistry, Chemical Kinetics, and more

**Organic Chemistry** — Haloalkanes & Haloarenes, Alcohols, Aldehydes & Ketones, Amines, Biomolecules

**Inorganic Chemistry** — d & f Block Elements, Coordination Compounds

---

## Features

### Concepts Engine
Interactive slide-style concept cards for every chapter. Each card contains:
- Plain-English explanations (not textbook copy-paste)
- Inline SVG diagrams
- Formula boxes with monospace highlighting
- Key-point callouts (blue accent)
- Remember boxes (green — memory tricks)
- Common-mistake boxes (red — what examiners penalise)
- Comparison tables
- A progress tracker — visited concepts are marked, active concept is always highlighted

### MCQ Practice
Chapter-wise multiple choice questions with:
- Instant answer reveal with explanations
- Question navigation dots (unanswered / answered / correct / wrong states)
- Score card on submission
- Progress bar
- Per-chapter localStorage persistence — progress survives page refresh

### Mock Tests
Full-length timed mock papers modelled on the CBSE pattern:
- Timer with warning when time is low
- Question navigation panel (answered / skipped / active states)
- Section-wise question grouping
- Detailed result screen — score, percentage, correct/wrong/skipped counts
- Full review with per-question explanation after submission

### Diagrams
Every major CBSE Physics diagram as clean SVG, plus 3D animated canvas versions for key concepts:
- Coulomb's law, dipole field lines, Gaussian surfaces
- Ray optics (convex/concave lenses and mirrors)
- Wavefronts (spherical, plane, cylindrical) — interactive 3D canvas, draggable
- YDSE interference pattern
- LCR circuit, photoelectric effect, Bohr model, nuclear fission
- Toggle between 2D static and 3D animated per-card, or all at once

### Case Studies
Passage-based questions in the CBSE case-study format. Each case study has:
- A reading passage with context
- 4–5 MCQs tied to the passage
- Study mode (show answer anytime) and Test mode (answers hidden)
- Score overlay on submission

### Assertion-Reason MCQs
The four-option assertion-reason format used in CBSE boards:
- Both A and R true, R is correct explanation
- Both A and R true, R is NOT the correct explanation
- A true, R false
- A false, R true

### Derivations
Step-by-step derivations for all high-weightage topics with:
- Numbered steps
- Inline formulas
- Diagrams where needed
- Mark allocation per step

### Numericals
Solved numerical problems with full working:
- Given → Formula → Substitution → Answer structure
- Boxed final answers with units
- Difficulty tagging

### Formulas Reference
Quick-access formula sheets formatted as printable reference cards:
- Organised by chapter
- Monospace formula display with colour coding
- Corner marks for print layout

### Strategy Guide
Exam answer-writing strategy covering:
- The universal rule for every 2, 3, and 5-mark question
- Annotated model answers showing exactly how marks are distributed
- Time management table by section
- Common examiner behaviour (what they check vs. what they ignore)
- High-probability 5-mark topics

### Units & Dimensions
Consolidated reference for:
- SI units for all physical quantities
- Dimensional formulae
- Common conversions

### Study Plan
A structured revision roadmap:
- Week-by-week topic prioritisation
- High-yield vs. low-yield topic classification
- Last-week sprint checklist

---

## Project Structure

```
CBSEPrep/
├── index.html                    # Homepage — subject hub with feature cards
├── study-plan.html               # Revision roadmap
├── style-guide.html              # Design system reference
│
├── physics/
│   ├── chapters.html             # Concept cards + MCQ engine
│   ├── concepts.html             # Standalone concept explorer
│   ├── diagrams.html             # SVG + 3D animated diagrams
│   ├── formulas.html             # Formula reference sheets
│   ├── derivations.html          # Step-by-step derivations
│   ├── numericals.html           # Solved numericals
│   ├── mock-tests.html           # Full-length mock papers
│   ├── case-study.html           # Case study questions
│   ├── assertion-reason.html     # Assertion-reason MCQs
│   ├── units-dimensions.html     # Units & dimensional formulae
│   ├── strategy.html             # Exam strategy & model answers
│   ├── mock-tests.js             # Mock test data loader
│   └── *.js                      # Page-specific scripts
│
├── chemistry/
│   ├── physical/                 # Physical chemistry pages
│   ├── organic/                  # Organic chemistry pages (+ named-reactions, maps)
│   └── inorganic/                # Inorganic chemistry pages
│
├── data/
│   ├── ch1-charges-fields/       # concepts.js + questions.js
│   ├── ch2-potential-capacitance/
│   ├── ch3-current-electricity/
│   ├── ch4-moving-charges/
│   ├── ch5-magnetism-matter/
│   ├── ch6-electromagnetic-induction/
│   ├── ac/
│   ├── ch8-em-waves/
│   ├── ch9-ray-optics/
│   ├── ch10-wave-optics/
│   ├── ch11-dual-nature/
│   ├── ch12-atoms/
│   ├── ch13-nuclei/
│   ├── ch14-semiconductors/
│   ├── dipole/
│   ├── mock-tests/               # Full mock paper data
│   └── registry.js               # Topic-to-data mapping
│
├── engine/
│   └── question-paper-engine.js  # Core MCQ + concept rendering engine
│
├── css/
│   ├── base.css                  # Design tokens, palette, shared components
│   ├── chapter.css               # Chapter navigation, chapter cards
│   ├── mcq.css                   # MCQ cards, scoring, question dots
│   ├── concepts.css              # Concept cards, formula boxes, key-points
│   ├── formulas.css              # Formula sheet layout
│   ├── diagrams.css              # Diagram grid, 3D overlay
│   ├── mock-tests.css            # Mock test UI
│   └── strategy.css              # Strategy page layout
│
└── js/
    ├── index.js                  # Subject/tab switching, localStorage
    ├── chapter-nav.js            # Overflow tab dropdown
    ├── mcq.js                    # MCQ interaction
    └── tab-nav.js                # Generic tab helper
```

---

## Design System

All styles use a unified token system defined in `css/base.css`.

**Colour Palette**

| Token | Value | Use |
|---|---|---|
| `--sand-50` … `--sand-900` | Warm off-white to dark brown | Backgrounds, borders, text |
| `--ink` | `#1c1917` | Primary text |
| `--ink-2` | `#44403c` | Body text |
| `--ink-3` | `#78716c` | Labels, captions |
| `--hot` / `--hot-bg` | Red accent | High-priority alerts |

**Per-Feature Accent Colours**

| Feature | Colour |
|---|---|
| Formulas | Gold `#b8860b` |
| Diagrams | Purple `#7c3aed` |
| Derivations | Red `#dc2626` |
| Numericals | Orange `#ea580c` |
| Case Studies | Pink `#be185d` |
| Mock Tests | Indigo `#4338ca` |
| Assertion-Reason | Green `#059669` |
| Units | Teal `#0f766e` |
| Strategy | Blue `#2563eb` |

**Typography**
- Headlines: `Newsreader` (variable serif, Google Fonts)
- Body / UI: `Lato` (sans-serif, Google Fonts)

---

## Content Scale

| | Count |
|---|---|
| Physics chapters | 14 + 1 sub-topic |
| Chemistry branches | 3 |
| Concept data files | 17 |
| Concept cards (est.) | 150+ |
| MCQs | 700+ |
| Mock test questions | 200+ |
| Animated diagrams | 30+ |
| HTML pages | 33 |
| CSS files | 8 |

---

## Deployment

Hosted on **Cloudflare Pages** at `ncert.myailab.space`.

Deployed via Wrangler CLI — no build step needed (pure static files):

```bash
wrangler pages deploy . --project-name cbse-prep --branch main
```

GitHub Actions workflow in `.github/workflows/deploy.yml` auto-deploys on every push to `main`.

---

## Running Locally

No build tools required. Open any HTML file directly in a browser, or serve with any static server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

---

## License

MIT License — see [LICENSE](LICENSE).

Built for CBSE Class 12 revision · © 2026 Dinesh Varadharajan
