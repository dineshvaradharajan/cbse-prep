// Atoms — Concepts
const ch12Concepts = [
  {
    id: 1, level: "basic",
    title: "Thomson's Model of the Atom (Plum Pudding Model)",
    body: `
      <p>J.J. Thomson proposed the <strong>first model of the atom</strong> in 1903, soon after discovering the electron (1897). He knew atoms are electrically neutral and contain electrons, so he imagined:</p>
      <div class="key-point"><strong>Thomson's Model:</strong><br>
        1. The atom is a <strong>sphere of uniform positive charge</strong><br>
        2. <strong>Electrons are embedded</strong> inside this positive charge like plums in a pudding (or seeds in a watermelon)<br>
        3. The total negative charge of electrons equals the total positive charge, making the atom neutral<br>
        4. The atom has a radius of about 10<sup>-10</sup> m
      </div>
      <div class="diagram-container">
        <svg width="360" height="240" viewBox="0 0 360 240">
          <!-- Positive sphere -->
          <circle cx="180" cy="120" r="90" fill="#fde68a" stroke="#f59e0b" stroke-width="2" opacity="0.7"/>
          <!-- + signs distributed -->
          <text x="130" y="80" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <text x="200" y="70" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <text x="160" y="110" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <text x="220" y="115" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <text x="140" y="150" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <text x="210" y="155" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <text x="175" y="175" font-size="16" fill="#dc2626" font-weight="700">+</text>
          <!-- Electrons (blue dots) -->
          <circle cx="150" cy="90" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="150" y="94" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">e-</text>
          <circle cx="210" cy="90" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="210" y="94" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">e-</text>
          <circle cx="170" cy="135" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="170" y="139" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">e-</text>
          <circle cx="195" cy="160" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="195" y="164" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">e-</text>
          <circle cx="230" cy="135" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="230" y="139" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">e-</text>
          <!-- Labels -->
          <text x="180" y="230" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Thomson's "Plum Pudding" Model</text>
          <line x1="90" y1="120" x2="60" y2="120" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="10" y="124" font-size="10" fill="#f59e0b" font-weight="600">+ve sphere</text>
          <line x1="238" y1="135" x2="280" y2="135" stroke="#2563eb" stroke-width="1.5"/>
          <text x="285" y="139" font-size="10" fill="#2563eb" font-weight="600">electrons</text>
        </svg>
        <div class="diagram-caption">Thomson model: electrons embedded in a uniform positive charge sphere</div>
      </div>
      <div class="remember-box"><strong>Why it failed:</strong> Thomson's model could not explain the results of Rutherford's alpha-particle scattering experiment. It predicted that alpha particles should pass through with only minor deflections, but Rutherford observed that some were deflected by very large angles and some even bounced back!</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students sometimes write that Thomson discovered the atom. He discovered the <strong>electron</strong> (1897) and proposed a <strong>model</strong> of the atom. These are different things!</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Rutherford's Alpha-Particle Scattering Experiment",
    body: `
      <p>In 1911, Geiger and Marsden performed this experiment under <strong>Rutherford's supervision</strong>. They bombarded a thin gold foil (about 2.1 x 10<sup>-7</sup> m thick) with alpha particles (He nuclei, charge +2e) from a radioactive source.</p>
      <div class="key-point"><strong>Experimental Setup:</strong><br>
        1. Source: Radioactive <sup>214</sup>Bi emitting alpha particles<br>
        2. Collimator: Lead bricks with a narrow slit to get a focused beam<br>
        3. Target: Very thin gold foil (~2.1 x 10<sup>-7</sup> m)<br>
        4. Detector: ZnS (zinc sulphide) screen that produces a flash when hit by alpha particles<br>
        5. Movable detector to measure scattering at different angles
      </div>
      <div class="diagram-container">
        <svg width="460" height="280" viewBox="0 0 460 280">
          <defs>
            <marker id="arrowA" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrowB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Source -->
          <rect x="20" y="120" width="50" height="40" rx="4" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="45" y="145" text-anchor="middle" font-size="9" fill="#92400e" font-weight="700">Source</text>
          <!-- Lead collimator -->
          <rect x="85" y="115" width="15" height="18" fill="#6b7280"/>
          <rect x="85" y="148" width="15" height="18" fill="#6b7280"/>
          <text x="92" y="108" text-anchor="middle" font-size="8" fill="#6b7280">Lead</text>
          <!-- Alpha beam (straight through) -->
          <line x1="100" y1="140" x2="220" y2="140" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowA)"/>
          <text x="160" y="133" text-anchor="middle" font-size="9" fill="#dc2626">alpha beam</text>
          <!-- Gold foil -->
          <rect x="225" y="60" width="4" height="160" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>
          <text x="227" y="50" text-anchor="middle" font-size="9" fill="#d97706" font-weight="600">Gold foil</text>
          <!-- Nucleus in foil -->
          <circle cx="227" cy="140" r="5" fill="#dc2626"/>
          <!-- Most pass straight -->
          <line x1="229" y1="140" x2="380" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrowA)"/>
          <text x="350" y="133" font-size="8" fill="#dc2626">Most: straight</text>
          <!-- Small angle deflection -->
          <line x1="229" y1="140" x2="370" y2="100" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowB)"/>
          <text x="365" y="90" font-size="8" fill="#2563eb">Some: small angle</text>
          <!-- Large angle deflection -->
          <line x1="229" y1="140" x2="320" y2="60" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>
          <circle cx="320" cy="60" r="3" fill="#8b5cf6"/>
          <text x="340" y="55" font-size="8" fill="#8b5cf6">Few: large angle</text>
          <!-- Bounce back -->
          <line x1="224" y1="140" x2="140" y2="80" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,3"/>
          <circle cx="140" cy="80" r="3" fill="#059669"/>
          <text x="140" y="72" text-anchor="middle" font-size="8" fill="#059669">Very few: bounce back!</text>
          <!-- ZnS screen arc -->
          <path d="M 380 60 A 160 160 0 0 1 380 220" stroke="#64748b" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
          <text x="400" y="200" font-size="9" fill="#64748b">ZnS screen</text>
          <!-- Angle label -->
          <path d="M 250 140 A 20 20 0 0 0 246 128" stroke="#8b5cf6" stroke-width="1.5" fill="none"/>
          <text x="258" y="128" font-size="9" fill="#8b5cf6">θ</text>
        </svg>
        <div class="diagram-caption">Rutherford scattering: most alpha particles pass through; a few deflect at large angles</div>
      </div>
      <div class="key-point"><strong>Key Observations:</strong><br>
        1. <strong>Most alpha particles</strong> passed straight through with no or very small deflection<br>
        2. About <strong>1 in 8000</strong> deflected by more than 90 degrees<br>
        3. A very small number <strong>bounced back</strong> (deflected ~ 180 degrees)
      </div>
      <div class="formula-box">
        <span class="formula-label">Rutherford Scattering Formula</span>
        N(θ) is proportional to 1/sin<sup>4</sup>(θ/2)
      </div>
      <div class="remember-box"><strong>CBSE Favourite:</strong> "It was as if you fired a 15-inch shell at tissue paper and it came back and hit you" - Rutherford's famous quote about the bounce-back observation. This proved the atom has a tiny, dense, positive core (the nucleus).</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Rutherford's Nuclear Model & Its Limitations",
    body: `
      <p>Based on the scattering experiment, Rutherford proposed his <strong>nuclear model</strong> of the atom:</p>
      <div class="key-point"><strong>Rutherford's Nuclear Model:</strong><br>
        1. The atom has a tiny, dense, positively charged <strong>nucleus</strong> at the centre<br>
        2. The nucleus contains nearly all the mass of the atom<br>
        3. Electrons revolve around the nucleus in circular orbits (like planets around the Sun)<br>
        4. The size of the nucleus (~10<sup>-15</sup> m) is about 10,000 times smaller than the atom (~10<sup>-10</sup> m)<br>
        5. Most of the atom is <strong>empty space</strong> (that's why most alpha particles pass through)
      </div>
      <div class="formula-box">
        <span class="formula-label">Distance of Closest Approach (d)</span>
        d = (1/4πε₀) x (2Ze<sup>2</sup>) / ((1/2)mv<sup>2</sup>)<br><br>
        d = 2kZe<sup>2</sup> / E<sub>k</sub> &nbsp;&nbsp; where E<sub>k</sub> = kinetic energy of alpha particle
      </div>
      <p>At closest approach, the entire kinetic energy converts to electrostatic potential energy. This gives an <strong>upper estimate</strong> of nuclear size.</p>
      <div class="formula-box">
        <span class="formula-label">Impact Parameter (b)</span>
        b = (Ze<sup>2</sup> cot(θ/2)) / (4πε₀ x (1/2)mv<sup>2</sup>)
      </div>
      <p><strong>Impact parameter</strong> is the perpendicular distance of the initial velocity vector from the nucleus. Smaller b means larger scattering angle θ.</p>
      <div class="mistake-box"><strong>Limitations of Rutherford's Model:</strong><br>
        1. <strong>Stability problem:</strong> An accelerating electron (circular motion) should continuously radiate electromagnetic energy (by classical EM theory), lose energy, spiral inward, and collapse into the nucleus in ~10<sup>-8</sup> seconds. But atoms are stable!<br>
        2. <strong>Spectrum problem:</strong> A spiraling electron should emit a continuous spectrum. But atoms emit discrete line spectra!<br>
        These two failures led Bohr to propose his model.
      </div>
      <div class="remember-box"><strong>Remember:</strong> Rutherford's model is correct about the nucleus but fails for electrons. Bohr fixed the electron problem by adding quantum conditions.</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Bohr's Postulates for the Hydrogen Atom",
    body: `
      <p>In 1913, Niels Bohr modified Rutherford's model by adding <strong>three revolutionary postulates</strong> that mixed classical physics with early quantum ideas:</p>
      <div class="key-point"><strong>Bohr's Three Postulates:</strong><br><br>
        <strong>Postulate 1 (Stationary Orbits):</strong><br>
        Electrons revolve around the nucleus in certain <strong>fixed circular orbits</strong> called stationary orbits or allowed orbits. While in these orbits, they do NOT radiate energy.<br><br>
        <strong>Postulate 2 (Quantization of Angular Momentum):</strong><br>
        The angular momentum of the electron in a stationary orbit is an <strong>integer multiple</strong> of h/2pi:<br>
        L = mvr = nh/2π &nbsp;&nbsp; (n = 1, 2, 3, ...)<br><br>
        <strong>Postulate 3 (Frequency Condition):</strong><br>
        When an electron <strong>jumps</strong> from a higher orbit (E<sub>2</sub>) to a lower orbit (E<sub>1</sub>), it emits a photon of frequency:<br>
        h*nu = E<sub>2</sub> - E<sub>1</sub><br>
        (and absorbs a photon when jumping from lower to higher orbit)
      </div>
      <div class="remember-box"><strong>Key Insight:</strong> Bohr's genius was combining:<br>
        - Classical mechanics (F = ma for circular orbit)<br>
        - Coulomb's law (electrostatic force)<br>
        - Quantum condition (angular momentum quantized)<br>
        This gave him specific allowed orbits with specific energies, explaining the discrete spectrum!
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students write L = nh. The correct formula is L = n(h/2pi) = n*ℏ. The factor of 2pi is critical. Also note: n starts from 1, not 0.</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Bohr Model — Radius, Velocity & Energy (Derivation Summary)",
    body: `
      <p>By combining the Coulomb force with centripetal force and the quantization condition, Bohr derived the following for a <strong>hydrogen-like atom</strong> (single electron, nuclear charge Ze):</p>
      <div class="formula-box">
        <span class="formula-label">Step 1: Balance of Forces</span>
        kZe<sup>2</sup>/r<sup>2</sup> = mv<sup>2</sup>/r &nbsp;&nbsp; (Coulomb force = centripetal force)
      </div>
      <div class="formula-box">
        <span class="formula-label">Step 2: Quantization Condition</span>
        mvr = nh/2π
      </div>
      <p>Solving these two equations simultaneously gives:</p>
      <div class="formula-box">
        <span class="formula-label">Radius of n-th Orbit</span>
        r<sub>n</sub> = (n<sup>2</sup>/Z) x a<sub>0</sub> &nbsp;&nbsp; where a<sub>0</sub> = 0.529 Angstrom = 0.529 x 10<sup>-10</sup> m<br><br>
        a<sub>0</sub> = h<sup>2</sup> / (4π²mkZe<sup>2</sup>) &nbsp;&nbsp; (Bohr radius)
      </div>
      <div class="formula-box">
        <span class="formula-label">Velocity in n-th Orbit</span>
        v<sub>n</sub> = (Z/n) x v<sub>1</sub> &nbsp;&nbsp; where v<sub>1</sub> = 2.18 x 10<sup>6</sup> m/s<br><br>
        v<sub>1</sub> = e<sup>2</sup>/(2*ε₀*h) = c/137
      </div>
      <div class="formula-box">
        <span class="formula-label">Total Energy in n-th Orbit</span>
        E<sub>n</sub> = -(Z<sup>2</sup>/n<sup>2</sup>) x 13.6 eV<br><br>
        KE = -E<sub>n</sub> = +13.6 Z<sup>2</sup>/n<sup>2</sup> eV &nbsp;&nbsp;(always positive)<br>
        PE = 2E<sub>n</sub> = -27.2 Z<sup>2</sup>/n<sup>2</sup> eV &nbsp;&nbsp;(always negative)<br>
        Total E = KE + PE = -13.6 Z<sup>2</sup>/n<sup>2</sup> eV
      </div>
      <div class="key-point"><strong>Proportionality Summary:</strong><br>
        r is proportional to n<sup>2</sup>/Z<br>
        v is proportional to Z/n<br>
        E is proportional to Z<sup>2</sup>/n<sup>2</sup><br>
        KE = -E (magnitude of total energy)<br>
        PE = 2E<br>
        |PE| = 2 x KE (always!)
      </div>
      <div class="remember-box"><strong>CBSE Memory Aid:</strong> For hydrogen (Z=1):<br>
        - r<sub>1</sub> = 0.529 Angstrom, r<sub>2</sub> = 4 x 0.529, r<sub>3</sub> = 9 x 0.529 ...<br>
        - E<sub>1</sub> = -13.6 eV, E<sub>2</sub> = -3.4 eV, E<sub>3</sub> = -1.51 eV, E<sub>4</sub> = -0.85 eV<br>
        These values appear directly in CBSE numericals!
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Forgetting the negative sign in energy. Total energy is ALWAYS negative for a bound electron. If you get a positive total energy, the electron is free (ionized). Also: PE = 2E means PE is twice the total energy (including sign), NOT twice the KE.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Bohr Model — Energy Level Diagram for Hydrogen",
    body: `
      <p>The energy level diagram is one of the <strong>most important diagrams</strong> in this chapter. It shows the allowed energy states of the hydrogen atom.</p>
      <div class="diagram-container">
        <svg width="440" height="380" viewBox="0 0 440 380">
          <!-- Energy levels -->
          <!-- n=1 -->
          <line x1="120" y1="340" x2="320" y2="340" stroke="#dc2626" stroke-width="2.5"/>
          <text x="100" y="344" text-anchor="end" font-size="12" fill="#dc2626" font-weight="700">n=1</text>
          <text x="330" y="344" font-size="11" fill="#64748b">E<tspan font-size="8" dy="2">1</tspan><tspan dy="-2"> = -13.6 eV</tspan></text>
          <!-- n=2 -->
          <line x1="120" y1="240" x2="320" y2="240" stroke="#2563eb" stroke-width="2"/>
          <text x="100" y="244" text-anchor="end" font-size="12" fill="#2563eb" font-weight="700">n=2</text>
          <text x="330" y="244" font-size="11" fill="#64748b">E<tspan font-size="8" dy="2">2</tspan><tspan dy="-2"> = -3.4 eV</tspan></text>
          <!-- n=3 -->
          <line x1="120" y1="180" x2="320" y2="180" stroke="#059669" stroke-width="2"/>
          <text x="100" y="184" text-anchor="end" font-size="12" fill="#059669" font-weight="700">n=3</text>
          <text x="330" y="184" font-size="11" fill="#64748b">E<tspan font-size="8" dy="2">3</tspan><tspan dy="-2"> = -1.51 eV</tspan></text>
          <!-- n=4 -->
          <line x1="120" y1="140" x2="320" y2="140" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="100" y="144" text-anchor="end" font-size="12" fill="#8b5cf6" font-weight="700">n=4</text>
          <text x="330" y="144" font-size="11" fill="#64748b">E<tspan font-size="8" dy="2">4</tspan><tspan dy="-2"> = -0.85 eV</tspan></text>
          <!-- n=5 -->
          <line x1="120" y1="112" x2="320" y2="112" stroke="#a855f7" stroke-width="1.5"/>
          <text x="100" y="116" text-anchor="end" font-size="12" fill="#a855f7" font-weight="600">n=5</text>
          <text x="330" y="116" font-size="11" fill="#64748b">E<tspan font-size="8" dy="2">5</tspan><tspan dy="-2"> = -0.54 eV</tspan></text>
          <!-- n=infinity -->
          <line x1="120" y1="60" x2="320" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="6,4"/>
          <text x="100" y="64" text-anchor="end" font-size="12" fill="#64748b" font-weight="600">n=inf</text>
          <text x="330" y="64" font-size="11" fill="#64748b">E = 0 eV (free)</text>
          <!-- Transition arrows -->
          <!-- Lyman: to n=1 -->
          <line x1="160" y1="238" x2="160" y2="342" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrowDown)"/>
          <line x1="170" y1="178" x2="170" y2="342" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrowDown)"/>
          <text x="140" y="290" font-size="9" fill="#dc2626" transform="rotate(-90,140,290)">Lyman (UV)</text>
          <!-- Balmer: to n=2 -->
          <line x1="220" y1="178" x2="220" y2="242" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowDown)"/>
          <line x1="230" y1="138" x2="230" y2="242" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowDown)"/>
          <text x="245" y="210" font-size="9" fill="#2563eb">Balmer (Visible)</text>
          <!-- Paschen: to n=3 -->
          <line x1="280" y1="138" x2="280" y2="182" stroke="#059669" stroke-width="1.5" marker-end="url(#arrowDown)"/>
          <line x1="290" y1="110" x2="290" y2="182" stroke="#059669" stroke-width="1.5" marker-end="url(#arrowDown)"/>
          <text x="300" y="160" font-size="9" fill="#059669">Paschen (IR)</text>
          <!-- Title -->
          <text x="220" y="25" text-anchor="middle" font-size="14" fill="#1e293b" font-weight="700">Hydrogen Energy Level Diagram</text>
          <text x="220" y="42" text-anchor="middle" font-size="10" fill="#64748b">Arrows show emission transitions</text>
          <defs>
            <marker id="arrowDown" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto"><path d="M0,0 L8,0 L4,6" fill="#64748b"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Energy levels of hydrogen atom with emission transitions for different spectral series</div>
      </div>
      <div class="key-point"><strong>Key Features of the Energy Level Diagram:</strong><br>
        1. Energy levels get <strong>closer together</strong> as n increases (they converge to 0 eV)<br>
        2. The <strong>ground state</strong> (n=1) has the lowest (most negative) energy: -13.6 eV<br>
        3. At n = infinity, E = 0 and the electron is <strong>free</strong> (ionized)<br>
        4. The energy needed to ionize a ground-state hydrogen atom = <strong>13.6 eV</strong>
      </div>
      <div class="formula-box">
        <span class="formula-label">Number of Possible Emission Lines</span>
        From level n: Number of lines = n(n-1)/2
      </div>
      <p>Example: If excited to n=4, possible lines = 4 x 3/2 = <strong>6 lines</strong> (4->3, 4->2, 4->1, 3->2, 3->1, 2->1).</p>
      <div class="remember-box"><strong>Quick Values to Memorize:</strong><br>
        E<sub>1</sub> = -13.6 eV, E<sub>2</sub> = -3.4 eV, E<sub>3</sub> = -1.51 eV, E<sub>4</sub> = -0.85 eV<br>
        Ionization energy from ground state = 13.6 eV<br>
        First excitation energy = E<sub>2</sub> - E<sub>1</sub> = -3.4 - (-13.6) = 10.2 eV
      </div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Hydrogen Spectrum — Spectral Series",
    body: `
      <p>When hydrogen atoms are excited, electrons jump to higher levels and then fall back, emitting photons. The <strong>wavelength of the emitted photon</strong> depends on which two levels are involved.</p>
      <div class="formula-box">
        <span class="formula-label">Rydberg Formula (MOST IMPORTANT)</span>
        1/lambda = R [ 1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup> ] &nbsp;&nbsp; where n<sub>2</sub> > n<sub>1</sub><br><br>
        R = 1.097 x 10<sup>7</sup> m<sup>-1</sup> (Rydberg constant)
      </div>
      <table class="compare-table">
        <tr><th>Series</th><th>Lower Level (n<sub>1</sub>)</th><th>Upper Level (n<sub>2</sub>)</th><th>Region</th></tr>
        <tr><td><strong>Lyman</strong></td><td>1</td><td>2, 3, 4, ...</td><td>Ultraviolet (UV)</td></tr>
        <tr><td><strong>Balmer</strong></td><td>2</td><td>3, 4, 5, ...</td><td><strong>Visible</strong></td></tr>
        <tr><td><strong>Paschen</strong></td><td>3</td><td>4, 5, 6, ...</td><td>Infrared (IR)</td></tr>
        <tr><td><strong>Brackett</strong></td><td>4</td><td>5, 6, 7, ...</td><td>Infrared (IR)</td></tr>
        <tr><td><strong>Pfund</strong></td><td>5</td><td>6, 7, 8, ...</td><td>Infrared (IR)</td></tr>
      </table>
      <div class="key-point"><strong>Key Facts:</strong><br>
        1. <strong>Lyman series:</strong> Transitions TO n=1 (ground state) -- highest energy, UV region<br>
        2. <strong>Balmer series:</strong> Transitions TO n=2 -- the ONLY visible series!<br>
        3. <strong>Paschen, Brackett, Pfund:</strong> Transitions TO n=3, 4, 5 -- all infrared<br>
        4. The first line (smallest energy gap) in each series is called the <strong>alpha line</strong><br>
        5. The last line (n<sub>2</sub> = infinity) is called the <strong>series limit</strong>
      </div>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Spectrum bar for Balmer -->
          <text x="220" y="20" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="700">Balmer Series (Visible Spectrum)</text>
          <!-- Spectrum band -->
          <rect x="40" y="40" width="360" height="40" rx="6" fill="url(#visibleGrad)" stroke="#94a3b8" stroke-width="1"/>
          <!-- Line markers -->
          <line x1="340" y1="38" x2="340" y2="82" stroke="#dc2626" stroke-width="2.5"/>
          <text x="340" y="100" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">H-alpha</text>
          <text x="340" y="112" text-anchor="middle" font-size="8" fill="#dc2626">656 nm</text>
          <line x1="260" y1="38" x2="260" y2="82" stroke="#22c55e" stroke-width="2.5"/>
          <text x="260" y="100" text-anchor="middle" font-size="9" fill="#059669" font-weight="600">H-beta</text>
          <text x="260" y="112" text-anchor="middle" font-size="8" fill="#059669">486 nm</text>
          <line x1="200" y1="38" x2="200" y2="82" stroke="#2563eb" stroke-width="2.5"/>
          <text x="200" y="100" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="600">H-gamma</text>
          <text x="200" y="112" text-anchor="middle" font-size="8" fill="#2563eb">434 nm</text>
          <line x1="160" y1="38" x2="160" y2="82" stroke="#7c3aed" stroke-width="2.5"/>
          <text x="160" y="100" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="600">H-delta</text>
          <text x="160" y="112" text-anchor="middle" font-size="8" fill="#7c3aed">410 nm</text>
          <!-- Series limit -->
          <line x1="98" y1="38" x2="98" y2="82" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="98" y="100" text-anchor="middle" font-size="9" fill="#64748b">Limit</text>
          <text x="98" y="112" text-anchor="middle" font-size="8" fill="#64748b">365 nm</text>
          <!-- Labels -->
          <text x="60" y="150" font-size="10" fill="#7c3aed">Violet</text>
          <text x="360" y="150" font-size="10" fill="#dc2626">Red</text>
          <line x1="70" y1="130" x2="360" y2="130" stroke="#64748b" stroke-width="1" marker-end="url(#arrowSpec)"/>
          <text x="215" y="145" text-anchor="middle" font-size="9" fill="#64748b">Increasing wavelength --></text>
          <defs>
            <linearGradient id="visibleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#7c3aed"/>
              <stop offset="25%" stop-color="#2563eb"/>
              <stop offset="50%" stop-color="#22c55e"/>
              <stop offset="75%" stop-color="#eab308"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <marker id="arrowSpec" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#64748b"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">The Balmer series lines in the visible spectrum of hydrogen</div>
      </div>
      <div class="remember-box"><strong>Mnemonic for series order:</strong> <strong>L</strong>azy <strong>B</strong>oys <strong>P</strong>lay <strong>B</strong>asket<strong>b</strong>all <strong>P</strong>oorly = <strong>L</strong>yman, <strong>B</strong>almer, <strong>P</strong>aschen, <strong>B</strong>rackett, <strong>P</strong>fund<br>
        Lower level: 1, 2, 3, 4, 5 respectively</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Confusing which series is visible. ONLY the <strong>Balmer series</strong> (to n=2) falls in the visible region. Lyman is UV, Paschen and beyond are IR. This is asked almost every year!</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Bohr Model for Hydrogen-like Ions (He+, Li2+, etc.)",
    body: `
      <p>Bohr's model works perfectly for any <strong>one-electron system</strong>: H (Z=1), He<sup>+</sup> (Z=2), Li<sup>2+</sup> (Z=3), Be<sup>3+</sup> (Z=4), etc. The formulas just need a factor of Z:</p>
      <div class="formula-box">
        <span class="formula-label">General Formulas (Hydrogen-like, atomic number Z)</span>
        r<sub>n</sub> = (n<sup>2</sup>/Z) x 0.529 Angstrom<br><br>
        v<sub>n</sub> = (Z/n) x 2.18 x 10<sup>6</sup> m/s<br><br>
        E<sub>n</sub> = -(Z<sup>2</sup>/n<sup>2</sup>) x 13.6 eV<br><br>
        1/lambda = RZ<sup>2</sup> [1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>]
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>H (Z=1)</th><th>He<sup>+</sup> (Z=2)</th><th>Li<sup>2+</sup> (Z=3)</th></tr>
        <tr><td>Ground state radius</td><td>0.529 A</td><td>0.529/2 = 0.265 A</td><td>0.529/3 = 0.176 A</td></tr>
        <tr><td>Ground state energy</td><td>-13.6 eV</td><td>-54.4 eV</td><td>-122.4 eV</td></tr>
        <tr><td>Ionization energy</td><td>13.6 eV</td><td>54.4 eV</td><td>122.4 eV</td></tr>
        <tr><td>v<sub>1</sub></td><td>2.18 x 10<sup>6</sup> m/s</td><td>4.36 x 10<sup>6</sup> m/s</td><td>6.54 x 10<sup>6</sup> m/s</td></tr>
      </table>
      <div class="key-point"><strong>Important Exam Pattern:</strong> CBSE loves asking "which orbit of He<sup>+</sup> has the same radius as the 2nd orbit of hydrogen?"<br>
        Solution: r = n<sup>2</sup>/Z x a<sub>0</sub>. For H(n=2): r = 4a<sub>0</sub>. For He<sup>+</sup>(Z=2): r = n<sup>2</sup>/2 x a<sub>0</sub> = 4a<sub>0</sub> gives n<sup>2</sup> = 8 -- not an integer! So no orbit matches exactly.<br>
        But: "same energy as H at n=2" means E = -3.4 eV, so -4 x 13.6/n<sup>2</sup> = -3.4 gives n = 4.
      </div>
      <div class="remember-box"><strong>Quick Comparison:</strong> Higher Z means:<br>
        - Smaller orbits (more tightly bound)<br>
        - Higher velocities<br>
        - More negative energies (harder to ionize)</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Bohr's Model Orbits — Visual Representation",
    body: `
      <p>Let's visualize what Bohr's allowed orbits actually look like. The key point is that each orbit has a <strong>specific radius</strong> proportional to n<sup>2</sup>.</p>
      <div class="diagram-container">
        <svg width="440" height="340" viewBox="0 0 440 340">
          <!-- Nucleus -->
          <circle cx="220" cy="170" r="8" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
          <text x="220" y="174" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">+Ze</text>
          <!-- n=1 orbit -->
          <circle cx="220" cy="170" r="30" fill="none" stroke="#dc2626" stroke-width="2"/>
          <circle cx="250" cy="170" r="5" fill="#2563eb"/>
          <text x="255" y="155" font-size="10" fill="#dc2626" font-weight="600">n=1</text>
          <text x="255" y="145" font-size="8" fill="#64748b">r = a<tspan font-size="6" dy="2">0</tspan></text>
          <!-- n=2 orbit (4x radius) -->
          <circle cx="220" cy="170" r="70" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="6,3"/>
          <circle cx="290" cy="170" r="5" fill="#2563eb"/>
          <text x="295" y="155" font-size="10" fill="#2563eb" font-weight="600">n=2</text>
          <text x="295" y="145" font-size="8" fill="#64748b">r = 4a<tspan font-size="6" dy="2">0</tspan></text>
          <!-- n=3 orbit (9x radius) -->
          <circle cx="220" cy="170" r="120" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="8,4"/>
          <circle cx="340" cy="170" r="5" fill="#2563eb"/>
          <text x="345" y="155" font-size="10" fill="#059669" font-weight="600">n=3</text>
          <text x="345" y="145" font-size="8" fill="#64748b">r = 9a<tspan font-size="6" dy="2">0</tspan></text>
          <!-- n=4 orbit (not to scale, compressed) -->
          <circle cx="220" cy="170" r="155" fill="none" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="10,5"/>
          <text x="380" y="130" font-size="10" fill="#8b5cf6" font-weight="600">n=4</text>
          <text x="380" y="120" font-size="8" fill="#64748b">r = 16a<tspan font-size="6" dy="2">0</tspan></text>
          <!-- Arrow showing electron jumping -->
          <path d="M 275 135 C 260 100, 230 95, 235 140" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrowOrange)"/>
          <text x="240" y="90" text-anchor="middle" font-size="9" fill="#f59e0b" font-weight="600">Photon emitted</text>
          <text x="240" y="102" text-anchor="middle" font-size="8" fill="#f59e0b">n=2 -> n=1</text>
          <!-- Title -->
          <text x="220" y="20" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="700">Bohr's Allowed Orbits (Hydrogen)</text>
          <text x="220" y="338" text-anchor="middle" font-size="10" fill="#64748b">Radii scale as n<tspan font-size="7" dy="-4">2</tspan><tspan dy="4">: 1 : 4 : 9 : 16</tspan></text>
          <defs>
            <marker id="arrowOrange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Bohr orbits for hydrogen: radius increases as n-squared</div>
      </div>
      <div class="key-point"><strong>Orbit Properties at a Glance:</strong><br>
        - The spacing between orbits <strong>increases</strong> rapidly (1, 4, 9, 16, 25, ...)<br>
        - The electron spends most time in the outermost occupied orbit<br>
        - Each orbit has a definite energy: more negative = more tightly bound = closer to nucleus<br>
        - Time period of revolution: T is proportional to n<sup>3</sup>/Z<sup>2</sup>
      </div>
      <div class="formula-box">
        <span class="formula-label">Other Useful Relations</span>
        Time period: T<sub>n</sub> is proportional to n<sup>3</sup>/Z<sup>2</sup><br>
        Frequency of revolution: f<sub>n</sub> is proportional to Z<sup>2</sup>/n<sup>3</sup><br>
        Current due to electron: I = ef = eZ<sup>2</sup>/(n<sup>3</sup> x T<sub>0</sub>)
      </div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Limitations of Bohr's Model & Introduction to Quantum Mechanics",
    body: `
      <p>While Bohr's model was a breakthrough, it has significant <strong>limitations</strong>:</p>
      <div class="key-point"><strong>What Bohr's Model CANNOT Explain:</strong><br>
        1. <strong>Multi-electron atoms:</strong> Fails for He, Li, and all atoms with more than one electron<br>
        2. <strong>Fine structure:</strong> High-resolution spectroscopy shows each spectral line is actually multiple closely-spaced lines - Bohr cannot explain this<br>
        3. <strong>Zeeman effect:</strong> Splitting of spectral lines in a magnetic field<br>
        4. <strong>Stark effect:</strong> Splitting of spectral lines in an electric field<br>
        5. <strong>Relative intensities:</strong> Cannot predict why some spectral lines are brighter than others<br>
        6. <strong>Why angular momentum is quantized:</strong> Bohr just postulated it without explanation
      </div>
      <div class="key-point"><strong>What Bohr's Model DID Get Right:</strong><br>
        1. Correctly predicted the hydrogen spectrum wavelengths<br>
        2. Correctly predicted ionization energy of hydrogen (13.6 eV)<br>
        3. Introduced the concept of quantized energy levels<br>
        4. Explained the Rydberg formula from first principles<br>
        5. Works perfectly for all hydrogen-like (single-electron) ions
      </div>
      <div class="remember-box"><strong>The Full Quantum Picture (for awareness):</strong><br>
        - De Broglie (1924) explained WHY angular momentum is quantized: the electron has a wave nature, and only those orbits survive where the circumference = whole number of wavelengths (2πr = nλ)<br>
        - Schrodinger (1926) replaced Bohr orbits with probability clouds (orbitals)<br>
        - Modern quantum mechanics gives exact results for hydrogen and approximate results for all atoms
      </div>
      <div class="formula-box">
        <span class="formula-label">De Broglie Explanation of Bohr's Quantization</span>
        2πr = nλ &nbsp;&nbsp; (standing wave condition)<br>
        lambda = h/mv &nbsp;&nbsp; (de Broglie wavelength)<br>
        Therefore: 2πr = nh/(mv) --> mvr = nh/2π
      </div>
      <p>This beautifully derives Bohr's angular momentum condition from the wave nature of the electron!</p>
      <div class="mistake-box"><strong>CBSE Caution:</strong> If asked "state the limitations of Bohr's model," DO NOT write "it is wrong." Write the specific limitations: fails for multi-electron atoms, cannot explain fine structure, Zeeman effect, Stark effect, and relative intensities of spectral lines.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Numerical Problem-Solving: Energy, Wavelength & Transitions",
    body: `
      <p>Let's master the typical numerical problems from this chapter with a systematic approach.</p>
      <div class="key-point"><strong>Type 1: Finding Wavelength of Emitted/Absorbed Photon</strong><br>
        Given: Transition from n<sub>2</sub> to n<sub>1</sub><br>
        Use: 1/lambda = R [1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>] where R = 1.097 x 10<sup>7</sup> m<sup>-1</sup><br>
        Or: E = 13.6 [1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>] eV, then lambda = hc/E
      </div>
      <p><strong>Worked Example 1:</strong> Find the wavelength of the first Balmer line (H-alpha).</p>
      <p>n<sub>1</sub> = 2, n<sub>2</sub> = 3<br>
      1/lambda = 1.097 x 10<sup>7</sup> [1/4 - 1/9] = 1.097 x 10<sup>7</sup> x 5/36 = 1.524 x 10<sup>6</sup> m<sup>-1</sup><br>
      lambda = 6.56 x 10<sup>-7</sup> m = <strong>656 nm</strong> (red light)</p>

      <div class="key-point"><strong>Type 2: Finding Maximum/Minimum Wavelength in a Series</strong><br>
        - <strong>Maximum wavelength</strong> (minimum energy): First line of the series (n<sub>2</sub> = n<sub>1</sub> + 1)<br>
        - <strong>Minimum wavelength</strong> (maximum energy): Series limit (n<sub>2</sub> = infinity)
      </div>
      <p><strong>Worked Example 2:</strong> Find the shortest wavelength in the Lyman series.</p>
      <p>n<sub>1</sub> = 1, n<sub>2</sub> = infinity<br>
      1/lambda = R [1/1 - 0] = R = 1.097 x 10<sup>7</sup><br>
      lambda = 1/R = 91.2 nm (deep UV)</p>

      <div class="key-point"><strong>Type 3: Excitation and Ionization</strong><br>
        - Excitation energy from n<sub>1</sub> to n<sub>2</sub>: Delta_E = 13.6(1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>) eV<br>
        - Ionization energy from level n: E<sub>ion</sub> = 13.6/n<sup>2</sup> eV<br>
        - First excitation energy = 10.2 eV (n=1 to n=2)<br>
        - Second excitation energy = 12.09 eV (n=1 to n=3)
      </div>
      <div class="formula-box">
        <span class="formula-label">Quick Reference Energies for H</span>
        E(1->2) = 10.2 eV &nbsp;|&nbsp; E(1->3) = 12.09 eV &nbsp;|&nbsp; E(1->4) = 12.75 eV<br>
        E(2->3) = 1.89 eV &nbsp;|&nbsp; E(2->4) = 2.55 eV &nbsp;|&nbsp; E(3->4) = 0.66 eV<br>
        E(1->inf) = 13.6 eV (ionization)
      </div>
      <div class="remember-box"><strong>Pro Tip:</strong> For finding energy of a transition, use E = 13.6(1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>) eV directly. Then convert to wavelength using lambda(nm) = 1240/E(eV). The number <strong>1240</strong> comes from hc in eV-nm units and is your best friend in this chapter!</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Distance of Closest Approach & Alpha Scattering Problems",
    body: `
      <p>These are high-weightage numericals in CBSE. The concept is simple: as an alpha particle approaches a gold nucleus, its kinetic energy converts to electrostatic potential energy.</p>
      <div class="formula-box">
        <span class="formula-label">Distance of Closest Approach</span>
        At closest approach: KE = PE<br>
        (1/2)mv<sup>2</sup> = kZe x 2e / d<br><br>
        d = 2kZe<sup>2</sup> / E<sub>k</sub> = (1/4πε₀) x 4Ze<sup>2</sup> / E<sub>k</sub><br><br>
        where Z = atomic number of target (79 for gold),<br>
        e = 1.6 x 10<sup>-19</sup> C, k = 9 x 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>
      </div>
      <p><strong>Worked Example:</strong> An alpha particle with KE = 5 MeV approaches a gold nucleus (Z=79). Find the distance of closest approach.</p>
      <p>E<sub>k</sub> = 5 x 10<sup>6</sup> x 1.6 x 10<sup>-19</sup> = 8 x 10<sup>-13</sup> J<br>
      d = (9 x 10<sup>9</sup>) x 4 x 79 x (1.6 x 10<sup>-19</sup>)<sup>2</sup> / (8 x 10<sup>-13</sup>)<br>
      d = (9 x 10<sup>9</sup>) x 4 x 79 x 2.56 x 10<sup>-38</sup> / (8 x 10<sup>-13</sup>)<br>
      d = 9 x 4 x 79 x 2.56 x 10<sup>-29</sup> / 8 x 10<sup>-13</sup><br>
      d = 7284.48 x 10<sup>-29</sup> / 8 x 10<sup>-13</sup><br>
      d approx 9.1 x 10<sup>-14</sup> m ~ <strong>10<sup>-14</sup> m</strong></p>
      <div class="key-point"><strong>What This Tells Us:</strong><br>
        - d gives an <strong>upper limit</strong> for the nuclear size (actual nucleus is smaller)<br>
        - Nuclear radius is of the order 10<sup>-15</sup> m (femtometres)<br>
        - Atomic radius is ~10<sup>-10</sup> m, so nucleus is about 10,000 times smaller<br>
        - If KE of alpha particle is doubled, d is halved (d is proportional to 1/E<sub>k</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Impact Parameter and Scattering Angle</span>
        b = (Ze<sup>2</sup> / 4πε₀ x E<sub>k</sub>) x cot(θ/2)<br><br>
        Key relationships:<br>
        - b = 0 --> θ = 180 degrees (head-on, bounces back)<br>
        - b large --> θ approximately 0 degrees (passes far, no deflection)<br>
        - b is proportional to cot(θ/2)
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Confusing the charge of alpha particle. Alpha particle charge = +2e (not +e). So the product of charges in Coulomb's law is Z x e x 2e = 2Ze<sup>2</sup>. Don't forget the factor of 2!</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Atoms",
    body: `
      <p>All formulas you need for the exam, organized by topic:</p>
      <div class="formula-box">
        <span class="formula-label">Rutherford Scattering</span>
        Distance of closest approach: d = 2kZe<sup>2</sup>/E<sub>k</sub> = (1/4πε₀)(4Ze<sup>2</sup>/E<sub>k</sub>)<br>
        Impact parameter: b = (kZe<sup>2</sup>/E<sub>k</sub>) cot(θ/2)<br>
        N(θ) proportional to 1/sin<sup>4</sup>(θ/2)<br>
        N(θ) proportional to Z<sup>2</sup>, proportional to 1/E<sub>k</sub><sup>2</sup>, proportional to t (foil thickness)
      </div>
      <div class="formula-box">
        <span class="formula-label">Bohr Model (Hydrogen-like atom, charge Z)</span>
        Quantization: mvr = nh/2π &nbsp;&nbsp; (n = 1, 2, 3, ...)<br><br>
        Radius: r<sub>n</sub> = n<sup>2</sup>a<sub>0</sub>/Z &nbsp;&nbsp; (a<sub>0</sub> = 0.529 Angstrom)<br>
        Velocity: v<sub>n</sub> = Zv<sub>1</sub>/n &nbsp;&nbsp; (v<sub>1</sub> = 2.18 x 10<sup>6</sup> m/s)<br>
        Energy: E<sub>n</sub> = -13.6 Z<sup>2</sup>/n<sup>2</sup> eV<br><br>
        KE<sub>n</sub> = +13.6 Z<sup>2</sup>/n<sup>2</sup> eV = -E<sub>n</sub><br>
        PE<sub>n</sub> = -27.2 Z<sup>2</sup>/n<sup>2</sup> eV = 2E<sub>n</sub><br>
        |PE| = 2 x KE (always)
      </div>
      <div class="formula-box">
        <span class="formula-label">Hydrogen Spectrum</span>
        1/lambda = RZ<sup>2</sup>[1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>] &nbsp;&nbsp; R = 1.097 x 10<sup>7</sup> m<sup>-1</sup><br><br>
        Photon energy: E = hv = hc/lambda = 13.6Z<sup>2</sup>[1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>] eV<br>
        Shortcut: lambda(in nm) = 1240/E(in eV)<br><br>
        Number of emission lines from level n: n(n-1)/2
      </div>
      <div class="formula-box">
        <span class="formula-label">Spectral Series (lower level)</span>
        Lyman: n<sub>1</sub>=1 (UV) | Balmer: n<sub>1</sub>=2 (Visible) | Paschen: n<sub>1</sub>=3 (IR)<br>
        Brackett: n<sub>1</sub>=4 (IR) | Pfund: n<sub>1</sub>=5 (IR)
      </div>
      <div class="formula-box">
        <span class="formula-label">Constants to Remember</span>
        R = 1.097 x 10<sup>7</sup> m<sup>-1</sup> (Rydberg constant)<br>
        a<sub>0</sub> = 0.529 Angstrom = 0.529 x 10<sup>-10</sup> m (Bohr radius)<br>
        E<sub>1</sub> = -13.6 eV (ground state energy of hydrogen)<br>
        v<sub>1</sub> = 2.18 x 10<sup>6</sup> m/s (speed of electron in ground state)<br>
        hc = 1240 eV-nm (use for lambda-energy conversion)
      </div>
      <div class="formula-box">
        <span class="formula-label">Proportionality Summary</span>
        r proportional to n<sup>2</sup>/Z | v proportional to Z/n | E proportional to Z<sup>2</sup>/n<sup>2</sup><br>
        T (time period) proportional to n<sup>3</sup>/Z<sup>2</sup> | f (orbital frequency) proportional to Z<sup>2</sup>/n<sup>3</sup>
      </div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Common Mistakes & Exam Traps — Atoms",
    body: `
      <p>CBSE examiners use specific traps in this chapter. Here's how to avoid them:</p>
      <div class="mistake-box"><strong>Trap 1: Forgetting the sign of energy</strong><br>
        Total energy is ALWAYS negative for bound electrons. If your answer gives positive total energy, you've made an error (or the electron is free/ionized).<br>
        Remember: KE is positive, PE is negative, Total E = KE + PE is negative, and |PE| = 2 x KE.
      </div>
      <div class="mistake-box"><strong>Trap 2: Confusing n<sub>1</sub> and n<sub>2</sub> in Rydberg formula</strong><br>
        1/lambda = R[1/n<sub>1</sub><sup>2</sup> - 1/n<sub>2</sub><sup>2</sup>] requires n<sub>2</sub> > n<sub>1</sub> ALWAYS.<br>
        n<sub>1</sub> is the lower level (where electron lands), n<sub>2</sub> is the upper level (where it starts).
      </div>
      <div class="mistake-box"><strong>Trap 3: Alpha particle charge = 2e, not e</strong><br>
        In closest approach problems, the product of charges is Z x e x 2e = 2Ze<sup>2</sup>. Missing the factor 2 halves your answer.
      </div>
      <div class="mistake-box"><strong>Trap 4: Confusing "excitation energy" with "energy of level"</strong><br>
        - Energy of 2nd level = E<sub>2</sub> = -3.4 eV<br>
        - First excitation energy = E<sub>2</sub> - E<sub>1</sub> = -3.4 - (-13.6) = +10.2 eV<br>
        These are different things!
      </div>
      <div class="mistake-box"><strong>Trap 5: Visible series</strong><br>
        Only BALMER series (to n=2) is in the visible range. Not Lyman, not Paschen. This is asked directly or indirectly almost every year.
      </div>
      <div class="mistake-box"><strong>Trap 6: Maximum and minimum wavelength</strong><br>
        - Maximum wavelength = minimum energy = FIRST line (smallest jump)<br>
        - Minimum wavelength = maximum energy = SERIES LIMIT (n<sub>2</sub> = infinity)<br>
        Students often swap these.
      </div>
      <div class="key-point"><strong>Trap 7: Number of spectral lines</strong><br>
        If an atom is excited to level n, the MAXIMUM number of emission lines = n(n-1)/2.<br>
        From n=4: 4x3/2 = 6 lines. From n=5: 5x4/2 = 10 lines.<br>
        But if a SINGLE atom is excited to n, it can only emit lines in ONE downward path (e.g., 4->3->2->1 = 3 lines). The formula n(n-1)/2 applies to a COLLECTION of atoms.
      </div>
      <div class="remember-box"><strong>Last-Minute Checks:</strong><br>
        - Did you use Z<sup>2</sup> in energy formula? (not Z)<br>
        - Did you use the correct series? (Lyman=1, Balmer=2, Paschen=3)<br>
        - Are your units consistent? (eV vs J, nm vs m)<br>
        - For He<sup>+</sup>, Z=2 (not Z=1). For Li<sup>2+</sup>, Z=3.<br>
        - lambda = 1240/E only works when E is in eV and lambda in nm.
      </div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Previous Year Patterns & High-Yield Questions",
    body: `
      <p>Here are the <strong>most frequently tested</strong> question types from CBSE board exams for the Atoms chapter:</p>
      <div class="key-point"><strong>3-Mark / 5-Mark Questions (High Frequency):</strong><br>
        1. "State Bohr's postulates. Derive the expression for radius/energy of nth orbit." (appears almost every year)<br>
        2. "Describe Rutherford's alpha scattering experiment. What were the observations and conclusions?"<br>
        3. "Using Bohr's model, derive the expression for the frequency/wavelength of radiation emitted when an electron transitions from n<sub>2</sub> to n<sub>1</sub>."<br>
        4. "Draw the energy level diagram of hydrogen. Show Lyman, Balmer, and Paschen series."
      </div>
      <div class="key-point"><strong>1-Mark / 2-Mark Questions (Very Common):</strong><br>
        1. "What is the ratio of radii of 1st and 3rd orbits?" (Answer: 1:9)<br>
        2. "Find the shortest wavelength in the Balmer series." (Answer: 365 nm)<br>
        3. "What is the ionization energy of hydrogen from the second excited state?" (Answer: 1.51 eV, since second excited state = n=3)<br>
        4. "Which spectral series of hydrogen lies in the visible region?" (Answer: Balmer)<br>
        5. "How many spectral lines are possible when atom de-excites from n=4?" (Answer: 6)
      </div>
      <div class="remember-box"><strong>Tricky Language CBSE Uses:</strong><br>
        - "Ground state" = n=1<br>
        - "First excited state" = n=2<br>
        - "Second excited state" = n=3<br>
        - "Third excited state" = n=4<br>
        Don't confuse "first excited state" with n=1. The word "excited" means it has moved UP from the ground state.
      </div>
      <div class="key-point"><strong>Numerical Patterns to Practice:</strong><br>
        1. Distance of closest approach for alpha-gold scattering (given KE in MeV)<br>
        2. Wavelength of specific transitions (e.g., 3rd line of Balmer, 2nd line of Lyman)<br>
        3. Comparing orbits/energies of H and He<sup>+</sup> or Li<sup>2+</sup><br>
        4. Finding n when wavelength or energy is given<br>
        5. Ratio problems: ratio of wavelengths, radii, or energies for different transitions
      </div>
      <div class="formula-box">
        <span class="formula-label">Wavelength Ratio Shortcut</span>
        For two transitions in the same atom:<br>
        lambda<sub>1</sub>/lambda<sub>2</sub> = [1/n<sub>a</sub><sup>2</sup> - 1/n<sub>b</sub><sup>2</sup>]<sup>-1</sup> / [1/n<sub>c</sub><sup>2</sup> - 1/n<sub>d</sub><sup>2</sup>]<sup>-1</sup><br><br>
        Example: Ratio of first Lyman to first Balmer wavelength:<br>
        λ<sub>L</sub>/λ<sub>B</sub> = [1/1 - 1/4]<sup>-1</sup> / [1/4 - 1/9]<sup>-1</sup> = (4/3) / (36/5) = 20/108 = 5/27
      </div>
      <div class="remember-box"><strong>Final Advice:</strong> This chapter has a very <strong>predictable pattern</strong> in CBSE. Master Bohr's derivation (radius and energy), know all spectral series by heart, practice 5-6 numerical types, and you can score full marks. The theory is beautiful and the math is straightforward!</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Rutherford's Alpha Scattering Experiment — Step by Step",
    body: `
      <p>This is one of the <strong>most important experiments</strong> in CBSE Physics. Let's break it down systematically for maximum marks.</p>
      <div class="key-point"><strong>Experimental Setup:</strong><br>
        1. <strong>Source:</strong> Radioactive <sup>214</sup>Bi (bismuth) emitting alpha particles (He nuclei, charge +2e, mass 4u)<br>
        2. <strong>Collimator:</strong> Lead bricks with narrow slit to produce a focused, parallel beam<br>
        3. <strong>Target:</strong> Very thin gold foil (~2.1 x 10<sup>-7</sup> m thick). Gold was chosen because it is highly malleable and can be made extremely thin<br>
        4. <strong>Detector:</strong> ZnS (zinc sulphide) screen that produces visible flashes (scintillations) when struck by alpha particles<br>
        5. The detector could be <strong>rotated</strong> around the gold foil to count particles at different scattering angles
      </div>
      <div class="diagram-container">
        <svg width="460" height="300" viewBox="0 0 460 300">
          <defs>
            <marker id="arrRed16" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrBlue16" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrGreen16" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#059669"/></marker>
            <marker id="arrPurple16" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
          </defs>
          <!-- Source block -->
          <rect x="15" y="125" width="55" height="40" rx="5" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
          <text x="42" y="140" text-anchor="middle" font-size="8" fill="#92400e" font-weight="700"><sup>214</sup>Bi</text>
          <text x="42" y="155" text-anchor="middle" font-size="8" fill="#92400e" font-weight="700">Source</text>
          <!-- Lead collimator -->
          <rect x="85" y="118" width="18" height="20" rx="2" fill="#4b5563"/>
          <rect x="85" y="152" width="18" height="20" rx="2" fill="#4b5563"/>
          <text x="94" y="112" text-anchor="middle" font-size="8" fill="#4b5563" font-weight="600">Lead</text>
          <!-- Alpha beam -->
          <line x1="103" y1="145" x2="218" y2="145" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrRed16)"/>
          <text x="160" y="138" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">alpha beam</text>
          <!-- Gold foil -->
          <rect x="224" y="55" width="5" height="180" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" rx="1"/>
          <text x="227" y="45" text-anchor="middle" font-size="10" fill="#d97706" font-weight="700">Gold Foil</text>
          <!-- Nucleus dot -->
          <circle cx="227" cy="145" r="5" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>
          <text x="227" y="148" text-anchor="middle" font-size="6" fill="#fff" font-weight="700">N</text>
          <!-- Path 1: Most pass straight (~99%) -->
          <line x1="232" y1="145" x2="390" y2="145" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrRed16)"/>
          <text x="350" y="138" font-size="9" fill="#dc2626" font-weight="700">~99% straight</text>
          <!-- Path 2: Small angle deflection -->
          <line x1="232" y1="145" x2="375" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5,3" marker-end="url(#arrBlue16)"/>
          <text x="370" y="88" font-size="9" fill="#2563eb" font-weight="600">Small angle</text>
          <!-- Path 3: Large angle (>90 degrees) -->
          <line x1="232" y1="145" x2="300" y2="60" stroke="#8b5cf6" stroke-width="1.8" stroke-dasharray="5,3" marker-end="url(#arrPurple16)"/>
          <text x="310" y="52" font-size="9" fill="#8b5cf6" font-weight="600">&gt;90 degrees</text>
          <!-- Path 4: Bounce back (~180 degrees) -->
          <path d="M 222 145 Q 200 120 150 90" stroke="#059669" stroke-width="2" stroke-dasharray="5,3" fill="none" marker-end="url(#arrGreen16)"/>
          <text x="130" y="82" text-anchor="middle" font-size="9" fill="#059669" font-weight="700">~180 degrees bounce!</text>
          <text x="130" y="95" text-anchor="middle" font-size="8" fill="#059669">(1 in 8000)</text>
          <!-- ZnS screen (arc) -->
          <path d="M 395 55 A 175 175 0 0 1 395 235" stroke="#64748b" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
          <text x="415" y="220" font-size="10" fill="#64748b" font-weight="600">ZnS</text>
          <text x="415" y="234" font-size="9" fill="#64748b">screen</text>
          <!-- Angle θ -->
          <path d="M 255 145 A 28 28 0 0 0 249 125" stroke="#8b5cf6" stroke-width="1.5" fill="none"/>
          <text x="262" y="128" font-size="10" fill="#8b5cf6" font-weight="600">θ</text>
          <!-- Impact parameter label -->
          <line x1="200" y1="145" x2="200" y2="165" stroke="#f59e0b" stroke-width="1.5"/>
          <line x1="197" y1="165" x2="227" y2="165" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>
          <text x="213" y="178" text-anchor="middle" font-size="8" fill="#f59e0b" font-weight="600">b (impact</text>
          <text x="213" y="189" text-anchor="middle" font-size="8" fill="#f59e0b" font-weight="600">parameter)</text>
          <!-- Title -->
          <text x="230" y="282" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="700">Rutherford's Alpha Scattering Experiment</text>
        </svg>
        <div class="diagram-caption">Setup: radioactive source -> collimator -> gold foil -> ZnS detector. The impact parameter b determines the scattering angle θ.</div>
      </div>
      <div class="key-point"><strong>Three Key Observations & What They Tell Us:</strong><br><br>
        <strong>Observation 1:</strong> Most alpha particles (~99%) pass straight through with little or no deflection.<br>
        <strong>Conclusion:</strong> The atom is <strong>mostly empty space</strong>.<br><br>
        <strong>Observation 2:</strong> Some particles are deflected through small angles.<br>
        <strong>Conclusion:</strong> There is a <strong>concentrated positive charge</strong> somewhere inside the atom that repels the +2e alpha particles.<br><br>
        <strong>Observation 3:</strong> Very few particles (~1 in 8000) bounce back at angles > 90 degrees.<br>
        <strong>Conclusion:</strong> The positive charge is concentrated in a <strong>very tiny, very dense, very massive</strong> region — the nucleus.
      </div>
      <div class="key-point"><strong>Impact Parameter (b) and Scattering Angle (θ):</strong><br>
        - <strong>b</strong> = perpendicular distance from the nucleus to the initial trajectory of the alpha particle<br>
        - b large --> θ small (distant pass, weak deflection)<br>
        - b small --> θ large (close pass, strong deflection)<br>
        - b = 0 --> θ = 180 degrees (head-on collision, bounces straight back)<br>
        - b is proportional to cot(θ/2)
      </div>

      <div class="formula-box">
        <span class="formula-label">Solved Problem: Distance of Closest Approach</span>
        <strong>Q:</strong> An alpha particle with KE = 5 MeV approaches a gold nucleus (Z = 79) head-on. Find the distance of closest approach.<br><br>
        <strong>Solution:</strong><br>
        At closest approach, all KE converts to electrostatic PE:<br>
        KE = k x (2e)(Ze) / d<br>
        d = 2kZe<sup>2</sup> / KE<br><br>
        Convert KE: 5 MeV = 5 x 10<sup>6</sup> x 1.6 x 10<sup>-19</sup> = 8 x 10<sup>-13</sup> J<br><br>
        d = 2 x (9 x 10<sup>9</sup>) x 79 x (1.6 x 10<sup>-19</sup>)<sup>2</sup> / (8 x 10<sup>-13</sup>)<br>
        d = 2 x 9 x 10<sup>9</sup> x 79 x 2.56 x 10<sup>-38</sup> / (8 x 10<sup>-13</sup>)<br>
        d = 3642.24 x 10<sup>-29</sup> / (8 x 10<sup>-13</sup>)<br>
        <strong>d = 4.55 x 10<sup>-14</sup> m ~ 10<sup>-14</sup> m</strong>
      </div>
      <div class="remember-box"><strong>Exam Tip:</strong> "Distance of closest approach is NOT the nuclear radius -- it is the minimum distance the alpha particle reaches in a <strong>head-on collision</strong> (b = 0). It gives an <strong>upper bound</strong> for nuclear size. The actual nucleus is even smaller (~10<sup>-15</sup> m)."</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Rutherford's Nuclear Model — Features, Merits & Limitations",
    body: `
      <p>After the scattering experiment, Rutherford proposed a <strong>nuclear model</strong> of the atom. Understanding its features AND its failures is essential for CBSE.</p>
      <div class="key-point"><strong>Features of Rutherford's Nuclear Model:</strong><br>
        1. Every atom has a tiny, dense, positively charged core called the <strong>nucleus</strong><br>
        2. The nucleus contains nearly <strong>all the mass</strong> of the atom<br>
        3. Electrons revolve around the nucleus in <strong>circular orbits</strong>, like planets around the Sun<br>
        4. The electrostatic attraction between nucleus and electrons provides the centripetal force<br>
        5. Size of nucleus ~ 10<sup>-15</sup> m (1 femtometre), size of atom ~ 10<sup>-10</sup> m (1 Angstrom)<br>
        6. The ratio: atom/nucleus ~ 10<sup>5</sup>, meaning the atom is ~100,000 times larger than the nucleus!
      </div>
      <div class="key-point"><strong>Merits of the Model:</strong><br>
        1. Successfully explained the alpha scattering observations<br>
        2. Gave the correct picture of atomic structure (tiny nucleus + orbiting electrons)<br>
        3. Provided the first estimate of nuclear size (~10<sup>-15</sup> m)<br>
        4. Explained why most alpha particles pass through (atom is mostly empty space)
      </div>
      <div class="mistake-box"><strong>Limitations of Rutherford's Model (VERY IMPORTANT for CBSE):</strong><br><br>
        <strong>Limitation 1 — Stability Problem:</strong><br>
        According to classical electrodynamics, an accelerating charged particle must radiate electromagnetic energy. An electron moving in a circular orbit is constantly accelerating (centripetal acceleration). So it should continuously lose energy, spiral inward, and collapse into the nucleus in ~10<sup>-8</sup> seconds. But atoms are stable!<br><br>
        <strong>Limitation 2 — Spectrum Problem:</strong><br>
        As the electron spirals inward, it would emit radiation of <strong>continuously changing frequency</strong>, producing a continuous spectrum. But experiments show that atoms emit only specific wavelengths — a <strong>discrete line spectrum</strong>, not a continuous one!
      </div>
      <div class="diagram-container">
        <svg width="400" height="260" viewBox="0 0 400 260">
          <defs>
            <marker id="arrSpiral17" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#dc2626"/></marker>
          </defs>
          <!-- Title -->
          <text x="200" y="22" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="700">The Stability Problem</text>
          <text x="200" y="38" text-anchor="middle" font-size="10" fill="#64748b">(Why Rutherford's model fails)</text>
          <!-- Nucleus -->
          <circle cx="200" cy="145" r="10" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
          <text x="200" y="149" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">+Ze</text>
          <!-- Spiral path (electron losing energy and falling in) -->
          <ellipse cx="200" cy="145" rx="120" ry="80" fill="none" stroke="#93c5fd" stroke-width="1" stroke-dasharray="4,4"/>
          <ellipse cx="200" cy="145" rx="95" ry="63" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,4"/>
          <ellipse cx="200" cy="145" rx="70" ry="47" fill="none" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="4,4"/>
          <ellipse cx="200" cy="145" rx="48" ry="32" fill="none" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="4,4"/>
          <ellipse cx="200" cy="145" rx="28" ry="19" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,4"/>
          <!-- Spiral arrow showing collapse direction -->
          <path d="M 320 145 C 310 80, 240 70, 230 100 C 220 120, 250 145, 240 155 C 230 165, 215 150, 212 148" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#arrSpiral17)"/>
          <!-- Electron on the spiral -->
          <circle cx="320" cy="145" r="6" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="320" y="148" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">e</text>
          <!-- Radiation wavy lines -->
          <path d="M 305 130 C 310 125, 315 135, 320 130 C 325 125, 330 135, 335 130" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
          <text x="345" y="128" font-size="8" fill="#f59e0b">EM radiation</text>
          <path d="M 260 90 C 265 85, 270 95, 275 90 C 280 85, 285 95, 290 90" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
          <text x="295" y="88" font-size="8" fill="#f59e0b">lost</text>
          <!-- Collapse label -->
          <text x="200" y="240" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="700">Electron should spiral into nucleus in ~10<tspan font-size="8" dy="-4">-8</tspan><tspan dy="4"> s!</tspan></text>
          <text x="200" y="255" text-anchor="middle" font-size="10" fill="#64748b">But atoms are stable --> Model fails!</text>
        </svg>
        <div class="diagram-caption">Classical prediction: the orbiting electron radiates energy and spirals into the nucleus. This does NOT happen in reality.</div>
      </div>
      <table class="compare-table">
        <tr><th>Feature</th><th>Thomson's Model</th><th>Rutherford's Model</th></tr>
        <tr><td>Positive charge</td><td>Spread uniformly throughout atom</td><td>Concentrated in tiny nucleus</td></tr>
        <tr><td>Electrons</td><td>Embedded in positive charge</td><td>Revolving in orbits around nucleus</td></tr>
        <tr><td>Mass distribution</td><td>Distributed throughout</td><td>Almost all mass in nucleus</td></tr>
        <tr><td>Empty space</td><td>No empty space (solid sphere)</td><td>Atom is mostly empty space</td></tr>
        <tr><td>Explains scattering?</td><td>No — cannot explain large-angle deflections</td><td>Yes — nucleus causes large deflections</td></tr>
        <tr><td>Explains stability?</td><td>No clear mechanism</td><td>No — electron should spiral in</td></tr>
        <tr><td>Explains line spectra?</td><td>No</td><td>No — predicts continuous spectrum</td></tr>
      </table>
      <div class="remember-box"><strong>Board Exam Tip:</strong> CBSE often asks "State TWO limitations of Rutherford's model." Always mention <strong>BOTH</strong>:<br>
        (i) Cannot explain <strong>stability of atoms</strong> (electron should spiral in)<br>
        (ii) Cannot explain <strong>discrete line spectrum</strong> (predicts continuous spectrum)<br>
        These two limitations led Niels Bohr to propose his model in 1913.
      </div>

      <div class="formula-box">
        <span class="formula-label">CBSE Previous Year Question (2 Marks)</span>
        <strong>Q:</strong> State two drawbacks of Rutherford's model of the atom. How were these overcome in Bohr's model?<br><br>
        <strong>Model Answer:</strong><br>
        <strong>Drawback 1:</strong> An electron revolving in a circular orbit accelerates continuously. According to classical electromagnetic theory, it should radiate energy, lose speed, and spiral into the nucleus. This means atoms should be unstable, which contradicts reality.<br><br>
        <strong>Drawback 2:</strong> The spiraling electron should emit a continuous spectrum of radiation. But atoms are observed to emit discrete line spectra only.<br><br>
        <strong>Bohr's solution:</strong> Bohr postulated that electrons revolve in certain <strong>stationary orbits</strong> where they do NOT radiate energy (first postulate). Radiation occurs only when an electron jumps between orbits, with frequency given by h*nu = E<sub>2</sub> - E<sub>1</sub>, which naturally gives a discrete spectrum (third postulate).
      </div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Distance of Closest Approach — Derivation & Numerical Practice",
    body: `
      <p>This is a <strong>high-weightage numerical topic</strong> in CBSE. Master the derivation and practise converting units carefully.</p>
      <div class="formula-box">
        <span class="formula-label">Derivation: Distance of Closest Approach (d)</span>
        <strong>Setup:</strong> An alpha particle (charge = +2e, mass = 4u) moves directly toward a nucleus (charge = +Ze).<br><br>
        <strong>Step 1:</strong> Far away, the alpha particle has only kinetic energy:<br>
        E<sub>initial</sub> = KE = (1/2)mv<sup>2</sup><br><br>
        <strong>Step 2:</strong> At the distance of closest approach (d), the alpha particle momentarily stops. All KE has converted to electrostatic PE:<br>
        E<sub>final</sub> = PE = k(2e)(Ze)/d = 2kZe<sup>2</sup>/d<br><br>
        <strong>Step 3:</strong> By conservation of energy: KE = PE<br>
        (1/2)mv<sup>2</sup> = 2kZe<sup>2</sup>/d<br><br>
        <strong>Therefore:</strong> d = 2kZe<sup>2</sup> / KE = (1/4πε₀) x (4Ze<sup>2</sup>) / KE
      </div>
      <div class="key-point"><strong>What d Tells Us:</strong><br>
        - d gives an <strong>upper limit</strong> for nuclear size (the nucleus must be smaller than d for the particle to bounce back)<br>
        - If KE increases, d decreases (faster particle gets closer to the nucleus)<br>
        - d is proportional to Z (heavier nuclei have larger d for the same KE)<br>
        - d is proportional to 1/KE (double the energy, halve the approach distance)<br>
        - Typical value: for 5 MeV alpha on gold, d ~ 4.5 x 10<sup>-14</sup> m
      </div>

      <div class="formula-box">
        <span class="formula-label">Solved Numerical 1 (CBSE 2019 Pattern)</span>
        <strong>Q:</strong> An alpha particle of kinetic energy 10 MeV is heading toward a gold nucleus (Z = 79). Find: (a) distance of closest approach, (b) will the particle actually touch the nucleus? (Nuclear radius of gold ~ 7 x 10<sup>-15</sup> m)<br><br>
        <strong>Solution:</strong><br>
        (a) KE = 10 MeV = 10 x 1.6 x 10<sup>-13</sup> J = 1.6 x 10<sup>-12</sup> J<br><br>
        d = 2kZe<sup>2</sup> / KE<br>
        d = 2 x (9 x 10<sup>9</sup>) x 79 x (1.6 x 10<sup>-19</sup>)<sup>2</sup> / (1.6 x 10<sup>-12</sup>)<br>
        d = 2 x 9 x 10<sup>9</sup> x 79 x 2.56 x 10<sup>-38</sup> / (1.6 x 10<sup>-12</sup>)<br>
        d = 3642.24 x 10<sup>-29</sup> / (1.6 x 10<sup>-12</sup>)<br>
        <strong>d = 2.28 x 10<sup>-14</sup> m</strong> ~ 22.8 fm<br><br>
        (b) Nuclear radius of gold ~ 7 x 10<sup>-15</sup> m = 7 fm.<br>
        Since d (22.8 fm) > R<sub>nucleus</sub> (7 fm), the alpha particle turns back <strong>before touching</strong> the nucleus. The Coulomb repulsion stops it at d.
      </div>
      <div class="formula-box">
        <span class="formula-label">Solved Numerical 2 (CBSE 2020 Pattern)</span>
        <strong>Q:</strong> In Rutherford's experiment, an alpha particle of energy 7.7 MeV approaches a silver nucleus (Z = 47). Calculate the distance of closest approach.<br><br>
        <strong>Solution:</strong><br>
        KE = 7.7 MeV = 7.7 x 1.6 x 10<sup>-13</sup> J = 12.32 x 10<sup>-13</sup> J<br><br>
        d = 2kZe<sup>2</sup> / KE<br>
        d = 2 x (9 x 10<sup>9</sup>) x 47 x (1.6 x 10<sup>-19</sup>)<sup>2</sup> / (12.32 x 10<sup>-13</sup>)<br>
        d = 2 x 9 x 10<sup>9</sup> x 47 x 2.56 x 10<sup>-38</sup> / (12.32 x 10<sup>-13</sup>)<br>
        d = 2166.91 x 10<sup>-29</sup> / (12.32 x 10<sup>-13</sup>)<br>
        <strong>d = 1.76 x 10<sup>-14</sup> m</strong> ~ 17.6 fm
      </div>
      <div class="mistake-box"><strong>Common Mistake: Forgetting to convert MeV to Joules!</strong><br>
        - 1 eV = 1.6 x 10<sup>-19</sup> J<br>
        - 1 MeV = 10<sup>6</sup> eV = 1.6 x 10<sup>-13</sup> J<br>
        - If KE is given in MeV and you forget to convert, your answer will be off by a factor of 10<sup>-13</sup>!<br><br>
        <strong>Also remember:</strong> The alpha particle charge is +2e (not +e). The 2 appears in the numerator as 2kZe<sup>2</sup>. If you write kZe<sup>2</sup> instead, your answer is exactly half the correct value.
      </div>
      <div class="remember-box"><strong>Quick Calculation Template (memorize this!):</strong><br>
        For alpha on gold (Z = 79):<br>
        d = 2 x 9 x 10<sup>9</sup> x 79 x (1.6 x 10<sup>-19</sup>)<sup>2</sup> / KE(in J)<br>
        d = 2 x 9 x 79 x 2.56 x 10<sup>-29</sup> / KE(in J)<br>
        d = 3642.24 x 10<sup>-29</sup> / KE(in J)<br><br>
        For alpha on silver (Z = 47):<br>
        d = 2 x 9 x 47 x 2.56 x 10<sup>-29</sup> / KE(in J)<br>
        d = 2166.91 x 10<sup>-29</sup> / KE(in J)<br><br>
        Just plug in KE (in Joules) and you are done!
      </div>
    `
  }
];
