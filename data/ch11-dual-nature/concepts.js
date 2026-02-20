// Dual Nature of Radiation and Matter — Concepts
const ch11Concepts = [
  {
    id: 1, level: "basic",
    title: "Photoelectric Effect — The Discovery",
    body: `
      <p>The <strong>photoelectric effect</strong> is the emission of electrons from a metal surface when light of sufficiently high frequency falls on it. The emitted electrons are called <strong>photoelectrons</strong>.</p>
      <div class="diagram-container">
        <svg width="440" height="280" viewBox="0 0 440 280">
          <defs>
            <marker id="ch11arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#eab308"/></marker>
            <marker id="ch11arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="ch11arr3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Glass tube -->
          <rect x="60" y="40" width="320" height="200" rx="20" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="220" y="30" text-anchor="middle" font-size="13" fill="#64748b">Evacuated Glass Tube</text>
          <!-- Emitter plate (cathode) -->
          <rect x="100" y="80" width="10" height="120" rx="2" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2"/>
          <text x="105" y="220" text-anchor="middle" font-size="12" fill="#8b5cf6" font-weight="bold">Emitter</text>
          <text x="105" y="234" text-anchor="middle" font-size="11" fill="#8b5cf6">(Cathode)</text>
          <!-- Collector plate (anode) -->
          <rect x="330" y="80" width="10" height="120" rx="2" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
          <text x="335" y="220" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="bold">Collector</text>
          <text x="335" y="234" text-anchor="middle" font-size="11" fill="#22c55e">(Anode)</text>
          <!-- Light rays hitting cathode -->
          <line x1="20" y1="80" x2="100" y2="120" stroke="#eab308" stroke-width="3" marker-end="url(#ch11arr1)"/>
          <line x1="20" y1="100" x2="100" y2="140" stroke="#eab308" stroke-width="3" marker-end="url(#ch11arr1)"/>
          <line x1="20" y1="120" x2="100" y2="160" stroke="#eab308" stroke-width="3" marker-end="url(#ch11arr1)"/>
          <text x="15" y="70" font-size="12" fill="#eab308" font-weight="bold">Light (hv)</text>
          <!-- Emitted electrons -->
          <circle cx="140" cy="110" r="4" fill="#dc2626"/>
          <line x1="144" y1="110" x2="180" y2="110" stroke="#dc2626" stroke-width="2" marker-end="url(#ch11arr2)"/>
          <circle cx="145" cy="140" r="4" fill="#dc2626"/>
          <line x1="149" y1="140" x2="200" y2="140" stroke="#dc2626" stroke-width="2" marker-end="url(#ch11arr2)"/>
          <circle cx="140" cy="170" r="4" fill="#dc2626"/>
          <line x1="144" y1="170" x2="190" y2="170" stroke="#dc2626" stroke-width="2" marker-end="url(#ch11arr2)"/>
          <text x="185" y="100" font-size="11" fill="#dc2626">e- (photoelectrons)</text>
          <!-- Battery and ammeter -->
          <line x1="105" y1="250" x2="105" y2="265" stroke="#334155" stroke-width="2"/>
          <line x1="335" y1="250" x2="335" y2="265" stroke="#334155" stroke-width="2"/>
          <line x1="105" y1="265" x2="180" y2="265" stroke="#334155" stroke-width="2"/>
          <circle cx="220" cy="265" r="14" fill="none" stroke="#2563eb" stroke-width="2"/>
          <text x="220" y="270" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="bold">A</text>
          <line x1="234" y1="265" x2="280" y2="265" stroke="#334155" stroke-width="2"/>
          <!-- Battery -->
          <line x1="290" y1="259" x2="290" y2="271" stroke="#334155" stroke-width="3"/>
          <line x1="300" y1="255" x2="300" y2="275" stroke="#334155" stroke-width="3"/>
          <text x="295" y="248" text-anchor="middle" font-size="10" fill="#334155">V</text>
          <line x1="300" y1="265" x2="335" y2="265" stroke="#334155" stroke-width="2"/>
        </svg>
        <div class="diagram-caption">Experimental setup for the photoelectric effect showing light incident on emitter (cathode) causing emission of photoelectrons collected at the anode</div>
      </div>
      <div class="key-point"><strong>Key Observations:</strong><br>
      1. Electrons are emitted <strong>almost instantaneously</strong> (within 10<sup>-9</sup> s) - no time lag.<br>
      2. Emission occurs only if light frequency is above a certain <strong>threshold frequency</strong> (v<sub>0</sub>).<br>
      3. Number of photoelectrons is proportional to <strong>intensity</strong> of light.<br>
      4. Maximum kinetic energy of photoelectrons depends on <strong>frequency</strong>, NOT intensity.</div>
      <div class="remember-box"><strong>Historical Timeline:</strong><br>
      - <strong>Heinrich Hertz (1887):</strong> First observed photoelectric effect during his electromagnetic wave experiments.<br>
      - <strong>Wilhelm Hallwachs (1888):</strong> Showed UV light on zinc plate causes loss of negative charge.<br>
      - <strong>Philipp Lenard (1902):</strong> Detailed experimental study - measured the effect of voltage and frequency.<br>
      - <strong>Albert Einstein (1905):</strong> Explained it using photon theory - won Nobel Prize (1921)!</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Hertz and Lenard's Observations",
    body: `
      <p>Before Einstein's explanation, <strong>Hertz</strong> and <strong>Lenard</strong> made key experimental observations that classical wave theory could NOT explain.</p>
      <div class="key-point"><strong>Hertz's Observation (1887):</strong><br>
      While generating electromagnetic waves using a spark-gap transmitter, Hertz noticed that UV light falling on the metal electrodes helped sparks to jump more easily. This was the first observation of the photoelectric effect.</div>
      <div class="key-point"><strong>Lenard's Observations (1902):</strong><br>
      1. <strong>Intensity effect:</strong> Increasing light intensity increased the <strong>photocurrent</strong> (more electrons emitted per second), but did NOT increase the maximum KE of electrons.<br>
      2. <strong>Frequency effect:</strong> Increasing frequency increased the <strong>maximum KE</strong> of photoelectrons.<br>
      3. <strong>Threshold frequency:</strong> Below a certain frequency (v<sub>0</sub>), NO electrons were emitted, no matter how intense the light.</div>
      <table class="compare-table">
        <tr><th>Observation</th><th>Classical Wave Theory Predicts</th><th>Actual Experimental Result</th></tr>
        <tr><td>Effect of intensity on KE</td><td>Higher intensity -> Higher KE</td><td>KE<sub>max</sub> does NOT depend on intensity</td></tr>
        <tr><td>Threshold frequency</td><td>No threshold - any frequency should work if intensity is high enough</td><td>Threshold exists - below v<sub>0</sub>, no emission at any intensity</td></tr>
        <tr><td>Time lag</td><td>Weak light should need time to accumulate energy</td><td>Emission is instantaneous (~10<sup>-9</sup> s)</td></tr>
        <tr><td>Effect of frequency on KE</td><td>KE should depend on intensity, not frequency</td><td>KE<sub>max</sub> increases linearly with frequency</td></tr>
      </table>
      <div class="mistake-box"><strong>Why wave theory fails:</strong> In wave theory, energy depends on intensity (amplitude). So a dim blue light and a bright red light at same intensity should produce same KE. But experiments show that blue light (higher frequency) always gives electrons more KE than red light, regardless of intensity. This was the crisis that Einstein's photon theory resolved!</div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Questions often ask "Which observation of photoelectric effect cannot be explained by wave theory?" The answer involves threshold frequency, instantaneous emission, or KE depending on frequency but not intensity.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Einstein's Photoelectric Equation",
    body: `
      <p>Einstein explained the photoelectric effect in 1905 using <strong>Planck's quantum theory</strong>. He proposed that light consists of discrete packets of energy called <strong>photons</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Energy of a Photon</span>
        E = hv = hc/λ
      </div>
      <p>where h = 6.63 x 10<sup>-34</sup> J.s (Planck's constant), v = frequency, c = 3 x 10<sup>8</sup> m/s, λ = wavelength.</p>
      <div class="formula-box">
        <span class="formula-label">Einstein's Photoelectric Equation</span>
        KE<sub>max</sub> = hv - φ₀ &nbsp;&nbsp; or &nbsp;&nbsp; (1/2)mv<sup>2</sup><sub>max</sub> = hv - hv<sub>0</sub>
      </div>
      <p>where <strong>φ₀</strong> = work function = hv<sub>0</sub> = minimum energy needed to eject an electron from the surface.</p>
      <div class="key-point"><strong>Understanding the equation physically:</strong><br>
      <strong>Energy of photon</strong> = <strong>Work function</strong> + <strong>Max KE of electron</strong><br><br>
      Think of it like paying to exit a building:<br>
      - The photon brings energy hv (the "money")<br>
      - The work function φ₀ is the "exit fee" the electron must pay to escape the metal<br>
      - Whatever energy remains becomes the electron's kinetic energy</div>
      <div class="formula-box">
        <span class="formula-label">In terms of stopping potential</span>
        eV<sub>0</sub> = hv - φ₀ &nbsp;&nbsp; therefore &nbsp;&nbsp; V<sub>0</sub> = (h/e)v - φ₀/e
      </div>
      <div class="key-point"><strong>Key deductions from Einstein's equation:</strong><br>
      1. If v < v<sub>0</sub>: KE would be negative (impossible) -> no emission -> explains threshold frequency!<br>
      2. KE<sub>max</sub> varies <strong>linearly</strong> with v (like y = mx + c, slope = h)<br>
      3. KE<sub>max</sub> does NOT depend on intensity -> explains Lenard's observation!<br>
      4. Each photon interacts with one electron -> emission is instantaneous!</div>
      <div class="remember-box"><strong>Work function values to remember:</strong><br>
      - Cesium (Cs): ~2.14 eV (lowest - used in photoelectric devices)<br>
      - Sodium (Na): ~2.75 eV<br>
      - Copper (Cu): ~4.65 eV<br>
      - Gold (Au): ~5.1 eV<br>
      Lower work function = easier to eject electrons = lower threshold frequency</div>
      <div class="key-point"><strong>Unit conversions to remember:</strong><br>
      1 eV = 1.6 x 10<sup>-19</sup> J<br>
      hc = 12400 eV.A = 1240 eV.nm (very useful for quick calculations!)</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Threshold Frequency and Stopping Potential",
    body: `
      <p>Two critical concepts that appear in almost every CBSE question on photoelectric effect.</p>
      <div class="formula-box">
        <span class="formula-label">Threshold Frequency (v<sub>0</sub>)</span>
        v<sub>0</sub> = φ₀ / h &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; λ<sub>0</sub> = hc / φ₀
      </div>
      <p><strong>Threshold frequency (v<sub>0</sub>)</strong> = the minimum frequency of incident light below which NO photoelectrons are emitted, regardless of intensity. Each metal has a different v<sub>0</sub> determined by its work function.</p>
      <div class="formula-box">
        <span class="formula-label">Stopping Potential (V<sub>0</sub>)</span>
        eV<sub>0</sub> = KE<sub>max</sub> = (1/2)mv<sup>2</sup><sub>max</sub>
      </div>
      <p><strong>Stopping potential (V<sub>0</sub>)</strong> = the minimum negative (retarding) potential applied to the collector that just stops the most energetic photoelectron. At V<sub>0</sub>, photocurrent becomes zero.</p>
      <div class="key-point"><strong>Critical facts about stopping potential:</strong><br>
      1. V<sub>0</sub> depends on <strong>frequency</strong> of light (higher frequency -> higher V<sub>0</sub>)<br>
      2. V<sub>0</sub> does NOT depend on <strong>intensity</strong><br>
      3. V<sub>0</sub> is different for different metals (different work functions)<br>
      4. V<sub>0</sub> is measured in Volts; KE<sub>max</sub> = eV<sub>0</sub> in Joules or V<sub>0</sub> in eV</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students confuse threshold frequency with stopping potential.<br>
      - <strong>Threshold frequency</strong> answers: "Will electrons come out?" (property of the metal)<br>
      - <strong>Stopping potential</strong> answers: "How much energy do the fastest electrons have?" (depends on both metal and light frequency)<br>
      If v = v<sub>0</sub>, electrons just barely come out with zero KE, so V<sub>0</sub> = 0.</div>
      <div class="remember-box"><strong>Quick Trick:</strong> If a question says "light of wavelength λ falls on a metal of work function phi", always start by checking:<br>
      1. Energy of photon E = hc/λ (use hc = 1240 eV.nm for speed)<br>
      2. Is E > phi? If yes, emission occurs. If no, no emission.<br>
      3. If emission occurs: KE<sub>max</sub> = E - phi, and V<sub>0</sub> = KE<sub>max</sub>/e</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Photoelectric Effect — Graphs",
    body: `
      <p>Three important graphs that CBSE loves to ask about. Memorize the shape and what the intercepts/slopes represent!</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <defs>
            <marker id="ch11gax" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#334155"/></marker>
          </defs>
          <!-- Graph 1: KE<sub>max</sub> vs frequency -->
          <text x="100" y="15" text-anchor="middle" font-size="12" fill="#334155" font-weight="bold">KE<tspan font-size="9" dy="3">max</tspan><tspan dy="-3"> vs Frequency</tspan></text>
          <!-- Axes -->
          <line x1="30" y1="190" x2="200" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#ch11gax)"/>
          <line x1="30" y1="190" x2="30" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#ch11gax)"/>
          <text x="200" y="208" font-size="11" fill="#334155">v (freq)</text>
          <text x="10" y="30" font-size="10" fill="#334155">KE</text>
          <!-- Line -->
          <line x1="80" y1="190" x2="185" y2="50" stroke="#dc2626" stroke-width="2.5"/>
          <!-- Threshold -->
          <line x1="80" y1="190" x2="80" y2="200" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="80" y="212" text-anchor="middle" font-size="10" fill="#8b5cf6">v<tspan font-size="8" dy="2">0</tspan></text>
          <!-- Intercept label -->
          <text x="42" y="170" font-size="9" fill="#dc2626">-phi</text>
          <circle cx="30" cy="165" r="3" fill="#dc2626"/>
          <line x1="30" y1="165" x2="30" y2="190" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Slope label -->
          <text x="130" y="100" font-size="10" fill="#dc2626" transform="rotate(-50,130,100)">slope = h</text>

          <!-- Graph 2: Photocurrent vs Collector potential -->
          <text x="340" y="15" text-anchor="middle" font-size="12" fill="#334155" font-weight="bold">Photocurrent vs Potential</text>
          <line x1="260" y1="190" x2="430" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#ch11gax)"/>
          <line x1="340" y1="190" x2="340" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#ch11gax)"/>
          <text x="430" y="208" font-size="11" fill="#334155">V</text>
          <text x="242" y="30" font-size="10" fill="#334155">I</text>
          <!-- High intensity curve -->
          <path d="M290,190 Q295,170 310,100 Q325,55 340,50 Q355,48 380,48 L420,48" fill="none" stroke="#2563eb" stroke-width="2.5"/>
          <text x="415" y="42" font-size="9" fill="#2563eb">I<tspan font-size="7" dy="2">2</tspan><tspan dy="-2"> (high)</tspan></text>
          <!-- Low intensity curve -->
          <path d="M290,190 Q295,175 310,135 Q325,100 340,95 Q355,93 380,93 L420,93" fill="none" stroke="#22c55e" stroke-width="2.5"/>
          <text x="415" y="87" font-size="9" fill="#22c55e">I<tspan font-size="7" dy="2">1</tspan><tspan dy="-2"> (low)</tspan></text>
          <!-- Stopping potential -->
          <line x1="290" y1="185" x2="290" y2="195" stroke="#dc2626" stroke-width="2"/>
          <text x="278" y="210" font-size="9" fill="#dc2626">-V<tspan font-size="7" dy="2">0</tspan></text>
          <text x="278" y="178" font-size="8" fill="#64748b">same V<tspan font-size="6" dy="1">0</tspan></text>
        </svg>
        <div class="diagram-caption">Left: KE<sub>max</sub> vs frequency is a straight line with slope = h. Right: Both intensities have the SAME stopping potential V<sub>0</sub>.</div>
      </div>
      <div class="key-point"><strong>Graph 1 — KE<sub>max</sub> vs Frequency (v):</strong><br>
      - Straight line with <strong>slope = h</strong> (Planck's constant) - same for ALL metals<br>
      - X-intercept = v<sub>0</sub> (threshold frequency) - different for each metal<br>
      - Y-intercept = -φ₀ (negative of work function)<br>
      - For two metals: lines are <strong>parallel</strong> (same slope h), shifted horizontally</div>
      <div class="key-point"><strong>Graph 2 — Photocurrent vs Collector Potential:</strong><br>
      - At large positive V: current saturates (all emitted electrons reach collector)<br>
      - <strong>Saturation current</strong> increases with intensity (more photons = more electrons)<br>
      - Both curves meet x-axis at <strong>same V<sub>0</sub></strong> (stopping potential independent of intensity)<br>
      - This is the graph that PROVES KE<sub>max</sub> does not depend on intensity</div>
      <div class="key-point"><strong>Graph 3 — V<sub>0</sub> vs Frequency:</strong><br>
      Straight line: V<sub>0</sub> = (h/e)v - φ₀/e<br>
      - Slope = h/e<br>
      - X-intercept = v<sub>0</sub><br>
      - Y-intercept = -φ₀/e</div>
      <div class="remember-box"><strong>CBSE Favourite:</strong> "Draw the graph of KE<sub>max</sub> vs v for two metals with work functions phi<sub>1</sub> and phi<sub>2</sub> (phi<sub>1</sub> > phi<sub>2</sub>)." Answer: Two parallel lines (same slope h). Metal 2 has lower threshold frequency (line shifted left). They NEVER intersect.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Effect of Intensity, Frequency, and Potential — Detailed Analysis",
    body: `
      <p>A systematic breakdown of what happens when you change each variable in the photoelectric experiment.</p>
      <table class="compare-table">
        <tr><th>You Change...</th><th>Photocurrent</th><th>KE<sub>max</sub></th><th>Stopping Potential V<sub>0</sub></th></tr>
        <tr><td>Increase <strong>intensity</strong> (same v)</td><td>Increases (more photons)</td><td>No change</td><td>No change</td></tr>
        <tr><td>Increase <strong>frequency</strong> (same intensity)</td><td>May decrease slightly*</td><td>Increases</td><td>Increases</td></tr>
        <tr><td>Increase <strong>collector potential</strong></td><td>Increases until saturation</td><td>No change (property of light)</td><td>No change (property of light)</td></tr>
        <tr><td>Change <strong>metal</strong> (different phi)</td><td>Changes</td><td>Changes</td><td>Changes</td></tr>
      </table>
      <p style="font-size:12px;color:#64748b;">*At same intensity, higher frequency means fewer photons (since intensity = n x hv, so n decreases as v increases)</p>
      <div class="key-point"><strong>Saturation current (I<sub>sat</sub>):</strong><br>
      I<sub>sat</sub> = n x e, where n = number of photoelectrons emitted per second.<br>
      Since each photon ejects at most one electron: n <= N (number of photons per second).<br>
      Number of photons per second = Intensity x Area / (hv) = P/(hv)</div>
      <div class="formula-box">
        <span class="formula-label">Number of photons per second</span>
        N = P / (hv) = P x λ / (hc)
      </div>
      <div class="key-point"><strong>Important relation:</strong><br>
      If power P is same for two different frequencies:<br>
      N<sub>1</sub>/N<sub>2</sub> = v<sub>2</sub>/v<sub>1</sub> = λ<sub>1</sub>/λ<sub>2</sub><br>
      Higher frequency -> fewer photons per second (at same power) -> lower saturation current</div>
      <div class="mistake-box"><strong>Common mistake:</strong> "Increasing intensity increases KE<sub>max</sub>." WRONG! Increasing intensity means more photons per second, not more energy per photon. Each photon still carries the same energy hv. More photons = more electrons = more current. NOT more energetic electrons.</div>
      <div class="remember-box"><strong>Analogy:</strong> Think of photons as bullets and electrons as targets.<br>
      - <strong>Intensity</strong> = number of bullets fired per second (more bullets knock out more targets)<br>
      - <strong>Frequency</strong> = energy of each bullet (harder bullets knock targets out faster/further)<br>
      - A thousand BB pellets cannot penetrate armour, but one rifle bullet can!</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Photon Properties and Particle Nature of Light",
    body: `
      <p>Einstein's photon concept treats light as a stream of particles (photons). Here are the key properties of photons.</p>
      <div class="formula-box">
        <span class="formula-label">Photon Properties</span>
        Energy: E = hv = hc/λ<br>
        Momentum: p = E/c = hv/c = h/λ<br>
        Rest mass: m<sub>0</sub> = 0 (photons are massless)<br>
        Dynamic mass: m = E/c<sup>2</sup> = hv/c<sup>2</sup> = h/(λ.c)
      </div>
      <div class="key-point"><strong>Key facts about photons:</strong><br>
      1. Photons always travel at speed <strong>c = 3 x 10<sup>8</sup> m/s</strong> in vacuum<br>
      2. Photons are electrically <strong>neutral</strong> - not deflected by electric or magnetic fields<br>
      3. Photons have <strong>zero rest mass</strong> but non-zero dynamic mass (m = hv/c<sup>2</sup>)<br>
      4. Photons carry <strong>momentum</strong> p = h/λ (despite having zero rest mass!)<br>
      5. In photon-electron interaction, energy and momentum are <strong>conserved</strong><br>
      6. Photons are NOT conserved - they can be emitted, absorbed, or created</div>
      <table class="compare-table">
        <tr><th>Property</th><th>Photon</th><th>Material Particle</th></tr>
        <tr><td>Rest mass</td><td>Zero</td><td>Non-zero</td></tr>
        <tr><td>Speed</td><td>Always c</td><td>Always < c</td></tr>
        <tr><td>Charge</td><td>Zero</td><td>Can be charged</td></tr>
        <tr><td>Momentum</td><td>p = h/λ</td><td>p = mv</td></tr>
        <tr><td>Energy</td><td>E = hv</td><td>E = (1/2)mv<sup>2</sup> (non-relativistic)</td></tr>
        <tr><td>Number conservation</td><td>Not conserved</td><td>Conserved (in most processes)</td></tr>
      </table>
      <div class="remember-box"><strong>Useful calculations:</strong><br>
      For a photon of wavelength λ:<br>
      - If λ in nm: E (in eV) = 1240/λ<br>
      - Visible light: 400 nm (violet, ~3.1 eV) to 700 nm (red, ~1.77 eV)<br>
      - UV: λ < 400 nm (E > 3.1 eV) - can cause photoelectric effect in most metals</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Writing "mass of photon = 0". Be specific!<br>
      - <strong>Rest mass</strong> of photon = 0 (correct)<br>
      - <strong>Dynamic mass</strong> of photon = hv/c<sup>2</sup> (non-zero!)<br>
      CBSE questions sometimes ask for "equivalent mass" or "effective mass" of a photon - this means dynamic mass.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "de Broglie Hypothesis — Wave Nature of Matter",
    body: `
      <p>In 1924, Louis de Broglie proposed that if light (a wave) can behave as particles, then <strong>matter particles</strong> should also exhibit <strong>wave nature</strong>. This is called <strong>wave-particle duality</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">de Broglie Wavelength</span>
        λ = h / p = h / (mv)
      </div>
      <p>where λ = de Broglie wavelength, h = Planck's constant, p = momentum, m = mass, v = velocity.</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Particle -->
          <circle cx="60" cy="90" r="20" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2"/>
          <text x="60" y="95" text-anchor="middle" font-size="14" fill="white" font-weight="bold">e-</text>
          <!-- Arrow for momentum -->
          <line x1="85" y1="90" x2="140" y2="90" stroke="#dc2626" stroke-width="3" marker-end="url(#ch11arr2)"/>
          <text x="110" y="80" font-size="12" fill="#dc2626" font-weight="bold">p = mv</text>
          <!-- Wave representation -->
          <text x="270" y="50" text-anchor="middle" font-size="13" fill="#334155" font-weight="bold">Associated de Broglie wave</text>
          <path d="M170,90 Q195,40 220,90 Q245,140 270,90 Q295,40 320,90 Q345,140 370,90 Q395,40 420,90" fill="none" stroke="#2563eb" stroke-width="2.5"/>
          <!-- Lambda label -->
          <line x1="170" y1="145" x2="270" y2="145" stroke="#22c55e" stroke-width="2"/>
          <line x1="170" y1="140" x2="170" y2="150" stroke="#22c55e" stroke-width="2"/>
          <line x1="270" y1="140" x2="270" y2="150" stroke="#22c55e" stroke-width="2"/>
          <text x="220" y="165" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="bold">λ = h/mv</text>
        </svg>
        <div class="diagram-caption">Every moving particle has an associated wave with wavelength λ = h/mv (de Broglie wavelength)</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">de Broglie Wavelength — Various Forms</span>
        λ = h / mv &nbsp;&nbsp;&nbsp; (basic form)<br>
        λ = h / sqrt(2mKE) &nbsp;&nbsp;&nbsp; (when KE is given)<br>
        λ = h / sqrt(2mqV) &nbsp;&nbsp;&nbsp; (when accelerating potential V is given)<br>
        For electron: λ = 12.27 / sqrt(V) angstrom (V in volts)
      </div>
      <div class="key-point"><strong>Important derivation — λ from accelerating potential:</strong><br>
      If a particle of charge q is accelerated through potential V:<br>
      KE = qV, and KE = p<sup>2</sup>/2m<br>
      So p = sqrt(2mqV)<br>
      Therefore: λ = h/p = h/sqrt(2mqV)</div>
      <div class="key-point"><strong>Key observations:</strong><br>
      1. λ is inversely proportional to momentum (heavier/faster = shorter wavelength)<br>
      2. A cricket ball (m ~ 0.15 kg, v ~ 30 m/s) has λ ~ 10<sup>-34</sup> m (undetectable!)<br>
      3. An electron (m ~ 10<sup>-30</sup> kg) at reasonable speeds has λ ~ 10<sup>-10</sup> m (comparable to atomic spacing - can be detected!)<br>
      4. de Broglie waves are NOT electromagnetic waves - they are "matter waves" or "probability waves"</div>
      <div class="remember-box"><strong>For the exam:</strong> The formula λ = 12.27/sqrt(V) angstrom is incredibly useful for quick calculations involving electrons. Just plug in V in volts and get λ in angstroms directly!</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "de Broglie Wavelength — Special Cases and Comparisons",
    body: `
      <p>Several important special cases come up in CBSE questions. Let's work through them systematically.</p>
      <div class="formula-box">
        <span class="formula-label">Thermal de Broglie Wavelength</span>
        For a particle in thermal equilibrium: KE = (3/2)kT<br>
        λ = h / sqrt(3mkT)
      </div>
      <p>where k = 1.38 x 10<sup>-23</sup> J/K (Boltzmann constant), T = temperature in Kelvin.</p>
      <div class="key-point"><strong>Comparing de Broglie wavelengths:</strong><br><br>
      <strong>Case 1: Same KE</strong><br>
      λ = h/√(2mKE), so λ is proportional to 1/sqrt(m)<br>
      Lighter particle has LONGER wavelength.<br>
      λ<sub>e</sub>/λ<sub>p</sub> = sqrt(m<sub>p</sub>/m<sub>e</sub>) (electron wavelength >> proton wavelength)<br><br>
      <strong>Case 2: Same momentum</strong><br>
      λ = h/p, so λ is the SAME for all particles!<br>
      λ<sub>e</sub> = λ<sub>p</sub> (if they have same momentum)<br><br>
      <strong>Case 3: Same speed</strong><br>
      λ = h/mv, so λ is proportional to 1/m<br>
      Lighter particle has LONGER wavelength.<br>
      λ<sub>e</sub>/λ<sub>p</sub> = m<sub>p</sub>/m<sub>e</sub> ~ 1836<br><br>
      <strong>Case 4: Accelerated through same potential V</strong><br>
      λ = h/√(2mqV), so λ is proportional to 1/sqrt(mq)<br>
      For proton and electron (same charge): λ<sub>e</sub>/λ<sub>p</sub> = sqrt(m<sub>p</sub>/m<sub>e</sub>)</div>
      <table class="compare-table">
        <tr><th>Condition</th><th>λ depends on</th><th>Who has longer λ?</th></tr>
        <tr><td>Same KE</td><td>1/sqrt(m)</td><td>Lighter particle (electron)</td></tr>
        <tr><td>Same momentum</td><td>Nothing (same for all)</td><td>Equal</td></tr>
        <tr><td>Same speed</td><td>1/m</td><td>Lighter particle (electron)</td></tr>
        <tr><td>Same accelerating V</td><td>1/sqrt(mq)</td><td>Lighter and less charged</td></tr>
      </table>
      <div class="key-point"><strong>de Broglie wavelength of a photon vs electron:</strong><br>
      For photon: λ = hc/E<br>
      For electron: λ = h/√(2m<sub>e</sub>E)<br>
      If both have same energy E, the photon always has a much longer wavelength.<br>
      λ<sub>photon</sub>/λ<sub>electron</sub> = c x sqrt(2m<sub>e</sub>/E) >> 1</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing "same KE" with "same momentum." If two particles have the same KE, the heavier one has MORE momentum (p = sqrt(2mKE)). If they have the same momentum, the lighter one has MORE KE (KE = p<sup>2</sup>/2m).</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Davisson-Germer Experiment — Proof of Matter Waves",
    body: `
      <p>The <strong>Davisson-Germer experiment (1927)</strong> provided the first experimental verification of de Broglie's hypothesis by demonstrating <strong>electron diffraction</strong>.</p>
      <div class="diagram-container">
        <svg width="440" height="300" viewBox="0 0 440 300">
          <defs>
            <marker id="ch11dg1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="ch11dg2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
            <marker id="ch11dg3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Electron gun -->
          <rect x="20" y="30" width="80" height="40" rx="5" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="60" y="55" text-anchor="middle" font-size="11" fill="#334155" font-weight="bold">Electron Gun</text>
          <!-- Electron beam -->
          <line x1="100" y1="50" x2="200" y2="150" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ch11dg1)"/>
          <text x="130" y="85" font-size="10" fill="#dc2626">e- beam</text>
          <!-- Nickel crystal -->
          <rect x="170" y="145" width="100" height="30" rx="3" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2"/>
          <text x="220" y="165" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Ni Crystal</text>
          <!-- Crystal planes -->
          <line x1="185" y1="150" x2="185" y2="172" stroke="#ddd6fe" stroke-width="1"/>
          <line x1="200" y1="150" x2="200" y2="172" stroke="#ddd6fe" stroke-width="1"/>
          <line x1="215" y1="150" x2="215" y2="172" stroke="#ddd6fe" stroke-width="1"/>
          <line x1="230" y1="150" x2="230" y2="172" stroke="#ddd6fe" stroke-width="1"/>
          <line x1="245" y1="150" x2="245" y2="172" stroke="#ddd6fe" stroke-width="1"/>
          <line x1="260" y1="150" x2="260" y2="172" stroke="#ddd6fe" stroke-width="1"/>
          <!-- Scattered beam -->
          <line x1="220" y1="148" x2="320" y2="60" stroke="#22c55e" stroke-width="2.5" marker-end="url(#ch11dg2)"/>
          <text x="290" y="90" font-size="10" fill="#22c55e">Scattered e-</text>
          <!-- Detector -->
          <rect x="320" y="30" width="80" height="40" rx="5" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="360" y="55" text-anchor="middle" font-size="11" fill="#334155" font-weight="bold">Detector</text>
          <!-- Angle labels -->
          <path d="M220,140 Q230,130 235,135" fill="none" stroke="#eab308" stroke-width="1.5"/>
          <text x="242" y="130" font-size="10" fill="#eab308">phi</text>
          <!-- Accelerating voltage -->
          <rect x="20" y="200" width="100" height="50" rx="5" fill="#fef3c7" stroke="#eab308" stroke-width="1"/>
          <text x="70" y="220" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">Accelerating</text>
          <text x="70" y="235" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">Voltage (V)</text>
          <!-- Intensity pattern sketch -->
          <text x="340" y="110" font-size="10" fill="#334155">Peak at V = 54 V</text>
          <text x="340" y="125" font-size="10" fill="#334155">phi = 50 degrees</text>
          <!-- Note -->
          <rect x="140" y="200" width="280" height="80" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1"/>
          <text x="280" y="220" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">Key Result:</text>
          <text x="280" y="238" text-anchor="middle" font-size="10" fill="#166534">At V = 54 V, strong diffraction peak at phi = 50 deg</text>
          <text x="280" y="254" text-anchor="middle" font-size="10" fill="#166534">de Broglie: λ = 12.27/sqrt(54) = 1.67 A</text>
          <text x="280" y="270" text-anchor="middle" font-size="10" fill="#166534">Bragg's law: λ = d sin(phi) = 1.65 A  (MATCH!)</text>
        </svg>
        <div class="diagram-caption">Davisson-Germer experiment: Electrons scattered from a nickel crystal show a diffraction pattern, confirming matter waves</div>
      </div>
      <div class="key-point"><strong>Experimental Setup:</strong><br>
      1. <strong>Electron gun</strong> produces electrons accelerated through voltage V<br>
      2. Electrons hit a <strong>nickel crystal</strong> target<br>
      3. Scattered electrons are detected by a movable <strong>detector</strong><br>
      4. Intensity of scattered electrons is measured at various angles</div>
      <div class="key-point"><strong>Key Observation:</strong><br>
      At accelerating voltage V = 54 V and scattering angle phi = 50 degrees, a strong intensity peak was observed. This peak is due to <strong>constructive interference</strong> (diffraction) of electron waves from crystal planes.</div>
      <div class="formula-box">
        <span class="formula-label">Verification</span>
        From de Broglie: λ = 12.27/sqrt(54) = 1.67 angstrom<br>
        From Bragg's law: d sin phi = 0.91 x sin 65 deg = 0.91 x 0.906 = 1.65 angstrom<br>
        (Note: theta in Bragg's law = (180 - 50)/2 = 65 deg; d = 0.91 A for Ni)
      </div>
      <div class="remember-box"><strong>The match between 1.67 A and 1.65 A</strong> confirmed de Broglie's hypothesis experimentally. This experiment was the direct proof that electrons (and hence matter) have wave nature. Davisson and G.P. Thomson shared the Nobel Prize in 1937 for this discovery.<br><br>
      <strong>Fun fact:</strong> G.P. Thomson was the son of J.J. Thomson. The father won the Nobel Prize for proving the electron is a <strong>particle</strong>, and the son won it for proving the electron is a <strong>wave</strong>!</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Wave-Particle Duality and Heisenberg's Uncertainty",
    body: `
      <p>Wave-particle duality is one of the most fundamental concepts in modern physics. Both radiation and matter exhibit <strong>dual nature</strong>.</p>
      <table class="compare-table">
        <tr><th>Entity</th><th>Particle Nature Evidence</th><th>Wave Nature Evidence</th></tr>
        <tr><td><strong>Radiation</strong> (Light)</td><td>Photoelectric effect, Compton effect</td><td>Interference, Diffraction, Polarization</td></tr>
        <tr><td><strong>Matter</strong> (Electrons)</td><td>Cathode rays, charge/mass measurements</td><td>Davisson-Germer experiment, electron diffraction</td></tr>
      </table>
      <div class="key-point"><strong>Important clarification:</strong> A photon/electron does NOT behave as a wave AND a particle <strong>simultaneously</strong>. In any given experiment, it shows either wave or particle behaviour. This is called <strong>complementarity</strong> (Bohr's complementarity principle).<br><br>
      - Experiments involving propagation (interference, diffraction) show <strong>wave nature</strong><br>
      - Experiments involving energy/momentum exchange (photoelectric, Compton) show <strong>particle nature</strong></div>
      <div class="formula-box">
        <span class="formula-label">Heisenberg's Uncertainty Principle</span>
        Delta(x) . Delta(p) >= h / (4 pi)<br>
        also written as: Delta(x) . Delta(p) >= h-bar / 2
      </div>
      <p>where Delta(x) = uncertainty in position, Delta(p) = uncertainty in momentum, h-bar = h/(2 pi).</p>
      <div class="key-point"><strong>What it means:</strong><br>
      You CANNOT simultaneously know both the exact position and exact momentum of a particle. The more precisely you know one, the less precisely you can know the other. This is not a limitation of measurement instruments — it is a <strong>fundamental property of nature</strong>.<br><br>
      Also: Delta(E) . Delta(t) >= h/(4 pi) — energy and time also have an uncertainty relation.</div>
      <div class="remember-box"><strong>Why this doesn't affect macroscopic objects:</strong><br>
      For a cricket ball (m = 0.15 kg): Delta(x) . Delta(v) >= h/(4 pi m) = 3.5 x 10<sup>-34</sup> m<sup>2</sup>/s<br>
      This is absurdly tiny! So for everyday objects, the uncertainty is negligible.<br><br>
      For an electron (m = 9.1 x 10<sup>-31</sup> kg): Delta(x) . Delta(v) >= 0.058 m<sup>2</sup>/s<br>
      This is significant at atomic scales! If Delta(v) = 10<sup>6</sup> m/s, then Delta(x) >= 0.058/10<sup>6</sup> = 5.8 x 10<sup>-8</sup> m = 0.58 A (comparable to atomic size).</div>
      <div class="mistake-box"><strong>Common exam mistake:</strong> Students write the uncertainty principle as Delta(x) . Delta(p) >= h. The correct relation has h/(4 pi) on the right side, NOT just h. Also, do not confuse h-bar (h/2 pi) with h.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "de Broglie and Bohr Model Connection",
    body: `
      <p>de Broglie's hypothesis beautifully explains <strong>Bohr's quantization condition</strong> for angular momentum in atoms.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <!-- Circular orbit -->
          <circle cx="220" cy="110" r="80" fill="none" stroke="#8b5cf6" stroke-width="2"/>
          <!-- Standing wave on orbit -->
          <path d="M300,110 Q305,80 310,110 Q315,140 320,110" fill="none" stroke="#2563eb" stroke-width="2.5" transform="rotate(0,220,110)"/>
          <path d="M300,110 Q305,80 310,110 Q315,140 320,110" fill="none" stroke="#2563eb" stroke-width="2.5" transform="rotate(60,220,110)"/>
          <path d="M300,110 Q305,80 310,110 Q315,140 320,110" fill="none" stroke="#2563eb" stroke-width="2.5" transform="rotate(120,220,110)"/>
          <path d="M300,110 Q305,80 310,110 Q315,140 320,110" fill="none" stroke="#2563eb" stroke-width="2.5" transform="rotate(180,220,110)"/>
          <path d="M300,110 Q305,80 310,110 Q315,140 320,110" fill="none" stroke="#2563eb" stroke-width="2.5" transform="rotate(240,220,110)"/>
          <path d="M300,110 Q305,80 310,110 Q315,140 320,110" fill="none" stroke="#2563eb" stroke-width="2.5" transform="rotate(300,220,110)"/>
          <!-- Nucleus -->
          <circle cx="220" cy="110" r="8" fill="#dc2626"/>
          <text x="220" y="114" text-anchor="middle" font-size="10" fill="white" font-weight="bold">+</text>
          <!-- Labels -->
          <text x="220" y="15" text-anchor="middle" font-size="12" fill="#334155" font-weight="bold">Standing wave on Bohr orbit (n = 6)</text>
          <text x="220" y="207" text-anchor="middle" font-size="11" fill="#2563eb">Circumference = n x λ</text>
          <text x="305" y="85" font-size="11" fill="#8b5cf6">r</text>
          <line x1="220" y1="110" x2="295" y2="85" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4,3"/>
        </svg>
        <div class="diagram-caption">For an electron in a Bohr orbit, the de Broglie wave forms a standing wave: 2πr = nλ</div>
      </div>
      <div class="key-point"><strong>The Connection:</strong><br>
      For a stable orbit, the electron's de Broglie wave must form a <strong>standing wave</strong> around the orbit. This means the circumference must be an integer multiple of the wavelength:<br><br>
      2πr = nλ &nbsp;&nbsp;&nbsp; (n = 1, 2, 3, ...)<br><br>
      Substituting λ = h/(mv):<br>
      2πr = n h/(mv)<br>
      mvr = nh/(2π) = n h-bar<br><br>
      This is exactly <strong>Bohr's quantization condition</strong>: L = n h-bar!</div>
      <div class="formula-box">
        <span class="formula-label">Bohr's quantization from de Broglie</span>
        2πr<sub>n</sub> = nλ<br>
        Substituting λ = h/p:<br>
        mvr = nh/(2π)<br>
        This is L = n h-bar (Angular momentum is quantized!)
      </div>
      <div class="key-point"><strong>Physical meaning:</strong> Only those orbits are stable where the electron's matter wave "closes upon itself" — forming a standing wave with no destructive interference. If 2πr is NOT a whole number of wavelengths, the wave destructively interferes with itself and that orbit is not allowed.</div>
      <div class="remember-box"><strong>CBSE loves this derivation!</strong> It's a common 2-3 mark question: "Show that de Broglie hypothesis leads to Bohr's quantization condition." Just show:<br>
      1. Standing wave condition: 2πr = nλ<br>
      2. Substitute λ = h/mv<br>
      3. Get mvr = nh/2 pi<br>
      Done!</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Formula Sheet — All Key Formulas at a Glance",
    body: `
      <p>A quick-reference sheet of every formula you need for this chapter. Print this and revise before the exam!</p>
      <div class="formula-box">
        <span class="formula-label">Photon Properties</span>
        Energy: E = hv = hc/λ<br>
        Momentum: p = h/λ = hv/c = E/c<br>
        Dynamic mass: m = hv/c<sup>2</sup> = h/(λ c)<br>
        Rest mass: m<sub>0</sub> = 0<br>
        Speed: always c (in vacuum)
      </div>
      <div class="formula-box">
        <span class="formula-label">Photoelectric Effect</span>
        Einstein's equation: KE<sub>max</sub> = hv - φ₀<br>
        Work function: φ₀ = hv<sub>0</sub> = hc/λ<sub>0</sub><br>
        Stopping potential: eV<sub>0</sub> = hv - φ₀<br>
        V<sub>0</sub> vs v graph: V<sub>0</sub> = (h/e)v - φ₀/e &nbsp;&nbsp;(slope = h/e)<br>
        Saturation current: I<sub>sat</sub> = ne (n = electrons/sec)
      </div>
      <div class="formula-box">
        <span class="formula-label">de Broglie Wavelength</span>
        λ = h/p = h/(mv) &nbsp;&nbsp;(general)<br>
        λ = h/√(2mKE) &nbsp;&nbsp;(given KE)<br>
        λ = h/√(2mqV) &nbsp;&nbsp;(given accelerating potential V)<br>
        λ = h/√(3mkT) &nbsp;&nbsp;(thermal: KE = 3kT/2)<br>
        For electron: λ = 12.27/sqrt(V) angstrom
      </div>
      <div class="formula-box">
        <span class="formula-label">Useful Constants</span>
        h = 6.63 x 10<sup>-34</sup> J.s = 4.14 x 10<sup>-15</sup> eV.s<br>
        hc = 1240 eV.nm = 12400 eV.A<br>
        c = 3 x 10<sup>8</sup> m/s<br>
        e = 1.6 x 10<sup>-19</sup> C<br>
        m<sub>e</sub> = 9.1 x 10<sup>-31</sup> kg<br>
        m<sub>p</sub> = 1.67 x 10<sup>-27</sup> kg<br>
        1 eV = 1.6 x 10<sup>-19</sup> J<br>
        k = 1.38 x 10<sup>-23</sup> J/K
      </div>
      <div class="formula-box">
        <span class="formula-label">Number of Photons / Photoelectrons</span>
        No. of photons/sec: N = P/(hv) = P λ/(hc)<br>
        No. of photoelectrons/sec: n (from I<sub>sat</sub> = ne)<br>
        Quantum efficiency: eta = n/N (usually < 1)
      </div>
      <div class="key-point"><strong>Davisson-Germer Key Numbers:</strong><br>
      V = 54 V, phi = 50 deg, Ni crystal d = 0.91 A<br>
      λ (de Broglie) = 1.67 A, λ (Bragg) = 1.65 A</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Exam Tricks and Shortcuts",
    body: `
      <p>Quick-solve techniques that save time in CBSE boards and competitive exams.</p>
      <div class="key-point"><strong>Trick 1: Quick energy from wavelength</strong><br>
      E (in eV) = 1240 / λ (in nm)<br>
      Example: λ = 400 nm -> E = 1240/400 = 3.1 eV<br>
      Example: λ = 620 nm -> E = 1240/620 = 2 eV</div>
      <div class="key-point"><strong>Trick 2: Electron wavelength from voltage</strong><br>
      λ (in angstrom) = 12.27 / sqrt(V)<br>
      Example: V = 100 V -> λ = 12.27/10 = 1.227 A<br>
      Example: V = 54 V -> λ = 12.27/7.35 = 1.67 A (Davisson-Germer!)</div>
      <div class="key-point"><strong>Trick 3: Ratio problems</strong><br>
      If same KE: λ<sub>1</sub>/λ<sub>2</sub> = sqrt(m<sub>2</sub>/m<sub>1</sub>)<br>
      If same V: λ<sub>1</sub>/λ<sub>2</sub> = sqrt(m<sub>2</sub>q<sub>2</sub>) / sqrt(m<sub>1</sub>q<sub>1</sub>)<br>
      If same momentum: λ<sub>1</sub> = λ<sub>2</sub> (always!)<br>
      If same speed: λ<sub>1</sub>/λ<sub>2</sub> = m<sub>2</sub>/m<sub>1</sub></div>
      <div class="key-point"><strong>Trick 4: Photoelectric problems — systematic approach</strong><br>
      Step 1: Find photon energy: E = hc/λ or E = hv<br>
      Step 2: Check E > phi? (If not, no emission)<br>
      Step 3: KE<sub>max</sub> = E - phi<br>
      Step 4: V<sub>0</sub> = KE<sub>max</sub>/e (if in eV, V<sub>0</sub> in volts has same number!)<br>
      Step 5: v<sub>max</sub> = sqrt(2 KE<sub>max</sub>/m)</div>
      <div class="key-point"><strong>Trick 5: If wavelength is halved...</strong><br>
      - Photon energy doubles (E = hc/λ)<br>
      - Photon momentum doubles (p = h/λ)<br>
      - KE<sub>max</sub> of photoelectron: use Einstein's equation (NOT simply doubles!)<br>
      &nbsp;&nbsp; New KE = 2hv - phi (not 2 times old KE unless phi = 0)</div>
      <div class="remember-box"><strong>Trick 6: Quick alpha particle comparison</strong><br>
      Alpha particle: q = 2e, m = 4m<sub>p</sub><br>
      Deuteron: q = e, m = 2m<sub>p</sub><br>
      Proton: q = e, m = m<sub>p</sub><br>
      Electron: q = e, m = m<sub>e</sub><br><br>
      For same accelerating potential V:<br>
      λ is proportional to 1/sqrt(mq), so:<br>
      λ<sub>alpha</sub> : λ<sub>d</sub> : λ<sub>p</sub> = 1/sqrt(8) : 1/sqrt(2) : 1/1 = 1 : 2 : 2 sqrt(2)</div>
      <div class="mistake-box"><strong>Exam trap:</strong> "A photon and an electron have the same wavelength. Which has more energy?"<br>
      For photon: E = hc/λ<br>
      For electron: E = h<sup>2</sup>/(2m λ<sup>2</sup>) = p<sup>2</sup>/2m<br>
      Photon energy = (h/λ) x c = pc<br>
      Electron energy = p<sup>2</sup>/(2m) = pc x p/(2mc)<br>
      Since p = h/λ is same and pc >> p<sup>2</sup>/(2m) for typical wavelengths, <strong>the photon has much more energy</strong>.</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Most Expected CBSE Questions and How to Answer Them",
    body: `
      <p>Year after year, these question types keep appearing. Here's how to write perfect answers.</p>
      <div class="key-point"><strong>Q1: "State Einstein's photoelectric equation. Explain how it accounts for (i) threshold frequency, (ii) independence of KE from intensity."</strong> [3 marks]<br><br>
      <strong>Answer template:</strong><br>
      Einstein's equation: KE<sub>max</sub> = hv - φ₀<br><br>
      (i) When v < v<sub>0</sub> (where φ₀ = hv<sub>0</sub>), the expression hv - φ₀ becomes negative. Since KE cannot be negative, no emission occurs below threshold frequency v<sub>0</sub>.<br><br>
      (ii) KE<sub>max</sub> = hv - φ₀ depends only on frequency v and work function φ₀. Intensity does not appear in this equation. Higher intensity means more photons (hence more photoelectrons and higher current), but each photon still has the same energy hv.</div>
      <div class="key-point"><strong>Q2: "Draw graphs showing variation of (i) photocurrent vs intensity, (ii) KE<sub>max</sub> vs frequency for two metals."</strong> [2-3 marks]<br><br>
      <strong>Answer:</strong><br>
      (i) Photocurrent vs intensity: straight line through origin (I is proportional to intensity at constant frequency above v<sub>0</sub>)<br>
      (ii) Two parallel straight lines with same slope (= h) but different x-intercepts (v<sub>01</sub> and v<sub>02</sub>). Metal with lower work function has lower threshold frequency.</div>
      <div class="key-point"><strong>Q3: "Derive de Broglie wavelength for an electron accelerated through potential V."</strong> [2-3 marks]<br><br>
      <strong>Answer:</strong><br>
      KE gained = eV (work done by potential)<br>
      (1/2)mv<sup>2</sup> = eV, so v = sqrt(2eV/m)<br>
      Momentum p = mv = sqrt(2meV)<br>
      de Broglie wavelength λ = h/p = h/sqrt(2meV)<br>
      Substituting values: λ = 12.27/sqrt(V) angstrom</div>
      <div class="key-point"><strong>Q4: "Show that Bohr's angular momentum quantization follows from de Broglie hypothesis."</strong> [2 marks]<br><br>
      <strong>Answer:</strong><br>
      For electron in nth orbit, standing wave condition gives: 2πr<sub>n</sub> = nλ<br>
      Using λ = h/(mv): 2πr<sub>n</sub> = nh/(mv)<br>
      Therefore: mv r<sub>n</sub> = nh/(2π)<br>
      This gives: L = n h-bar, which is Bohr's quantization condition.</div>
      <div class="key-point"><strong>Q5: "Describe Davisson-Germer experiment and how it verified de Broglie hypothesis."</strong> [3-5 marks]<br><br>
      <strong>Answer must include:</strong><br>
      1. Setup: electron gun, Ni crystal, movable detector<br>
      2. Observation: intensity peak at V = 54 V, angle = 50 degrees<br>
      3. de Broglie calculation: λ = 12.27/sqrt(54) = 1.67 A<br>
      4. Bragg's law calculation: λ = 1.65 A<br>
      5. Close match confirms wave nature of electrons</div>
      <div class="remember-box"><strong>Last-minute checklist:</strong><br>
      - Can you write Einstein's equation and explain each term? <br>
      - Can you draw ALL three standard graphs (KE vs v, I vs V, V<sub>0</sub> vs v)?<br>
      - Can you derive de Broglie wavelength from accelerating potential?<br>
      - Can you connect de Broglie to Bohr's model?<br>
      - Can you describe Davisson-Germer with the key numbers (54 V, 50 deg)?<br>
      If yes to all, you are ready for full marks in this chapter!</div>
    `
  }
];
