// Chapter 8: Electromagnetic Waves — Concepts
const ch8Concepts = [
  {
    id: 1, level: "basic",
    title: "Displacement Current — Maxwell's Missing Piece",
    body: `
      <p>Here's the problem Maxwell discovered: <strong>Ampere's circuital law had a flaw.</strong></p>
      <p>Imagine charging a capacitor. Current flows through the wire, creating a magnetic field. But <em>between the plates</em>, there's no actual current (no charges flow through the gap). Yet experiments showed a magnetic field exists even there!</p>
      <div class="diagram-container">
        <svg width="420" height="220" viewBox="0 0 420 220">
          <text x="210" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Displacement Current in a Charging Capacitor</text>
          <!-- Wire left -->
          <line x1="30" y1="110" x2="130" y2="110" stroke="#2563eb" stroke-width="3"/>
          <text x="80" y="100" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="600">I (conduction)</text>
          <!-- Left plate -->
          <rect x="130" y="60" width="8" height="100" rx="2" fill="#475569"/>
          <!-- Right plate -->
          <rect x="282" y="60" width="8" height="100" rx="2" fill="#475569"/>
          <!-- Wire right -->
          <line x1="290" y1="110" x2="390" y2="110" stroke="#2563eb" stroke-width="3"/>
          <text x="340" y="100" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="600">I (conduction)</text>
          <!-- E field lines between plates -->
          <line x1="160" y1="75" x2="260" y2="75" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
          <line x1="160" y1="95" x2="260" y2="95" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
          <line x1="160" y1="115" x2="260" y2="115" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
          <line x1="160" y1="135" x2="260" y2="135" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
          <polygon points="260,75 253,71 253,79" fill="#ef4444"/>
          <polygon points="260,95 253,91 253,99" fill="#ef4444"/>
          <polygon points="260,115 253,111 253,119" fill="#ef4444"/>
          <polygon points="260,135 253,131 253,139" fill="#ef4444"/>
          <text x="210" y="165" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="600">E (changing)</text>
          <!-- Id label -->
          <text x="210" y="185" text-anchor="middle" font-size="12" fill="#7c3aed" font-weight="700">I<sub>d</sub> = displacement current</text>
          <!-- Arrow heads on wires -->
          <polygon points="130,110 120,105 120,115" fill="#2563eb"/>
          <polygon points="390,110 380,105 380,115" fill="#2563eb"/>
          <text x="210" y="210" text-anchor="middle" font-size="11" fill="#64748b">No charges flow here, but changing E acts like a current!</text>
        </svg>
        <div class="diagram-caption">Between capacitor plates: no conduction current, but changing electric field creates displacement current</div>
      </div>
      <p>Maxwell said: A <strong>changing electric field</strong> between the plates produces the same magnetic effect as a real current. He called it <strong>displacement current</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Displacement Current</span>
        I<sub>d</sub> = ε₀ × (d Φ_E / dt)
      </div>
      <p>Where Φ_E is the electric flux between the plates.</p>
      <div class="key-point"><strong>Key insight:</strong> Between the capacitor plates, conduction current I<sub>c</sub> = 0, but displacement current I<sub>d</sub> = I<sub>c</sub> (same value as the conduction current in the wire). So the total current is continuous!</div>
      <p><strong>Analogy:</strong> Think of a relay race. Runner 1 (conduction current) runs to a wall. Runner 2 (displacement current) picks up on the other side. The baton (magnetic effect) is never dropped!</p>
      <div class="remember-box"><strong>CBSE favourite:</strong> "What is displacement current? Show that it equals the conduction current during capacitor charging." This is a guaranteed 2-3 mark question.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Maxwell's Equations — The Four Pillars (Qualitative)",
    body: `
      <p>Maxwell unified electricity and magnetism into <strong>four elegant equations</strong>. You don't need to derive them for CBSE, but you must understand what each one means.</p>
      <div class="diagram-container">
        <svg width="440" height="300" viewBox="0 0 440 300">
          <text x="220" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Maxwell's Four Equations — Summary</text>
          <!-- Box 1 -->
          <rect x="10" y="40" width="200" height="55" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="110" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">1. Gauss's Law (E)</text>
          <text x="110" y="80" text-anchor="middle" font-size="11" fill="#1e3a5f">Electric charges produce</text>
          <text x="110" y="92" text-anchor="middle" font-size="11" fill="#1e3a5f">electric field lines</text>
          <!-- Box 2 -->
          <rect x="230" y="40" width="200" height="55" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
          <text x="330" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">2. Gauss's Law (B)</text>
          <text x="330" y="80" text-anchor="middle" font-size="11" fill="#14532d">No magnetic monopoles;</text>
          <text x="330" y="92" text-anchor="middle" font-size="11" fill="#14532d">B field lines are closed</text>
          <!-- Box 3 -->
          <rect x="10" y="110" width="200" height="55" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="110" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">3. Faraday's Law</text>
          <text x="110" y="150" text-anchor="middle" font-size="11" fill="#78350f">Changing B produces E</text>
          <text x="110" y="162" text-anchor="middle" font-size="11" fill="#78350f">(electromagnetic induction)</text>
          <!-- Box 4 -->
          <rect x="230" y="110" width="200" height="55" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
          <text x="330" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#9d174d">4. Ampere-Maxwell Law</text>
          <text x="330" y="150" text-anchor="middle" font-size="11" fill="#831843">Current OR changing E</text>
          <text x="330" y="162" text-anchor="middle" font-size="11" fill="#831843">produces B</text>
          <!-- Central arrow showing symmetry -->
          <line x1="110" y1="170" x2="110" y2="200" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowY)"/>
          <line x1="330" y1="170" x2="330" y2="200" stroke="#ec4899" stroke-width="2" marker-end="url(#arrowP)"/>
          <rect x="60" y="205" width="320" height="40" rx="8" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="2"/>
          <text x="220" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">Symmetry: Changing E creates B, Changing B creates E</text>
          <text x="220" y="238" text-anchor="middle" font-size="11" fill="#0369a1">This is what makes EM waves possible!</text>
          <!-- Bottom note -->
          <text x="220" y="275" text-anchor="middle" font-size="12" font-weight="600" fill="#7c3aed">Maxwell's addition: displacement current in Eq. 4</text>
          <text x="220" y="292" text-anchor="middle" font-size="11" fill="#64748b">Without it, only Eq. 3 would link E and B -- no waves!</text>
        </svg>
        <div class="diagram-caption">Maxwell's four equations and their physical meaning</div>
      </div>
      <div class="key-point"><strong>The big idea:</strong> Equations 3 and 4 together show a beautiful symmetry: a changing magnetic field produces an electric field (Faraday), and a changing electric field produces a magnetic field (Ampere-Maxwell). This back-and-forth is what creates electromagnetic waves!</div>
      <p><strong>Analogy:</strong> Think of two friends pushing each other on swings. E pushes B, B pushes E, and the motion keeps going forever -- that's an EM wave travelling through space!</p>
      <div class="remember-box"><strong>Board exam tip:</strong> Remember the key asymmetry: Gauss's law for E involves charges (monopoles exist), but Gauss's law for B has zero on the right side (no magnetic monopoles). This is a common MCQ trap.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Electromagnetic Waves — How They Are Produced and Travel",
    body: `
      <p><strong>How is an EM wave born?</strong> Whenever a charged particle <strong>accelerates</strong>, it produces electromagnetic waves.</p>
      <p>An oscillating charge (going back and forth) creates oscillating electric and magnetic fields that radiate outward as a wave.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">EM Wave Propagation</text>
          <!-- Propagation axis -->
          <line x1="40" y1="120" x2="420" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="430" y="124" font-size="11" fill="#64748b" font-weight="600">x</text>
          <!-- E field (vertical sine wave) -->
          <path d="M60,120 Q100,40 140,120 Q180,200 220,120 Q260,40 300,120 Q340,200 380,120" stroke="#ef4444" stroke-width="2.5" fill="none"/>
          <text x="50" y="50" font-size="13" font-weight="700" fill="#ef4444">E</text>
          <!-- E arrows -->
          <line x1="100" y1="120" x2="100" y2="55" stroke="#ef4444" stroke-width="1.5"/>
          <polygon points="100,55 96,65 104,65" fill="#ef4444"/>
          <line x1="180" y1="120" x2="180" y2="185" stroke="#ef4444" stroke-width="1.5"/>
          <polygon points="180,185 176,175 184,175" fill="#ef4444"/>
          <line x1="260" y1="120" x2="260" y2="55" stroke="#ef4444" stroke-width="1.5"/>
          <polygon points="260,55 256,65 264,65" fill="#ef4444"/>
          <line x1="340" y1="120" x2="340" y2="185" stroke="#ef4444" stroke-width="1.5"/>
          <polygon points="340,185 336,175 344,175" fill="#ef4444"/>
          <!-- B field (horizontal sine wave - shown as dashed) -->
          <path d="M60,120 Q100,120 100,90 Q100,120 140,120 Q180,120 180,150 Q180,120 220,120 Q260,120 260,90 Q260,120 300,120 Q340,120 340,150 Q340,120 380,120" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
          <text x="50" y="95" font-size="13" font-weight="700" fill="#3b82f6">B</text>
          <!-- Labels -->
          <text x="220" y="210" text-anchor="middle" font-size="11" fill="#64748b">E and B are perpendicular to each other AND to direction of propagation</text>
          <text x="380" y="140" font-size="11" fill="#64748b">Direction</text>
          <text x="380" y="152" font-size="11" fill="#64748b">of travel</text>
          <polygon points="420,120 408,115 408,125" fill="#64748b"/>
        </svg>
        <div class="diagram-caption">An EM wave: E oscillates vertically, B oscillates horizontally, wave travels along x-axis</div>
      </div>
      <p><strong>Key Properties of EM Waves:</strong></p>
      <p>1. They are <strong>transverse waves</strong> -- E and B oscillate perpendicular to the direction of travel.</p>
      <p>2. E and B are <strong>perpendicular to each other</strong> and are <strong>in phase</strong> (reach maxima and minima together).</p>
      <p>3. They travel at the <strong>speed of light</strong> in vacuum.</p>
      <p>4. They do <strong>NOT need a medium</strong> -- they travel through vacuum!</p>
      <div class="formula-box">
        <span class="formula-label">Speed of EM Waves in Vacuum</span>
        c = 1 / sqrt(μ₀ * ε₀) = 3 x 10<sup>8</sup> m/s
      </div>
      <div class="formula-box">
        <span class="formula-label">Relationship between E and B</span>
        E<sub>0</sub> / B<sub>0</sub> = c &nbsp;&nbsp; (or at any instant: E / B = c)
      </div>
      <div class="key-point"><strong>Direction rule:</strong> The direction of propagation is given by E x B (cross product). If E is along y-axis and B is along z-axis, the wave travels along x-axis.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students say "EM waves need a medium like sound waves." NO! EM waves are self-sustaining -- the changing E creates B, the changing B creates E. They propagate through vacuum at speed c.</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Properties of EM Waves — Energy, Intensity, Momentum",
    body: `
      <p>EM waves carry <strong>energy, momentum, and exert pressure</strong> -- even though they have no mass!</p>
      <div class="formula-box">
        <span class="formula-label">Wave Equation Form</span>
        E = E<sub>0</sub> sin(kx - ωt) &nbsp;&nbsp; B = B<sub>0</sub> sin(kx - ωt)
      </div>
      <p>where k = 2π/λ (wave number) and ω = 2πf (angular frequency).</p>
      <div class="formula-box">
        <span class="formula-label">Energy Density</span>
        Average energy density = (1/2) ε₀ E<sub>0</sub><sup>2</sup> = (1/2) B<sub>0</sub><sup>2</sup> / μ₀<br/>
        Total average energy density u = ε₀ E<sub>0</sub><sup>2</sup> = B<sub>0</sub><sup>2</sup> / μ₀
      </div>
      <p><strong>Beautiful result:</strong> The energy is shared equally between electric and magnetic fields! Each contributes exactly half.</p>
      <div class="formula-box">
        <span class="formula-label">Intensity (energy per unit area per unit time)</span>
        I = (1/2) * c * ε₀ * E<sub>0</sub><sup>2</sup> = u * c
      </div>
      <div class="formula-box">
        <span class="formula-label">Momentum Carried by EM Waves</span>
        p = U/c (for complete absorption)<br/>
        p = 2U/c (for perfect reflection)
      </div>
      <p>where U is the energy of the EM wave.</p>
      <div class="key-point"><strong>Radiation pressure:</strong> Since EM waves carry momentum, they exert pressure when they hit a surface. For a perfectly absorbing surface: Pressure = I/c. For a perfectly reflecting surface: Pressure = 2I/c.</div>
      <p><strong>Analogy for momentum:</strong> Think of a ball hitting a wall. If it sticks (absorption), it transfers momentum p. If it bounces back (reflection), it transfers 2p. Same idea with EM waves!</p>
      <div class="remember-box"><strong>Board exam tip:</strong> The formula p = U/c for absorption and p = 2U/c for reflection is a very common MCQ. Remember: reflection = double the momentum transfer.</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "The Electromagnetic Spectrum — Overview",
    body: `
      <p>The EM spectrum is the <strong>complete range of electromagnetic waves</strong> arranged by wavelength (or frequency). All EM waves travel at speed c in vacuum, but they differ in wavelength and frequency.</p>
      <div class="diagram-container">
        <svg width="440" height="280" viewBox="0 0 440 280">
          <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">The Electromagnetic Spectrum</text>
          <!-- Frequency arrow -->
          <line x1="30" y1="40" x2="410" y2="40" stroke="#64748b" stroke-width="1.5"/>
          <polygon points="410,40 400,35 400,45" fill="#64748b"/>
          <text x="420" y="44" font-size="10" fill="#64748b">f</text>
          <text x="220" y="34" text-anchor="middle" font-size="10" fill="#64748b">Frequency increases --></text>
          <!-- Wavelength arrow (opposite) -->
          <line x1="410" y1="55" x2="30" y2="55" stroke="#94a3b8" stroke-width="1.5"/>
          <polygon points="30,55 40,50 40,60" fill="#94a3b8"/>
          <text x="18" y="59" font-size="10" fill="#94a3b8">λ</text>
          <text x="220" y="66" text-anchor="middle" font-size="10" fill="#94a3b8"><-- Wavelength increases</text>
          <!-- Spectrum bars -->
          <rect x="30" y="80" width="55" height="30" rx="4" fill="#dc2626"/>
          <text x="57" y="100" text-anchor="middle" font-size="9" fill="white" font-weight="600">Radio</text>
          <rect x="88" y="80" width="50" height="30" rx="4" fill="#ea580c"/>
          <text x="113" y="100" text-anchor="middle" font-size="9" fill="white" font-weight="600">Micro</text>
          <rect x="141" y="80" width="50" height="30" rx="4" fill="#eab308"/>
          <text x="166" y="100" text-anchor="middle" font-size="9" fill="white" font-weight="600">IR</text>
          <rect x="194" y="80" width="40" height="30" rx="4" fill="linear-gradient(90deg,red,violet)"/>
          <rect x="194" y="80" width="8" height="30" rx="2" fill="#ef4444"/>
          <rect x="202" y="80" width="8" height="30" fill="#f97316"/>
          <rect x="210" y="80" width="6" height="30" fill="#eab308"/>
          <rect x="216" y="80" width="6" height="30" fill="#22c55e"/>
          <rect x="222" y="80" width="6" height="30" fill="#3b82f6"/>
          <rect x="228" y="80" width="6" height="30" rx="2" fill="#7c3aed"/>
          <text x="214" y="100" text-anchor="middle" font-size="8" fill="white" font-weight="700">VIS</text>
          <rect x="237" y="80" width="50" height="30" rx="4" fill="#7c3aed"/>
          <text x="262" y="100" text-anchor="middle" font-size="9" fill="white" font-weight="600">UV</text>
          <rect x="290" y="80" width="55" height="30" rx="4" fill="#4338ca"/>
          <text x="317" y="100" text-anchor="middle" font-size="9" fill="white" font-weight="600">X-rays</text>
          <rect x="348" y="80" width="60" height="30" rx="4" fill="#1e1b4b"/>
          <text x="378" y="100" text-anchor="middle" font-size="9" fill="white" font-weight="600">Gamma</text>
          <!-- Wavelength values -->
          <text x="57" y="128" text-anchor="middle" font-size="8" fill="#64748b">>0.1 m</text>
          <text x="113" y="128" text-anchor="middle" font-size="8" fill="#64748b">0.1m-1mm</text>
          <text x="166" y="128" text-anchor="middle" font-size="8" fill="#64748b">1mm-700nm</text>
          <text x="214" y="128" text-anchor="middle" font-size="8" fill="#64748b">700-400nm</text>
          <text x="262" y="128" text-anchor="middle" font-size="8" fill="#64748b">400-1nm</text>
          <text x="317" y="128" text-anchor="middle" font-size="8" fill="#64748b">1nm-10pm</text>
          <text x="378" y="128" text-anchor="middle" font-size="8" fill="#64748b"><10pm</text>
          <!-- Mnemonic -->
          <rect x="30" y="145" width="378" height="35" rx="6" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5"/>
          <text x="220" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">Mnemonic (low f to high f):</text>
          <text x="220" y="175" text-anchor="middle" font-size="11" fill="#0369a1">Radha Mujhse Itni Vishesh UV X-tra Gorgeous lagti hai</text>
          <!-- Key fact -->
          <text x="220" y="205" text-anchor="middle" font-size="11" font-weight="600" fill="#1e293b">All travel at c = 3 x 10<sup>8</sup> m/s in vacuum</text>
          <text x="220" y="222" text-anchor="middle" font-size="11" fill="#64748b">c = fλ (same for all)</text>
          <!-- Penetration note -->
          <text x="220" y="250" text-anchor="middle" font-size="10" fill="#64748b">Penetrating power increases -->></text>
          <text x="220" y="266" text-anchor="middle" font-size="10" fill="#64748b"><-- Wavelength increases | Frequency increases --></text>
        </svg>
        <div class="diagram-caption">The complete electromagnetic spectrum from radio waves to gamma rays</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Fundamental Relation</span>
        c = fλ = 3 x 10<sup>8</sup> m/s
      </div>
      <div class="key-point"><strong>All EM waves are the same phenomenon</strong> -- they differ only in frequency/wavelength. Higher frequency = shorter wavelength = more energy per photon (E = hf).</div>
      <div class="remember-box"><strong>CBSE must-know:</strong> The order from longest to shortest wavelength: Radio > Microwave > Infrared > Visible > Ultraviolet > X-rays > Gamma rays. Frequency order is the reverse!</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Radio Waves, Microwaves & Infrared — Properties and Uses",
    body: `
      <p>Let's study the <strong>lower-frequency</strong> end of the EM spectrum in detail.</p>
      <table class="compare-table">
        <tr><th>Property</th><th>Radio Waves</th><th>Microwaves</th><th>Infrared (IR)</th></tr>
        <tr><td>Wavelength</td><td>> 0.1 m</td><td>0.1 m to 1 mm</td><td>1 mm to 700 nm</td></tr>
        <tr><td>Frequency</td><td>< 3 GHz</td><td>3 GHz to 300 GHz</td><td>300 GHz to 4.3 x 10<sup>14</sup> Hz</td></tr>
        <tr><td>Source</td><td>Oscillating circuits (LC oscillators)</td><td>Klystron, magnetron, Gunn diode</td><td>Hot bodies, molecules</td></tr>
        <tr><td>Detection</td><td>Antenna + receiver</td><td>Point-contact diodes</td><td>Thermopiles, bolometers, IR cameras</td></tr>
        <tr><td>Key Uses</td><td>TV, radio broadcasting, communication</td><td>Radar, microwave oven, satellite comm.</td><td>Night vision, remote control, physiotherapy, greenhouse effect</td></tr>
      </table>
      <div class="key-point"><strong>Radio waves</strong> are produced by accelerated charges in an antenna (oscillating circuit). AM radio uses amplitude modulation; FM uses frequency modulation. FM gives better quality because it's less affected by noise.</div>
      <div class="key-point"><strong>Microwaves</strong> in ovens work because water molecules absorb microwaves and vibrate faster, generating heat. This is why dry containers don't get hot in a microwave!</div>
      <div class="key-point"><strong>Infrared</strong> radiation is emitted by all warm bodies. This is how thermal cameras (night vision) work -- they detect the IR emitted by warm objects in the dark.</div>
      <p><strong>Greenhouse Effect:</strong> Sunlight (visible) passes through glass/atmosphere. Objects absorb it and re-emit as IR. But glass/CO2 traps the IR, so the temperature rises. This is why a car parked in the sun gets very hot inside!</p>
      <div class="remember-box"><strong>CBSE MCQ trap:</strong> "Which EM waves are used in radar?" Answer: <strong>Microwaves</strong> (not radio waves). RADAR = Radio Detection And Ranging, but it actually uses microwaves because they have shorter wavelength and can detect smaller objects.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Visible Light, UV, X-rays & Gamma Rays — Properties and Uses",
    body: `
      <p>Now the <strong>higher-frequency</strong> end of the spectrum.</p>
      <table class="compare-table">
        <tr><th>Property</th><th>Visible Light</th><th>Ultraviolet (UV)</th><th>X-rays</th><th>Gamma Rays</th></tr>
        <tr><td>Wavelength</td><td>700 - 400 nm</td><td>400 nm - 1 nm</td><td>1 nm - 10 pm</td><td>< 10 pm</td></tr>
        <tr><td>Source</td><td>Sun, lamps, lasers</td><td>Sun, mercury lamp, very hot bodies</td><td>X-ray tube (bombarding metal with fast electrons)</td><td>Nuclear reactions, radioactive decay</td></tr>
        <tr><td>Detection</td><td>Eye, photocells</td><td>Photocells, fluorescent materials</td><td>Photographic film, Geiger counter</td><td>Geiger counter, scintillators</td></tr>
        <tr><td>Key Uses</td><td>Vision, photosynthesis, fibre optics</td><td>Sterilisation, LASIK, vitamin D</td><td>Medical imaging, security, crystallography</td><td>Cancer treatment, food sterilisation</td></tr>
      </table>
      <div class="key-point"><strong>Visible light</strong> is the only EM wave our eyes can detect. VIBGYOR order (long to short wavelength): Violet (400 nm) to Red (700 nm). Remember: Red has the longest wavelength in visible light.</div>
      <div class="key-point"><strong>UV radiation</strong> causes skin tanning/burning and can damage DNA. The ozone layer blocks most UV from the Sun. Welders use UV-blocking face shields because welding arcs produce strong UV.</div>
      <div class="key-point"><strong>X-rays</strong> are produced when high-speed electrons hit a metal target. They can penetrate flesh but not bones -- that's why X-ray images show your skeleton!</div>
      <div class="key-point"><strong>Gamma rays</strong> have the highest frequency, highest energy, and greatest penetrating power. They originate from nuclear processes, not electronic transitions.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing X-rays and gamma rays. The key difference is their <strong>origin</strong>: X-rays come from electronic transitions / deceleration of electrons; gamma rays come from nuclear transitions. Their wavelength ranges can overlap!</div>
      <div class="remember-box"><strong>Exam tip:</strong> "Which EM wave is used in RADAR?" -- Microwaves. "Which causes skin cancer?" -- UV. "Which is used in CT scan?" -- X-rays. "Which is used to kill cancer cells?" -- Gamma rays.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Ampere-Maxwell Law — The Modified Ampere's Law",
    body: `
      <p>Maxwell modified Ampere's circuital law to include displacement current. The original law only worked for steady currents; the modified version works for <strong>all situations</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Original Ampere's Law (incomplete)</span>
        Integral of B . dl = μ₀ * I<sub>c</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">Modified Ampere-Maxwell Law (complete)</span>
        Integral of B . dl = μ₀ * (I<sub>c</sub> + I<sub>d</sub>) = μ₀ * I<sub>c</sub> + μ₀ * ε₀ * (d Φ_E / dt)
      </div>
      <p>where I<sub>c</sub> = conduction current (due to actual charge flow) and I<sub>d</sub> = displacement current (due to changing electric field).</p>
      <div class="key-point"><strong>Why was the modification needed?</strong> Consider two surfaces S1 and S2 bounded by the same Amperian loop, but S1 passes through the wire (where current flows) and S2 passes between the capacitor plates (no current). Ampere's law gave different answers for the same loop -- a contradiction! Maxwell fixed it by adding I<sub>d</sub>.</div>
      <p><strong>Important results:</strong></p>
      <p>1. For a charging capacitor: I<sub>d</sub> between plates = I<sub>c</sub> in the wire (at every instant)</p>
      <p>2. Outside the capacitor: only I<sub>c</sub> exists. Between plates: only I<sub>d</sub> exists.</p>
      <p>3. The magnetic field between the plates has the <strong>same value</strong> as it would have if real current I were flowing.</p>
      <div class="formula-box">
        <span class="formula-label">Displacement Current between Capacitor Plates</span>
        I<sub>d</sub> = ε₀ * (d Φ_E / dt) = ε₀ * A * (dE/dt)
      </div>
      <p>where A = area of plate and E = electric field between plates.</p>
      <div class="remember-box"><strong>Board exam derivation:</strong> To show I<sub>d</sub> = I<sub>c</sub> for a parallel plate capacitor: E = Q/(ε₀ * A), so dE/dt = (1/(ε₀ * A)) * dQ/dt = I<sub>c</sub>/(ε₀ * A). Therefore I<sub>d</sub> = ε₀ * A * dE/dt = I<sub>c</sub>.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "EM Wave Equations and Mathematical Description",
    body: `
      <p>An EM wave travelling along the x-direction can be described mathematically as:</p>
      <div class="formula-box">
        <span class="formula-label">Electric and Magnetic Fields of an EM Wave</span>
        E_y = E<sub>0</sub> sin(kx - ωt)<br/>
        B_z = B<sub>0</sub> sin(kx - ωt)
      </div>
      <p>Here E is along y, B is along z, and the wave travels along x. They are always perpendicular to each other and to the direction of propagation.</p>
      <div class="formula-box">
        <span class="formula-label">Key Relations</span>
        k = 2π/λ (wave number)<br/>
        ω = 2πf (angular frequency)<br/>
        c = ω/k = fλ<br/>
        E<sub>0</sub> / B<sub>0</sub> = c
      </div>
      <div class="formula-box">
        <span class="formula-label">Speed in a Medium</span>
        v = 1 / sqrt(mu * epsilon) = c / sqrt(μᵣ * εᵣ) = c / n
      </div>
      <p>where n = refractive index = sqrt(μᵣ * εᵣ). For non-magnetic materials (μᵣ approx 1): n = sqrt(εᵣ).</p>
      <div class="key-point"><strong>Phase relationship:</strong> E and B are always <strong>in phase</strong> -- they reach their maxima, zero crossings, and minima together. This is different from standing waves where E and B can be out of phase.</div>
      <div class="key-point"><strong>Direction of propagation:</strong> If E = E<sub>0</sub> sin(kx - ωt) j-hat, and B = B<sub>0</sub> sin(kx - ωt) k-hat, then direction = j-hat x k-hat = i-hat (positive x-direction). For negative x-direction, use (kx + ωt).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Writing E and B with different phases like E = E<sub>0</sub> sin(kx - ωt) and B = B<sub>0</sub> cos(kx - ωt). This is WRONG -- they must have the same phase.</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Energy Transport and Poynting Vector",
    body: `
      <p>EM waves transport energy. The rate and direction of energy flow is given by the <strong>Poynting vector</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Poynting Vector</span>
        S = (1/μ₀) * (E x B)
      </div>
      <p>The Poynting vector S gives the <strong>power per unit area</strong> (intensity) flowing in the direction of wave propagation. Its unit is W/m<sup>2</sup>.</p>
      <div class="formula-box">
        <span class="formula-label">Average Intensity</span>
        I = |S_avg| = (1/2) * (E<sub>0</sub> * B<sub>0</sub>) / μ₀ = (1/2) * c * ε₀ * E<sub>0</sub><sup>2</sup> = c * B<sub>0</sub><sup>2</sup> / (2 * μ₀)
      </div>
      <div class="key-point"><strong>Energy density partition:</strong><br/>
      Electric field energy density: u<sub>E</sub> = (1/2) * ε₀ * E<sup>2</sup><br/>
      Magnetic field energy density: u<sub>B</sub> = B<sup>2</sup> / (2 * μ₀)<br/>
      For EM waves: u<sub>E</sub> = u<sub>B</sub> (energy is equally divided!).<br/>
      Total energy density: u = u<sub>E</sub> + u<sub>B</sub> = ε₀ * E<sub>0</sub><sup>2</sup> (for peak) or u<sub>avg</sub> = (1/2) * ε₀ * E<sub>0</sub><sup>2</sup> (time-averaged)</div>
      <div class="formula-box">
        <span class="formula-label">Radiation Pressure</span>
        For perfect absorption: P = I / c = S / c<br/>
        For perfect reflection: P = 2I / c = 2S / c
      </div>
      <p><strong>Real-world example:</strong> Solar radiation intensity at Earth's surface is about 1400 W/m<sup>2</sup> (solar constant). The radiation pressure on a perfect absorber would be 1400 / (3 x 10<sup>8</sup>) = 4.67 x 10<sup>-6</sup> Pa. Tiny, but enough to push spacecraft solar sails!</p>
      <div class="remember-box"><strong>Exam numerical tip:</strong> When given E<sub>0</sub>, find B<sub>0</sub> = E<sub>0</sub>/c first. Then use intensity formula I = (1/2) * c * ε₀ * E<sub>0</sub><sup>2</sup>. For radiation pressure, just divide I by c (absorption) or 2I by c (reflection).</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "EM Waves and the Nature of Light",
    body: `
      <p>One of the most profound results in physics: <strong>Light is an electromagnetic wave!</strong></p>
      <p>When Maxwell calculated the speed of EM waves using the known values of μ₀ and ε₀, he got:</p>
      <div class="formula-box">
        <span class="formula-label">Maxwell's Prediction</span>
        c = 1 / sqrt(μ₀ * ε₀) = 1 / sqrt(4π × 10<sup>-7</sup> x 8.85*10<sup>-12</sup>)<br/>
        = 1 / sqrt(1.112 x 10<sup>-17</sup>) = 1 / (3.336 x 10<sup>-9</sup>) = 2.998 x 10<sup>8</sup> m/s
      </div>
      <p>This matched the experimentally measured speed of light! Maxwell concluded that light must be an electromagnetic wave -- a brilliant unification.</p>
      <div class="key-point"><strong>Hertz's Experiment (1887):</strong> Heinrich Hertz was the first to experimentally produce and detect EM waves. He used an LC oscillator to create radio waves and showed they had all the properties Maxwell predicted: reflection, refraction, interference, diffraction, and polarisation.</div>
      <p><strong>Properties of EM waves confirmed by Hertz:</strong></p>
      <p>1. EM waves are transverse (shown by polarisation experiments)</p>
      <p>2. They travel at speed c</p>
      <p>3. They exhibit reflection, refraction, interference, and diffraction</p>
      <p>4. They carry energy</p>
      <div class="key-point"><strong>Polarisation proves transverse nature:</strong> Only transverse waves can be polarised. Since light can be polarised (Polaroid sunglasses!), light must be a transverse wave. Sound waves cannot be polarised because they are longitudinal.</div>
      <div class="remember-box"><strong>CBSE 1-marker:</strong> "Who first produced EM waves experimentally?" -- Hertz. "Who predicted EM waves theoretically?" -- Maxwell. Don't confuse the two!</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Advanced Numericals — Strategy and Worked Examples",
    body: `
      <p>Let's solve the types of problems that appear in CBSE board exams and competitive entrances.</p>
      <p><strong>Type 1: Finding B<sub>0</sub> from E<sub>0</sub> (or vice versa)</strong></p>
      <div class="formula-box">
        <span class="formula-label">Worked Example 1</span>
        An EM wave has E<sub>0</sub> = 30 V/m. Find B<sub>0</sub>.<br/>
        B<sub>0</sub> = E<sub>0</sub> / c = 30 / (3 x 10<sup>8</sup>) = 10<sup>-7</sup> T = 100 nT
      </div>
      <p><strong>Type 2: Finding intensity from E<sub>0</sub></strong></p>
      <div class="formula-box">
        <span class="formula-label">Worked Example 2</span>
        E<sub>0</sub> = 50 V/m. Find intensity.<br/>
        I = (1/2) * c * ε₀ * E<sub>0</sub><sup>2</sup> = (1/2)(3x10<sup>8</sup>)(8.85x10<sup>-12</sup>)(2500)<br/>
        = 3.31 W/m<sup>2</sup>
      </div>
      <p><strong>Type 3: Radiation pressure</strong></p>
      <div class="formula-box">
        <span class="formula-label">Worked Example 3</span>
        Laser intensity = 10<sup>15</sup> W/m<sup>2</sup> on a perfectly reflecting surface. Find pressure.<br/>
        P = 2I/c = 2(10<sup>15</sup>)/(3x10<sup>8</sup>) = 6.67 x 10<sup>6</sup> Pa (about 66 atm!)
      </div>
      <p><strong>Type 4: Wavelength-frequency conversion</strong></p>
      <div class="formula-box">
        <span class="formula-label">Worked Example 4</span>
        A radio station broadcasts at 100 MHz. Find wavelength.<br/>
        λ = c/f = (3 x 10<sup>8</sup>)/(100 x 10<sup>6</sup>) = 3 m
      </div>
      <p><strong>Type 5: Displacement current</strong></p>
      <div class="formula-box">
        <span class="formula-label">Worked Example 5</span>
        A parallel plate capacitor with plate area 0.01 m<sup>2</sup> has dE/dt = 10<sup>13</sup> V/m/s. Find I<sub>d</sub>.<br/>
        I<sub>d</sub> = ε₀ * A * dE/dt = 8.85 x 10<sup>-12</sup> x 0.01 x 10<sup>13</sup> = 0.885 A
      </div>
      <div class="remember-box"><strong>Speed trick:</strong> For any EM wave problem, the first step is almost always: write c = fλ, E<sub>0</sub>/B<sub>0</sub> = c, or I = (1/2)*c*ε₀*E<sub>0</sub><sup>2</sup>. Identify which formula connects what you know to what you need.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Formula Sheet — All Ch. 8 Formulas at a Glance",
    body: `
      <p>Quick-reference formula sheet for revision before the exam.</p>
      <div class="formula-box">
        <span class="formula-label">Displacement Current</span>
        I<sub>d</sub> = ε₀ * (d Φ_E / dt) = ε₀ * A * (dE/dt)
      </div>
      <div class="formula-box">
        <span class="formula-label">Ampere-Maxwell Law</span>
        Integral B.dl = μ₀ * (I<sub>c</sub> + I<sub>d</sub>) = μ₀ * I<sub>c</sub> + μ₀ * ε₀ * (d Φ_E / dt)
      </div>
      <div class="formula-box">
        <span class="formula-label">Speed of EM Waves</span>
        c = 1 / sqrt(μ₀ * ε₀) = 3 x 10<sup>8</sup> m/s<br/>
        In medium: v = c / n = c / sqrt(μᵣ * εᵣ)
      </div>
      <div class="formula-box">
        <span class="formula-label">E-B Relationship</span>
        E<sub>0</sub> / B<sub>0</sub> = c &nbsp; (always)<br/>
        E and B are in phase, perpendicular to each other and to propagation direction
      </div>
      <div class="formula-box">
        <span class="formula-label">Wave Equations</span>
        E = E<sub>0</sub> sin(kx - ωt) &nbsp; B = B<sub>0</sub> sin(kx - ωt)<br/>
        c = ω/k = fλ
      </div>
      <div class="formula-box">
        <span class="formula-label">Energy Density</span>
        u<sub>E</sub> = (1/2) ε₀ E<sup>2</sup> &nbsp;&nbsp; u<sub>B</sub> = B<sup>2</sup> / (2 μ₀)<br/>
        u<sub>E</sub> = u<sub>B</sub> (equal sharing)<br/>
        u<sub>total</sub> = ε₀ E<sup>2</sup> = B<sup>2</sup>/μ₀ &nbsp; (instantaneous)<br/>
        u<sub>avg</sub> = (1/2) ε₀ E<sub>0</sub><sup>2</sup> = B<sub>0</sub><sup>2</sup> / (2 μ₀)
      </div>
      <div class="formula-box">
        <span class="formula-label">Intensity</span>
        I = u<sub>avg</sub> * c = (1/2) c * ε₀ * E<sub>0</sub><sup>2</sup> = c * B<sub>0</sub><sup>2</sup> / (2 μ₀)
      </div>
      <div class="formula-box">
        <span class="formula-label">Momentum & Radiation Pressure</span>
        p = U/c (absorption) &nbsp;&nbsp; p = 2U/c (reflection)<br/>
        Pressure = I/c (absorption) &nbsp;&nbsp; Pressure = 2I/c (reflection)
      </div>
      <div class="formula-box">
        <span class="formula-label">Photon Energy</span>
        E = hf = hc/λ &nbsp; (h = 6.63 x 10<sup>-34</sup> J.s)
      </div>
    `
  },
  {
    id: 14, level: "exam",
    title: "CBSE PYQ Patterns & Most Important Questions",
    body: `
      <p>Chapter 8 is a <strong>short, high-scoring chapter</strong>. Typical weightage: 4-5 marks. Here's what CBSE loves to ask:</p>
      <div class="key-point"><strong>Guaranteed Questions (appear almost every year):</strong><br/>
      1. What is displacement current? Show I<sub>d</sub> = I<sub>c</sub> for a capacitor. (2-3 marks)<br/>
      2. Name the EM wave used for [application]. (1 mark MCQ)<br/>
      3. Arrange EM waves in order of increasing frequency/wavelength. (1-2 marks)<br/>
      4. Properties of a specific EM wave type. (1-2 marks)</div>
      <div class="key-point"><strong>Important 3-mark questions:</strong><br/>
      1. Write Maxwell's equations (qualitative) and explain any one.<br/>
      2. How are EM waves produced? Draw diagram showing E and B fields.<br/>
      3. Write two properties and two uses of any two types of EM waves.<br/>
      4. Show that EM waves carry momentum. What is radiation pressure?</div>
      <div class="key-point"><strong>Common MCQ topics:</strong><br/>
      1. Source of different EM waves<br/>
      2. Detection methods<br/>
      3. Wavelength/frequency ordering<br/>
      4. E<sub>0</sub>/B<sub>0</sub> = c relationship<br/>
      5. Which EM wave is used in [specific application]</div>
      <p><strong>Year-wise frequency of topics:</strong></p>
      <table class="compare-table">
        <tr><th>Topic</th><th>Frequency</th><th>Marks</th></tr>
        <tr><td>Displacement current</td><td>Very High</td><td>2-3</td></tr>
        <tr><td>EM spectrum (applications)</td><td>Very High</td><td>1-2</td></tr>
        <tr><td>Properties of EM waves</td><td>High</td><td>1-2</td></tr>
        <tr><td>E-B relationship / speed</td><td>Medium</td><td>1</td></tr>
        <tr><td>Numerical (intensity, pressure)</td><td>Medium</td><td>2-3</td></tr>
      </table>
      <div class="remember-box"><strong>Strategy:</strong> This chapter has very limited content. If you memorize the EM spectrum table (source, detection, uses for each type) and the displacement current derivation, you can easily score full marks. Do it the night before!</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Common Mistakes, Tricks & Last-Minute Tips",
    body: `
      <p>Avoid these traps and use these tricks to maximize your score.</p>
      <div class="mistake-box"><strong>Mistake 1:</strong> "EM waves need a medium." WRONG. EM waves travel through vacuum. They are self-sustaining -- changing E creates B, changing B creates E.</div>
      <div class="mistake-box"><strong>Mistake 2:</strong> Confusing E and B phase. They are IN PHASE in an EM wave. They reach maximum and zero simultaneously.</div>
      <div class="mistake-box"><strong>Mistake 3:</strong> Writing E<sub>0</sub> * B<sub>0</sub> = c. The correct relation is E<sub>0</sub> / B<sub>0</sub> = c (ratio, not product!).</div>
      <div class="mistake-box"><strong>Mistake 4:</strong> "X-rays and gamma rays are the same." They have different origins: X-rays from electron deceleration/inner shell transitions; gamma rays from nuclear transitions.</div>
      <div class="mistake-box"><strong>Mistake 5:</strong> "Displacement current flows between capacitor plates." No actual charge flows. Displacement current is NOT a real current -- it's the effect of changing electric field that produces the same magnetic field as a real current would.</div>
      <div class="key-point"><strong>Quick tricks:</strong><br/>
      1. To remember the spectrum order: "Roses Make Interesting Vegetables, Use X-tra Garnish" (Radio, Micro, IR, Visible, UV, X-ray, Gamma)<br/>
      2. Wavelength decreasing order = Frequency increasing order = Energy increasing order<br/>
      3. For momentum: absorption = U/c, reflection = 2U/c. Just remember "bouncing = double"<br/>
      4. B<sub>0</sub> is always tiny: B<sub>0</sub> = E<sub>0</sub>/c, so divide by 3 x 10<sup>8</sup>. If E<sub>0</sub> = 300 V/m, B<sub>0</sub> = 10<sup>-6</sup> T = 1 microT</div>
      <div class="remember-box"><strong>Last-minute revision checklist:</strong><br/>
      1. Displacement current formula and derivation for capacitor<br/>
      2. EM spectrum table: 7 types, sources, detectors, uses<br/>
      3. c = 1/sqrt(μ₀ * ε₀), E<sub>0</sub>/B<sub>0</sub> = c, c = fλ<br/>
      4. Intensity = (1/2) c ε₀ E<sub>0</sub><sup>2</sup><br/>
      5. Radiation pressure: I/c (absorb) vs 2I/c (reflect)<br/>
      6. EM waves are transverse, E perpendicular to B perpendicular to direction<br/>
      7. Hertz produced EM waves; Maxwell predicted them</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Conduction Current vs Displacement Current — The Problem Maxwell Solved",
    body: `
      <p><strong>Conduction current</strong> is the ordinary current due to actual flow of charges through a conductor:</p>
      <div class="formula-box">
        <span class="formula-label">Conduction Current</span>
        I<sub>c</sub> = dQ/dt (rate of flow of charge)
      </div>
      <p>Now here's the problem Maxwell discovered:</p>
      <p>Consider a circuit with a capacitor being charged. Current I flows through the wire. Apply Ampere's law to a loop around the wire -- you get a magnetic field. But now take the <strong>same loop</strong> and stretch the surface so it passes <em>between the capacitor plates</em>. No charges cross this surface! Ampere's law gives B = 0. <strong>Two different answers for the same loop -- a contradiction!</strong></p>
      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">The Gap Where Ampere's Law Breaks</text>
          <!-- Battery -->
          <rect x="20" y="90" width="40" height="60" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
          <text x="40" y="125" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">V</text>
          <!-- Top wire -->
          <line x1="40" y1="90" x2="40" y2="50" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="40" y1="50" x2="180" y2="50" stroke="#2563eb" stroke-width="2.5"/>
          <!-- Left plate -->
          <rect x="180" y="30" width="6" height="80" rx="2" fill="#475569"/>
          <!-- Right plate -->
          <rect x="254" y="30" width="6" height="80" rx="2" fill="#475569"/>
          <!-- Bottom wire -->
          <line x1="260" y1="50" x2="400" y2="50" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="400" y1="50" x2="400" y2="150" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="400" y1="150" x2="40" y2="150" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="40" y1="150" x2="40" y2="150" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="40" y1="150" x2="40" y2="150" stroke="#2563eb" stroke-width="2.5"/>
          <!-- Current arrows -->
          <polygon points="120,50 110,45 110,55" fill="#2563eb"/>
          <polygon points="340,50 330,45 330,55" fill="#2563eb"/>
          <text x="120" y="40" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="600">I<sub>c</sub></text>
          <text x="340" y="40" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="600">I<sub>c</sub></text>
          <!-- E field between plates -->
          <line x1="198" y1="45" x2="242" y2="45" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="198" y1="60" x2="242" y2="60" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="198" y1="75" x2="242" y2="75" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
          <polygon points="242,45 235,41 235,49" fill="#ef4444"/>
          <polygon points="242,60 235,56 235,64" fill="#ef4444"/>
          <polygon points="242,75 235,71 235,79" fill="#ef4444"/>
          <text x="220" y="100" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="600">E (changing)</text>
          <!-- The GAP label -->
          <rect x="195" y="110" width="50" height="20" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="220" y="124" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">GAP!</text>
          <!-- Surface S1 and S2 labels -->
          <ellipse cx="120" cy="50" rx="20" ry="25" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="120" y="85" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="600">S1: I<sub>c</sub> passes</text>
          <ellipse cx="220" cy="55" rx="25" ry="30" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="220" y="145" text-anchor="middle" font-size="10" fill="#f59e0b" font-weight="600">S2: No current!</text>
          <!-- Bottom explanation -->
          <text x="220" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">Same Amperian loop, two surfaces, two different answers!</text>
          <text x="220" y="195" text-anchor="middle" font-size="11" fill="#64748b">S1 through wire: integral B.dl = μ₀ * I<sub>c</sub></text>
          <text x="220" y="210" text-anchor="middle" font-size="11" fill="#64748b">S2 through gap: integral B.dl = 0 (no charge flows!)</text>
          <text x="220" y="235" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Contradiction! Ampere's law needs a fix.</text>
          <text x="220" y="252" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="600">Maxwell's fix: Add I<sub>d</sub> = ε₀ (d Φ_E / dt)</text>
        </svg>
        <div class="diagram-caption">Ampere's law gives different results for surfaces S1 and S2 bounded by the same loop -- Maxwell resolved this by adding displacement current</div>
      </div>
      <p><strong>Maxwell's fix:</strong> A changing electric field between the plates creates a <strong>displacement current</strong> that has the same magnetic effect as a real current:</p>
      <div class="formula-box">
        <span class="formula-label">Displacement Current</span>
        I<sub>d</sub> = ε₀ x (d Φ_E / dt) = ε₀ x A x (dE/dt)
      </div>
      <p><strong>Simple explanation:</strong> "A changing electric field acts like a current" -- it produces the same magnetic field that an actual current would produce.</p>
      <p><strong>Between capacitor plates:</strong> I<sub>d</sub> = I<sub>c</sub> (the displacement current exactly equals the conduction current in the wire). So the total current is always continuous -- no gap!</p>
      <div class="formula-box">
        <span class="formula-label">Total Current (always continuous)</span>
        I<sub>total</sub> = I<sub>c</sub> + I<sub>d</sub><br/>
        In the wire: I<sub>c</sub> = I, I<sub>d</sub> = 0 --> I<sub>total</sub> = I<br/>
        Between plates: I<sub>c</sub> = 0, I<sub>d</sub> = I --> I<sub>total</sub> = I
      </div>
      <p><strong>Solved Problem:</strong></p>
      <div class="formula-box">
        <span class="formula-label">CBSE-type Numerical</span>
        Q: A parallel plate capacitor with plate area A = 0.1 m<sup>2</sup> has an electric field changing at the rate of 3 x 10<sup>13</sup> V/m/s. Find the displacement current.<br/><br/>
        Solution:<br/>
        I<sub>d</sub> = ε₀ x A x (dE/dt)<br/>
        I<sub>d</sub> = 8.85 x 10<sup>-12</sup> x 0.1 x 3 x 10<sup>13</sup><br/>
        I<sub>d</sub> = 8.85 x 10<sup>-12</sup> x 3 x 10<sup>12</sup><br/>
        I<sub>d</sub> = 26.55 A
      </div>
      <div class="key-point"><strong>Key insight:</strong> Total current is always continuous: I<sub>total</sub> = I<sub>c</sub> + I<sub>d</sub>. In the wire only conduction current exists. Between the plates only displacement current exists. But their sum is the same everywhere in the circuit.</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Ampere-Maxwell Law — Modified Equation and Its Significance",
    body: `
      <p>Maxwell modified Ampere's circuital law by adding the displacement current term. This modification had <strong>revolutionary consequences</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Ampere-Maxwell Law (Modified)</span>
        Integral of B->. dl-> = μ₀ (I<sub>c</sub> + I<sub>d</sub>) = μ₀ I<sub>c</sub> + μ₀ ε₀ (d Φ_E / dt)
      </div>
      <p><strong>Why this matters -- the birth of EM waves:</strong></p>
      <p>Before Maxwell's modification, only Faraday's law said "changing B creates E." But there was no reverse: nothing said changing E creates B. Maxwell's addition of I<sub>d</sub> = ε₀ (d Φ_E / dt) completed the symmetry:</p>
      <p>- Changing B -> creates E (Faraday's law)</p>
      <p>- Changing E -> creates B (Ampere-Maxwell law)</p>
      <p>This mutual creation is what allows EM waves to propagate through empty space!</p>
      <div class="key-point"><strong>Comparison: Conduction Current vs Displacement Current</strong></div>
      <table class="compare-table">
        <tr><th>Property</th><th>Conduction Current (I<sub>c</sub>)</th><th>Displacement Current (I<sub>d</sub>)</th></tr>
        <tr><td>Definition</td><td>Due to actual flow of charges</td><td>Due to changing electric field</td></tr>
        <tr><td>Formula</td><td>I<sub>c</sub> = dQ/dt</td><td>I<sub>d</sub> = ε₀ (d Φ_E / dt)</td></tr>
        <tr><td>Medium required?</td><td>Yes (conductor needed)</td><td>No (exists even in vacuum)</td></tr>
        <tr><td>Cause</td><td>Potential difference across conductor</td><td>Time-varying electric field</td></tr>
        <tr><td>Produces magnetic field?</td><td>Yes</td><td>Yes (same effect as I<sub>c</sub>)</td></tr>
        <tr><td>Produces heating (I<sup>2</sup>R)?</td><td>Yes (Joule heating)</td><td>No (no actual charges move)</td></tr>
        <tr><td>Obeys Ohm's law?</td><td>Yes</td><td>No</td></tr>
        <tr><td>Example</td><td>Current in a wire</td><td>Between capacitor plates during charging</td></tr>
      </table>
      <p><strong>Solved Problem (CBSE 2019 pattern):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Board Exam Numerical</span>
        Q: A parallel plate capacitor of plate area A = 60 cm<sup>2</sup> and separation d = 3 mm is charged by a current of 0.12 A. Find the displacement current and the rate of change of electric field between the plates.<br/><br/>
        Solution:<br/>
        (i) Displacement current I<sub>d</sub> = I<sub>c</sub> = 0.12 A<br/>
        (The displacement current always equals the conduction current for a charging capacitor)<br/><br/>
        (ii) I<sub>d</sub> = ε₀ x A x (dE/dt)<br/>
        0.12 = 8.85 x 10<sup>-12</sup> x 60 x 10<sup>-4</sup> x (dE/dt)<br/>
        dE/dt = 0.12 / (8.85 x 10<sup>-12</sup> x 6 x 10<sup>-3</sup>)<br/>
        dE/dt = 0.12 / (5.31 x 10<sup>-14</sup>)<br/>
        dE/dt = 2.26 x 10<sup>12</sup> V/m/s
      </div>
      <div class="mistake-box"><strong>Common mistake:</strong> "Displacement current involves actual charge movement." NO! Despite the name "current," no charges actually flow. It is purely the effect of a time-varying electric field. Maxwell used the term "displacement" from the displacement of electric field lines, not physical displacement of charges.</div>
      <div class="remember-box"><strong>Exam tip:</strong> When asked "What is the significance of displacement current?" always write: (1) It maintains continuity of current in a circuit with a capacitor. (2) It completes the symmetry between E and B. (3) It leads to the existence of electromagnetic waves.</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Previous Year CBSE Problems on Displacement Current — Solved",
    body: `
      <p>Displacement current is one of the <strong>most frequently asked topics</strong> in CBSE Physics board exams. Here are typical board questions with full solutions.</p>
      <p><strong>Problem 1 (CBSE 2020, 2 marks):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Define and Derive Type</span>
        Q: (a) Define displacement current. (b) Show that the displacement current between the plates of a parallel plate capacitor is equal to the conduction current in the connecting wire.<br/><br/>
        Solution:<br/>
        (a) Displacement current is the current that arises due to time-varying electric field. It is given by I<sub>d</sub> = ε₀ (d Φ_E / dt).<br/><br/>
        (b) For a parallel plate capacitor:<br/>
        Electric field between plates: E = sigma / ε₀ = Q / (ε₀ x A)<br/>
        Electric flux: Φ_E = E x A = Q / ε₀<br/>
        Therefore: d Φ_E / dt = (1 / ε₀) x dQ/dt = I<sub>c</sub> / ε₀<br/>
        So: I<sub>d</sub> = ε₀ x (d Φ_E / dt) = ε₀ x I<sub>c</sub> / ε₀ = I<sub>c</sub><br/><br/>
        Hence, I<sub>d</sub> = I<sub>c</sub> (proved)
      </div>
      <p><strong>Problem 2 (CBSE 2018, 3 marks):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Numerical + Conceptual</span>
        Q: A parallel plate capacitor with plate area 25 cm<sup>2</sup> and plate separation 2 mm is being charged by a current of 0.2 A. (a) Find the rate of change of electric field between the plates. (b) Is Ampere's circuital law valid for a surface passing through the gap?<br/><br/>
        Solution:<br/>
        (a) I<sub>d</sub> = ε₀ x A x (dE/dt)<br/>
        Since I<sub>d</sub> = I<sub>c</sub> = 0.2 A:<br/>
        dE/dt = I<sub>d</sub> / (ε₀ x A)<br/>
        dE/dt = 0.2 / (8.85 x 10<sup>-12</sup> x 25 x 10<sup>-4</sup>)<br/>
        dE/dt = 0.2 / (2.2125 x 10<sup>-14</sup>)<br/>
        dE/dt = 9.04 x 10<sup>12</sup> V/m/s<br/><br/>
        (b) Ampere's original law is NOT valid for the surface through the gap (no conduction current passes). But the Ampere-Maxwell law IS valid because it includes displacement current: integral B.dl = μ₀ (I<sub>c</sub> + I<sub>d</sub>). Since I<sub>d</sub> = I<sub>c</sub> in the gap, the law gives the same result for any surface.
      </div>
      <p><strong>Problem 3 (CBSE Sample Paper pattern, 2 marks):</strong></p>
      <div class="formula-box">
        <span class="formula-label">MCQ / Short Answer Type</span>
        Q: A capacitor of capacitance C is being charged through a resistance R. At time t, the displacement current between the plates is:<br/>
        (a) I<sub>0</sub>  (b) I<sub>0</sub> e<sup>(-t/RC)</sup>  (c) I<sub>0</sub> (1 - e<sup>(-t/RC)</sup>)  (d) zero<br/><br/>
        Solution: (b) I<sub>0</sub> e<sup>(-t/RC)</sup><br/>
        Reason: The displacement current I<sub>d</sub> = I<sub>c</sub> at every instant. For an RC circuit, I<sub>c</sub> = (V/R) e<sup>(-t/RC)</sup> = I<sub>0</sub> e<sup>(-t/RC)</sup>. So I<sub>d</sub> follows the same exponential decay.
      </div>
      <div class="key-point"><strong>What examiners typically ask:</strong><br/>
      1. "Define displacement current and write its expression" (1-2 marks) -- appears almost every year<br/>
      2. "Show I<sub>d</sub> = I<sub>c</sub> for a parallel plate capacitor" (2-3 marks) -- very high frequency<br/>
      3. "Calculate dE/dt given I<sub>c</sub> and plate area" (2 marks) -- common numerical<br/>
      4. "Why was Ampere's law modified?" (1-2 marks) -- conceptual question<br/>
      5. MCQ: "Displacement current exists due to..." (changing E field)</div>
      <div class="key-point"><strong>Marks distribution and strategy:</strong><br/>
      - 1-mark MCQ: Know the definition, formula, and that I<sub>d</sub> does not involve real charge flow<br/>
      - 2-mark short answer: Write formula + one line of significance<br/>
      - 3-mark derivation: Show the Amperian loop contradiction + derive I<sub>d</sub> = I<sub>c</sub><br/>
      - Always draw the capacitor diagram -- it fetches presentation marks!</div>
      <div class="remember-box"><strong>Key formulas to memorize:</strong><br/>
      1. I<sub>d</sub> = ε₀ (d Φ_E / dt)<br/>
      2. I<sub>d</sub> = ε₀ x A x (dE/dt)<br/>
      3. For charging capacitor: I<sub>d</sub> = I<sub>c</sub> (always)<br/>
      4. Ampere-Maxwell: integral B.dl = μ₀ (I<sub>c</sub> + ε₀ d Φ_E / dt)<br/>
      5. Total current continuity: I<sub>total</sub> = I<sub>c</sub> + I<sub>d</sub> = constant throughout the circuit</div>
    `
  }
];
