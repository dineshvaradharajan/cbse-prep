// Current Electricity — Concepts
const ch3Concepts = [
  {
    id: 1, level: "basic",
    title: "Electric Current — What It Really Means",
    body: `
      <p><strong>Electric current</strong> is simply the <strong>rate of flow of electric charge</strong> through a conductor. Think of it like water flowing through a pipe — the amount of water passing a point every second is like the current.</p>
      <div class="formula-box">
        <span class="formula-label">Electric Current</span>
        I = Q / t &nbsp;&nbsp; (charge per unit time)
      </div>
      <p><strong>SI unit:</strong> Ampere (A). &nbsp; 1 A = 1 C/s (one coulomb of charge per second).</p>
      <div class="key-point"><strong>Conventional current vs Electron flow:</strong> By convention, current flows from <strong>+ to −</strong> (high potential to low potential). But electrons actually move from <strong>− to +</strong>. This is a historical convention that stuck — don't let it confuse you!</div>
      <div class="diagram-container">
        <svg width="440" height="160" viewBox="0 0 440 160">
          <!-- Wire -->
          <rect x="60" y="55" width="320" height="30" rx="15" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
          <!-- Conventional current arrow (top) -->
          <line x1="120" y1="35" x2="320" y2="35" stroke="#2563eb" stroke-width="2.5"/>
          <polygon points="320,35 305,28 305,42" fill="#2563eb"/>
          <text x="200" y="25" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">Conventional Current (+ to −)</text>
          <!-- Electron flow arrow (bottom) -->
          <line x1="320" y1="110" x2="120" y2="110" stroke="#dc2626" stroke-width="2.5"/>
          <polygon points="120,110 135,103 135,117" fill="#dc2626"/>
          <text x="220" y="135" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="700">Electron Flow (− to +)</text>
          <!-- + and - labels -->
          <text x="30" y="75" font-size="22" fill="#dc2626" font-weight="700">+</text>
          <text x="395" y="78" font-size="22" fill="#2563eb" font-weight="700">−</text>
          <!-- electrons inside wire -->
          <circle cx="140" cy="70" r="5" fill="#dc2626" opacity="0.6"/>
          <text x="140" y="74" text-anchor="middle" font-size="8" fill="white" font-weight="700">e</text>
          <circle cx="200" cy="70" r="5" fill="#dc2626" opacity="0.6"/>
          <text x="200" y="74" text-anchor="middle" font-size="8" fill="white" font-weight="700">e</text>
          <circle cx="260" cy="70" r="5" fill="#dc2626" opacity="0.6"/>
          <text x="260" y="74" text-anchor="middle" font-size="8" fill="white" font-weight="700">e</text>
          <circle cx="320" cy="70" r="5" fill="#dc2626" opacity="0.6"/>
          <text x="320" y="74" text-anchor="middle" font-size="8" fill="white" font-weight="700">e</text>
        </svg>
        <div class="diagram-caption">Conventional current goes + to −, but electrons actually drift − to +</div>
      </div>
      <div class="remember-box"><strong>Remember:</strong> Current is a <strong>scalar</strong> quantity (not a vector), even though we talk about its "direction." It doesn't follow vector addition rules.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students say "current flows through the wire." Actually, <strong>charge</strong> flows. Current is the <em>rate</em> of flow, not the thing that flows. But CBSE accepts "current flows" in answers.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Drift Velocity & Its Relation to Current",
    body: `
      <p>When you apply a voltage across a wire, free electrons don't rush in a straight line. They <strong>randomly bounce</strong> off atoms but slowly <strong>drift</strong> toward the positive end. This slow net movement is called <strong>drift velocity (v<sub>d</sub>)</strong>.</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Wire outline -->
          <rect x="40" y="50" width="360" height="80" rx="8" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
          <!-- Random path of electron -->
          <path d="M 80 90 L 95 70 L 110 100 L 130 75 L 150 95 L 165 65 L 185 90 L 200 72 L 220 98 L 240 68 L 260 90" stroke="#dc2626" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
          <!-- Net drift arrow -->
          <line x1="80" y1="110" x2="260" y2="110" stroke="#2563eb" stroke-width="3"/>
          <polygon points="260,110 245,103 245,117" fill="#2563eb"/>
          <text x="170" y="145" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">Net drift → v<sub>d</sub></text>
          <!-- Labels -->
          <text x="90" y="45" font-size="12" fill="#dc2626">Zigzag random motion</text>
          <text x="290" y="90" font-size="12" fill="#64748b">Cross-section</text>
          <text x="290" y="105" font-size="12" fill="#64748b">area = A</text>
          <!-- Cross section indication -->
          <line x1="280" y1="50" x2="280" y2="130" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
          <!-- E field -->
          <line x1="320" y1="70" x2="380" y2="70" stroke="#22c55e" stroke-width="2"/>
          <polygon points="380,70 370,64 370,76" fill="#22c55e"/>
          <text x="350" y="62" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="600">E</text>
        </svg>
        <div class="diagram-caption">Electrons zigzag randomly but drift slowly in a net direction due to the electric field</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Current & Drift Velocity</span>
        I = n A e v<sub>d</sub>
      </div>
      <p>where:<br>
      <strong>n</strong> = number density of free electrons (electrons per m³)<br>
      <strong>A</strong> = cross-sectional area of wire<br>
      <strong>e</strong> = charge of electron (1.6 × 10⁻¹⁹ C)<br>
      <strong>v<sub>d</sub></strong> = drift velocity</p>
      <div class="formula-box">
        <span class="formula-label">Drift Velocity Formula</span>
        v<sub>d</sub> = eEτ / m &nbsp;&nbsp; (where τ = relaxation time, m = electron mass)
      </div>
      <div class="key-point"><strong>How slow is drift?</strong> Typical drift velocity is about <strong>0.1 mm/s to 1 mm/s</strong>. That's incredibly slow! But when you flip a switch, the light turns on instantly because the <strong>electric field</strong> travels at near light speed, pushing all electrons simultaneously.</div>
      <div class="remember-box"><strong>Mobility (μ):</strong> μ = v<sub>d</sub> / E = eτ/m. It tells how easily electrons drift per unit electric field. SI unit: m²V⁻¹s⁻¹.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Ohm's Law — V = IR",
    body: `
      <p><strong>Ohm's Law</strong> says: the current through a conductor is <strong>directly proportional</strong> to the voltage across it, provided the temperature stays constant.</p>
      <div class="formula-box">
        <span class="formula-label">Ohm's Law</span>
        V = I R &nbsp;&nbsp; or &nbsp;&nbsp; I = V / R &nbsp;&nbsp; or &nbsp;&nbsp; R = V / I
      </div>
      <p><strong>Analogy:</strong> Imagine a water pipe. Voltage is like the water pressure, current is the flow rate, and resistance is how narrow the pipe is. More pressure = more flow. Narrower pipe = less flow.</p>
      <div class="diagram-container">
        <svg width="420" height="220" viewBox="0 0 420 220">
          <!-- Axes -->
          <line x1="60" y1="190" x2="380" y2="190" stroke="#1e293b" stroke-width="2"/>
          <line x1="60" y1="190" x2="60" y2="20" stroke="#1e293b" stroke-width="2"/>
          <text x="390" y="195" font-size="13" fill="#64748b" font-weight="600">I</text>
          <text x="45" y="20" font-size="13" fill="#64748b" font-weight="600">V</text>
          <!-- Ohmic line -->
          <line x1="60" y1="190" x2="340" y2="40" stroke="#2563eb" stroke-width="3"/>
          <text x="280" y="55" font-size="13" fill="#2563eb" font-weight="700">Ohmic (metal wire)</text>
          <!-- Non-ohmic curve -->
          <path d="M 60 190 Q 150 170, 200 140 Q 260 90, 340 15" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-dasharray="6,3"/>
          <text x="300" y="15" font-size="12" fill="#dc2626" font-weight="600">Non-ohmic</text>
          <!-- Slope label -->
          <text x="140" y="100" font-size="12" fill="#2563eb" transform="rotate(-50, 140, 100)">slope = R</text>
          <!-- Origin -->
          <text x="50" y="205" font-size="12" fill="#64748b">O</text>
        </svg>
        <div class="diagram-caption">V-I graph: Ohmic conductors give a straight line (slope = R). Non-ohmic conductors (diode, filament bulb) give curves.</div>
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Ohmic Conductor</th><th>Non-Ohmic Conductor</th></tr>
        <tr><td>V-I graph</td><td>Straight line through origin</td><td>Curved line</td></tr>
        <tr><td>Examples</td><td>Metal wires, resistors</td><td>Diode, filament bulb, electrolyte</td></tr>
        <tr><td>R constant?</td><td>Yes (at constant temp)</td><td>No, R changes with V or I</td></tr>
      </table>
      <div class="mistake-box"><strong>Common mistake:</strong> Ohm's law is NOT a universal law — it only holds for <strong>ohmic conductors</strong>. A semiconductor diode does NOT obey Ohm's law. CBSE often asks this!</div>
      <div class="remember-box"><strong>Board tip:</strong> When asked to "state Ohm's law," always mention the condition: <em>"at constant temperature and other physical conditions."</em></div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Resistance & Resistivity — What Controls Them?",
    body: `
      <p><strong>Resistance (R)</strong> opposes the flow of current. Think of it as friction for electricity.</p>
      <div class="formula-box">
        <span class="formula-label">Resistance of a Wire</span>
        R = ρL / A
      </div>
      <p>where <strong>ρ</strong> = resistivity (material property), <strong>L</strong> = length, <strong>A</strong> = cross-sectional area.</p>
      <p><strong>Analogy:</strong> A longer, thinner pipe has more resistance to water flow. Same with wires — longer wire or thinner wire means more resistance.</p>
      <table class="compare-table">
        <tr><th>Factor</th><th>Effect on R</th><th>Why?</th></tr>
        <tr><td>Length ↑</td><td>R ↑ (proportional)</td><td>More collisions along the way</td></tr>
        <tr><td>Area ↑</td><td>R ↓ (inversely)</td><td>More lanes for electrons</td></tr>
        <tr><td>Temperature ↑ (metals)</td><td>R ↑</td><td>More vibrations → more collisions</td></tr>
        <tr><td>Temperature ↑ (semiconductors)</td><td>R ↓</td><td>More free charge carriers released</td></tr>
      </table>
      <div class="formula-box">
        <span class="formula-label">Temperature Dependence</span>
        R<sub>T</sub> = R₀ (1 + α ΔT) &nbsp;&nbsp; and &nbsp;&nbsp; ρ_T = ρ₀ (1 + α ΔT)
      </div>
      <p>where <strong>α</strong> = temperature coefficient of resistance.</p>
      <div class="key-point"><strong>Resistivity (ρ)</strong> depends ONLY on the <strong>material and temperature</strong>, NOT on dimensions. Two copper wires of different lengths have the same ρ but different R.</div>
      <table class="compare-table">
        <tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Depends on</th></tr>
        <tr><td>Resistance</td><td>R</td><td>Ohm (Ω)</td><td>Material + dimensions + temperature</td></tr>
        <tr><td>Resistivity</td><td>ρ</td><td>Ω·m</td><td>Material + temperature only</td></tr>
        <tr><td>Conductivity</td><td>σ = 1/ρ</td><td>S/m (siemens/m)</td><td>Material + temperature only</td></tr>
      </table>
      <div class="remember-box"><strong>Typical values:</strong> Metals: ρ ~ 10⁻⁸ Ω·m (good conductors). Insulators: ρ ~ 10⁸ to 10¹⁶ Ω·m. Semiconductors: in between.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Don't confuse <strong>resistance</strong> (property of a specific wire) with <strong>resistivity</strong> (property of the material). CBSE loves asking the difference!</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "Colour Code of Resistors",
    body: `
      <p>Carbon resistors have <strong>coloured bands</strong> that tell you their resistance value. You'll see 4 bands on a typical resistor.</p>
      <table class="compare-table">
        <tr><th>Colour</th><th>Digit</th><th>Multiplier</th><th>Tolerance</th></tr>
        <tr><td>Black</td><td>0</td><td>×1</td><td>—</td></tr>
        <tr><td>Brown</td><td>1</td><td>×10</td><td>±1%</td></tr>
        <tr><td>Red</td><td>2</td><td>×10²</td><td>±2%</td></tr>
        <tr><td>Orange</td><td>3</td><td>×10³</td><td>—</td></tr>
        <tr><td>Yellow</td><td>4</td><td>×10⁴</td><td>—</td></tr>
        <tr><td>Green</td><td>5</td><td>×10⁵</td><td>—</td></tr>
        <tr><td>Blue</td><td>6</td><td>×10⁶</td><td>—</td></tr>
        <tr><td>Violet</td><td>7</td><td>×10⁷</td><td>—</td></tr>
        <tr><td>Grey</td><td>8</td><td>×10⁸</td><td>—</td></tr>
        <tr><td>White</td><td>9</td><td>×10⁹</td><td>—</td></tr>
        <tr><td>Gold</td><td>—</td><td>×0.1</td><td>±5%</td></tr>
        <tr><td>Silver</td><td>—</td><td>×0.01</td><td>±10%</td></tr>
      </table>
      <div class="formula-box">
        <span class="formula-label">Reading a 4-Band Resistor</span>
        Band 1 = first digit &nbsp;|&nbsp; Band 2 = second digit &nbsp;|&nbsp; Band 3 = multiplier &nbsp;|&nbsp; Band 4 = tolerance
      </div>
      <div class="remember-box"><strong>Mnemonic:</strong> <em>"BB ROY of Great Britain has a Very Good Wife"</em><br>
      B-B-R-O-Y-G-B-V-G-W → 0-1-2-3-4-5-6-7-8-9</div>
      <p><strong>Example:</strong> Bands are Yellow, Violet, Orange, Gold<br>
      → 4, 7, ×10³, ±5% → <strong>47 × 10³ = 47 kΩ ± 5%</strong></p>
      <p><strong>Another example:</strong> Brown, Black, Red, Silver<br>
      → 1, 0, ×10², ±10% → <strong>10 × 100 = 1 kΩ ± 10%</strong></p>
      <div class="key-point"><strong>How to identify Band 1:</strong> The tolerance band (gold/silver) is always at the <strong>right end</strong>. Start reading from the <strong>opposite end</strong>.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Reading the bands in the wrong direction. Always make sure the <strong>gold or silver band is on the right</strong>.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Combinations of Resistors — Series & Parallel",
    body: `
      <p>Resistors can be connected in <strong>series</strong> (one after another) or in <strong>parallel</strong> (side by side). The total resistance changes depending on the arrangement.</p>
      <div class="diagram-container">
        <svg width="440" height="110" viewBox="0 0 440 110">
          <!-- Series circuit -->
          <text x="220" y="15" text-anchor="middle" font-size="14" fill="#1e293b" font-weight="700">Series Connection</text>
          <line x1="30" y1="60" x2="80" y2="60" stroke="#1e293b" stroke-width="2"/>
          <rect x="80" y="45" width="70" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="115" y="65" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">R₁</text>
          <line x1="150" y1="60" x2="180" y2="60" stroke="#1e293b" stroke-width="2"/>
          <rect x="180" y="45" width="70" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="215" y="65" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">R₂</text>
          <line x1="250" y1="60" x2="280" y2="60" stroke="#1e293b" stroke-width="2"/>
          <rect x="280" y="45" width="70" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="315" y="65" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">R₃</text>
          <line x1="350" y1="60" x2="410" y2="60" stroke="#1e293b" stroke-width="2"/>
          <!-- Current arrow -->
          <line x1="30" y1="90" x2="100" y2="90" stroke="#22c55e" stroke-width="2"/>
          <polygon points="100,90 90,85 90,95" fill="#22c55e"/>
          <text x="55" y="105" font-size="11" fill="#22c55e" font-weight="600">I (same)</text>
        </svg>
        <div class="diagram-caption">Series: Same current through all resistors, voltage divides</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Series Combination</span>
        R<sub>eq</sub> = R₁ + R₂ + R₃ + ... &nbsp;&nbsp; (always LARGER than the largest)
      </div>
      <p><strong>Key facts for series:</strong> Current is the <strong>same</strong> through each resistor. Voltage <strong>divides</strong> in proportion to resistance (V₁ = IR₁, V₂ = IR₂, ...).</p>
      <div class="diagram-container">
        <svg width="440" height="140" viewBox="0 0 440 140">
          <!-- Parallel circuit -->
          <text x="220" y="15" text-anchor="middle" font-size="14" fill="#1e293b" font-weight="700">Parallel Connection</text>
          <line x1="40" y1="70" x2="100" y2="70" stroke="#1e293b" stroke-width="2"/>
          <!-- Branch lines -->
          <line x1="100" y1="35" x2="100" y2="105" stroke="#1e293b" stroke-width="2"/>
          <line x1="330" y1="35" x2="330" y2="105" stroke="#1e293b" stroke-width="2"/>
          <!-- R1 branch -->
          <line x1="100" y1="35" x2="160" y2="35" stroke="#1e293b" stroke-width="2"/>
          <rect x="160" y="22" width="70" height="26" rx="4" fill="#fef9c3" stroke="#dc2626" stroke-width="2"/>
          <text x="195" y="40" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="700">R₁</text>
          <line x1="230" y1="35" x2="330" y2="35" stroke="#1e293b" stroke-width="2"/>
          <!-- R2 branch -->
          <line x1="100" y1="70" x2="160" y2="70" stroke="#1e293b" stroke-width="2"/>
          <rect x="160" y="57" width="70" height="26" rx="4" fill="#fef9c3" stroke="#dc2626" stroke-width="2"/>
          <text x="195" y="75" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="700">R₂</text>
          <line x1="230" y1="70" x2="330" y2="70" stroke="#1e293b" stroke-width="2"/>
          <!-- R3 branch -->
          <line x1="100" y1="105" x2="160" y2="105" stroke="#1e293b" stroke-width="2"/>
          <rect x="160" y="92" width="70" height="26" rx="4" fill="#fef9c3" stroke="#dc2626" stroke-width="2"/>
          <text x="195" y="110" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="700">R₃</text>
          <line x1="230" y1="105" x2="330" y2="105" stroke="#1e293b" stroke-width="2"/>
          <!-- Output -->
          <line x1="330" y1="70" x2="410" y2="70" stroke="#1e293b" stroke-width="2"/>
        </svg>
        <div class="diagram-caption">Parallel: Same voltage across all resistors, current divides</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Parallel Combination</span>
        1/R<sub>eq</sub> = 1/R₁ + 1/R₂ + 1/R₃ + ... &nbsp;&nbsp; (always SMALLER than the smallest)
      </div>
      <div class="key-point"><strong>Shortcut for two parallel resistors:</strong> R<sub>eq</sub> = (R₁ × R₂) / (R₁ + R₂). This is the <strong>product-over-sum</strong> formula — very useful in numericals!</div>
      <div class="remember-box"><strong>Quick check:</strong> Series R is always <strong>more</strong> than any single resistor. Parallel R is always <strong>less</strong> than the smallest resistor. Use this to verify your answer.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting to take the <strong>reciprocal</strong> in parallel. You find 1/R<sub>eq</sub> first, then flip to get R<sub>eq</sub>. Many students leave the answer as 1/R<sub>eq</sub>!</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "EMF, Internal Resistance & Terminal Voltage",
    body: `
      <p>A real battery is not a perfect voltage source. It has <strong>internal resistance (r)</strong> inside it, which eats up some voltage.</p>
      <div class="formula-box">
        <span class="formula-label">Terminal Voltage</span>
        V = ε − Ir &nbsp;&nbsp; (when current is drawn)
      </div>
      <p>where <strong>ε</strong> = EMF (electromotive force), <strong>I</strong> = current, <strong>r</strong> = internal resistance.</p>
      <p><strong>Analogy:</strong> EMF is like the total water pressure a pump can create. Internal resistance is friction inside the pump itself. The pressure you actually get at the outlet (terminal voltage) is less than what the pump creates.</p>
      <div class="key-point"><strong>EMF (ε)</strong> is the voltage across the cell when <strong>no current</strong> is drawn (open circuit). It's the maximum voltage a cell can provide. Terminal voltage V is always <strong>≤ ε</strong> when discharging.</div>
      <div class="formula-box">
        <span class="formula-label">Current from a Cell</span>
        I = ε / (R + r) &nbsp;&nbsp; (total EMF ÷ total resistance)
      </div>
      <table class="compare-table">
        <tr><th>Quantity</th><th>EMF (ε)</th><th>Terminal Voltage (V)</th></tr>
        <tr><td>When measured</td><td>Open circuit (I = 0)</td><td>Closed circuit (I ≠ 0)</td></tr>
        <tr><td>Value</td><td>Fixed for a cell</td><td>Decreases as I increases</td></tr>
        <tr><td>Formula</td><td>Work done per unit charge by cell</td><td>V = ε − Ir</td></tr>
      </table>
      <div class="remember-box"><strong>During charging:</strong> V = ε + Ir (terminal voltage is GREATER than EMF because current is forced backward through the cell).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> EMF is NOT a force! It's a potential difference (measured in volts). The name "electromotive force" is historical and misleading.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Cells in Series & Parallel",
    body: `
      <p>When one cell isn't enough, we combine multiple cells. The arrangement changes the effective EMF and internal resistance.</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Cells in Series (n identical cells)</span>
        ε_eq = nε &nbsp;&nbsp; (EMFs add up)<br>
        r<sub>eq</sub> = nr &nbsp;&nbsp; (internal resistances add up)<br>
        I = nε / (R + nr)
      </div>
      <div class="key-point"><strong>When to use series?</strong> When the <strong>external resistance R is much larger</strong> than internal resistance r. Series gives more voltage to push current through high R.</div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Cells in Parallel (n identical cells)</span>
        ε_eq = ε &nbsp;&nbsp; (EMF stays the same!)<br>
        r<sub>eq</sub> = r/n &nbsp;&nbsp; (internal resistance decreases)<br>
        I = ε / (R + r/n)
      </div>
      <div class="key-point"><strong>When to use parallel?</strong> When the <strong>external resistance R is much smaller</strong> than internal resistance r. Parallel reduces r<sub>eq</sub> so less voltage is wasted internally.</div>
      <table class="compare-table">
        <tr><th>Property</th><th>Series</th><th>Parallel</th></tr>
        <tr><td>Total EMF</td><td>nε</td><td>ε</td></tr>
        <tr><td>Total internal resistance</td><td>nr</td><td>r/n</td></tr>
        <tr><td>Best when</td><td>R >> r</td><td>R << r</td></tr>
        <tr><td>Maximum current</td><td>nε / nr = ε/r</td><td>ε / (r/n) = nε/r</td></tr>
      </table>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Mixed Grouping (m rows, n cells per row)</span>
        ε_eq = nε &nbsp;&nbsp; r<sub>eq</sub> = nr/m<br>
        I = nε / (R + nr/m)<br>
        Maximum current when R = nr/m (internal = external resistance)
      </div>
      <div class="remember-box"><strong>Board tip:</strong> For maximum current in mixed grouping, set <strong>R = r<sub>eq</sub> = nr/m</strong>. This is a favourite CBSE numerical!</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Kirchhoff's Laws — Junction & Loop Rules",
    body: `
      <p>When circuits get complicated (multiple loops, branches), Ohm's law alone isn't enough. That's where <strong>Kirchhoff's laws</strong> save you.</p>
      <div class="formula-box">
        <span class="formula-label">Kirchhoff's Junction Rule (KCL)</span>
        ΣI<sub>in</sub> = ΣI<sub>out</sub> &nbsp;&nbsp; (total current entering = total current leaving a junction)
      </div>
      <p><strong>Why?</strong> Charge is conserved. What comes in must go out. Like water at a pipe junction — if 5 litres/sec flows in, 5 litres/sec must flow out through all branches combined.</p>
      <div class="formula-box">
        <span class="formula-label">Kirchhoff's Loop Rule (KVL)</span>
        ΣV = 0 around any closed loop &nbsp;&nbsp; (total voltage rise = total voltage drop)
      </div>
      <p><strong>Why?</strong> Energy is conserved. When you go around a complete loop and return to the same point, the net potential change must be zero.</p>
      <div class="key-point"><strong>Sign conventions for loop rule:</strong><br>
      1. Going through a resistor in the direction of current: <strong>−IR</strong> (voltage drop)<br>
      2. Going through a resistor against the current: <strong>+IR</strong> (voltage gain)<br>
      3. Going from − to + of a cell: <strong>+ε</strong><br>
      4. Going from + to − of a cell: <strong>−ε</strong></div>
      <div class="remember-box"><strong>How to solve Kirchhoff problems:</strong><br>
      Step 1: Assign current directions (guess — if wrong, answer will be negative)<br>
      Step 2: Write junction equations (usually n−1 junctions for n junctions)<br>
      Step 3: Write loop equations (one per independent loop)<br>
      Step 4: Solve the simultaneous equations</div>
      <table class="compare-table">
        <tr><th>Law</th><th>Based on</th><th>Applied at</th><th>Equation</th></tr>
        <tr><td>Junction Rule (KCL)</td><td>Conservation of charge</td><td>Junctions/nodes</td><td>ΣI<sub>in</sub> = ΣI<sub>out</sub></td></tr>
        <tr><td>Loop Rule (KVL)</td><td>Conservation of energy</td><td>Closed loops</td><td>ΣV = 0</td></tr>
      </table>
      <div class="mistake-box"><strong>Common mistake:</strong> Applying the wrong sign while traversing a loop. Always be consistent: pick a direction (clockwise or anticlockwise) and stick with it. A negative current in your answer just means you guessed the direction wrong — the magnitude is still correct!</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Wheatstone Bridge — Balanced Condition",
    body: `
      <p>A <strong>Wheatstone bridge</strong> is a diamond-shaped circuit used to measure an <strong>unknown resistance</strong> very precisely. When "balanced," no current flows through the galvanometer.</p>
      <div class="diagram-container">
        <svg width="400" height="280" viewBox="0 0 400 280">
          <!-- Diamond shape -->
          <line x1="200" y1="20" x2="60" y2="140" stroke="#1e293b" stroke-width="2"/>
          <line x1="200" y1="20" x2="340" y2="140" stroke="#1e293b" stroke-width="2"/>
          <line x1="60" y1="140" x2="200" y2="260" stroke="#1e293b" stroke-width="2"/>
          <line x1="340" y1="140" x2="200" y2="260" stroke="#1e293b" stroke-width="2"/>
          <!-- Galvanometer bridge -->
          <line x1="60" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,3"/>
          <circle cx="200" cy="140" r="18" fill="#fff" stroke="#22c55e" stroke-width="2"/>
          <text x="200" y="145" text-anchor="middle" font-size="14" fill="#22c55e" font-weight="700">G</text>
          <!-- Resistor labels -->
          <rect x="100" y="60" width="40" height="24" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="120" y="77" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">P</text>
          <rect x="260" y="60" width="40" height="24" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
          <text x="280" y="77" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">Q</text>
          <rect x="100" y="180" width="40" height="24" rx="4" fill="#fef9c3" stroke="#dc2626" stroke-width="1.5"/>
          <text x="120" y="197" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="700">R</text>
          <rect x="260" y="180" width="40" height="24" rx="4" fill="#fef9c3" stroke="#dc2626" stroke-width="1.5"/>
          <text x="280" y="197" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="700">S</text>
          <!-- Junction labels -->
          <text x="200" y="14" font-size="12" fill="#64748b" font-weight="600" text-anchor="middle">A</text>
          <text x="44" y="144" font-size="12" fill="#64748b" font-weight="600">B</text>
          <text x="350" y="144" font-size="12" fill="#64748b" font-weight="600">D</text>
          <text x="200" y="275" font-size="12" fill="#64748b" font-weight="600" text-anchor="middle">C</text>
          <!-- Battery at top -->
          <text x="200" y="44" text-anchor="middle" font-size="11" fill="#64748b">Battery</text>
        </svg>
        <div class="diagram-caption">Wheatstone Bridge: When balanced (I<sub>G</sub> = 0), the ratio P/Q = R/S</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Balanced Condition</span>
        P / Q = R / S &nbsp;&nbsp; (when galvanometer shows zero deflection)
      </div>
      <p><strong>How it works:</strong> If the four resistances satisfy P/Q = R/S, the potential at B equals the potential at D. So no current flows through the galvanometer (bridge between B and D). This is the "balanced" state.</p>
      <div class="key-point"><strong>Finding unknown resistance:</strong> If S is unknown, adjust R (a known variable resistor) until galvanometer shows zero. Then S = R × Q/P.</div>
      <div class="remember-box"><strong>Board tip:</strong> The Wheatstone bridge is <strong>most sensitive</strong> when all four resistances are <strong>comparable</strong> (same order of magnitude). This is a frequently asked theory question.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Mixing up which resistors are in the ratio. Remember: resistors on <strong>opposite arms</strong> are in the ratio. P and S are opposite, Q and R are opposite. The condition is P/Q = R/S (adjacent arms form the ratio).</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Meter Bridge — Practical Wheatstone Bridge",
    body: `
      <p>A <strong>meter bridge</strong> (slide wire bridge) is the practical version of a Wheatstone bridge. It uses a 1-metre long uniform wire to find unknown resistance.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Wire (1 metre) -->
          <line x1="40" y1="120" x2="400" y2="120" stroke="#1e293b" stroke-width="3"/>
          <text x="40" y="145" font-size="11" fill="#64748b">0 cm</text>
          <text x="385" y="145" font-size="11" fill="#64748b">100 cm</text>
          <!-- Jockey point -->
          <circle cx="220" cy="120" r="5" fill="#dc2626"/>
          <line x1="220" y1="120" x2="220" y2="75" stroke="#dc2626" stroke-width="2"/>
          <text x="235" y="118" font-size="12" fill="#dc2626" font-weight="600">J (jockey)</text>
          <text x="215" y="160" font-size="12" fill="#64748b" text-anchor="middle">l</text>
          <text x="310" y="160" font-size="12" fill="#64748b" text-anchor="middle">100−l</text>
          <!-- Length markers -->
          <line x1="40" y1="150" x2="220" y2="150" stroke="#2563eb" stroke-width="1.5"/>
          <line x1="220" y1="150" x2="400" y2="150" stroke="#22c55e" stroke-width="1.5"/>
          <!-- R and S on top -->
          <line x1="40" y1="120" x2="40" y2="45" stroke="#1e293b" stroke-width="2"/>
          <line x1="400" y1="120" x2="400" y2="45" stroke="#1e293b" stroke-width="2"/>
          <line x1="40" y1="45" x2="130" y2="45" stroke="#1e293b" stroke-width="2"/>
          <rect x="130" y="32" width="60" height="26" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="160" y="50" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">R</text>
          <line x1="190" y1="45" x2="250" y2="45" stroke="#1e293b" stroke-width="2"/>
          <rect x="250" y="32" width="60" height="26" rx="4" fill="#fef9c3" stroke="#dc2626" stroke-width="2"/>
          <text x="280" y="50" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="700">S</text>
          <line x1="310" y1="45" x2="400" y2="45" stroke="#1e293b" stroke-width="2"/>
          <!-- Galvanometer -->
          <line x1="220" y1="75" x2="220" y2="45" stroke="#64748b" stroke-width="1.5"/>
          <circle cx="220" cy="65" r="10" fill="#fff" stroke="#22c55e" stroke-width="1.5"/>
          <text x="220" y="69" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="700">G</text>
        </svg>
        <div class="diagram-caption">Meter bridge: Slide jockey along the wire until galvanometer shows null deflection</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Meter Bridge Formula</span>
        R / S = l / (100 − l)  &nbsp;&nbsp; → &nbsp;&nbsp; S = R × (100 − l) / l
      </div>
      <p>where <strong>l</strong> = balancing length from the end where R is connected.</p>
      <div class="key-point"><strong>Why does this work?</strong> The wire acts as two resistors: resistance of length l and resistance of length (100−l). Since the wire is uniform, resistance is proportional to length. This forms a Wheatstone bridge with R, S, and the two wire segments.</div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">End Corrections</span>
        The actual balancing condition with end corrections α and β:<br>
        R / S = (l + α) / (100 − l + β)
      </div>
      <p><strong>End corrections</strong> account for extra resistance at the contact points where the wire meets the metal strips. To minimize errors:</p>
      <div class="remember-box"><strong>Precautions for accurate results:</strong><br>
      1. Balance point should be near the <strong>middle</strong> (l ≈ 50 cm) for maximum sensitivity<br>
      2. Use a <strong>high resistance in series with G</strong> to protect the galvanometer initially<br>
      3. <strong>Jockey should be pressed gently</strong> (not dragged) to avoid wearing the wire<br>
      4. <strong>Interchange R and S</strong> and take the mean to eliminate end corrections</p></div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting which end 'l' is measured from. Always measure l from the <strong>same end as R</strong>.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Potentiometer — Principle & Applications",
    body: `
      <p>A <strong>potentiometer</strong> is a device that measures EMF or potential difference <strong>without drawing any current</strong>. This makes it more accurate than a voltmeter!</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Main wire -->
          <line x1="30" y1="50" x2="410" y2="50" stroke="#1e293b" stroke-width="3"/>
          <text x="20" y="45" font-size="12" fill="#64748b" font-weight="600">A</text>
          <text x="415" y="45" font-size="12" fill="#64748b" font-weight="600">B</text>
          <!-- Driver cell with battery symbol -->
          <line x1="30" y1="50" x2="30" y2="20" stroke="#1e293b" stroke-width="2"/>
          <line x1="30" y1="20" x2="200" y2="20" stroke="#1e293b" stroke-width="2"/>
          <line x1="210" y1="13" x2="210" y2="27" stroke="#1e293b" stroke-width="3"/>
          <line x1="220" y1="8" x2="220" y2="32" stroke="#1e293b" stroke-width="1.5"/>
          <text x="215" y="6" font-size="10" fill="#64748b">+  −</text>
          <line x1="220" y1="20" x2="410" y2="20" stroke="#1e293b" stroke-width="2"/>
          <line x1="410" y1="20" x2="410" y2="50" stroke="#1e293b" stroke-width="2"/>
          <text x="215" y="42" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="600">ε₀ (driver cell)</text>
          <!-- Cell to be measured -->
          <line x1="30" y1="50" x2="30" y2="130" stroke="#1e293b" stroke-width="2"/>
          <line x1="30" y1="130" x2="80" y2="130" stroke="#1e293b" stroke-width="2"/>
          <line x1="87" y1="123" x2="87" y2="137" stroke="#1e293b" stroke-width="3"/>
          <line x1="95" y1="118" x2="95" y2="142" stroke="#1e293b" stroke-width="1.5"/>
          <text x="91" y="115" font-size="10" fill="#64748b">+  −</text>
          <line x1="95" y1="130" x2="140" y2="130" stroke="#1e293b" stroke-width="2"/>
          <text x="110" y="160" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">ε (unknown)</text>
          <!-- Galvanometer -->
          <line x1="140" y1="130" x2="180" y2="130" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="180" cy="130" r="12" fill="#fff" stroke="#22c55e" stroke-width="2"/>
          <text x="180" y="134" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="700">G</text>
          <!-- Jockey connection -->
          <line x1="192" y1="130" x2="250" y2="130" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="250" y1="130" x2="250" y2="50" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
          <circle cx="250" cy="50" r="4" fill="#dc2626"/>
          <text x="260" y="48" font-size="12" fill="#dc2626" font-weight="600">J</text>
          <!-- Length label -->
          <line x1="30" y1="70" x2="250" y2="70" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="140" y="85" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">l (balancing length)</text>
        </svg>
        <div class="diagram-caption">Potentiometer: Slide jockey J along wire AB until galvanometer shows null</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Potentiometer Principle</span>
        ε = φ × l &nbsp;&nbsp; (where φ = potential drop per unit length = V/L)
      </div>
      <p>At the null point, no current flows through the galvanometer, so the unknown EMF exactly equals the potential drop across length l of the wire.</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Comparing Two EMFs</span>
        ε₁ / ε₂ = l₁ / l₂ &nbsp;&nbsp; (ratio of balancing lengths)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Finding Internal Resistance of a Cell</span>
        r = R × (l₁ − l₂) / l₂<br>
        where l₁ = balancing length with key open, l₂ = with key closed (R in external circuit)
      </div>
      <div class="key-point"><strong>Why is potentiometer better than voltmeter?</strong> A voltmeter draws some current, so it reads <strong>terminal voltage (V < ε)</strong>. A potentiometer at null draws <strong>zero current</strong>, so it reads the <strong>true EMF</strong>.</div>
      <table class="compare-table">
        <tr><th>Application</th><th>What to Measure</th><th>Formula</th></tr>
        <tr><td>Compare EMFs</td><td>l₁ and l₂ for two cells</td><td>ε₁/ε₂ = l₁/l₂</td></tr>
        <tr><td>Internal resistance</td><td>l₁ (open), l₂ (closed)</td><td>r = R(l₁ − l₂)/l₂</td></tr>
      </table>
      <div class="remember-box"><strong>Important condition:</strong> The driver cell EMF (ε₀) must be <strong>greater</strong> than the EMF being measured. Otherwise, you'll never find a null point! Also, the positive terminals must be connected to the <strong>same end</strong> of the wire.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> In the internal resistance formula, students mix up l₁ and l₂. Remember: l₁ > l₂ always (because with key closed, terminal voltage < EMF, so balancing length decreases).</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Current Electricity",
    body: `
      <p>All formulas you need for the board exam, organized by topic.</p>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Basic Definitions</span>
        I = Q/t &nbsp;&nbsp;|&nbsp;&nbsp; I = nAev<sub>d</sub> &nbsp;&nbsp;|&nbsp;&nbsp; v<sub>d</sub> = eEτ/m &nbsp;&nbsp;|&nbsp;&nbsp; μ = v<sub>d</sub>/E = eτ/m<br>
        J = I/A = σE = nev<sub>d</sub> &nbsp;&nbsp; (current density)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Ohm's Law & Resistance</span>
        V = IR &nbsp;&nbsp;|&nbsp;&nbsp; R = ρL/A &nbsp;&nbsp;|&nbsp;&nbsp; ρ = 1/σ<br>
        R<sub>T</sub> = R₀(1 + αΔT) &nbsp;&nbsp;|&nbsp;&nbsp; ρ_T = ρ₀(1 + αΔT)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Combinations</span>
        Series: R<sub>eq</sub> = R₁ + R₂ + R₃ + ...<br>
        Parallel: 1/R<sub>eq</sub> = 1/R₁ + 1/R₂ + 1/R₃ + ...<br>
        Two parallel: R<sub>eq</sub> = R₁R₂/(R₁ + R₂)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">EMF & Cells</span>
        V = ε − Ir (discharging) &nbsp;&nbsp;|&nbsp;&nbsp; V = ε + Ir (charging)<br>
        I = ε/(R + r)<br>
        Series: ε_eq = nε, r<sub>eq</sub> = nr, I = nε/(R + nr)<br>
        Parallel: ε_eq = ε, r<sub>eq</sub> = r/n, I = ε/(R + r/n)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Kirchhoff's Laws</span>
        Junction: ΣI<sub>in</sub> = ΣI<sub>out</sub><br>
        Loop: ΣV = 0 (around closed loop)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Wheatstone Bridge & Meter Bridge</span>
        Balanced: P/Q = R/S &nbsp;&nbsp; (I<sub>G</sub> = 0)<br>
        Meter bridge: R/S = l/(100 − l) → S = R(100−l)/l
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Potentiometer</span>
        ε = φl &nbsp;&nbsp; (φ = potential gradient = V/L)<br>
        Comparing EMFs: ε₁/ε₂ = l₁/l₂<br>
        Internal resistance: r = R(l₁ − l₂)/l₂
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Electrical Energy & Power</span>
        P = VI = I²R = V²/R &nbsp;&nbsp;|&nbsp;&nbsp; Energy = Pt = VIt<br>
        Power dissipated in R: P = ε²R/(R + r)²<br>
        Maximum power when R = r → P<sub>max</sub> = ε²/4r
      </div>
      <div class="remember-box"><strong>Units to remember:</strong> Current → A, Charge → C, Resistance → Ω, Resistivity → Ω·m, Conductivity → S/m, Power → W, Energy → J or kWh</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "CBSE Numerical Tricks & Shortcuts",
    body: `
      <p>These shortcuts will save you precious time in the board exam. Practice them until they become automatic!</p>
      <div class="key-point"><strong>Trick 1: Equal resistors</strong><br>
      n equal resistors (each R) in series: R<sub>eq</sub> = nR<br>
      n equal resistors (each R) in parallel: R<sub>eq</sub> = R/n<br>
      <em>Example: 3 resistors of 6Ω in parallel = 6/3 = 2Ω. Done in 2 seconds!</em></div>
      <div class="key-point"><strong>Trick 2: Product-over-sum</strong> (two resistors in parallel)<br>
      R<sub>eq</sub> = (R₁ × R₂)/(R₁ + R₂)<br>
      <em>Example: 6Ω and 3Ω in parallel = (6×3)/(6+3) = 18/9 = 2Ω</em></div>
      <div class="key-point"><strong>Trick 3: Current divider</strong> (two parallel resistors)<br>
      I₁ = I × R₂/(R₁ + R₂) &nbsp;&nbsp; and &nbsp;&nbsp; I₂ = I × R₁/(R₁ + R₂)<br>
      <em>Notice: current through one resistor depends on the OTHER resistor!</em></div>
      <div class="key-point"><strong>Trick 4: Voltage divider</strong> (two series resistors)<br>
      V₁ = V × R₁/(R₁ + R₂) &nbsp;&nbsp; and &nbsp;&nbsp; V₂ = V × R₂/(R₁ + R₂)</div>
      <div class="key-point"><strong>Trick 5: Wheatstone shortcut</strong><br>
      If the bridge is balanced (P/Q = R/S), the galvanometer arm can be <strong>removed</strong>. Then solve as two series pairs in parallel:<br>
      R<sub>eq</sub> = (P + R)(Q + S) / (P + Q + R + S)</div>
      <div class="key-point"><strong>Trick 6: Symmetry method</strong><br>
      If a circuit has symmetry, the midpoint has the same potential — so the connecting wire carries no current and can be removed. This simplifies many complex circuits.</div>
      <div class="key-point"><strong>Trick 7: Meter bridge — quick S</strong><br>
      If l = 40 cm, then S = R × (100−40)/40 = R × 60/40 = 1.5R<br>
      If l = 33.3 cm, then S = R × 66.7/33.3 = 2R (approximately)</div>
      <div class="key-point"><strong>Trick 8: Potentiometer internal resistance</strong><br>
      r = R × (l₁ − l₂)/l₂ → just remember "R times (difference/shorter)"</div>
      <div class="remember-box"><strong>Exam strategy:</strong> Always <strong>check your answer</strong> with the rules: series R > largest R, parallel R < smallest R. If your answer violates this, you made an error somewhere.</div>
      <div class="mistake-box"><strong>Biggest time-waster:</strong> Setting up Kirchhoff's equations wrong. Always <strong>label currents and directions FIRST</strong> before writing equations. Spend 30 seconds planning to save 5 minutes debugging.</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam Most Asked Questions — Current Electricity",
    body: `
      <p>These question types appear <strong>almost every year</strong> in CBSE Physics boards. Master them!</p>
      <div class="key-point"><strong>1. Derive I = nAev<sub>d</sub></strong> (3 marks)<br>
      Consider a conductor of area A, length L. Volume = AL. Number of electrons = nAL. Total charge = nALe. Time to cross length L = L/v<sub>d</sub>. So I = Q/t = nALe/(L/v<sub>d</sub>) = nAev<sub>d</sub>. ✓</div>
      <div class="key-point"><strong>2. State and explain Kirchhoff's laws</strong> (3 marks)<br>
      Junction rule: ΣI<sub>in</sub> = ΣI<sub>out</sub> (conservation of charge).<br>
      Loop rule: ΣV = 0 around any closed loop (conservation of energy).<br>
      Give a diagram showing a junction with 3 currents and write the equation.</div>
      <div class="key-point"><strong>3. Wheatstone bridge derivation</strong> (3 marks)<br>
      Apply Kirchhoff's loop rule to the two loops. At balance, I<sub>G</sub> = 0. This gives: I₁P = I₂R and I₁Q = I₂S. Dividing: P/Q = R/S. ✓</div>
      <div class="key-point"><strong>4. Meter bridge experiment</strong> (3-5 marks)<br>
      Draw labelled diagram. Write formula S = R(100−l)/l. Mention precautions: null point near middle, interchange R and S, jockey pressed gently.</div>
      <div class="key-point"><strong>5. Potentiometer — comparing EMFs</strong> (3-5 marks)<br>
      Draw diagram. Find l₁ for ε₁ and l₂ for ε₂. Then ε₁/ε₂ = l₁/l₂. Explain why potentiometer is better than voltmeter (draws no current at null).</div>
      <div class="key-point"><strong>6. Potentiometer — internal resistance</strong> (3-5 marks)<br>
      Draw diagram with cell, resistance box R, and key K. With K open: ε = φl₁. With K closed: V = φl₂. Since V = εR/(R+r): r = R(l₁−l₂)/l₂.</div>
      <div class="key-point"><strong>7. Common numericals:</strong><br>
      • Find equivalent resistance of series-parallel combinations<br>
      • Find current using Kirchhoff's laws in a two-loop circuit<br>
      • Meter bridge: given R and l, find S<br>
      • Potentiometer: given l₁, l₂, R, find r<br>
      • Drift velocity from I, n, A, e</div>
      <table class="compare-table">
        <tr><th>Topic</th><th>Marks</th><th>Frequency</th></tr>
        <tr><td>Kirchhoff's laws + numerical</td><td>3-5</td><td>Almost every year</td></tr>
        <tr><td>Meter bridge</td><td>3</td><td>Very frequent</td></tr>
        <tr><td>Potentiometer (EMF or r)</td><td>3-5</td><td>Very frequent</td></tr>
        <tr><td>Drift velocity derivation</td><td>2-3</td><td>Frequent</td></tr>
        <tr><td>Resistance combinations</td><td>2-3</td><td>Frequent</td></tr>
        <tr><td>EMF vs terminal voltage</td><td>2</td><td>Occasional</td></tr>
      </table>
      <div class="remember-box"><strong>Scoring tips:</strong><br>
      1. Always draw a <strong>neat labelled diagram</strong> — it carries marks<br>
      2. Write the <strong>formula first</strong>, then substitute values<br>
      3. <strong>Units matter</strong> — always write them in the final answer<br>
      4. For derivations, state the <strong>principle</strong> and <strong>assumptions</strong> clearly<br>
      5. In potentiometer questions, mention that the driver cell EMF must be greater than the unknown EMF</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Drift Velocity — What It Is and Why It Matters",
    body: `
      <p><strong>Analogy:</strong> Imagine a crowded market. People are randomly milling about in all directions. Now a strong wind starts blowing from the east. People still move randomly, but there's a slow net <strong>drift</strong> toward the west. That's exactly what electrons do inside a conductor when an electric field is applied!</p>
      <div class="key-point"><strong>Without electric field:</strong> Free electrons move randomly at high thermal speeds (~10⁶ m/s), colliding with lattice ions. Their <strong>average velocity is zero</strong> — no net movement, no current.<br><br>
      <strong>With electric field E:</strong> Between collisions, each electron gets a small push (acceleration = eE/m) opposite to E. After many collisions, this creates a tiny net drift superimposed on the random motion.</div>

      <div class="diagram-container">
        <svg width="460" height="300" viewBox="0 0 460 300">
          <!-- Title: No field -->
          <text x="115" y="20" text-anchor="middle" font-size="14" fill="#1e293b" font-weight="700">Without E field</text>
          <rect x="15" y="30" width="200" height="120" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
          <!-- Random paths — no net drift -->
          <circle cx="50" cy="70" r="5" fill="#dc2626"/>
          <path d="M 50 70 L 60 55 L 45 48 L 65 60 L 55 80 L 70 72 L 52 65" stroke="#dc2626" stroke-width="1.2" fill="none"/>
          <circle cx="130" cy="100" r="5" fill="#2563eb"/>
          <path d="M 130 100 L 120 85 L 140 90 L 125 110 L 145 105 L 135 80 L 128 95" stroke="#2563eb" stroke-width="1.2" fill="none"/>
          <circle cx="170" cy="65" r="5" fill="#22c55e"/>
          <path d="M 170 65 L 185 55 L 175 75 L 160 60 L 180 80 L 190 65 L 168 70" stroke="#22c55e" stroke-width="1.2" fill="none"/>
          <circle cx="80" cy="120" r="5" fill="#a855f7"/>
          <path d="M 80 120 L 95 110 L 75 105 L 90 130 L 70 125 L 85 108 L 78 118" stroke="#a855f7" stroke-width="1.2" fill="none"/>
          <text x="115" y="168" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Random motion, no net drift</text>
          <text x="115" y="183" text-anchor="middle" font-size="12" fill="#64748b">Average velocity = 0</text>

          <!-- Title: With field -->
          <text x="345" y="20" text-anchor="middle" font-size="14" fill="#1e293b" font-weight="700">With E field</text>
          <rect x="245" y="30" width="200" height="120" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <!-- E field arrow -->
          <line x1="420" y1="90" x2="460" y2="90" stroke="#22c55e" stroke-width="2.5"/>
          <polygon points="460,90 450,84 450,96" fill="#22c55e"/>
          <text x="448" y="80" font-size="11" fill="#22c55e" font-weight="700">E</text>
          <!-- Random paths with net drift to LEFT (opposite to E) -->
          <circle cx="300" cy="70" r="5" fill="#dc2626"/>
          <path d="M 300 70 L 295 55 L 280 60 L 290 48 L 275 55 L 268 65" stroke="#dc2626" stroke-width="1.2" fill="none"/>
          <polygon points="268,65 275,60 274,70" fill="#dc2626"/>
          <circle cx="380" cy="95" r="5" fill="#2563eb"/>
          <path d="M 380 95 L 370 82 L 360 90 L 355 78 L 340 85 L 330 80" stroke="#2563eb" stroke-width="1.2" fill="none"/>
          <polygon points="330,80 337,76 336,85" fill="#2563eb"/>
          <circle cx="400" cy="55" r="5" fill="#22c55e"/>
          <path d="M 400 55 L 390 45 L 385 58 L 375 50 L 365 55 L 355 48" stroke="#22c55e" stroke-width="1.2" fill="none"/>
          <polygon points="355,48 362,44 361,53" fill="#22c55e"/>
          <circle cx="340" cy="125" r="5" fill="#a855f7"/>
          <path d="M 340 125 L 330 115 L 320 120 L 310 112 L 300 118 L 292 115" stroke="#a855f7" stroke-width="1.2" fill="none"/>
          <polygon points="292,115 299,111 298,120" fill="#a855f7"/>
          <!-- Net drift arrow -->
          <line x1="390" y1="168" x2="300" y2="168" stroke="#2563eb" stroke-width="3"/>
          <polygon points="300,168 313,161 313,175" fill="#2563eb"/>
          <text x="345" y="188" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="700">Net drift velocity v<sub>d</sub></text>
          <text x="345" y="203" text-anchor="middle" font-size="11" fill="#64748b">(opposite to E, very slow ~mm/s)</text>

          <!-- Derivation section below -->
          <rect x="15" y="220" width="430" height="70" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
          <text x="230" y="240" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="700">Deriving v<sub>d</sub>:</text>
          <text x="230" y="258" text-anchor="middle" font-size="12" fill="#1e293b">Acceleration a = eE/m &nbsp; | &nbsp; Between collisions, electron gains velocity = a x tau</text>
          <text x="230" y="276" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="700">v<sub>d</sub> = eE tau / m &nbsp;&nbsp; (tau = average time between collisions = relaxation time)</text>
        </svg>
        <div class="diagram-caption">Left: No field — electrons move randomly, zero net velocity. Right: With E field — electrons drift opposite to E.</div>
      </div>

      <p><strong>Step-by-step derivation of v<sub>d</sub> = eEtau/m:</strong></p>
      <p>1. Force on electron in field E: F = eE (magnitude)<br>
      2. Acceleration: a = F/m = eE/m<br>
      3. Between two successive collisions, average time = tau (relaxation time, ~10⁻¹⁴ s)<br>
      4. Velocity gained in time tau: v<sub>d</sub> = a x tau = <strong>eEtau/m</strong></p>

      <p><strong>Derivation of I = neAv<sub>d</sub>:</strong></p>
      <p>Consider a wire of cross-section area A. In time Δt, electrons drift a distance v<sub>d</sub> x Δt.<br>
      Volume swept = A x v<sub>d</sub> x Δt<br>
      Number of electrons in this volume = n x A x v<sub>d</sub> x Δt<br>
      Total charge crossing the area = n x A x v<sub>d</sub> x Δt x e<br>
      Current I = charge/time = <strong>neAv<sub>d</sub></strong></p>

      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Key Formulas</span>
        v<sub>d</sub> = eEtau/m &nbsp;&nbsp; (drift velocity)<br>
        I = neAv<sub>d</sub> &nbsp;&nbsp; (current in terms of drift velocity)
      </div>

      <div class="key-point"><strong>Solved Problem:</strong><br>
      A copper wire of cross-section area 1 mm² carries a current of 1.1 A. If electron density n = 8.5 x 10²⁸ /m³, find the drift velocity.<br><br>
      <strong>Solution:</strong><br>
      Given: A = 1 mm² = 1 x 10⁻⁶ m², I = 1.1 A, n = 8.5 x 10²⁸ /m³, e = 1.6 x 10⁻¹⁹ C<br><br>
      I = neAv<sub>d</sub> &nbsp; --> &nbsp; v<sub>d</sub> = I / (neA)<br>
      v<sub>d</sub> = 1.1 / (8.5 x 10²⁸ x 1.6 x 10⁻¹⁹ x 1 x 10⁻⁶)<br>
      v<sub>d</sub> = 1.1 / (8.5 x 1.6 x 10³)<br>
      v<sub>d</sub> = 1.1 / 13600<br>
      <strong>v<sub>d</sub> = 8.1 x 10⁻⁵ m/s = 0.081 mm/s</strong></div>

      <div class="remember-box"><strong>Mind-blowing fact:</strong> Drift velocity is VERY small (~0.1 mm/s), yet when you flip a switch the bulb lights up instantly! Why? Because the <strong>electric field</strong> propagates at nearly the speed of light (~3 x 10⁸ m/s). It's like a long queue of people — when the person at the back pushes, the person at the front moves almost instantly, even though no single person moved fast.</div>

      <div class="mistake-box"><strong>Common mistake:</strong> Confusing thermal speed (~10⁶ m/s) with drift speed (~10⁻⁴ m/s). Thermal speed is random and huge. Drift speed is the tiny net movement caused by the field. CBSE asks: "Why is drift velocity so small even though electrons move fast?" — this is the answer.</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Mobility — Definition and Relation with Current",
    body: `
      <p><strong>Mobility (mu)</strong> measures how easily charge carriers drift through a material when an electric field is applied. It is the <strong>drift velocity acquired per unit electric field</strong>.</p>

      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Mobility</span>
        mu = v<sub>d</sub> / E = e tau / m<br>
        SI unit: m² V⁻¹ s⁻¹ &nbsp;&nbsp; (read as "metre-squared per volt per second")
      </div>

      <p><strong>Physical meaning:</strong> Higher mobility means electrons respond more readily to the electric field. Metals like copper and silver have high electron mobility, which is why they are good conductors.</p>

      <div class="key-point"><strong>Relation between mobility and conductivity:</strong><br>
      We know: v<sub>d</sub> = mu x E &nbsp; and &nbsp; J = nev<sub>d</sub><br>
      So: J = ne(mu x E) = (ne x mu) x E<br>
      But J = sigma x E (Ohm's law in microscopic form)<br>
      Therefore: <strong>sigma = ne x mu</strong><br><br>
      This beautifully connects a macroscopic property (conductivity) to microscopic properties (carrier density and mobility).</div>

      <table class="compare-table">
        <tr><th>Quantity</th><th>Symbol</th><th>Formula</th><th>SI Unit</th><th>Depends on</th></tr>
        <tr><td>Drift velocity</td><td>v<sub>d</sub></td><td>eEtau/m</td><td>m/s</td><td>E, material, temperature</td></tr>
        <tr><td>Mobility</td><td>mu</td><td>etau/m = v<sub>d</sub>/E</td><td>m²V⁻¹s⁻¹</td><td>Material, temperature (NOT on E)</td></tr>
        <tr><td>Relaxation time</td><td>tau</td><td>mu x m/e</td><td>s (~10⁻¹⁴ s)</td><td>Material, temperature</td></tr>
        <tr><td>Conductivity</td><td>sigma</td><td>ne x mu = ne²tau/m</td><td>S/m</td><td>Material, temperature</td></tr>
      </table>

      <div class="key-point"><strong>Important distinction:</strong><br>
      - <strong>Drift velocity depends on E</strong> (double the field, double the drift)<br>
      - <strong>Mobility does NOT depend on E</strong> (it's a material property at given temperature)<br>
      This is a favourite CBSE conceptual question!</div>

      <div class="key-point"><strong>Solved Problem:</strong><br>
      The mobility of electrons in a conductor is 3.5 x 10⁻³ m²V⁻¹s⁻¹. Find the drift velocity when an electric field of 500 V/m is applied. Also find the relaxation time. (Given: m<sub>e</sub> = 9.1 x 10⁻³¹ kg, e = 1.6 x 10⁻¹⁹ C)<br><br>
      <strong>Solution:</strong><br>
      (i) v<sub>d</sub> = mu x E = 3.5 x 10⁻³ x 500 = <strong>1.75 m/s</strong><br><br>
      (ii) mu = e tau / m<br>
      tau = mu x m / e = (3.5 x 10⁻³ x 9.1 x 10⁻³¹) / (1.6 x 10⁻¹⁹)<br>
      tau = (31.85 x 10⁻³⁴) / (1.6 x 10⁻¹⁹)<br>
      <strong>tau = 1.99 x 10⁻¹⁴ s ≈ 2 x 10⁻¹⁴ s</strong></div>

      <div class="key-point"><strong>CBSE Previous Year (2019, 2020 pattern):</strong><br>
      <em>Q: Define mobility of a charge carrier. What is its SI unit? Write the relation between mobility and drift velocity of a charge carrier.</em><br><br>
      <strong>Model Answer:</strong> Mobility is defined as the magnitude of drift velocity per unit electric field. mu = v<sub>d</sub> / E. Its SI unit is m²V⁻¹s⁻¹. The relation between mobility and drift velocity is v<sub>d</sub> = mu x E.</div>

      <div class="remember-box"><strong>Quick memory aid:</strong> Mobility = "how mobile" electrons are. High mobility --> electrons drift faster for the same field --> better conductor. Think: mu connects the microscopic world (tau, m) to the macroscopic world (sigma, R).</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Current Density and Ohm's Law — Microscopic Form",
    body: `
      <p><strong>Current density (J)</strong> is the current flowing per unit cross-sectional area. It tells you how "concentrated" the current is.</p>

      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Current Density</span>
        J = I / A &nbsp;&nbsp; (scalar form)<br>
        J→ = nev<sub>d</sub>→ &nbsp;&nbsp; (vector form — direction of conventional current)<br>
        SI unit: A/m²
      </div>

      <div class="key-point"><strong>Microscopic form of Ohm's Law:</strong><br>
      Starting from v<sub>d</sub> = eEtau/m and J = nev<sub>d</sub>:<br>
      J = ne x (eEtau/m) = (ne²tau/m) x E<br>
      But (ne²tau/m) = sigma (conductivity), so:<br><br>
      <strong>J→ = sigma x E→</strong> &nbsp;&nbsp; ← This is the microscopic (vector) form of Ohm's law<br><br>
      This is the TRUE form of Ohm's law — it relates local quantities (current density at a point to the field at that point). The familiar V = IR is just a consequence of this!</div>

      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Connecting Microscopic to Macroscopic</span>
        Microscopic: J = sigma x E &nbsp;&nbsp; ... (1)<br>
        J = I/A and E = V/L &nbsp;&nbsp; ... (substituting)<br>
        I/A = sigma x V/L<br>
        I = (sigma x A/L) x V = V / (L/sigma x A) = V / (rho x L/A)<br>
        Since R = rho x L/A:<br>
        <strong>I = V/R &nbsp; --> &nbsp; V = IR</strong> &nbsp;&nbsp; (macroscopic Ohm's law recovered!)
      </div>

      <div class="key-point"><strong>Why does resistance increase with temperature in metals?</strong><br>
      From sigma = ne²tau/m, when temperature increases:<br>
      - <strong>n stays roughly constant</strong> (metals have fixed free electrons)<br>
      - <strong>tau DECREASES</strong> (more lattice vibrations --> more frequent collisions)<br>
      - So sigma decreases --> rho = 1/sigma increases --> <strong>R increases</strong><br><br>
      For semiconductors: n increases dramatically with temperature (breaking covalent bonds releases carriers), which dominates over tau decreasing. So <strong>R decreases</strong> with temperature.</div>

      <table class="compare-table">
        <tr><th>Form</th><th>Equation</th><th>Quantities</th><th>Type</th></tr>
        <tr><td>Microscopic</td><td>J = sigma x E</td><td>Local (at a point)</td><td>Vector equation</td></tr>
        <tr><td>Macroscopic</td><td>V = IR</td><td>Global (whole conductor)</td><td>Scalar equation</td></tr>
      </table>

      <div class="key-point"><strong>Solved Problem:</strong><br>
      A copper wire has resistivity 1.7 x 10⁻⁸ ohm-m and carries a current density of 5 x 10⁶ A/m². Find: (a) the electric field inside the wire, (b) the drift velocity if n = 8.5 x 10²⁸ /m³.<br><br>
      <strong>Solution:</strong><br>
      (a) J = sigma x E = E/rho &nbsp; --> &nbsp; E = J x rho<br>
      E = 5 x 10⁶ x 1.7 x 10⁻⁸ = <strong>0.085 V/m</strong><br><br>
      (b) J = nev<sub>d</sub> &nbsp; --> &nbsp; v<sub>d</sub> = J/(ne)<br>
      v<sub>d</sub> = (5 x 10⁶) / (8.5 x 10²⁸ x 1.6 x 10⁻¹⁹)<br>
      v<sub>d</sub> = (5 x 10⁶) / (1.36 x 10¹⁰)<br>
      <strong>v<sub>d</sub> = 3.68 x 10⁻⁴ m/s ≈ 0.37 mm/s</strong></div>

      <div class="mistake-box"><strong>Common mistakes students make:</strong><br>
      1. <strong>Confusing J and I:</strong> J = I/A is current PER UNIT AREA. A thick wire and thin wire can carry the same I but have very different J.<br>
      2. <strong>Vector direction:</strong> J→ is in the direction of E→ (conventional current direction), which is OPPOSITE to electron drift direction.<br>
      3. <strong>Forgetting units:</strong> J is in A/m², not just A. E is in V/m. Always write units in board answers.<br>
      4. <strong>Temperature effect:</strong> Don't say "resistance increases because electrons slow down." Say "relaxation time tau decreases because lattice vibrations increase, causing more frequent collisions."</div>

      <div class="remember-box"><strong>The big picture:</strong> Everything connects! mu = etau/m gives mobility. v<sub>d</sub> = mu x E gives drift. J = nev<sub>d</sub> gives current density. sigma = nemu gives conductivity. rho = 1/sigma gives resistivity. R = rhoL/A gives resistance. V = IR gives voltage. Master this chain and you can derive ANY formula in this chapter from first principles.</div>
    `
  }
];
