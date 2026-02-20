// Chapter 2: Electrostatic Potential and Capacitance — Concepts
const ch2Concepts = [
  {
    id: 1, level: "basic",
    title: "Electric Potential — What Is It?",
    body: `
      <p>Imagine you are carrying a heavy box uphill. The higher you go, the more "potential" you have to fall back down. Electric potential is the same idea, but for charges.</p>
      <p><strong>Electric potential at a point</strong> is the amount of work done to bring a <strong>unit positive charge</strong> from infinity (very far away) to that point, <em>without acceleration</em>.</p>
      <div class="formula-box">
        <span class="formula-label">Electric Potential</span>
        V = W / q₀ = kQ / r
      </div>
      <p>where k = 9 × 10⁹ N·m²/C², Q = source charge, r = distance from Q.</p>
      <div class="key-point"><strong>SI Unit:</strong> Volt (V) = Joule/Coulomb (J/C)</div>
      <div class="key-point"><strong>Scalar quantity!</strong> Potential has no direction — just a number (positive or negative). This makes it much easier to work with than electric field.</div>
      <div class="diagram-container">
        <svg width="420" height="180" viewBox="0 0 420 180">
          <circle cx="100" cy="90" r="28" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="100" y="96" text-anchor="middle" font-size="20" font-weight="700" fill="#16a34a">+Q</text>
          <circle cx="300" cy="90" r="6" fill="#2563eb"/>
          <text x="300" y="78" text-anchor="middle" font-size="14" font-weight="600" fill="#2563eb">P</text>
          <line x1="128" y1="90" x2="294" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,3"/>
          <line x1="128" y1="115" x2="294" y2="115" stroke="#64748b" stroke-width="1.5"/>
          <line x1="128" y1="110" x2="128" y2="120" stroke="#64748b" stroke-width="1.5"/>
          <line x1="294" y1="110" x2="294" y2="120" stroke="#64748b" stroke-width="1.5"/>
          <text x="211" y="132" text-anchor="middle" font-size="14" fill="#64748b" font-weight="600">r</text>
          <text x="300" y="145" text-anchor="middle" font-size="13" fill="#2563eb">V = kQ/r</text>
        </svg>
        <div class="diagram-caption">Potential at point P due to a positive charge Q at distance r</div>
      </div>
      <div class="remember-box"><strong>Remember:</strong> Positive charge creates positive potential around it. Negative charge creates negative potential. At infinity, V = 0 (our reference point).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students confuse potential (V, scalar) with potential energy (U, also scalar but involves TWO charges). V = kQ/r is for one source charge. U = kQq/r involves two charges.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Potential Difference & Work Done",
    body: `
      <p>In real life, what matters is not the potential at one point, but the <strong>difference in potential</strong> between two points. Think of it like height — a 10 m cliff matters more than whether you are 100 m or 110 m above sea level.</p>
      <div class="formula-box">
        <span class="formula-label">Potential Difference</span>
        V<sub>A</sub> − V<sub>B</sub> = W<sub>AB</sub> / q₀
      </div>
      <p>Here W<sub>AB</sub> is the work done by the external agent in moving charge q₀ from B to A.</p>
      <div class="key-point"><strong>Key idea:</strong> A positive charge naturally moves from <strong>high potential to low potential</strong> (like a ball rolling downhill). You need to do work to push it the other way.</div>
      <div class="formula-box">
        <span class="formula-label">Work Done by External Force</span>
        W<sub>ext</sub> = q₀ (V<sub>final</sub> − V<sub>initial</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Work Done by Electric Force</span>
        W<sub>elec</sub> = q₀ (V<sub>initial</sub> − V<sub>final</sub>)
      </div>
      <p><strong>Example:</strong> Move a 2 μC charge from a point at 20 V to a point at 50 V.</p>
      <p>W<sub>ext</sub> = 2 × 10⁻⁶ × (50 − 20) = 2 × 10⁻⁶ × 30 = <strong>6 × 10⁻⁵ J</strong></p>
      <div class="remember-box"><strong>CBSE Tip:</strong> If the question says "work done by the field," use W = q(V<sub>i</sub> − V<sub>f</sub>). If it says "work done against the field" or "by external agent," use W = q(V<sub>f</sub> − V<sub>i</sub>). Many students lose marks mixing these up!</div>
      <div class="key-point"><strong>Electron Volt (eV):</strong> 1 eV = 1.6 × 10⁻¹⁹ J. It is the energy gained by an electron when it moves through a potential difference of 1 V.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting the sign of the charge. If q₀ is negative (like an electron), a negative charge moves from low potential to high potential spontaneously — opposite to positive charge!</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Equipotential Surfaces — Where Potential Is Equal",
    body: `
      <p>An <strong>equipotential surface</strong> is a surface where every point has the <strong>same electric potential</strong>. If you walk along an equipotential surface, you do zero work.</p>
      <div class="key-point"><strong>Why zero work?</strong> Because W = q(V<sub>f</sub> − V<sub>i</sub>). On an equipotential surface, V<sub>f</sub> = V<sub>i</sub>, so W = 0!</div>
      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <!-- Point charge equipotential: concentric circles -->
          <circle cx="110" cy="130" r="20" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="110" y="136" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">+Q</text>
          <circle cx="110" cy="130" r="45" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <circle cx="110" cy="130" r="70" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <circle cx="110" cy="130" r="95" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="110" y="75" text-anchor="middle" font-size="11" fill="#2563eb">V₁</text>
          <text x="110" y="50" text-anchor="middle" font-size="11" fill="#2563eb">V₂</text>
          <text x="110" y="25" text-anchor="middle" font-size="11" fill="#2563eb">V₃</text>
          <text x="110" y="245" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Point charge: spherical</text>
          <!-- Uniform field: parallel lines -->
          <line x1="280" y1="30" x2="280" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="320" y1="30" x2="320" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="360" y1="30" x2="360" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="400" y1="30" x2="400" y2="230" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <!-- E arrows horizontal -->
          <line x1="275" y1="130" x2="405" y2="130" stroke="#ef4444" stroke-width="2"/>
          <polygon points="405,125 415,130 405,135" fill="#ef4444"/>
          <text x="345" y="120" text-anchor="middle" font-size="14" fill="#ef4444" font-weight="600">E →</text>
          <text x="340" y="245" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Uniform field: planar</text>
        </svg>
        <div class="diagram-caption">Equipotential surfaces: spherical for point charge, planar for uniform field</div>
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Detail</th></tr>
        <tr><td>Shape (point charge)</td><td>Concentric spheres</td></tr>
        <tr><td>Shape (uniform field)</td><td>Parallel planes perpendicular to E</td></tr>
        <tr><td>E and surface angle</td><td>Always perpendicular (90°)</td></tr>
        <tr><td>Two surfaces can cross?</td><td>Never! (would give two potentials at one point)</td></tr>
        <tr><td>Spacing near charge</td><td>Closer together (stronger field)</td></tr>
      </table>
      <div class="remember-box"><strong>Key rule:</strong> Electric field lines are always <strong>perpendicular</strong> to equipotential surfaces. If they were not, there would be a component of E along the surface, which would mean work is done moving along it — contradicting the definition!</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Relation Between Electric Field and Potential",
    body: `
      <p>Electric field and potential are closely related — if you know one, you can find the other!</p>
      <div class="formula-box">
        <span class="formula-label">E-V Relation (1D)</span>
        E = −dV/dr
      </div>
      <p>This says: the electric field is the <strong>negative rate of change</strong> of potential with distance.</p>
      <p><strong>What does the minus sign mean?</strong> It means E points in the direction of <em>decreasing</em> potential. Think of it: a ball rolls downhill, and E pushes positive charges "downhill" (from high V to low V).</p>
      <div class="formula-box">
        <span class="formula-label">For Uniform Field</span>
        E = −ΔV / Δr = (V<sub>A</sub> − V<sub>B</sub>) / d
      </div>
      <p>where d is the perpendicular distance between equipotential surfaces A and B (V<sub>A</sub> > V<sub>B</sub>).</p>
      <div class="key-point"><strong>Unit connection:</strong> E can be written as V/m (volt per metre) — which is the same as N/C. Both are valid SI units for electric field.</div>
      <p><strong>Example:</strong> Two equipotential surfaces at 40 V and 20 V are separated by 0.1 m. Find E.</p>
      <p>E = (40 − 20) / 0.1 = 20 / 0.1 = <strong>200 V/m</strong>, directed from the 40 V surface toward the 20 V surface.</p>
      <div class="remember-box"><strong>CBSE favourite:</strong> "Closer equipotential surfaces = stronger field." If surfaces are crowded together, dV/dr is large, so E is large.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting the negative sign and getting the direction of E wrong. E always points from higher potential to lower potential.</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "Potential Due to a System of Charges",
    body: `
      <p>Since potential is a <strong>scalar</strong>, finding the total potential due to multiple charges is beautifully simple — just <strong>add them up</strong> (with signs)!</p>
      <div class="formula-box">
        <span class="formula-label">Superposition of Potentials</span>
        V = k(q₁/r₁ + q₂/r₂ + q₃/r₃ + ...)
      </div>
      <p>No vector addition, no components, no angles — just simple arithmetic addition. This is the <strong>biggest advantage</strong> of working with potentials instead of fields.</p>
      <p><strong>Example:</strong> Two charges: +3 μC at origin and −2 μC at x = 0.3 m. Find V at x = 0.1 m.</p>
      <p>V = k × (3 × 10⁻⁶ / 0.1) + k × (−2 × 10⁻⁶ / 0.2)</p>
      <p>V = 9 × 10⁹ × (3 × 10⁻⁵ − 1 × 10⁻⁵) = 9 × 10⁹ × 2 × 10⁻⁵ = <strong>1.8 × 10⁵ V</strong></p>
      <div class="key-point"><strong>Where is V = 0?</strong> For two unequal opposite charges, the point where V = 0 can be found by setting k(q₁/r₁ + q₂/r₂) = 0, giving |q₁|/r₁ = |q₂|/r₂. CBSE loves asking this!</div>
      <div class="remember-box"><strong>Quick trick:</strong> For two equal and opposite charges (a dipole), V = 0 at every point on the perpendicular bisector (equatorial plane).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting to include the sign of each charge. Potential due to a negative charge is negative!</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Potential Energy of a System of Charges",
    body: `
      <p>Potential energy of a system is the total work done to <strong>assemble</strong> the charges by bringing them from infinity to their positions, one by one.</p>
      <div class="formula-box">
        <span class="formula-label">Two-Charge System</span>
        U = k q₁ q₂ / r₁₂
      </div>
      <div class="formula-box">
        <span class="formula-label">Three-Charge System</span>
        U = k(q₁q₂/r₁₂ + q₁q₃/r₁₃ + q₂q₃/r₂₃)
      </div>
      <p>For n charges, you get n(n−1)/2 pairs. So 3 charges give 3 pairs, 4 charges give 6 pairs, etc.</p>
      <div class="key-point"><strong>Sign matters!</strong> If U is positive, work was done <em>against</em> electrostatic force (like charges pushed together). If U is negative, the system is <em>bound</em> (opposite charges attracted).</div>
      <p><strong>Example:</strong> Three charges of +1 μC each at the corners of an equilateral triangle of side 10 cm.</p>
      <p>U = k × [(10⁻⁶ × 10⁻⁶)/0.1] × 3 pairs = 9 × 10⁹ × 10⁻¹² / 0.1 × 3 = <strong>0.27 J</strong></p>
      <div class="remember-box"><strong>Relation between V and U:</strong> U = qV. If you know the potential V at a point due to all other charges, the PE of charge q placed there is simply q × V.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Counting pairs incorrectly. For 4 charges at corners of a square, there are 6 pairs (not 4). Don't forget the diagonal pairs!</div>
      <table class="compare-table">
        <tr><th>Number of Charges</th><th>Number of Pairs</th></tr>
        <tr><td>2</td><td>1</td></tr>
        <tr><td>3</td><td>3</td></tr>
        <tr><td>4</td><td>6</td></tr>
        <tr><td>5</td><td>10</td></tr>
      </table>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Capacitor & Capacitance — Parallel Plate Capacitor",
    body: `
      <p>A <strong>capacitor</strong> is a device that stores electric charge and energy. The simplest type is the <strong>parallel plate capacitor</strong> — two large metal plates placed close together, separated by air or some insulating material.</p>
      <div class="formula-box">
        <span class="formula-label">Capacitance</span>
        C = Q / V
      </div>
      <p>Capacitance tells you: "How much charge can I store per volt of potential difference?" Higher C = stores more charge at the same voltage.</p>
      <div class="key-point"><strong>SI Unit:</strong> Farad (F) = Coulomb/Volt. 1 F is a huge capacitance! Typical capacitors are in μF (10⁻⁶), nF (10⁻⁹), or pF (10⁻¹²).</div>
      <div class="diagram-container">
        <svg width="420" height="220" viewBox="0 0 420 220">
          <!-- Left plate -->
          <rect x="120" y="30" width="12" height="160" rx="2" fill="#2563eb" opacity="0.8"/>
          <text x="105" y="20" text-anchor="middle" font-size="14" fill="#2563eb" font-weight="600">+Q</text>
          <!-- Right plate -->
          <rect x="288" y="30" width="12" height="160" rx="2" fill="#ef4444" opacity="0.8"/>
          <text x="315" y="20" text-anchor="middle" font-size="14" fill="#ef4444" font-weight="600">−Q</text>
          <!-- E field arrows -->
          <line x1="150" y1="60" x2="270" y2="60" stroke="#64748b" stroke-width="1.5"/>
          <polygon points="270,56 280,60 270,64" fill="#64748b"/>
          <line x1="150" y1="110" x2="270" y2="110" stroke="#64748b" stroke-width="1.5"/>
          <polygon points="270,106 280,110 270,114" fill="#64748b"/>
          <line x1="150" y1="160" x2="270" y2="160" stroke="#64748b" stroke-width="1.5"/>
          <polygon points="270,156 280,160 270,164" fill="#64748b"/>
          <text x="210" y="85" text-anchor="middle" font-size="14" fill="#64748b" font-weight="600">E</text>
          <!-- Distance marker -->
          <line x1="132" y1="205" x2="288" y2="205" stroke="#64748b" stroke-width="1.5"/>
          <line x1="132" y1="200" x2="132" y2="210" stroke="#64748b" stroke-width="1.5"/>
          <line x1="288" y1="200" x2="288" y2="210" stroke="#64748b" stroke-width="1.5"/>
          <text x="210" y="218" text-anchor="middle" font-size="14" fill="#64748b" font-weight="600">d</text>
          <!-- Area label -->
          <text x="65" y="110" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">Area = A</text>
        </svg>
        <div class="diagram-caption">Parallel plate capacitor: two plates of area A separated by distance d</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Parallel Plate Capacitance</span>
        C = ε₀A / d
      </div>
      <p>where ε₀ = 8.85 × 10⁻¹² C²/(N·m²), A = area of each plate, d = separation.</p>
      <div class="remember-box"><strong>To increase capacitance:</strong> (1) Increase plate area A, (2) Decrease separation d, (3) Insert a dielectric between plates.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> C depends ONLY on geometry (A and d) and the medium — NOT on Q or V. Changing the voltage changes the charge stored, but not the capacitance itself.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Effect of Dielectric on Capacitance",
    body: `
      <p>A <strong>dielectric</strong> is an insulating material (like glass, mica, paper, or oil) placed between capacitor plates. It dramatically increases capacitance!</p>
      <div class="formula-box">
        <span class="formula-label">With Dielectric (fully filled)</span>
        C' = KC = Kε₀A / d
      </div>
      <p>where K (or κ) is the <strong>dielectric constant</strong> of the material (always ≥ 1).</p>
      <table class="compare-table">
        <tr><th>Material</th><th>Dielectric Constant K</th></tr>
        <tr><td>Vacuum</td><td>1 (exactly)</td></tr>
        <tr><td>Air</td><td>1.0006 ≈ 1</td></tr>
        <tr><td>Paper</td><td>3.7</td></tr>
        <tr><td>Glass</td><td>5 – 10</td></tr>
        <tr><td>Mica</td><td>6</td></tr>
        <tr><td>Water</td><td>80</td></tr>
      </table>
      <div class="diagram-container">
        <svg width="420" height="200" viewBox="0 0 420 200">
          <!-- Left plate -->
          <rect x="100" y="30" width="10" height="140" rx="2" fill="#2563eb" opacity="0.8"/>
          <!-- Right plate -->
          <rect x="310" y="30" width="10" height="140" rx="2" fill="#ef4444" opacity="0.8"/>
          <!-- Dielectric slab -->
          <rect x="160" y="30" width="100" height="140" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="210" y="105" text-anchor="middle" font-size="16" fill="#b45309" font-weight="700">Dielectric K</text>
          <!-- Labels -->
          <text x="85" y="20" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">+</text>
          <text x="325" y="20" text-anchor="middle" font-size="13" fill="#ef4444" font-weight="600">−</text>
          <!-- Polarization arrows -->
          <text x="170" y="65" font-size="12" fill="#b45309">−</text>
          <text x="248" y="65" font-size="12" fill="#b45309">+</text>
          <text x="170" y="105" font-size="12" fill="#b45309">−</text>
          <text x="248" y="105" font-size="12" fill="#b45309">+</text>
          <text x="170" y="145" font-size="12" fill="#b45309">−</text>
          <text x="248" y="145" font-size="12" fill="#b45309">+</text>
          <text x="210" y="190" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Induced charges reduce internal field</text>
        </svg>
        <div class="diagram-caption">Dielectric between capacitor plates — polarization reduces the effective field</div>
      </div>
      <div class="key-point"><strong>How it works:</strong> The dielectric gets polarized — induced charges on its surfaces create a field opposing the original field. This reduces V (for same Q), so C = Q/V increases.</div>
      <table class="compare-table">
        <tr><th>Condition</th><th>Battery Connected</th><th>Battery Disconnected</th></tr>
        <tr><td>V (voltage)</td><td>Same (battery maintains it)</td><td>Decreases to V/K</td></tr>
        <tr><td>Q (charge)</td><td>Increases to KQ</td><td>Same (nowhere to go)</td></tr>
        <tr><td>C (capacitance)</td><td>Increases to KC</td><td>Increases to KC</td></tr>
        <tr><td>E (field)</td><td>Same (V/d same)</td><td>Decreases to E/K</td></tr>
        <tr><td>U (energy)</td><td>Increases to KU</td><td>Decreases to U/K</td></tr>
      </table>
      <div class="remember-box"><strong>CBSE favourite:</strong> "What happens when dielectric is inserted with battery connected vs disconnected?" This table is your best friend for such questions!</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Combination of Capacitors — Series & Parallel",
    body: `
      <p>Just like resistors, capacitors can be combined in <strong>series</strong> and <strong>parallel</strong>. But careful — the formulas are <em>swapped</em> compared to resistors!</p>
      <div class="diagram-container">
        <svg width="440" height="280" viewBox="0 0 440 280">
          <!-- Series combination -->
          <text x="220" y="18" text-anchor="middle" font-size="15" fill="#1e293b" font-weight="700">Series Combination</text>
          <!-- Wire -->
          <line x1="30" y1="55" x2="90" y2="55" stroke="#1e293b" stroke-width="2"/>
          <!-- C1 -->
          <line x1="90" y1="30" x2="90" y2="80" stroke="#2563eb" stroke-width="3"/>
          <line x1="105" y1="30" x2="105" y2="80" stroke="#2563eb" stroke-width="3"/>
          <text x="97" y="98" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="600">C₁</text>
          <line x1="105" y1="55" x2="190" y2="55" stroke="#1e293b" stroke-width="2"/>
          <!-- C2 -->
          <line x1="190" y1="30" x2="190" y2="80" stroke="#2563eb" stroke-width="3"/>
          <line x1="205" y1="30" x2="205" y2="80" stroke="#2563eb" stroke-width="3"/>
          <text x="197" y="98" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="600">C₂</text>
          <line x1="205" y1="55" x2="290" y2="55" stroke="#1e293b" stroke-width="2"/>
          <!-- C3 -->
          <line x1="290" y1="30" x2="290" y2="80" stroke="#2563eb" stroke-width="3"/>
          <line x1="305" y1="30" x2="305" y2="80" stroke="#2563eb" stroke-width="3"/>
          <text x="297" y="98" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="600">C₃</text>
          <line x1="305" y1="55" x2="410" y2="55" stroke="#1e293b" stroke-width="2"/>
          <text x="220" y="118" text-anchor="middle" font-size="12" fill="#64748b">Same charge Q on each; voltages add up</text>
          <!-- Parallel combination -->
          <text x="220" y="155" text-anchor="middle" font-size="15" fill="#1e293b" font-weight="700">Parallel Combination</text>
          <line x1="60" y1="185" x2="60" y2="260" stroke="#1e293b" stroke-width="2"/>
          <line x1="380" y1="185" x2="380" y2="260" stroke="#1e293b" stroke-width="2"/>
          <!-- C1 parallel -->
          <line x1="60" y1="185" x2="380" y2="185" stroke="#1e293b" stroke-width="2"/>
          <line x1="190" y1="175" x2="190" y2="195" stroke="#22c55e" stroke-width="3"/>
          <line x1="205" y1="175" x2="205" y2="195" stroke="#22c55e" stroke-width="3"/>
          <text x="197" y="170" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="600">C₁</text>
          <!-- C2 parallel -->
          <line x1="60" y1="222" x2="380" y2="222" stroke="#1e293b" stroke-width="2"/>
          <line x1="190" y1="212" x2="190" y2="232" stroke="#22c55e" stroke-width="3"/>
          <line x1="205" y1="212" x2="205" y2="232" stroke="#22c55e" stroke-width="3"/>
          <text x="197" y="207" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="600">C₂</text>
          <!-- C3 parallel -->
          <line x1="60" y1="260" x2="380" y2="260" stroke="#1e293b" stroke-width="2"/>
          <line x1="190" y1="250" x2="190" y2="270" stroke="#22c55e" stroke-width="3"/>
          <line x1="205" y1="250" x2="205" y2="270" stroke="#22c55e" stroke-width="3"/>
          <text x="197" y="245" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="600">C₃</text>
        </svg>
        <div class="diagram-caption">Series (top) and Parallel (bottom) combinations of capacitors</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Series (same Q, V adds)</span>
        1/C<sub>eq</sub> = 1/C₁ + 1/C₂ + 1/C₃ + ...
      </div>
      <div class="formula-box">
        <span class="formula-label">Parallel (same V, Q adds)</span>
        C<sub>eq</sub> = C₁ + C₂ + C₃ + ...
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Series</th><th>Parallel</th></tr>
        <tr><td>Charge</td><td>Same on each</td><td>Divides (Q = Q₁+Q₂+...)</td></tr>
        <tr><td>Voltage</td><td>Divides (V = V₁+V₂+...)</td><td>Same across each</td></tr>
        <tr><td>Formula</td><td>1/C = 1/C₁ + 1/C₂ + ...</td><td>C = C₁ + C₂ + ...</td></tr>
        <tr><td>Result</td><td>C<sub>eq</sub> < smallest</td><td>C<sub>eq</sub> > largest</td></tr>
      </table>
      <div class="remember-box"><strong>Quick formula for 2 capacitors in series:</strong> C<sub>eq</sub> = (C₁ × C₂) / (C₁ + C₂). This is the "product over sum" rule.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing with resistors! For resistors, series adds directly (R = R₁ + R₂). For capacitors, it is the OPPOSITE — parallel adds directly (C = C₁ + C₂). Don't mix them up!</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Energy Stored in a Capacitor",
    body: `
      <p>A charged capacitor stores energy in the <strong>electric field</strong> between its plates. This energy was supplied by the battery while charging.</p>
      <div class="formula-box">
        <span class="formula-label">Energy Stored (3 forms)</span>
        U = ½CV² = ½QV = ½Q²/C
      </div>
      <p>All three are equivalent — use whichever form has the known quantities.</p>
      <div class="key-point"><strong>Where is the energy stored?</strong> Not on the plates — in the electric field between the plates! The energy density (energy per unit volume) is:</div>
      <div class="formula-box">
        <span class="formula-label">Energy Density</span>
        u = ½ε₀E²
      </div>
      <p>This formula is universal — valid for ANY electric field, not just capacitors.</p>
      <p><strong>Example:</strong> A 4 μF capacitor charged to 200 V. Energy stored?</p>
      <p>U = ½ × 4 × 10⁻⁶ × (200)² = ½ × 4 × 10⁻⁶ × 40000 = <strong>0.08 J</strong></p>
      <table class="compare-table">
        <tr><th>Situation</th><th>What stays constant?</th><th>Energy change</th></tr>
        <tr><td>Dielectric inserted, battery ON</td><td>V constant</td><td>U = ½CV² → increases (C increases)</td></tr>
        <tr><td>Dielectric inserted, battery OFF</td><td>Q constant</td><td>U = ½Q²/C → decreases (C increases)</td></tr>
        <tr><td>Plates pulled apart, battery ON</td><td>V constant</td><td>U decreases (C decreases)</td></tr>
        <tr><td>Plates pulled apart, battery OFF</td><td>Q constant</td><td>U increases (C decreases)</td></tr>
      </table>
      <div class="remember-box"><strong>CBSE Tip:</strong> When battery is connected, use U = ½CV² (V is constant). When battery is disconnected, use U = ½Q²/C (Q is constant). Pick the formula where the constant quantity appears!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students write U = CV² (forgetting the ½). Always remember the factor of ½!</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Van de Graaff Generator",
    body: `
      <p>The <strong>Van de Graaff generator</strong> is a machine that produces very high voltages (millions of volts!) by continuously transferring charge to a large hollow metal sphere.</p>
      <div class="key-point"><strong>Principle:</strong> Based on two key ideas: (1) Charge resides on the outer surface of a hollow conductor. (2) A small charged sphere placed inside a large hollow sphere transfers ALL its charge to the outer sphere, regardless of how much charge is already there.</div>
      <div class="diagram-container">
        <svg width="400" height="320" viewBox="0 0 400 320">
          <!-- Large dome -->
          <ellipse cx="200" cy="70" rx="90" ry="50" fill="none" stroke="#2563eb" stroke-width="2.5"/>
          <rect x="185" y="70" width="30" height="170" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
          <!-- Belt -->
          <rect x="192" y="65" width="6" height="190" fill="#f59e0b" rx="3"/>
          <rect x="202" y="65" width="6" height="190" fill="#f59e0b" rx="3"/>
          <!-- Arrows on belt -->
          <polygon points="195,150 198,140 201,150" fill="#b45309"/>
          <polygon points="205,170 208,180 211,170" fill="#b45309"/>
          <!-- Bottom pulley -->
          <circle cx="200" cy="260" r="15" fill="none" stroke="#64748b" stroke-width="2"/>
          <text x="200" y="264" text-anchor="middle" font-size="10" fill="#64748b">P₂</text>
          <!-- Top pulley inside dome -->
          <circle cx="200" cy="75" r="12" fill="none" stroke="#64748b" stroke-width="2"/>
          <text x="200" y="79" text-anchor="middle" font-size="10" fill="#64748b">P₁</text>
          <!-- Spray comb bottom -->
          <line x1="140" y1="255" x2="188" y2="255" stroke="#ef4444" stroke-width="2"/>
          <text x="120" y="250" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="600">Spray</text>
          <text x="120" y="262" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="600">comb</text>
          <!-- Collecting comb top -->
          <line x1="212" y1="80" x2="260" y2="80" stroke="#22c55e" stroke-width="2"/>
          <text x="280" y="75" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="600">Collecting</text>
          <text x="280" y="87" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="600">comb</text>
          <!-- + charges on dome -->
          <text x="130" y="55" font-size="16" fill="#2563eb" font-weight="700">+</text>
          <text x="260" y="55" font-size="16" fill="#2563eb" font-weight="700">+</text>
          <text x="200" y="30" font-size="16" fill="#2563eb" font-weight="700">+</text>
          <text x="150" y="85" font-size="16" fill="#2563eb" font-weight="700">+</text>
          <text x="240" y="85" font-size="16" fill="#2563eb" font-weight="700">+</text>
          <!-- Motor -->
          <rect x="170" y="280" width="60" height="25" rx="4" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
          <text x="200" y="296" text-anchor="middle" font-size="10" fill="#64748b" font-weight="600">Motor</text>
          <!-- Labels -->
          <text x="200" y="15" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">Metal Dome</text>
          <text x="45" y="165" text-anchor="middle" font-size="11" fill="#f59e0b" font-weight="600">Insulating</text>
          <text x="45" y="178" text-anchor="middle" font-size="11" fill="#f59e0b" font-weight="600">belt</text>
        </svg>
        <div class="diagram-caption">Van de Graaff Generator — charge is sprayed onto belt, carried up, and collected on the dome</div>
      </div>
      <p><strong>How it works (step by step):</strong></p>
      <p>1. A motor drives an insulating belt over two pulleys<br>
      2. A high-voltage source sprays positive charge onto the belt at the bottom (spray comb)<br>
      3. The belt carries charge upward into the hollow dome<br>
      4. A collecting comb inside the dome picks up the charge<br>
      5. Charge flows to the outer surface of the dome (because charge always goes to the outside of a hollow conductor)<br>
      6. This process repeats, building up millions of volts!</p>
      <div class="formula-box">
        <span class="formula-label">Maximum Voltage</span>
        V<sub>max</sub> = E<sub>breakdown</sub> × R
      </div>
      <p>where R is the radius of the dome and E<sub>breakdown</sub> ≈ 3 × 10⁶ V/m for air. For R = 1 m, V<sub>max</sub> ≈ 3 × 10⁶ V = 3 MV.</p>
      <div class="key-point"><strong>Uses:</strong> Accelerating charged particles for nuclear physics experiments. The high voltage accelerates ions to very high speeds.</div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Remember the two key principles — (1) corona discharge at spray comb, (2) charge always resides on outer surface of conductor. These are the two most-asked points.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Potential Due to an Electric Dipole",
    body: `
      <p>We studied the dipole in detail in the previous chapter. Here we focus on the <strong>potential</strong> due to a dipole at a point far away (r >> 2a).</p>
      <div class="formula-box">
        <span class="formula-label">Potential Due to Dipole (general)</span>
        V = kp cos θ / r²
      </div>
      <p>where p = dipole moment, r = distance from centre, θ = angle from the dipole axis.</p>
      <div class="key-point"><strong>Special Cases:</strong></div>
      <div class="formula-box">
        <span class="formula-label">On Axial Line (θ = 0°)</span>
        V<sub>axial</sub> = kp / r²
      </div>
      <div class="formula-box">
        <span class="formula-label">On Equatorial Line (θ = 90°)</span>
        V<sub>equatorial</sub> = 0
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Point Charge</th><th>Dipole</th></tr>
        <tr><td>V varies as</td><td>1/r</td><td>1/r²</td></tr>
        <tr><td>E varies as</td><td>1/r²</td><td>1/r³</td></tr>
        <tr><td>V = 0 surface</td><td>At infinity only</td><td>Entire equatorial plane</td></tr>
      </table>
      <p><strong>Why does dipole potential fall faster (1/r²)?</strong> Because at large distances, the +q and −q potentials almost cancel out. What remains is a small difference that decreases faster than either alone.</p>
      <div class="remember-box"><strong>Memory aid:</strong> For a dipole, potential goes as 1/r² and field as 1/r³. Each is one power of r higher than for a point charge. Think: "dipole = one extra r in the denominator."</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using the dipole potential formula at short distances (where r is comparable to 2a). The formula V = kp cos θ / r² is valid ONLY when r >> 2a.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Chapter 2",
    body: `
      <p>Print this, stick it on your wall, revise daily before the exam!</p>
      <div class="formula-box">
        <span class="formula-label">Potential due to point charge</span>
        V = kQ / r = Q / (4πε₀r)
      </div>
      <div class="formula-box">
        <span class="formula-label">Work done (external)</span>
        W = q₀(V<sub>f</sub> − V<sub>i</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Potential energy (2 charges)</span>
        U = kq₁q₂ / r
      </div>
      <div class="formula-box">
        <span class="formula-label">E-V relation</span>
        E = −dV/dr
      </div>
      <div class="formula-box">
        <span class="formula-label">Dipole potential</span>
        V = kp cos θ / r²
      </div>
      <div class="formula-box">
        <span class="formula-label">Capacitance</span>
        C = Q/V
      </div>
      <div class="formula-box">
        <span class="formula-label">Parallel plate capacitor</span>
        C = ε₀A/d (without dielectric) &nbsp;&nbsp; C = Kε₀A/d (with dielectric)
      </div>
      <div class="formula-box">
        <span class="formula-label">Series combination</span>
        1/C<sub>eq</sub> = 1/C₁ + 1/C₂ + 1/C₃ + ...
      </div>
      <div class="formula-box">
        <span class="formula-label">Parallel combination</span>
        C<sub>eq</sub> = C₁ + C₂ + C₃ + ...
      </div>
      <div class="formula-box">
        <span class="formula-label">Two capacitors in series (shortcut)</span>
        C<sub>eq</sub> = C₁C₂ / (C₁ + C₂)
      </div>
      <div class="formula-box">
        <span class="formula-label">Energy stored</span>
        U = ½CV² = ½QV = Q²/(2C)
      </div>
      <div class="formula-box">
        <span class="formula-label">Energy density</span>
        u = ½ε₀E²
      </div>
      <div class="formula-box">
        <span class="formula-label">Sharing of charges</span>
        V<sub>common</sub> = (C₁V₁ + C₂V₂) / (C₁ + C₂)
      </div>
      <div class="formula-box">
        <span class="formula-label">Energy loss in sharing</span>
        ΔU = ½ × C₁C₂(V₁ − V₂)² / (C₁ + C₂)
      </div>
      <div class="key-point"><strong>Constants to remember:</strong><br>
      k = 9 × 10⁹ N·m²/C²<br>
      ε₀ = 8.85 × 10⁻¹² C²/(N·m²)<br>
      1 eV = 1.6 × 10⁻¹⁹ J</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "CBSE Numerical Tricks — Capacitor Shortcuts",
    body: `
      <p>These shortcuts will save you precious time in the board exam!</p>
      <div class="remember-box"><strong>Trick 1 — Two identical capacitors:</strong><br>
      Series: C<sub>eq</sub> = C/2<br>
      Parallel: C<sub>eq</sub> = 2C<br>
      So parallel gives 4× the capacitance of series for two identical capacitors!</div>
      <div class="remember-box"><strong>Trick 2 — n identical capacitors (each C):</strong><br>
      All in series: C<sub>eq</sub> = C/n<br>
      All in parallel: C<sub>eq</sub> = nC<br>
      Ratio: parallel/series = n²</div>
      <div class="remember-box"><strong>Trick 3 — Voltage division in series:</strong><br>
      V₁ = V × C₂/(C₁ + C₂) &nbsp;&nbsp;&nbsp; V₂ = V × C₁/(C₁ + C₂)<br>
      Notice: smaller capacitor gets LARGER voltage! (opposite to resistors)</div>
      <div class="remember-box"><strong>Trick 4 — Charge sharing (two capacitors connected):</strong><br>
      Common voltage: V<sub>c</sub> = (C₁V₁ + C₂V₂)/(C₁ + C₂)<br>
      Energy is ALWAYS lost (converted to heat in connecting wire). Energy can never increase by sharing!</div>
      <div class="remember-box"><strong>Trick 5 — Dielectric inserted in part of capacitor:</strong><br>
      If dielectric fills thickness t out of d:<br>
      C = ε₀A / (d − t + t/K)<br>
      If it fills half the gap: C = ε₀A / (d/2 + d/(2K)) = 2Kε₀A / (d(K + 1))</div>
      <div class="remember-box"><strong>Trick 6 — Metal slab (conductor) of thickness t inserted:</strong><br>
      C = ε₀A / (d − t)<br>
      Metal slab is like K = ∞, so t/K → 0. Effective gap reduces!</div>
      <div class="remember-box"><strong>Trick 7 — Energy stored ratio:</strong><br>
      Series capacitors: U₁/U₂ = C₂/C₁ (inverse — smaller C stores more energy)<br>
      Parallel capacitors: U₁/U₂ = C₁/C₂ (direct — larger C stores more energy)</div>
      <div class="mistake-box"><strong>Exam alert:</strong> In series, charge is same → use U = Q²/(2C). So smaller C has more energy. In parallel, voltage is same → use U = ½CV². So larger C has more energy. Don't mix these up!</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam Most Asked Questions — Chapter 2",
    body: `
      <p>These are the question types that appear again and again in CBSE board exams. Master these and you are set!</p>
      <div class="key-point"><strong>Type 1 — Derive C = ε₀A/d (3-5 marks)</strong><br>
      Steps: (1) σ = Q/A, (2) E = σ/ε₀ for parallel plates, (3) V = Ed = σd/ε₀ = Qd/(ε₀A), (4) C = Q/V = ε₀A/d. Practice this derivation — it comes almost every year!</div>
      <div class="key-point"><strong>Type 2 — Effect of dielectric (3 marks)</strong><br>
      "A parallel plate capacitor with air has capacitance C. A dielectric of K is inserted. Find new C, Q, V, E, U with battery connected / disconnected." Use the table from Concept 8.</div>
      <div class="key-point"><strong>Type 3 — Combination numericals (3-5 marks)</strong><br>
      Given a network of capacitors, find equivalent capacitance and charge/energy on each. Strategy: Identify series and parallel groups, simplify step by step.</div>
      <div class="key-point"><strong>Type 4 — Equipotential surface properties (2-3 marks)</strong><br>
      "Why are equipotential surfaces perpendicular to E?" — Because if E had a component along the surface, work would be done moving a charge along it, contradicting V = constant.</div>
      <div class="key-point"><strong>Type 5 — Potential due to system of charges (3 marks)</strong><br>
      "Find the point where V = 0 between two charges." Set up kq₁/r₁ + kq₂/r₂ = 0 and solve for position.</div>
      <div class="key-point"><strong>Type 6 — Van de Graaff generator (3 marks)</strong><br>
      "Draw a labelled diagram and explain the principle." Draw the dome, belt, pulleys, spray comb, collecting comb. Mention: corona discharge and charge on outer surface of hollow conductor.</div>
      <div class="key-point"><strong>Type 7 — Sharing of charges (2-3 marks)</strong><br>
      Two capacitors charged to different voltages are connected. Find common potential and energy loss.</div>
      <table class="compare-table">
        <tr><th>Marks</th><th>What to Write</th></tr>
        <tr><td>1 mark</td><td>Formula + answer, or one property/definition</td></tr>
        <tr><td>2 marks</td><td>Formula + substitution + answer with unit</td></tr>
        <tr><td>3 marks</td><td>Diagram + derivation OR numerical with steps</td></tr>
        <tr><td>5 marks</td><td>Full derivation + diagram + special cases or numerical</td></tr>
      </table>
      <div class="remember-box"><strong>Final tip:</strong> Always write the formula first, then substitute values, then simplify. Even if your final answer is wrong, you get marks for the formula and method. NEVER skip steps in board exams!</div>
    `
  }
];
