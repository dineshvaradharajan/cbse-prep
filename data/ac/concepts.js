// Alternating Current — Concepts
const acConcepts = [
  {
    id: 1, level: "basic",
    title: "What is Alternating Current (AC)?",
    body: `
      <p><strong>Alternating Current (AC)</strong> is a current that <strong>changes direction periodically</strong>. Unlike DC (direct current) which flows in one direction, AC keeps switching back and forth.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <line x1="40" y1="100" x2="420" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="40" y1="20" x2="40" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="430" y="104" font-size="12" fill="#64748b">t</text>
          <text x="25" y="20" font-size="12" fill="#64748b">V</text>
          <path d="M 40 100 Q 100 20, 160 100 Q 220 180, 280 100 Q 340 20, 400 100" stroke="#2563eb" stroke-width="3" fill="none"/>
          <text x="98" y="42" font-size="12" fill="#2563eb" font-weight="600">V₀</text>
          <line x1="40" y1="40" x2="400" y2="40" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
          <line x1="40" y1="160" x2="400" y2="160" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
          <text x="218" y="175" font-size="12" fill="#dc2626" font-weight="600">–V₀</text>
          <line x1="40" y1="188" x2="280" y2="188" stroke="#64748b" stroke-width="1"/>
          <line x1="40" y1="184" x2="40" y2="192" stroke="#64748b" stroke-width="1"/>
          <line x1="280" y1="184" x2="280" y2="192" stroke="#64748b" stroke-width="1"/>
          <text x="160" y="198" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">T (one period)</text>
        </svg>
        <div class="diagram-caption">AC voltage varies sinusoidally — it goes positive, then negative, then repeats</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">AC Voltage & Current</span>
        V = V₀ sin ωt &nbsp;&nbsp;&nbsp; I = I₀ sin ωt
      </div>
      <p>where <strong>V₀</strong> = peak voltage, <strong>I₀</strong> = peak current, <strong>ω = 2πf = 2π/T</strong></p>
      <table class="compare-table">
        <tr><th>Property</th><th>AC</th><th>DC</th></tr>
        <tr><td>Direction</td><td>Reverses periodically</td><td>One direction only</td></tr>
        <tr><td>Magnitude</td><td>Changes (sinusoidal)</td><td>Constant</td></tr>
        <tr><td>Source</td><td>AC generator</td><td>Battery/cell</td></tr>
        <tr><td>Transmission</td><td>Easy (can step up/down)</td><td>Difficult over long distances</td></tr>
      </table>
      <div class="remember-box"><strong>India's AC supply:</strong> Frequency = <strong>50 Hz</strong>, which means current reverses direction 100 times per second (2 reversals per cycle). Household voltage = <strong>220 V rms</strong>.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Peak, RMS, and Average Values",
    body: `
      <p>Since AC constantly changes, we need different ways to describe its "size":</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Three Important Values</span>
        <strong>Peak (V₀):</strong> Maximum value of voltage/current<br>
        <strong>RMS:</strong> V(rms) = V₀ / √2 = <strong>0.707 × V₀</strong><br>
        <strong>Average:</strong> V(avg) = 2V₀ / π = <strong>0.637 × V₀</strong>
      </div>
      <div class="key-point"><strong>RMS (Root Mean Square)</strong> is the most important value! When we say "220 V AC supply," we mean <strong>220 V rms</strong>. The actual peak voltage is V₀ = 220 × √2 ≈ <strong>311 V</strong>.</div>
      <p><strong>Why RMS?</strong> An AC of V(rms) produces the <strong>same heating effect</strong> as a DC of the same voltage. That's why RMS is called the "effective value."</p>
      <div class="mistake-box"><strong>Common mistake:</strong> Average value of AC over a <strong>full cycle is zero</strong> (positive half cancels negative half). The 0.637 × V₀ formula is for a <strong>half cycle</strong> only.</div>
      <table class="compare-table">
        <tr><th>Value</th><th>Voltage</th><th>Current</th></tr>
        <tr><td>Peak</td><td>V₀</td><td>I₀</td></tr>
        <tr><td>RMS</td><td>V₀/√2</td><td>I₀/√2</td></tr>
        <tr><td>Average (half cycle)</td><td>2V₀/π</td><td>2I₀/π</td></tr>
      </table>
    `
  },
  {
    id: 3, level: "intermediate",
    title: "AC Through a Pure Resistor",
    body: `
      <p>When AC passes through a <strong>pure resistor</strong>, voltage and current are <strong>in phase</strong> — they rise and fall together.</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <line x1="40" y1="90" x2="420" y2="90" stroke="#94a3b8" stroke-width="1"/>
          <path d="M 40 90 Q 100 20, 160 90 Q 220 160, 280 90 Q 340 20, 400 90" stroke="#2563eb" stroke-width="2.5" fill="none"/>
          <path d="M 40 90 Q 100 20, 160 90 Q 220 160, 280 90 Q 340 20, 400 90" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-dasharray="8,4"/>
          <rect x="310" y="20" width="100" height="48" rx="6" fill="#fff" stroke="#e0ddd7" stroke-width="1"/>
          <line x1="320" y1="35" x2="345" y2="35" stroke="#2563eb" stroke-width="2.5"/>
          <text x="352" y="39" font-size="11" fill="#2563eb" font-weight="600">V</text>
          <line x1="320" y1="53" x2="345" y2="53" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
          <text x="352" y="57" font-size="11" fill="#dc2626" font-weight="600">I</text>
          <text x="230" y="175" text-anchor="middle" font-size="13" fill="#065f46" font-weight="700">Phase difference = 0°</text>
        </svg>
        <div class="diagram-caption">In a pure resistor, V and I are in phase (no lag or lead)</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Pure Resistor</span>
        V = V₀ sin ωt &nbsp;&nbsp;→&nbsp;&nbsp; I = (V₀/R) sin ωt
      </div>
      <div class="remember-box"><strong>Key facts:</strong> Phase difference = <strong>0°</strong>. Power = V(rms) × I(rms). Power factor = cos 0° = <strong>1</strong> (maximum power consumed).</div>
    `
  },
  {
    id: 4, level: "intermediate",
    title: "AC Through a Pure Inductor",
    body: `
      <p>When AC passes through a <strong>pure inductor (L)</strong>, the current <strong>lags behind</strong> the voltage by 90° (π/2).</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <line x1="40" y1="90" x2="420" y2="90" stroke="#94a3b8" stroke-width="1"/>
          <path d="M 40 90 Q 100 20, 160 90 Q 220 160, 280 90 Q 340 20, 400 90" stroke="#2563eb" stroke-width="2.5" fill="none"/>
          <path d="M 100 90 Q 160 20, 220 90 Q 280 160, 340 90 Q 400 20, 420 55" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-dasharray="8,4"/>
          <rect x="310" y="130" width="110" height="48" rx="6" fill="#fff" stroke="#e0ddd7" stroke-width="1"/>
          <line x1="320" y1="145" x2="345" y2="145" stroke="#2563eb" stroke-width="2.5"/>
          <text x="352" y="149" font-size="11" fill="#2563eb" font-weight="600">V (leads)</text>
          <line x1="320" y1="163" x2="345" y2="163" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
          <text x="352" y="167" font-size="11" fill="#dc2626" font-weight="600">I (lags)</text>
          <text x="230" y="175" text-anchor="middle" font-size="13" fill="#7c3aed" font-weight="700">I lags V by 90°</text>
        </svg>
        <div class="diagram-caption">In a pure inductor, current lags voltage by 90°</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2">
        <span class="formula-label">Pure Inductor</span>
        V = V₀ sin ωt &nbsp;&nbsp;→&nbsp;&nbsp; I = (V₀/X<sub>L</sub>) sin(ωt – π/2)<br>
        Inductive Reactance: <strong>X<sub>L</sub> = ωL = 2πfL</strong>
      </div>
      <div class="key-point"><strong>X<sub>L</sub></strong> is like "resistance" of an inductor. It <strong>increases with frequency</strong> — at high frequencies, inductor blocks more current.</div>
      <div class="remember-box"><strong>Memory trick — "ELI":</strong> In an inductor (L), EMF (E) leads Current (I). Or: "Voltage leads in L."</div>
      <div class="mistake-box"><strong>Power consumed = ZERO!</strong> Average power in a pure inductor is zero (energy is stored and returned, not dissipated).</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "AC Through a Pure Capacitor",
    body: `
      <p>When AC passes through a <strong>pure capacitor (C)</strong>, the current <strong>leads</strong> the voltage by 90° (π/2).</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <line x1="40" y1="90" x2="420" y2="90" stroke="#94a3b8" stroke-width="1"/>
          <path d="M 100 90 Q 160 20, 220 90 Q 280 160, 340 90 Q 400 20, 420 55" stroke="#2563eb" stroke-width="2.5" fill="none"/>
          <path d="M 40 90 Q 100 20, 160 90 Q 220 160, 280 90 Q 340 20, 400 90" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-dasharray="8,4"/>
          <rect x="310" y="130" width="110" height="48" rx="6" fill="#fff" stroke="#e0ddd7" stroke-width="1"/>
          <line x1="320" y1="145" x2="345" y2="145" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
          <text x="352" y="149" font-size="11" fill="#dc2626" font-weight="600">I (leads)</text>
          <line x1="320" y1="163" x2="345" y2="163" stroke="#2563eb" stroke-width="2.5"/>
          <text x="352" y="167" font-size="11" fill="#2563eb" font-weight="600">V (lags)</text>
          <text x="230" y="175" text-anchor="middle" font-size="13" fill="#7c3aed" font-weight="700">I leads V by 90°</text>
        </svg>
        <div class="diagram-caption">In a pure capacitor, current leads voltage by 90°</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2">
        <span class="formula-label">Pure Capacitor</span>
        V = V₀ sin ωt &nbsp;&nbsp;→&nbsp;&nbsp; I = (V₀/X<sub>C</sub>) sin(ωt + π/2)<br>
        Capacitive Reactance: <strong>X<sub>C</sub> = 1/(ωC) = 1/(2πfC)</strong>
      </div>
      <div class="key-point"><strong>X<sub>C</sub> decreases with frequency</strong> — at high frequencies, capacitor allows more current through (opposite of inductor!).</div>
      <div class="remember-box"><strong>Memory trick — "ICE":</strong> In a capacitor (C), Current (I) leads EMF (E). Or: "Current leads in C."<br><br>
      <strong>ELI the ICE man</strong> — Inductor: E leads I. Capacitor: I leads E.</div>
      <div class="mistake-box"><strong>Power consumed = ZERO!</strong> Like an inductor, a pure capacitor also consumes no average power.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Reactance vs Resistance — Complete Comparison",
    body: `
      <table class="compare-table">
        <tr><th>Property</th><th>Resistance (R)</th><th>Inductive Reactance (X<sub>L</sub>)</th><th>Capacitive Reactance (X<sub>C</sub>)</th></tr>
        <tr><td><strong>Formula</strong></td><td>R (constant)</td><td>ωL = 2πfL</td><td>1/(ωC) = 1/(2πfC)</td></tr>
        <tr><td><strong>Unit</strong></td><td>Ohm (Ω)</td><td>Ohm (Ω)</td><td>Ohm (Ω)</td></tr>
        <tr><td><strong>With ↑ frequency</strong></td><td>No change</td><td><strong>Increases</strong></td><td><strong>Decreases</strong></td></tr>
        <tr><td><strong>Phase</strong></td><td>V, I in phase</td><td>I lags V by 90°</td><td>I leads V by 90°</td></tr>
        <tr><td><strong>Power consumed</strong></td><td>Yes (I²R)</td><td>No (zero)</td><td>No (zero)</td></tr>
        <tr><td><strong>For DC (f=0)</strong></td><td>R</td><td>0 (short circuit)</td><td>∞ (open circuit)</td></tr>
      </table>
      <div class="key-point"><strong>Board exam favourite:</strong> "Why does a capacitor block DC but allow AC?" Because X<sub>C</sub> = 1/(2πfC). For DC, f = 0, so X<sub>C</sub> = ∞ (infinite resistance = blocks). For AC, f > 0, so X<sub>C</sub> is finite.</div>
      <div class="remember-box"><strong>Inductor is opposite:</strong> At f = 0 (DC), X<sub>L</sub> = 0 (allows DC freely). At high f, X<sub>L</sub> is large (blocks high-frequency AC).</div>
    `
  },
  {
    id: 7, level: "advanced",
    title: "Series LCR Circuit — Impedance",
    body: `
      <p>When R, L, and C are connected in <strong>series</strong> with an AC source, the total opposition to current is called <strong>impedance (Z)</strong>.</p>
      <div class="diagram-container">
        <svg width="420" height="140" viewBox="0 0 420 140">
          <line x1="30" y1="70" x2="80" y2="70" stroke="#1e293b" stroke-width="2"/>
          <rect x="80" y="55" width="70" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="115" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">R</text>
          <line x1="150" y1="70" x2="180" y2="70" stroke="#1e293b" stroke-width="2"/>
          <rect x="180" y="55" width="70" height="30" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="215" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#f59e0b">L</text>
          <line x1="250" y1="70" x2="280" y2="70" stroke="#1e293b" stroke-width="2"/>
          <rect x="280" y="55" width="70" height="30" rx="4" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="315" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#22c55e">C</text>
          <line x1="350" y1="70" x2="390" y2="70" stroke="#1e293b" stroke-width="2"/>
          <circle cx="30" cy="70" r="4" fill="#dc2626"/>
          <circle cx="390" cy="70" r="4" fill="#dc2626"/>
          <text x="210" y="120" text-anchor="middle" font-size="13" fill="#64748b">Series LCR Circuit</text>
          <text x="210" y="42" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">V = V₀ sin ωt</text>
        </svg>
        <div class="diagram-caption">R, L, C in series with AC source</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Impedance</span>
        <strong>Z = √[R² + (X<sub>L</sub> – X<sub>C</sub>)²]</strong><br>
        where X<sub>L</sub> = ωL and X<sub>C</sub> = 1/(ωC)<br>
        Current: I = V/Z
      </div>
      <div class="key-point"><strong>Phase angle:</strong> tan φ = (X<sub>L</sub> – X<sub>C</sub>) / R<br>
      If X<sub>L</sub> > X<sub>C</sub> → circuit is <strong>inductive</strong> (I lags V)<br>
      If X<sub>C</sub> > X<sub>L</sub> → circuit is <strong>capacitive</strong> (I leads V)<br>
      If X<sub>L</sub> = X<sub>C</sub> → circuit is <strong>resistive</strong> (resonance!)</div>
      <div class="remember-box"><strong>Impedance triangle:</strong> Z is the hypotenuse, R is the base, and (X<sub>L</sub> – X<sub>C</sub>) is the perpendicular. It's just Pythagoras!</div>
    `
  },
  {
    id: 8, level: "advanced",
    title: "Phasor Diagrams",
    body: `
      <p>A <strong>phasor</strong> is a rotating arrow that represents the amplitude and phase of an AC quantity. It makes it easy to add voltages that are out of phase.</p>
      <div class="diagram-container">
        <svg width="360" height="280" viewBox="0 0 360 280">
          <line x1="100" y1="200" x2="320" y2="200" stroke="#94a3b8" stroke-width="1"/>
          <line x1="100" y1="260" x2="100" y2="30" stroke="#94a3b8" stroke-width="1"/>
          <line x1="100" y1="200" x2="240" y2="200" stroke="#2563eb" stroke-width="3"/>
          <polygon points="240,194 252,200 240,206" fill="#2563eb"/>
          <text x="170" y="220" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">V<sub>R</sub></text>
          <line x1="100" y1="200" x2="100" y2="90" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="94,90 100,78 106,90" fill="#f59e0b"/>
          <text x="80" y="140" font-size="14" font-weight="700" fill="#f59e0b">V<sub>L</sub></text>
          <line x1="100" y1="200" x2="100" y2="250" stroke="#22c55e" stroke-width="3"/>
          <polygon points="94,250 100,262 106,250" fill="#22c55e"/>
          <text x="80" y="250" font-size="14" font-weight="700" fill="#22c55e">V<sub>C</sub></text>
          <line x1="100" y1="200" x2="100" y2="140" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="125" y="168" font-size="12" fill="#8b5cf6" font-weight="600">V<sub>L</sub>–V<sub>C</sub></text>
          <line x1="100" y1="200" x2="240" y2="140" stroke="#dc2626" stroke-width="3"/>
          <polygon points="237,133 250,136 240,146" fill="#dc2626"/>
          <text x="185" y="158" font-size="14" font-weight="700" fill="#dc2626">V (net)</text>
          <path d="M 140 200 A 40 40 0 0 0 135 185" stroke="#dc2626" stroke-width="2" fill="none"/>
          <text x="148" y="190" font-size="14" fill="#dc2626" font-weight="700">φ</text>
          <text x="300" y="200" font-size="12" fill="#64748b" font-weight="600">I →</text>
        </svg>
        <div class="diagram-caption">Phasor diagram for series LCR: V<sub>R</sub> along current, V<sub>L</sub> leads by 90°, V<sub>C</sub> lags by 90°</div>
      </div>
      <div class="key-point"><strong>Rules:</strong><br>
      V<sub>R</sub> is along the current (reference direction)<br>
      V<sub>L</sub> is 90° <strong>ahead</strong> of current (upward)<br>
      V<sub>C</sub> is 90° <strong>behind</strong> current (downward)<br>
      Net voltage V = √[V<sub>R</sub>² + (V<sub>L</sub> – V<sub>C</sub>)²]</div>
      <div class="mistake-box"><strong>Common mistake:</strong> V<sub>R</sub> + V<sub>L</sub> + V<sub>C</sub> ≠ V (source). You can't simply add them because they're out of phase! Use the Pythagoras formula above.</div>
    `
  },
  {
    id: 9, level: "advanced",
    title: "Resonance in LCR Circuit",
    body: `
      <p><strong>Resonance</strong> occurs when X<sub>L</sub> = X<sub>C</sub>. At this special frequency, the impedance is <strong>minimum</strong> and current is <strong>maximum</strong>.</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Resonance Condition</span>
        X<sub>L</sub> = X<sub>C</sub> &nbsp;→&nbsp; ωL = 1/(ωC)<br>
        <strong>Resonant frequency: f₀ = 1/(2π√LC)</strong><br>
        At resonance: Z = R (minimum) and I = V/R (maximum)
      </div>
      <div class="diagram-container">
        <svg width="380" height="200" viewBox="0 0 380 200">
          <line x1="40" y1="180" x2="360" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="40" y1="180" x2="40" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="370" y="184" font-size="12" fill="#64748b">f</text>
          <text x="25" y="18" font-size="12" fill="#64748b">I</text>
          <path d="M 50 170 Q 100 165, 140 150 Q 170 130, 190 50 Q 210 130, 230 150 Q 270 165, 350 170" stroke="#dc2626" stroke-width="3" fill="none"/>
          <line x1="190" y1="50" x2="190" y2="180" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,4"/>
          <text x="190" y="195" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="700">f₀</text>
          <text x="210" y="45" font-size="13" fill="#dc2626" font-weight="700">I(max) = V/R</text>
        </svg>
        <div class="diagram-caption">At resonance frequency f₀, current reaches maximum</div>
      </div>
      <div class="key-point"><strong>At resonance:</strong> Phase angle φ = 0° (V and I in phase), power factor = 1 (maximum power), circuit behaves like pure resistor.</div>
      <div class="remember-box"><strong>Sharpness of resonance</strong> depends on R. <strong>Low R</strong> = sharp peak (good selectivity, used in tuning circuits). <strong>High R</strong> = broad peak.</div>
      <div class="key-point"><strong>Application:</strong> Radio/TV tuning! By varying C (or L), you change f₀ to match the desired station's frequency.</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Power in AC Circuits — Power Factor",
    body: `
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">AC Power</span>
        <strong>P = V(rms) × I(rms) × cos φ</strong><br>
        where cos φ = R/Z (power factor)
      </div>
      <table class="compare-table">
        <tr><th>Circuit</th><th>Phase (φ)</th><th>cos φ</th><th>Power</th></tr>
        <tr><td>Pure R</td><td>0°</td><td>1</td><td><strong>Maximum</strong> = V·I</td></tr>
        <tr><td>Pure L</td><td>90°</td><td>0</td><td><strong>Zero</strong></td></tr>
        <tr><td>Pure C</td><td>90°</td><td>0</td><td><strong>Zero</strong></td></tr>
        <tr><td>LCR at resonance</td><td>0°</td><td>1</td><td><strong>Maximum</strong> = V·I</td></tr>
        <tr><td>LCR (general)</td><td>φ</td><td>R/Z</td><td>V·I·cos φ</td></tr>
      </table>
      <div class="key-point"><strong>Wattless current:</strong> The component of current that contributes ZERO power = I sin φ. This exists in L and C elements. Only I cos φ (called "active current") does useful work.</div>
      <div class="remember-box"><strong>Power factor = cos φ = R/Z.</strong> It tells you what fraction of the apparent power (V×I) is actually consumed. Ideal = 1, worst = 0.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Wattless Current & Active Current",
    body: `
      <p>In an AC circuit, current can be split into two components:</p>
      <div class="diagram-container">
        <svg width="340" height="200" viewBox="0 0 340 200">
          <line x1="60" y1="150" x2="300" y2="150" stroke="#94a3b8" stroke-width="1"/>
          <line x1="60" y1="150" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>
          <line x1="60" y1="150" x2="240" y2="60" stroke="#dc2626" stroke-width="3"/>
          <polygon points="237,53 250,56 243,67" fill="#dc2626"/>
          <text x="165" y="90" font-size="14" font-weight="700" fill="#dc2626">I</text>
          <line x1="60" y1="150" x2="240" y2="150" stroke="#2563eb" stroke-width="3"/>
          <polygon points="240,144 252,150 240,156" fill="#2563eb"/>
          <text x="150" y="172" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">I cos φ (active)</text>
          <line x1="240" y1="150" x2="240" y2="60" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,3"/>
          <text x="270" y="110" font-size="13" font-weight="700" fill="#22c55e">I sin φ</text>
          <text x="270" y="126" font-size="11" fill="#22c55e">(wattless)</text>
          <path d="M 100 150 A 40 40 0 0 0 93 130" stroke="#dc2626" stroke-width="2" fill="none"/>
          <text x="108" y="138" font-size="14" fill="#dc2626" font-weight="700">φ</text>
        </svg>
        <div class="diagram-caption">Current resolved into active (power-producing) and wattless (non-power) components</div>
      </div>
      <table class="compare-table">
        <tr><th>Component</th><th>Formula</th><th>Power contribution</th></tr>
        <tr><td><strong>Active current</strong></td><td>I cos φ</td><td>Produces power (P = V × I cos φ)</td></tr>
        <tr><td><strong>Wattless current</strong></td><td>I sin φ</td><td><strong>Zero power</strong> (energy oscillates)</td></tr>
      </table>
      <div class="key-point"><strong>In pure L or C:</strong> φ = 90°, so cos φ = 0 → all current is wattless! No power consumed at all.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Transformer — Step Up & Step Down",
    body: `
      <p>A <strong>transformer</strong> changes AC voltage using electromagnetic induction. It works ONLY with AC (not DC).</p>
      <div class="diagram-container">
        <svg width="380" height="180" viewBox="0 0 380 180">
          <rect x="90" y="30" width="20" height="120" rx="3" fill="#94a3b8"/>
          <rect x="270" y="30" width="20" height="120" rx="3" fill="#94a3b8"/>
          <rect x="90" y="30" width="200" height="20" rx="3" fill="#94a3b8"/>
          <rect x="90" y="130" width="200" height="20" rx="3" fill="#94a3b8"/>
          <path d="M 60 60 Q 75 50, 90 60 Q 75 70, 60 60" stroke="#2563eb" stroke-width="2" fill="none"/>
          <path d="M 60 75 Q 75 65, 90 75 Q 75 85, 60 75" stroke="#2563eb" stroke-width="2" fill="none"/>
          <path d="M 60 90 Q 75 80, 90 90 Q 75 100, 60 90" stroke="#2563eb" stroke-width="2" fill="none"/>
          <path d="M 60 105 Q 75 95, 90 105 Q 75 115, 60 105" stroke="#2563eb" stroke-width="2" fill="none"/>
          <text x="40" y="85" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="700">N<sub>P</sub></text>
          <path d="M 290 55 Q 305 45, 320 55 Q 305 65, 290 55" stroke="#dc2626" stroke-width="2" fill="none"/>
          <path d="M 290 70 Q 305 60, 320 70 Q 305 80, 290 70" stroke="#dc2626" stroke-width="2" fill="none"/>
          <path d="M 290 85 Q 305 75, 320 85 Q 305 95, 290 85" stroke="#dc2626" stroke-width="2" fill="none"/>
          <path d="M 290 100 Q 305 90, 320 100 Q 305 110, 290 100" stroke="#dc2626" stroke-width="2" fill="none"/>
          <path d="M 290 115 Q 305 105, 320 115 Q 305 125, 290 115" stroke="#dc2626" stroke-width="2" fill="none"/>
          <text x="343" y="88" font-size="12" fill="#dc2626" font-weight="700">N<sub>S</sub></text>
          <text x="35" y="55" font-size="11" fill="#2563eb">V<sub>P</sub></text>
          <text x="338" y="55" font-size="11" fill="#dc2626">V<sub>S</sub></text>
          <text x="190" y="172" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Iron core</text>
        </svg>
        <div class="diagram-caption">Transformer: primary and secondary coils wound on an iron core</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Transformer Equations</span>
        <strong>V<sub>S</sub> / V<sub>P</sub> = N<sub>S</sub> / N<sub>P</sub> = k</strong> (turns ratio)<br>
        For ideal transformer: <strong>V<sub>P</sub> × I<sub>P</sub> = V<sub>S</sub> × I<sub>S</sub></strong> (power conserved)<br>
        So: I<sub>S</sub> / I<sub>P</sub> = N<sub>P</sub> / N<sub>S</sub> = 1/k
      </div>
      <table class="compare-table">
        <tr><th>Type</th><th>Turns ratio</th><th>Voltage</th><th>Current</th></tr>
        <tr><td><strong>Step-up</strong></td><td>N<sub>S</sub> > N<sub>P</sub> (k > 1)</td><td>Increases</td><td>Decreases</td></tr>
        <tr><td><strong>Step-down</strong></td><td>N<sub>S</sub> < N<sub>P</sub> (k < 1)</td><td>Decreases</td><td>Increases</td></tr>
      </table>
      <div class="key-point"><strong>Why AC for transmission?</strong> Step up voltage → reduces current → reduces I²R power loss in wires. At destination, step down for safe use.</div>
      <div class="mistake-box"><strong>Transformer does NOT work with DC!</strong> DC creates a constant flux, no change in flux = no induced EMF in secondary.</div>
    `
  },
  {
    id: 13, level: "advanced",
    title: "LC Oscillations",
    body: `
      <p>When a charged capacitor is connected to an inductor, energy oscillates between <strong>electric (capacitor)</strong> and <strong>magnetic (inductor)</strong> forms — like a pendulum!</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">LC Oscillation</span>
        <strong>Frequency: f = 1/(2π√LC)</strong><br>
        Energy: ½CV² (capacitor) ↔ ½LI² (inductor)<br>
        Total energy = constant (no R means no loss)
      </div>
      <table class="compare-table">
        <tr><th>Instant</th><th>Capacitor</th><th>Inductor</th></tr>
        <tr><td>Fully charged</td><td>Max energy (½CV₀²)</td><td>Zero energy (I = 0)</td></tr>
        <tr><td>Fully discharged</td><td>Zero energy (V = 0)</td><td>Max energy (½LI₀²)</td></tr>
      </table>
      <div class="remember-box"><strong>Analogy:</strong> Like a spring-mass system! Capacitor = spring (stores potential energy), Inductor = mass (stores kinetic energy). Same frequency formula structure.</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Complete AC Formula Sheet",
    body: `
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">All AC Formulas</span>
        <strong>1.</strong> V = V₀ sin ωt, &nbsp; I = I₀ sin(ωt ± φ)<br>
        <strong>2.</strong> V(rms) = V₀/√2, &nbsp; I(rms) = I₀/√2<br>
        <strong>3.</strong> X<sub>L</sub> = ωL = 2πfL<br>
        <strong>4.</strong> X<sub>C</sub> = 1/(ωC) = 1/(2πfC)<br>
        <strong>5.</strong> Z = √[R² + (X<sub>L</sub> – X<sub>C</sub>)²]<br>
        <strong>6.</strong> tan φ = (X<sub>L</sub> – X<sub>C</sub>)/R<br>
        <strong>7.</strong> Power: P = V(rms) I(rms) cos φ<br>
        <strong>8.</strong> Power factor: cos φ = R/Z<br>
        <strong>9.</strong> Resonance: f₀ = 1/(2π√LC)<br>
        <strong>10.</strong> Transformer: V<sub>S</sub>/V<sub>P</sub> = N<sub>S</sub>/N<sub>P</sub><br>
        <strong>11.</strong> LC oscillation: f = 1/(2π√LC)
      </div>
      <div class="key-point"><strong>Quick solving tips:</strong><br>
      — At resonance: Z = R, I = V/R, cos φ = 1<br>
      — X<sub>L</sub> = X<sub>C</sub> means ωL = 1/ωC, solve for ω or f<br>
      — Transformer: if V doubles, I halves (power conserved)</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam — Most Asked AC Questions",
    body: `
      <div class="key-point" style="background:#fef3c7; border-color:#f59e0b; color:#92400e;">
        <strong>Top board exam questions:</strong><br>
        1. Derive impedance of series LCR circuit (5 marks)<br>
        2. Resonance condition and graph (3 marks)<br>
        3. Phasor diagram for LCR circuit (3 marks)<br>
        4. Working of transformer with diagram (3 marks)<br>
        5. "Why can't transformer work with DC?" (1–2 marks)<br>
        6. Power factor and wattless current (2 marks)
      </div>
      <div class="remember-box">
        <strong>Quick answers:</strong><br><br>
        <strong>Why AC for long-distance transmission?</strong> Can be stepped up to reduce I²R loss.<br>
        <strong>Capacitor blocks DC but allows AC?</strong> X<sub>C</sub> = 1/(2πfC), f=0 → X<sub>C</sub> = ∞.<br>
        <strong>Power in pure L or C?</strong> Zero (cos 90° = 0).<br>
        <strong>Quality factor?</strong> Q = ωL/R = 1/(ωCR). Higher Q = sharper resonance.<br>
        <strong>Choke coil vs resistor?</strong> Choke (inductor) reduces current without wasting power.
      </div>
      <div class="mistake-box"><strong>Avoid these errors:</strong><br>
      ✗ Adding V<sub>R</sub> + V<sub>L</sub> + V<sub>C</sub> directly (use vector addition!)<br>
      ✗ Confusing X<sub>L</sub> and X<sub>C</sub> frequency dependence<br>
      ✗ Forgetting √2 in RMS calculations<br>
      ✗ Saying transformer works with DC</div>
    `
  }
];
