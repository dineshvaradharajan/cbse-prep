/**
 * Matrix notation → KaTeX LaTeX converter
 *
 * Handles two common plain-text matrix formats found in question data:
 *   1.  [a b; c d]    → $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$
 *   2.  [[a, b], [c, d]] → $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$
 *   3.  |a b; c d|    → $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$  (determinants)
 *
 * Call  formatMatrices(text)  before inserting into the DOM, then run
 * renderMathInElement() on the container so KaTeX picks up the $ delimiters.
 */

function formatMatrices(s) {
  if (!s) return s;

  // ── 1. Nested-array form: [[a, b], [c, d]] ──
  // Matches [[ ... ]] where inner content has ], [ separators
  s = s.replace(/\[\[([^\[\]]*(?:\],\s*\[[^\[\]]*)*)\]\]/g, function(match) {
    // Extract rows: split by '], ['
    var inner = match.slice(2, -2); // remove outer [[ ]]
    var rows = inner.split(/\],\s*\[/);
    var latex = rows.map(function(row) {
      // Each row has comma-separated values
      return row.split(',').map(function(v) { return v.trim(); }).join(' & ');
    }).join(' \\\\ ');
    return '$\\begin{bmatrix} ' + latex + ' \\end{bmatrix}$';
  });

  // ── 2. Semicolon form (determinant): |a b; c d| ──
  // Must have at least one semicolon inside | ... |
  s = s.replace(/\|([^|]*?;[^|]*?)\|/g, function(match, inner) {
    var rows = inner.split(';');
    var latex = rows.map(function(row) {
      return row.trim().split(/\s+/).join(' & ');
    }).join(' \\\\ ');
    return '$\\begin{vmatrix} ' + latex + ' \\end{vmatrix}$';
  });

  // ── 3. Semicolon form (bracket matrix): [a b; c d] ──
  // Must have at least one semicolon inside [ ... ]
  // Avoid matching things already converted (no $ before [)
  s = s.replace(/(?<!\$)\[([^\[\]]*?;[^\[\]]*?)\](?!\$)/g, function(match, inner) {
    var rows = inner.split(';');
    var latex = rows.map(function(row) {
      return row.trim().split(/\s+/).join(' & ');
    }).join(' \\\\ ');
    return '$\\begin{bmatrix} ' + latex + ' \\end{bmatrix}$';
  });

  return s;
}

/**
 * Render KaTeX on a DOM element (after dynamic content insertion).
 * Requires katex.min.js and auto-render.min.js to be loaded.
 */
function renderMath(el) {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(el || document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}
