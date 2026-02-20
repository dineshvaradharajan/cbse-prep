// Dipole — Concepts
const dipoleConcepts = [
  {
    id: 1, level: "basic",
    title: "What is an Electric Dipole?",
    body: `
      <p>An <strong>electric dipole</strong> is simply a pair of two charges that are <strong>equal in size but opposite in sign</strong>, placed a small distance apart.</p>
      <p>Think of it like a tiny bar with a <strong>+ charge</strong> on one end and a <strong>– charge</strong> on the other end.</p>
      <div class="diagram-container">
        <svg width="420" height="120" viewBox="0 0 420 120">
          <line x1="100" y1="60" x2="320" y2="60" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8,4"/>
          <circle cx="100" cy="60" r="30" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5"/>
          <text x="100" y="66" text-anchor="middle" font-size="22" font-weight="700" fill="#dc2626">–q</text>
          <circle cx="320" cy="60" r="30" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="320" y="66" text-anchor="middle" font-size="22" font-weight="700" fill="#16a34a">+q</text>
          <line x1="100" y1="105" x2="320" y2="105" stroke="#64748b" stroke-width="1.5"/>
          <line x1="100" y1="100" x2="100" y2="110" stroke="#64748b" stroke-width="1.5"/>
          <line x1="320" y1="100" x2="320" y2="110" stroke="#64748b" stroke-width="1.5"/>
          <text x="210" y="118" text-anchor="middle" font-size="14" fill="#64748b" font-weight="600">2a</text>
        </svg>
        <div class="diagram-caption">An electric dipole: two equal and opposite charges separated by distance 2a</div>
      </div>
      <p><strong>Real-life examples:</strong> A water molecule (H₂O) is a natural dipole — the oxygen end is slightly negative and the hydrogen end is slightly positive.</p>
      <div class="remember-box"><strong>Key idea:</strong> A dipole is NOT a single charge. It's always a <em>pair</em> of charges. The total charge of a dipole is always <strong>zero</strong> (–q + q = 0).</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Dipole Moment — The Most Important Quantity",
    body: `
      <p>The <strong>dipole moment</strong> tells you "how strong" a dipole is. It depends on two things:</p>
      <p>1. How much charge (q) is on each end<br>2. How far apart (2a) the charges are</p>
      <div class="formula-box">
        <span class="formula-label">Dipole Moment Formula</span>
        p = q × 2a
      </div>
      <p>where <strong>q</strong> = magnitude of one charge and <strong>2a</strong> = separation between charges.</p>
      <div class="key-point"><strong>SI Unit:</strong> Coulomb-metre (C·m)</div>
      <p><strong>Direction:</strong> The dipole moment vector always points from the <strong>negative charge to the positive charge</strong>.</p>
      <div class="diagram-container">
        <svg width="420" height="100" viewBox="0 0 420 100">
          <circle cx="80" cy="50" r="26" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="80" y="56" text-anchor="middle" font-size="18" font-weight="700" fill="#dc2626">–q</text>
          <circle cx="340" cy="50" r="26" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="340" y="56" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">+q</text>
          <line x1="120" y1="50" x2="300" y2="50" stroke="#2563eb" stroke-width="4"/>
          <polygon points="300,42 320,50 300,58" fill="#2563eb"/>
          <text x="210" y="38" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">p→</text>
        </svg>
        <div class="diagram-caption">Dipole moment direction: always from –q to +q</div>
      </div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students often say direction is from + to –. <strong>No!</strong> Dipole moment goes from <strong>negative to positive</strong>.</div>
      <p><strong>Example:</strong> If q = 4 μC = 4 × 10⁻⁶ C and 2a = 5 cm = 0.05 m, then:<br>
      p = 4 × 10⁻⁶ × 0.05 = <strong>2 × 10⁻⁷ C·m</strong></p>
      <div class="remember-box"><strong>Quick check:</strong> If the separation becomes zero, the charges sit on top of each other and cancel out — dipole moment becomes <strong>zero</strong>.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Axial Line & Equatorial Line — Two Special Directions",
    body: `
      <p>When we study the electric field of a dipole, there are two important lines to know:</p>
      <div class="diagram-container">
        <svg width="440" height="280" viewBox="0 0 440 280">
          <line x1="220" y1="20" x2="220" y2="260" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="236" y="30" font-size="13" fill="#7c3aed" font-weight="600">Equatorial line</text>
          <line x1="20" y1="140" x2="420" y2="140" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="350" y="132" font-size="13" fill="#2563eb" font-weight="600">Axial line</text>
          <circle cx="160" cy="140" r="24" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="160" y="146" text-anchor="middle" font-size="17" font-weight="700" fill="#dc2626">–q</text>
          <circle cx="280" cy="140" r="24" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="280" y="146" text-anchor="middle" font-size="17" font-weight="700" fill="#16a34a">+q</text>
          <circle cx="220" cy="140" r="4" fill="#1e293b"/>
          <text x="220" y="165" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">centre O</text>
          <circle cx="390" cy="140" r="5" fill="#2563eb"/>
          <text x="390" y="130" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">P (axial)</text>
          <circle cx="220" cy="50" r="5" fill="#7c3aed"/>
          <text x="248" y="54" font-size="13" fill="#7c3aed" font-weight="600">Q (equatorial)</text>
          <line x1="170" y1="195" x2="270" y2="195" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="270,189 284,195 270,201" fill="#f59e0b"/>
          <text x="220" y="215" text-anchor="middle" font-size="14" font-weight="700" fill="#f59e0b">p→</text>
        </svg>
        <div class="diagram-caption">Axial line passes through both charges; Equatorial line is the perpendicular bisector</div>
      </div>
      <table class="compare-table">
        <tr><th>Axial Line</th><th>Equatorial Line</th></tr>
        <tr><td>Passes <strong>through both charges</strong> (the line connecting –q and +q extended)</td><td>The <strong>perpendicular bisector</strong> of the dipole</td></tr>
        <tr><td>Also called the <strong>end-on</strong> position</td><td>Also called the <strong>broadside-on</strong> position</td></tr>
      </table>
      <div class="remember-box"><strong>Easy way to remember:</strong> "Axial = Along the axis" and "Equatorial = the Equator (middle, perpendicular)"</div>
    `
  },
  {
    id: 4, level: "intermediate",
    title: "Electric Field on the Axial Line",
    body: `
      <p>For a point P on the axial line at distance <strong>r</strong> from the centre (where r >> 2a):</p>
      <div class="formula-box">
        <span class="formula-label">Axial Field (far away)</span>
        E(axial) = (1/4πε₀) × 2p / r³
      </div>
      <div class="diagram-container">
        <svg width="440" height="150" viewBox="0 0 440 150">
          <line x1="30" y1="75" x2="410" y2="75" stroke="#e2e8f0" stroke-width="2"/>
          <circle cx="140" cy="75" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="140" y="81" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">–q</text>
          <circle cx="240" cy="75" r="22" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="240" y="81" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">+q</text>
          <circle cx="190" cy="75" r="3" fill="#1e293b"/>
          <circle cx="380" cy="75" r="6" fill="#2563eb"/>
          <text x="380" y="63" text-anchor="middle" font-size="14" fill="#2563eb" font-weight="700">P</text>
          <line x1="190" y1="115" x2="380" y2="115" stroke="#64748b" stroke-width="1.5"/>
          <line x1="190" y1="110" x2="190" y2="120" stroke="#64748b" stroke-width="1.5"/>
          <line x1="380" y1="110" x2="380" y2="120" stroke="#64748b" stroke-width="1.5"/>
          <text x="285" y="133" text-anchor="middle" font-size="14" fill="#64748b" font-weight="600">r</text>
          <line x1="380" y1="40" x2="430" y2="40" stroke="#dc2626" stroke-width="3"/>
          <polygon points="430,34 440,40 430,46" fill="#dc2626"/>
          <text x="400" y="32" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="600">E→</text>
        </svg>
        <div class="diagram-caption">On the axial line, field is along p→</div>
      </div>
      <div class="key-point"><strong>Direction:</strong> Along p→. <strong>Variation:</strong> 1/r³ — falls off much faster than a point charge (1/r²).</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "Electric Field on the Equatorial Line",
    body: `
      <p>For a point Q on the equatorial line at distance <strong>r</strong> from the centre (where r >> 2a):</p>
      <div class="formula-box">
        <span class="formula-label">Equatorial Field (far away)</span>
        E(equatorial) = (1/4πε₀) × p / r³
      </div>
      <div class="key-point"><strong>Direction:</strong> <strong>Opposite to p→</strong> (anti-parallel).</div>
      <div class="remember-box"><strong>Axial vs Equatorial:</strong> E(axial) = 2 × E(equatorial) at the same distance r. Both vary as 1/r³.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Axial vs Equatorial — Complete Comparison",
    body: `
      <table class="compare-table">
        <tr><th>Property</th><th>Axial Line</th><th>Equatorial Line</th></tr>
        <tr><td><strong>Field formula</strong></td><td>(1/4πε₀) × 2p/r³</td><td>(1/4πε₀) × p/r³</td></tr>
        <tr><td><strong>Field direction</strong></td><td>Along p→</td><td>Opposite to p→</td></tr>
        <tr><td><strong>Ratio</strong></td><td colspan="2" style="text-align:center">E(axial) = 2 × E(equatorial)</td></tr>
        <tr><td><strong>Potential</strong></td><td>Non-zero (varies as 1/r²)</td><td><strong>Zero</strong> (always!)</td></tr>
        <tr><td><strong>Variation with r</strong></td><td>1/r³</td><td>1/r³</td></tr>
      </table>
      <div class="key-point"><strong>Board exam favourite:</strong> "Potential on equatorial line is zero but field is not zero."</div>
      <div class="mistake-box"><strong>Common confusion:</strong> "If potential is zero, shouldn't field also be zero?" <strong>No!</strong> Field is the negative gradient of potential. Potential can be zero while still <em>changing</em> around that point.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Electric Potential Due to a Dipole",
    body: `
      <div class="formula-box">
        <span class="formula-label">Potential at point P (r >> 2a)</span>
        V = (1/4πε₀) × p cos θ / r²
      </div>
      <table class="compare-table">
        <tr><th>Position</th><th>θ</th><th>cos θ</th><th>Potential</th></tr>
        <tr><td>Axial (+q side)</td><td>0°</td><td>1</td><td><strong>Max positive</strong></td></tr>
        <tr><td>Equatorial</td><td>90°</td><td>0</td><td><strong>Zero</strong></td></tr>
        <tr><td>Axial (–q side)</td><td>180°</td><td>–1</td><td><strong>Max negative</strong></td></tr>
      </table>
      <div class="key-point"><strong>Potential varies as 1/r²</strong> (not 1/r³ like the field). Double the distance → potential becomes 1/4th.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Why Dipole Field Falls Off as 1/r³",
    body: `
      <p>A single charge: field ∝ <strong>1/r²</strong>. A dipole has two charges that <strong>nearly cancel each other</strong> from far away, so the leftover field drops faster — as <strong>1/r³</strong>.</p>
      <table class="compare-table">
        <tr><th>Source</th><th>Field</th><th>Potential</th></tr>
        <tr><td>Point charge</td><td>1/r²</td><td>1/r</td></tr>
        <tr><td>Dipole</td><td>1/r³</td><td>1/r²</td></tr>
      </table>
      <div class="remember-box"><strong>Memory trick:</strong> For dipole, everything has "one extra power of r" compared to a point charge.</div>
    `
  },
  {
    id: 9, level: "advanced",
    title: "Torque on a Dipole in a Uniform Electric Field",
    body: `
      <p>In a uniform field E→, the forces on +q and –q create a <strong>turning effect (torque)</strong>.</p>
      <div class="diagram-container">
        <svg width="400" height="200" viewBox="0 0 400 200">
          <line x1="30" y1="40" x2="370" y2="40" stroke="#dbeafe" stroke-width="2"/>
          <polygon points="370,36 380,40 370,44" fill="#dbeafe"/>
          <line x1="30" y1="100" x2="370" y2="100" stroke="#93c5fd" stroke-width="2"/>
          <polygon points="370,96 380,100 370,104" fill="#93c5fd"/>
          <line x1="30" y1="160" x2="370" y2="160" stroke="#dbeafe" stroke-width="2"/>
          <polygon points="370,156 380,160 370,164" fill="#dbeafe"/>
          <text x="385" y="104" font-size="16" fill="#93c5fd" font-weight="700">E→</text>
          <circle cx="130" cy="135" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="130" y="141" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">–q</text>
          <circle cx="270" cy="65" r="22" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="270" y="71" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">+q</text>
          <line x1="147" y1="122" x2="253" y2="78" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="6,3"/>
          <line x1="270" y1="65" x2="330" y2="65" stroke="#16a34a" stroke-width="3"/>
          <polygon points="330,60 342,65 330,70" fill="#16a34a"/>
          <text x="310" y="55" font-size="13" fill="#16a34a" font-weight="600">qE→</text>
          <line x1="130" y1="135" x2="68" y2="135" stroke="#dc2626" stroke-width="3"/>
          <polygon points="68,130 56,135 68,140" fill="#dc2626"/>
          <text x="85" y="125" font-size="13" fill="#dc2626" font-weight="600">–qE→</text>
        </svg>
        <div class="diagram-caption">Forces create a torque that tries to align p→ with E→</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Torque on a Dipole</span>
        τ = pE sin θ &nbsp;&nbsp;(vector: τ→ = p→ × E→)
      </div>
      <table class="compare-table">
        <tr><th>θ</th><th>sin θ</th><th>Torque</th></tr>
        <tr><td>0°</td><td>0</td><td><strong>Zero</strong> (aligned)</td></tr>
        <tr><td>90°</td><td>1</td><td><strong>Maximum = pE</strong></td></tr>
        <tr><td>180°</td><td>0</td><td><strong>Zero</strong> (anti-aligned)</td></tr>
      </table>
      <div class="key-point"><strong>Net force = zero</strong> in a uniform field! Only torque exists.</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Potential Energy of a Dipole in a Field",
    body: `
      <div class="formula-box">
        <span class="formula-label">Potential Energy</span>
        U = –pE cos θ &nbsp;&nbsp;(vector: U = –p→ · E→)
      </div>
      <div class="diagram-container">
        <svg width="440" height="160" viewBox="0 0 440 160">
          <rect x="10" y="15" width="130" height="130" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
          <text x="75" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">θ = 0° (Stable)</text>
          <line x1="40" y1="80" x2="100" y2="80" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="100,75 112,80 100,85" fill="#f59e0b"/>
          <text x="75" y="72" text-anchor="middle" font-size="11" fill="#f59e0b" font-weight="600">p→</text>
          <line x1="35" y1="100" x2="110" y2="100" stroke="#93c5fd" stroke-width="2"/>
          <polygon points="110,96 118,100 110,104" fill="#93c5fd"/>
          <text x="75" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">U = –pE</text>
          <rect x="155" y="15" width="130" height="130" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
          <text x="220" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">θ = 90°</text>
          <line x1="220" y1="95" x2="220" y2="60" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="215,60 220,48 225,60" fill="#f59e0b"/>
          <line x1="180" y1="100" x2="260" y2="100" stroke="#93c5fd" stroke-width="2"/>
          <polygon points="260,96 268,100 260,104" fill="#93c5fd"/>
          <text x="220" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">U = 0</text>
          <rect x="300" y="15" width="130" height="130" rx="10" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
          <text x="365" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">θ = 180° (Unstable)</text>
          <line x1="395" y1="80" x2="335" y2="80" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="335,75 323,80 335,85" fill="#f59e0b"/>
          <line x1="330" y1="100" x2="400" y2="100" stroke="#93c5fd" stroke-width="2"/>
          <polygon points="400,96 408,100 400,104" fill="#93c5fd"/>
          <text x="365" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">U = +pE</text>
        </svg>
        <div class="diagram-caption">Three key orientations: stable (0°), reference (90°), unstable (180°)</div>
      </div>
      <div class="remember-box"><strong>Energy difference</strong> between stable and unstable = <strong>2pE</strong>. Very common board question!</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Stable vs Unstable Equilibrium",
    body: `
      <table class="compare-table">
        <tr><th>Property</th><th>θ = 0° (Stable)</th><th>θ = 180° (Unstable)</th></tr>
        <tr><td><strong>Torque</strong></td><td>Zero</td><td>Zero</td></tr>
        <tr><td><strong>Energy</strong></td><td>–pE (minimum)</td><td>+pE (maximum)</td></tr>
        <tr><td><strong>If pushed</strong></td><td>Returns to position</td><td>Flips away</td></tr>
        <tr><td><strong>Analogy</strong></td><td>Ball in a bowl</td><td>Ball on a hill</td></tr>
      </table>
      <div class="key-point"><strong>Board exam trap:</strong> "Torque zero but energy NOT zero?" → <strong>Both 0° and 180°</strong>.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Work Done in Rotating a Dipole",
    body: `
      <div class="formula-box">
        <span class="formula-label">Work Done</span>
        W = pE (cos θ₁ – cos θ₂)
      </div>
      <table class="compare-table">
        <tr><th>Rotation</th><th>Work</th></tr>
        <tr><td>0° → 90°</td><td><strong>pE</strong></td></tr>
        <tr><td>0° → 180°</td><td><strong>2pE</strong></td></tr>
        <tr><td>90° → 180°</td><td><strong>pE</strong></td></tr>
      </table>
      <div class="mistake-box"><strong>Common mistake:</strong> It's cos θ₁ – cos θ₂ (<strong>initial minus final</strong>), not the other way around.</div>
    `
  },
  {
    id: 13, level: "advanced",
    title: "Dipole in a Non-Uniform Field",
    body: `
      <div class="diagram-container">
        <svg width="400" height="140" viewBox="0 0 400 140">
          <line x1="30" y1="30" x2="370" y2="30" stroke="#dbeafe" stroke-width="1.5"/>
          <line x1="30" y1="70" x2="370" y2="70" stroke="#93c5fd" stroke-width="2.5"/>
          <line x1="30" y1="110" x2="370" y2="110" stroke="#dbeafe" stroke-width="1.5"/>
          <polygon points="370,26 380,30 370,34" fill="#dbeafe"/>
          <polygon points="370,64 385,70 370,76" fill="#93c5fd"/>
          <polygon points="370,106 380,110 370,114" fill="#dbeafe"/>
          <text x="20" y="16" font-size="11" fill="#64748b">Weak</text>
          <text x="350" y="16" font-size="11" fill="#2563eb" font-weight="600">Strong</text>
          <circle cx="140" cy="70" r="18" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="140" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">–q</text>
          <circle cx="240" cy="70" r="18" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="240" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">+q</text>
          <line x1="260" y1="70" x2="310" y2="70" stroke="#dc2626" stroke-width="4"/>
          <polygon points="310,63 325,70 310,77" fill="#dc2626"/>
          <text x="295" y="58" font-size="13" fill="#dc2626" font-weight="700">F(net)</text>
        </svg>
        <div class="diagram-caption">Non-uniform field: net force toward stronger field region</div>
      </div>
      <table class="compare-table">
        <tr><th>Field Type</th><th>Torque?</th><th>Net Force?</th></tr>
        <tr><td>Uniform</td><td>Yes</td><td><strong>No</strong></td></tr>
        <tr><td>Non-uniform</td><td>Yes</td><td><strong>Yes</strong></td></tr>
      </table>
    `
  },
  {
    id: 14, level: "exam",
    title: "Numerical Problem-Solving — Quick Formulas",
    body: `
      <div class="formula-box" style="text-align:left; line-height: 2.2;">
        <span class="formula-label">Complete Formula Sheet</span>
        <strong>1.</strong> Dipole moment: p = q × 2a<br>
        <strong>2.</strong> Axial field: E = (1/4πε₀) × 2p/r³<br>
        <strong>3.</strong> Equatorial field: E = (1/4πε₀) × p/r³<br>
        <strong>4.</strong> Potential: V = (1/4πε₀) × p cos θ / r²<br>
        <strong>5.</strong> Torque: τ = pE sin θ<br>
        <strong>6.</strong> Energy: U = –pE cos θ<br>
        <strong>7.</strong> Work: W = pE(cos θ₁ – cos θ₂)<br>
        <strong>8.</strong> 1/4πε₀ = 9 × 10⁹ N·m²/C²
      </div>
      <div class="key-point"><strong>Solving tip:</strong> Field ∝ p/r³. If r doubles → 1/8. If r triples → 1/27. If p doubles → field doubles.</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam — Most Asked Questions on Dipole",
    body: `
      <div class="key-point" style="background:#fef3c7; border-color:#f59e0b; color:#92400e;">
        <strong>Top 5 most asked:</strong><br>
        1. Derive E on axial and equatorial line (5 marks)<br>
        2. Torque on dipole in uniform field (3 marks)<br>
        3. "Why is potential zero on equatorial line?" (1–2 marks)<br>
        4. Work done rotating dipole 0° to 180° (2 marks)<br>
        5. Stable vs unstable equilibrium (2 marks)
      </div>
      <div class="remember-box">
        <strong>One-line answers:</strong><br><br>
        <strong>Direction of p→?</strong> From – to +.<br>
        <strong>Why E(axial) = 2E(equatorial)?</strong> Component fields add on axial, partially cancel on equatorial.<br>
        <strong>Net force in uniform field?</strong> Zero.<br>
        <strong>Torque max?</strong> At θ = 90°.<br>
        <strong>Dipole from far away?</strong> Looks like zero charge, field ∝ 1/r³.
      </div>
      <div class="mistake-box"><strong>Avoid:</strong> Writing p direction as + to –, forgetting factor of 2 in axial formula, wrong sign in energy formula, saying "force = pE" in uniform field.</div>
    `
  }
];
