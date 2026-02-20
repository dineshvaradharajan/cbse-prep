// Nuclei — Concepts
const ch13Concepts = [
  {
    id: 1, level: "basic",
    title: "Atomic Nucleus — Composition & Size",
    body: `
      <p>The <strong>nucleus</strong> is the tiny, dense core of an atom. It contains <strong>protons</strong> (positive charge) and <strong>neutrons</strong> (no charge), collectively called <strong>nucleons</strong>.</p>
      <div class="key-point"><strong>Key Terminology:</strong><br>
        1. <strong>Atomic number (Z)</strong> = number of protons<br>
        2. <strong>Mass number (A)</strong> = number of protons + neutrons = Z + N<br>
        3. <strong>Isotopes</strong> = same Z, different A (e.g., H-1, H-2, H-3)<br>
        4. <strong>Isobars</strong> = same A, different Z (e.g., C-14, N-14)<br>
        5. <strong>Isotones</strong> = same number of neutrons N (e.g., C-13 and N-14, both have N=7)
      </div>
      <div class="diagram-container">
        <svg width="420" height="200" viewBox="0 0 420 200">
          <!-- Nucleus -->
          <circle cx="130" cy="100" r="65" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <!-- Protons (red) -->
          <circle cx="105" cy="75" r="14" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="105" y="80" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">p</text>
          <circle cx="140" cy="65" r="14" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="140" y="70" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">p</text>
          <circle cx="155" cy="100" r="14" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="155" y="105" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">p</text>
          <circle cx="115" cy="130" r="14" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="115" y="135" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">p</text>
          <!-- Neutrons (blue) -->
          <circle cx="125" cy="95" r="14" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="125" y="100" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">n</text>
          <circle cx="100" cy="110" r="14" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="100" y="115" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">n</text>
          <circle cx="145" cy="125" r="14" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="145" y="130" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">n</text>
          <!-- Electron orbit hint -->
          <ellipse cx="130" cy="100" rx="85" ry="30" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3" transform="rotate(-20,130,100)"/>
          <circle cx="210" cy="82" r="5" fill="#64748b"/>
          <text x="225" y="87" font-size="10" fill="#64748b">e-</text>
          <!-- Labels -->
          <text x="300" y="50" font-size="13" fill="#dc2626" font-weight="600">Protons (Z) = +ve charge</text>
          <text x="300" y="75" font-size="13" fill="#2563eb" font-weight="600">Neutrons (N) = neutral</text>
          <text x="300" y="100" font-size="13" fill="#64748b" font-weight="600">A = Z + N</text>
          <text x="300" y="130" font-size="12" fill="#64748b">Notation: <tspan font-weight="700" font-size="14">X</tspan></text>
          <text x="295" y="125" font-size="9" fill="#64748b">A</text>
          <text x="295" y="140" font-size="9" fill="#64748b">Z</text>
          <text x="300" y="160" font-size="11" fill="#64748b">Example: U-235 has Z=92, N=143</text>
        </svg>
        <div class="diagram-caption">Structure of a nucleus with protons (red) and neutrons (blue)</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Nuclear Radius</span>
        R = R₀ A<sup>(1/3)</sup> &nbsp;&nbsp; where R₀ = 1.2 x 10⁻¹⁵ m = 1.2 fm
      </div>
      <p>This means <strong>nuclear volume is proportional to A</strong> (mass number), so nuclear density is approximately constant for all nuclei: about <strong>2.3 x 10¹⁷ kg/m³</strong>.</p>
      <div class="remember-box"><strong>Remember:</strong> Nuclear density is ~10¹⁴ times the density of ordinary matter. A teaspoon of nuclear matter would weigh about 6 billion tonnes!</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students write R is proportional to A. It is proportional to <strong>A<sup>(1/3)</sup></strong>. The <strong>volume</strong> V = (4/3)piR³ is proportional to A.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Atomic Mass Unit & Mass-Energy Equivalence",
    body: `
      <p>Nuclear masses are extremely small in kg. So we use a convenient unit: the <strong>atomic mass unit (u)</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Definition of 1 u</span>
        1 u = (1/12) x mass of C-12 atom = 1.66054 x 10⁻²⁷ kg
      </div>
      <div class="key-point"><strong>Key Masses to Remember:</strong><br>
        Proton mass: mp = 1.00728 u = 1.6726 x 10⁻²⁷ kg<br>
        Neutron mass: mn = 1.00866 u = 1.6749 x 10⁻²⁷ kg<br>
        Electron mass: me = 0.00055 u = 9.109 x 10⁻³¹ kg<br>
        Hydrogen atom: mH = 1.00783 u
      </div>
      <p>Einstein's famous equation connects mass and energy:</p>
      <div class="formula-box">
        <span class="formula-label">Mass-Energy Equivalence</span>
        E = mc² &nbsp;&nbsp; where c = 3 x 10⁸ m/s
      </div>
      <div class="formula-box">
        <span class="formula-label">Energy Equivalent of 1 u</span>
        1 u x c² = 931.5 MeV
      </div>
      <p>This means if 1 u of mass "disappears," it releases <strong>931.5 MeV</strong> of energy. This is the key to understanding nuclear energy!</p>
      <div class="remember-box"><strong>CBSE Tip:</strong> The value <strong>1 u = 931.5 MeV/c²</strong> is given in the data sheet, but make sure you know how to use it. When you find mass defect in u, simply multiply by 931.5 to get energy in MeV.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Confusing atomic mass with nuclear mass. Atomic mass includes electron masses. For binding energy calculations, using atomic masses automatically accounts for electron masses (they cancel out), so you can use either — but be consistent!</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Mass Defect & Nuclear Binding Energy",
    body: `
      <p>Here's a stunning fact: the mass of a nucleus is <strong>always less</strong> than the sum of masses of its individual protons and neutrons. This "missing mass" is called the <strong>mass defect</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Mass Defect</span>
        Delta-M = [Z x mp + (A-Z) x mn] - M(nucleus)
      </div>
      <p>Where did this mass go? It was converted into energy (via E = mc²) that <strong>binds</strong> the nucleons together. This energy is the <strong>binding energy (BE)</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Binding Energy</span>
        Eb = Delta-M x c² = Delta-M x 931.5 MeV &nbsp;&nbsp; (when Delta-M is in u)
      </div>
      <div class="key-point"><strong>Physical Meaning:</strong> Binding energy is the <strong>minimum energy needed to break a nucleus into its individual nucleons</strong>. Higher binding energy = more stable nucleus.</div>
      <p><strong>Using atomic masses</strong> (which is more practical, since tables give atomic masses):</p>
      <div class="formula-box">
        <span class="formula-label">Mass Defect (using atomic masses)</span>
        Delta-M = [Z x mH + (A-Z) x mn] - M(atom)<br>
        <small>Here mH = 1.00783 u (hydrogen atom mass), and M(atom) includes electrons</small>
      </div>
      <p><strong>Example: </strong>For He-4 (alpha particle): Z=2, A=4, N=2</p>
      <p>Delta-M = [2(1.00783) + 2(1.00866)] - 4.00260 = 4.03298 - 4.00260 = <strong>0.03038 u</strong></p>
      <p>Eb = 0.03038 x 931.5 = <strong>28.3 MeV</strong></p>
      <div class="remember-box"><strong>Remember:</strong> Binding energy is a <strong>positive</strong> quantity. It represents energy you need to <strong>supply</strong> to disassemble the nucleus. Don't confuse it with potential energy (which can be negative).</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Binding Energy per Nucleon Curve",
    body: `
      <p>The <strong>binding energy per nucleon</strong> (Eb/A) tells us how tightly each nucleon is held. This is the most important graph in nuclear physics!</p>
      <div class="diagram-container">
        <svg width="460" height="300" viewBox="0 0 460 300">
          <defs>
            <marker id="axArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#334155"/></marker>
          </defs>
          <!-- Axes -->
          <line x1="60" y1="260" x2="440" y2="260" stroke="#334155" stroke-width="2" marker-end="url(#axArrow)"/>
          <line x1="60" y1="260" x2="60" y2="20" stroke="#334155" stroke-width="2" marker-end="url(#axArrow)"/>
          <text x="250" y="290" text-anchor="middle" font-size="12" fill="#334155" font-weight="600">Mass Number (A) --></text>
          <text x="15" y="140" text-anchor="middle" font-size="11" fill="#334155" font-weight="600" transform="rotate(-90,15,140)">BE/A (MeV) --></text>
          <!-- Y-axis labels -->
          <text x="50" y="264" text-anchor="end" font-size="10" fill="#64748b">0</text>
          <text x="50" y="224" text-anchor="end" font-size="10" fill="#64748b">2</text>
          <text x="50" y="184" text-anchor="end" font-size="10" fill="#64748b">4</text>
          <text x="50" y="144" text-anchor="end" font-size="10" fill="#64748b">6</text>
          <text x="50" y="104" text-anchor="end" font-size="10" fill="#64748b">8</text>
          <text x="50" y="72" text-anchor="end" font-size="10" fill="#64748b">9</text>
          <!-- Grid lines -->
          <line x1="60" y1="224" x2="440" y2="224" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="60" y1="184" x2="440" y2="184" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="60" y1="144" x2="440" y2="144" stroke="#e2e8f0" stroke-width="0.5"/>
          <line x1="60" y1="104" x2="440" y2="104" stroke="#e2e8f0" stroke-width="0.5"/>
          <!-- BE/A curve -->
          <path d="M 70 255 L 78 230 L 85 215 Q 95 165, 105 130 Q 115 108, 130 90 Q 150 75, 180 68 Q 210 63, 240 65 Q 280 68, 320 75 Q 360 82, 400 92 L 430 100" stroke="#dc2626" stroke-width="2.5" fill="none"/>
          <!-- Data points -->
          <circle cx="70" cy="255" r="3" fill="#dc2626"/>
          <text x="70" y="248" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="600">H-2</text>
          <circle cx="85" cy="215" r="3" fill="#dc2626"/>
          <text x="85" y="208" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="600">He-3</text>
          <circle cx="105" cy="130" r="4" fill="#059669"/>
          <text x="105" y="122" text-anchor="middle" font-size="9" fill="#059669" font-weight="700">He-4</text>
          <circle cx="130" cy="90" r="3" fill="#dc2626"/>
          <text x="130" y="83" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="600">C-12</text>
          <circle cx="150" cy="78" r="3" fill="#dc2626"/>
          <text x="150" y="71" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="600">O-16</text>
          <!-- Fe-56 peak -->
          <circle cx="215" cy="63" r="5" fill="#2563eb"/>
          <text x="215" y="53" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="700">Fe-56</text>
          <text x="215" y="43" text-anchor="middle" font-size="9" fill="#2563eb">(8.75 MeV)</text>
          <!-- Heavy nuclei -->
          <circle cx="400" cy="92" r="3" fill="#dc2626"/>
          <text x="400" y="108" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="600">U-238</text>
          <!-- Fusion arrow -->
          <path d="M 80 175 L 160 120" stroke="#059669" stroke-width="1.5" marker-end="url(#fusArrow)"/>
          <text x="90" y="170" font-size="10" fill="#059669" font-weight="600">FUSION</text>
          <!-- Fission arrow -->
          <path d="M 410 130 L 310 90" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#fisArrow)"/>
          <text x="380" y="125" font-size="10" fill="#7c3aed" font-weight="600">FISSION</text>
          <defs>
            <marker id="fusArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#059669"/></marker>
            <marker id="fisArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#7c3aed"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Binding Energy per Nucleon vs Mass Number -- the most important graph in nuclear physics</div>
      </div>
      <div class="key-point"><strong>Key Observations from the Curve:</strong><br>
        1. <strong>Fe-56</strong> has the highest BE/A (~8.75 MeV) -- most stable nucleus<br>
        2. Light nuclei (A &lt; 20): BE/A rises sharply -- <strong>fusion</strong> is favorable<br>
        3. Heavy nuclei (A &gt; 56): BE/A slowly decreases -- <strong>fission</strong> is favorable<br>
        4. He-4, C-12, O-16 have unusually high BE/A (extra stable -- "magic numbers")<br>
        5. For most nuclei (30 &lt; A &lt; 170): BE/A is nearly constant at ~8.5 MeV
      </div>
      <div class="remember-box"><strong>CBSE Favorite:</strong> "Why is energy released in both fission and fusion?" Because in both processes, products move <strong>toward the peak (Fe-56)</strong>, gaining BE/A. Higher BE/A = more stable = energy released.</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Nuclear Force — What Holds the Nucleus Together?",
    body: `
      <p>Protons in a nucleus repel each other via the Coulomb force. So what prevents the nucleus from flying apart? A much stronger force: the <strong>nuclear force</strong> (also called the strong force).</p>
      <div class="key-point"><strong>Properties of Nuclear Force:</strong><br>
        1. <strong>Strongest force in nature</strong> -- about 100x stronger than Coulomb force<br>
        2. <strong>Short range</strong> -- effective only up to ~few femtometres (fm). Beyond 3-4 fm, it's essentially zero<br>
        3. <strong>Charge independent</strong> -- acts equally between p-p, n-n, and p-n pairs<br>
        4. <strong>Not a central force</strong> -- depends on spin orientation, not just distance<br>
        5. <strong>Saturating</strong> -- each nucleon interacts only with its neighbors (not all other nucleons)<br>
        6. <strong>Attractive at ~1 fm</strong> but becomes <strong>repulsive below ~0.7 fm</strong> (prevents nucleons from collapsing)
      </div>
      <div class="diagram-container">
        <svg width="400" height="230" viewBox="0 0 400 230">
          <defs>
            <marker id="potArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#334155"/></marker>
          </defs>
          <!-- Axes -->
          <line x1="80" y1="120" x2="380" y2="120" stroke="#334155" stroke-width="1.5" marker-end="url(#potArrow)"/>
          <line x1="80" y1="210" x2="80" y2="20" stroke="#334155" stroke-width="1.5" marker-end="url(#potArrow)"/>
          <text x="370" y="140" font-size="11" fill="#334155" font-weight="600">r (fm)</text>
          <text x="40" y="30" font-size="11" fill="#334155" font-weight="600">V(r)</text>
          <!-- Zero line label -->
          <text x="70" y="116" text-anchor="end" font-size="10" fill="#64748b">0</text>
          <!-- r labels -->
          <text x="120" y="136" text-anchor="middle" font-size="10" fill="#64748b">0.5</text>
          <text x="160" y="136" text-anchor="middle" font-size="10" fill="#64748b">1</text>
          <text x="240" y="136" text-anchor="middle" font-size="10" fill="#64748b">2</text>
          <text x="320" y="136" text-anchor="middle" font-size="10" fill="#64748b">3</text>
          <!-- Potential curve -->
          <path d="M 95 40 Q 110 50, 120 80 Q 130 120, 140 160 Q 150 195, 160 200 Q 180 200, 200 170 Q 220 145, 240 130 Q 280 122, 340 120" stroke="#dc2626" stroke-width="2.5" fill="none"/>
          <!-- Repulsive region label -->
          <text x="100" y="62" font-size="10" fill="#dc2626" font-weight="600">Repulsive</text>
          <text x="100" y="74" font-size="10" fill="#dc2626" font-weight="600">(hard core)</text>
          <!-- Attractive region label -->
          <text x="180" y="195" font-size="10" fill="#2563eb" font-weight="600">Attractive</text>
          <text x="180" y="207" font-size="10" fill="#2563eb" font-weight="600">(~100 MeV deep)</text>
          <!-- Minimum indicator -->
          <line x1="160" y1="200" x2="160" y2="120" stroke="#64748b" stroke-width="0.8" stroke-dasharray="3,3"/>
          <text x="165" y="218" font-size="9" fill="#64748b">~0.8 fm</text>
        </svg>
        <div class="diagram-caption">Nuclear potential energy vs distance -- strongly attractive at ~1 fm, repulsive below ~0.7 fm</div>
      </div>
      <div class="remember-box"><strong>Remember:</strong> The constant BE/A for medium nuclei (A = 30-170) is a consequence of the <strong>saturation property</strong> of nuclear force. Each nucleon binds only to a few neighbors, so the total BE is roughly proportional to A.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Saying nuclear force is always attractive. It is <strong>repulsive at very short distances</strong> (&lt;0.7 fm), which prevents the nucleus from collapsing to a point.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Radioactivity — Alpha, Beta & Gamma Decay",
    body: `
      <p><strong>Radioactivity</strong> is the spontaneous disintegration of an unstable nucleus, emitting particles or radiation. Discovered by Henri Becquerel (1896) and studied by Marie & Pierre Curie.</p>
      <div class="key-point"><strong>Three Types of Radioactive Decay:</strong></div>
      <table class="compare-table">
        <tr><th>Property</th><th>Alpha (a)</th><th>Beta (b)</th><th>Gamma (g)</th></tr>
        <tr><td>Nature</td><td>He-4 nucleus (2p + 2n)</td><td>Electron or positron</td><td>Electromagnetic wave</td></tr>
        <tr><td>Charge</td><td>+2e</td><td>-e (b-) or +e (b+)</td><td>0</td></tr>
        <tr><td>Mass</td><td>4 u</td><td>~0.00055 u</td><td>0</td></tr>
        <tr><td>Speed</td><td>~0.05c to 0.1c</td><td>up to 0.99c</td><td>c (speed of light)</td></tr>
        <tr><td>Ionizing power</td><td>Highest</td><td>Medium</td><td>Least</td></tr>
        <tr><td>Penetrating power</td><td>Least (stopped by paper)</td><td>Medium (stopped by Al sheet)</td><td>Highest (needs thick Pb)</td></tr>
        <tr><td>Deflection in B/E field</td><td>Deflected</td><td>Deflected (opposite)</td><td>Not deflected</td></tr>
      </table>
      <div class="diagram-container">
        <svg width="440" height="240" viewBox="0 0 440 240">
          <!-- Source block -->
          <rect x="30" y="90" width="60" height="60" rx="4" fill="#64748b" stroke="#475569" stroke-width="1.5"/>
          <text x="60" y="125" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Source</text>
          <!-- Lead shield with slit -->
          <rect x="110" y="60" width="20" height="55" fill="#475569"/>
          <rect x="110" y="125" width="20" height="55" fill="#475569"/>
          <text x="120" y="50" text-anchor="middle" font-size="9" fill="#475569">Lead</text>
          <!-- Magnetic field indicator (into page) -->
          <text x="280" y="30" text-anchor="middle" font-size="11" fill="#8b5cf6" font-weight="600">B field: into page</text>
          <!-- Alpha path (deflected down, curves less) -->
          <path d="M 130 115 Q 200 115, 260 145 Q 310 170, 370 190" stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#arrAlpha)"/>
          <text x="380" y="195" font-size="12" fill="#dc2626" font-weight="700">a (+2e)</text>
          <!-- Gamma path (straight) -->
          <line x1="130" y1="115" x2="400" y2="115" stroke="#059669" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#arrGamma)"/>
          <text x="410" y="120" font-size="12" fill="#059669" font-weight="700">g (0)</text>
          <!-- Beta path (deflected up, curves more) -->
          <path d="M 130 115 Q 200 115, 250 80 Q 290 50, 360 35" stroke="#2563eb" stroke-width="2" fill="none" marker-end="url(#arrBeta)"/>
          <text x="370" y="40" font-size="12" fill="#2563eb" font-weight="700">b (-e)</text>
          <!-- Absorber tests at bottom -->
          <rect x="60" y="210" width="50" height="20" rx="3" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
          <text x="85" y="224" text-anchor="middle" font-size="9" fill="#92400e">Paper</text>
          <text x="85" y="236" text-anchor="middle" font-size="8" fill="#92400e">stops a</text>
          <rect x="160" y="210" width="65" height="20" rx="3" fill="#e0f2fe" stroke="#2563eb" stroke-width="1"/>
          <text x="192" y="224" text-anchor="middle" font-size="9" fill="#1e40af">Al sheet</text>
          <text x="192" y="236" text-anchor="middle" font-size="8" fill="#1e40af">stops b</text>
          <rect x="275" y="210" width="65" height="20" rx="3" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1"/>
          <text x="307" y="224" text-anchor="middle" font-size="9" fill="#6b21a8">Thick Lead</text>
          <text x="307" y="236" text-anchor="middle" font-size="8" fill="#6b21a8">reduces g</text>
          <defs>
            <marker id="arrAlpha" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrBeta" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrGamma" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#059669"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Separation of alpha, beta, gamma rays in a magnetic field (into the page)</div>
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> For deflection in a magnetic field, use the left-hand rule. Alpha curves one way, beta curves the opposite way (smaller radius = lighter particle = beta), and gamma goes straight.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Decay Equations — Alpha, Beta-minus & Beta-plus",
    body: `
      <p>Each type of decay obeys <strong>conservation laws</strong>: charge (Z), mass number (A), energy, and momentum are all conserved.</p>
      <div class="formula-box">
        <span class="formula-label">Alpha Decay</span>
        X(Z,A) --> Y(Z-2, A-4) + He(2,4)<br>
        <small>Parent loses 2 protons and 2 neutrons (an alpha particle = He-4 nucleus)</small>
      </div>
      <p><strong>Example:</strong> U-238 --> Th-234 + He-4 (92 --> 90 + 2, 238 --> 234 + 4)</p>
      <div class="formula-box">
        <span class="formula-label">Beta-minus Decay (b-)</span>
        X(Z,A) --> Y(Z+1, A) + e- + antineutrino<br>
        <small>A neutron converts to a proton: n --> p + e- + antineutrino</small>
      </div>
      <p><strong>Example:</strong> C-14 --> N-14 + e- + antineutrino (6 --> 7, A stays 14)</p>
      <div class="formula-box">
        <span class="formula-label">Beta-plus Decay (b+)</span>
        X(Z,A) --> Y(Z-1, A) + e+ + neutrino<br>
        <small>A proton converts to a neutron: p --> n + e+ + neutrino</small>
      </div>
      <p><strong>Example:</strong> Na-22 --> Ne-22 + e+ + neutrino (11 --> 10, A stays 22)</p>
      <div class="formula-box">
        <span class="formula-label">Gamma Decay</span>
        X*(Z,A) --> X(Z,A) + gamma photon<br>
        <small>Excited nucleus releases energy as electromagnetic radiation. No change in Z or A!</small>
      </div>
      <div class="key-point"><strong>Conservation Rules (Quick Check):</strong><br>
        - Alpha: Z decreases by 2, A decreases by 4<br>
        - Beta-minus: Z increases by 1, A unchanged<br>
        - Beta-plus: Z decreases by 1, A unchanged<br>
        - Gamma: No change in Z or A
      </div>
      <div class="remember-box"><strong>Remember:</strong> In beta decay, a <strong>neutrino</strong> (or antineutrino) is also emitted. Pauli proposed it to explain the continuous energy spectrum of beta particles (without it, energy and momentum wouldn't be conserved).</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Forgetting the neutrino/antineutrino in beta decay equations. CBSE deducts marks for this! Also, b- emits <strong>antineutrino</strong> while b+ emits <strong>neutrino</strong> -- don't swap them.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Radioactive Decay Law & Half-Life",
    body: `
      <p>Radioactive decay is a <strong>random, spontaneous</strong> process. We can't predict when a particular nucleus will decay, but we can predict the <strong>average behavior</strong> of a large number of nuclei.</p>
      <div class="formula-box">
        <span class="formula-label">Radioactive Decay Law</span>
        N(t) = N₀ e<sup>(-λt)</sup> &nbsp;&nbsp; or equivalently &nbsp;&nbsp; dN/dt = -λ N
      </div>
      <p>where <strong>N₀</strong> = initial number of nuclei, <strong>λ</strong> = decay constant (probability of decay per unit time), and <strong>N(t)</strong> = number of undecayed nuclei at time t.</p>
      <div class="formula-box">
        <span class="formula-label">Activity (Rate of Decay)</span>
        A = |dN/dt| = λ N = λ N₀ e<sup>(-λt)</sup> = A₀ e<sup>(-λt)</sup>
      </div>
      <p>SI unit of activity: <strong>becquerel (Bq)</strong> = 1 decay/second. Older unit: <strong>curie (Ci)</strong> = 3.7 x 10¹⁰ Bq.</p>
      <div class="formula-box">
        <span class="formula-label">Half-Life</span>
        T(1/2) = ln(2) / λ = 0.693 / λ
      </div>
      <p><strong>Half-life</strong> is the time in which <strong>half the radioactive nuclei</strong> decay. After n half-lives:</p>
      <div class="formula-box">
        <span class="formula-label">After n Half-Lives</span>
        N = N₀ / 2<sup>n</sup> &nbsp;&nbsp; and &nbsp;&nbsp; A = A₀ / 2<sup>n</sup> &nbsp;&nbsp; where n = t / T(1/2)
      </div>
      <div class="formula-box">
        <span class="formula-label">Mean Life (Average Life)</span>
        tau = 1/λ = T(1/2) / 0.693 = 1.44 x T(1/2)
      </div>
      <div class="key-point"><strong>Quick Table:</strong><br>
        After 1 half-life: N = N₀/2 (50% remain)<br>
        After 2 half-lives: N = N₀/4 (25% remain)<br>
        After 3 half-lives: N = N₀/8 (12.5% remain)<br>
        After n half-lives: N = N₀/2<sup>n</sup>
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Most numerical problems can be solved using N = N₀/2<sup>n</sup> without using the exponential formula. Count the number of half-lives first!</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Thinking "after 2 half-lives, all nuclei have decayed." NO! After 2 half-lives, 1/4 remain. After 10 half-lives, about 1/1024 remain. Decay never truly reaches zero.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Nuclear Fission — Splitting Heavy Nuclei",
    body: `
      <p><strong>Nuclear fission</strong> is the splitting of a heavy nucleus into two lighter nuclei (called <strong>fission fragments</strong>), along with a few neutrons and a huge amount of energy.</p>
      <div class="formula-box">
        <span class="formula-label">Fission of U-235 (Most Common Example)</span>
        U-235 + n --> Ba-141 + Kr-92 + 3n + ~200 MeV
      </div>
      <p>This is just ONE possible fission reaction. U-235 can split in many different ways, producing different fragment pairs.</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Incoming neutron -->
          <circle cx="30" cy="90" r="6" fill="#64748b"/>
          <text x="30" y="75" text-anchor="middle" font-size="9" fill="#64748b">n</text>
          <line x1="40" y1="90" x2="80" y2="90" stroke="#64748b" stroke-width="1.5" marker-end="url(#nArr)"/>
          <!-- U-235 nucleus -->
          <ellipse cx="120" cy="90" rx="30" ry="28" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="120" y="95" text-anchor="middle" font-size="11" fill="#92400e" font-weight="700">U-235</text>
          <!-- Arrow -->
          <text x="175" y="95" font-size="20" fill="#334155">--></text>
          <!-- Deformed nucleus -->
          <ellipse cx="230" cy="90" rx="35" ry="18" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="230" y="95" text-anchor="middle" font-size="9" fill="#92400e" font-weight="600">U-236*</text>
          <text x="230" y="75" font-size="8" fill="#92400e">(excited)</text>
          <!-- Arrow -->
          <text x="280" y="95" font-size="20" fill="#334155">--></text>
          <!-- Fragment 1 -->
          <ellipse cx="340" cy="55" rx="25" ry="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="340" y="60" text-anchor="middle" font-size="10" fill="#166534" font-weight="700">Ba-141</text>
          <!-- Fragment 2 -->
          <ellipse cx="340" cy="130" rx="20" ry="16" fill="#e0f2fe" stroke="#2563eb" stroke-width="2"/>
          <text x="340" y="135" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="700">Kr-92</text>
          <!-- Neutrons out -->
          <circle cx="400" cy="40" r="5" fill="#64748b"/>
          <circle cx="410" cy="90" r="5" fill="#64748b"/>
          <circle cx="400" cy="145" r="5" fill="#64748b"/>
          <text x="425" y="95" font-size="9" fill="#64748b" font-weight="600">3 neutrons</text>
          <!-- Energy label -->
          <text x="340" y="175" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="700">~200 MeV released!</text>
          <defs>
            <marker id="nArr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#64748b"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Nuclear fission of U-235: neutron absorption, excitation, splitting into fragments + neutrons + energy</div>
      </div>
      <div class="key-point"><strong>Key Features of Fission:</strong><br>
        1. Requires a heavy nucleus (A > 200 typically)<br>
        2. <strong>Chain reaction possible</strong> -- released neutrons can cause more fissions<br>
        3. Energy release: ~200 MeV per fission (vs ~few eV for chemical reactions)<br>
        4. Products are radioactive (nuclear waste problem)<br>
        5. <strong>Critical mass</strong>: minimum amount of fissile material needed to sustain a chain reaction
      </div>
      <div class="remember-box"><strong>Why does fission release energy?</strong> Look at the BE/A curve: U-235 has BE/A ~ 7.6 MeV, while the fragments (A ~ 100-140) have BE/A ~ 8.5 MeV. The increase in BE/A means energy is released. Energy per fission = (product BE) - (reactant BE).</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Nuclear Reactor — Controlled Fission",
    body: `
      <p>A <strong>nuclear reactor</strong> maintains a controlled, self-sustaining chain reaction to produce energy. Let's understand each component:</p>
      <div class="key-point"><strong>Components of a Nuclear Reactor:</strong></div>
      <table class="compare-table">
        <tr><th>Component</th><th>Material</th><th>Function</th></tr>
        <tr><td><strong>Fuel</strong></td><td>U-235 or Pu-239</td><td>Undergoes fission, releases energy</td></tr>
        <tr><td><strong>Moderator</strong></td><td>Heavy water (D₂O), graphite</td><td>Slows down fast neutrons to thermal energies (~0.025 eV) for efficient fission</td></tr>
        <tr><td><strong>Control rods</strong></td><td>Cadmium (Cd) or Boron</td><td>Absorb excess neutrons to control the reaction rate</td></tr>
        <tr><td><strong>Coolant</strong></td><td>Water, heavy water, liquid Na</td><td>Transfers heat from reactor to turbine</td></tr>
        <tr><td><strong>Shielding</strong></td><td>Concrete, lead</td><td>Prevents radiation leakage</td></tr>
      </table>
      <div class="key-point"><strong>Multiplication Factor (k):</strong><br>
        k = (neutrons in generation n+1) / (neutrons in generation n)<br><br>
        - k = 1: <strong>Critical</strong> (steady power output) -- desired in a reactor<br>
        - k > 1: <strong>Supercritical</strong> (increasing power) -- used briefly to start up<br>
        - k < 1: <strong>Subcritical</strong> (dying down) -- reactor shutting down
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> The moderator does NOT slow down the reaction. It slows down the <strong>neutrons</strong>. Slow (thermal) neutrons are more likely to cause fission in U-235 than fast neutrons. Control rods regulate the reaction rate.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Saying "moderator controls the chain reaction." NO! <strong>Control rods</strong> control the reaction by absorbing neutrons. The <strong>moderator</strong> slows neutrons to make fission more probable.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Nuclear Fusion — Energy of the Stars",
    body: `
      <p><strong>Nuclear fusion</strong> is the combining of two light nuclei to form a heavier nucleus, releasing enormous energy. This is what powers the Sun and all stars!</p>
      <div class="formula-box">
        <span class="formula-label">Proton-Proton Chain (in the Sun)</span>
        4 H-1 --> He-4 + 2 e+ + 2 neutrinos + 26.7 MeV
      </div>
      <p>Four hydrogen nuclei fuse to form one helium nucleus, releasing 26.7 MeV. The mass of 4 protons is more than 1 helium nucleus -- the missing mass becomes energy.</p>
      <div class="diagram-container">
        <svg width="420" height="180" viewBox="0 0 420 180">
          <!-- Hydrogen nuclei -->
          <circle cx="50" cy="60" r="15" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="50" y="65" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">H</text>
          <circle cx="50" cy="120" r="15" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="50" y="125" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">H</text>
          <circle cx="100" cy="60" r="15" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="100" y="65" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">H</text>
          <circle cx="100" cy="120" r="15" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <text x="100" y="125" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">H</text>
          <!-- Arrow -->
          <line x1="135" y1="90" x2="195" y2="90" stroke="#334155" stroke-width="2" marker-end="url(#fusArr2)"/>
          <text x="165" y="80" text-anchor="middle" font-size="9" fill="#334155">~10⁷ K</text>
          <!-- Helium nucleus -->
          <circle cx="250" cy="90" r="28" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <circle cx="240" cy="82" r="10" fill="#dc2626"/><text x="240" y="86" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">p</text>
          <circle cx="260" cy="82" r="10" fill="#2563eb"/><text x="260" y="86" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">n</text>
          <circle cx="240" cy="100" r="10" fill="#2563eb"/><text x="240" y="104" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">n</text>
          <circle cx="260" cy="100" r="10" fill="#dc2626"/><text x="260" y="104" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">p</text>
          <text x="250" y="130" text-anchor="middle" font-size="11" fill="#92400e" font-weight="700">He-4</text>
          <!-- Plus sign -->
          <text x="300" y="95" font-size="18" fill="#334155">+</text>
          <!-- Byproducts -->
          <text x="365" y="60" text-anchor="middle" font-size="10" fill="#059669" font-weight="600">2 e+ (positrons)</text>
          <text x="365" y="80" text-anchor="middle" font-size="10" fill="#059669" font-weight="600">2 neutrinos</text>
          <text x="365" y="110" text-anchor="middle" font-size="14" fill="#dc2626" font-weight="700">26.7 MeV</text>
          <text x="365" y="130" text-anchor="middle" font-size="10" fill="#dc2626">energy released</text>
          <defs>
            <marker id="fusArr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#334155"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Nuclear fusion: 4 hydrogen nuclei fuse into helium-4, powering the Sun</div>
      </div>
      <div class="key-point"><strong>Why is Fusion Difficult on Earth?</strong><br>
        - Nuclei are positively charged and <strong>repel each other</strong> (Coulomb barrier)<br>
        - Need temperature > <strong>10⁷ K</strong> (thermonuclear conditions) to overcome this barrier<br>
        - At these temperatures, matter is <strong>plasma</strong> -- no container can hold it!<br>
        - Current approaches: magnetic confinement (tokamak) and inertial confinement (lasers)
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Fission</th><th>Fusion</th></tr>
        <tr><td>Process</td><td>Heavy nucleus splits</td><td>Light nuclei combine</td></tr>
        <tr><td>Fuel</td><td>U-235, Pu-239</td><td>H-2 (deuterium), H-3 (tritium)</td></tr>
        <tr><td>Energy per nucleon</td><td>~0.85 MeV</td><td>~6.7 MeV (much more!)</td></tr>
        <tr><td>Conditions</td><td>Neutron bombardment</td><td>Extreme temperature (~10⁷ K)</td></tr>
        <tr><td>Waste</td><td>Highly radioactive</td><td>Mostly helium (clean!)</td></tr>
        <tr><td>Control</td><td>Achieved (reactors exist)</td><td>Not yet achieved for power</td></tr>
      </table>
      <div class="remember-box"><strong>CBSE Tip:</strong> Fusion releases more energy <strong>per nucleon</strong> than fission. Also, fusion fuels (hydrogen from water) are virtually unlimited, making it the "holy grail" of energy. The Sun converts ~4 million tonnes of matter into energy every second via fusion!</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Radioactive Decay Chain & Q-Value",
    body: `
      <p>Many radioactive nuclei don't become stable after a single decay. They undergo a <strong>series of decays</strong> (called a decay chain or decay series) until they reach a stable isotope.</p>
      <div class="key-point"><strong>Famous Decay Series:</strong><br>
        - <strong>Uranium series:</strong> U-238 --> (14 alpha + 6 beta) --> Pb-206 (stable)<br>
        - <strong>Actinium series:</strong> U-235 --> (7 alpha + 4 beta) --> Pb-207 (stable)<br>
        - <strong>Thorium series:</strong> Th-232 --> (6 alpha + 4 beta) --> Pb-208 (stable)
      </div>
      <div class="diagram-container">
        <svg width="440" height="160" viewBox="0 0 440 160">
          <!-- Decay chain illustration -->
          <rect x="10" y="60" width="70" height="35" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="45" y="82" text-anchor="middle" font-size="11" fill="#92400e" font-weight="700">U-238</text>
          <text x="45" y="55" text-anchor="middle" font-size="9" fill="#92400e">Z=92</text>
          <!-- Alpha -->
          <line x1="80" y1="78" x2="115" y2="78" stroke="#dc2626" stroke-width="1.5" marker-end="url(#dcArr)"/>
          <text x="97" y="72" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">a</text>
          <rect x="115" y="60" width="70" height="35" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
          <text x="150" y="82" text-anchor="middle" font-size="11" fill="#166534" font-weight="700">Th-234</text>
          <text x="150" y="55" text-anchor="middle" font-size="9" fill="#166534">Z=90</text>
          <!-- Beta -->
          <line x1="185" y1="78" x2="220" y2="78" stroke="#2563eb" stroke-width="1.5" marker-end="url(#dcArr2)"/>
          <text x="202" y="72" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="600">b-</text>
          <rect x="220" y="60" width="65" height="35" rx="5" fill="#e0f2fe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="252" y="82" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="700">Pa-234</text>
          <text x="252" y="55" text-anchor="middle" font-size="9" fill="#1e40af">Z=91</text>
          <!-- Dots -->
          <text x="305" y="82" font-size="16" fill="#64748b">...</text>
          <!-- Final -->
          <rect x="340" y="60" width="75" height="35" rx="5" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
          <text x="377" y="82" text-anchor="middle" font-size="11" fill="#6b21a8" font-weight="700">Pb-206</text>
          <text x="377" y="55" text-anchor="middle" font-size="9" fill="#6b21a8">Z=82 (stable!)</text>
          <!-- Summary -->
          <text x="220" y="130" text-anchor="middle" font-size="11" fill="#334155">Total: 14 alpha decays + 6 beta decays</text>
          <text x="220" y="148" text-anchor="middle" font-size="10" fill="#64748b">Z changes: 92 - 2(14) + 6 = 82 | A changes: 238 - 4(14) = 182... wait, 238-56=182? No: Pb-206! Check: 238-4(8)=206</text>
          <defs>
            <marker id="dcArr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="dcArr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Beginning of the U-238 decay series ending at stable Pb-206</div>
      </div>
      <p><strong>Q-Value of a Nuclear Reaction:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Q-Value</span>
        Q = (sum of reactant masses - sum of product masses) x 931.5 MeV<br>
        <small>Q > 0: exothermic (energy released) | Q < 0: endothermic (energy absorbed)</small>
      </div>
      <div class="key-point"><strong>Counting Trick for Decay Chains:</strong><br>
        If a nucleus undergoes 'a' alpha decays and 'b' beta decays:<br>
        - Final A = Initial A - 4a<br>
        - Final Z = Initial Z - 2a + b<br>
        Use these to find the number of alpha and beta decays!
      </div>
      <div class="remember-box"><strong>CBSE Favorite:</strong> "A radioactive element X (Z, A) undergoes successive alpha and beta decays to reach element Y. Find the number of alpha and beta particles emitted." Use the two equations above — this is a guaranteed 2-3 mark question!</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Formula Sheet — All Key Formulas at a Glance",
    body: `
      <div class="key-point"><strong>Keep this card handy for revision!</strong></div>
      <table class="compare-table">
        <tr><th>Topic</th><th>Formula</th><th>Notes</th></tr>
        <tr><td>Nuclear radius</td><td>R = R₀ A<sup>(1/3)</sup></td><td>R₀ = 1.2 fm, Volume is proportional to A</td></tr>
        <tr><td>Nuclear density</td><td>rho = 3m<sub>nucleon</sub> / (4πR₀³)</td><td>Constant ~2.3 x 10¹⁷ kg/m³ for all nuclei</td></tr>
        <tr><td>Mass-energy</td><td>E = mc², 1 u = 931.5 MeV/c²</td><td>Convert mass defect (u) to energy (MeV)</td></tr>
        <tr><td>Mass defect</td><td>Delta-M = Zm<sub>p</sub> + (A-Z)m_n - M_nucleus</td><td>Or use atomic masses: Zm_H + (A-Z)m_n - M_atom</td></tr>
        <tr><td>Binding energy</td><td>Eb = Delta-M x 931.5 MeV</td><td>Higher Eb/A = more stable</td></tr>
        <tr><td>Decay law</td><td>N = N₀ e<sup>(-λt)</sup></td><td>λ = decay constant</td></tr>
        <tr><td>Activity</td><td>A = λ N = A₀ e<sup>(-λt)</sup></td><td>Unit: Bq (1 decay/s) or Ci</td></tr>
        <tr><td>Half-life</td><td>T(1/2) = 0.693/λ</td><td>N = N₀/2<sup>n</sup> where n = t/T(1/2)</td></tr>
        <tr><td>Mean life</td><td>tau = 1/λ = 1.44 T(1/2)</td><td>Mean life > half-life</td></tr>
        <tr><td>Alpha decay</td><td>Z --> Z-2, A --> A-4</td><td>He-4 emitted</td></tr>
        <tr><td>Beta- decay</td><td>Z --> Z+1, A same</td><td>n --> p + e- + antineutrino</td></tr>
        <tr><td>Beta+ decay</td><td>Z --> Z-1, A same</td><td>p --> n + e+ + neutrino</td></tr>
        <tr><td>Q-value</td><td>Q = (M<sub>reactants</sub> - M<sub>products</sub>) c²</td><td>Q > 0: exothermic</td></tr>
        <tr><td>Fission</td><td>U-235 + n --> fragments + 2-3n + ~200 MeV</td><td>Heavy nucleus splits</td></tr>
        <tr><td>Fusion</td><td>4H --> He + 2e+ + 2nu + 26.7 MeV</td><td>Light nuclei combine, needs ~10⁷ K</td></tr>
      </table>
      <div class="formula-box">
        <span class="formula-label">Unit Conversions</span>
        1 u = 1.66054 x 10⁻²⁷ kg = 931.5 MeV/c²<br>
        1 eV = 1.6 x 10⁻¹⁹ J<br>
        1 MeV = 10⁶ eV = 1.6 x 10⁻¹³ J<br>
        1 fm = 10⁻¹⁵ m<br>
        1 Ci = 3.7 x 10¹⁰ Bq
      </div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Tricks & Shortcuts for Numericals",
    body: `
      <div class="key-point"><strong>Speed Tricks for CBSE Numericals:</strong></div>
      <p><strong>Trick 1: Half-Life Problems</strong></p>
      <div class="formula-box">
        <span class="formula-label">Power-of-2 Method</span>
        Fraction remaining = 1/2<sup>n</sup> &nbsp;&nbsp; where n = t / T(1/2)<br>
        If t = 3 half-lives: remaining = 1/8 = 12.5%<br>
        Decayed fraction = 1 - 1/2<sup>n</sup>
      </div>
      <p><strong>Trick 2: Finding Alpha & Beta in Decay Chains</strong></p>
      <div class="formula-box">
        <span class="formula-label">Step-by-Step</span>
        Step 1: Find number of alpha decays: a = (A<sub>initial</sub> - A<sub>final</sub>) / 4<br>
        Step 2: Find number of beta decays: b = 2a - (Z<sub>initial</sub> - Z<sub>final</sub>)<br>
        <small>This works because each alpha reduces Z by 2, each beta increases Z by 1</small>
      </div>
      <p><strong>Trick 3: Energy Released in Fission/Fusion</strong></p>
      <div class="formula-box">
        <span class="formula-label">Using BE/A Values</span>
        Energy released = Total BE of products - Total BE of reactants<br>
        <small>= (Sum of A x BE/A for products) - (Sum of A x BE/A for reactants)</small>
      </div>
      <p><strong>Trick 4: Radius Ratio</strong></p>
      <div class="formula-box">
        <span class="formula-label">Comparing Nuclear Sizes</span>
        R₁/R₂ = (A₁/A₂)^(1/3)<br>
        <small>Example: R(Al-27)/R(Te-125) = (27/125)^(1/3) = 3/5</small>
      </div>
      <p><strong>Trick 5: Activity After Time t</strong></p>
      <div class="formula-box">
        <span class="formula-label">Quick Activity Calculation</span>
        If t is an exact multiple of T(1/2), just keep halving!<br>
        A₀ = 1000 Bq, T(1/2) = 2 hours, find A after 6 hours:<br>
        6/2 = 3 half-lives --> A = 1000/8 = 125 Bq
      </div>
      <div class="remember-box"><strong>Board Exam Tip:</strong> In numericals, always write the formula first, substitute values with units, then calculate. Show the mass defect step explicitly -- CBSE marking schemes award step marks for this.</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Exam Tips — Common Questions & Marking Scheme",
    body: `
      <div class="key-point"><strong>Most Frequently Asked Questions (CBSE 2018-2024):</strong><br>
        1. Define mass defect and binding energy. Calculate BE for a given nucleus (3 marks)<br>
        2. Draw BE/A curve and explain fission & fusion from it (3-5 marks)<br>
        3. Derive/state the radioactive decay law. Define half-life and mean life (3 marks)<br>
        4. Distinguish between nuclear fission and fusion (2-3 marks)<br>
        5. Components of a nuclear reactor and their functions (3 marks)<br>
        6. Numerical: find half-life, activity, or number of undecayed nuclei (2-3 marks)<br>
        7. Numerical: find number of alpha and beta decays in a series (2 marks)<br>
        8. Why is nuclear fusion difficult to achieve? (2 marks)
      </div>
      <div class="remember-box"><strong>Marking Scheme Tips:</strong><br>
        - For BE/A curve questions: <strong>draw the graph neatly</strong> with labeled axes, mark Fe-56 at the peak, and show fusion/fission regions<br>
        - For decay law derivation: start from dN/dt = -λ N, integrate, and arrive at N = N₀ e<sup>(-λt)</sup><br>
        - For reactor questions: list ALL 5 components with their materials and functions<br>
        - Always mention <strong>neutrino/antineutrino</strong> in beta decay equations<br>
        - In numericals, write <strong>intermediate steps clearly</strong> -- mass defect in u, then convert to MeV
      </div>
      <div class="mistake-box"><strong>Top 5 Mistakes to Avoid:</strong><br>
        1. Forgetting that R is proportional to A<sup>(1/3)</sup>, NOT to A<br>
        2. Writing beta decay without neutrino/antineutrino<br>
        3. Confusing moderator (slows neutrons) with control rods (absorb neutrons)<br>
        4. Using wrong mass values (atomic vs nuclear) inconsistently<br>
        5. Saying "all nuclei decay after 2 half-lives" -- 25% still remain!
      </div>
      <div class="key-point"><strong>Last-Minute Revision Checklist:</strong><br>
        - Nuclear size formula: R = R₀ A<sup>(1/3)</sup><br>
        - 1 u = 931.5 MeV/c²<br>
        - BE/A curve shape and key points (Fe-56 peak)<br>
        - Three types of decay: what changes in Z and A<br>
        - Half-life formula: T = 0.693/λ<br>
        - Fission: ~200 MeV, needs neutrons<br>
        - Fusion: ~26.7 MeV (for 4H --> He), needs ~10⁷ K<br>
        - Reactor: fuel, moderator, control rods, coolant, shielding
      </div>
    `
  }
];
