// Magnetism and Matter — Concepts
const ch5Concepts = [
  {
    id: 1, level: "basic",
    title: "Bar Magnet — Properties & Magnetic Field Lines",
    body: `
      <p>A <strong>bar magnet</strong> is the simplest magnetic device you already know — it's in your fridge magnets, compass needles, and toys. Every bar magnet has two <strong>poles</strong>: North (N) and South (S).</p>
      <div class="key-point"><strong>Key Properties:</strong><br>
        1. Like poles repel, unlike poles attract<br>
        2. Magnetic poles always exist in pairs — you can NEVER isolate a single pole (no magnetic monopoles)<br>
        3. A freely suspended magnet aligns itself in the N-S direction (that's how a compass works!)<br>
        4. The magnetic field is strongest at the poles
      </div>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <!-- Bar magnet body -->
          <rect x="150" y="90" width="70" height="40" rx="4" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5"/>
          <rect x="220" y="90" width="70" height="40" rx="4" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="185" y="115" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">N</text>
          <text x="255" y="115" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">S</text>
          <!-- Field lines from N to S (external) -->
          <path d="M 150 110 C 100 110, 60 50, 120 30 C 200 5, 280 5, 340 30 C 400 50, 360 110, 290 110" stroke="#8b5cf6" stroke-width="1.8" fill="none" marker-end="url(#arrowV)"/>
          <path d="M 150 100 C 110 80, 90 60, 130 45 C 190 25, 270 25, 310 45 C 350 60, 330 80, 290 100" stroke="#8b5cf6" stroke-width="1.8" fill="none" marker-end="url(#arrowV)"/>
          <path d="M 150 110 C 120 130, 90 170, 130 185 C 190 210, 270 210, 310 185 C 350 170, 320 130, 290 110" stroke="#8b5cf6" stroke-width="1.8" fill="none" marker-end="url(#arrowV)"/>
          <path d="M 150 120 C 110 140, 90 160, 130 175 C 190 195, 270 195, 310 175 C 350 160, 330 140, 290 120" stroke="#8b5cf6" stroke-width="1.8" fill="none" marker-end="url(#arrowV)"/>
          <!-- Internal field line (S to N inside magnet) -->
          <line x1="260" y1="110" x2="185" y2="110" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrowV)"/>
          <!-- Arrowhead definition -->
          <defs>
            <marker id="arrowV" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
          </defs>
          <text x="220" y="215" text-anchor="middle" font-size="11" fill="#64748b">Field lines: N → S outside, S → N inside the magnet</text>
        </svg>
        <div class="diagram-caption">Bar magnet with magnetic field lines — they form continuous closed loops</div>
      </div>
      <div class="remember-box"><strong>Remember:</strong> Magnetic field lines are <strong>closed loops</strong> — they never start or end anywhere. Outside the magnet they go N→S, inside the magnet they go S→N. This is different from electric field lines which start on + and end on −.</div>
      <div class="formula-box">
        <span class="formula-label">Magnetic Dipole Moment</span>
        m = M × 2l &nbsp;&nbsp; (pole strength × magnetic length)
      </div>
      <p>where <strong>M</strong> is the pole strength and <strong>2l</strong> is the distance between the two poles. SI unit: <strong>A·m²</strong> (ampere-metre²).</p>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students confuse magnetic length (2l) with geometric length of the magnet. Magnetic length ≈ <strong>0.84 × geometric length</strong> because poles are slightly inside.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Bar Magnet as an Equivalent Solenoid",
    body: `
      <p>Here's a beautiful connection: a <strong>bar magnet behaves exactly like a solenoid</strong> (a coil with many turns carrying current). The field pattern of a bar magnet and a solenoid are identical!</p>
      <div class="key-point"><strong>Why are they equivalent?</strong><br>
        A solenoid with N turns, length 2l, and current I produces a magnetic field pattern identical to a bar magnet. One end acts as N-pole (where current is anticlockwise), the other as S-pole (where current is clockwise).
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnetic Moment of a Solenoid</span>
        m = NIA &nbsp;&nbsp; (turns × current × area)
      </div>
      <p>where <strong>N</strong> = number of turns, <strong>I</strong> = current, <strong>A</strong> = cross-sectional area of the solenoid.</p>
      <div class="formula-box">
        <span class="formula-label">Axial Field (far from magnet, r >> l)</span>
        B(axial) = (μ₀/4π) × (2m/r³)
      </div>
      <div class="formula-box">
        <span class="formula-label">Equatorial Field (far from magnet, r >> l)</span>
        B(equatorial) = (μ₀/4π) × (m/r³)
      </div>
      <div class="key-point"><strong>Important Relation:</strong> B(axial) = 2 × B(equatorial) — the axial field is always <strong>twice</strong> the equatorial field at the same distance. This is identical to the electric dipole formula!</div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Questions often compare bar magnets to electric dipoles. The formulas are the <strong>same structure</strong> — just replace electric dipole moment (p) with magnetic moment (m), and 1/4πε₀ with μ₀/4π.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> The direction of B(equatorial) is <strong>opposite</strong> to m (antiparallel). On the axis, B is <strong>along</strong> m (parallel). Don't mix these up in direction-based questions.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Earth's Magnetism — Declination, Dip & Horizontal Component",
    body: `
      <p>The Earth itself is a giant magnet! Its magnetic field is why your compass needle points roughly north. But Earth's magnetism has some quirks that CBSE loves to test.</p>
      <div class="key-point"><strong>Key Fact:</strong> Earth's <strong>magnetic south pole</strong> is near the <strong>geographic north pole</strong> (and vice versa). That's why the north pole of a compass is attracted toward geographic north — because a magnetic south pole is there!</div>
      <div class="diagram-container">
        <svg width="440" height="280" viewBox="0 0 440 280">
          <!-- Earth circle -->
          <circle cx="220" cy="140" r="100" fill="#e0f2fe" stroke="#2563eb" stroke-width="2"/>
          <text x="220" y="145" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">EARTH</text>
          <!-- Geographic axis (vertical) -->
          <line x1="220" y1="20" x2="220" y2="260" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,4"/>
          <text x="220" y="15" text-anchor="middle" font-size="11" fill="#64748b" font-weight="600">Geographic N</text>
          <text x="220" y="275" text-anchor="middle" font-size="11" fill="#64748b" font-weight="600">Geographic S</text>
          <!-- Magnetic axis (tilted ~11.3°) -->
          <line x1="240" y1="25" x2="200" y2="255" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,4"/>
          <text x="260" y="22" font-size="10" fill="#dc2626" font-weight="600">Magnetic S pole</text>
          <text x="180" y="270" font-size="10" fill="#dc2626" font-weight="600">Magnetic N pole</text>
          <!-- Angle arc for declination -->
          <path d="M 220 90 A 50 50 0 0 1 228 90" stroke="#059669" stroke-width="2" fill="none"/>
          <text x="248" y="80" font-size="10" fill="#059669" font-weight="600">~11.3°</text>
          <!-- Compass and B field illustration on right -->
          <text x="380" y="60" text-anchor="middle" font-size="11" fill="#64748b" font-weight="600">At any point:</text>
          <!-- B vector decomposition -->
          <line x1="350" y1="140" x2="350" y2="80" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowPurp)"/>
          <line x1="350" y1="140" x2="410" y2="140" stroke="#059669" stroke-width="2" marker-end="url(#arrowGreen)"/>
          <line x1="350" y1="140" x2="410" y2="80" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowRed)"/>
          <text x="335" y="105" font-size="11" fill="#8b5cf6" font-weight="600">Bv</text>
          <text x="382" y="155" font-size="11" fill="#059669" font-weight="600">BH</text>
          <text x="395" y="100" font-size="12" fill="#dc2626" font-weight="700">B</text>
          <!-- Dip angle -->
          <path d="M 375 140 A 25 25 0 0 0 380 122" stroke="#dc2626" stroke-width="1.5" fill="none"/>
          <text x="392" y="132" font-size="10" fill="#dc2626" font-weight="600">δ (dip)</text>
          <defs>
            <marker id="arrowPurp" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
            <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#059669"/></marker>
            <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Earth's magnetic field: geographic vs magnetic poles, and decomposition of B into BH and Bv</div>
      </div>
      <p>Three quantities describe Earth's magnetic field at any location. These are called <strong>Magnetic Elements</strong>:</p>
      <table class="compare-table">
        <tr><th>Element</th><th>Symbol</th><th>What It Means</th></tr>
        <tr><td>Declination</td><td>θ</td><td>Angle between geographic north and magnetic north (horizontal plane)</td></tr>
        <tr><td>Dip / Inclination</td><td>δ (delta)</td><td>Angle that total field B makes with the horizontal</td></tr>
        <tr><td>Horizontal Component</td><td>BH</td><td>Component of B along the horizontal</td></tr>
      </table>
      <div class="formula-box">
        <span class="formula-label">Relations Between Magnetic Elements</span>
        BH = B cos δ &nbsp;&nbsp;&nbsp; Bv = B sin δ &nbsp;&nbsp;&nbsp; tan δ = Bv / BH
      </div>
      <div class="remember-box"><strong>Remember:</strong><br>
        • At the <strong>magnetic equator</strong>: dip δ = 0°, so BH = B (full field is horizontal)<br>
        • At the <strong>magnetic poles</strong>: dip δ = 90°, so BH = 0 (field is fully vertical, compass is useless!)<br>
        • In India, dip is roughly 25°–40° depending on location
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Declination is the angle in the <strong>horizontal plane</strong>. Dip is the angle in the <strong>vertical plane</strong>. Don't confuse them — CBSE often asks "what happens to a dip needle at the equator?" (Answer: it becomes horizontal).</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Magnetic Field Lines — Properties & Comparison with Electric Field Lines",
    body: `
      <p>Magnetic field lines help us visualize how the magnetic field spreads in space. Think of them as an "invisible map" of the force a compass needle would experience.</p>
      <div class="key-point"><strong>Properties of Magnetic Field Lines:</strong><br>
        1. They form <strong>continuous closed loops</strong> (no starting or ending point)<br>
        2. Outside the magnet: N → S; Inside: S → N<br>
        3. They <strong>never cross</strong> each other (why? because at a crossing point, the field would have two directions — impossible!)<br>
        4. Closer lines = stronger field; farther lines = weaker field<br>
        5. They tend to contract lengthwise (attraction) and expand sideways (repulsion)
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Magnetic Field Lines</th><th>Electric Field Lines</th></tr>
        <tr><td>Shape</td><td>Closed loops (always)</td><td>Open — start on +, end on −</td></tr>
        <tr><td>Origin</td><td>No starting/ending point</td><td>Start on +ve, end on −ve charge</td></tr>
        <tr><td>Crossing</td><td>Never cross</td><td>Never cross</td></tr>
        <tr><td>Monopoles</td><td>Don't exist (no isolated pole)</td><td>Exist (isolated +/− charge)</td></tr>
        <tr><td>Gauss's Law</td><td>∮B·dA = 0 (always)</td><td>∮E·dA = q/ε₀</td></tr>
      </table>
      <div class="formula-box">
        <span class="formula-label">Gauss's Law for Magnetism</span>
        ∮ B · dA = 0
      </div>
      <p>This equation simply says: the net magnetic flux through any closed surface is <strong>always zero</strong>. This is because field lines are closed loops — whatever enters a surface must also exit.</p>
      <div class="remember-box"><strong>CBSE Board Favourite:</strong> "Why is Gauss's law for magnetism ∮B·dA = 0?" — Because magnetic monopoles don't exist. Every field line that enters a closed surface also leaves it, making net flux zero.</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "Magnetization (M) & Magnetic Intensity (H)",
    body: `
      <p>When you place a material inside a magnetic field, the material itself gets slightly magnetized. To describe this, we define two new quantities.</p>
      <div class="formula-box">
        <span class="formula-label">Magnetization (M)</span>
        M = Net magnetic moment / Volume = m(net) / V
      </div>
      <p><strong>Magnetization M</strong> tells us how much magnetic moment develops per unit volume of the material. Unit: <strong>A/m</strong>.</p>
      <p>Think of it like this: when you bring a nail near a magnet, tiny atomic magnets inside the nail line up. M measures how well they've lined up.</p>
      <div class="formula-box">
        <span class="formula-label">Magnetic Intensity (H)</span>
        H = B₀ / μ₀ = nI &nbsp;&nbsp; (for a solenoid)
      </div>
      <p><strong>Magnetic Intensity H</strong> represents the magnetizing force that an external source (like a solenoid) provides. It depends only on the current, not the material. Unit: <strong>A/m</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Master Relation (VERY IMPORTANT)</span>
        B = μ₀(H + M)
      </div>
      <p>This is the <strong>most important formula</strong> in this chapter. It says:</p>
      <p><strong>Total field B</strong> = Contribution from external source (μ₀H) + Contribution from the material (μ₀M)</p>
      <div class="key-point"><strong>Understanding the formula:</strong><br>
        • <strong>B</strong> = total magnetic field inside the material (Tesla)<br>
        • <strong>μ₀H</strong> = field due to external current alone (what you'd get without any material)<br>
        • <strong>μ₀M</strong> = extra field due to the material getting magnetized<br>
        • For diamagnetic materials, M opposes H (reduces B)<br>
        • For para/ferro materials, M supports H (increases B)
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students often write B = μ₀H, forgetting the material's contribution. The correct formula is B = μ₀(H + M). B = μ₀H is only valid in <strong>vacuum</strong> (where M = 0).</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Magnetic Susceptibility (χ) & Permeability (μ)",
    body: `
      <p>How do we quantify how strongly a material responds to an external magnetic field? Two related quantities help us:</p>
      <div class="formula-box">
        <span class="formula-label">Magnetic Susceptibility</span>
        χ (chi) = M / H &nbsp;&nbsp; (dimensionless — no unit)
      </div>
      <p><strong>Susceptibility χ</strong> tells us how easily a material gets magnetized. Large χ = gets magnetized easily. Small or negative χ = weak or opposing magnetization.</p>
      <div class="formula-box">
        <span class="formula-label">Magnetic Permeability</span>
        μ = B / H &nbsp;&nbsp; (Unit: T·m/A or Henry/m)
      </div>
      <p><strong>Permeability μ</strong> tells us how well a material allows magnetic field to pass through it.</p>
      <div class="formula-box">
        <span class="formula-label">Relative Permeability & Key Relation</span>
        μᵣ = μ / μ₀ = 1 + χ
      </div>
      <p>This connects all three: permeability, relative permeability, and susceptibility.</p>
      <table class="compare-table">
        <tr><th>Material Type</th><th>χ value</th><th>μᵣ value</th><th>Behaviour</th></tr>
        <tr><td>Diamagnetic</td><td>Small, negative (−10⁻⁵)</td><td>Slightly < 1</td><td>Weakly repelled</td></tr>
        <tr><td>Paramagnetic</td><td>Small, positive (10⁻⁵)</td><td>Slightly > 1</td><td>Weakly attracted</td></tr>
        <tr><td>Ferromagnetic</td><td>Very large, positive (10³–10⁵)</td><td>Very large >> 1</td><td>Strongly attracted</td></tr>
      </table>
      <div class="remember-box"><strong>Memory Trick:</strong> "<strong>Dia = Decrease</strong>" — diamagnetic materials <strong>decrease</strong> the field (negative χ). "<strong>Para = Partial increase</strong>" — paramagnetic slightly increase it. "<strong>Ferro = Full power</strong>" — ferromagnetic massively increase it.</div>
      <div class="key-point"><strong>Derivation shortcut:</strong> From B = μ₀(H + M) and M = χH:<br>
        B = μ₀(H + χH) = μ₀H(1 + χ) = μ₀μᵣH = μH<br>
        This gives us <strong>μ = μ₀(1 + χ)</strong> and <strong>μᵣ = 1 + χ</strong>
      </div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Diamagnetic Materials — Properties, Examples & Explanation",
    body: `
      <p>Diamagnetic materials are <strong>weakly repelled</strong> by a magnetic field. When you bring a diamagnetic substance near a magnet, it moves slightly <strong>away</strong> from the strong field region.</p>
      <div class="key-point"><strong>Properties of Diamagnetic Materials:</strong><br>
        1. Weakly repelled by magnetic field<br>
        2. χ is small and <strong>negative</strong> (typically −10⁻⁵)<br>
        3. μᵣ is slightly less than 1<br>
        4. Magnetization M is <strong>opposite</strong> to applied field H<br>
        5. <strong>Independent of temperature</strong> (χ doesn't change with T)<br>
        6. When placed in a non-uniform field, they move toward <strong>weaker</strong> field
      </div>
      <div class="diagram-container">
        <svg width="400" height="150" viewBox="0 0 400 150">
          <!-- External field arrows -->
          <text x="200" y="20" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">External Field B₀ →</text>
          <line x1="30" y1="35" x2="370" y2="35" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrowF1)"/>
          <!-- Diamagnetic sample -->
          <rect x="150" y="55" width="100" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="200" y="82" text-anchor="middle" font-size="11" fill="#92400e" font-weight="600">Diamagnetic</text>
          <text x="200" y="96" text-anchor="middle" font-size="10" fill="#92400e">(e.g., Bismuth)</text>
          <!-- Field lines bending AWAY from sample -->
          <path d="M 30 75 L 140 75" stroke="#8b5cf6" stroke-width="1.5"/>
          <path d="M 140 75 Q 150 55, 160 45" stroke="#8b5cf6" stroke-width="1.5"/>
          <path d="M 140 75 Q 150 95, 160 115" stroke="#8b5cf6" stroke-width="1.5"/>
          <path d="M 240 45 Q 250 55, 260 75" stroke="#8b5cf6" stroke-width="1.5"/>
          <path d="M 240 115 Q 250 95, 260 75" stroke="#8b5cf6" stroke-width="1.5"/>
          <path d="M 260 75 L 370 75" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrowF1)"/>
          <text x="200" y="140" text-anchor="middle" font-size="11" fill="#64748b">Field lines are pushed AWAY — expelled from the sample</text>
          <defs><marker id="arrowF1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker></defs>
        </svg>
        <div class="diagram-caption">Diamagnetic material expels field lines — field is weaker inside</div>
      </div>
      <p><strong>Examples:</strong> Bismuth (Bi), Copper (Cu), Gold (Au), Silver (Ag), Water (H₂O), Diamond, Lead, Silicon, Nitrogen gas, most organic compounds.</p>
      <div class="key-point"><strong>Origin:</strong> Diamagnetism comes from <strong>orbital motion of electrons</strong>. When an external field is applied, the electron orbits adjust to oppose the change (Lenz's law at atomic level). This effect is present in ALL materials but is very weak, so it's masked in para/ferro materials.</div>
      <div class="remember-box"><strong>Superconductor = Perfect Diamagnet:</strong> A superconductor has χ = −1, meaning it <strong>completely expels</strong> the magnetic field from inside (Meissner effect). This is the ultimate diamagnetic behaviour.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Paramagnetic Materials — Properties, Examples & Curie's Law",
    body: `
      <p>Paramagnetic materials are <strong>weakly attracted</strong> by a magnetic field. Think of them as "mildly interested" in magnets — they lean toward the field, but barely.</p>
      <div class="key-point"><strong>Properties of Paramagnetic Materials:</strong><br>
        1. Weakly attracted by magnetic field<br>
        2. χ is small and <strong>positive</strong> (typically 10⁻⁵ to 10⁻³)<br>
        3. μᵣ is slightly greater than 1<br>
        4. Magnetization M is in the <strong>same direction</strong> as H<br>
        5. χ <strong>depends on temperature</strong> — decreases as T increases<br>
        6. In non-uniform field, they move toward <strong>stronger</strong> field region
      </div>
      <p><strong>Examples:</strong> Aluminium (Al), Sodium (Na), Calcium (Ca), Oxygen (O₂), Chromium (Cr), Platinum (Pt), Manganese (Mn), Liquid oxygen, CuCl₂.</p>
      <div class="key-point"><strong>Origin:</strong> Paramagnetic atoms have a <strong>permanent magnetic dipole moment</strong> (due to unpaired electrons). Without an external field, these dipoles point randomly (thermal agitation), so net M = 0. When field is applied, dipoles partially align along the field, giving a small net M.</div>
      <div class="formula-box">
        <span class="formula-label">Curie's Law (VERY IMPORTANT)</span>
        χ = C / T &nbsp;&nbsp; or equivalently &nbsp;&nbsp; M = C × (B₀ / T)
      </div>
      <p>where <strong>C</strong> = Curie constant, <strong>T</strong> = absolute temperature (Kelvin).</p>
      <div class="key-point"><strong>What Curie's Law means:</strong> As temperature increases, thermal agitation disrupts the alignment of atomic dipoles, so magnetization <strong>decreases</strong>. At very high temperatures, paramagnetic materials become practically non-magnetic.</div>
      <div class="remember-box"><strong>Analogy:</strong> Imagine tiny compass needles (atomic dipoles) inside the material. The external field tries to align them, but heat shakes them randomly. More heat = less alignment = lower χ.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Curie's Law applies to <strong>paramagnetic</strong> materials. Don't confuse it with the Curie-Weiss Law (for ferromagnetic materials above Curie temperature). Also, Curie's Law does NOT apply to diamagnetic materials (their χ is temperature-independent).</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Ferromagnetic Materials — Domains, Properties & Curie Temperature",
    body: `
      <p>Ferromagnetic materials are <strong>strongly attracted</strong> by magnetic fields. These are the "real" magnets you encounter daily — iron, nickel, cobalt. They can be <strong>permanently magnetized</strong>.</p>
      <div class="key-point"><strong>Properties of Ferromagnetic Materials:</strong><br>
        1. <strong>Strongly attracted</strong> by magnetic field<br>
        2. χ is very large and <strong>positive</strong> (10³ to 10⁵)<br>
        3. μᵣ is very large (>> 1), can be thousands<br>
        4. Can retain magnetization even after field is removed<br>
        5. χ depends on temperature — above Curie temperature, they become paramagnetic<br>
        6. Show <strong>hysteresis</strong> (magnetization lags behind the field)
      </div>
      <p><strong>Examples:</strong> Iron (Fe), Nickel (Ni), Cobalt (Co), Gadolinium (Gd), and alloys like Alnico, Permalloy.</p>
      <div class="key-point"><strong>Domain Theory:</strong> Inside a ferromagnetic material, atoms group into tiny regions called <strong>domains</strong> (each ~1 mm). Within each domain, all atomic dipoles are perfectly aligned. But different domains point in different directions, so the net magnetization can be zero.</div>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Unmagnetized state -->
          <rect x="20" y="30" width="170" height="110" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="105" y="22" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Unmagnetized</text>
          <!-- Random domains -->
          <line x1="40" y1="60" x2="75" y2="50" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="90" y1="75" x2="70" y2="55" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowD2)"/>
          <line x1="120" y1="50" x2="155" y2="70" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="40" y1="100" x2="60" y2="120" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowD2)"/>
          <line x1="85" y1="110" x2="120" y2="105" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="130" y1="120" x2="110" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowD2)"/>
          <line x1="150" y1="100" x2="175" y2="115" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <text x="105" y="155" text-anchor="middle" font-size="10" fill="#64748b">Domains random → Net M ≈ 0</text>
          <!-- Arrow between states -->
          <text x="220" y="75" text-anchor="middle" font-size="13" fill="#059669" font-weight="700">Apply B →</text>
          <line x1="205" y1="85" x2="245" y2="85" stroke="#059669" stroke-width="2" marker-end="url(#arrowG)"/>
          <!-- Magnetized state -->
          <rect x="255" y="30" width="170" height="110" rx="6" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
          <text x="340" y="22" text-anchor="middle" font-size="12" fill="#059669" font-weight="600">Magnetized</text>
          <!-- Aligned domains -->
          <line x1="270" y1="60" x2="310" y2="60" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="320" y1="60" x2="360" y2="60" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="370" y1="60" x2="410" y2="60" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="270" y1="90" x2="310" y2="90" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="320" y1="90" x2="360" y2="90" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="370" y1="90" x2="410" y2="90" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="270" y1="120" x2="310" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="320" y1="120" x2="360" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <line x1="370" y1="120" x2="410" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowD)"/>
          <text x="340" y="155" text-anchor="middle" font-size="10" fill="#059669">All domains aligned → Large M</text>
          <defs>
            <marker id="arrowD" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrowD2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrowG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#059669"/></marker>
          </defs>
        </svg>
        <div class="diagram-caption">Domain alignment in ferromagnetic material — random domains align when field is applied</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Curie Temperature (Tc)</span>
        Above Tc: Ferromagnetic → Paramagnetic &nbsp;&nbsp; (χ = C / (T − Tc) for T > Tc)
      </div>
      <table class="compare-table">
        <tr><th>Material</th><th>Curie Temperature (Tc)</th></tr>
        <tr><td>Iron (Fe)</td><td>1043 K (770°C)</td></tr>
        <tr><td>Nickel (Ni)</td><td>631 K (358°C)</td></tr>
        <tr><td>Cobalt (Co)</td><td>1394 K (1121°C)</td></tr>
      </table>
      <div class="remember-box"><strong>Why does heating destroy magnetism?</strong> Above the Curie temperature, thermal energy is so strong that it breaks the domain alignment. The material can no longer maintain its ferromagnetic behaviour and acts like a paramagnetic substance.</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Complete Comparison: Diamagnetic vs Paramagnetic vs Ferromagnetic",
    body: `
      <p>This comparison table is a <strong>CBSE favourite</strong> — it appears almost every year in some form. Memorize it thoroughly!</p>
      <table class="compare-table">
        <tr><th>Property</th><th>Diamagnetic</th><th>Paramagnetic</th><th>Ferromagnetic</th></tr>
        <tr><td>Effect of field</td><td>Weakly repelled</td><td>Weakly attracted</td><td>Strongly attracted</td></tr>
        <tr><td>Susceptibility (χ)</td><td>Small, negative</td><td>Small, positive</td><td>Very large, positive</td></tr>
        <tr><td>Relative perm. (μᵣ)</td><td>Slightly < 1</td><td>Slightly > 1</td><td>>> 1 (thousands)</td></tr>
        <tr><td>M direction</td><td>Opposite to H</td><td>Along H</td><td>Along H (very strong)</td></tr>
        <tr><td>Temperature dependence</td><td>Independent of T</td><td>χ ∝ 1/T (Curie's Law)</td><td>χ depends on T, loses above Tc</td></tr>
        <tr><td>Removal of field</td><td>M vanishes instantly</td><td>M vanishes instantly</td><td>M retained (permanent magnet)</td></tr>
        <tr><td>In non-uniform field</td><td>Moves to weaker region</td><td>Moves to stronger region</td><td>Moves to stronger region</td></tr>
        <tr><td>Field lines through</td><td>Lines expelled (B < B₀)</td><td>Lines slightly concentrated</td><td>Lines highly concentrated</td></tr>
        <tr><td>Domains</td><td>No domains</td><td>No domains</td><td>Has domains</td></tr>
        <tr><td>Hysteresis</td><td>No</td><td>No</td><td>Yes</td></tr>
        <tr><td>Examples</td><td>Bi, Cu, Ag, Au, H₂O, Diamond</td><td>Al, Na, Ca, O₂, Pt, Cr</td><td>Fe, Ni, Co, Gd, Alnico</td></tr>
      </table>
      <div class="remember-box"><strong>Quick Identification Trick (for CBSE):</strong><br>
        • χ is <strong>negative</strong> → Diamagnetic<br>
        • χ is <strong>small positive</strong> → Paramagnetic<br>
        • χ is <strong>large positive</strong> (10³ or more) → Ferromagnetic<br>
        • <strong>Repelled</strong> by magnet → Diamagnetic<br>
        • Has <strong>domains</strong> → Ferromagnetic<br>
        • Follows <strong>Curie's Law</strong> (χ = C/T) → Paramagnetic
      </div>
      <div class="key-point"><strong>Interesting Facts for Viva/Board:</strong><br>
        • ALL materials are diamagnetic at the base level. But if atoms have unpaired electrons, para/ferro effects dominate and mask diamagnetism.<br>
        • Diamagnetism is the weakest, ferromagnetism is the strongest.<br>
        • A superconductor is the most perfect diamagnet (χ = −1).
      </div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Hysteresis Loop — Retentivity, Coercivity & Energy Loss",
    body: `
      <p>When you magnetize a ferromagnetic material and then remove the field, the material doesn't return to its original state. The magnetization <strong>lags behind</strong> the applied field. This lag is called <strong>hysteresis</strong> (Greek: "to lag behind").</p>
      <div class="diagram-container">
        <svg width="440" height="320" viewBox="0 0 440 320">
          <!-- Axes -->
          <line x1="220" y1="20" x2="220" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="30" y1="155" x2="410" y2="155" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="422" y="159" font-size="12" fill="#64748b" font-weight="600">H</text>
          <text x="224" y="16" font-size="12" fill="#64748b" font-weight="600">B</text>
          <!-- Hysteresis loop -->
          <path d="M 220 155 C 260 130, 310 80, 360 55 C 370 50, 380 48, 390 48" stroke="#dc2626" stroke-width="2.5" fill="none"/>
          <path d="M 390 48 C 380 50, 350 55, 310 65 C 260 80, 230 95, 220 105 C 210 115, 180 120, 140 125 C 100 130, 70 132, 50 132" stroke="#dc2626" stroke-width="2.5" fill="none"/>
          <path d="M 50 132 C 60 135, 80 140, 100 155 C 120 170, 140 190, 160 210 C 180 230, 200 250, 220 260" stroke="#dc2626" stroke-width="2.5" fill="none"/>
          <path d="M 220 260 C 230 265, 250 268, 270 270" stroke="#dc2626" stroke-width="2.5" fill="none"/>
          <path d="M 50 262 C 60 260, 80 255, 100 245 C 140 225, 180 200, 220 155" stroke="#2563eb" stroke-width="2.5" fill="none"/>
          <path d="M 220 155 C 260 110, 310 70, 390 48" stroke="#2563eb" stroke-width="2.5" fill="none" stroke-dasharray="6,3"/>
          <!-- Labels -->
          <!-- Retentivity -->
          <circle cx="220" cy="105" r="4" fill="#059669"/>
          <text x="135" y="100" font-size="11" fill="#059669" font-weight="600">Retentivity (Br)</text>
          <line x1="183" y1="103" x2="216" y2="105" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Coercivity -->
          <circle cx="140" cy="155" r="4" fill="#7c3aed"/>
          <text x="70" y="170" font-size="11" fill="#7c3aed" font-weight="600">Coercivity (Hc)</text>
          <line x1="130" y1="168" x2="140" y2="159" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Saturation -->
          <circle cx="390" cy="48" r="4" fill="#dc2626"/>
          <text x="340" y="38" font-size="11" fill="#dc2626" font-weight="600">Saturation</text>
          <!-- Origin O -->
          <text x="225" y="170" font-size="12" fill="#64748b" font-weight="600">O</text>
          <!-- Area label -->
          <text x="220" y="305" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Area of loop = Energy lost per cycle as heat</text>
        </svg>
        <div class="diagram-caption">Hysteresis loop (B-H curve) showing retentivity, coercivity, and saturation</div>
      </div>
      <div class="key-point"><strong>Key Terms:</strong><br>
        <strong>Retentivity (Br):</strong> The magnetization (B) that remains when H is reduced to zero. It's the "memory" of the magnet.<br>
        <strong>Coercivity (Hc):</strong> The reverse magnetic intensity needed to completely demagnetize the material (bring B to zero).<br>
        <strong>Saturation:</strong> Maximum magnetization — all domains are fully aligned, can't increase further.
      </div>
      <div class="formula-box">
        <span class="formula-label">Energy Loss per Cycle</span>
        Energy loss = Area enclosed by the hysteresis loop
      </div>
      <p>Every time the material goes through one complete magnetization cycle, energy equal to the area of the loop is <strong>wasted as heat</strong>. This is why transformer cores need materials with <strong>narrow</strong> hysteresis loops.</p>
      <div class="remember-box"><strong>CBSE Board Tip:</strong> You will often be asked: "What happens when you take a ferromagnetic material through a complete cycle?" Answer: Energy is lost equal to the area of the hysteresis loop, dissipated as heat.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Permanent Magnets vs Electromagnets — Materials & Properties",
    body: `
      <p>The hysteresis loop directly tells us which materials are good for permanent magnets and which for electromagnets. This is a practical and frequently tested topic.</p>
      <table class="compare-table">
        <tr><th>Property</th><th>Permanent Magnet</th><th>Electromagnet (Soft core)</th></tr>
        <tr><td>Purpose</td><td>Stay magnetized forever</td><td>Easy to magnetize/demagnetize</td></tr>
        <tr><td>Retentivity needed</td><td><strong>High</strong> (strong residual B)</td><td><strong>Low</strong> (loses B quickly when field off)</td></tr>
        <tr><td>Coercivity needed</td><td><strong>High</strong> (hard to demagnetize)</td><td><strong>Low</strong> (easy to demagnetize)</td></tr>
        <tr><td>Hysteresis loop</td><td>Wide (large area)</td><td>Narrow (small area)</td></tr>
        <tr><td>Energy loss/cycle</td><td>High (but doesn't matter — not cycled)</td><td>Low (critical — cycled many times)</td></tr>
        <tr><td>Materials used</td><td>Steel, Alnico, Nd₂Fe₁₄B (neodymium)</td><td>Soft iron, Mumetal, Permalloy</td></tr>
      </table>
      <div class="key-point"><strong>Why does this matter?</strong><br>
        • <strong>Transformer cores</strong> use soft iron — they go through 50 cycles/second (50 Hz AC), so low hysteresis loss is critical<br>
        • <strong>Hard disk drives</strong> and <strong>fridge magnets</strong> use high coercivity materials — they must stay magnetized<br>
        • <strong>Neodymium magnets</strong> (Nd₂Fe₁₄B) are the strongest permanent magnets available today
      </div>
      <div class="remember-box"><strong>Quick recall:</strong><br>
        Permanent magnet = <strong>HARD</strong> magnetic material (hard to demagnetize) = wide loop<br>
        Electromagnet core = <strong>SOFT</strong> magnetic material (easy to demagnetize) = narrow loop<br>
        "Hard = holds, Soft = surrenders"
      </div>
      <div class="key-point"><strong>How to make a permanent magnet (3 methods from NCERT):</strong><br>
        1. <strong>Stroking:</strong> Repeatedly stroke a steel rod with one pole of a magnet<br>
        2. <strong>Electric current:</strong> Place steel rod inside a solenoid and pass strong current<br>
        3. <strong>Heating + cooling:</strong> Heat steel above Curie temp, place in strong B, cool slowly
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students write "iron is used for permanent magnets." NO! <strong>Steel</strong> (not soft iron) is used for permanent magnets. <strong>Soft iron</strong> is used for electromagnet cores (easy to demagnetize). Iron is too soft — it loses magnetization easily.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Magnetism & Matter",
    body: `
      <p>All formulas from Chapter 5 in one place. Print this and revise before the exam!</p>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Bar Magnet & Dipole</span>
        Magnetic dipole moment: <strong>m = M × 2l</strong> (pole strength × length)<br>
        Axial field: <strong>B = (μ₀/4π)(2m/r³)</strong> &nbsp; [for r >> l]<br>
        Equatorial field: <strong>B = (μ₀/4π)(m/r³)</strong> &nbsp; [for r >> l]<br>
        Relation: <strong>B(axial) = 2 × B(equatorial)</strong><br>
        Torque on dipole in field: <strong>τ = m × B = mB sin θ</strong><br>
        PE of dipole: <strong>U = −m·B = −mB cos θ</strong><br>
        Solenoid dipole moment: <strong>m = NIA</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Earth's Magnetic Elements</span>
        Horizontal component: <strong>BH = B cos δ</strong><br>
        Vertical component: <strong>Bv = B sin δ</strong><br>
        Relation: <strong>tan δ = Bv / BH</strong><br>
        Total field: <strong>B² = BH² + Bv²</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Magnetization, Intensity & Material Properties</span>
        Magnetization: <strong>M = m(net)/V</strong> &nbsp; (A/m)<br>
        Magnetic Intensity: <strong>H = B₀/μ₀ = nI</strong> &nbsp; (A/m)<br>
        Master relation: <strong>B = μ₀(H + M)</strong><br>
        Susceptibility: <strong>χ = M/H</strong> &nbsp; (dimensionless)<br>
        Permeability: <strong>μ = B/H</strong> &nbsp; (T·m/A)<br>
        Relative permeability: <strong>μᵣ = μ/μ₀ = 1 + χ</strong><br>
        Curie's Law (para): <strong>χ = C/T</strong><br>
        Curie-Weiss (ferro, T > Tc): <strong>χ = C/(T − Tc)</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Gauss's Law for Magnetism</span>
        <strong>∮ B · dA = 0</strong> &nbsp; (net magnetic flux through any closed surface = 0)
      </div>
      <div class="key-point"><strong>Units Quick Reference:</strong><br>
        • B (magnetic field): Tesla (T)<br>
        • m (dipole moment): A·m²<br>
        • M (magnetization): A/m<br>
        • H (magnetic intensity): A/m<br>
        • χ (susceptibility): dimensionless (no unit)<br>
        • μ (permeability): T·m/A or H/m<br>
        • μ₀ = 4π × 10⁻⁷ T·m/A
      </div>
      <div class="remember-box"><strong>Exam Strategy:</strong> Most numericals in this chapter involve either (a) Earth's magnetic elements (BH, Bv, δ) or (b) susceptibility/permeability relations. Practice converting between χ, μᵣ, and μ quickly.</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "CBSE Tricks — Quick Identification & Graph-Based Questions",
    body: `
      <p>CBSE loves to test if you can <strong>quickly identify material types</strong> from given data and interpret graphs. Here are the tricks:</p>
      <div class="key-point"><strong>Trick 1: Identify material from χ value</strong><br>
        • χ = −0.00002 → <strong>Diamagnetic</strong> (negative)<br>
        • χ = +0.00015 → <strong>Paramagnetic</strong> (small positive)<br>
        • χ = +5000 → <strong>Ferromagnetic</strong> (large positive)<br>
        Rule: Check SIGN first, then MAGNITUDE.
      </div>
      <div class="key-point"><strong>Trick 2: Identify from μᵣ value</strong><br>
        • μᵣ = 0.99998 → <strong>Diamagnetic</strong> (slightly < 1)<br>
        • μᵣ = 1.00015 → <strong>Paramagnetic</strong> (slightly > 1)<br>
        • μᵣ = 5000 → <strong>Ferromagnetic</strong> (much > 1)<br>
        Remember: μᵣ = 1 + χ
      </div>
      <div class="key-point"><strong>Trick 3: χ vs T Graph Interpretation</strong><br>
        • <strong>Flat line</strong> (χ doesn't change with T) → Diamagnetic<br>
        • <strong>Hyperbola</strong> (χ = C/T, decreasing curve) → Paramagnetic<br>
        • <strong>Drops sharply</strong> at Curie temperature → Ferromagnetic
      </div>
      <div class="key-point"><strong>Trick 4: B vs H Graph Questions</strong><br>
        • <strong>Straight line</strong> through origin (slope < μ₀) → Diamagnetic<br>
        • <strong>Straight line</strong> through origin (slope > μ₀) → Paramagnetic<br>
        • <strong>Hysteresis curve</strong> → Ferromagnetic
      </div>
      <div class="key-point"><strong>Trick 5: Non-uniform field behaviour</strong><br>
        "A rod placed between pole pieces of a magnet aligns <strong>perpendicular</strong> to the field" → Diamagnetic<br>
        "A rod aligns <strong>parallel</strong> to the field" → Paramagnetic or Ferromagnetic
      </div>
      <div class="remember-box"><strong>Frequently Asked Graph Question:</strong><br>
        "Draw the variation of χ with T for dia, para, and ferro materials."<br>
        Answer: Dia = horizontal line (no change); Para = decreasing hyperbola (C/T); Ferro = high value that drops to zero at Tc, then follows C/(T−Tc) like a paramagnetic.</div>
      <div class="mistake-box"><strong>Common Trap:</strong> CBSE gives μᵣ = 0.999 and asks "what type?" Many students say paramagnetic because 0.999 looks "close to 1." But since it's LESS than 1, it's <strong>diamagnetic</strong>. Always check: less than 1 = dia, greater than 1 = para/ferro.</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam Most Asked Questions — Magnetism & Matter",
    body: `
      <p>These question types appear <strong>almost every year</strong> in CBSE Physics boards. Practice writing these answers in 3-5 line format.</p>
      <div class="key-point"><strong>Q1: Why can you not isolate a magnetic monopole?</strong><br>
        Because magnetic poles always exist in pairs. If you break a magnet, each piece becomes a complete magnet with both N and S poles. This is a fundamental property of nature — isolated monopoles have never been observed.</div>
      <div class="key-point"><strong>Q2: What is Gauss's law for magnetism? What does it imply?</strong><br>
        ∮B·dA = 0. It means net magnetic flux through any closed surface is zero. This implies magnetic monopoles don't exist — magnetic field lines are continuous closed loops.</div>
      <div class="key-point"><strong>Q3: Distinguish between dia, para, and ferro materials. Give one example each.</strong><br>
        (Use the comparison table from Concept 10 — write at least 4-5 distinguishing properties)</div>
      <div class="key-point"><strong>Q4: What is hysteresis? Explain retentivity and coercivity.</strong><br>
        Hysteresis is the lagging of B behind H in ferromagnetic materials. Retentivity = residual B when H = 0. Coercivity = reverse H needed to make B = 0. Area of the hysteresis loop = energy lost per cycle as heat.</div>
      <div class="key-point"><strong>Q5: Why is soft iron used in transformer cores?</strong><br>
        Soft iron has (a) high permeability — concentrates field well, (b) low retentivity — easily demagnetizes, (c) low coercivity, (d) narrow hysteresis loop — minimal energy loss per cycle. Since transformers operate at 50 Hz, low hysteresis loss is critical.</div>
      <div class="key-point"><strong>Q6: Earth's magnetic field at a place has BH = 0.3 G. Dip = 60°. Find total field B.</strong><br>
        BH = B cos δ → B = BH / cos δ = 0.3 / cos 60° = 0.3 / 0.5 = <strong>0.6 G</strong></div>
      <div class="key-point"><strong>Q7: Define susceptibility. What are its values for dia/para/ferro?</strong><br>
        χ = M/H. Dimensionless. Dia: small negative (−10⁻⁵), Para: small positive (10⁻⁵), Ferro: very large positive (10³–10⁵).</div>
      <div class="key-point"><strong>Q8: A solenoid has 500 turns, length 40 cm, current 3 A, area 4 cm². Find m.</strong><br>
        m = NIA = 500 × 3 × 4 × 10⁻⁴ = <strong>0.6 A·m²</strong></div>
      <div class="remember-box"><strong>Exam Writing Tips:</strong><br>
        1. Always draw a diagram for field lines, hysteresis, or Earth's magnetism questions<br>
        2. Define every symbol before using it in formulas<br>
        3. For comparison questions, use a table — it's neater and scores more marks<br>
        4. For numericals, show units at each step<br>
        5. For 5-mark questions, include at least one formula + one diagram + written explanation
      </div>
    `
  }
];
