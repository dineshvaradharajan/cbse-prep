// Chapter 6: Electromagnetic Induction — Concepts
const ch6Concepts = [
  {
    id: 1, level: "basic",
    title: "Magnetic Flux — The Gateway to Induction",
    body: `
      <p>Before understanding electromagnetic induction, you need to understand <strong>magnetic flux</strong>. It tells you "how much magnetic field passes through a surface."</p>
      <p>Think of it like <strong>rain falling on a tilted bucket</strong>. If the bucket faces straight up, maximum rain collects. Tilt it, less rain. Turn it sideways, zero rain. Magnetic flux works exactly the same way.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Loop -->
          <ellipse cx="200" cy="110" rx="80" ry="40" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2.5"/>
          <text x="200" y="118" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">Area A</text>
          <!-- Normal vector -->
          <line x1="200" y1="110" x2="200" y2="25" stroke="#1e293b" stroke-width="2.5"/>
          <polygon points="194,30 200,12 206,30" fill="#1e293b"/>
          <text x="212" y="22" font-size="14" font-weight="700" fill="#1e293b">n</text>
          <!-- B field arrows -->
          <line x1="60" y1="40" x2="60" y2="170" stroke="#22c55e" stroke-width="2"/>
          <polygon points="54,165 60,180 66,165" fill="#22c55e"/>
          <line x1="100" y1="40" x2="100" y2="170" stroke="#22c55e" stroke-width="2"/>
          <polygon points="94,165 100,180 106,165" fill="#22c55e"/>
          <line x1="140" y1="40" x2="140" y2="170" stroke="#22c55e" stroke-width="2"/>
          <polygon points="134,165 140,180 146,165" fill="#22c55e"/>
          <line x1="340" y1="40" x2="340" y2="170" stroke="#22c55e" stroke-width="2"/>
          <polygon points="334,165 340,180 346,165" fill="#22c55e"/>
          <line x1="380" y1="40" x2="380" y2="170" stroke="#22c55e" stroke-width="2"/>
          <polygon points="374,165 380,180 386,165" fill="#22c55e"/>
          <text x="380" y="30" font-size="14" font-weight="700" fill="#22c55e">B</text>
          <!-- Angle arc -->
          <path d="M 200,110 L 200,80 A 30,30 0 0,1 210,82" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <text x="215" y="78" font-size="13" fill="#64748b" font-weight="600">θ</text>
        </svg>
        <div class="diagram-caption">Magnetic flux through a loop depends on the angle between B and the area normal</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnetic Flux</span>
        Φ = B · A = BA cos θ
      </div>
      <p>where B = magnetic field strength, A = area of the loop, and θ = angle between B and the normal to the surface.</p>
      <p><strong>SI Unit:</strong> Weber (Wb) = T . m<sup>2</sup> (Tesla times metre-squared)</p>
      <p><strong>Special Cases:</strong></p>
      <p>1. θ = 0 degrees (B perpendicular to loop plane, parallel to normal): Φ = BA (maximum flux)</p>
      <p>2. θ = 90 degrees (B parallel to loop plane, perpendicular to normal): Φ = 0 (zero flux)</p>
      <p>3. θ = 180 degrees: Φ = −BA (negative flux, field enters from other side)</p>
      <div class="key-point"><strong>Key insight:</strong> Magnetic flux is a <strong>scalar</strong> quantity (it can be positive or negative, but has no direction). It measures the "number of field lines" passing through a surface.</div>
      <div class="remember-box"><strong>Memory trick:</strong> "Flux = Field x Face" — the flux depends on how much of the surface "faces" the field. Maximum when fully facing, zero when edge-on.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing the angle. θ is the angle between B and the <strong>area normal</strong> (perpendicular to the surface), NOT the angle between B and the surface itself. If the surface makes angle α with B, then θ = 90 - α.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Faraday's Law of Electromagnetic Induction",
    body: `
      <p>This is the <strong>most important law</strong> of this entire chapter. Michael Faraday discovered that a <strong>changing magnetic flux</strong> through a loop induces an EMF (voltage) in that loop.</p>
      <p>Think of it like a water wheel: <strong>still water does nothing</strong>, but <strong>flowing water</strong> (change) turns the wheel and generates energy. Similarly, a static magnetic field does nothing, but a <strong>changing</strong> field generates EMF!</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Coil (loop) -->
          <ellipse cx="280" cy="100" rx="60" ry="70" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <text x="280" y="185" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="600">Coil (N turns)</text>
          <!-- Magnet -->
          <rect x="60" y="70" width="100" height="60" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <rect x="60" y="70" width="50" height="60" rx="0" fill="#ef4444" fill-opacity="0.2"/>
          <rect x="110" y="70" width="50" height="60" rx="0" fill="#3b82f6" fill-opacity="0.2"/>
          <text x="85" y="107" text-anchor="middle" font-size="18" font-weight="700" fill="#dc2626">N</text>
          <text x="135" y="107" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">S</text>
          <!-- Arrow showing motion -->
          <line x1="170" y1="100" x2="210" y2="100" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="210,93 228,100 210,107" fill="#f59e0b"/>
          <text x="195" y="88" font-size="12" font-weight="700" fill="#f59e0b">push</text>
          <!-- Galvanometer -->
          <line x1="280" y1="30" x2="280" y2="10" stroke="#64748b" stroke-width="2"/>
          <line x1="280" y1="10" x2="380" y2="10" stroke="#64748b" stroke-width="2"/>
          <line x1="380" y1="10" x2="380" y2="30" stroke="#64748b" stroke-width="2"/>
          <circle cx="380" cy="30" r="15" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="380" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#f59e0b">G</text>
          <line x1="380" y1="45" x2="380" y2="100" stroke="#64748b" stroke-width="2"/>
          <line x1="380" y1="100" x2="340" y2="100" stroke="#64748b" stroke-width="2"/>
        </svg>
        <div class="diagram-caption">Faraday's experiment: Moving a magnet toward a coil induces EMF (galvanometer deflects)</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Faraday's Law</span>
        EMF = -dφ/dt = -N x dφ/dt (for N turns)
      </div>
      <p><strong>Faraday's Observations:</strong></p>
      <p>1. Moving a magnet toward a coil produces current (galvanometer deflects)</p>
      <p>2. Moving the magnet away reverses the current direction</p>
      <p>3. <strong>Faster motion = larger EMF</strong> (rate of change matters!)</p>
      <p>4. <strong>More turns = larger EMF</strong> (each turn contributes)</p>
      <p>5. <strong>No relative motion = no EMF</strong> (flux must change)</p>
      <p><strong>Ways to change flux (and hence induce EMF):</strong></p>
      <p>1. Change B (increase or decrease the magnetic field strength)</p>
      <p>2. Change A (change the area of the loop — stretch or compress it)</p>
      <p>3. Change θ (rotate the loop in the field)</p>
      <p>4. Move the loop into or out of the field region</p>
      <div class="key-point"><strong>The minus sign</strong> in the formula is not just mathematical — it represents <strong>Lenz's Law</strong> (covered next). It tells us the induced EMF opposes the change in flux.</div>
      <div class="remember-box"><strong>Board exam tip:</strong> "State Faraday's laws of electromagnetic induction" is a guaranteed 2-3 mark question. State both laws clearly:<br>
      <strong>First law:</strong> Whenever magnetic flux linked with a coil changes, an EMF is induced.<br>
      <strong>Second law:</strong> The magnitude of induced EMF equals the rate of change of magnetic flux.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Saying "changing magnetic field" induces EMF. More precisely, it is <strong>changing magnetic flux</strong> that induces EMF. Even in a constant B field, flux can change if the area or angle changes!</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Lenz's Law and Conservation of Energy",
    body: `
      <p><strong>Lenz's Law</strong> tells you the <strong>direction</strong> of the induced current. It says:</p>
      <p><em>"The induced current flows in such a direction that it <strong>opposes the change</strong> in magnetic flux that caused it."</em></p>
      <p>Think of it like <strong>Nature's stubbornness</strong> — nature resists change! If you try to increase flux, the induced current creates a field to reduce it. If you try to decrease flux, the induced current tries to maintain it.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <!-- Case 1: Magnet approaching -->
          <text x="110" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">Magnet approaching</text>
          <!-- Magnet -->
          <rect x="20" y="50" width="60" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="50" y="76" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">N</text>
          <line x1="85" y1="70" x2="115" y2="70" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="115,64 128,70 115,76" fill="#f59e0b"/>
          <!-- Loop -->
          <ellipse cx="160" cy="70" rx="30" ry="45" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2"/>
          <!-- Induced B opposing (pointing left) -->
          <line x1="160" y1="70" x2="125" y2="70" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>
          <polygon points="130,65 118,70 130,75" fill="#22c55e"/>
          <text x="130" y="55" font-size="11" fill="#22c55e" font-weight="600">B(ind)</text>
          <!-- Curved arrow for current direction -->
          <path d="M 160,25 A 15,15 0 0,1 175,38" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <polygon points="177,35 180,44 170,39" fill="#7c3aed"/>
          <text x="190" y="30" font-size="11" fill="#7c3aed" font-weight="600">I</text>

          <!-- Case 2: Magnet receding -->
          <text x="340" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">Magnet receding</text>
          <!-- Magnet moving away -->
          <rect x="320" y="50" width="60" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="350" y="76" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">N</text>
          <line x1="385" y1="70" x2="415" y2="70" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="415,64 428,70 415,76" fill="#f59e0b"/>
          <!-- Loop -->
          <ellipse cx="290" cy="70" rx="30" ry="45" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2"/>
          <!-- Induced B supporting (pointing right) -->
          <line x1="290" y1="70" x2="325" y2="70" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>
          <polygon points="320,65 332,70 320,75" fill="#22c55e"/>
          <text x="310" y="55" font-size="11" fill="#22c55e" font-weight="600">B(ind)</text>
          <!-- Curved arrow for current (opposite) -->
          <path d="M 290,25 A 15,15 0 0,0 275,38" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <polygon points="273,35 270,44 280,39" fill="#7c3aed"/>
          <text x="258" y="30" font-size="11" fill="#7c3aed" font-weight="600">I</text>

          <!-- Explanation -->
          <text x="110" y="145" text-anchor="middle" font-size="11" fill="#64748b">Flux increasing --> current</text>
          <text x="110" y="160" text-anchor="middle" font-size="11" fill="#64748b">opposes (repels magnet)</text>
          <text x="340" y="145" text-anchor="middle" font-size="11" fill="#64748b">Flux decreasing --> current</text>
          <text x="340" y="160" text-anchor="middle" font-size="11" fill="#64748b">supports (attracts magnet)</text>
        </svg>
        <div class="diagram-caption">Lenz's Law: Induced current always opposes the change causing it</div>
      </div>
      <p><strong>Why does Lenz's Law work? Conservation of Energy!</strong></p>
      <p>If the induced current <em>helped</em> the change instead of opposing it, the magnet would accelerate on its own, the current would increase further, which would accelerate the magnet even more... free energy from nothing! That violates conservation of energy.</p>
      <p>The opposing force means you must <strong>do work</strong> to push the magnet — and that work is what gets converted into electrical energy. Energy is conserved!</p>
      <div class="key-point"><strong>Quick rule for direction:</strong><br>
      - Flux increasing --> induced current creates B opposite to external B (opposes increase)<br>
      - Flux decreasing --> induced current creates B in same direction as external B (opposes decrease)</div>
      <div class="remember-box"><strong>Memory trick:</strong> Lenz = Lazy. Nature is lazy and resists any change. "If you push, I push back. If you pull, I pull back." That's Lenz's Law!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Saying the induced current opposes the flux. NO! It opposes the <strong>change</strong> in flux. If flux is constant (no change), there's no induced current at all.</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Motional EMF — EMF in a Moving Conductor",
    body: `
      <p>When a straight conductor moves through a magnetic field, an EMF is generated across its ends. This is called <strong>motional EMF</strong> and it's the principle behind electric generators!</p>
      <p>Think of it like this: when a rod moves through a magnetic field, the free electrons inside the rod experience a magnetic force (F = qv x B) that pushes them to one end, creating a potential difference.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Rails -->
          <line x1="60" y1="40" x2="380" y2="40" stroke="#64748b" stroke-width="2.5"/>
          <line x1="60" y1="160" x2="380" y2="160" stroke="#64748b" stroke-width="2.5"/>
          <!-- Resistor -->
          <line x1="60" y1="40" x2="60" y2="80" stroke="#64748b" stroke-width="2.5"/>
          <path d="M 60,80 L 50,85 L 70,95 L 50,105 L 70,115 L 50,125 L 60,130" fill="none" stroke="#64748b" stroke-width="2.5"/>
          <line x1="60" y1="130" x2="60" y2="160" stroke="#64748b" stroke-width="2.5"/>
          <text x="35" y="107" font-size="13" font-weight="700" fill="#64748b">R</text>
          <!-- Moving rod -->
          <line x1="250" y1="35" x2="250" y2="165" stroke="#2563eb" stroke-width="4"/>
          <text x="255" y="30" font-size="13" font-weight="700" fill="#2563eb">Rod (length l)</text>
          <!-- Velocity arrow -->
          <line x1="260" y1="100" x2="310" y2="100" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="310,94 325,100 310,106" fill="#f59e0b"/>
          <text x="295" y="88" font-size="14" font-weight="700" fill="#f59e0b">v</text>
          <!-- B field (into page - dots become crosses) -->
          <text x="150" y="85" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="150" y="135" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="200" y="85" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="200" y="135" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="300" y="85" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="300" y="135" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="350" y="85" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="350" y="135" font-size="20" fill="#22c55e" font-weight="700">x</text>
          <text x="370" y="180" font-size="12" fill="#22c55e" font-weight="600">B (into page)</text>
          <!-- Current direction -->
          <line x1="250" y1="40" x2="100" y2="40" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="105,35 92,40 105,45" fill="#7c3aed"/>
          <text x="170" y="35" font-size="11" fill="#7c3aed" font-weight="600">I</text>
        </svg>
        <div class="diagram-caption">A rod sliding on rails in a magnetic field generates motional EMF = Blv</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Motional EMF</span>
        EMF = Blv
      </div>
      <p>where B = magnetic field, l = length of conductor, v = velocity of conductor.</p>
      <p><strong>Derivation (using Faraday's Law):</strong></p>
      <p>Area swept by rod in time dt = l x (v dt) = lv dt</p>
      <p>Change in flux: d(phi) = B x l x v x dt</p>
      <p>EMF = dφ/dt = Blv</p>
      <p><strong>If the rod has resistance r and external resistance R:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Current and Power</span>
        I = Blv / (R + r)<br>
        Power dissipated = B<sup>2</sup> l<sup>2</sup> v<sup>2</sup> / (R + r)<br>
        Force needed to maintain velocity = BIl = B<sup>2</sup> l<sup>2</sup> v / (R + r)
      </div>
      <div class="key-point"><strong>Energy conservation check:</strong> The mechanical power you supply by pushing the rod (F x v) exactly equals the electrical power dissipated in the resistance. No energy is created or destroyed!</div>
      <div class="remember-box"><strong>Board exam favourite:</strong> "Derive the expression for motional EMF of a rod moving in a uniform magnetic field" is a very common 3-5 mark question. Draw the rail-rod diagram and use phi = B × A.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting that the rod must move <strong>perpendicular</strong> to both its own length and the field for EMF = Blv. If the rod moves parallel to B, no EMF is induced.</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Eddy Currents — Swirling Currents in Bulk Conductors",
    body: `
      <p>When a <strong>bulk conductor</strong> (not just a wire loop) is placed in a changing magnetic field, currents flow in <strong>closed loops</strong> within the conductor. These are called <strong>eddy currents</strong> (also called Foucault currents).</p>
      <p>Think of stirring water with a spoon — the water swirls in circles. Similarly, changing flux makes electrons swirl in circles inside a metal plate.</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Metal plate -->
          <rect x="120" y="30" width="200" height="120" rx="10" fill="#e2e8f0" stroke="#64748b" stroke-width="2.5"/>
          <text x="220" y="165" text-anchor="middle" font-size="12" fill="#64748b" font-weight="600">Metal plate</text>
          <!-- Eddy current loops -->
          <ellipse cx="180" cy="80" rx="30" ry="25" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,3"/>
          <polygon points="205,72 210,80 200,78" fill="#7c3aed"/>
          <ellipse cx="260" cy="80" rx="30" ry="25" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,3"/>
          <polygon points="285,72 290,80 280,78" fill="#7c3aed"/>
          <ellipse cx="220" cy="110" rx="25" ry="20" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,3"/>
          <polygon points="242,105 247,112 237,110" fill="#7c3aed"/>
          <text x="220" y="55" text-anchor="middle" font-size="12" fill="#7c3aed" font-weight="600">Eddy currents</text>
          <!-- B field changing -->
          <line x1="30" y1="30" x2="30" y2="130" stroke="#22c55e" stroke-width="2"/>
          <polygon points="24,40 30,20 36,40" fill="#22c55e"/>
          <polygon points="24,120 30,140 36,120" fill="#22c55e"/>
          <text x="30" y="160" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="600">Changing B</text>
          <!-- Heat symbol -->
          <text x="400" y="70" font-size="16" fill="#ef4444">~</text>
          <text x="400" y="90" font-size="16" fill="#ef4444">~</text>
          <text x="400" y="110" font-size="16" fill="#ef4444">~</text>
          <text x="400" y="130" font-size="11" fill="#ef4444" font-weight="600">Heat</text>
        </svg>
        <div class="diagram-caption">Eddy currents are induced loops of current in bulk conductors exposed to changing flux</div>
      </div>
      <p><strong>Applications of Eddy Currents (CBSE loves these!):</strong></p>
      <table class="compare-table">
        <tr><th>Application</th><th>How it works</th></tr>
        <tr><td>Electromagnetic braking</td><td>Eddy currents in a rotating metal disc oppose motion, providing smooth braking (used in trains)</td></tr>
        <tr><td>Induction furnace</td><td>Large eddy currents generate heat to melt metals</td></tr>
        <tr><td>Electromagnetic damping</td><td>Eddy currents damp oscillations of a galvanometer needle quickly</td></tr>
        <tr><td>Speedometer</td><td>Rotating magnet induces eddy currents in aluminium drum, making it rotate proportionally</td></tr>
        <tr><td>Induction cooktop</td><td>Changing magnetic field induces eddy currents in the cooking vessel, heating it directly</td></tr>
      </table>
      <p><strong>Minimizing Eddy Currents (when unwanted):</strong></p>
      <p>Use <strong>laminated cores</strong> — thin insulated sheets of metal stacked together. The insulating layers break the eddy current loops, reducing energy loss. This is why transformer cores are laminated!</p>
      <div class="key-point"><strong>Important:</strong> Eddy currents obey Lenz's Law — they always oppose the change in flux that causes them. This is why they produce braking effects.</div>
      <div class="remember-box"><strong>Exam tip:</strong> "List any four applications of eddy currents" is a frequently asked 2-mark question. Memorize at least 5 applications with one-line explanations.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Self-Inductance and Inductors",
    body: `
      <p><strong>Self-inductance</strong> is the property of a coil by which it <strong>opposes any change in the current</strong> flowing through it by inducing an EMF in itself.</p>
      <p>Think of inductance like <strong>inertia</strong> in mechanics. Just as a heavy object resists change in velocity, an inductor resists change in current. The bigger the inductance, the more it resists.</p>
      <div class="diagram-container">
        <svg width="440" height="160" viewBox="0 0 440 160">
          <!-- Coil symbol -->
          <line x1="40" y1="80" x2="80" y2="80" stroke="#64748b" stroke-width="2.5"/>
          <path d="M 80,80 C 80,60 100,60 100,80 C 100,60 120,60 120,80 C 120,60 140,60 140,80 C 140,60 160,60 160,80 C 160,60 180,60 180,80 C 180,60 200,60 200,80" fill="none" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="200" y1="80" x2="240" y2="80" stroke="#64748b" stroke-width="2.5"/>
          <text x="140" y="50" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">L</text>
          <!-- Current arrow -->
          <line x1="240" y1="80" x2="290" y2="80" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="290,74 305,80 290,86" fill="#f59e0b"/>
          <text x="270" y="70" font-size="14" font-weight="700" fill="#f59e0b">I</text>
          <!-- Back EMF arrow -->
          <line x1="200" y1="110" x2="100" y2="110" stroke="#ef4444" stroke-width="2"/>
          <polygon points="105,105 90,110 105,115" fill="#ef4444"/>
          <text x="150" y="130" text-anchor="middle" font-size="12" font-weight="600" fill="#ef4444">Back EMF = -L(dI/dt)</text>
        </svg>
        <div class="diagram-caption">An inductor opposes changes in current by generating a back EMF</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Self-Inductance</span>
        Φ = LI &nbsp; (flux linkage = L times current)<br>
        EMF = -L(dI/dt) &nbsp; (induced EMF opposes change in current)
      </div>
      <p><strong>SI Unit of L:</strong> Henry (H) = V.s/A = Wb/A</p>
      <p><strong>Self-inductance of a solenoid:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Solenoid Inductance</span>
        L = μ₀ x n<sup>2</sup> x A x l = μ₀ x N<sup>2</sup> x A / l
      </div>
      <p>where n = N/l = number of turns per unit length, A = cross-section area, l = length, N = total turns.</p>
      <p><strong>Key observations:</strong></p>
      <p>1. L depends on geometry (shape, size, number of turns) and core material, NOT on current</p>
      <p>2. Doubling the number of turns makes L four times (L proportional to N<sup>2</sup>)</p>
      <p>3. An iron core inside the solenoid increases L dramatically (by factor μ<sub>r</sub>)</p>
      <div class="key-point"><strong>Analogy:</strong> Self-inductance L is to current what mass m is to velocity. Just as F = ma = m(dv/dt), we have EMF = L(dI/dt). Inductance is "electrical inertia"!</div>
      <div class="remember-box"><strong>Board exam tip:</strong> "Define self-inductance. Derive expression for self-inductance of a long solenoid" is a 3-5 mark question. Know the derivation step by step.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing N and n. N = total number of turns, n = turns per unit length = N/l. In the formula, L = μ₀ n<sup>2</sup> Al, the 'n' is turns per metre!</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Mutual Inductance — Two Coils Working Together",
    body: `
      <p><strong>Mutual inductance</strong> is the property by which a changing current in one coil induces an EMF in a <strong>neighbouring coil</strong>.</p>
      <p>Think of two coils as <strong>neighbours</strong>: when one "plays loud music" (changing current), the other one "hears it" (induced EMF). The closer the neighbours (better magnetic coupling), the louder the sound (larger mutual inductance).</p>
      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Coil 1 -->
          <ellipse cx="140" cy="90" rx="50" ry="65" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <text x="140" y="95" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">Coil 1</text>
          <text x="140" y="115" text-anchor="middle" font-size="12" fill="#2563eb">N1 turns</text>
          <!-- Coil 2 -->
          <ellipse cx="300" cy="90" rx="50" ry="65" fill="#fce7f3" fill-opacity="0.3" stroke="#ec4899" stroke-width="2.5"/>
          <text x="300" y="95" text-anchor="middle" font-size="14" font-weight="700" fill="#ec4899">Coil 2</text>
          <text x="300" y="115" text-anchor="middle" font-size="12" fill="#ec4899">N2 turns</text>
          <!-- Flux lines connecting them -->
          <path d="M 190,50 C 230,30 260,30 300,50" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="5,3"/>
          <path d="M 190,70 C 230,55 260,55 300,70" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="5,3"/>
          <path d="M 190,110 C 230,125 260,125 300,110" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="5,3"/>
          <path d="M 190,130 C 230,150 260,150 300,130" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="5,3"/>
          <text x="220" y="165" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="600">Shared magnetic flux</text>
          <!-- Labels -->
          <text x="80" y="170" font-size="12" fill="#2563eb" font-weight="600">I1 (changing)</text>
          <text x="300" y="170" text-anchor="middle" font-size="12" fill="#ec4899" font-weight="600">EMF2 induced</text>
        </svg>
        <div class="diagram-caption">Changing current in Coil 1 induces EMF in Coil 2 through shared magnetic flux</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Mutual Inductance</span>
        Φ₂ = M x I<sub>1</sub> &nbsp; (flux through coil 2 due to current in coil 1)<br>
        EMF<sub>2</sub> = -M(dI<sub>1</sub>/dt) &nbsp; (EMF induced in coil 2)
      </div>
      <p><strong>SI Unit:</strong> Henry (H), same as self-inductance.</p>
      <p><strong>Mutual inductance of two coaxial solenoids:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Two Coaxial Solenoids</span>
        M = μ₀ x N1 x N2 x A / l
      </div>
      <p>where A = area of the inner solenoid, l = length, N1 and N2 = number of turns in each solenoid.</p>
      <p><strong>Important property — Reciprocity:</strong></p>
      <p>M<sub>12</sub> = M<sub>21</sub> = M. The mutual inductance is the same regardless of which coil carries the changing current. This is a remarkable symmetry!</p>
      <p><strong>Relationship between L and M:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Coupling Coefficient</span>
        M = k x sqrt(L1 x L2) &nbsp; where 0 &lt;= k &lt;= 1
      </div>
      <p>k = 1 means perfect coupling (all flux links both coils). k = 0 means no coupling.</p>
      <div class="key-point"><strong>Transformers</strong> work on the principle of mutual inductance. The primary and secondary coils share magnetic flux through an iron core (k is close to 1).</div>
      <div class="remember-box"><strong>Exam tip:</strong> "Define mutual inductance. Derive expression for mutual inductance of two long coaxial solenoids" is a common 3-5 mark question. Be clear about which solenoid's flux you're calculating.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using the area of the outer solenoid in the formula. The mutual inductance depends on the area of the <strong>inner</strong> solenoid (since flux through the inner one is what matters for coupling).</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "AC Generator — Converting Mechanical Energy to Electrical Energy",
    body: `
      <p>The <strong>AC generator</strong> (alternator) is the most important practical application of electromagnetic induction. It converts <strong>mechanical energy into electrical energy</strong> by rotating a coil in a magnetic field.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <!-- Magnet poles -->
          <rect x="20" y="50" width="50" height="120" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="45" y="115" text-anchor="middle" font-size="20" font-weight="700" fill="#dc2626">N</text>
          <rect x="370" y="50" width="50" height="120" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="395" y="115" text-anchor="middle" font-size="20" font-weight="700" fill="#2563eb">S</text>
          <!-- B field -->
          <line x1="75" y1="110" x2="365" y2="110" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="6,4"/>
          <polygon points="360,105 375,110 360,115" fill="#22c55e"/>
          <text x="220" y="100" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="600">B</text>
          <!-- Rotating coil -->
          <rect x="150" y="55" width="140" height="110" rx="4" fill="#fef3c7" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2.5" transform="rotate(15, 220, 110)"/>
          <text x="220" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#f59e0b">Coil (N turns)</text>
          <!-- Rotation arrow -->
          <path d="M 220,45 A 30,30 0 0,1 245,55" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <polygon points="247,50 252,60 240,58" fill="#7c3aed"/>
          <text x="255" y="45" font-size="12" font-weight="700" fill="#7c3aed">ω</text>
          <!-- Slip rings -->
          <circle cx="180" cy="190" r="10" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="180" y="194" text-anchor="middle" font-size="8" font-weight="700" fill="#64748b">R1</text>
          <circle cx="260" cy="190" r="10" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="260" y="194" text-anchor="middle" font-size="8" font-weight="700" fill="#64748b">R2</text>
          <!-- Brushes and output -->
          <line x1="180" y1="200" x2="180" y2="215" stroke="#64748b" stroke-width="2"/>
          <line x1="260" y1="200" x2="260" y2="215" stroke="#64748b" stroke-width="2"/>
          <text x="220" y="212" text-anchor="middle" font-size="11" fill="#64748b" font-weight="600">Output (AC)</text>
        </svg>
        <div class="diagram-caption">AC generator: A coil rotating between magnetic poles produces alternating EMF</div>
      </div>
      <p><strong>Working Principle:</strong></p>
      <p>A coil of N turns and area A rotates with angular velocity ω in a uniform magnetic field B. The flux changes continuously, inducing an EMF.</p>
      <div class="formula-box">
        <span class="formula-label">AC Generator EMF</span>
        Φ = NBA cos ωt &nbsp; (flux at time t)<br>
        EMF = -dφ/dt = NBAω sin ωt<br>
        EMF = E<sub>0</sub> sin ωt &nbsp; where E<sub>0</sub> = NBAω (peak EMF)
      </div>
      <p><strong>Key parts of an AC generator:</strong></p>
      <table class="compare-table">
        <tr><th>Part</th><th>Function</th></tr>
        <tr><td>Armature (coil)</td><td>Rectangular coil that rotates in the field</td></tr>
        <tr><td>Field magnets</td><td>Provide uniform magnetic field</td></tr>
        <tr><td>Slip rings</td><td>Rotate with the coil, maintain electrical contact</td></tr>
        <tr><td>Brushes</td><td>Fixed contacts that connect slip rings to external circuit</td></tr>
      </table>
      <p><strong>Why is the output AC (alternating)?</strong></p>
      <p>Because EMF = E<sub>0</sub> sin ωt is a sinusoidal function. It goes positive, then negative, then positive again. The current reverses direction every half cycle.</p>
      <div class="key-point"><strong>Peak EMF E<sub>0</sub> = NBAω.</strong> To increase output: increase N (more turns), B (stronger magnets), A (larger coil), or omega (rotate faster).</div>
      <div class="remember-box"><strong>Board exam favourite:</strong> "Draw a labelled diagram of an AC generator and explain its working. Derive expression for instantaneous EMF." This is one of the most important 5-mark questions from this chapter.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing AC generator with DC generator. AC generator uses <strong>slip rings</strong> (continuous rings), while DC generator uses a <strong>split-ring commutator</strong> that reverses connections every half cycle to give unidirectional output.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Energy Stored in an Inductor",
    body: `
      <p>An inductor stores energy in its <strong>magnetic field</strong>, just like a capacitor stores energy in its electric field. When current flows through an inductor, energy is stored. When the current is turned off, the inductor releases this energy.</p>
      <p>Think of an inductor like a <strong>flywheel</strong>: it takes energy to spin it up (build current), but once spinning, it keeps going and releases energy when you try to stop it.</p>
      <div class="formula-box">
        <span class="formula-label">Energy in an Inductor</span>
        U = (1/2) L I<sup>2</sup>
      </div>
      <p><strong>Derivation:</strong></p>
      <p>When current I flows through inductor L, the back EMF is epsilon = L(dI/dt).</p>
      <p>Work done against this EMF in time dt: dW = epsilon x I x dt = LI dI</p>
      <p>Total energy stored when current builds from 0 to I:</p>
      <p>U = integral from 0 to I of LI dI = (1/2)LI<sup>2</sup></p>
      <div class="formula-box">
        <span class="formula-label">Energy Density of Magnetic Field</span>
        u = B<sup>2</sup> / (2 μ₀) &nbsp; (energy per unit volume)
      </div>
      <p><strong>Comparison with Capacitor:</strong></p>
      <table class="compare-table">
        <tr><th>Property</th><th>Capacitor</th><th>Inductor</th></tr>
        <tr><td>Energy stored</td><td>U = (1/2)CV<sup>2</sup></td><td>U = (1/2)LI<sup>2</sup></td></tr>
        <tr><td>Stored in</td><td>Electric field</td><td>Magnetic field</td></tr>
        <tr><td>Energy density</td><td>u = (1/2) ε₀ E<sup>2</sup></td><td>u = B<sup>2</sup>/(2 μ₀)</td></tr>
        <tr><td>Opposes change in</td><td>Voltage</td><td>Current</td></tr>
      </table>
      <div class="key-point"><strong>LC analogy:</strong> Inductance L is analogous to mass m, and current I is analogous to velocity v. Just as KE = (1/2)mv<sup>2</sup>, the energy in an inductor = (1/2)LI<sup>2</sup>. This analogy runs very deep!</div>
      <div class="remember-box"><strong>Quick memory:</strong> Both capacitor and inductor energy formulas have the (1/2) factor. For a capacitor: (1/2)CV<sup>2</sup> or (1/2)Q<sup>2</sup>/C. For an inductor: (1/2)LI<sup>2</sup>.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting the (1/2) factor. The energy is NOT LI<sup>2</sup>, it is (1/2)LI<sup>2</sup>. This halving comes from the integration (building current from 0 to I).</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "EMF Induced in a Rotating Coil — Detailed Analysis",
    body: `
      <p>This topic combines Faraday's law with rotational mechanics. When a coil rotates in a magnetic field, we get a sinusoidally varying EMF — the basis of all AC power generation.</p>
      <p><strong>Setup:</strong> A rectangular coil (N turns, area A) rotates with angular velocity ω in a uniform field B. At time t = 0, the coil plane is perpendicular to B (θ = 0, maximum flux).</p>
      <div class="formula-box">
        <span class="formula-label">Complete Analysis</span>
        Flux: Φ = NBA cos ωt<br>
        EMF: ε = NBAω sin ωt = E<sub>0</sub> sin ωt<br>
        Current: I = I<sub>0</sub> sin ωt, where I<sub>0</sub> = E<sub>0</sub>/R<br>
        Power: P = E<sub>0</sub> I<sub>0</sub> sin²(ωt)<br>
        Average power: P_avg = (1/2) E<sub>0</sub> I<sub>0</sub> = E_rms x I_rms
      </div>
      <p><strong>Key positions during rotation:</strong></p>
      <table class="compare-table">
        <tr><th>Angle (ωt)</th><th>Flux (Φ)</th><th>EMF (ε)</th><th>Description</th></tr>
        <tr><td>0 degrees</td><td>NBA (max)</td><td>0</td><td>Coil perpendicular to B, flux is max but rate of change = 0</td></tr>
        <tr><td>90 degrees</td><td>0</td><td>E<sub>0</sub> (max)</td><td>Coil parallel to B, flux is zero but changing fastest</td></tr>
        <tr><td>180 degrees</td><td>-NBA (min)</td><td>0</td><td>Coil perpendicular again, flux reversed</td></tr>
        <tr><td>270 degrees</td><td>0</td><td>-E<sub>0</sub> (min)</td><td>Coil parallel again, EMF reversed</td></tr>
        <tr><td>360 degrees</td><td>NBA (max)</td><td>0</td><td>One complete cycle</td></tr>
      </table>
      <div class="key-point"><strong>Critical insight:</strong> EMF is maximum when flux is zero, and EMF is zero when flux is maximum. They are 90 degrees out of phase! This confuses many students — remember: EMF depends on <strong>rate of change</strong> of flux, not on flux itself.</div>
      <p><strong>Frequency and time period:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Frequency Relations</span>
        ω = 2πf = 2 pi / T<br>
        In India: f = 50 Hz, T = 0.02 s, ω = 100π rad/s
      </div>
      <div class="remember-box"><strong>Board exam tip:</strong> When asked to plot the EMF vs time graph, draw a clear sine curve. Mark E<sub>0</sub>, -E<sub>0</sub>, T/4, T/2, 3T/4, T on the axes. Label the graph properly — this earns full marks.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Writing EMF = NBAω cos ωt instead of sin ωt. It depends on the initial condition! If at t = 0 the coil is perpendicular to B (maximum flux), then EMF = E<sub>0</sub> sin ωt. If at t = 0 the coil is parallel to B (zero flux), then EMF = E<sub>0</sub> cos ωt. Read the question carefully!</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Faraday's Law — Derivation from Lorentz Force",
    body: `
      <p>We can derive the motional EMF formula from <strong>first principles</strong> using the Lorentz force on charges. This connects electromagnetic induction to the force on moving charges — a beautiful result!</p>
      <p><strong>Setup:</strong> A conducting rod of length l moves with velocity v through a uniform magnetic field B (perpendicular to both l and v).</p>
      <p><strong>Step-by-step derivation:</strong></p>
      <p>1. Each free electron in the rod has charge -e and moves with velocity v (along with the rod).</p>
      <p>2. Magnetic force on each electron: F = (-e)(v x B) = evB (directed along the length of rod).</p>
      <p>3. This force pushes electrons to one end of the rod, creating charge separation.</p>
      <p>4. Charge separation creates an electric field E<sub>internal</sub> inside the rod (opposing further charge separation).</p>
      <p>5. Equilibrium is reached when: eE<sub>internal</sub> = evB, so E<sub>internal</sub> = vB.</p>
      <p>6. EMF across the rod = E<sub>internal</sub> x l = vBl = Blv.</p>
      <div class="formula-box">
        <span class="formula-label">Motional EMF from Lorentz Force</span>
        EMF = integral of (v x B) . dl = Blv (for uniform B, perpendicular geometry)
      </div>
      <p><strong>General case — rod at angle θ with velocity:</strong></p>
      <div class="formula-box">
        <span class="formula-label">General Motional EMF</span>
        EMF = Blv sin θ
      </div>
      <p>where θ is the angle between v and l (or between v and B, depending on geometry).</p>
      <p><strong>For a rotating rod (one end fixed, rotating in B):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Rotating Rod EMF</span>
        EMF = (1/2) Bω l<sup>2</sup> = (1/2) B (2πf) l<sup>2</sup>
      </div>
      <p>This comes from integrating: each small element dx at distance x from the pivot has velocity ωx, contributing dEMF = B(ωx)dx. Integrating from 0 to l gives (1/2)Bω l<sup>2</sup>.</p>
      <div class="key-point"><strong>Important result:</strong> For a rotating rod, the EMF is equivalent to that of a disc rotating in the field (Faraday disc or homopolar generator). The EMF is constant (DC), not alternating!</div>
      <div class="remember-box"><strong>Exam alert:</strong> "A metallic rod of length l rotates about one end in a magnetic field B with angular velocity ω. Find the EMF between its ends." This numerical appears frequently. Answer: (1/2)Bω l<sup>2</sup>.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using EMF = Blv for a rotating rod. The velocity varies along the rod (v = ωx), so you must integrate. The correct answer is (1/2)Bω l<sup>2</sup>, not Bω l<sup>2</sup>.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Inductances in Series and Parallel — LC Circuits Overview",
    body: `
      <p>Just like resistors and capacitors, inductors can be combined in series and parallel. Understanding this helps in solving circuit problems.</p>
      <div class="formula-box">
        <span class="formula-label">Inductors in Series (no mutual coupling)</span>
        L<sub>total</sub> = L1 + L2 + L3 + ... (same as resistors in series)
      </div>
      <div class="formula-box">
        <span class="formula-label">Inductors in Parallel (no mutual coupling)</span>
        1/L<sub>total</sub> = 1/L1 + 1/L2 + 1/L3 + ... (same as resistors in parallel)
      </div>
      <p><strong>With mutual inductance (series connection):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Series with Mutual Inductance</span>
        Aiding (flux adds): L<sub>total</sub> = L1 + L2 + 2M<br>
        Opposing (flux opposes): L<sub>total</sub> = L1 + L2 - 2M
      </div>
      <p><strong>LC Circuit — Energy Oscillations:</strong></p>
      <p>When an inductor L and capacitor C are connected, energy oscillates between electric (in C) and magnetic (in L) forms — like a pendulum swinging between potential and kinetic energy.</p>
      <table class="compare-table">
        <tr><th>LC Circuit</th><th>Mechanical Analogy</th></tr>
        <tr><td>Charge q</td><td>Displacement x</td></tr>
        <tr><td>Current I = dq/dt</td><td>Velocity v = dx/dt</td></tr>
        <tr><td>Inductance L</td><td>Mass m</td></tr>
        <tr><td>1/C (reciprocal capacitance)</td><td>Spring constant k</td></tr>
        <tr><td>(1/2)LI<sup>2</sup> (magnetic energy)</td><td>(1/2)mv<sup>2</sup> (kinetic energy)</td></tr>
        <tr><td>(1/2)q<sup>2</sup>/C (electric energy)</td><td>(1/2)kx<sup>2</sup> (potential energy)</td></tr>
        <tr><td>ω = 1/√(LC)</td><td>ω = √(k/m)</td></tr>
      </table>
      <div class="formula-box">
        <span class="formula-label">LC Oscillation Frequency</span>
        f = 1 / (2 pi sqrt(LC)) &nbsp; and &nbsp; T = 2 pi sqrt(LC)
      </div>
      <div class="key-point"><strong>Conservation of energy in LC circuit:</strong> At any instant, (1/2)LI<sup>2</sup> + (1/2)q<sup>2</sup>/C = constant = (1/2)Q<sub>0</sub><sup>2</sup>/C, where Q<sub>0</sub> is the initial charge on the capacitor.</div>
      <div class="remember-box"><strong>Exam tip:</strong> The LC oscillation frequency formula f = 1/(2 pi sqrt(LC)) is important for the Alternating Current chapter too. Learn it here and you're prepared for both chapters!</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Electromagnetic Induction",
    body: `
      <p>Your <strong>one-page formula sheet</strong> for last-minute revision:</p>
      <p><strong>MAGNETIC FLUX:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Magnetic Flux</span>
        Φ = B·A = BA cos θ &nbsp; | &nbsp; Unit: Weber (Wb)
      </div>
      <p><strong>FARADAY'S LAW:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Faraday's Law</span>
        EMF = -dφ/dt &nbsp; | &nbsp; For N turns: EMF = -N dφ/dt
      </div>
      <p><strong>MOTIONAL EMF:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Motional EMF</span>
        Straight rod: EMF = Blv<br>
        Rotating rod: EMF = (1/2) Bω l<sup>2</sup><br>
        General: EMF = integral of (v x B) . dl
      </div>
      <p><strong>SELF-INDUCTANCE:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Self-Inductance</span>
        Φ = LI &nbsp; | &nbsp; EMF = -L(dI/dt) &nbsp; | &nbsp; Unit: Henry (H)<br>
        Solenoid: L = μ₀ n<sup>2</sup> Al = μ₀ N<sup>2</sup> A / l
      </div>
      <p><strong>MUTUAL INDUCTANCE:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Mutual Inductance</span>
        Φ₂ = MI<sub>1</sub> &nbsp; | &nbsp; EMF<sub>2</sub> = -M(dI<sub>1</sub>/dt)<br>
        Two solenoids: M = μ₀ N1 N2 A / l<br>
        General: M = k sqrt(L1 L2), &nbsp; 0 &lt;= k &lt;= 1
      </div>
      <p><strong>ENERGY:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Energy in Inductor</span>
        U = (1/2)LI<sup>2</sup> &nbsp; | &nbsp; Energy density: u = B<sup>2</sup>/(2 μ₀)
      </div>
      <p><strong>AC GENERATOR:</strong></p>
      <div class="formula-box">
        <span class="formula-label">AC Generator</span>
        EMF = NBAω sin ωt = E<sub>0</sub> sin ωt<br>
        E<sub>0</sub> = NBAω (peak EMF)<br>
        ω = 2πf = 2 pi / T
      </div>
      <p><strong>QUICK REFERENCE TABLE:</strong></p>
      <table class="compare-table">
        <tr><th>Quantity</th><th>Formula</th><th>Unit</th></tr>
        <tr><td>Magnetic flux</td><td>BA cos θ</td><td>Wb (Weber)</td></tr>
        <tr><td>Induced EMF</td><td>-N dφ/dt</td><td>V (Volt)</td></tr>
        <tr><td>Self-inductance</td><td>μ₀ n<sup>2</sup> Al</td><td>H (Henry)</td></tr>
        <tr><td>Mutual inductance</td><td>μ₀ N1 N2 A/l</td><td>H (Henry)</td></tr>
        <tr><td>Energy in inductor</td><td>(1/2)LI<sup>2</sup></td><td>J (Joule)</td></tr>
        <tr><td>Peak EMF (generator)</td><td>NBAω</td><td>V (Volt)</td></tr>
      </table>
      <div class="remember-box"><strong>Units to remember:</strong> Flux = Wb = T.m<sup>2</sup> = V.s &nbsp; | &nbsp; Inductance = H = V.s/A = Wb/A &nbsp; | &nbsp; 1 Wb = 10<sup>8</sup> maxwell (CGS)</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Common CBSE Numerical Tricks — Electromagnetic Induction",
    body: `
      <p>Master these tricks to solve numericals quickly in the exam:</p>
      <p><strong>TRICK 1: Quick EMF calculation</strong></p>
      <div class="key-point"><strong>For a rod on rails:</strong> EMF = Blv. If B = 0.5 T, l = 1 m, v = 10 m/s, then EMF = 0.5 x 1 x 10 = 5 V. Scale from here for other values!</div>

      <p><strong>TRICK 2: Flux change problems</strong></p>
      <div class="key-point"><strong>Average EMF:</strong> EMF = -N x (change in Φ) / (change in t) = -N(Φ₂ - Φ₁)/(t<sub>2</sub> - t<sub>1</sub>).<br>
      This is much simpler than differentiation — just find initial and final flux and divide by time.</div>

      <p><strong>TRICK 3: Rotating coil shortcuts</strong></p>
      <div class="key-point"><strong>When a coil is rotated from perpendicular to parallel position:</strong><br>
      phi changes from BA to 0, so change in Φ = BA.<br>
      <strong>When rotated by 180 degrees:</strong> phi changes from BA to -BA, change = 2BA.<br>
      <strong>When rotated by 360 degrees:</strong> phi returns to BA, change = 0 (no net change!).</div>

      <p><strong>TRICK 4: Inductance calculations</strong></p>
      <div class="key-point"><strong>For solenoid inductance:</strong> L = μ₀ n<sup>2</sup> Al.<br>
      Quick values: μ₀ = 4 pi x 10<sup>-7</sup> H/m.<br>
      For n = 1000 turns/m, A = 10 cm<sup>2</sup> = 10<sup>-3</sup> m<sup>2</sup>, l = 0.5 m:<br>
      L = 4 pi x 10<sup>-7</sup> x 10<sup>6</sup> x 10<sup>-3</sup> x 0.5 = 2 pi x 10<sup>-4</sup> H = 0.628 mH.</div>

      <p><strong>TRICK 5: Energy stored quick calc</strong></p>
      <div class="key-point"><strong>U = (1/2)LI<sup>2</sup>.</strong> If L = 2 H and I = 3 A, then U = (1/2)(2)(9) = 9 J.<br>
      If current doubles, energy becomes 4 times (since U is proportional to I<sup>2</sup>).</div>

      <p><strong>TRICK 6: Rotating rod EMF</strong></p>
      <div class="key-point"><strong>EMF = (1/2)Bω l<sup>2</sup>.</strong><br>
      Don't forget the (1/2) factor! If B = 0.1 T, omega = 10 rad/s, l = 1 m:<br>
      EMF = (1/2)(0.1)(10)(1) = 0.5 V.</div>

      <p><strong>TRICK 7: Mutual inductance of solenoids</strong></p>
      <div class="key-point"><strong>M = μ₀ N1 N2 A / l.</strong> Always use the area of the <strong>inner</strong> solenoid.<br>
      Note: M = sqrt(L1 x L2) only when k = 1 (perfect coupling).</div>

      <p><strong>TRICK 8: Charge flowed due to change in flux</strong></p>
      <div class="key-point"><strong>Q = N x (change in Φ) / R = N(Φ₁ - Φ₂)/R.</strong><br>
      This comes from Q = integral of I dt = integral of (EMF/R) dt = N(ΔΦ)/R.<br>
      Note: Q does NOT depend on how fast the change happens — only on the total change!</div>

      <div class="remember-box"><strong>Golden rule:</strong> Always write the formula, substitute with units, then calculate. In CBSE boards, you get marks for each step even if the final answer is wrong.</div>
      <div class="mistake-box"><strong>Unit trap:</strong> Watch out for cm<sup>2</sup> vs m<sup>2</sup> and mH vs H. 1 cm<sup>2</sup> = 10<sup>-4</sup> m<sup>2</sup>. 1 mH = 10<sup>-3</sup> H. Always convert to SI before substituting!</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam Most Asked Questions — Electromagnetic Induction",
    body: `
      <p>Based on past 10+ years of CBSE board papers, here are the most frequently asked questions from Chapter 6:</p>

      <p><strong>GUARANTEED 5-MARK QUESTIONS (appear almost every year):</strong></p>
      <div class="key-point"><strong>Q1:</strong> State Faraday's laws of electromagnetic induction. Derive expression for motional EMF of a straight conductor moving in a uniform magnetic field.<br>
      <strong>Q2:</strong> Draw a labelled diagram of an AC generator. Explain its working and derive expression for instantaneous EMF.<br>
      <strong>Q3:</strong> Define self-inductance. Derive expression for self-inductance of a long solenoid of length l, cross-sectional area A, having N turns.</div>

      <p><strong>COMMON 3-MARK QUESTIONS:</strong></p>
      <div class="key-point"><strong>Q4:</strong> Define mutual inductance. Derive expression for mutual inductance of two long coaxial solenoids.<br>
      <strong>Q5:</strong> State Lenz's law. Show that it is consistent with the law of conservation of energy.<br>
      <strong>Q6:</strong> A metallic rod of length l is rotated with angular frequency omega, with one end hinged at the centre. A uniform magnetic field B exists perpendicular to the plane of rotation. Derive expression for EMF induced.</div>

      <p><strong>COMMON 2-MARK QUESTIONS:</strong></p>
      <div class="key-point"><strong>Q7:</strong> Define magnetic flux. Write its SI unit. What is the condition for maximum and minimum flux through a surface?<br>
      <strong>Q8:</strong> What are eddy currents? List two applications and two methods to minimize them.<br>
      <strong>Q9:</strong> Define the coefficient of self-inductance. Write its SI unit. Why is an inductor called the electrical analogue of mass?<br>
      <strong>Q10:</strong> Derive expression for energy stored in an inductor carrying current I.</div>

      <p><strong>COMMON 1-MARK / MCQ QUESTIONS:</strong></p>
      <div class="key-point"><strong>Q11:</strong> State Lenz's law.<br>
      <strong>Q12:</strong> What is the SI unit of magnetic flux?<br>
      <strong>Q13:</strong> An inductor of inductance L carries current I. What is the energy stored?<br>
      <strong>Q14:</strong> Why is the core of a transformer laminated?<br>
      <strong>Q15:</strong> What is the peak EMF of an AC generator with N turns, area A, field B, rotating with angular velocity ω?</div>

      <p><strong>ANSWERING STRATEGY:</strong></p>
      <table class="compare-table">
        <tr><th>Marks</th><th>What to include</th><th>Time</th></tr>
        <tr><td>1 mark</td><td>Direct definition or formula</td><td>1-2 min</td></tr>
        <tr><td>2 marks</td><td>Definition + formula + SI unit + 1-2 lines</td><td>3-4 min</td></tr>
        <tr><td>3 marks</td><td>Statement + derivation with diagram</td><td>5-7 min</td></tr>
        <tr><td>5 marks</td><td>Full derivation + labelled diagram + conclusion</td><td>10-12 min</td></tr>
      </table>

      <div class="remember-box"><strong>Scoring tips for this chapter:</strong><br>
      1. Always draw a neat, labelled diagram for AC generator and motional EMF questions.<br>
      2. For Lenz's law questions, explain with an example (magnet approaching a coil).<br>
      3. When deriving self/mutual inductance, clearly state which formula for B you're using (B = μ₀ nI for solenoid).<br>
      4. For numerical problems, box your final answer and include units.<br>
      5. Mention the negative sign in Faraday's law and explain it represents Lenz's law.</div>

      <div class="mistake-box"><strong>Why students lose marks in this chapter:</strong><br>
      1. Forgetting the negative sign in EMF = -N dφ/dt (costs 1/2 mark).<br>
      2. Not mentioning Lenz's law when explaining the negative sign.<br>
      3. In AC generator derivation, forgetting to mention slip rings and brushes.<br>
      4. Confusing N (total turns) with n (turns per unit length) in inductance formulas.<br>
      5. In motional EMF problems, not specifying the direction of induced current.</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Faraday's Laws — Complete Breakdown with Solved Examples",
    body: `
      <p><strong>Faraday's Two Laws</strong> form the foundation of electromagnetic induction. Every numerical in this chapter starts here.</p>

      <p><strong>First Law:</strong> Whenever the magnetic flux linked with a circuit changes, an EMF is induced in the circuit. The induced EMF lasts as long as the change in flux continues.</p>

      <p><strong>Second Law:</strong> The magnitude of the induced EMF is equal to the rate of change of magnetic flux linkage.</p>

      <div class="formula-box">
        <span class="formula-label">Faraday's Law (Combined)</span>
        EMF = -N x dφ/dt<br>
        For average EMF: |EMF| = N x |ΔΦ| / Δt = N x |Φ₂ - Φ₁| / (t<sub>2</sub> - t<sub>1</sub>)
      </div>

      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Bar magnet -->
          <rect x="30" y="65" width="100" height="50" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <rect x="30" y="65" width="50" height="50" fill="#fee2e2" rx="0"/>
          <rect x="80" y="65" width="50" height="50" fill="#dbeafe" rx="0"/>
          <text x="55" y="96" text-anchor="middle" font-size="18" font-weight="700" fill="#dc2626">N</text>
          <text x="105" y="96" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">S</text>
          <!-- Motion arrow -->
          <line x1="140" y1="90" x2="185" y2="90" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="185,83 200,90 185,97" fill="#f59e0b"/>
          <text x="165" y="78" font-size="12" font-weight="700" fill="#f59e0b">v</text>
          <!-- Coil -->
          <ellipse cx="240" cy="90" rx="35" ry="60" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <ellipse cx="255" cy="90" rx="35" ry="60" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/>
          <text x="248" y="165" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="600">Coil (N turns)</text>
          <!-- Flux lines from magnet through coil -->
          <path d="M 130,75 C 170,60 200,60 235,70" fill="none" stroke="#22c55e" stroke-width="1.5"/>
          <path d="M 130,90 C 170,85 200,85 235,88" fill="none" stroke="#22c55e" stroke-width="1.5"/>
          <path d="M 130,105 C 170,115 200,115 235,110" fill="none" stroke="#22c55e" stroke-width="1.5"/>
          <text x="180" y="55" font-size="11" fill="#22c55e" font-weight="600">Flux increasing</text>
          <!-- Galvanometer -->
          <line x1="240" y1="30" x2="350" y2="30" stroke="#64748b" stroke-width="2"/>
          <line x1="350" y1="30" x2="350" y2="60" stroke="#64748b" stroke-width="2"/>
          <circle cx="350" cy="75" r="15" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="350" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#f59e0b">G</text>
          <line x1="350" y1="90" x2="350" y2="120" stroke="#64748b" stroke-width="2"/>
          <line x1="350" y1="120" x2="255" y2="120" stroke="#64748b" stroke-width="2"/>
          <!-- Label -->
          <text x="390" y="78" font-size="10" fill="#64748b">deflects!</text>
        </svg>
        <div class="diagram-caption">Bar magnet approaching a coil: flux increases, EMF is induced, galvanometer deflects</div>
      </div>

      <p><strong>Solved Problem 1:</strong></p>
      <div class="key-point">
        <strong>Q:</strong> The magnetic flux through a coil changes from 5 Wb to 2 Wb in 0.1 s. Find the induced EMF.<br><br>
        <strong>Solution:</strong><br>
        Given: Φ₁ = 5 Wb, Φ₂ = 2 Wb, Δt = 0.1 s, N = 1<br>
        EMF = -N x (Φ₂ - Φ₁) / Δt<br>
        EMF = -1 x (2 - 5) / 0.1<br>
        EMF = -(-3) / 0.1 = <strong>30 V</strong>
      </div>

      <p><strong>Solved Problem 2:</strong></p>
      <div class="key-point">
        <strong>Q:</strong> A coil of 200 turns, each of area 0.1 m<sup>2</sup>, is placed in a magnetic field. The field changes from 0.5 T to 0 in 0.01 s. Find the induced EMF.<br><br>
        <strong>Solution:</strong><br>
        Given: N = 200, A = 0.1 m<sup>2</sup>, B<sub>1</sub> = 0.5 T, B<sub>2</sub> = 0, Δt = 0.01 s<br>
        Φ₁ = B<sub>1</sub> x A = 0.5 x 0.1 = 0.05 Wb<br>
        Φ₂ = B<sub>2</sub> x A = 0 x 0.1 = 0 Wb<br>
        EMF = -N x (Φ₂ - Φ₁) / Δt<br>
        EMF = -200 x (0 - 0.05) / 0.01<br>
        EMF = -200 x (-0.05) / 0.01 = <strong>1000 V</strong>
      </div>

      <div class="remember-box"><strong>Exam tip:</strong> Always find ΔΦ first (Φ₂ - Φ₁), then divide by Δt. Don't skip steps. Write: "Change in flux = ..., Time interval = ..., Therefore EMF = ..." This earns full marks even if you make arithmetic errors.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting to multiply by N. If the coil has 200 turns, the total flux linkage is NΦ, not just phi. Missing N means your answer is 200 times too small!</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Lenz's Law — The Direction Rule with Practice Scenarios",
    body: `
      <p><strong>Lenz's Law</strong> answers the most important question: <em>which direction does the induced current flow?</em></p>

      <p><strong>Statement:</strong> The direction of the induced current is such that it <strong>opposes the cause</strong> (change in flux) that produces it.</p>

      <p><strong>Why?</strong> Conservation of energy. If the induced current aided the change, you'd get infinite energy from nothing - violating energy conservation.</p>

      <div class="diagram-container">
        <svg width="440" height="240" viewBox="0 0 440 240">
          <!-- Scenario 1: N-pole approaching -->
          <text x="110" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">N-pole approaching</text>
          <!-- Magnet -->
          <rect x="15" y="40" width="70" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="50" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">N</text>
          <!-- Motion arrow -->
          <line x1="90" y1="60" x2="120" y2="60" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="120,54 133,60 120,66" fill="#f59e0b"/>
          <!-- Coil as circle (face view) -->
          <circle cx="160" cy="60" r="30" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <!-- CCW current arrow on coil -->
          <path d="M 160,30 A 30,30 0 0,0 130,60" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
          <polygon points="128,54 125,65 136,58" fill="#7c3aed"/>
          <text x="165" y="62" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="600">CCW</text>
          <!-- Induced pole label -->
          <text x="160" y="100" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="600">Acts as N-pole</text>
          <text x="160" y="113" text-anchor="middle" font-size="10" fill="#64748b">(repels magnet)</text>

          <!-- Scenario 2: N-pole receding -->
          <text x="340" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">N-pole receding</text>
          <!-- Magnet moving away -->
          <rect x="350" y="40" width="70" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="385" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">N</text>
          <line x1="370" y1="60" x2="400" y2="60" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="400,54 413,60 400,66" fill="#f59e0b"/>
          <!-- Coil -->
          <circle cx="320" cy="60" r="30" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <!-- CW current arrow -->
          <path d="M 320,30 A 30,30 0 0,1 350,60" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
          <polygon points="352,54 355,65 344,58" fill="#7c3aed"/>
          <text x="320" y="62" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="600">CW</text>
          <text x="320" y="100" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="600">Acts as S-pole</text>
          <text x="320" y="113" text-anchor="middle" font-size="10" fill="#64748b">(attracts magnet)</text>

          <!-- Scenario 3: S-pole approaching -->
          <text x="110" y="143" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">S-pole approaching</text>
          <rect x="15" y="160" width="70" height="40" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="50" y="186" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">S</text>
          <line x1="90" y1="180" x2="120" y2="180" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="120,174 133,180 120,186" fill="#f59e0b"/>
          <circle cx="160" cy="180" r="30" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <path d="M 160,150 A 30,30 0 0,1 190,180" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
          <polygon points="192,174 195,185 184,178" fill="#7c3aed"/>
          <text x="160" y="182" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="600">CW</text>
          <text x="160" y="220" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="600">Acts as S-pole</text>
          <text x="160" y="233" text-anchor="middle" font-size="10" fill="#64748b">(repels magnet)</text>

          <!-- Scenario 4: S-pole receding -->
          <text x="340" y="143" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">S-pole receding</text>
          <rect x="350" y="160" width="70" height="40" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="385" y="186" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">S</text>
          <line x1="370" y1="180" x2="400" y2="180" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="400,174 413,180 400,186" fill="#f59e0b"/>
          <circle cx="320" cy="180" r="30" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
          <path d="M 320,150 A 30,30 0 0,0 290,180" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
          <polygon points="288,174 285,185 296,178" fill="#7c3aed"/>
          <text x="320" y="182" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="600">CCW</text>
          <text x="320" y="220" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="600">Acts as N-pole</text>
          <text x="320" y="233" text-anchor="middle" font-size="10" fill="#64748b">(attracts magnet)</text>
        </svg>
        <div class="diagram-caption">All four Lenz's Law scenarios: the coil face always opposes the change</div>
      </div>

      <p><strong>Practice Scenario 1:</strong></p>
      <div class="key-point">
        <strong>Q:</strong> A N-pole is pushed toward a coil. What is the direction of induced current (as seen from the magnet side)?<br>
        <strong>A:</strong> Flux through the coil is increasing (N-pole approaching). By Lenz's law, induced current opposes the increase, so it creates a N-pole facing the magnet (to repel it). Using the right-hand rule: current flows <strong>anticlockwise</strong> as seen from the magnet side.
      </div>

      <p><strong>Practice Scenario 2:</strong></p>
      <div class="key-point">
        <strong>Q:</strong> A S-pole is pulled away from a coil. What happens?<br>
        <strong>A:</strong> Flux was directed into the coil (from S-pole). Pulling away means flux is decreasing. By Lenz's law, induced current opposes the decrease, so it creates a S-pole on the side facing the magnet (to attract it and resist withdrawal). Using the right-hand rule: current flows <strong>clockwise</strong> as seen from the magnet side, i.e. <strong>anticlockwise</strong> as seen from the far side.
      </div>

      <div class="remember-box"><strong>Quick trick:</strong> "Approach = Repel, Recede = Attract." The coil always tries to maintain the status quo. Then use the right-hand rule: curl fingers in the direction of current, thumb points toward the N-pole of the coil.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Saying the induced current "opposes the flux." WRONG! It opposes the <strong>change</strong> in flux. If flux is increasing, it opposes the increase. If flux is decreasing, it opposes the decrease (i.e., it supports the existing flux).</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Motional EMF — Rod on Rails with Solved Numericals",
    body: `
      <p>Motional EMF is the <strong>most common numerical topic</strong> in CBSE board exams from this chapter. Master the rod-on-rails setup and you can solve 80% of the problems.</p>

      <p><strong>Setup:</strong> A conducting rod of length l slides with velocity v on two parallel rails, connected by resistance R, in a uniform magnetic field B perpendicular to the plane of the rails.</p>

      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <!-- Rails -->
          <line x1="50" y1="40" x2="400" y2="40" stroke="#64748b" stroke-width="2.5"/>
          <line x1="50" y1="170" x2="400" y2="170" stroke="#64748b" stroke-width="2.5"/>
          <!-- Resistor on left -->
          <line x1="50" y1="40" x2="50" y2="75" stroke="#64748b" stroke-width="2.5"/>
          <path d="M 50,75 L 40,80 L 60,90 L 40,100 L 60,110 L 40,120 L 50,125" fill="none" stroke="#64748b" stroke-width="2.5"/>
          <line x1="50" y1="125" x2="50" y2="170" stroke="#64748b" stroke-width="2.5"/>
          <text x="25" y="103" font-size="14" font-weight="700" fill="#64748b">R</text>
          <!-- Rod -->
          <line x1="260" y1="32" x2="260" y2="178" stroke="#2563eb" stroke-width="5"/>
          <circle cx="260" cy="40" r="5" fill="#2563eb"/>
          <circle cx="260" cy="170" r="5" fill="#2563eb"/>
          <text x="270" y="25" font-size="13" font-weight="700" fill="#2563eb">Rod</text>
          <!-- Length label -->
          <line x1="280" y1="45" x2="280" y2="165" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="295" y="110" font-size="13" font-weight="700" fill="#2563eb">l</text>
          <!-- Velocity arrow -->
          <line x1="270" y1="105" x2="330" y2="105" stroke="#f59e0b" stroke-width="3"/>
          <polygon points="330,98 345,105 330,112" fill="#f59e0b"/>
          <text x="310" y="93" font-size="14" font-weight="700" fill="#f59e0b">v</text>
          <!-- B field crosses (into page) -->
          <text x="100" y="80" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="150" y="80" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="200" y="80" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="100" y="120" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="150" y="120" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="200" y="120" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="100" y="160" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="150" y="160" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="200" y="160" font-size="18" fill="#22c55e" font-weight="700">x</text>
          <text x="350" y="190" font-size="12" fill="#22c55e" font-weight="600">B (into page)</text>
          <!-- Current direction (anticlockwise) -->
          <line x1="260" y1="40" x2="80" y2="40" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="90,35 75,40 90,45" fill="#7c3aed"/>
          <text x="170" y="35" font-size="11" fill="#7c3aed" font-weight="600">I (induced)</text>
          <!-- Area swept label -->
          <rect x="260" y="40" width="60" height="130" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="290" y="200" text-anchor="middle" font-size="10" fill="#f59e0b">dA = l.v.dt</text>
        </svg>
        <div class="diagram-caption">Rod sliding on rails: area increases, flux changes, EMF = Blv is induced</div>
      </div>

      <p><strong>Key Derivation:</strong></p>
      <p>Area of circuit at time t: A = l x (x<sub>0</sub> + vt)</p>
      <p>Flux: Φ = BA = Bl(x<sub>0</sub> + vt)</p>
      <p>EMF = -dφ/dt = -Bl(v) = <strong>Blv</strong></p>

      <div class="formula-box">
        <span class="formula-label">Motional EMF — All Formulas</span>
        EMF = Blv<br>
        Current: I = Blv / R<br>
        Force on rod (by field): F = BIl = B<sup>2</sup> l<sup>2</sup> v / R<br>
        Power dissipated: P = I<sup>2</sup> R = B<sup>2</sup> l<sup>2</sup> v<sup>2</sup> / R<br>
        Mechanical power input: P = Fv = B<sup>2</sup> l<sup>2</sup> v<sup>2</sup> / R (same!)
      </div>

      <p><strong>Solved Problem:</strong></p>
      <div class="key-point">
        <strong>Q:</strong> A rod of length 50 cm moves at 4 m/s in a magnetic field B = 0.5 T perpendicular to the rod and its velocity. The rod is connected to a circuit of resistance R = 2 ohm. Find (i) EMF, (ii) current, (iii) force required to maintain the velocity, (iv) power dissipated.<br><br>
        <strong>Solution:</strong><br>
        Given: l = 50 cm = 0.5 m, v = 4 m/s, B = 0.5 T, R = 2 ohm<br><br>
        (i) EMF = Blv = 0.5 x 0.5 x 4 = <strong>1.0 V</strong><br><br>
        (ii) I = EMF / R = 1.0 / 2 = <strong>0.5 A</strong><br><br>
        (iii) Force = BIl = 0.5 x 0.5 x 0.5 = <strong>0.125 N</strong><br>
        (This is the retarding force by the magnetic field. You must apply an equal external force to maintain constant velocity.)<br><br>
        (iv) Power dissipated = I<sup>2</sup> R = (0.5)<sup>2</sup> x 2 = <strong>0.5 W</strong><br>
        Check: Mechanical power = F x v = 0.125 x 4 = 0.5 W (matches!)
      </div>

      <p><strong>Energy Conservation:</strong> The mechanical energy you supply by pushing the rod is entirely converted to electrical energy dissipated as heat in the resistance. This is a perfect example of energy conservation in electromagnetic induction.</p>

      <p><strong>Previous Year CBSE Pattern:</strong></p>
      <div class="key-point">
        <strong>Typical variations:</strong><br>
        - Rod on rails in horizontal/vertical plane<br>
        - Find EMF, current, force, or power<br>
        - Sometimes rod has its own resistance r: use (R + r) in all formulas<br>
        - Sometimes two resistances in parallel across the rails
      </div>

      <div class="remember-box"><strong>Exam strategy:</strong> For any motional EMF problem: Step 1 - Find EMF = Blv. Step 2 - Find I = EMF/R. Step 3 - Find whatever else is asked (F = BIl, P = I<sup>2</sup>R, etc). Always check energy conservation at the end!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using EMF = Blv when the rod moves parallel to the field or parallel to its own length. EMF = Blv only when v, B, and l are mutually perpendicular. If the rod moves along B, the EMF is zero!</div>
    `
  },
  {
    id: 19, level: "exam",
    title: "Self-Inductance and Mutual Inductance — Exam-Ready Summary",
    body: `
      <p>Inductance questions appear in nearly every CBSE board exam, either as derivation (3-5 marks) or as numericals (2-3 marks). Here's everything you need.</p>

      <p><strong>Self-Inductance (L):</strong> A coil opposes the change in its own current.</p>
      <div class="formula-box">
        <span class="formula-label">Self-Inductance Formulas</span>
        Flux linkage: N x Φ = LI<br>
        Induced EMF: EMF = -L(dI/dt)<br>
        L of solenoid: L = μ₀ n<sup>2</sup> Al = μ₀ N<sup>2</sup> A / l<br>
        Energy stored: U = (1/2)LI<sup>2</sup><br>
        SI Unit: Henry (H) = Wb/A = V.s/A
      </div>

      <div class="diagram-container">
        <svg width="440" height="180" viewBox="0 0 440 180">
          <!-- Solenoid -->
          <rect x="100" y="30" width="240" height="100" rx="10" fill="#dbeafe" fill-opacity="0.15" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
          <!-- Turns -->
          <ellipse cx="130" cy="80" rx="15" ry="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="165" cy="80" rx="15" ry="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="200" cy="80" rx="15" ry="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="235" cy="80" rx="15" ry="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="270" cy="80" rx="15" ry="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="305" cy="80" rx="15" ry="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <!-- Labels -->
          <text x="220" y="80" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="600">N turns total</text>
          <!-- Length arrow -->
          <line x1="100" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="100" y1="145" x2="100" y2="155" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="340" y1="145" x2="340" y2="155" stroke="#1e293b" stroke-width="1.5"/>
          <text x="220" y="165" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b">l (length)</text>
          <!-- Area label -->
          <text x="60" y="80" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b">A</text>
          <line x1="70" y1="75" x2="95" y2="75" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
          <!-- Current -->
          <line x1="340" y1="80" x2="400" y2="80" stroke="#f59e0b" stroke-width="2.5"/>
          <polygon points="395,74 410,80 395,86" fill="#f59e0b"/>
          <text x="410" y="75" font-size="13" font-weight="700" fill="#f59e0b">I</text>
          <!-- B field inside -->
          <line x1="140" y1="80" x2="290" y2="80" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="6,3"/>
          <polygon points="285,75 298,80 285,85" fill="#22c55e"/>
          <text x="215" y="100" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="600">B = μ₀ nI</text>
        </svg>
        <div class="diagram-caption">Solenoid with N turns, length l, area A: L = μ₀ n<sup>2</sup> Al</div>
      </div>

      <p><strong>Mutual Inductance (M):</strong> Changing current in one coil induces EMF in a neighbouring coil.</p>
      <div class="formula-box">
        <span class="formula-label">Mutual Inductance Formulas</span>
        Flux through coil 2: N<sub>2</sub> Φ₂ = M I<sub>1</sub><br>
        Induced EMF in coil 2: EMF<sub>2</sub> = -M(dI<sub>1</sub>/dt)<br>
        M of two coaxial solenoids: M = μ₀ N_1 N<sub>2</sub> A / l<br>
        Relation: M = k sqrt(L<sub>1</sub> x L<sub>2</sub>), where 0 &lt;= k &lt;= 1<br>
        SI Unit: Henry (H)
      </div>

      <p><strong>Comparison Table: Self-Inductance vs Mutual Inductance</strong></p>
      <table class="compare-table">
        <tr><th>Property</th><th>Self-Inductance (L)</th><th>Mutual Inductance (M)</th></tr>
        <tr><td>Definition</td><td>EMF induced in a coil due to change in its OWN current</td><td>EMF induced in one coil due to change in current in ANOTHER coil</td></tr>
        <tr><td>Formula</td><td>EMF = -L(dI/dt)</td><td>EMF<sub>2</sub> = -M(dI<sub>1</sub>/dt)</td></tr>
        <tr><td>Depends on</td><td>Geometry of one coil + core material</td><td>Geometry of both coils + separation + core</td></tr>
        <tr><td>For solenoid</td><td>L = μ₀ N<sup>2</sup> A / l</td><td>M = μ₀ N_1 N<sub>2</sub> A / l</td></tr>
        <tr><td>Application</td><td>Choke coil, tuning circuits</td><td>Transformer, wireless charging</td></tr>
        <tr><td>Analogy</td><td>Inertia of a single object</td><td>Collision/interaction between two objects</td></tr>
      </table>

      <p><strong>Solved Problem 1 (Self-Inductance):</strong></p>
      <div class="key-point">
        <strong>Q:</strong> A solenoid has 1000 turns, length 50 cm, and cross-section area 10 cm<sup>2</sup>. Find its self-inductance.<br><br>
        <strong>Solution:</strong><br>
        N = 1000, l = 0.5 m, A = 10 cm<sup>2</sup> = 10 x 10<sup>-4</sup> m<sup>2</sup> = 10<sup>-3</sup> m<sup>2</sup><br>
        L = μ₀ N<sup>2</sup> A / l = (4 pi x 10<sup>-7</sup>) x (1000)<sup>2</sup> x 10<sup>-3</sup> / 0.5<br>
        L = 4 pi x 10<sup>-7</sup> x 10<sup>6</sup> x 10<sup>-3</sup> / 0.5<br>
        L = 4 pi x 10<sup>-4</sup> / 0.5 = 8 pi x 10<sup>-4</sup><br>
        L = <strong>2.51 x 10<sup>-3</sup> H = 2.51 mH</strong>
      </div>

      <p><strong>Solved Problem 2 (Energy):</strong></p>
      <div class="key-point">
        <strong>Q:</strong> An inductor of 5 H carries a steady current of 2 A. What is the energy stored? If the current is reduced to zero in 0.1 s, find the average EMF induced.<br><br>
        <strong>Solution:</strong><br>
        U = (1/2)LI<sup>2</sup> = (1/2) x 5 x (2)<sup>2</sup> = <strong>10 J</strong><br><br>
        Average EMF = L x (Delta I / Δt) = 5 x (2 - 0) / 0.1 = <strong>100 V</strong>
      </div>

      <div class="remember-box"><strong>Key derivation steps for solenoid L:</strong> (1) B inside solenoid = μ₀ nI. (2) Flux through one turn = BA = μ₀ nIA. (3) Total flux linkage = NΦ = N x μ₀ nIA = μ₀ n<sup>2</sup> AlI. (4) Compare with NΦ = LI to get L = μ₀ n<sup>2</sup> Al.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> In M = μ₀ N_1 N<sub>2</sub> A / l, always use the area of the INNER solenoid (smaller one). The outer solenoid's area does not matter because the inner solenoid's flux is what links both coils.</div>
    `
  },
  {
    id: 20, level: "exam",
    title: "AC Generator — Construction, Working, Diagram & Numerical",
    body: `
      <p>The AC generator is the <strong>single most important 5-mark question</strong> from this chapter. It combines construction, working principle, diagram, and derivation all in one question.</p>

      <p><strong>Principle:</strong> Based on Faraday's law. When a coil rotates in a magnetic field, the magnetic flux through it changes continuously, inducing an alternating EMF.</p>

      <p><strong>Construction (4 essential parts):</strong></p>
      <table class="compare-table">
        <tr><th>Part</th><th>Material</th><th>Function</th></tr>
        <tr><td><strong>Armature coil</strong></td><td>Insulated copper wire on soft iron core</td><td>Rectangular coil (N turns, area A) that rotates in the field</td></tr>
        <tr><td><strong>Field magnets</strong></td><td>Strong permanent magnets or electromagnets</td><td>Provide uniform magnetic field B</td></tr>
        <tr><td><strong>Slip rings</strong></td><td>Two metallic rings (R1, R2)</td><td>Rotate with the coil, maintain continuous contact</td></tr>
        <tr><td><strong>Brushes</strong></td><td>Carbon or metal</td><td>Fixed contacts pressing against slip rings, connect to external circuit</td></tr>
      </table>

      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <!-- Magnet poles -->
          <rect x="20" y="30" width="55" height="130" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="47" y="100" text-anchor="middle" font-size="22" font-weight="700" fill="#dc2626">N</text>
          <rect x="365" y="30" width="55" height="130" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="393" y="100" text-anchor="middle" font-size="22" font-weight="700" fill="#2563eb">S</text>
          <!-- B field -->
          <line x1="80" y1="95" x2="360" y2="95" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="6,4"/>
          <polygon points="355,90 368,95 355,100" fill="#22c55e"/>
          <text x="220" y="85" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="600">B</text>
          <!-- Rotating coil (ABCD) -->
          <rect x="140" y="40" width="160" height="120" rx="0" fill="#fef3c7" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2.5"/>
          <text x="140" y="38" font-size="11" font-weight="700" fill="#f59e0b">A</text>
          <text x="300" y="38" font-size="11" font-weight="700" fill="#f59e0b">B</text>
          <text x="300" y="172" font-size="11" font-weight="700" fill="#f59e0b">C</text>
          <text x="140" y="172" font-size="11" font-weight="700" fill="#f59e0b">D</text>
          <text x="220" y="105" text-anchor="middle" font-size="11" font-weight="600" fill="#f59e0b">Coil ABCD</text>
          <!-- Rotation arrow -->
          <path d="M 215,30 A 20,20 0 0,1 235,38" fill="none" stroke="#7c3aed" stroke-width="2"/>
          <polygon points="237,33 242,43 230,40" fill="#7c3aed"/>
          <text x="248" y="30" font-size="11" font-weight="700" fill="#7c3aed">ω</text>
          <!-- Axle -->
          <line x1="220" y1="160" x2="220" y2="190" stroke="#64748b" stroke-width="3"/>
          <!-- Slip rings -->
          <rect x="195" y="190" width="20" height="12" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
          <text x="205" y="199" text-anchor="middle" font-size="8" font-weight="700" fill="#64748b">R1</text>
          <rect x="225" y="190" width="20" height="12" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
          <text x="235" y="199" text-anchor="middle" font-size="8" font-weight="700" fill="#64748b">R2</text>
          <!-- Brushes -->
          <rect x="190" y="208" width="30" height="8" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
          <text x="205" y="228" text-anchor="middle" font-size="9" fill="#475569" font-weight="600">B1</text>
          <rect x="220" y="208" width="30" height="8" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
          <text x="235" y="228" text-anchor="middle" font-size="9" fill="#475569" font-weight="600">B2</text>
          <!-- External circuit -->
          <line x1="205" y1="216" x2="205" y2="245" stroke="#64748b" stroke-width="2"/>
          <line x1="235" y1="216" x2="235" y2="245" stroke="#64748b" stroke-width="2"/>
          <line x1="205" y1="245" x2="210" y2="245" stroke="#64748b" stroke-width="2"/>
          <path d="M 210,245 L 212,238 L 216,252 L 220,238 L 224,252 L 228,238 L 230,245" fill="none" stroke="#64748b" stroke-width="2"/>
          <line x1="230" y1="245" x2="235" y2="245" stroke="#64748b" stroke-width="2"/>
          <text x="220" y="258" text-anchor="middle" font-size="9" fill="#64748b" font-weight="600">Load R</text>
        </svg>
        <div class="diagram-caption">AC Generator: Coil ABCD rotates between N and S poles, EMF delivered through slip rings and brushes</div>
      </div>

      <p><strong>Working & Derivation:</strong></p>
      <p>At time t, the coil has rotated by angle θ = omega t from the perpendicular position.</p>
      <p>Flux through the coil: Φ = NBA cos ωt</p>
      <p>By Faraday's law:</p>
      <div class="formula-box">
        <span class="formula-label">AC Generator EMF</span>
        EMF = -dφ/dt = -d/dt [NBA cos ωt]<br>
        EMF = NBAω sin ωt<br>
        EMF = E<sub>0</sub> sin ωt<br>
        where E<sub>0</sub> = NBAω = peak (maximum) EMF
      </div>

      <p><strong>Key positions in one rotation:</strong></p>
      <table class="compare-table">
        <tr><th>Position</th><th>θ</th><th>Flux</th><th>EMF</th><th>What happens</th></tr>
        <tr><td>Perpendicular to B</td><td>0</td><td>NBA (max)</td><td>0</td><td>Flux is max but not changing</td></tr>
        <tr><td>Parallel to B</td><td>90</td><td>0</td><td>E<sub>0</sub> (max)</td><td>Flux changing fastest</td></tr>
        <tr><td>Perpendicular (flipped)</td><td>180</td><td>-NBA</td><td>0</td><td>Flux is max (reversed)</td></tr>
        <tr><td>Parallel (other side)</td><td>270</td><td>0</td><td>-E<sub>0</sub></td><td>EMF reverses</td></tr>
        <tr><td>Back to start</td><td>360</td><td>NBA</td><td>0</td><td>One cycle complete</td></tr>
      </table>

      <p><strong>Solved Numerical:</strong></p>
      <div class="key-point">
        <strong>Q:</strong> An AC generator has a coil of 100 turns, each of area 0.5 m<sup>2</sup>. The coil rotates at 60 revolutions per second in a magnetic field of 0.2 T. Find (i) maximum EMF and (ii) instantaneous EMF when the coil makes 30 degrees with the field.<br><br>
        <strong>Solution:</strong><br>
        N = 100, A = 0.5 m<sup>2</sup>, f = 60 Hz, B = 0.2 T<br>
        ω = 2πf = 2 pi x 60 = 120 pi rad/s<br><br>
        (i) E<sub>0</sub> = NBAω = 100 x 0.2 x 0.5 x 120 pi<br>
        E<sub>0</sub> = 100 x 0.2 x 0.5 x 120 x 3.14 = <strong>3768 V (approx 3770 V)</strong><br><br>
        (ii) When coil makes 30 degrees with B, the angle between normal and B is 90 - 30 = 60 degrees.<br>
        So omega t = 60 degrees.<br>
        EMF = E<sub>0</sub> sin(60) = 3768 x (sqrt(3)/2) = 3768 x 0.866 = <strong>3263 V (approx 3260 V)</strong>
      </div>

      <p><strong>AC vs DC Generator:</strong></p>
      <div class="key-point">
        The ONLY difference: AC generator uses <strong>slip rings</strong> (two complete rings). DC generator uses a <strong>split-ring commutator</strong> (one ring split into two halves). The commutator reverses the connection every half cycle, converting AC to pulsating DC.
      </div>

      <div class="remember-box"><strong>Board exam tip:</strong> For the 5-mark question, write in this order: (1) Principle (1/2 mark), (2) Labelled diagram (1.5 marks), (3) Construction with 4 parts (1 mark), (4) Working + derivation of EMF = E<sub>0</sub> sin ωt (2 marks). Always mention "slip rings" — this distinguishes AC from DC generator.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Writing EMF = NBAω cos ωt. Whether it's sin or cos depends on the initial position. If the coil starts perpendicular to B (standard CBSE assumption), flux = NBA cos ωt and EMF = NBAω sin ωt. Read the question to check the starting position!</div>
    `
  }
];
