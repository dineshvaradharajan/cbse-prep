// Moving Charges and Magnetism — Concepts
const ch4Concepts = [
  {
    id: 1, level: "basic",
    title: "Magnetic Force on a Moving Charge — F = qv × B",
    body: `
      <p>When a charged particle moves through a magnetic field, it experiences a <strong>force</strong>. This is the foundation of the entire chapter!</p>
      <div class="formula-box">
        <span class="formula-label">Magnetic Force (Lorentz Magnetic Force)</span>
        <strong>F</strong> = q(<strong>v</strong> × <strong>B</strong>) &nbsp;&nbsp;⟹&nbsp;&nbsp; F = qvB sin θ
      </div>
      <p>where <strong>q</strong> = charge, <strong>v</strong> = velocity of the particle, <strong>B</strong> = magnetic field, and <strong>θ</strong> = angle between v and B.</p>
      <div class="diagram-container">
        <svg width="420" height="240" viewBox="0 0 420 240">
          <!-- Axes -->
          <defs>
            <marker id="arrowV" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrowB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
            <marker id="arrowF" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- Charge -->
          <circle cx="160" cy="140" r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
          <text x="160" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">+q</text>
          <!-- Velocity arrow -->
          <line x1="174" y1="140" x2="280" y2="140" stroke="#dc2626" stroke-width="3" marker-end="url(#arrowV)"/>
          <text x="230" y="132" font-size="14" font-weight="bold" fill="#dc2626">v →</text>
          <!-- B field arrow -->
          <line x1="160" y1="126" x2="160" y2="30" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arrowB)"/>
          <text x="170" y="70" font-size="14" font-weight="bold" fill="#8b5cf6">B ↑</text>
          <!-- Force arrow (out of page shown as dot-in-circle) -->
          <circle cx="160" cy="200" r="16" fill="none" stroke="#22c55e" stroke-width="3"/>
          <circle cx="160" cy="200" r="4" fill="#22c55e"/>
          <text x="185" y="205" font-size="14" font-weight="bold" fill="#22c55e">F (out of page)</text>
          <!-- Angle label -->
          <text x="40" y="30" font-size="13" fill="#64748b">θ = 90° here, so F = qvB</text>
          <!-- Right-hand rule guide -->
          <rect x="10" y="170" width="130" height="60" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1"/>
          <text x="75" y="190" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">Right-Hand Rule:</text>
          <text x="75" y="205" text-anchor="middle" font-size="10" fill="#166534">Fingers → v direction</text>
          <text x="75" y="218" text-anchor="middle" font-size="10" fill="#166534">Curl → towards B</text>
          <text x="75" y="231" text-anchor="middle" font-size="10" fill="#166534">Thumb → Force on +q</text>
        </svg>
        <div class="diagram-caption">Force on a positive charge moving with velocity v in magnetic field B — use Right-Hand Rule for direction</div>
      </div>
      <div class="key-point"><strong>Right-Hand Rule — step by step:</strong><br>
      1. Point your four fingers straight in the direction of <strong>v</strong> (velocity).<br>
      2. Curl your fingers towards <strong>B</strong> (magnetic field).<br>
      3. Your <strong>thumb</strong> points in the direction of force on a <strong>positive charge</strong>.<br>
      4. For a <strong>negative charge</strong>, the force is in the <strong>opposite</strong> direction to your thumb.</div>
      <div class="remember-box"><strong>When is force ZERO?</strong><br>
      • When θ = 0° or 180° (charge moves parallel or antiparallel to B) → sin θ = 0 → F = 0<br>
      • When the charge is <strong>stationary</strong> (v = 0) → F = 0<br>
      Think of it this way: the magnetic field only "notices" you if you're moving AND cutting across field lines.</div>
      <div class="key-point"><strong>Maximum force</strong> occurs when θ = 90° (charge moves perpendicular to B): F = qvB</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students write F = qvB and forget the sin θ. Always write the full formula F = qvB sin θ unless the question specifically says v ⊥ B.</div>
      <div class="key-point"><strong>Important property:</strong> Magnetic force is always <strong>perpendicular</strong> to velocity. This means it does <strong>no work</strong> on the charge and cannot change its <strong>speed</strong> — only its <strong>direction</strong>.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Lorentz Force — Combined Electric and Magnetic",
    body: `
      <p>In real situations, a charge may experience <strong>both</strong> electric and magnetic forces at the same time. The total force is called the <strong>Lorentz force</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Lorentz Force</span>
        <strong>F</strong> = q<strong>E</strong> + q(<strong>v</strong> × <strong>B</strong>) = q[<strong>E</strong> + <strong>v</strong> × <strong>B</strong>]
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Electric Force (qE)</th><th>Magnetic Force (qv×B)</th></tr>
        <tr><td>Acts on</td><td>Both stationary & moving charges</td><td>Only moving charges</td></tr>
        <tr><td>Direction</td><td>Along E (or opposite for −q)</td><td>Perpendicular to both v and B</td></tr>
        <tr><td>Work done</td><td>Can do work (changes KE)</td><td>Does NO work (changes direction only)</td></tr>
        <tr><td>Speed change</td><td>Yes (accelerates/decelerates)</td><td>No (only changes direction)</td></tr>
        <tr><td>Depends on velocity?</td><td>No</td><td>Yes</td></tr>
      </table>
      <div class="key-point"><strong>Why does magnetic force do no work?</strong><br>Work = F · d = Fd cos α. Since magnetic force is always perpendicular to velocity (and hence displacement), α = 90° → cos 90° = 0 → <strong>Work = 0</strong>. The charge just keeps turning, never speeding up or slowing down.</div>
      <div class="remember-box"><strong>Velocity selector:</strong> When E and B are crossed (perpendicular), charges with speed v = E/B pass through undeflected because electric and magnetic forces balance. This is used in mass spectrometers!</div>
      <div class="key-point"><strong>SI Unit of B:</strong> Tesla (T). Also expressed as: 1 T = 1 Wb/m² = 1 kg/(A·s²). The CGS unit is Gauss: <strong>1 T = 10⁴ Gauss</strong>.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting that electric force does work but magnetic force does not. If a question says "a charged particle gains kinetic energy," it's the electric field doing the work, not the magnetic field!</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Motion of Charged Particle in Magnetic Field — Circular Motion",
    body: `
      <p>When a charged particle enters a magnetic field <strong>perpendicular</strong> to its velocity, the magnetic force acts as a <strong>centripetal force</strong> and the particle moves in a <strong>circle</strong>.</p>
      <div class="diagram-container">
        <svg width="420" height="300" viewBox="0 0 420 300">
          <defs>
            <marker id="arrowR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrowG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- B field dots (into page) -->
          <text x="20" y="20" font-size="12" fill="#8b5cf6" font-weight="bold">B ⊗ (into page)</text>
          <g fill="#8b5cf6" font-size="16">
            <text x="30" y="60">×</text><text x="80" y="60">×</text><text x="130" y="60">×</text><text x="330" y="60">×</text><text x="380" y="60">×</text>
            <text x="30" y="110">×</text><text x="380" y="110">×</text>
            <text x="30" y="160">×</text><text x="380" y="160">×</text>
            <text x="30" y="210">×</text><text x="380" y="210">×</text>
            <text x="30" y="260">×</text><text x="80" y="260">×</text><text x="130" y="260">×</text><text x="330" y="260">×</text><text x="380" y="260">×</text>
          </g>
          <!-- Circular path -->
          <circle cx="210" cy="155" r="85" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,4"/>
          <!-- Charge at top -->
          <circle cx="210" cy="70" r="10" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
          <text x="210" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">+</text>
          <!-- Velocity at top (rightward) -->
          <line x1="220" y1="70" x2="275" y2="70" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowR)"/>
          <text x="250" y="62" font-size="12" font-weight="bold" fill="#dc2626">v</text>
          <!-- Force at top (downward = toward center) -->
          <line x1="210" y1="80" x2="210" y2="125" stroke="#22c55e" stroke-width="2.5" marker-end="url(#arrowG)"/>
          <text x="220" y="110" font-size="12" font-weight="bold" fill="#22c55e">F</text>
          <!-- Radius line -->
          <line x1="210" y1="155" x2="210" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="195" y="118" font-size="12" fill="#64748b" font-weight="bold">r</text>
          <!-- Center -->
          <circle cx="210" cy="155" r="3" fill="#64748b"/>
          <!-- Direction arrow on circle -->
          <path d="M 295 155 A 85 85 0 0 1 260 230" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowR)"/>
          <text x="300" y="195" font-size="11" fill="#dc2626">clockwise for +q</text>
        </svg>
        <div class="diagram-caption">Positive charge moving in a circle when v ⊥ B (B into the page). The magnetic force always points toward the centre.</div>
      </div>
      <p>The magnetic force provides centripetal force:</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Circular Motion Formulas</span>
        qvB = mv²/r &nbsp;⟹&nbsp; <strong>Radius: r = mv / qB</strong><br>
        <strong>Time period: T = 2πm / qB</strong> (independent of v!)<br>
        <strong>Frequency: f = qB / 2πm</strong> (cyclotron frequency)<br>
        <strong>Angular frequency: ω = qB / m</strong>
      </div>
      <div class="key-point"><strong>Amazing fact:</strong> The time period T does NOT depend on the speed or radius! A faster particle traces a bigger circle but completes it in the same time. This is the principle behind the cyclotron.</div>
      <div class="remember-box"><strong>Three cases of entry angle:</strong><br>
      • <strong>v ⊥ B (θ = 90°):</strong> Circular path, radius = mv/qB<br>
      • <strong>v ∥ B (θ = 0°):</strong> No force, straight line<br>
      • <strong>v at angle θ to B:</strong> Helical (spiral) path. The v cos θ component goes along B (no force), and v sin θ component traces a circle. Pitch of helix = v cos θ × T</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students often confuse the direction of circular motion. For a +ve charge with B into the page, the motion is <strong>clockwise</strong>. For a −ve charge, it's <strong>anticlockwise</strong>. Use the right-hand rule at any point on the circle to verify.</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Cyclotron — Principle, Working, and Limitations",
    body: `
      <p>The <strong>cyclotron</strong> is a device that accelerates charged particles (like protons, alpha particles) to very high energies. It was invented by <strong>Ernest Lawrence</strong> in 1934.</p>
      <div class="key-point"><strong>Principle:</strong> A charged particle in a uniform magnetic field moves in a circle with a time period T = 2πm/qB that is <strong>independent of speed</strong>. So the particle keeps speeding up but always takes the same time for each half-circle.</div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Cyclotron Formulas</span>
        <strong>Cyclotron frequency:</strong> f = qB / 2πm (= oscillator frequency)<br>
        <strong>Maximum radius:</strong> r₀ = radius of the dee<br>
        <strong>Maximum KE:</strong> KE(max) = q²B²r₀² / 2m<br>
        <strong>Maximum velocity:</strong> v(max) = qBr₀ / m
      </div>
      <p><strong>How it works — step by step:</strong></p>
      <p>1. Two hollow <strong>D-shaped</strong> metallic containers ("dees") are placed in a strong magnetic field B (perpendicular to the dees).</p>
      <p>2. An <strong>alternating voltage</strong> is applied across the gap between the dees at the cyclotron frequency.</p>
      <p>3. A charged particle starts at the centre and gets accelerated across the gap.</p>
      <p>4. Inside a dee, B makes it travel in a <strong>semicircle</strong>.</p>
      <p>5. When it reaches the gap again, the voltage has reversed, so it gets accelerated again.</p>
      <p>6. Each time it crosses the gap, it gains energy and spirals outward in bigger semicircles.</p>
      <p>7. Eventually it reaches the edge and exits through a window.</p>
      <div class="remember-box"><strong>Key resonance condition:</strong> The oscillator frequency must equal the cyclotron frequency: f(osc) = qB/2πm. This ensures the particle always arrives at the gap just as the voltage reverses.</div>
      <table class="compare-table">
        <tr><th>Feature</th><th>Detail</th></tr>
        <tr><td>Can accelerate</td><td>Protons, deuterons, alpha particles, heavy ions</td></tr>
        <tr><td>Cannot accelerate</td><td>Electrons (too light, become relativistic quickly), Neutral particles (no charge)</td></tr>
        <tr><td>Energy gained per revolution</td><td>2qV (crosses gap twice per revolution)</td></tr>
      </table>
      <div class="mistake-box"><strong>Cyclotron limitation:</strong> At very high speeds (close to speed of light), mass increases due to relativistic effects: m = m₀/√(1−v²/c²). This means T is no longer constant, and the particle goes out of sync with the oscillator. <strong>Electrons</strong> reach relativistic speeds very quickly due to their tiny mass, so cyclotrons cannot accelerate electrons.</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "Biot-Savart Law",
    body: `
      <p>The <strong>Biot-Savart Law</strong> tells us the magnetic field produced by a small current-carrying element. Think of it as the magnetic equivalent of Coulomb's law.</p>
      <div class="formula-box">
        <span class="formula-label">Biot-Savart Law</span>
        d<strong>B</strong> = (μ₀ / 4π) × (I d<strong>l</strong> × <strong>r̂</strong>) / r²
      </div>
      <p>where <strong>dB</strong> = tiny magnetic field, <strong>I</strong> = current, <strong>dl</strong> = small length element of the wire, <strong>r</strong> = distance from the element to the point, <strong>r̂</strong> = unit vector from element to point.</p>
      <div class="diagram-container">
        <svg width="420" height="260" viewBox="0 0 420 260">
          <defs>
            <marker id="arrowBSr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#64748b"/></marker>
            <marker id="arrowBSdl" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrowBSB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
          </defs>
          <!-- Wire -->
          <path d="M 50 200 Q 120 180, 160 160 Q 200 140, 260 130 Q 320 120, 380 110" stroke="#dc2626" stroke-width="3" fill="none"/>
          <text x="55" y="218" font-size="13" fill="#dc2626" font-weight="bold">I →</text>
          <!-- dl element highlighted -->
          <line x1="175" y1="153" x2="215" y2="140" stroke="#dc2626" stroke-width="5"/>
          <text x="180" y="175" font-size="13" fill="#dc2626" font-weight="bold">dl</text>
          <!-- r vector to point P -->
          <line x1="195" y1="146" x2="320" y2="50" stroke="#64748b" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrowBSr)"/>
          <text x="260" y="85" font-size="13" fill="#64748b" font-weight="bold">r</text>
          <!-- Point P -->
          <circle cx="325" cy="45" r="5" fill="#8b5cf6"/>
          <text x="335" y="50" font-size="14" font-weight="bold" fill="#8b5cf6">P</text>
          <!-- dB direction (out of page at P) -->
          <circle cx="325" cy="45" r="14" fill="none" stroke="#8b5cf6" stroke-width="2"/>
          <circle cx="325" cy="45" r="3" fill="#8b5cf6"/>
          <text x="345" y="35" font-size="12" fill="#8b5cf6" font-weight="bold">dB (out)</text>
          <!-- Angle theta -->
          <path d="M 210 142 A 20 20 0 0 1 215 125" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <text x="222" y="128" font-size="12" fill="#64748b">θ</text>
        </svg>
        <div class="diagram-caption">Biot-Savart Law: Current element Idl produces magnetic field dB at point P. Direction given by dl × r̂.</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.0">
        <span class="formula-label">Magnitude Form</span>
        dB = (μ₀ / 4π) × (I dl sin θ) / r²<br>
        where θ = angle between dl and r
      </div>
      <table class="compare-table">
        <tr><th>Feature</th><th>Biot-Savart Law</th><th>Coulomb's Law</th></tr>
        <tr><td>Gives</td><td>Magnetic field B</td><td>Electric field E</td></tr>
        <tr><td>Source</td><td>Current element I dl</td><td>Point charge q</td></tr>
        <tr><td>Distance dependence</td><td>1/r²</td><td>1/r²</td></tr>
        <tr><td>Direction</td><td>Perpendicular to plane of dl and r</td><td>Along the line joining charges</td></tr>
        <tr><td>Nature</td><td>Vector (cross product)</td><td>Vector (along r̂)</td></tr>
        <tr><td>Superposition</td><td>Yes</td><td>Yes</td></tr>
      </table>
      <div class="remember-box"><strong>Direction shortcut:</strong> For the direction of dB, use the right-hand rule: point fingers along dl, curl them toward r̂, and your thumb gives the direction of dB. If dl × r̂ points out of the page → dB is out of page (shown as a dot ⊙). Into the page → shown as ⊗.</div>
      <div class="key-point"><strong>μ₀ = 4π × 10⁻⁷ T·m/A</strong> (permeability of free space). This constant plays the same role in magnetism as ε₀ does in electrostatics.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Magnetic Field Due to a Straight Current-Carrying Wire",
    body: `
      <p>Using the Biot-Savart law, we can find the magnetic field at a perpendicular distance from a long straight wire carrying current I.</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Field Due to Straight Wire</span>
        <strong>Infinite wire:</strong> B = μ₀I / 2πd<br>
        <strong>Finite wire (subtending angles φ₁ and φ₂):</strong><br>
        B = (μ₀I / 4πd) × (sin φ₁ + sin φ₂)
      </div>
      <p>where <strong>d</strong> = perpendicular distance from the wire to the point.</p>
      <div class="diagram-container">
        <svg width="420" height="260" viewBox="0 0 420 260">
          <defs>
            <marker id="arrSW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
          </defs>
          <!-- Wire (vertical) -->
          <line x1="120" y1="10" x2="120" y2="250" stroke="#dc2626" stroke-width="3"/>
          <text x="130" y="30" font-size="13" fill="#dc2626" font-weight="bold">I ↑</text>
          <!-- Perpendicular distance -->
          <line x1="120" y1="130" x2="300" y2="130" stroke="#64748b" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="200" y="122" font-size="13" fill="#64748b" font-weight="bold">d</text>
          <!-- Point P -->
          <circle cx="300" cy="130" r="5" fill="#8b5cf6"/>
          <text x="310" y="135" font-size="14" font-weight="bold" fill="#8b5cf6">P</text>
          <!-- Concentric circles (field lines) -->
          <circle cx="120" cy="130" r="60" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
          <circle cx="120" cy="130" r="110" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
          <circle cx="120" cy="130" r="180" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.3"/>
          <!-- B direction at P (into page) -->
          <text x="290" y="165" font-size="12" fill="#8b5cf6" font-weight="bold">B ⊗ (into page)</text>
          <!-- Right-hand rule note -->
          <rect x="260" y="185" width="150" height="60" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1"/>
          <text x="335" y="203" text-anchor="middle" font-size="11" fill="#6d28d9" font-weight="bold">Right-Hand Thumb Rule:</text>
          <text x="335" y="218" text-anchor="middle" font-size="10" fill="#6d28d9">Thumb → current direction</text>
          <text x="335" y="233" text-anchor="middle" font-size="10" fill="#6d28d9">Curled fingers → B direction</text>
        </svg>
        <div class="diagram-caption">Magnetic field lines are concentric circles around a current-carrying wire. Use Right-Hand Thumb Rule for direction.</div>
      </div>
      <div class="key-point"><strong>Right-Hand Thumb Rule:</strong><br>
      1. Point your <strong>thumb</strong> in the direction of current.<br>
      2. Your <strong>curled fingers</strong> show the direction of magnetic field lines.<br>
      The field lines form <strong>concentric circles</strong> around the wire.</div>
      <div class="remember-box"><strong>Special cases for the finite wire formula:</strong><br>
      • <strong>Infinite wire:</strong> φ₁ = φ₂ = 90° → B = μ₀I/2πd (sin 90° + sin 90° = 2, and μ₀I × 2/4πd = μ₀I/2πd)<br>
      • <strong>Semi-infinite wire:</strong> φ₁ = 90°, φ₂ = 0° → B = μ₀I/4πd<br>
      • <strong>At midpoint of finite wire of length L:</strong> sin φ = L/2 / √(d² + L²/4)</div>
      <div class="key-point"><strong>B decreases as 1/d</strong> — if you double the distance from the wire, the field becomes half. This is different from a point charge (where E goes as 1/r²).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using B = μ₀I/2πd for a finite wire. The infinite wire formula only works when the wire is very long compared to the distance d. For a finite wire, always use the angle formula.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Magnetic Field at the Centre of a Circular Loop",
    body: `
      <p>A circular loop carrying current produces a magnetic field at its centre. This is a very important CBSE derivation!</p>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Field at Centre of Circular Loop</span>
        <strong>B = μ₀I / 2R</strong> &nbsp;&nbsp;(single turn)<br>
        <strong>B = μ₀NI / 2R</strong> &nbsp;&nbsp;(N turns)
      </div>
      <div class="diagram-container">
        <svg width="420" height="260" viewBox="0 0 420 260">
          <defs>
            <marker id="arrCL" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrBCL" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
          </defs>
          <!-- Circular loop (ellipse to show 3D) -->
          <ellipse cx="200" cy="150" rx="120" ry="50" fill="none" stroke="#dc2626" stroke-width="3"/>
          <!-- Current direction arrows -->
          <line x1="80" y1="150" x2="80" y2="110" stroke="#dc2626" stroke-width="2" marker-end="url(#arrCL)"/>
          <text x="55" y="120" font-size="12" fill="#dc2626" font-weight="bold">I</text>
          <line x1="320" y1="150" x2="320" y2="190" stroke="#dc2626" stroke-width="2" marker-end="url(#arrCL)"/>
          <!-- Centre point -->
          <circle cx="200" cy="150" r="4" fill="#8b5cf6"/>
          <text x="185" y="168" font-size="12" fill="#64748b">O</text>
          <!-- B field at centre (perpendicular to loop) -->
          <line x1="200" y1="145" x2="200" y2="30" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arrBCL)"/>
          <text x="210" y="50" font-size="14" font-weight="bold" fill="#8b5cf6">B</text>
          <!-- Radius -->
          <line x1="200" y1="150" x2="320" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="260" y="142" font-size="13" fill="#64748b" font-weight="bold">R</text>
          <!-- Label -->
          <text x="200" y="230" text-anchor="middle" font-size="12" fill="#64748b">Current loop in the plane of the page</text>
          <text x="200" y="248" text-anchor="middle" font-size="12" fill="#8b5cf6">B points OUT of the loop (toward you)</text>
        </svg>
        <div class="diagram-caption">B at the centre of a circular loop is perpendicular to the plane of the loop. Direction: use the curling rule.</div>
      </div>
      <div class="key-point"><strong>Direction of B at centre:</strong> Curl the fingers of your right hand in the direction of current flow around the loop. Your <strong>thumb</strong> points in the direction of B at the centre.</div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Field on the Axis of a Circular Loop (at distance x from centre)</span>
        B = μ₀IR² / 2(R² + x²)<sup>(3/2)</sup> &nbsp;&nbsp;(single turn)<br>
        B = μ₀NIR² / 2(R² + x²)<sup>(3/2)</sup> &nbsp;&nbsp;(N turns)
      </div>
      <div class="remember-box"><strong>Quick checks:</strong><br>
      • At the centre (x = 0): B = μ₀NI/2R ✓<br>
      • Far from the loop (x >> R): B ≈ μ₀NIA/2πx³ where A = πR² (behaves like a magnetic dipole!)<br>
      • B at centre is <strong>maximum</strong> and decreases as you move along the axis.</div>
      <div class="key-point"><strong>A current loop acts like a magnetic dipole</strong> with magnetic moment <strong>m = NIA</strong> (where A = area of loop). This is a very important connection for the whole chapter.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting to square R in the numerator of the axial field formula. It's μ₀NIR² in the numerator (R squared), and (R² + x²)<sup>(3/2)</sup> in the denominator (three-halves power).</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Ampere's Circuital Law",
    body: `
      <p><strong>Ampere's Circuital Law</strong> is the magnetic analogue of Gauss's law. It relates the magnetic field around a closed loop to the current passing through it.</p>
      <div class="formula-box">
        <span class="formula-label">Ampere's Circuital Law</span>
        ∮ <strong>B</strong> · d<strong>l</strong> = μ₀ I(enclosed)
      </div>
      <p>The line integral of B around any closed loop (called an <strong>Amperian loop</strong>) equals μ₀ times the total current passing through the surface bounded by that loop.</p>
      <div class="key-point"><strong>When to use Ampere's law vs Biot-Savart law?</strong><br>
      • <strong>Ampere's law</strong> is useful when there is high <strong>symmetry</strong> (infinite wire, solenoid, toroid) — it makes calculation much easier.<br>
      • <strong>Biot-Savart law</strong> is more general — works for any current configuration (finite wire, circular loop, etc.).</div>
      <table class="compare-table">
        <tr><th>Feature</th><th>Ampere's Circuital Law</th><th>Gauss's Law (Electrostatics)</th></tr>
        <tr><td>Integral form</td><td>∮ B · dl = μ₀I(enc)</td><td>∮ E · dA = Q(enc)/ε₀</td></tr>
        <tr><td>Type of integral</td><td>Line integral (closed path)</td><td>Surface integral (closed surface)</td></tr>
        <tr><td>Useful when</td><td>High symmetry in current distribution</td><td>High symmetry in charge distribution</td></tr>
        <tr><td>Relates</td><td>B to current</td><td>E to charge</td></tr>
      </table>
      <div class="remember-box"><strong>Sign convention:</strong> Use the right-hand rule to determine the sign of enclosed current. If you curl your fingers in the direction of the Amperian loop traversal, currents in the direction of your thumb are <strong>positive</strong>, and those opposite are <strong>negative</strong>.</div>
      <div class="key-point"><strong>Application — Infinite straight wire:</strong><br>
      Choose a circular Amperian loop of radius d centred on the wire.<br>
      By symmetry, B is constant on this loop and parallel to dl everywhere.<br>
      ∮ B · dl = B × 2πd = μ₀I<br>
      ⟹ <strong>B = μ₀I / 2πd</strong> (same result as Biot-Savart!)</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Ampere's law is always true, but it's only <strong>useful</strong> for calculation when there's enough symmetry to take B out of the integral. Don't try to use it for a finite wire or a single loop — use Biot-Savart for those.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Solenoid and Toroid",
    body: `
      <p>A <strong>solenoid</strong> is a coil of many turns wound closely in the form of a helix. A <strong>toroid</strong> is a solenoid bent into a ring (doughnut shape).</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Solenoid body -->
          <rect x="60" y="50" width="320" height="100" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2" opacity="0.3"/>
          <!-- Coil turns -->
          <g stroke="#dc2626" stroke-width="2" fill="none">
            <ellipse cx="80" cy="100" rx="10" ry="45"/>
            <ellipse cx="120" cy="100" rx="10" ry="45"/>
            <ellipse cx="160" cy="100" rx="10" ry="45"/>
            <ellipse cx="200" cy="100" rx="10" ry="45"/>
            <ellipse cx="240" cy="100" rx="10" ry="45"/>
            <ellipse cx="280" cy="100" rx="10" ry="45"/>
            <ellipse cx="320" cy="100" rx="10" ry="45"/>
            <ellipse cx="360" cy="100" rx="10" ry="45"/>
          </g>
          <!-- B field arrows inside -->
          <line x1="100" y1="100" x2="340" y2="100" stroke="#8b5cf6" stroke-width="3"/>
          <polygon points="340,94 355,100 340,106" fill="#8b5cf6"/>
          <text x="210" y="92" text-anchor="middle" font-size="13" fill="#8b5cf6" font-weight="bold">B (uniform inside)</text>
          <!-- Current label -->
          <text x="80" y="180" font-size="12" fill="#dc2626" font-weight="bold">I →</text>
          <!-- Outside label -->
          <text x="210" y="25" text-anchor="middle" font-size="12" fill="#64748b">B ≈ 0 (outside)</text>
          <!-- n label -->
          <text x="400" y="105" font-size="12" fill="#64748b">n turns/m</text>
        </svg>
        <div class="diagram-caption">Solenoid: Magnetic field is strong and uniform inside, nearly zero outside.</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Solenoid</span>
        <strong>Inside:</strong> B = μ₀nI &nbsp;&nbsp;(n = N/L = turns per unit length)<br>
        <strong>Outside:</strong> B ≈ 0<br>
        <strong>At the end:</strong> B = μ₀nI / 2 (half the value inside)
      </div>
      <p><strong>Derivation using Ampere's Law:</strong> Choose a rectangular Amperian loop with one side inside the solenoid (length L) and one side outside. Since B = 0 outside and B is perpendicular to the short sides, only the inside side contributes:</p>
      <p>∮ B · dl = B × L = μ₀ × (nL)I &nbsp;⟹&nbsp; B = μ₀nI</p>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Toroid</span>
        <strong>Inside the turns:</strong> B = μ₀NI / 2πr &nbsp;&nbsp;(N = total turns, r = radius of toroid)<br>
        <strong>Outside the toroid:</strong> B = 0<br>
        <strong>In the hollow region at centre:</strong> B = 0
      </div>
      <div class="key-point"><strong>Why is B = 0 outside a toroid?</strong> For an Amperian loop outside the toroid, the net enclosed current is zero (each turn's current enters and exits the loop). So B × 2πr = μ₀ × 0 = 0.</div>
      <table class="compare-table">
        <tr><th>Property</th><th>Solenoid</th><th>Toroid</th></tr>
        <tr><td>Shape</td><td>Straight cylinder</td><td>Ring (doughnut)</td></tr>
        <tr><td>Field inside</td><td>Uniform: B = μ₀nI</td><td>B = μ₀NI/2πr (varies slightly with r)</td></tr>
        <tr><td>Field outside</td><td>≈ 0 (for ideal solenoid)</td><td>Exactly 0</td></tr>
        <tr><td>Field leakage</td><td>Some at ends</td><td>None (completely confined)</td></tr>
      </table>
      <div class="remember-box"><strong>n vs N:</strong><br>
      • In solenoid: <strong>n</strong> = turns per unit length (N/L)<br>
      • In toroid: <strong>N</strong> = total number of turns<br>
      Don't mix these up! For a toroid with mean radius r, you can write n = N/2πr, giving B = μ₀nI (same form as solenoid).</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Force on a Current-Carrying Conductor in a Magnetic Field",
    body: `
      <p>Since a current-carrying wire has moving charges inside it, it experiences a force when placed in an external magnetic field.</p>
      <div class="formula-box">
        <span class="formula-label">Force on a Current-Carrying Conductor</span>
        <strong>F</strong> = I(<strong>L</strong> × <strong>B</strong>) &nbsp;&nbsp;⟹&nbsp;&nbsp; F = BIL sin θ
      </div>
      <p>where <strong>I</strong> = current, <strong>L</strong> = length of conductor in the field, <strong>B</strong> = magnetic field, <strong>θ</strong> = angle between the wire (current direction) and B.</p>
      <div class="key-point"><strong>Direction:</strong> Use <strong>Fleming's Left-Hand Rule</strong>:<br>
      1. <strong>Forefinger</strong> → direction of magnetic field (B)<br>
      2. <strong>Middle finger</strong> → direction of current (I)<br>
      3. <strong>Thumb</strong> → direction of Force (F)<br>
      All three are perpendicular to each other.</div>
      <div class="remember-box"><strong>Memory trick:</strong> FBI = Force, B-field, I-current → Thumb, Forefinger, Middle finger (left hand!). Think of it as "the FBI uses force" = F(thumb), B(forefinger), I(middle finger).</div>
      <div class="key-point"><strong>When is the force maximum?</strong> When θ = 90° (wire perpendicular to B): F = BIL<br>
      <strong>When is the force zero?</strong> When θ = 0° or 180° (wire parallel to B): F = 0</div>
      <div class="formula-box" style="text-align:left; line-height:2.0">
        <span class="formula-label">Derivation from Lorentz Force</span>
        Force on each charge = qvB sin θ<br>
        Number of charges in length L = nAL (where n = number density, A = cross-section)<br>
        Total force = nAL × qvB sin θ = (nAqv)LB sin θ = ILB sin θ<br>
        (since I = nAqv)
      </div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using the right-hand rule for force on a current-carrying conductor. The correct rule is <strong>Fleming's LEFT-Hand Rule</strong> (not right hand!). The right-hand rule is for the direction of magnetic field due to a current.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Force Between Two Parallel Current-Carrying Conductors & Definition of Ampere",
    body: `
      <p>Two parallel wires carrying current exert magnetic forces on each other. This interaction is used to define the SI unit of current — the <strong>Ampere</strong>.</p>
      <div class="diagram-container">
        <svg width="420" height="280" viewBox="0 0 420 280">
          <defs>
            <marker id="arrPC1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrPC2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- Wire 1 -->
          <line x1="120" y1="30" x2="120" y2="250" stroke="#dc2626" stroke-width="3"/>
          <line x1="120" y1="60" x2="120" y2="30" stroke="#dc2626" stroke-width="3" marker-end="url(#arrPC1)"/>
          <text x="100" y="25" font-size="14" fill="#dc2626" font-weight="bold">I₁ ↑</text>
          <!-- Wire 2 -->
          <line x1="300" y1="30" x2="300" y2="250" stroke="#dc2626" stroke-width="3"/>
          <line x1="300" y1="60" x2="300" y2="30" stroke="#dc2626" stroke-width="3" marker-end="url(#arrPC1)"/>
          <text x="310" y="25" font-size="14" fill="#dc2626" font-weight="bold">I₂ ↑</text>
          <!-- Distance label -->
          <line x1="120" y1="265" x2="300" y2="265" stroke="#64748b" stroke-width="2"/>
          <line x1="120" y1="258" x2="120" y2="272" stroke="#64748b" stroke-width="1.5"/>
          <line x1="300" y1="258" x2="300" y2="272" stroke="#64748b" stroke-width="1.5"/>
          <text x="210" y="278" text-anchor="middle" font-size="13" fill="#64748b" font-weight="bold">d</text>
          <!-- Force arrows (attraction - same direction currents) -->
          <line x1="120" y1="140" x2="170" y2="140" stroke="#22c55e" stroke-width="3" marker-end="url(#arrPC2)"/>
          <text x="140" y="132" font-size="12" fill="#22c55e" font-weight="bold">F →</text>
          <line x1="300" y1="140" x2="250" y2="140" stroke="#22c55e" stroke-width="3" marker-end="url(#arrPC2)"/>
          <text x="255" y="132" font-size="12" fill="#22c55e" font-weight="bold">← F</text>
          <!-- Label -->
          <text x="210" y="180" text-anchor="middle" font-size="13" fill="#22c55e" font-weight="bold">ATTRACT</text>
          <text x="210" y="200" text-anchor="middle" font-size="11" fill="#64748b">(Same direction currents attract)</text>
        </svg>
        <div class="diagram-caption">Two parallel wires with currents in the same direction attract each other. Opposite currents repel.</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.2">
        <span class="formula-label">Force per unit length between parallel wires</span>
        <strong>F/L = μ₀I₁I₂ / 2πd</strong>
      </div>
      <div class="key-point"><strong>Rule to remember:</strong><br>
      • Currents in the <strong>same direction</strong> → wires <strong>ATTRACT</strong><br>
      • Currents in <strong>opposite directions</strong> → wires <strong>REPEL</strong><br>
      (This is opposite to charges! Like charges repel, but like currents attract.)</div>
      <div class="remember-box"><strong>Memory aid:</strong> Think of two people walking side by side in the same direction — they're friends and <strong>attract</strong>. Walking in opposite directions — they <strong>repel</strong> (move apart).</div>
      <div class="formula-box">
        <span class="formula-label">Definition of Ampere (SI)</span>
        1 Ampere is that steady current which, when flowing through each of two infinitely long, straight, parallel conductors placed <strong>1 metre</strong> apart in vacuum, produces a force of <strong>2 × 10⁻⁷ N per metre</strong> of length on each conductor.
      </div>
      <p><strong>Verification:</strong> F/L = μ₀I₁I₂/2πd = (4π × 10⁻⁷ × 1 × 1)/(2π × 1) = 2 × 10⁻⁷ N/m ✓</p>
      <div class="mistake-box"><strong>Common mistake:</strong> Students often say "like currents repel" by analogy with "like charges repel." This is WRONG! Like (same direction) currents <strong>attract</strong>. The physics is different — it's the magnetic fields that create the force, not direct charge-charge interaction.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Torque on a Current Loop — Magnetic Dipole Moment",
    body: `
      <p>When a rectangular current loop is placed in a uniform magnetic field, it experiences a <strong>torque</strong> that tends to rotate it.</p>
      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <defs>
            <marker id="arrTQ" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrBTQ" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6"/></marker>
            <marker id="arrFTQ" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- B field arrows (horizontal) -->
          <line x1="30" y1="50" x2="120" y2="50" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrBTQ)"/>
          <line x1="30" y1="130" x2="120" y2="130" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrBTQ)"/>
          <line x1="30" y1="210" x2="120" y2="210" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrBTQ)"/>
          <text x="50" y="42" font-size="13" fill="#8b5cf6" font-weight="bold">B →</text>
          <!-- Rectangular loop (tilted) -->
          <polygon points="200,40 340,80 340,200 200,160" fill="none" stroke="#dc2626" stroke-width="3"/>
          <!-- Current direction arrows on sides -->
          <text x="175" y="100" font-size="11" fill="#dc2626">I ↑</text>
          <text x="350" y="140" font-size="11" fill="#dc2626">I ↓</text>
          <!-- Force on left arm (upward) -->
          <line x1="200" y1="100" x2="200" y2="40" stroke="#22c55e" stroke-width="3" marker-end="url(#arrFTQ)"/>
          <text x="160" y="60" font-size="12" fill="#22c55e" font-weight="bold">F₁ ↑</text>
          <!-- Force on right arm (downward) -->
          <line x1="340" y1="140" x2="340" y2="210" stroke="#22c55e" stroke-width="3" marker-end="url(#arrFTQ)"/>
          <text x="350" y="190" font-size="12" fill="#22c55e" font-weight="bold">F₂ ↓</text>
          <!-- Torque rotation arrow -->
          <path d="M 260 80 A 30 30 0 0 1 260 170" fill="none" stroke="#f97316" stroke-width="2.5"/>
          <polygon points="260,170 254,158 266,158" fill="#f97316"/>
          <text x="268" y="130" font-size="13" fill="#f97316" font-weight="bold">τ</text>
          <!-- m vector -->
          <line x1="270" y1="130" x2="310" y2="95" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
          <text x="300" y="88" font-size="12" fill="#64748b" font-weight="bold">m̂</text>
          <!-- Angle theta -->
          <path d="M 300 95 A 15 15 0 0 1 310 105" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <text x="315" y="98" font-size="11" fill="#64748b">θ</text>
        </svg>
        <div class="diagram-caption">A current loop in a magnetic field experiences forces that create a torque, making it rotate.</div>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Torque on Current Loop</span>
        <strong>τ = NIAB sin θ</strong><br>
        In vector form: <strong>τ</strong> = <strong>m</strong> × <strong>B</strong><br>
        where <strong>m = NIA</strong> = magnetic dipole moment<br>
        θ = angle between normal to the loop and B
      </div>
      <div class="key-point"><strong>Magnetic Dipole Moment:</strong><br>
      • <strong>m = NIA</strong> (magnitude)<br>
      • Direction: perpendicular to the plane of the loop (use the curling rule — curl fingers in direction of current, thumb gives direction of m)<br>
      • SI unit: A·m² (or equivalently, J/T)</div>
      <table class="compare-table">
        <tr><th>Condition</th><th>θ</th><th>Torque τ</th><th>Potential Energy U = −mB cos θ</th></tr>
        <tr><td>Stable equilibrium</td><td>0°</td><td>0 (minimum)</td><td>−mB (minimum)</td></tr>
        <tr><td>Maximum torque</td><td>90°</td><td>mB (maximum)</td><td>0</td></tr>
        <tr><td>Unstable equilibrium</td><td>180°</td><td>0</td><td>+mB (maximum)</td></tr>
      </table>
      <div class="remember-box"><strong>Analogy with electric dipole:</strong><br>
      • Electric dipole in E field: τ = pE sin θ, U = −p·E<br>
      • Magnetic dipole in B field: τ = mB sin θ, U = −m·B<br>
      The formulas are identical in structure! Just replace p → m and E → B.</div>
      <div class="key-point"><strong>This is the principle of an electric motor!</strong> A current loop in a magnetic field experiences torque and rotates. By reversing the current at the right time (using a commutator), continuous rotation is achieved.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing the angle θ. It's the angle between <strong>m (or the normal to the loop)</strong> and <strong>B</strong>, NOT the angle between the plane of the loop and B. If the plane makes angle α with B, then θ = 90° − α.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Moving Charges & Magnetism",
    body: `
      <p>Here's every formula you need for this chapter, organized for quick revision before the exam.</p>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Force on Charges</span>
        Magnetic force: <strong>F = qvB sin θ</strong><br>
        Lorentz force: <strong>F = qE + q(v × B)</strong><br>
        Velocity selector: <strong>v = E/B</strong> (undeflected)
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Circular Motion in B Field</span>
        Radius: <strong>r = mv / qB</strong><br>
        Time period: <strong>T = 2πm / qB</strong><br>
        Frequency: <strong>f = qB / 2πm</strong><br>
        Angular frequency: <strong>ω = qB / m</strong><br>
        Helical pitch: <strong>p = v cos θ × T = 2πm(v cos θ) / qB</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Cyclotron</span>
        Cyclotron frequency: <strong>f = qB / 2πm</strong><br>
        Max KE: <strong>KE = q²B²r₀² / 2m</strong><br>
        Max velocity: <strong>v = qBr₀ / m</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Biot-Savart Law</span>
        <strong>dB = (μ₀/4π) × (I dl sin θ) / r²</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Field Due to Current Configurations</span>
        Infinite straight wire: <strong>B = μ₀I / 2πd</strong><br>
        Finite wire: <strong>B = (μ₀I/4πd)(sin φ₁ + sin φ₂)</strong><br>
        Centre of circular loop: <strong>B = μ₀NI / 2R</strong><br>
        Axis of circular loop: <strong>B = μ₀NIR² / 2(R² + x²)<sup>(3/2)</sup></strong><br>
        Arc of angle θ (in radians): <strong>B = μ₀Iθ / 4πR</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Ampere's Law, Solenoid & Toroid</span>
        Ampere's law: <strong>∮ B · dl = μ₀ I(enclosed)</strong><br>
        Solenoid (inside): <strong>B = μ₀nI</strong> &nbsp;(n = N/L)<br>
        Solenoid (end): <strong>B = μ₀nI / 2</strong><br>
        Toroid (inside): <strong>B = μ₀NI / 2πr</strong>
      </div>
      <div class="formula-box" style="text-align:left; line-height:2.4">
        <span class="formula-label">Force & Torque</span>
        Force on conductor: <strong>F = BIL sin θ</strong><br>
        Force between parallel wires: <strong>F/L = μ₀I₁I₂ / 2πd</strong><br>
        Torque on loop: <strong>τ = NIAB sin θ = mB sin θ</strong><br>
        Magnetic dipole moment: <strong>m = NIA</strong><br>
        Potential energy: <strong>U = −mB cos θ = −m · B</strong>
      </div>
      <div class="key-point"><strong>Constants to remember:</strong><br>
      μ₀ = 4π × 10⁻⁷ T·m/A<br>
      μ₀/4π = 10⁻⁷ T·m/A<br>
      1 T = 10⁴ Gauss<br>
      Charge of electron: e = 1.6 × 10⁻¹⁹ C<br>
      Mass of electron: 9.1 × 10⁻³¹ kg<br>
      Mass of proton: 1.67 × 10⁻²⁷ kg</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "CBSE Numerical Tricks — Right-Hand Rules & Direction Shortcuts",
    body: `
      <p>Direction-finding is where students lose the most marks. Here's a systematic guide to all the "rules" you need.</p>
      <table class="compare-table">
        <tr><th>Rule</th><th>Used For</th><th>How to Apply</th></tr>
        <tr><td><strong>Right-Hand Rule (Cross Product)</strong></td><td>Direction of F = qv × B</td><td>Fingers along v, curl toward B, thumb = F (for +q)</td></tr>
        <tr><td><strong>Right-Hand Thumb Rule</strong></td><td>B around a straight wire</td><td>Thumb = current direction, curled fingers = B direction</td></tr>
        <tr><td><strong>Right-Hand Curl Rule</strong></td><td>B at centre of loop, direction of m</td><td>Curl fingers in current direction, thumb = B (or m)</td></tr>
        <tr><td><strong>Fleming's Left-Hand Rule</strong></td><td>Force on current in B field</td><td>Forefinger = B, Middle = I, Thumb = F</td></tr>
      </table>
      <div class="key-point"><strong>Quick direction tricks for CBSE numericals:</strong><br><br>
      <strong>1. Cross into page ⊗ and dot out of page ⊙:</strong><br>
      Think of an arrow. ⊗ = you see the feathered end (going away). ⊙ = you see the tip (coming toward you).<br><br>
      <strong>2. For B due to a straight wire:</strong><br>
      If current goes UP in the page → B is anticlockwise around the wire<br>
      To the RIGHT of the wire: B points out of page ⊙<br>
      To the LEFT: B points into page ⊗<br><br>
      <strong>3. For circular motion in B:</strong><br>
      +q in B(into page ⊗): moves clockwise<br>
      −q in B(into page ⊗): moves anticlockwise<br>
      Just check the force direction at one point using F = qv × B</div>
      <div class="remember-box"><strong>Numerical shortcuts:</strong><br>
      • <strong>r = mv/qB:</strong> If KE is given, use v = √(2KE/m), so r = √(2mKE)/qB<br>
      • <strong>For same KE:</strong> r ∝ √m/q. Compare proton vs alpha: r(p)/r(α) = √(m<sub>p</sub>/m_α) × (q_α/q<sub>p</sub>) = √(1/4) × 2 = 1. They have the SAME radius!<br>
      • <strong>For same momentum:</strong> r = p/qB, so r ∝ 1/q. Proton has double the radius of alpha.<br>
      • <strong>For same v:</strong> r ∝ m/q. Proton radius = (m<sub>p</sub>/m_α)(q_α/q<sub>p</sub>) × r_α = (1/4)(2) = r_α/2</div>
      <div class="key-point"><strong>Unit conversion tip:</strong><br>
      • 1 MeV = 1.6 × 10⁻¹³ J<br>
      • 1 eV = 1.6 × 10⁻¹⁹ J<br>
      • When question gives energy in eV, convert to Joules before using KE = ½mv²</div>
      <div class="mistake-box"><strong>Top 5 mistakes in CBSE numericals:</strong><br>
      1. Forgetting sin θ in F = qvB sin θ or F = BIL sin θ<br>
      2. Using right hand instead of LEFT hand for force on conductor (Fleming's Left-Hand Rule!)<br>
      3. Not converting units: MeV to J, cm to m, mA to A<br>
      4. Confusing n (turns per metre) with N (total turns) in solenoid<br>
      5. Wrong sign of force for negative charges (reverse the direction)</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam Most Asked Questions — Moving Charges & Magnetism",
    body: `
      <p>These are the question types that appear most frequently in CBSE board exams. Make sure you can solve every one of them.</p>
      <div class="key-point"><strong>🔥 TOP 5 MOST REPEATED QUESTIONS:</strong><br><br>
      <strong>1. Derive B at the centre of a circular loop</strong> using Biot-Savart law (3–5 marks, almost every year!)<br><br>
      <strong>2. Derive force between two parallel conductors</strong> and hence define the Ampere (3–5 marks)<br><br>
      <strong>3. Explain the working of a cyclotron</strong> with diagram (3 marks)<br><br>
      <strong>4. State and explain Ampere's Circuital Law.</strong> Use it to find B inside a solenoid (3–5 marks)<br><br>
      <strong>5. Torque on a current loop in magnetic field</strong> — derive τ = NIAB sin θ (3 marks)</div>
      <div class="remember-box"><strong>Common 1-2 mark questions:</strong><br>
      • State Biot-Savart law. Compare it with Coulomb's law.<br>
      • A charged particle enters a magnetic field perpendicular to it. What is the path? Does its KE change?<br>
      • Why can't a cyclotron accelerate electrons?<br>
      • Two parallel wires carry current in the same direction. Are they attracted or repelled?<br>
      • What is the magnetic moment of a current loop?<br>
      • What is the SI unit of magnetic field? Define it.<br>
      • A charged particle enters B along the field direction. What happens?</div>
      <div class="key-point"><strong>Derivation tips for full marks:</strong><br>
      1. <strong>Always draw a neat diagram</strong> — label all quantities (I, dl, r, θ, B).<br>
      2. <strong>State the law/principle</strong> you're using before starting the derivation.<br>
      3. <strong>Show every step</strong> — don't skip integration or simplification.<br>
      4. <strong>Box your final answer</strong> and state the direction.<br>
      5. For the circular loop derivation: clearly show why sin θ = 1 (because dl ⊥ r at every point) and why all dB components add up (by symmetry, only the axial component survives for axis point).</div>
      <div class="key-point"><strong>Typical numerical patterns:</strong><br><br>
      <strong>Pattern 1:</strong> "An electron enters a magnetic field of 0.X T with velocity Y m/s perpendicular to the field. Find the radius and frequency."<br>
      → Use r = mv/qB, f = qB/2πm<br><br>
      <strong>Pattern 2:</strong> "A solenoid has N turns, length L, carries current I. Find B inside."<br>
      → n = N/L, then B = μ₀nI<br><br>
      <strong>Pattern 3:</strong> "Two long parallel wires separated by d carry currents I₁ and I₂. Find force per unit length. State if attractive or repulsive."<br>
      → F/L = μ₀I₁I₂/2πd. Same direction = attractive.<br><br>
      <strong>Pattern 4:</strong> "A rectangular coil of N turns, area A, carrying current I, is placed in a field B. Find maximum torque."<br>
      → τ(max) = NIAB (when θ = 90°)</div>
      <div class="mistake-box"><strong>Exam day checklist:</strong><br>
      • Carry a good quality pencil for diagrams<br>
      • Always mention the direction of B or F in your answer<br>
      • For every numerical, write the given data, the formula, substitution, and final answer with unit<br>
      • Check powers of 10 carefully (most common source of wrong answers)<br>
      • If asked to "derive," you must show all steps. If asked to "state," a formula with explanation is enough.</div>
    `
  }
];

if (typeof module !== 'undefined') module.exports = { ch4Concepts };
