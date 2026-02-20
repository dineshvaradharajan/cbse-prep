// Semiconductor Electronics — Concepts
const ch14Concepts = [
  {
    id: 1, level: "basic",
    title: "Energy Bands in Solids",
    body: `
      <p>When atoms come together to form a solid, their individual energy levels <strong>split</strong> into closely spaced levels forming continuous <strong>energy bands</strong>. Two bands matter most:</p>
      <div class="key-point"><strong>Key Bands:</strong><br>
        1. <strong>Valence Band (VB)</strong> — the highest energy band that is fully or partially filled with electrons at 0 K<br>
        2. <strong>Conduction Band (CB)</strong> — the next higher band, empty or partially filled; electrons here can conduct electricity<br>
        3. <strong>Forbidden Energy Gap (Eg)</strong> — the gap between VB and CB where no electron states exist
      </div>
      <div class="diagram-container">
        <svg width="480" height="260" viewBox="0 0 480 260">
          <!-- Conductor -->
          <rect x="10" y="30" width="130" height="60" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
          <text x="75" y="55" text-anchor="middle" font-size="11" fill="#166534">CB (partially filled)</text>
          <rect x="10" y="90" width="130" height="60" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
          <text x="75" y="125" text-anchor="middle" font-size="11" fill="#166534">VB (overlap)</text>
          <text x="75" y="175" text-anchor="middle" font-size="13" font-weight="700" fill="#166534">Conductor</text>
          <text x="75" y="195" text-anchor="middle" font-size="10" fill="#64748b">Eg = 0 (bands overlap)</text>

          <!-- Semiconductor -->
          <rect x="175" y="30" width="130" height="50" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
          <text x="240" y="60" text-anchor="middle" font-size="11" fill="#92400e">CB (empty at 0 K)</text>
          <rect x="200" y="80" width="80" height="20" rx="3" fill="#fde68a" stroke="#d97706" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="240" y="94" text-anchor="middle" font-size="9" fill="#92400e">Eg ~ 1 eV</text>
          <rect x="175" y="100" width="130" height="50" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
          <text x="240" y="130" text-anchor="middle" font-size="11" fill="#92400e">VB (full at 0 K)</text>
          <text x="240" y="175" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">Semiconductor</text>
          <text x="240" y="195" text-anchor="middle" font-size="10" fill="#64748b">Eg ~ 0.7-1.1 eV</text>

          <!-- Insulator -->
          <rect x="340" y="10" width="130" height="50" rx="5" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
          <text x="405" y="40" text-anchor="middle" font-size="11" fill="#991b1b">CB (empty)</text>
          <rect x="360" y="60" width="90" height="35" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="405" y="82" text-anchor="middle" font-size="9" fill="#991b1b">Eg > 3 eV</text>
          <rect x="340" y="95" width="130" height="50" rx="5" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
          <text x="405" y="125" text-anchor="middle" font-size="11" fill="#991b1b">VB (full)</text>
          <text x="405" y="175" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">Insulator</text>
          <text x="405" y="195" text-anchor="middle" font-size="10" fill="#64748b">Eg ~ 6 eV (diamond)</text>

          <text x="240" y="240" text-anchor="middle" font-size="12" fill="#475569">Energy Band Diagrams for the Three Types of Solids</text>
          <!-- Energy arrow -->
          <line x1="5" y1="200" x2="5" y2="20" stroke="#475569" stroke-width="1.5" marker-end="url(#arrE)"/>
          <text x="8" y="15" font-size="10" fill="#475569">E</text>
          <defs><marker id="arrE" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#475569"/></marker></defs>
        </svg>
        <div class="diagram-caption">Band diagrams: Conductor (overlapping bands), Semiconductor (small gap ~1 eV), Insulator (large gap >3 eV)</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Key Energy Gaps (CBSE Favourites)</span>
        Si: Eg = 1.1 eV &nbsp;|&nbsp; Ge: Eg = 0.67 eV &nbsp;|&nbsp; Diamond: Eg ~ 5.47 eV
      </div>
      <div class="remember-box"><strong>Remember:</strong> At absolute zero (0 K), a pure semiconductor behaves like an insulator because no electrons have enough energy to jump the gap. As temperature increases, some electrons gain energy and jump to the CB, making it slightly conducting.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Intrinsic Semiconductors — Pure Si and Ge",
    body: `
      <p>An <strong>intrinsic semiconductor</strong> is a pure semiconductor with no impurities. Silicon (Si) and Germanium (Ge) are the two most important ones — both have <strong>4 valence electrons</strong> and form <strong>covalent bonds</strong> with their neighbours.</p>
      <div class="key-point"><strong>Key Properties of Intrinsic Semiconductors:</strong><br>
        1. At 0 K: all covalent bonds are intact, no free carriers, behaves as insulator<br>
        2. At room temperature: some bonds break, creating free electrons AND holes<br>
        3. <strong>ne = nh = ni</strong> (electrons = holes = intrinsic carrier concentration)<br>
        4. Conductivity increases with temperature (opposite to metals!)
      </div>
      <div class="formula-box">
        <span class="formula-label">Intrinsic Carrier Concentration</span>
        ne = nh = ni &nbsp;&nbsp; (always equal in pure semiconductors)
      </div>
      <div class="formula-box">
        <span class="formula-label">Conductivity of Intrinsic Semiconductor</span>
        sigma = e(ne.μ<sub>e</sub> + nh.μ<sub>h</sub>) = ni.e(μ<sub>e</sub> + μ<sub>h</sub>)
      </div>
      <p>where <strong>μ<sub>e</sub></strong> = electron mobility, <strong>μ<sub>h</sub></strong> = hole mobility. Electron mobility is always greater than hole mobility.</p>
      <div class="key-point"><strong>What is a Hole?</strong><br>
        When an electron breaks free from a covalent bond, it leaves behind a vacancy called a <strong>hole</strong>. This hole behaves as a <strong>positive charge carrier</strong> with charge +e. A neighbouring electron can fill this hole, effectively making the hole "move" — this is <strong>hole current</strong>.
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> In intrinsic semiconductors, thermal energy creates electron-hole <strong>pairs</strong>. So for every free electron, there is exactly one hole. This is why ne = nh always.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students say "holes move." Technically, it's the electrons that move to fill holes — but the net effect is as if a positive charge moved in the opposite direction. For CBSE, treating holes as positive charge carriers is perfectly fine.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Extrinsic Semiconductors — n-type and p-type",
    body: `
      <p><strong>Extrinsic semiconductors</strong> are created by adding a tiny amount of impurity (called <strong>doping</strong>) to a pure semiconductor. This dramatically increases conductivity. There are two types based on the dopant used:</p>
      <div class="key-point"><strong>n-type Semiconductor (Donor doping):</strong><br>
        - Doped with <strong>pentavalent</strong> atoms (5 valence electrons): P, As, Sb, Bi<br>
        - 4 electrons bond with Si; the <strong>5th electron is free</strong><br>
        - Majority carriers: <strong>electrons</strong> | Minority carriers: holes<br>
        - ne >> nh &nbsp;&nbsp; | &nbsp;&nbsp; The material is still electrically <strong>neutral</strong>
      </div>
      <div class="key-point"><strong>p-type Semiconductor (Acceptor doping):</strong><br>
        - Doped with <strong>trivalent</strong> atoms (3 valence electrons): B, Al, Ga, In<br>
        - 3 electrons bond with Si; <strong>one bond is incomplete</strong> (creates a hole)<br>
        - Majority carriers: <strong>holes</strong> | Minority carriers: electrons<br>
        - nh >> ne &nbsp;&nbsp; | &nbsp;&nbsp; The material is still electrically <strong>neutral</strong>
      </div>
      <div class="formula-box">
        <span class="formula-label">Mass Action Law (very important!)</span>
        ne x nh = ni<sup>2</sup> &nbsp;&nbsp; (valid for BOTH intrinsic and extrinsic)
      </div>
      <p>This means: if you increase electrons by doping (n-type), the hole concentration automatically <strong>decreases</strong> so the product stays constant at ni<sup>2</sup>.</p>
      <div class="compare-table">
        <table>
          <tr><th>Property</th><th>n-type</th><th>p-type</th></tr>
          <tr><td>Dopant valence</td><td>Pentavalent (5)</td><td>Trivalent (3)</td></tr>
          <tr><td>Dopant examples</td><td>P, As, Sb</td><td>B, Al, Ga, In</td></tr>
          <tr><td>Dopant name</td><td>Donor</td><td>Acceptor</td></tr>
          <tr><td>Majority carriers</td><td>Electrons (e-)</td><td>Holes (h+)</td></tr>
          <tr><td>Minority carriers</td><td>Holes</td><td>Electrons</td></tr>
          <tr><td>Energy level added</td><td>Donor level (near CB)</td><td>Acceptor level (near VB)</td></tr>
          <tr><td>Charge of crystal</td><td>Neutral</td><td>Neutral</td></tr>
        </table>
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students think n-type is negatively charged and p-type is positively charged. <strong>WRONG!</strong> Both are electrically neutral. The 'n' and 'p' refer to the majority <em>carrier</em> type, not the charge of the material.</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "p-n Junction Formation & Depletion Region",
    body: `
      <p>When a <strong>p-type</strong> and <strong>n-type</strong> semiconductor are joined, a <strong>p-n junction</strong> is formed. This is the basis of all semiconductor devices!</p>
      <div class="key-point"><strong>What happens at the junction:</strong><br>
        1. Electrons from n-side <strong>diffuse</strong> to p-side (concentration gradient)<br>
        2. Holes from p-side <strong>diffuse</strong> to n-side<br>
        3. This leaves behind <strong>immobile ions</strong>: positive donor ions on n-side, negative acceptor ions on p-side<br>
        4. These exposed ions create an <strong>electric field</strong> from n-side to p-side<br>
        5. This field opposes further diffusion and creates an equilibrium
      </div>
      <div class="diagram-container">
        <svg width="460" height="220" viewBox="0 0 460 220">
          <!-- p-side -->
          <rect x="40" y="50" width="180" height="100" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
          <text x="130" y="40" text-anchor="middle" font-size="14" font-weight="700" fill="#be185d">p-type</text>
          <!-- Holes in p-side -->
          <circle cx="70" cy="80" r="8" fill="#f472b6" stroke="#ec4899" stroke-width="1.5"/><text x="70" y="84" text-anchor="middle" font-size="10" fill="#fff">+</text>
          <circle cx="100" cy="110" r="8" fill="#f472b6" stroke="#ec4899" stroke-width="1.5"/><text x="100" y="114" text-anchor="middle" font-size="10" fill="#fff">+</text>
          <circle cx="70" cy="130" r="8" fill="#f472b6" stroke="#ec4899" stroke-width="1.5"/><text x="70" y="134" text-anchor="middle" font-size="10" fill="#fff">+</text>
          <!-- Acceptor ions near junction (negative) -->
          <rect x="170" y="70" width="14" height="14" rx="2" fill="#fda4af" stroke="#e11d48" stroke-width="1"/><text x="177" y="81" text-anchor="middle" font-size="11" fill="#9f1239">-</text>
          <rect x="170" y="95" width="14" height="14" rx="2" fill="#fda4af" stroke="#e11d48" stroke-width="1"/><text x="177" y="106" text-anchor="middle" font-size="11" fill="#9f1239">-</text>
          <rect x="170" y="120" width="14" height="14" rx="2" fill="#fda4af" stroke="#e11d48" stroke-width="1"/><text x="177" y="131" text-anchor="middle" font-size="11" fill="#9f1239">-</text>
          <!-- Depletion region -->
          <rect x="190" y="50" width="80" height="100" rx="0" fill="#f5f5f4" stroke="#78716c" stroke-width="1.5" stroke-dasharray="5,4"/>
          <text x="230" y="170" text-anchor="middle" font-size="10" fill="#78716c">Depletion Region</text>
          <!-- Donor ions near junction (positive) -->
          <rect x="275" y="70" width="14" height="14" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="1"/><text x="282" y="81" text-anchor="middle" font-size="11" fill="#1e40af">+</text>
          <rect x="275" y="95" width="14" height="14" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="1"/><text x="282" y="106" text-anchor="middle" font-size="11" fill="#1e40af">+</text>
          <rect x="275" y="120" width="14" height="14" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="1"/><text x="282" y="131" text-anchor="middle" font-size="11" fill="#1e40af">+</text>
          <!-- n-side -->
          <rect x="240" y="50" width="180" height="100" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="330" y="40" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">n-type</text>
          <!-- Electrons in n-side -->
          <circle cx="350" cy="80" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/><text x="350" y="84" text-anchor="middle" font-size="10" fill="#fff">-</text>
          <circle cx="380" cy="110" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/><text x="380" y="114" text-anchor="middle" font-size="10" fill="#fff">-</text>
          <circle cx="350" cy="130" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/><text x="350" y="134" text-anchor="middle" font-size="10" fill="#fff">-</text>
          <!-- Electric field arrow -->
          <line x1="270" y1="190" x2="195" y2="190" stroke="#ef4444" stroke-width="2" marker-end="url(#arrEf)"/>
          <text x="232" y="208" text-anchor="middle" font-size="11" fill="#ef4444">E-field (n to p)</text>
          <defs><marker id="arrEf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ef4444"/></marker></defs>
        </svg>
        <div class="diagram-caption">p-n junction showing depletion region with immobile ions and internal electric field</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Barrier Potential (built-in voltage)</span>
        V<sub>barrier</sub> ~ 0.7 V for Si &nbsp;|&nbsp; V<sub>barrier</sub> ~ 0.3 V for Ge
      </div>
      <div class="remember-box"><strong>Remember:</strong> The depletion region is devoid of free charge carriers (no free electrons or holes). It only has <strong>immobile ions</strong>. The width of depletion region is more on the <strong>lightly doped</strong> side.</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Forward & Reverse Bias of p-n Junction",
    body: `
      <p><strong>Biasing</strong> means connecting an external voltage to the p-n junction. The behaviour changes dramatically based on how you connect it.</p>
      <div class="key-point"><strong>Forward Bias:</strong><br>
        - Positive terminal of battery to <strong>p-side</strong>, negative to n-side<br>
        - External voltage <strong>opposes</strong> the barrier potential<br>
        - Depletion region <strong>narrows</strong><br>
        - When V<sub>ext</sub> > V<sub>barrier</sub>: large current flows (majority carriers cross junction)<br>
        - Resistance is <strong>low</strong> (~10-50 ohm)
      </div>
      <div class="key-point"><strong>Reverse Bias:</strong><br>
        - Positive terminal of battery to <strong>n-side</strong>, negative to p-side<br>
        - External voltage <strong>supports</strong> the barrier potential<br>
        - Depletion region <strong>widens</strong><br>
        - Only a tiny <strong>reverse saturation current</strong> flows (due to minority carriers)<br>
        - Resistance is <strong>very high</strong> (~10<sup>6</sup> ohm)
      </div>
      <div class="diagram-container">
        <svg width="460" height="200" viewBox="0 0 460 200">
          <!-- Forward bias -->
          <text x="115" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#166534">Forward Bias</text>
          <rect x="30" y="60" width="80" height="50" rx="5" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="70" y="90" text-anchor="middle" font-size="12" fill="#be185d" font-weight="600">p</text>
          <rect x="120" y="60" width="80" height="50" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="160" y="90" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="600">n</text>
          <!-- Narrow depletion -->
          <rect x="107" y="65" width="16" height="40" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Battery -->
          <line x1="70" y1="130" x2="70" y2="110" stroke="#333" stroke-width="1.5"/>
          <line x1="160" y1="130" x2="160" y2="110" stroke="#333" stroke-width="1.5"/>
          <line x1="50" y1="130" x2="180" y2="130" stroke="#333" stroke-width="1.5"/>
          <text x="55" y="150" font-size="12" fill="#dc2626" font-weight="700">+</text>
          <text x="170" y="150" font-size="12" fill="#2563eb" font-weight="700">-</text>
          <text x="115" y="180" text-anchor="middle" font-size="10" fill="#64748b">Narrow depletion, large current</text>

          <!-- Reverse bias -->
          <text x="345" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">Reverse Bias</text>
          <rect x="260" y="60" width="80" height="50" rx="5" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="300" y="90" text-anchor="middle" font-size="12" fill="#be185d" font-weight="600">p</text>
          <rect x="370" y="60" width="80" height="50" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="410" y="90" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="600">n</text>
          <!-- Wide depletion -->
          <rect x="330" y="55" width="50" height="60" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Battery -->
          <line x1="300" y1="130" x2="300" y2="110" stroke="#333" stroke-width="1.5"/>
          <line x1="410" y1="130" x2="410" y2="110" stroke="#333" stroke-width="1.5"/>
          <line x1="280" y1="130" x2="430" y2="130" stroke="#333" stroke-width="1.5"/>
          <text x="285" y="150" font-size="12" fill="#2563eb" font-weight="700">-</text>
          <text x="420" y="150" font-size="12" fill="#dc2626" font-weight="700">+</text>
          <text x="355" y="180" text-anchor="middle" font-size="10" fill="#64748b">Wide depletion, tiny current</text>
        </svg>
        <div class="diagram-caption">Forward bias (narrow depletion, current flows) vs Reverse bias (wide depletion, almost no current)</div>
      </div>
      <div class="compare-table">
        <table>
          <tr><th>Property</th><th>Forward Bias</th><th>Reverse Bias</th></tr>
          <tr><td>Battery connection</td><td>+ to p, - to n</td><td>+ to n, - to p</td></tr>
          <tr><td>Barrier potential</td><td>Decreases</td><td>Increases</td></tr>
          <tr><td>Depletion width</td><td>Decreases</td><td>Increases</td></tr>
          <tr><td>Current</td><td>Large (mA)</td><td>Very small (uA)</td></tr>
          <tr><td>Resistance</td><td>Low</td><td>Very high</td></tr>
          <tr><td>Carriers crossing</td><td>Majority carriers</td><td>Minority carriers</td></tr>
        </table>
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> In reverse bias, current is NOT zero. A small <strong>reverse saturation current</strong> flows due to minority carriers. CBSE may ask "Is current zero in reverse bias?" — the answer is NO.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Diode Characteristics & V-I Graph",
    body: `
      <p>A <strong>p-n junction diode</strong> is the simplest semiconductor device. It allows current to flow easily in one direction (forward) and blocks it in the other (reverse). Understanding its <strong>V-I characteristic</strong> is essential for CBSE.</p>
      <div class="key-point"><strong>Forward Characteristics:</strong><br>
        - Below the <strong>knee voltage</strong> (cut-in voltage): almost no current flows<br>
        - Knee voltage: ~0.7 V for Si, ~0.3 V for Ge<br>
        - Above knee voltage: current increases rapidly (almost exponentially)<br>
        - The diode behaves nearly as a short circuit
      </div>
      <div class="key-point"><strong>Reverse Characteristics:</strong><br>
        - A small reverse saturation current flows (independent of voltage)<br>
        - At a very high reverse voltage: <strong>breakdown</strong> occurs and current shoots up<br>
        - Breakdown voltage is typically 50-1000 V for standard diodes
      </div>
      <div class="formula-box">
        <span class="formula-label">Diode Current Equation</span>
        I = I<sub>0</sub> [exp(eV/k<sub>B</sub> T) - 1]
      </div>
      <p>where I<sub>0</sub> = reverse saturation current, V = applied voltage, k<sub>B</sub> = Boltzmann constant, T = temperature in Kelvin.</p>
      <div class="key-point"><strong>Special Cases:</strong><br>
        Forward bias (V >> k<sub>B</sub> T/e): I ~ I<sub>0</sub> . exp(eV/k<sub>B</sub> T) &nbsp; (exponential growth)<br>
        Reverse bias (V is negative): I ~ -I<sub>0</sub> &nbsp; (constant small current)
      </div>
      <div class="formula-box">
        <span class="formula-label">Dynamic/AC Resistance</span>
        r<sub>d</sub> = Delta V / Delta I &nbsp; (slope of V-I curve at operating point)
      </div>
      <div class="remember-box"><strong>CBSE Favourite:</strong> "Draw the V-I characteristics of a p-n junction diode" is a very common 2-3 mark question. Make sure you label: knee voltage, forward current in mA, reverse current in uA, breakdown voltage.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Rectifiers — Half-Wave & Full-Wave",
    body: `
      <p>A <strong>rectifier</strong> converts AC (alternating current) to DC (direct current). This is one of the most important applications of a diode.</p>
      <div class="key-point"><strong>Half-Wave Rectifier:</strong><br>
        - Uses <strong>one diode</strong><br>
        - Only the positive half-cycle passes through (when diode is forward biased)<br>
        - Negative half-cycle is blocked (diode is reverse biased)<br>
        - Output: pulsating DC (one pulse per cycle)<br>
        - Efficiency ~ 40.6%
      </div>
      <div class="diagram-container">
        <svg width="440" height="170" viewBox="0 0 440 170">
          <!-- AC source -->
          <circle cx="40" cy="85" r="20" fill="none" stroke="#6366f1" stroke-width="2"/>
          <text x="40" y="90" text-anchor="middle" font-size="11" fill="#6366f1">~</text>
          <!-- Wires -->
          <line x1="60" y1="85" x2="100" y2="85" stroke="#333" stroke-width="1.5"/>
          <line x1="40" y1="105" x2="40" y2="150" stroke="#333" stroke-width="1.5"/>
          <line x1="40" y1="150" x2="350" y2="150" stroke="#333" stroke-width="1.5"/>
          <!-- Diode -->
          <polygon points="100,75 130,85 100,95" fill="#6366f1" stroke="#4f46e5" stroke-width="1.5"/>
          <line x1="130" y1="75" x2="130" y2="95" stroke="#4f46e5" stroke-width="2"/>
          <text x="115" y="68" text-anchor="middle" font-size="10" fill="#4f46e5">D</text>
          <!-- Wire to RL -->
          <line x1="130" y1="85" x2="200" y2="85" stroke="#333" stroke-width="1.5"/>
          <!-- Load resistor -->
          <rect x="200" y="75" width="60" height="20" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
          <text x="230" y="90" text-anchor="middle" font-size="10" fill="#333">R<sub>L</sub></text>
          <!-- Complete circuit -->
          <line x1="260" y1="85" x2="350" y2="85" stroke="#333" stroke-width="1.5"/>
          <line x1="350" y1="85" x2="350" y2="150" stroke="#333" stroke-width="1.5"/>
          <!-- Output waveform hint -->
          <text x="330" y="70" font-size="10" fill="#16a34a">Output: pulsating DC</text>
          <text x="220" y="30" text-anchor="middle" font-size="13" font-weight="600" fill="#4f46e5">Half-Wave Rectifier</text>
        </svg>
        <div class="diagram-caption">Half-wave rectifier: single diode allows only positive half-cycles through the load</div>
      </div>
      <div class="key-point"><strong>Full-Wave Rectifier (Centre-tap Transformer):</strong><br>
        - Uses <strong>two diodes</strong> and a centre-tapped transformer<br>
        - Both halves of AC cycle are used (each diode conducts alternately)<br>
        - Output: pulsating DC (two pulses per cycle) — smoother than half-wave<br>
        - Efficiency ~ 81.2% (double of half-wave)
      </div>
      <div class="compare-table">
        <table>
          <tr><th>Property</th><th>Half-Wave</th><th>Full-Wave</th></tr>
          <tr><td>Diodes used</td><td>1</td><td>2 (or 4 in bridge)</td></tr>
          <tr><td>Output pulses/cycle</td><td>1</td><td>2</td></tr>
          <tr><td>Efficiency</td><td>~40.6%</td><td>~81.2%</td></tr>
          <tr><td>Ripple frequency</td><td>f (= input freq)</td><td>2f</td></tr>
          <tr><td>DC output</td><td>V<sub>m</sub>/π</td><td>2V<sub>m</sub>/π</td></tr>
        </table>
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> The ripple frequency of a full-wave rectifier is <strong>2f</strong> (twice the input frequency), while for half-wave it is <strong>f</strong>. If input is 50 Hz, full-wave ripple = 100 Hz.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Zener Diode — Voltage Regulator",
    body: `
      <p>A <strong>Zener diode</strong> is a specially designed diode that operates in the <strong>reverse breakdown</strong> region. Unlike ordinary diodes, it is designed to work safely in breakdown without getting damaged.</p>
      <div class="key-point"><strong>Key Features of Zener Diode:</strong><br>
        - Heavily doped p-n junction (thin depletion layer)<br>
        - Has a well-defined <strong>breakdown voltage V<sub>Z</sub></strong> (typically 2-200 V)<br>
        - In reverse breakdown: voltage across Zener remains <strong>constant</strong> even if current changes<br>
        - Used as a <strong>voltage regulator</strong> (maintains constant output voltage)
      </div>
      <div class="diagram-container">
        <svg width="400" height="180" viewBox="0 0 400 180">
          <!-- Zener diode symbol -->
          <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#7c3aed">Zener Diode as Voltage Regulator</text>
          <!-- Input -->
          <line x1="20" y1="60" x2="80" y2="60" stroke="#333" stroke-width="1.5"/>
          <text x="50" y="50" text-anchor="middle" font-size="10" fill="#333">V<sub>in</sub></text>
          <!-- Series resistor R<sub>s</sub> -->
          <rect x="80" y="50" width="60" height="20" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
          <text x="110" y="65" text-anchor="middle" font-size="10" fill="#333">R<sub>s</sub></text>
          <!-- Wire to junction -->
          <line x1="140" y1="60" x2="200" y2="60" stroke="#333" stroke-width="1.5"/>
          <!-- Zener diode (vertical) -->
          <polygon points="190,80 210,80 200,110" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5"/>
          <line x1="188" y1="110" x2="212" y2="110" stroke="#6d28d9" stroke-width="2"/>
          <line x1="188" y1="110" x2="184" y2="115" stroke="#6d28d9" stroke-width="2"/>
          <line x1="212" y1="110" x2="216" y2="105" stroke="#6d28d9" stroke-width="2"/>
          <text x="225" y="100" font-size="10" fill="#7c3aed">V<sub>Z</sub></text>
          <!-- Load resistor -->
          <line x1="200" y1="60" x2="300" y2="60" stroke="#333" stroke-width="1.5"/>
          <rect x="300" y="50" width="20" height="80" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
          <text x="340" y="95" font-size="10" fill="#333">R<sub>L</sub></text>
          <!-- Ground lines -->
          <line x1="20" y1="150" x2="320" y2="150" stroke="#333" stroke-width="1.5"/>
          <line x1="20" y1="60" x2="20" y2="150" stroke="#333" stroke-width="1.5"/>
          <line x1="200" y1="110" x2="200" y2="150" stroke="#333" stroke-width="1.5"/>
          <line x1="310" y1="130" x2="310" y2="150" stroke="#333" stroke-width="1.5"/>
          <!-- Output label -->
          <text x="310" y="42" text-anchor="middle" font-size="10" fill="#16a34a">V<sub>out</sub> = V<sub>Z</sub> (constant)</text>
        </svg>
        <div class="diagram-caption">Zener diode voltage regulator circuit — output remains constant at V<sub>Z</sub> even when input fluctuates</div>
      </div>
      <div class="key-point"><strong>How it regulates voltage:</strong><br>
        - If V<sub>in</sub> increases: more current flows through Zener, voltage drop across R<sub>s</sub> increases, but V<sub>Z</sub> stays constant<br>
        - If V<sub>in</sub> decreases: less current through Zener, less drop across R<sub>s</sub>, V<sub>Z</sub> still stays constant<br>
        - Key equation: V<sub>in</sub> = I.R<sub>s</sub> + V<sub>Z</sub> &nbsp;&nbsp; and &nbsp;&nbsp; I = I_Z + I<sub>L</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">Zener Regulator Equations</span>
        V<sub>out</sub> = V<sub>Z</sub> (constant) &nbsp;&nbsp;|&nbsp;&nbsp; I = (V<sub>in</sub> - V<sub>Z</sub>)/R<sub>s</sub> &nbsp;&nbsp;|&nbsp;&nbsp; I<sub>L</sub> = V<sub>Z</sub>/R<sub>L</sub>
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> The Zener diode is always connected in <strong>reverse bias</strong> in a regulator circuit. Its circuit symbol has bent edges at the cathode bar — learn to draw it correctly.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Special Purpose Diodes — LED, Photodiode, Solar Cell",
    body: `
      <p>Beyond regular diodes and Zener diodes, there are several <strong>special purpose diodes</strong> that CBSE frequently asks about. Each exploits a different property of the p-n junction.</p>
      <div class="key-point"><strong>LED (Light Emitting Diode):</strong><br>
        - Works in <strong>forward bias</strong><br>
        - When electrons recombine with holes at the junction, energy is released as <strong>photons</strong> (light)<br>
        - Energy of photon: E = hf = hc/lambda ~ Eg (band gap energy)<br>
        - Material determines colour: GaAsP (red/yellow), GaP (green), GaN/InGaN (blue/white)<br>
        - More efficient than incandescent bulbs; used in displays, indicators, lighting
      </div>
      <div class="key-point"><strong>Photodiode:</strong><br>
        - Works in <strong>reverse bias</strong><br>
        - Light falls on the junction and creates electron-hole pairs<br>
        - This increases the <strong>reverse current</strong> (photocurrent) proportional to light intensity<br>
        - Used in: light detectors, optical communication, remote controls<br>
        - I = I<sub>dark</sub> + I<sub>photocurrent</sub>
      </div>
      <div class="key-point"><strong>Solar Cell (Photovoltaic Cell):</strong><br>
        - Works with <strong>NO external bias</strong> (generates its own EMF!)<br>
        - Light creates e-h pairs at junction; built-in field separates them<br>
        - This generates an open-circuit voltage (~0.5-0.6 V per cell for Si)<br>
        - Materials: Si, GaAs, CdTe<br>
        - Used in: calculators, satellites, solar panels
      </div>
      <div class="compare-table">
        <table>
          <tr><th>Device</th><th>Bias</th><th>Converts</th><th>Key Use</th></tr>
          <tr><td>LED</td><td>Forward</td><td>Electricity to Light</td><td>Displays, lighting</td></tr>
          <tr><td>Photodiode</td><td>Reverse</td><td>Light to Electricity (current)</td><td>Light detectors</td></tr>
          <tr><td>Solar Cell</td><td>No bias (unbiased)</td><td>Light to Electricity (voltage)</td><td>Power generation</td></tr>
        </table>
      </div>
      <div class="formula-box">
        <span class="formula-label">LED Wavelength-Energy Relation</span>
        lambda = hc/Eg &nbsp;&nbsp; (shorter wavelength = larger band gap = higher energy)
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students confuse photodiode and solar cell. A photodiode needs <strong>reverse bias</strong> and detects light intensity. A solar cell needs <strong>no external bias</strong> and generates voltage/power.</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Transistor — npn and pnp Structure & Action",
    body: `
      <p>A <strong>transistor</strong> (transfer + resistor) is a three-terminal semiconductor device that can amplify signals. It's made by sandwiching one type of semiconductor between two layers of the other type.</p>
      <div class="key-point"><strong>Two Types:</strong><br>
        - <strong>npn transistor:</strong> n-type emitter, p-type base, n-type collector<br>
        - <strong>pnp transistor:</strong> p-type emitter, n-type base, p-type collector<br>
        In both: the <strong>base is very thin and lightly doped</strong>, emitter is heavily doped, collector is moderately doped
      </div>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- npn transistor -->
          <text x="120" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">npn Transistor</text>
          <!-- Emitter -->
          <rect x="20" y="60" width="60" height="80" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="50" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">n</text>
          <text x="50" y="155" text-anchor="middle" font-size="10" fill="#1e40af">E</text>
          <!-- Base -->
          <rect x="85" y="70" width="25" height="60" rx="3" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="97" y="105" text-anchor="middle" font-size="12" font-weight="700" fill="#be185d">p</text>
          <text x="97" y="155" text-anchor="middle" font-size="10" fill="#be185d">B</text>
          <!-- Collector -->
          <rect x="115" y="60" width="60" height="80" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="145" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">n</text>
          <text x="145" y="155" text-anchor="middle" font-size="10" fill="#1e40af">C</text>
          <text x="50" y="50" text-anchor="middle" font-size="9" fill="#64748b">(heavy doped)</text>
          <text x="97" y="60" text-anchor="middle" font-size="8" fill="#64748b">(thin)</text>

          <!-- pnp transistor -->
          <text x="340" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#be185d">pnp Transistor</text>
          <rect x="240" y="60" width="60" height="80" rx="4" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="270" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#be185d">p</text>
          <text x="270" y="155" text-anchor="middle" font-size="10" fill="#be185d">E</text>
          <rect x="305" y="70" width="25" height="60" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="317" y="105" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">n</text>
          <text x="317" y="155" text-anchor="middle" font-size="10" fill="#1e40af">B</text>
          <rect x="335" y="60" width="60" height="80" rx="4" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="365" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#be185d">p</text>
          <text x="365" y="155" text-anchor="middle" font-size="10" fill="#be185d">C</text>

          <text x="220" y="190" text-anchor="middle" font-size="11" fill="#475569">Emitter is always heavily doped; Base is thin and lightly doped</text>
        </svg>
        <div class="diagram-caption">npn and pnp transistor structures showing Emitter (E), Base (B), and Collector (C)</div>
      </div>
      <div class="key-point"><strong>Transistor Action (npn in CE mode):</strong><br>
        1. Emitter-base junction is <strong>forward biased</strong> (V_EB or V<sub>BE</sub> applied)<br>
        2. Collector-base junction is <strong>reverse biased</strong> (V<sub>C</sub>B applied)<br>
        3. Emitter injects electrons into base<br>
        4. Base is so thin (~1 um) that most electrons (~95-99%) pass through to collector<br>
        5. Only ~1-5% recombine in base (this is the base current I<sub>B</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Current Relations</span>
        I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub> &nbsp;&nbsp;|&nbsp;&nbsp; I<sub>C</sub> >> I<sub>B</sub> &nbsp;&nbsp;|&nbsp;&nbsp; I<sub>E</sub> ~ I<sub>C</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">Current Gains</span>
        α = I<sub>C</sub>/I<sub>E</sub> (common-base gain, ~ 0.95-0.99)<br>
        β = I<sub>C</sub>/I<sub>B</sub> (common-emitter gain, ~ 20-500)<br>
        β = α/(1 − α)
      </div>
      <div class="remember-box"><strong>Remember:</strong> In any transistor: E-B junction is ALWAYS forward biased, C-B junction is ALWAYS reverse biased (for normal/active mode operation). The arrow in the circuit symbol shows the direction of <strong>conventional current</strong> in the emitter.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Transistor as Amplifier (Common Emitter)",
    body: `
      <p>The most common transistor configuration in CBSE is the <strong>Common Emitter (CE) amplifier</strong>. It provides both voltage and current amplification.</p>
      <div class="key-point"><strong>CE Amplifier Setup (npn):</strong><br>
        - Emitter is <strong>common</strong> to both input and output circuits<br>
        - Input signal: applied between Base and Emitter<br>
        - Output signal: taken between Collector and Emitter<br>
        - V<sub>BE</sub> forward biases E-B junction, V<sub>CE</sub> reverse biases C-B junction
      </div>
      <div class="formula-box">
        <span class="formula-label">Voltage Gain</span>
        A<sub>v</sub> = Delta V<sub>CE</sub> / Delta V<sub>BE</sub> = −β × (R<sub>C</sub> / R_BE)
      </div>
      <div class="formula-box">
        <span class="formula-label">Current Gain (CE)</span>
        β = ΔI<sub>C</sub> / ΔI<sub>B</sub> &nbsp;&nbsp; (at constant V<sub>CE</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Power Gain</span>
        A<sub>P</sub> = β × A<sub>v</sub> = β² x (R<sub>C</sub> / R_BE)
      </div>
      <div class="key-point"><strong>Important Properties of CE Amplifier:</strong><br>
        - Output signal is <strong>180 degrees out of phase</strong> with input (inverted)<br>
        - Voltage gain can be > 1 (amplification!)<br>
        - Current gain = β (typically 20-500)<br>
        - Used in audio amplifiers, radio receivers, etc.
      </div>
      <div class="key-point"><strong>Input and Output Characteristics:</strong><br>
        - <strong>Input characteristic:</strong> I<sub>B</sub> vs V<sub>BE</sub> (at constant V<sub>CE</sub>) — looks like a diode curve<br>
        - <strong>Output characteristic:</strong> I<sub>C</sub> vs V<sub>CE</sub> (at constant I<sub>B</sub>) — shows three regions: active, saturation, cutoff
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> The negative sign in voltage gain means phase inversion (180 degrees). When asked "Why is CE amplifier preferred?", answer: it gives both high voltage gain and high current gain, making the power gain very large.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students forget that the transistor must be in the <strong>active region</strong> for amplification. In saturation and cutoff, it acts as a switch (ON/OFF), not an amplifier.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Transistor as Switch & Digital Electronics Basics",
    body: `
      <p>When a transistor operates between <strong>cutoff</strong> and <strong>saturation</strong> (not in the active region), it acts as a <strong>switch</strong>. This is the foundation of all digital electronics.</p>
      <div class="key-point"><strong>Two States:</strong><br>
        <strong>Cutoff (OFF):</strong> I<sub>B</sub> = 0 leads to I<sub>C</sub> ~ 0 leads to V<sub>CE</sub> ~ V<sub>C</sub>C (output HIGH)<br>
        <strong>Saturation (ON):</strong> I<sub>B</sub> is large leads to I<sub>C</sub> is max leads to V<sub>CE</sub> ~ 0 (output LOW)<br>
        So: Low input gives High output, High input gives Low output — this is a <strong>NOT gate</strong>!
      </div>
      <div class="key-point"><strong>Boolean Logic Basics:</strong><br>
        - Digital circuits use only two voltage levels: <strong>HIGH (1)</strong> and <strong>LOW (0)</strong><br>
        - HIGH typically = 5V (or 3.3V); LOW typically = 0V<br>
        - All operations reduced to three basic logic operations: AND, OR, NOT
      </div>
      <div class="formula-box">
        <span class="formula-label">Boolean Algebra Laws (CBSE)</span>
        A + 0 = A &nbsp;|&nbsp; A + 1 = 1 &nbsp;|&nbsp; A . 0 = 0 &nbsp;|&nbsp; A . 1 = A<br>
        A + A' = 1 &nbsp;|&nbsp; A . A' = 0 &nbsp;|&nbsp; (A')' = A
      </div>
      <div class="formula-box">
        <span class="formula-label">De Morgan's Theorems</span>
        (A + B)' = A' . B' &nbsp;&nbsp;|&nbsp;&nbsp; (A . B)' = A' + B'
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> De Morgan's theorems are very commonly asked. They show that NAND and NOR gates are <strong>universal gates</strong> — you can build ANY logic gate using only NAND gates or only NOR gates.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Logic Gates — Symbols, Truth Tables & Combinations",
    body: `
      <p>Logic gates are the building blocks of digital circuits. CBSE expects you to know the <strong>symbol, truth table, and Boolean expression</strong> for each gate.</p>
      <div class="diagram-container">
        <svg width="460" height="380" viewBox="0 0 460 380">
          <!-- AND Gate -->
          <text x="75" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">AND</text>
          <line x1="10" y1="35" x2="40" y2="35" stroke="#333" stroke-width="1.5"/>
          <line x1="10" y1="55" x2="40" y2="55" stroke="#333" stroke-width="1.5"/>
          <rect x="40" y="25" width="40" height="40" rx="0" fill="none" stroke="#1e40af" stroke-width="2"/>
          <path d="M80,25 Q105,45 80,65" fill="none" stroke="#1e40af" stroke-width="2"/>
          <line x1="100" y1="45" x2="130" y2="45" stroke="#333" stroke-width="1.5"/>
          <text x="75" y="85" text-anchor="middle" font-size="10" fill="#475569">Y = A . B</text>

          <!-- OR Gate -->
          <text x="230" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">OR</text>
          <line x1="165" y1="35" x2="195" y2="35" stroke="#333" stroke-width="1.5"/>
          <line x1="165" y1="55" x2="195" y2="55" stroke="#333" stroke-width="1.5"/>
          <path d="M190,25 Q200,45 190,65" fill="none" stroke="#16a34a" stroke-width="2"/>
          <path d="M190,25 L220,25 Q255,45 220,65 L190,65" fill="none" stroke="#16a34a" stroke-width="2"/>
          <line x1="250" y1="45" x2="280" y2="45" stroke="#333" stroke-width="1.5"/>
          <text x="230" y="85" text-anchor="middle" font-size="10" fill="#475569">Y = A + B</text>

          <!-- NOT Gate -->
          <text x="385" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">NOT</text>
          <line x1="320" y1="45" x2="350" y2="45" stroke="#333" stroke-width="1.5"/>
          <polygon points="350,30 390,45 350,60" fill="none" stroke="#dc2626" stroke-width="2"/>
          <circle cx="395" cy="45" r="5" fill="none" stroke="#dc2626" stroke-width="2"/>
          <line x1="400" y1="45" x2="430" y2="45" stroke="#333" stroke-width="1.5"/>
          <text x="385" y="85" text-anchor="middle" font-size="10" fill="#475569">Y = A'</text>

          <!-- NAND Gate -->
          <text x="75" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="#7c3aed">NAND</text>
          <line x1="10" y1="135" x2="40" y2="135" stroke="#333" stroke-width="1.5"/>
          <line x1="10" y1="155" x2="40" y2="155" stroke="#333" stroke-width="1.5"/>
          <rect x="40" y="125" width="40" height="40" rx="0" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <path d="M80,125 Q105,145 80,165" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="108" cy="145" r="5" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <line x1="113" y1="145" x2="140" y2="145" stroke="#333" stroke-width="1.5"/>
          <text x="75" y="185" text-anchor="middle" font-size="10" fill="#475569">Y = (A.B)'</text>
          <text x="75" y="198" text-anchor="middle" font-size="9" fill="#7c3aed">Universal Gate</text>

          <!-- NOR Gate -->
          <text x="230" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">NOR</text>
          <line x1="165" y1="135" x2="195" y2="135" stroke="#333" stroke-width="1.5"/>
          <line x1="165" y1="155" x2="195" y2="155" stroke="#333" stroke-width="1.5"/>
          <path d="M190,125 Q200,145 190,165" fill="none" stroke="#ea580c" stroke-width="2"/>
          <path d="M190,125 L220,125 Q255,145 220,165 L190,165" fill="none" stroke="#ea580c" stroke-width="2"/>
          <circle cx="258" cy="145" r="5" fill="none" stroke="#ea580c" stroke-width="2"/>
          <line x1="263" y1="145" x2="290" y2="145" stroke="#333" stroke-width="1.5"/>
          <text x="230" y="185" text-anchor="middle" font-size="10" fill="#475569">Y = (A+B)'</text>
          <text x="230" y="198" text-anchor="middle" font-size="9" fill="#ea580c">Universal Gate</text>

          <!-- XOR Gate -->
          <text x="385" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="#0891b2">XOR</text>
          <line x1="320" y1="135" x2="348" y2="135" stroke="#333" stroke-width="1.5"/>
          <line x1="320" y1="155" x2="348" y2="155" stroke="#333" stroke-width="1.5"/>
          <path d="M345,125 Q355,145 345,165" fill="none" stroke="#0891b2" stroke-width="2"/>
          <path d="M350,125 Q360,145 350,165" fill="none" stroke="#0891b2" stroke-width="2"/>
          <path d="M350,125 L380,125 Q415,145 380,165 L350,165" fill="none" stroke="#0891b2" stroke-width="2"/>
          <line x1="410" y1="145" x2="440" y2="145" stroke="#333" stroke-width="1.5"/>
          <text x="385" y="185" text-anchor="middle" font-size="10" fill="#475569">Y = A xor B</text>

          <!-- Truth Tables -->
          <text x="230" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="#333">Truth Tables</text>

          <!-- AND truth table -->
          <text x="60" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="#1e40af">AND</text>
          <text x="30" y="275" font-size="10" fill="#333">A B | Y</text>
          <text x="30" y="290" font-size="10" fill="#333">0 0 | 0</text>
          <text x="30" y="305" font-size="10" fill="#333">0 1 | 0</text>
          <text x="30" y="320" font-size="10" fill="#333">1 0 | 0</text>
          <text x="30" y="335" font-size="10" fill="#333">1 1 | 1</text>

          <!-- OR truth table -->
          <text x="160" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="#16a34a">OR</text>
          <text x="130" y="275" font-size="10" fill="#333">A B | Y</text>
          <text x="130" y="290" font-size="10" fill="#333">0 0 | 0</text>
          <text x="130" y="305" font-size="10" fill="#333">0 1 | 1</text>
          <text x="130" y="320" font-size="10" fill="#333">1 0 | 1</text>
          <text x="130" y="335" font-size="10" fill="#333">1 1 | 1</text>

          <!-- NAND truth table -->
          <text x="260" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="#7c3aed">NAND</text>
          <text x="230" y="275" font-size="10" fill="#333">A B | Y</text>
          <text x="230" y="290" font-size="10" fill="#333">0 0 | 1</text>
          <text x="230" y="305" font-size="10" fill="#333">0 1 | 1</text>
          <text x="230" y="320" font-size="10" fill="#333">1 0 | 1</text>
          <text x="230" y="335" font-size="10" fill="#333">1 1 | 0</text>

          <!-- NOR truth table -->
          <text x="360" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="#ea580c">NOR</text>
          <text x="330" y="275" font-size="10" fill="#333">A B | Y</text>
          <text x="330" y="290" font-size="10" fill="#333">0 0 | 1</text>
          <text x="330" y="305" font-size="10" fill="#333">0 1 | 0</text>
          <text x="330" y="320" font-size="10" fill="#333">1 0 | 0</text>
          <text x="330" y="335" font-size="10" fill="#333">1 1 | 0</text>

          <text x="230" y="370" text-anchor="middle" font-size="11" fill="#475569">NAND and NOR are Universal Gates (can build any gate from them)</text>
        </svg>
        <div class="diagram-caption">Logic gate symbols (AND, OR, NOT, NAND, NOR, XOR) with truth tables</div>
      </div>
      <div class="remember-box"><strong>CBSE Tip (3-5 mark question):</strong> "Show how NAND gates can be used to realize AND, OR, and NOT gates." This is very frequently asked. Practice drawing these combinations.</div>
      <div class="key-point"><strong>NAND as Universal Gate:</strong><br>
        NOT: Connect both inputs of NAND together: Y = (A.A)' = A'<br>
        AND: NAND + NOT: Y = ((A.B)')' = A.B<br>
        OR: NOT both inputs, then NAND: Y = (A'.B')' = A+B (by De Morgan's)
      </div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Formula Sheet — All Key Formulae at a Glance",
    body: `
      <p>Quick reference of all important formulae from Chapter 14 for last-minute revision.</p>
      <div class="formula-box">
        <span class="formula-label">Intrinsic Semiconductor</span>
        ne = nh = ni<br>
        sigma = ni . e . (μ<sub>e</sub> + μ<sub>h</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Mass Action Law</span>
        ne x nh = ni<sup>2</sup> &nbsp;&nbsp; (valid for both intrinsic and extrinsic)
      </div>
      <div class="formula-box">
        <span class="formula-label">Barrier Potential</span>
        Si: V<sub>B</sub> ~ 0.7 V &nbsp;|&nbsp; Ge: V<sub>B</sub> ~ 0.3 V
      </div>
      <div class="formula-box">
        <span class="formula-label">Diode Equation</span>
        I = I<sub>0</sub> [exp(eV/k<sub>B</sub> T) - 1]
      </div>
      <div class="formula-box">
        <span class="formula-label">Dynamic Resistance</span>
        r<sub>d</sub> = Delta V / Delta I
      </div>
      <div class="formula-box">
        <span class="formula-label">Half-Wave Rectifier</span>
        V<sub>dc</sub> = V<sub>m</sub> / π &nbsp;|&nbsp; Ripple frequency = f &nbsp;|&nbsp; Efficiency ~ 40.6%
      </div>
      <div class="formula-box">
        <span class="formula-label">Full-Wave Rectifier</span>
        V<sub>dc</sub> = 2V<sub>m</sub> / π &nbsp;|&nbsp; Ripple frequency = 2f &nbsp;|&nbsp; Efficiency ~ 81.2%
      </div>
      <div class="formula-box">
        <span class="formula-label">Zener Regulator</span>
        V<sub>out</sub> = V<sub>Z</sub> &nbsp;|&nbsp; I = (V<sub>in</sub> - V<sub>Z</sub>) / R<sub>s</sub> &nbsp;|&nbsp; I<sub>L</sub> = V<sub>Z</sub> / R<sub>L</sub> &nbsp;|&nbsp; I = I_Z + I<sub>L</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">LED Photon Energy</span>
        E = hf = hc / λ ~ Eg
      </div>
      <div class="formula-box">
        <span class="formula-label">Transistor Current Relations</span>
        I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub><br>
        α = I<sub>C</sub> / I<sub>E</sub> &nbsp;&nbsp; (0.95-0.99)<br>
        β = I<sub>C</sub> / I<sub>B</sub> &nbsp;&nbsp; (20-500)<br>
        β = α / (1 − α)
      </div>
      <div class="formula-box">
        <span class="formula-label">CE Amplifier</span>
        A<sub>v</sub> = −β × (R<sub>C</sub> / r_in) &nbsp;|&nbsp; A<sub>P</sub> = β × |A<sub>v</sub>| = β² x (R<sub>C</sub> / r_in)
      </div>
      <div class="formula-box">
        <span class="formula-label">De Morgan's Theorems</span>
        (A + B)' = A' . B'<br>
        (A . B)' = A' + B'
      </div>
      <div class="key-point"><strong>Energy Gap Values:</strong><br>
        Si: 1.1 eV &nbsp;|&nbsp; Ge: 0.67 eV &nbsp;|&nbsp; C (diamond): 5.47 eV &nbsp;|&nbsp; GaAs: 1.42 eV
      </div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Exam Tips, Common Mistakes & Scoring Tricks",
    body: `
      <p>This card covers the most common mistakes, tricky CBSE questions, and quick scoring strategies for Chapter 14.</p>
      <div class="key-point"><strong>Most Frequently Asked Topics (Last 10 years):</strong><br>
        1. V-I characteristics of p-n junction diode (2-3 marks)<br>
        2. Zener diode as voltage regulator (with circuit diagram, 3 marks)<br>
        3. Half-wave and full-wave rectifier (with diagrams, 3-5 marks)<br>
        4. Logic gate truth tables and combinations (2-3 marks)<br>
        5. Transistor as amplifier (CE configuration, 3-5 marks)<br>
        6. n-type vs p-type differences (2 marks)<br>
        7. LED, photodiode, solar cell differences (2-3 marks)
      </div>
      <div class="mistake-box"><strong>Mistake #1:</strong> Saying n-type semiconductor is negatively charged. It is <strong>neutral</strong>! The extra electrons come with extra protons in the donor nucleus.</div>
      <div class="mistake-box"><strong>Mistake #2:</strong> Confusing forward/reverse bias connections. Remember: <strong>Forward = p to Positive</strong> (both start with P!). Reverse is the opposite.</div>
      <div class="mistake-box"><strong>Mistake #3:</strong> Drawing Zener diode in forward bias for the regulator circuit. Zener always works in <strong>reverse bias</strong> as a regulator.</div>
      <div class="mistake-box"><strong>Mistake #4:</strong> Forgetting that the CE amplifier output is <strong>180 degrees phase shifted</strong> (inverted) with respect to input.</div>
      <div class="mistake-box"><strong>Mistake #5:</strong> Confusing α and β. α = I<sub>C</sub>/I<sub>E</sub> (always < 1). β = I<sub>C</sub>/I<sub>B</sub> (always >> 1). They are related by β = α/(1−α).</div>
      <div class="remember-box"><strong>Quick Memory Aids:</strong><br>
        - <strong>"PANDA"</strong>: P-type = Acceptor = triNDA (trivalent) = B, Al, Ga, In<br>
        - <strong>"N-DOPe"</strong>: N-type = Donor = Pentavalent = P, As, Sb<br>
        - <strong>"Forward = p to Positive"</strong>: both start with P<br>
        - NAND = NOT + AND (bubble on AND output)<br>
        - NOR = NOT + OR (bubble on OR output)
      </div>
      <div class="key-point"><strong>Diagram Drawing Tips:</strong><br>
        - Always label p-side, n-side, depletion region, barrier potential direction<br>
        - For rectifier circuits: show the transformer, diode direction, load R<sub>L</sub>, and output waveform<br>
        - For transistor: label E, B, C clearly; show arrow on emitter (inward for pnp, outward for npn)<br>
        - For logic gates: use standard symbols; the small circle means inversion (NOT)
      </div>
      <div class="remember-box"><strong>Scoring Strategy:</strong> This chapter is relatively easy and formula-light compared to others. Focus on <strong>diagrams</strong> (they carry marks) and <strong>comparison tables</strong> (forward vs reverse, n-type vs p-type, half-wave vs full-wave). A well-drawn, well-labelled diagram can fetch you full marks even if your explanation is brief.</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "p-n Junction Diode — Complete Working & Solved Problem",
    body: `
      <p>The <strong>p-n junction diode</strong> is the most fundamental semiconductor device. It allows current in one direction (forward) and blocks it in the other (reverse). This card covers the complete working, V-I characteristics, and a CBSE-style numerical.</p>
      <div class="key-point"><strong>Forward Bias Working:</strong><br>
        - Connect p-side to <strong>+ve terminal</strong> and n-side to <strong>-ve terminal</strong> of battery<br>
        - External field opposes the internal barrier field<br>
        - Barrier potential <strong>reduces</strong> (from 0.7 V towards 0)<br>
        - Depletion region <strong>narrows</strong><br>
        - Majority carriers (holes from p, electrons from n) cross the junction<br>
        - <strong>Large current</strong> flows (order of mA)
      </div>
      <div class="key-point"><strong>Reverse Bias Working:</strong><br>
        - Connect p-side to <strong>-ve terminal</strong> and n-side to <strong>+ve terminal</strong><br>
        - External field <strong>supports</strong> the barrier field<br>
        - Barrier potential <strong>increases</strong><br>
        - Depletion region <strong>widens</strong><br>
        - Only minority carriers drift across (reverse saturation current)<br>
        - <strong>Tiny current</strong> flows (order of uA)
      </div>
      <div class="diagram-container">
        <svg width="480" height="230" viewBox="0 0 480 230">
          <!-- Forward Bias Circuit -->
          <text x="120" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">Forward Bias</text>
          <!-- Battery -->
          <line x1="20" y1="140" x2="20" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="20" y1="60" x2="60" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="13" y1="140" x2="27" y2="140" stroke="#333" stroke-width="3"/>
          <line x1="8" y1="130" x2="32" y2="130" stroke="#333" stroke-width="1.5"/>
          <text x="38" y="128" font-size="10" fill="#dc2626" font-weight="700">+</text>
          <text x="38" y="146" font-size="10" fill="#2563eb" font-weight="700">-</text>
          <!-- p-side -->
          <rect x="60" y="40" width="60" height="50" rx="4" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="90" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#be185d">p</text>
          <!-- n-side -->
          <rect x="130" y="40" width="60" height="50" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="160" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">n</text>
          <!-- Narrow depletion -->
          <rect x="118" y="45" width="14" height="40" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Wires -->
          <line x1="190" y1="60" x2="220" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="220" y1="60" x2="220" y2="140" stroke="#333" stroke-width="1.5"/>
          <line x1="20" y1="140" x2="220" y2="140" stroke="#333" stroke-width="1.5"/>
          <!-- Current arrow -->
          <line x1="130" y1="105" x2="100" y2="105" stroke="#16a34a" stroke-width="2" marker-end="url(#arrFwd)"/>
          <text x="115" y="120" text-anchor="middle" font-size="9" fill="#16a34a">I (large, mA)</text>
          <text x="120" y="195" text-anchor="middle" font-size="10" fill="#64748b">Barrier reduces, depletion narrows</text>

          <!-- Reverse Bias Circuit -->
          <text x="370" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Reverse Bias</text>
          <!-- Battery (reversed polarity) -->
          <line x1="270" y1="140" x2="270" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="270" y1="60" x2="310" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="263" y1="140" x2="277" y2="140" stroke="#333" stroke-width="3"/>
          <line x1="258" y1="130" x2="282" y2="130" stroke="#333" stroke-width="1.5"/>
          <text x="288" y="128" font-size="10" fill="#2563eb" font-weight="700">-</text>
          <text x="288" y="146" font-size="10" fill="#dc2626" font-weight="700">+</text>
          <!-- p-side -->
          <rect x="310" y="40" width="60" height="50" rx="4" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="340" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#be185d">p</text>
          <!-- n-side -->
          <rect x="400" y="40" width="60" height="50" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="430" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">n</text>
          <!-- Wide depletion -->
          <rect x="363" y="42" width="44" height="46" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Wires -->
          <line x1="460" y1="60" x2="470" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="470" y1="60" x2="470" y2="140" stroke="#333" stroke-width="1.5"/>
          <line x1="270" y1="140" x2="470" y2="140" stroke="#333" stroke-width="1.5"/>
          <!-- Tiny current -->
          <text x="370" y="120" text-anchor="middle" font-size="9" fill="#dc2626">I ~ 0 (uA only)</text>
          <text x="370" y="195" text-anchor="middle" font-size="10" fill="#64748b">Barrier increases, depletion widens</text>

          <defs><marker id="arrFwd" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#16a34a"/></marker></defs>
        </svg>
        <div class="diagram-caption">Forward bias (p to +ve, current flows) vs Reverse bias (p to -ve, almost no current)</div>
      </div>
      <div class="key-point"><strong>V-I Characteristics — Key Points:</strong><br>
        - <strong>Knee voltage (cut-in voltage):</strong> ~0.3 V for Ge, ~0.7 V for Si<br>
        - Below knee voltage: negligible current (barrier not fully overcome)<br>
        - Above knee voltage: current rises steeply (nearly exponential)<br>
        - In reverse bias: small constant saturation current until <strong>breakdown voltage</strong> is reached<br>
        - At breakdown: current shoots up (diode may get damaged if not Zener type)
      </div>
      <div class="formula-box">
        <span class="formula-label">Dynamic (AC) Resistance</span>
        r<sub>d</sub> = DeltaV / DeltaI &nbsp;&nbsp; (measured from slope of V-I curve at operating point)
      </div>
      <div class="formula-box">
        <span class="formula-label">Forward Bias Circuit Equation</span>
        I = (V<sub>supply</sub> - V<sub>knee</sub>) / R &nbsp;&nbsp; (always subtract knee voltage!)
      </div>
      <div class="solved-problem">
        <strong>Solved Problem (CBSE Style):</strong><br>
        <em>Q: A silicon diode with forward resistance 20 ohm is connected in series with a 100 ohm resistor and a 3V battery. Find the current through the circuit.</em><br><br>
        <strong>Solution:</strong><br>
        For Si diode, V<sub>knee</sub> = 0.7 V<br>
        Total resistance = R<sub>diode</sub> + R<sub>external</sub> = 20 + 100 = 120 ohm<br>
        Net voltage driving current = V - V<sub>knee</sub> = 3 - 0.7 = 2.3 V<br>
        I = 2.3 / 120 = 0.0192 A ~ <strong>19.2 mA</strong><br><br>
        <em>Note: If the question says "ideal diode" or ignores diode resistance, use R = 100 ohm only:</em><br>
        I = (3 - 0.7) / 100 = 2.3 / 100 = <strong>23 mA</strong>
      </div>
      <div class="remember-box"><strong>Tip:</strong> Always subtract the knee voltage in forward bias calculations! This is a very common error that costs marks. For Si use 0.7 V, for Ge use 0.3 V. If the question says "ideal diode," the forward resistance is zero but you still subtract the knee voltage unless told otherwise.</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Half-Wave Rectifier — Circuit, Waveforms & Solved Problem",
    body: `
      <p>A <strong>half-wave rectifier</strong> uses a single diode to convert AC into pulsating DC by allowing only one half of the AC cycle to pass through.</p>
      <div class="key-point"><strong>Circuit Components:</strong><br>
        1. <strong>AC source</strong> (mains supply or transformer secondary)<br>
        2. <strong>Single diode (D)</strong> — acts as a one-way valve<br>
        3. <strong>Load resistor (R<sub>L</sub>)</strong> — where output is taken
      </div>
      <div class="diagram-container">
        <svg width="460" height="180" viewBox="0 0 460 180">
          <text x="230" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#4f46e5">Half-Wave Rectifier Circuit</text>
          <!-- AC source (transformer secondary) -->
          <circle cx="50" cy="90" r="22" fill="none" stroke="#6366f1" stroke-width="2"/>
          <path d="M38,90 Q44,80 50,90 Q56,100 62,90" fill="none" stroke="#6366f1" stroke-width="1.5"/>
          <text x="50" y="125" text-anchor="middle" font-size="10" fill="#6366f1">AC Input</text>
          <!-- Wire from AC top -->
          <line x1="72" y1="90" x2="110" y2="90" stroke="#333" stroke-width="1.5"/>
          <!-- Diode -->
          <polygon points="110,78 145,90 110,102" fill="#6366f1" stroke="#4f46e5" stroke-width="1.5"/>
          <line x1="145" y1="78" x2="145" y2="102" stroke="#4f46e5" stroke-width="2.5"/>
          <text x="128" y="72" text-anchor="middle" font-size="10" fill="#4f46e5" font-weight="600">D</text>
          <!-- Wire to load -->
          <line x1="145" y1="90" x2="220" y2="90" stroke="#333" stroke-width="1.5"/>
          <!-- Load resistor -->
          <rect x="220" y="75" width="20" height="60" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
          <text x="255" y="110" font-size="11" fill="#333">R<sub>L</sub></text>
          <!-- Output labels -->
          <text x="210" y="70" font-size="9" fill="#16a34a">+</text>
          <text x="210" y="148" font-size="9" fill="#16a34a">-</text>
          <text x="195" y="60" font-size="9" fill="#16a34a">V<sub>out</sub></text>
          <!-- Return wire -->
          <line x1="50" y1="112" x2="50" y2="155" stroke="#333" stroke-width="1.5"/>
          <line x1="50" y1="155" x2="240" y2="155" stroke="#333" stroke-width="1.5"/>
          <line x1="240" y1="155" x2="240" y2="135" stroke="#333" stroke-width="1.5"/>

          <!-- Input waveform (small) -->
          <text x="350" y="32" text-anchor="middle" font-size="10" font-weight="600" fill="#6366f1">Input</text>
          <path d="M310,55 Q325,25 340,55 Q355,85 370,55 Q385,25 400,55" fill="none" stroke="#6366f1" stroke-width="1.5"/>
          <line x1="305" y1="55" x2="405" y2="55" stroke="#94a3b8" stroke-width="0.5"/>

          <!-- Output waveform (small) -->
          <text x="350" y="105" text-anchor="middle" font-size="10" font-weight="600" fill="#16a34a">Output</text>
          <line x1="305" y1="130" x2="405" y2="130" stroke="#94a3b8" stroke-width="0.5"/>
          <path d="M310,130 Q325,100 340,130" fill="none" stroke="#16a34a" stroke-width="2"/>
          <line x1="340" y1="130" x2="370" y2="130" stroke="#16a34a" stroke-width="2"/>
          <path d="M370,130 Q385,100 400,130" fill="none" stroke="#16a34a" stroke-width="2"/>
          <text x="355" y="155" text-anchor="middle" font-size="9" fill="#64748b">Only +ve halves pass</text>
        </svg>
        <div class="diagram-caption">Half-wave rectifier circuit with input and output waveforms</div>
      </div>
      <div class="key-point"><strong>Working:</strong><br>
        <strong>Positive half-cycle:</strong> Diode is forward biased (anode is +ve) --> conducts --> current flows through R<sub>L</sub> --> output appears<br>
        <strong>Negative half-cycle:</strong> Diode is reverse biased (anode is -ve) --> blocks --> no current --> output is zero<br>
        Result: Only positive halves appear at output --> <strong>pulsating DC</strong>
      </div>
      <div class="formula-box">
        <span class="formula-label">Half-Wave Rectifier Formulae</span>
        V<sub>dc</sub> = V<sub>m</sub> / π ~ 0.318 V<sub>m</sub><br>
        I<sub>dc</sub> = I<sub>m</sub> / π<br>
        Ripple frequency = f (same as input frequency)<br>
        Efficiency (eta) ~ 40.6%
      </div>
      <div class="solved-problem">
        <strong>Solved Problem (CBSE Style):</strong><br>
        <em>Q: An AC signal of peak voltage 10 V is applied to a half-wave rectifier. Find: (a) DC output voltage, (b) ripple frequency if input frequency is 50 Hz.</em><br><br>
        <strong>Solution:</strong><br>
        (a) V<sub>dc</sub> = V<sub>m</sub> / π = 10 / 3.14 = <strong>3.18 V</strong><br>
        (b) Ripple frequency = input frequency = <strong>50 Hz</strong>
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> In a half-wave rectifier, output is obtained for only HALF the time. The other half is wasted. This is why efficiency is only ~40.6%. For better efficiency, use a full-wave rectifier.</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Full-Wave Rectifier — Circuit, Waveforms & Comparison",
    body: `
      <p>A <strong>full-wave rectifier</strong> uses two diodes with a centre-tapped transformer to convert BOTH halves of the AC cycle into DC, giving a much smoother and more efficient output than a half-wave rectifier.</p>
      <div class="key-point"><strong>Circuit Components:</strong><br>
        1. <strong>Centre-tapped transformer</strong> — provides two equal but opposite voltages<br>
        2. <strong>Two diodes (D1 and D2)</strong> — conduct alternately<br>
        3. <strong>Load resistor (R<sub>L</sub>)</strong> — current flows through it in the SAME direction during both halves
      </div>
      <div class="diagram-container">
        <svg width="460" height="220" viewBox="0 0 460 220">
          <text x="180" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#7c3aed">Full-Wave Rectifier (Centre-Tap)</text>
          <!-- Transformer -->
          <rect x="20" y="40" width="60" height="140" rx="4" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
          <text x="50" y="115" text-anchor="middle" font-size="10" fill="#7c3aed">Trans-</text>
          <text x="50" y="128" text-anchor="middle" font-size="10" fill="#7c3aed">former</text>
          <!-- Centre tap -->
          <line x1="80" y1="110" x2="120" y2="110" stroke="#333" stroke-width="1.5"/>
          <text x="95" y="105" text-anchor="middle" font-size="9" fill="#64748b">CT</text>
          <!-- Top output -->
          <line x1="80" y1="60" x2="120" y2="60" stroke="#333" stroke-width="1.5"/>
          <!-- Bottom output -->
          <line x1="80" y1="160" x2="120" y2="160" stroke="#333" stroke-width="1.5"/>
          <!-- Diode D1 (top) -->
          <polygon points="120,50 155,60 120,70" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5"/>
          <line x1="155" y1="50" x2="155" y2="70" stroke="#6d28d9" stroke-width="2"/>
          <text x="138" y="45" text-anchor="middle" font-size="10" fill="#6d28d9" font-weight="600">D1</text>
          <!-- Diode D2 (bottom) -->
          <polygon points="120,150 155,160 120,170" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5"/>
          <line x1="155" y1="150" x2="155" y2="170" stroke="#6d28d9" stroke-width="2"/>
          <text x="138" y="185" text-anchor="middle" font-size="10" fill="#6d28d9" font-weight="600">D2</text>
          <!-- Junction point -->
          <line x1="155" y1="60" x2="200" y2="60" stroke="#333" stroke-width="1.5"/>
          <line x1="155" y1="160" x2="200" y2="160" stroke="#333" stroke-width="1.5"/>
          <line x1="200" y1="60" x2="200" y2="80" stroke="#333" stroke-width="1.5"/>
          <line x1="200" y1="160" x2="200" y2="140" stroke="#333" stroke-width="1.5"/>
          <!-- Load Resistor -->
          <rect x="190" y="80" width="20" height="60" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
          <text x="225" y="115" font-size="11" fill="#333">R<sub>L</sub></text>
          <!-- Centre-tap return -->
          <line x1="120" y1="110" x2="200" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
          <line x1="200" y1="110" x2="200" y2="140" stroke="#333" stroke-width="0"/>
          <!-- Ground return from CT -->
          <line x1="120" y1="110" x2="120" y2="200" stroke="#333" stroke-width="1.5"/>
          <line x1="120" y1="200" x2="200" y2="200" stroke="#333" stroke-width="1.5"/>
          <line x1="200" y1="200" x2="200" y2="140" stroke="#333" stroke-width="1.5"/>

          <!-- Output waveform area -->
          <text x="360" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#6366f1">Input AC</text>
          <line x1="290" y1="65" x2="430" y2="65" stroke="#94a3b8" stroke-width="0.5"/>
          <path d="M295,65 Q310,35 325,65 Q340,95 355,65 Q370,35 385,65 Q400,95 415,65" fill="none" stroke="#6366f1" stroke-width="1.5"/>

          <text x="360" y="115" text-anchor="middle" font-size="10" font-weight="600" fill="#16a34a">Output DC</text>
          <line x1="290" y1="140" x2="430" y2="140" stroke="#94a3b8" stroke-width="0.5"/>
          <path d="M295,140 Q310,110 325,140 Q340,110 355,140 Q370,110 385,140 Q400,110 415,140" fill="none" stroke="#16a34a" stroke-width="2"/>
          <text x="360" y="165" text-anchor="middle" font-size="9" fill="#64748b">Both halves rectified</text>
          <text x="360" y="180" text-anchor="middle" font-size="9" fill="#64748b">Ripple freq = 2f</text>
        </svg>
        <div class="diagram-caption">Full-wave rectifier using centre-tapped transformer: both half-cycles contribute to output</div>
      </div>
      <div class="key-point"><strong>Working:</strong><br>
        <strong>Positive half-cycle:</strong> Upper end of transformer is +ve --> D1 conducts, D2 blocks --> current flows through R<sub>L</sub> (top to bottom)<br>
        <strong>Negative half-cycle:</strong> Lower end is +ve --> D2 conducts, D1 blocks --> current flows through R<sub>L</sub> in the SAME direction<br>
        Result: Output appears during BOTH halves --> smoother pulsating DC
      </div>
      <div class="formula-box">
        <span class="formula-label">Full-Wave Rectifier Formulae</span>
        V<sub>dc</sub> = 2V<sub>m</sub> / π ~ 0.636 V<sub>m</sub><br>
        I<sub>dc</sub> = 2I<sub>m</sub> / π<br>
        Ripple frequency = 2f (twice the input frequency)<br>
        Efficiency (eta) ~ 81.2%
      </div>
      <div class="compare-table">
        <table>
          <tr><th>Parameter</th><th>Half-Wave</th><th>Full-Wave</th></tr>
          <tr><td>Number of diodes</td><td>1</td><td>2 (centre-tap) or 4 (bridge)</td></tr>
          <tr><td>Conduction per cycle</td><td>One half only</td><td>Both halves</td></tr>
          <tr><td>V<sub>dc</sub> output</td><td>V<sub>m</sub> / π</td><td>2V<sub>m</sub> / π</td></tr>
          <tr><td>Ripple frequency</td><td>f</td><td>2f</td></tr>
          <tr><td>Efficiency</td><td>~40.6%</td><td>~81.2%</td></tr>
          <tr><td>Transformer</td><td>Not needed (simple)</td><td>Centre-tapped required</td></tr>
          <tr><td>Output smoothness</td><td>More ripple</td><td>Less ripple (smoother)</td></tr>
        </table>
      </div>
      <div class="solved-problem">
        <strong>Solved Problem (CBSE Style):</strong><br>
        <em>Q: An AC input of 12 V rms is applied to a full-wave rectifier. Find: (a) peak voltage, (b) DC output voltage, (c) ripple frequency if input is 50 Hz.</em><br><br>
        <strong>Solution:</strong><br>
        (a) V<sub>m</sub> = V<sub>rms</sub> x sqrt(2) = 12 x 1.414 = <strong>16.97 V</strong><br>
        (b) V<sub>dc</sub> = 2V<sub>m</sub> / π = 2 x 16.97 / 3.14 = 33.94 / 3.14 = <strong>10.8 V</strong><br>
        (c) Ripple frequency = 2 x f = 2 x 50 = <strong>100 Hz</strong>
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Full-wave rectifier is DOUBLE of half-wave in almost every way: double efficiency (~81.2% vs ~40.6%), double V<sub>dc</sub> (2V<sub>m</sub>/π vs V<sub>m</sub>/π), double ripple frequency (2f vs f). This makes comparison questions easy!</div>
    `
  },
  {
    id: 19, level: "exam",
    title: "Capacitor Filter Circuit & Board Exam Tips",
    body: `
      <p>The output of a rectifier is <strong>pulsating DC</strong> — it has a DC component plus an AC ripple. To get smooth (nearly pure) DC, we use a <strong>filter circuit</strong>. The simplest and most common filter is the <strong>capacitor filter</strong>.</p>
      <div class="key-point"><strong>Why is a filter needed?</strong><br>
        - Rectified output is NOT smooth DC; it has significant ripple (AC component)<br>
        - Electronic devices (radios, phones, computers) need <strong>steady DC</strong><br>
        - A filter removes/reduces the ripple to give nearly constant DC voltage
      </div>
      <div class="key-point"><strong>How the Capacitor Filter Works:</strong><br>
        1. A capacitor C is connected in <strong>parallel</strong> with the load R<sub>L</sub><br>
        2. During the rising part of the pulse: capacitor <strong>charges</strong> up to peak voltage V<sub>m</sub><br>
        3. During the falling part (when rectifier output drops): capacitor <strong>discharges</strong> slowly through R<sub>L</sub>, maintaining the voltage<br>
        4. Before the capacitor can discharge much, the next pulse arrives and recharges it<br>
        5. Result: output voltage stays nearly constant with only small ripple
      </div>
      <div class="diagram-container">
        <svg width="480" height="250" viewBox="0 0 480 250">
          <text x="240" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#0891b2">Full-Wave Rectifier + Capacitor Filter</text>
          <!-- Rectifier block -->
          <rect x="30" y="50" width="100" height="60" rx="5" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
          <text x="80" y="75" text-anchor="middle" font-size="10" fill="#7c3aed">Full-Wave</text>
          <text x="80" y="90" text-anchor="middle" font-size="10" fill="#7c3aed">Rectifier</text>
          <!-- Output wires from rectifier -->
          <line x1="130" y1="65" x2="180" y2="65" stroke="#333" stroke-width="1.5"/>
          <line x1="130" y1="95" x2="180" y2="95" stroke="#333" stroke-width="1.5"/>
          <line x1="180" y1="95" x2="180" y2="130" stroke="#333" stroke-width="1.5"/>
          <line x1="180" y1="130" x2="320" y2="130" stroke="#333" stroke-width="1.5"/>
          <line x1="180" y1="65" x2="320" y2="65" stroke="#333" stroke-width="1.5"/>
          <!-- Capacitor -->
          <line x1="220" y1="75" x2="220" y2="85" stroke="#0891b2" stroke-width="2"/>
          <line x1="210" y1="85" x2="230" y2="85" stroke="#0891b2" stroke-width="3"/>
          <line x1="210" y1="92" x2="230" y2="92" stroke="#0891b2" stroke-width="3"/>
          <line x1="220" y1="92" x2="220" y2="100" stroke="#0891b2" stroke-width="2"/>
          <!-- Capacitor to ground wire -->
          <line x1="220" y1="65" x2="220" y2="75" stroke="#333" stroke-width="1.5"/>
          <line x1="220" y1="100" x2="220" y2="130" stroke="#333" stroke-width="1.5"/>
          <text x="237" y="92" font-size="10" fill="#0891b2" font-weight="600">C</text>
          <!-- Load Resistor -->
          <rect x="290" y="75" width="20" height="45" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
          <text x="325" y="100" font-size="11" fill="#333">R<sub>L</sub></text>
          <line x1="300" y1="65" x2="300" y2="75" stroke="#333" stroke-width="1.5"/>
          <line x1="300" y1="120" x2="300" y2="130" stroke="#333" stroke-width="1.5"/>
          <!-- Output label -->
          <text x="300" y="55" text-anchor="middle" font-size="10" fill="#16a34a" font-weight="600">V<sub>out</sub> (smooth DC)</text>

          <!-- Waveform comparison -->
          <!-- Without filter -->
          <text x="100" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#dc2626">Without Filter</text>
          <line x1="30" y1="205" x2="175" y2="205" stroke="#94a3b8" stroke-width="0.5"/>
          <path d="M35,205 Q50,175 65,205 Q80,175 95,205 Q110,175 125,205 Q140,175 155,205" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <text x="100" y="225" text-anchor="middle" font-size="9" fill="#64748b">Large ripple, pulsating</text>

          <!-- With filter -->
          <text x="360" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#16a34a">With Filter</text>
          <line x1="280" y1="205" x2="440" y2="205" stroke="#94a3b8" stroke-width="0.5"/>
          <!-- Nearly flat line with tiny ripple -->
          <path d="M285,182 Q295,178 305,182 Q315,178 325,182 Q335,178 345,182 Q355,178 365,182 Q375,178 385,182 Q395,178 405,182 Q415,178 425,182" fill="none" stroke="#16a34a" stroke-width="2"/>
          <text x="360" y="225" text-anchor="middle" font-size="9" fill="#64748b">Small ripple, nearly smooth DC</text>

          <!-- Arrow between -->
          <line x1="190" y1="195" x2="260" y2="195" stroke="#0891b2" stroke-width="1.5" marker-end="url(#arrFilt)"/>
          <text x="225" y="190" text-anchor="middle" font-size="9" fill="#0891b2">Filter</text>
          <defs><marker id="arrFilt" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs>
        </svg>
        <div class="diagram-caption">Capacitor filter smooths the pulsating DC output: charges during peaks, discharges during dips</div>
      </div>
      <div class="key-point"><strong>Factors affecting ripple:</strong><br>
        - <strong>Larger C</strong> (capacitance) --> less ripple (capacitor holds charge longer)<br>
        - <strong>Larger R<sub>L</sub></strong> (load resistance) --> less ripple (slower discharge)<br>
        - <strong>Full-wave rectifier</strong> --> less ripple than half-wave (pulses are closer together, so capacitor has less time to discharge)
      </div>
      <div class="formula-box">
        <span class="formula-label">Ripple Factor</span>
        gamma = 1 / (4 sqrt(3) f C R<sub>L</sub>) &nbsp;&nbsp; (for full-wave with C filter)<br>
        Smaller gamma = smoother DC output
      </div>
      <div class="solved-problem">
        <strong>Solved Problem 1 (CBSE Style):</strong><br>
        <em>Q: Draw a labelled circuit diagram of a full-wave rectifier with a capacitor filter. Explain how the filter reduces ripple in the output.</em><br><br>
        <strong>Answer:</strong> [Draw the circuit as shown above]<br>
        The capacitor C is connected in parallel with R<sub>L</sub>. During each pulse, the capacitor charges up to the peak voltage V<sub>m</sub>. When the rectifier output drops, the capacitor discharges slowly through R<sub>L</sub>, maintaining the output voltage. Before it discharges significantly, the next pulse recharges it. This process fills in the "gaps" between pulses, giving a nearly constant DC output with only a small ripple.
      </div>
      <div class="solved-problem">
        <strong>Solved Problem 2 (CBSE MCQ Style):</strong><br>
        <em>Q: The ripple frequency of a full-wave rectifier connected to a 50 Hz AC supply is:</em><br>
        (a) 25 Hz &nbsp; (b) 50 Hz &nbsp; (c) 100 Hz &nbsp; (d) 200 Hz<br><br>
        <strong>Answer: (c) 100 Hz</strong><br>
        For full-wave rectifier, ripple frequency = 2f = 2 x 50 = 100 Hz
      </div>
      <div class="key-point"><strong>Board Exam Scoring Checklist for Rectifiers + Filters:</strong><br>
        1. Draw the circuit diagram with all labels (1-2 marks)<br>
        2. Show input and output waveforms (1 mark)<br>
        3. Explain working for both half-cycles (1-2 marks)<br>
        4. State efficiency / V<sub>dc</sub> formula (1 mark)<br>
        5. For filter: explain charging/discharging of capacitor (1-2 marks)<br>
        <strong>Total: This topic alone can give you 5-8 marks!</strong>
      </div>
      <div class="compare-table">
        <table>
          <tr><th>Key Difference</th><th>Remember This</th></tr>
          <tr><td>Rectifier converts</td><td>AC to pulsating DC</td></tr>
          <tr><td>Filter converts</td><td>Pulsating DC to smooth DC</td></tr>
          <tr><td>Half-wave ripple freq</td><td>f (same as input)</td></tr>
          <tr><td>Full-wave ripple freq</td><td>2f (double input)</td></tr>
          <tr><td>Knee voltage (Si)</td><td>0.7 V (always subtract in numericals!)</td></tr>
          <tr><td>Knee voltage (Ge)</td><td>0.3 V</td></tr>
        </table>
      </div>
      <div class="remember-box"><strong>Final Board Exam Tips:</strong> Rectifier and filter questions appear almost every year (3-5 marks). Always draw the circuit first (even if not asked — it shows understanding and earns marks). Label all components clearly. Show the waveform transformation: sinusoidal input --> pulsating DC (rectifier) --> smooth DC (filter). This visual flow impresses examiners and helps secure full marks.</div>
    `
  }
];
