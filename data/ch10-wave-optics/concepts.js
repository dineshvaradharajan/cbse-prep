// Wave Optics — Concepts
const ch10Concepts = [
  {
    id: 1, level: "basic",
    title: "Huygens Principle — Wave Theory of Light",
    body: `
      <p><strong>Christiaan Huygens</strong> proposed that light travels as a <strong>wave</strong>, not as particles. His principle gives us a beautiful geometric way to predict how wavefronts move.</p>
      <div class="key-point"><strong>Huygens Principle (two parts):</strong><br>
        1. Every point on a wavefront acts as a source of new <strong>secondary wavelets</strong> that spread out in all directions at the speed of light in that medium.<br>
        2. The new wavefront at any later time is the <strong>forward envelope</strong> (common tangent) of all these secondary wavelets.
      </div>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <defs>
            <marker id="arrowWO1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Old wavefront -->
          <line x1="120" y1="30" x2="120" y2="190" stroke="#dc2626" stroke-width="2.5"/>
          <text x="108" y="210" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="600">Old wavefront</text>
          <!-- Secondary wavelets -->
          <circle cx="120" cy="50" r="50" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/>
          <circle cx="120" cy="110" r="50" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/>
          <circle cx="120" cy="170" r="50" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/>
          <!-- Dots on old wavefront -->
          <circle cx="120" cy="50" r="4" fill="#dc2626"/>
          <circle cx="120" cy="110" r="4" fill="#dc2626"/>
          <circle cx="120" cy="170" r="4" fill="#dc2626"/>
          <!-- New wavefront (tangent) -->
          <line x1="170" y1="20" x2="170" y2="200" stroke="#16a34a" stroke-width="2.5"/>
          <text x="182" y="210" text-anchor="start" font-size="11" fill="#16a34a" font-weight="600">New wavefront</text>
          <!-- Direction arrows -->
          <line x1="220" y1="80" x2="280" y2="80" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowWO1)"/>
          <line x1="220" y1="130" x2="280" y2="130" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowWO1)"/>
          <text x="250" y="70" text-anchor="middle" font-size="11" fill="#2563eb">Direction of</text>
          <text x="250" y="155" text-anchor="middle" font-size="11" fill="#2563eb">propagation</text>
          <!-- Labels -->
          <text x="80" y="110" text-anchor="middle" font-size="10" fill="#60a5fa">Secondary</text>
          <text x="80" y="123" text-anchor="middle" font-size="10" fill="#60a5fa">wavelets</text>
        </svg>
        <div class="diagram-caption">Huygens construction: secondary wavelets from old wavefront produce the new wavefront</div>
      </div>
      <div class="remember-box"><strong>Remember:</strong> We take only the <strong>forward envelope</strong> (the portion in the direction of propagation). The backward wavelets are ignored — Huygens assumed they have zero amplitude in the backward direction.</div>
      <div class="key-point"><strong>Types of Wavefronts:</strong><br>
        - <strong>Spherical wavefront</strong>: from a point source (amplitude falls as 1/r)<br>
        - <strong>Cylindrical wavefront</strong>: from a line source (amplitude falls as 1/sqrt(r))<br>
        - <strong>Plane wavefront</strong>: from a very distant source (amplitude remains constant)
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students think Huygens principle requires light to be a transverse wave. Actually, Huygens principle works for any type of wave — it is purely a geometric construction. The transverse nature of light is established separately by polarization.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Refraction & Reflection Using Huygens Principle",
    body: `
      <p>Huygens principle beautifully derives Snell's law of refraction and the law of reflection without using any particle model!</p>
      <div class="diagram-container">
        <svg width="440" height="250" viewBox="0 0 440 250">
          <defs>
            <marker id="arrowWO2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Interface line -->
          <line x1="40" y1="130" x2="400" y2="130" stroke="#475569" stroke-width="2"/>
          <text x="410" y="135" font-size="10" fill="#475569">Interface</text>
          <!-- Medium labels -->
          <text x="50" y="50" font-size="12" fill="#2563eb" font-weight="600">Medium 1 (v1)</text>
          <text x="50" y="175" font-size="12" fill="#dc2626" font-weight="600">Medium 2 (v2 &lt; v1)</text>
          <!-- Incident wavefront -->
          <line x1="100" y1="40" x2="200" y2="130" stroke="#2563eb" stroke-width="2"/>
          <!-- Refracted wavefront -->
          <line x1="200" y1="130" x2="260" y2="220" stroke="#dc2626" stroke-width="2"/>
          <!-- Rays -->
          <line x1="100" y1="40" x2="100" y2="130" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowWO2)"/>
          <line x1="200" y1="40" x2="200" y2="130" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowWO2)"/>
          <!-- Refracted rays -->
          <line x1="100" y1="130" x2="140" y2="220" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="200" y1="130" x2="240" y2="220" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
          <!-- Angles -->
          <path d="M100,100 A30,30 0 0,1 122,118" fill="none" stroke="#2563eb" stroke-width="1.2"/>
          <text x="125" y="105" font-size="11" fill="#2563eb">i</text>
          <path d="M100,160 A30,30 0 0,0 114,172" fill="none" stroke="#dc2626" stroke-width="1.2"/>
          <text x="118" y="162" font-size="11" fill="#dc2626">r</text>
          <!-- Normal -->
          <line x1="100" y1="50" x2="100" y2="210" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="80" y="215" font-size="10" fill="#94a3b8">Normal</text>
        </svg>
        <div class="diagram-caption">Refraction of a plane wavefront: wavefront bends toward normal when entering denser medium</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Snell's Law (from Huygens)</span>
        sin i / sin r = v1 / v2 = n2 / n1 = n21
      </div>
      <div class="key-point"><strong>Key Result:</strong><br>
        - In a <strong>denser medium</strong>, speed decreases (v2 &lt; v1), so the wavefront bends <strong>toward the normal</strong> (r &lt; i)<br>
        - In a <strong>rarer medium</strong>, speed increases, so the wavefront bends <strong>away from the normal</strong><br>
        - Wavelength changes: λ₂ = λ₁/n₂₁ (wavelength decreases in denser medium)<br>
        - <strong>Frequency remains unchanged</strong> during refraction
      </div>
      <div class="formula-box">
        <span class="formula-label">Reflection Law (from Huygens)</span>
        Angle of incidence = Angle of reflection &nbsp; (i = r)
      </div>
      <div class="remember-box"><strong>CBSE Favourite:</strong> "Using Huygens principle, derive Snell's law" is a very common 3-5 mark question. Practice the diagram and derivation thoroughly.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> In Newton's corpuscular theory, light speeds up in a denser medium. In wave theory, light slows down. The wave theory prediction was confirmed experimentally by Foucault — this was a key evidence AGAINST the particle model.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Coherent Sources & Conditions for Interference",
    body: `
      <p><strong>Interference</strong> is the phenomenon where two light waves superpose to produce regions of maximum and minimum intensity. But it doesn't happen with just any two sources!</p>
      <div class="key-point"><strong>Coherent Sources:</strong> Two sources that emit light of the <strong>same frequency</strong> and maintain a <strong>constant phase difference</strong> over time.<br><br>
        - Two independent light sources (like two bulbs) are NEVER coherent — they emit random phases<br>
        - Coherent sources are obtained by splitting light from a <strong>single source</strong> into two parts
      </div>
      <div class="key-point"><strong>Conditions for Sustained Interference:</strong><br>
        1. Sources must be <strong>coherent</strong> (same frequency, constant phase difference)<br>
        2. Sources should be <strong>narrow</strong> (ideally point sources or slits)<br>
        3. Sources should be <strong>close together</strong> (to get visible fringes)<br>
        4. Light should be <strong>monochromatic</strong> (single wavelength) for sharp fringes
      </div>
      <div class="formula-box">
        <span class="formula-label">Superposition Principle</span>
        Resultant displacement y = y1 + y2
      </div>
      <div class="formula-box">
        <span class="formula-label">Resultant Intensity</span>
        I = I1 + I2 + 2*sqrt(I1*I2)*cos φ
      </div>
      <p>where phi is the phase difference between the two waves.</p>
      <div class="key-point"><strong>Constructive Interference:</strong> φ = 0, 2π, 4π, ... (even multiples of pi)<br>
        I(max) = (sqrt(I1) + sqrt(I2))<sup>2</sup><br><br>
        <strong>Destructive Interference:</strong> φ = π, 3π, 5π, ... (odd multiples of pi)<br>
        I(min) = (sqrt(I1) - sqrt(I2))<sup>2</sup>
      </div>
      <div class="remember-box"><strong>Remember:</strong> If I1 = I2 = I0, then I(max) = 4*I0 and I(min) = 0. Energy is NOT destroyed in destructive interference — it is redistributed from dark regions to bright regions. <strong>Total energy is conserved.</strong></div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students think two bulbs placed close together will show interference. They won't! Two independent sources are incoherent. Coherence requires the two beams to come from the SAME original source.</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Young's Double Slit Experiment (YDSE) — Setup & Fringe Pattern",
    body: `
      <p><strong>Thomas Young's double slit experiment (1801)</strong> was the first conclusive proof that light behaves as a wave. It's one of the most important experiments in all of physics!</p>
      <div class="diagram-container">
        <svg width="460" height="275" viewBox="0 0 460 275">
          <defs>
            <marker id="ydse-a" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#6b7280"/></marker>
            <marker id="ydse-ar" markerWidth="7" markerHeight="5" refX="0" refY="2.5" orient="auto rotate(180)"><path d="M7,0 L0,2.5 L7,5" fill="#6b7280"/></marker>
            <marker id="ydse-g" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#16a34a"/></marker>
            <marker id="ydse-gr" markerWidth="7" markerHeight="5" refX="0" refY="2.5" orient="auto rotate(180)"><path d="M7,0 L0,2.5 L7,5" fill="#16a34a"/></marker>
            <marker id="ydse-k" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#1c1917"/></marker>
            <marker id="ydse-kr" markerWidth="7" markerHeight="5" refX="0" refY="2.5" orient="auto rotate(180)"><path d="M7,0 L0,2.5 L7,5" fill="#1c1917"/></marker>
          </defs>

          <!-- Source wall on far left -->
          <rect x="26" y="10" width="6" height="255" fill="#94a3b8" rx="1"/>
          <!-- Monochromatic source dot -->
          <circle cx="29" cy="132" r="8" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="29" y="152" text-anchor="middle" font-size="10" fill="#d97706" font-weight="700">S</text>
          <text x="5" y="175" font-size="8" fill="#78716c">Monochromatic</text>
          <text x="10" y="185" font-size="8" fill="#78716c">light source</text>
          <text x="29" y="270" text-anchor="middle" font-size="8" fill="#78716c">X = D</text>

          <!-- Dashed beam: source → double slit axis -->
          <line x1="37" y1="132" x2="156" y2="132" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"/>

          <!-- Double slit barrier (green, like BYJU's) -->
          <!-- Top block -->
          <rect x="154" y="10" width="10" height="82" fill="#84cc16" stroke="#65a30d" stroke-width="1" rx="1"/>
          <!-- Middle block (between S1 and S2) -->
          <rect x="154" y="102" width="10" height="60" fill="#84cc16" stroke="#65a30d" stroke-width="1" rx="1"/>
          <!-- Bottom block -->
          <rect x="154" y="172" width="10" height="93" fill="#84cc16" stroke="#65a30d" stroke-width="1" rx="1"/>

          <!-- S1 label (upper slit centre y=97) -->
          <text x="147" y="100" text-anchor="end" font-size="11" fill="#2563eb" font-weight="700">S&#x2081;</text>
          <!-- S2 label (lower slit centre y=167) -->
          <text x="147" y="170" text-anchor="end" font-size="11" fill="#dc2626" font-weight="700">S&#x2082;</text>
          <text x="159" y="268" text-anchor="middle" font-size="8" fill="#78716c">X = L</text>

          <!-- d dimension arrow between S1 and S2 -->
          <line x1="178" y1="97" x2="178" y2="167" stroke="#16a34a" stroke-width="1.5" marker-end="url(#ydse-g)" marker-start="url(#ydse-gr)"/>
          <text x="186" y="136" font-size="13" fill="#16a34a" font-weight="700">d</text>

          <!-- Dashed centre axis -->
          <line x1="164" y1="132" x2="430" y2="132" stroke="#9ca3af" stroke-width="1" stroke-dasharray="5,4"/>

          <!-- Ray from S1 (164,97) to P (430,68) -->
          <line x1="164" y1="97" x2="430" y2="68" stroke="#374151" stroke-width="1.6"/>
          <!-- Ray from S2 (164,167) to P (430,68) -->
          <line x1="164" y1="167" x2="430" y2="68" stroke="#374151" stroke-width="1.6"/>

          <!-- Wavy lines on rays (cyan, like BYJU's) -->
          <!-- Wave on upper ray ~midway -->
          <path d="M255,86 C261,80 266,77 272,80 C278,83 283,86 289,82 C295,78 300,75 306,78" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>
          <!-- Wave on lower ray ~midway -->
          <path d="M255,122 C261,116 266,113 272,116 C278,119 283,123 289,118 C295,113 300,110 306,114" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>
          <!-- Third wave on lower ray further along -->
          <path d="M320,105 C326,99 331,96 337,99 C343,102 348,105 354,101 C360,97 365,94 371,97" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>

          <!-- Screen (right wall, green) -->
          <rect x="428" y="10" width="10" height="255" fill="#84cc16" stroke="#65a30d" stroke-width="1" rx="1"/>
          <text x="433" y="268" text-anchor="middle" font-size="8" fill="#78716c">X = L+D</text>

          <!-- Point P on screen -->
          <circle cx="431" cy="68" r="5" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
          <text x="444" y="72" font-size="13" fill="#1c1917" font-weight="700">P</text>

          <!-- y: dimension from centre (132) up to P (68) on screen -->
          <line x1="449" y1="68" x2="449" y2="132" stroke="#1c1917" stroke-width="1.6" marker-end="url(#ydse-k)" marker-start="url(#ydse-kr)"/>
          <text x="458" y="104" font-size="14" fill="#1c1917" font-weight="700">y</text>

          <!-- D: distance from slits to screen -->
          <line x1="164" y1="258" x2="430" y2="258" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ydse-a)" marker-start="url(#ydse-ar)"/>
          <text x="297" y="270" text-anchor="middle" font-size="12" fill="#6b7280" font-weight="600">D</text>

          <!-- θ at S1: arc between horizontal and ray to P -->
          <line x1="164" y1="97" x2="196" y2="97" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2"/>
          <path d="M 186 97 A 22 22 0 0 0 181 82" fill="none" stroke="#555" stroke-width="1.3"/>
          <text x="191" y="95" font-size="10" fill="#374151" font-style="italic">θ</text>

          <!-- θ at centre: arc between axis and line from midpoint towards P -->
          <line x1="164" y1="132" x2="208" y2="125" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2"/>
          <path d="M 186 132 A 22 22 0 0 0 183 118" fill="none" stroke="#555" stroke-width="1.3"/>
          <text x="191" y="130" font-size="10" fill="#374151" font-style="italic">θ</text>
        </svg>
        <div class="diagram-caption">Young's Double Slit Experiment: source S, two slits S₁ and S₂ (separation d), rays converge at point P (height y above centre) on screen at distance D</div>
      </div>
      <div class="key-point"><strong>Setup:</strong><br>
        - <strong>S</strong>: Monochromatic light source<br>
        - <strong>S1, S2</strong>: Two narrow slits separated by distance <strong>d</strong><br>
        - <strong>Screen</strong>: Placed at distance <strong>D</strong> from the slits (D >> d)<br>
        - Alternating bright and dark fringes appear on the screen
      </div>
      <div class="formula-box">
        <span class="formula-label">Path Difference</span>
        Delta = S2P - S1P = d sin θ ≈ dy/D &nbsp; (for small theta)
      </div>
      <div class="formula-box">
        <span class="formula-label">Bright Fringe (Constructive)</span>
        d sin θ = nλ &nbsp; where n = 0, 1, 2, 3, ...
      </div>
      <div class="formula-box">
        <span class="formula-label">Dark Fringe (Destructive)</span>
        d sin θ = (2n-1)*λ/2 &nbsp; where n = 1, 2, 3, ...
      </div>
      <div class="remember-box"><strong>Central Maximum:</strong> At the centre of the screen (theta = 0), path difference = 0, so we always get a <strong>bright fringe</strong>. This is the central maximum or zeroth-order bright fringe.</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Fringe Width & Key Formulas for YDSE",
    body: `
      <p><strong>Fringe width</strong> (beta) is the distance between two consecutive bright fringes (or two consecutive dark fringes) on the screen. It is the same for both bright and dark fringes!</p>
      <div class="formula-box">
        <span class="formula-label">Fringe Width</span>
        beta = λD/d
      </div>
      <p>where λ = wavelength, D = slit-to-screen distance, d = slit separation.</p>
      <div class="key-point"><strong>Position of nth Bright Fringe:</strong><br>
        y(n) = n*λD/d &nbsp;&nbsp; (n = 0, 1, 2, ...)<br><br>
        <strong>Position of nth Dark Fringe:</strong><br>
        y(n) = (2n-1)*λD/(2d) &nbsp;&nbsp; (n = 1, 2, 3, ...)
      </div>
      <div class="key-point"><strong>How to Change Fringe Width:</strong><br>
        - Increase λ (use red instead of violet) --> beta increases<br>
        - Increase D (move screen farther) --> beta increases<br>
        - Decrease d (bring slits closer) --> beta increases<br>
        - Immerse in water (λ decreases by factor n) --> beta decreases
      </div>
      <div class="formula-box">
        <span class="formula-label">Fringe Width in Medium of Refractive Index n</span>
        beta' = beta / n = λD / (n*d)
      </div>
      <div class="formula-box">
        <span class="formula-label">Angular Fringe Width</span>
        theta = λ / d &nbsp;&nbsp; (independent of D!)
      </div>
      <div class="key-point"><strong>Intensity Distribution:</strong><br>
        If I1 = I2 = I0, then at any point:<br>
        I = 4*I0*cos<sup>2</sup>(phi/2)<br>
        where phi = (2π/λ) * path difference
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> The formula beta = λD/d is the most tested formula in Wave Optics. Learn what happens to beta when each variable changes — this appears as a 1-2 mark question almost every year.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students confuse the fringe width formula with the position formula. Fringe width beta = λD/d is the SPACING. Position of nth bright fringe y(n) = n*beta = n*λD/d. For dark fringes, use (2n-1)/2 instead of n.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Diffraction of Light — Single Slit Diffraction",
    body: `
      <p><strong>Diffraction</strong> is the bending of light around the edges of an obstacle or through a narrow opening. It becomes significant when the size of the opening is comparable to the wavelength of light.</p>
      <div class="diagram-container">
        <svg width="440" height="250" viewBox="0 0 440 250">
          <defs>
            <marker id="arrowWO4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Incoming plane wavefront -->
          <line x1="40" y1="40" x2="40" y2="210" stroke="#2563eb" stroke-width="2"/>
          <line x1="70" y1="40" x2="70" y2="210" stroke="#2563eb" stroke-width="2"/>
          <line x1="100" y1="40" x2="100" y2="210" stroke="#2563eb" stroke-width="2"/>
          <text x="70" y="30" text-anchor="middle" font-size="10" fill="#2563eb">Plane wavefront</text>
          <!-- Arrows showing direction -->
          <line x1="55" y1="225" x2="115" y2="225" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowWO4)"/>
          <!-- Slit barrier -->
          <rect x="140" y="20" width="6" height="90" fill="#475569"/>
          <rect x="140" y="160" width="6" height="90" fill="#475569"/>
          <!-- Slit opening -->
          <line x1="143" y1="110" x2="143" y2="160" stroke="#16a34a" stroke-width="2"/>
          <text x="130" y="138" text-anchor="end" font-size="11" fill="#16a34a" font-weight="600">a</text>
          <!-- Diffracted waves (spreading) -->
          <path d="M146,110 C200,100 260,50 350,30" fill="none" stroke="#f59e0b" stroke-width="1.2"/>
          <path d="M146,115 C200,110 260,85 350,70" fill="none" stroke="#f59e0b" stroke-width="1.2"/>
          <path d="M146,135 C200,135 260,135 350,135" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
          <path d="M146,155 C200,160 260,185 350,200" fill="none" stroke="#f59e0b" stroke-width="1.2"/>
          <path d="M146,160 C200,170 260,215 350,240" fill="none" stroke="#f59e0b" stroke-width="1.2"/>
          <!-- Screen -->
          <rect x="348" y="20" width="5" height="230" fill="#e2e8f0" stroke="#475569" stroke-width="1"/>
          <!-- Diffraction pattern on screen -->
          <rect x="354" y="125" width="18" height="20" rx="2" fill="#f59e0b" opacity="0.9"/>
          <rect x="354" y="96" width="10" height="8" rx="1" fill="#f59e0b" opacity="0.5"/>
          <rect x="354" y="166" width="10" height="8" rx="1" fill="#f59e0b" opacity="0.5"/>
          <rect x="354" y="72" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.3"/>
          <rect x="354" y="192" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.3"/>
          <text x="385" y="138" font-size="9" fill="#475569">Central max</text>
          <text x="385" y="103" font-size="8" fill="#475569">1st max</text>
          <text x="385" y="175" font-size="8" fill="#475569">1st max</text>
        </svg>
        <div class="diagram-caption">Single slit diffraction: central maximum is brightest and widest, secondary maxima get progressively dimmer</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Condition for Minima (Dark Fringes)</span>
        a sin θ = nλ &nbsp;&nbsp; where n = 1, 2, 3, ... (NOT n = 0)
      </div>
      <div class="formula-box">
        <span class="formula-label">Condition for Secondary Maxima</span>
        a sin θ = (2n+1)*λ/2 &nbsp;&nbsp; where n = 1, 2, 3, ...
      </div>
      <div class="formula-box">
        <span class="formula-label">Angular Width of Central Maximum</span>
        2*theta = 2λ/a
      </div>
      <div class="formula-box">
        <span class="formula-label">Linear Width of Central Maximum</span>
        W = 2*λD/a
      </div>
      <div class="key-point"><strong>Key Features of Single Slit Diffraction:</strong><br>
        1. Central maximum is the <strong>brightest and widest</strong> (twice the width of secondary maxima)<br>
        2. Secondary maxima are much dimmer — intensity falls rapidly<br>
        3. As slit width 'a' decreases, diffraction pattern spreads more<br>
        4. As slit width 'a' increases, pattern narrows (approaches geometric shadow)
      </div>
      <div class="mistake-box"><strong>Common Mistake:</strong> In YDSE, the condition for bright fringe is d sin θ = nλ. In single slit diffraction, a sin θ = nλ gives DARK fringes (minima), NOT bright ones! Don't mix them up — this is a very common trap in MCQs.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Difference Between Interference & Diffraction",
    body: `
      <p>Both interference and diffraction involve superposition of waves, but they are different phenomena. CBSE loves comparison questions on this topic!</p>
      <table class="compare-table">
        <tr><th>Feature</th><th>Interference</th><th>Diffraction</th></tr>
        <tr><td>Source</td><td>Two separate coherent sources (slits)</td><td>Different parts of the SAME wavefront through one slit</td></tr>
        <tr><td>Fringe width</td><td>All fringes have <strong>equal width</strong></td><td>Central maximum is <strong>twice as wide</strong> as secondary maxima</td></tr>
        <tr><td>Intensity</td><td>All bright fringes have <strong>same intensity</strong></td><td>Central max is brightest; secondary maxima have <strong>decreasing intensity</strong></td></tr>
        <tr><td>Dark fringes</td><td><strong>Perfectly dark</strong> (if I1 = I2)</td><td><strong>Not perfectly dark</strong></td></tr>
        <tr><td>Number of fringes</td><td>Large number of equally spaced fringes</td><td>Few fringes visible (intensity falls off quickly)</td></tr>
        <tr><td>Condition for maxima</td><td>d sin θ = nλ</td><td>a sin θ = (2n+1)*λ/2</td></tr>
        <tr><td>Condition for minima</td><td>d sin θ = (2n-1)*λ/2</td><td>a sin θ = nλ</td></tr>
      </table>
      <div class="key-point"><strong>Important Connection:</strong><br>
        In Young's experiment, the pattern observed is actually a combination of BOTH interference and diffraction. The interference fringes are modulated by the single-slit diffraction envelope. In CBSE, you usually treat them separately.
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> "Distinguish between interference and diffraction" is a classic 3-mark question. Memorise at least 4-5 differences from the table above.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Polarization of Light",
    body: `
      <p><strong>Polarization</strong> is the phenomenon that proves light is a <strong>transverse wave</strong>. In an unpolarised light beam, the electric field vibrates in all directions perpendicular to the direction of propagation. A polariser filters it to vibrate in only ONE direction.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <defs>
            <marker id="arrowWO5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Unpolarised light -->
          <text x="30" y="25" font-size="11" fill="#475569" font-weight="600">Unpolarised</text>
          <!-- Vibration arrows in all directions -->
          <line x1="50" y1="100" x2="50" y2="60" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="50" y2="140" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="20" y2="80" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="80" y2="120" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="25" y2="115" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="75" y2="85" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="30" y2="100" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="70" y2="100" stroke="#dc2626" stroke-width="1.5"/>
          <!-- Direction arrow -->
          <line x1="85" y1="100" x2="130" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowWO5)"/>
          <!-- Polariser 1 -->
          <rect x="138" y="50" width="8" height="100" rx="3" fill="#a78bfa" opacity="0.6" stroke="#7c3aed" stroke-width="1.5"/>
          <text x="142" y="45" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="600">P1</text>
          <!-- Vertical lines on polariser -->
          <line x1="142" y1="55" x2="142" y2="145" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Polarised light (only vertical) -->
          <line x1="180" y1="100" x2="180" y2="70" stroke="#16a34a" stroke-width="2"/>
          <line x1="180" y1="100" x2="180" y2="130" stroke="#16a34a" stroke-width="2"/>
          <text x="180" y="60" text-anchor="middle" font-size="10" fill="#16a34a" font-weight="600">Polarised</text>
          <!-- Direction arrow 2 -->
          <line x1="200" y1="100" x2="240" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowWO5)"/>
          <!-- Analyser (at angle) -->
          <rect x="248" y="50" width="8" height="100" rx="3" fill="#fbbf24" opacity="0.6" stroke="#d97706" stroke-width="1.5"/>
          <text x="252" y="45" text-anchor="middle" font-size="10" fill="#d97706" font-weight="600">P2 (Analyser)</text>
          <!-- Transmitted light -->
          <line x1="280" y1="100" x2="280" y2="75" stroke="#16a34a" stroke-width="1.5"/>
          <line x1="280" y1="100" x2="280" y2="125" stroke="#16a34a" stroke-width="1.5"/>
          <!-- Direction arrow 3 -->
          <line x1="300" y1="100" x2="340" y2="100" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowWO5)"/>
          <!-- theta angle label -->
          <text x="252" y="170" text-anchor="middle" font-size="11" fill="#d97706">angle θ</text>
          <!-- Final text -->
          <text x="360" y="95" font-size="10" fill="#475569">I = I0*cos²θ</text>
          <text x="360" y="115" font-size="10" fill="#475569">(Malus's Law)</text>
        </svg>
        <div class="diagram-caption">Unpolarised light passes through polariser P1 (becomes polarised), then through analyser P2 at angle θ</div>
      </div>
      <div class="key-point"><strong>Why Polarization Proves Transverse Nature:</strong><br>
        If light were a longitudinal wave (like sound), the vibrations would be along the direction of travel. A polariser couldn't select one direction — there would be only one direction. The fact that a polariser can block certain vibration directions proves light has transverse vibrations.
      </div>
      <div class="key-point"><strong>Methods of Polarization:</strong><br>
        1. By transmission through a Polaroid<br>
        2. By reflection (Brewster's angle)<br>
        3. By scattering (skylight is partially polarised)<br>
        4. By double refraction (calcite crystal)
      </div>
      <div class="remember-box"><strong>Remember:</strong> When unpolarised light of intensity I0 passes through a single polariser, the transmitted intensity = <strong>I0/2</strong> (exactly half). This is because on average, half the vibrations are along the pass axis.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Malus's Law & Brewster's Law",
    body: `
      <p>Two important laws of polarization that CBSE tests frequently in both theory and numericals.</p>
      <div class="formula-box">
        <span class="formula-label">Malus's Law</span>
        I = I0 * cos²θ
      </div>
      <p>where I0 = intensity of polarised light incident on the analyser, θ = angle between pass axes of polariser and analyser.</p>
      <div class="key-point"><strong>Special Cases of Malus's Law:</strong><br>
        - theta = 0 deg (parallel): I = I0 (maximum transmission)<br>
        - theta = 30 deg: I = (3/4)*I0<br>
        - theta = 45 deg: I = I0/2<br>
        - theta = 60 deg: I = I0/4<br>
        - theta = 90 deg (crossed): I = 0 (no transmission)
      </div>
      <div class="formula-box">
        <span class="formula-label">Brewster's Law</span>
        tan i<sub>B</sub> = n &nbsp;&nbsp; (n = refractive index of reflecting medium)
      </div>
      <p>where i<sub>B</sub> is the <strong>Brewster angle</strong> (or polarizing angle). At this angle, the reflected light is <strong>completely polarised</strong>.</p>
      <div class="key-point"><strong>Key Property at Brewster's Angle:</strong><br>
        At Brewster's angle, the reflected ray and the refracted ray are <strong>perpendicular</strong> to each other.<br>
        i<sub>B</sub> + r = 90 deg
      </div>
      <div class="formula-box">
        <span class="formula-label">Brewster Angle for Glass (n = 1.5)</span>
        i<sub>B</sub> = tan<sup>-1</sup>(1.5) = 56.3 deg
      </div>
      <div class="formula-box">
        <span class="formula-label">Brewster Angle for Water (n = 1.33)</span>
        i<sub>B</sub> = tan<sup>-1</sup>(1.33) = 53.1 deg
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Common numerical — "Unpolarised light of intensity I0 passes through two polaroids with angle θ between them. Find transmitted intensity." Answer: I0/2 * cos²θ. The first I0/2 is because unpolarised light becomes I0/2 after the first polaroid.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> When light passes through TWO polaroids, students often apply Malus's law directly as I0*cos²θ. Wrong! First polaroid reduces intensity to I0/2, THEN Malus's law applies: I = (I0/2)*cos²θ.</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Resolving Power of Optical Instruments",
    body: `
      <p><strong>Resolving power</strong> is the ability of an optical instrument to distinguish between two closely spaced objects. It is limited by diffraction!</p>
      <div class="key-point"><strong>Rayleigh's Criterion:</strong><br>
        Two objects are just resolved when the central maximum of one falls on the first minimum of the other. The minimum angular separation is:<br>
        theta(min) = 1.22 * λ / D<br>
        where D is the diameter of the lens/mirror aperture.
      </div>
      <div class="formula-box">
        <span class="formula-label">Resolving Power of a Microscope</span>
        RP = 2*n*sin θ / λ = 1 / d(min)
      </div>
      <p>where d(min) = minimum distance between two objects that can be resolved, n = refractive index of medium, theta = half-angle of cone of light.</p>
      <div class="formula-box">
        <span class="formula-label">Resolving Power of a Telescope</span>
        RP = D / (1.22 * λ) = 1 / δ<sub>θ</sub>
      </div>
      <p>where D = diameter of the objective lens/mirror, δ<sub>θ</sub> = minimum angular separation.</p>
      <div class="key-point"><strong>How to Improve Resolving Power:</strong><br>
        <strong>Microscope:</strong> Use shorter wavelength (UV, electron beams), use oil immersion (increases n)<br>
        <strong>Telescope:</strong> Use larger aperture D, use shorter wavelength
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Microscope</th><th>Telescope</th></tr>
        <tr><td>RP depends on</td><td>λ, n, theta</td><td>D, λ</td></tr>
        <tr><td>Better RP needs</td><td>Shorter λ, larger n</td><td>Larger D, shorter λ</td></tr>
        <tr><td>RP measures</td><td>Min. distance resolved</td><td>Min. angle resolved</td></tr>
      </table>
      <div class="remember-box"><strong>Remember:</strong> Resolving power is the RECIPROCAL of the minimum resolvable distance (microscope) or minimum resolvable angle (telescope). Higher resolving power = better ability to distinguish fine details.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Effect of Thin Film / Glass Slab in YDSE",
    body: `
      <p>A common CBSE numerical involves introducing a thin transparent film in front of one of the slits in Young's experiment. This shifts the entire fringe pattern!</p>
      <div class="key-point"><strong>What Happens:</strong><br>
        When a thin film of thickness t and refractive index mu is placed in front of one slit (say S1):<br>
        - Extra optical path = (mu - 1)*t<br>
        - The central fringe shifts TOWARD the slit covered by the film<br>
        - Fringe width does NOT change (it depends only on λ, D, d)
      </div>
      <div class="formula-box">
        <span class="formula-label">Lateral Shift of Central Maximum</span>
        Δ<sub>y</sub> = (mu - 1)*t * D / d
      </div>
      <div class="formula-box">
        <span class="formula-label">Number of Fringes Shifted</span>
        N = (mu - 1)*t / λ
      </div>
      <div class="key-point"><strong>Why does it shift?</strong><br>
        The film introduces an extra path = (mu - 1)*t for one beam. For the central maximum (where path difference = 0), the position must adjust so that the geometric path difference compensates for this extra optical path. Hence the pattern shifts toward the covered slit.
      </div>
      <div class="remember-box"><strong>CBSE Tip:</strong> Questions typically say "A glass plate of thickness t and refractive index 1.5 is placed in front of slit S1. Find the shift." Just use: shift = (mu - 1)*t*D/d. If they ask number of fringes, use N = (mu - 1)*t/λ.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> The shift is TOWARD the slit with the glass plate, not away from it. Also, fringe width remains unchanged — only the position shifts. Some students incorrectly think the fringe width changes.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Diffraction Pattern — Intensity Distribution & Width Relations",
    body: `
      <p>Let's go deeper into the single slit diffraction pattern — the intensity distribution and how the widths of maxima relate to each other.</p>
      <div class="formula-box">
        <span class="formula-label">Intensity in Single Slit Diffraction</span>
        I(theta) = I0 * [sin(beta)/beta]<sup>2</sup> &nbsp; where beta = (πa sin θ)/λ
      </div>
      <div class="key-point"><strong>Intensity of Secondary Maxima (relative to central max):</strong><br>
        - 1st secondary maximum: I = I0/22 (about 4.5% of central max)<br>
        - 2nd secondary maximum: I = I0/62 (about 1.6% of central max)<br>
        - 3rd secondary maximum: I = I0/121 (about 0.8% of central max)<br><br>
        The secondary maxima fall off rapidly — this is why you see only 2-3 fringes on each side.
      </div>
      <div class="key-point"><strong>Width Relations:</strong><br>
        - Angular width of central max = 2λ/a<br>
        - Angular width of each secondary max = λ/a<br>
        - So central maximum is <strong>TWICE</strong> as wide as any secondary maximum<br>
        - Linear width of central max on screen = 2*λD/a
      </div>
      <div class="formula-box">
        <span class="formula-label">Important: Fresnel Distance</span>
        z<sub>F</sub> = a<sup>2</sup> / λ
      </div>
      <p>The Fresnel distance is the distance at which the spreading due to diffraction equals the slit width. For z &lt; z<sub>F</sub>, the beam travels as a ray (no significant diffraction). For z &gt; z<sub>F</sub>, diffraction effects dominate.</p>
      <div class="remember-box"><strong>Remember:</strong> If slit width a >> λ, diffraction is negligible (geometric optics applies). If a is comparable to λ, diffraction is strong. If a &lt; λ, the slit acts almost like a point source — light spreads in all directions.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Central max width = 2*λD/a, but secondary max width = λD/a. The central max is twice as wide. Don't use the same formula for both.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Wave Optics — Complete Formula Sheet",
    body: `
      <p>All formulas you need for Wave Optics in one place. Print this and revise before the exam!</p>
      <div class="formula-box">
        <span class="formula-label">YDSE — Fringe Width</span>
        beta = λD/d
      </div>
      <div class="formula-box">
        <span class="formula-label">YDSE — Position of nth Bright Fringe</span>
        y(n) = n*λD/d &nbsp;&nbsp; (n = 0, 1, 2, ...)
      </div>
      <div class="formula-box">
        <span class="formula-label">YDSE — Position of nth Dark Fringe</span>
        y(n) = (2n-1)*λD / (2d) &nbsp;&nbsp; (n = 1, 2, 3, ...)
      </div>
      <div class="formula-box">
        <span class="formula-label">YDSE — Path Difference</span>
        Delta = dy/D = d sin θ
      </div>
      <div class="formula-box">
        <span class="formula-label">YDSE — With Glass Slab</span>
        Shift = (mu - 1)*t*D/d &nbsp;&nbsp;|&nbsp;&nbsp; N(fringes) = (mu - 1)*t / λ
      </div>
      <div class="formula-box">
        <span class="formula-label">YDSE — In Medium of RI = n</span>
        beta' = beta/n = λD/(n*d)
      </div>
      <div class="formula-box">
        <span class="formula-label">Resultant Intensity (Equal Sources)</span>
        I = 4*I0*cos<sup>2</sup>(phi/2) &nbsp;&nbsp;|&nbsp;&nbsp; I(max) = 4*I0, I(min) = 0
      </div>
      <div class="formula-box">
        <span class="formula-label">Resultant Intensity (Unequal Sources)</span>
        I(max) = (sqrt(I1) + sqrt(I2))<sup>2</sup> &nbsp;&nbsp;|&nbsp;&nbsp; I(min) = (sqrt(I1) - sqrt(I2))<sup>2</sup>
      </div>
      <div class="formula-box">
        <span class="formula-label">Single Slit — Minima</span>
        a sin θ = nλ &nbsp;&nbsp; (n = 1, 2, 3, ...)
      </div>
      <div class="formula-box">
        <span class="formula-label">Single Slit — Central Max Width</span>
        Angular: 2λ/a &nbsp;&nbsp;|&nbsp;&nbsp; Linear: 2*λD/a
      </div>
      <div class="formula-box">
        <span class="formula-label">Malus's Law</span>
        I = I0*cos²θ
      </div>
      <div class="formula-box">
        <span class="formula-label">Brewster's Law</span>
        tan i<sub>B</sub> = n &nbsp;&nbsp;|&nbsp;&nbsp; i<sub>B</sub> + r = 90 deg
      </div>
      <div class="formula-box">
        <span class="formula-label">Resolving Power</span>
        Telescope: D/(1.22*λ) &nbsp;&nbsp;|&nbsp;&nbsp; Microscope: 2*n*sin θ/λ
      </div>
      <div class="formula-box">
        <span class="formula-label">Fresnel Distance</span>
        z<sub>F</sub> = a<sup>2</sup>/λ
      </div>
      <div class="formula-box">
        <span class="formula-label">Snell's Law (Huygens)</span>
        sin(i)/sin(r) = v1/v2 = n2/n1
      </div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Common Tricks & Shortcuts for Wave Optics",
    body: `
      <p>Quick tricks to solve CBSE problems faster. These save crucial time in the exam.</p>
      <div class="key-point"><strong>Trick 1 — Ratio of Intensities from Amplitudes:</strong><br>
        If two sources have amplitudes a1 and a2:<br>
        I(max)/I(min) = [(a1 + a2)/(a1 - a2)]<sup>2</sup><br><br>
        Conversely, if I(max)/I(min) = k, then a1/a2 = (sqrt(k) + 1)/(sqrt(k) - 1)
      </div>
      <div class="key-point"><strong>Trick 2 — Quick Intensity at Any Point:</strong><br>
        For equal intensities: I = 4*I0*cos<sup>2</sup>(phi/2)<br>
        - phi = 2*pi*Delta/λ where Delta = path difference<br>
        - At central max: phi = 0, I = 4*I0<br>
        - Midway between bright and dark: phi = pi/2, I = 2*I0
      </div>
      <div class="key-point"><strong>Trick 3 — Wavelength in Different Media:</strong><br>
        λ(medium) = λ(vacuum) / n<br>
        Frequency NEVER changes. Speed changes: v = c/n<br>
        In YDSE with medium: β = λ*D/(n*d) — just divide by n
      </div>
      <div class="key-point"><strong>Trick 4 — Three Polaroid Problem:</strong><br>
        Two crossed polaroids (90 deg apart) give zero intensity. Inserting a third polaroid at 45 deg between them gives:<br>
        I = I0/2 * cos<sup>2</sup>(45) * cos<sup>2</sup>(45) = I0/8<br>
        This is a very common CBSE question!
      </div>
      <div class="key-point"><strong>Trick 5 — Quick Fringe Count with Glass Slab:</strong><br>
        Fringes shifted = (mu - 1)*t / λ<br>
        If this gives 5.5, the shift is 5.5 * beta (i.e., 5.5 fringe widths)<br>
        The center of the pattern is now between 5th and 6th bright fringe from original center
      </div>
      <div class="key-point"><strong>Trick 6 — White Light Fringes:</strong><br>
        With white light: central fringe is WHITE, first few fringes are coloured (violet closest to center, red farthest), and after a few orders, fringes become indistinguishable (white blur).
      </div>
      <div class="remember-box"><strong>Quick Memory Aid:</strong><br>
        YDSE bright: d sin θ = nλ (whole numbers)<br>
        YDSE dark: d sin θ = (2n-1)*λ/2 (half-integers)<br>
        Single slit DARK: a sin θ = nλ (whole numbers)<br>
        Single slit bright: a sin θ = (2n+1)*λ/2 (odd half-integers)
      </div>
    `
  },
  {
    id: 15, level: "exam",
    title: "CBSE Board Exam Tips — Wave Optics",
    body: `
      <p>Chapter-specific strategies to maximise your marks in Wave Optics questions on the board exam.</p>
      <div class="key-point"><strong>Most Frequently Asked Questions (last 10 years):</strong><br>
        1. Derive Snell's law using Huygens principle (3-5 marks) — appears almost every year<br>
        2. YDSE fringe width derivation (3 marks)<br>
        3. What happens to fringe pattern when D, d, or λ changes (1-2 marks)<br>
        4. Single slit diffraction: conditions for minima, central max width (2-3 marks)<br>
        5. Malus's law numerical with two/three polaroids (2 marks)<br>
        6. Brewster's law derivation and numerical (2 marks)<br>
        7. Difference between interference and diffraction (3 marks)
      </div>
      <div class="key-point"><strong>Diagram Tips:</strong><br>
        - ALWAYS draw a neat labeled diagram for Huygens derivation — it carries 1 mark<br>
        - For YDSE, label S1, S2, d, D, P, and show the path difference clearly<br>
        - For diffraction, show the slit width 'a' and mark minima positions on the screen<br>
        - For polarization, show the pass axis direction with arrows
      </div>
      <div class="key-point"><strong>Numerical Strategy:</strong><br>
        - YDSE numericals: Always identify d, D, λ, and what's being asked (fringe width, position, shift)<br>
        - Diffraction: Identify slit width 'a' vs slit separation 'd' — students often confuse them<br>
        - Polarization: Count the number of polaroids and apply Malus's law step by step<br>
        - Units: λ is usually in nm or Angstroms — convert to metres (1 nm = 10<sup>-9</sup> m, 1 A = 10<sup>-10</sup> m)
      </div>
      <div class="mistake-box"><strong>Top 5 Exam Mistakes:</strong><br>
        1. Using a sin θ = nλ for bright fringes in single slit (it's for DARK fringes!)<br>
        2. Forgetting the I0/2 factor when unpolarised light enters the first polaroid<br>
        3. Confusing d (slit separation in YDSE) with a (slit width in diffraction)<br>
        4. Not converting wavelength to metres in numerical problems<br>
        5. Writing central max width as λD/a instead of 2*λD/a (missing the factor of 2)
      </div>
      <div class="remember-box"><strong>Weightage:</strong> Wave Optics carries approximately <strong>4-5 marks</strong> in the board exam. Combined with Ray Optics, the Optics unit totals about <strong>9-10 marks</strong>. It's a high-scoring chapter if you master the formulas and diagrams.</div>
      <div class="key-point"><strong>Last-Minute Checklist:</strong><br>
        - Can you derive Snell's law using Huygens? (Most important derivation)<br>
        - Do you know the YDSE fringe width formula and what affects it?<br>
        - Can you distinguish interference from diffraction in a table?<br>
        - Have you practised the three-polaroid problem?<br>
        - Do you know Brewster's angle for glass (56.3 deg) and water (53.1 deg)?
      </div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Young's Double Slit Experiment — Complete Board Exam Breakdown",
    body: `
      <p>YDSE is the <strong>single most important topic</strong> in Wave Optics for CBSE. Every year, at least one question (2-5 marks) comes from this experiment. Let's master every detail.</p>
      <div class="diagram-container">
        <svg width="460" height="300" viewBox="0 0 460 300">
          <defs>
            <marker id="arrowYDSE" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Double slit barrier -->
          <rect x="100" y="20" width="5" height="100" fill="#475569"/>
          <rect x="100" y="130" width="5" height="20" fill="#475569"/>
          <rect x="100" y="160" width="5" height="120" fill="#475569"/>
          <!-- Slit labels -->
          <text x="90" y="127" text-anchor="end" font-size="11" fill="#2563eb" font-weight="600">S1</text>
          <text x="90" y="163" text-anchor="end" font-size="11" fill="#dc2626" font-weight="600">S2</text>
          <!-- d label -->
          <line x1="92" y1="125" x2="92" y2="155" stroke="#16a34a" stroke-width="1.5"/>
          <text x="82" y="144" text-anchor="end" font-size="11" fill="#16a34a" font-weight="600">d</text>
          <!-- Screen -->
          <rect x="380" y="20" width="5" height="260" fill="#e2e8f0" stroke="#475569" stroke-width="1"/>
          <text x="395" y="30" font-size="10" fill="#475569">Screen</text>
          <!-- Point P on screen -->
          <circle cx="382" cy="100" r="4" fill="#dc2626"/>
          <text x="395" y="104" font-size="11" fill="#dc2626" font-weight="600">P</text>
          <!-- Central O -->
          <circle cx="382" cy="145" r="3" fill="#475569"/>
          <text x="395" y="149" font-size="10" fill="#475569">O (centre)</text>
          <!-- Ray from S1 to P -->
          <line x1="105" y1="125" x2="380" y2="100" stroke="#2563eb" stroke-width="1.5"/>
          <text x="230" y="100" font-size="10" fill="#2563eb">S1P</text>
          <!-- Ray from S2 to P -->
          <line x1="105" y1="155" x2="380" y2="100" stroke="#dc2626" stroke-width="1.5"/>
          <text x="230" y="145" font-size="10" fill="#dc2626">S2P</text>
          <!-- D label -->
          <line x1="108" y1="280" x2="378" y2="280" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrowYDSE)"/>
          <text x="240" y="295" text-anchor="middle" font-size="12" fill="#8b5cf6" font-weight="600">D</text>
          <!-- y label -->
          <line x1="375" y1="145" x2="375" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="368" y="125" text-anchor="end" font-size="11" fill="#f59e0b" font-weight="600">y</text>
          <!-- Path difference construction -->
          <line x1="105" y1="125" x2="130" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="145" y="175" font-size="9" fill="#94a3b8">Path diff = S2P - S1P</text>
        </svg>
        <div class="diagram-caption">YDSE ray diagram: path difference between S1P and S2P determines whether P is bright or dark</div>
      </div>
      <div class="key-point"><strong>Path Difference at point P (distance y from centre):</strong><br>
        Delta = S2P - S1P = yd/D &nbsp;&nbsp; (valid when D >> d and D >> y)
      </div>
      <div class="formula-box">
        <span class="formula-label">Bright Fringes (Constructive Interference)</span>
        Delta = nλ &nbsp; --> &nbsp; y = n*λD/d &nbsp;&nbsp; (n = 0, 1, 2, 3, ...)
      </div>
      <div class="formula-box">
        <span class="formula-label">Dark Fringes (Destructive Interference)</span>
        Delta = (2n-1)*λ/2 &nbsp; --> &nbsp; y = (2n-1)*λD/(2d) &nbsp;&nbsp; (n = 1, 2, 3, ...)
      </div>
      <div class="formula-box">
        <span class="formula-label">Fringe Width</span>
        beta = λD/d &nbsp;&nbsp; (same for bright and dark fringes)
      </div>
      <div class="key-point"><strong>Solved Problem 1:</strong><br>
        <em>In YDSE, slit separation d = 0.1 mm, screen distance D = 1 m, wavelength λ = 600 nm. Find the fringe width.</em><br><br>
        <strong>Solution:</strong><br>
        beta = λD/d<br>
        beta = (600 x 10<sup>-9</sup> x 1) / (0.1 x 10<sup>-3</sup>)<br>
        beta = 600 x 10<sup>-9</sup> / 10<sup>-4</sup><br>
        beta = 6 x 10<sup>-3</sup> m = <strong>6 mm</strong>
      </div>
      <div class="key-point"><strong>Solved Problem 2:</strong><br>
        <em>In the above setup, what happens when D is doubled (D = 2 m)?</em><br><br>
        <strong>Solution:</strong><br>
        beta = λD/d. Since beta is directly proportional to D:<br>
        New beta = 2 x 6 mm = <strong>12 mm</strong><br>
        The fringe width doubles. Fringes become wider and more spread out, but the intensity pattern becomes dimmer (energy spreads over larger area).
      </div>
      <div class="remember-box"><strong>Exam Tip:</strong> If slit separation (d) increases, fringe width DECREASES (they are inversely proportional). If screen distance (D) increases, fringe width INCREASES. If wavelength increases, fringe width INCREASES.</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "What Happens When... (YDSE Modifications) — Board Exam Favourites",
    body: `
      <p>CBSE examiners LOVE asking "what happens to the interference pattern when..." questions. These are easy marks if you know the scenarios. Each one below has appeared in board exams!</p>
      <div class="key-point"><strong>Scenario 1: One Slit is Covered</strong><br>
        - No two-slit interference pattern is formed<br>
        - Instead, you get a <strong>single slit diffraction pattern</strong><br>
        - Central bright band much wider, with faint secondary maxima<br>
        - Formula: Central max width = 2*λD/a (where a = slit width)
      </div>
      <div class="key-point"><strong>Scenario 2: White Light is Used (Instead of Monochromatic)</strong><br>
        - Central fringe is <strong>WHITE</strong> (all wavelengths have zero path difference at centre)<br>
        - On either side: coloured fringes — <strong>violet closest to centre, red farthest</strong><br>
        - Reason: beta = λD/d, so red (large λ) has wider fringes than violet<br>
        - After 3-4 orders, fringes overlap and you see a <strong>uniform white illumination</strong><br>
        - Only the central white fringe and first few coloured fringes are clearly visible
      </div>
      <div class="key-point"><strong>Scenario 3: Apparatus Immersed in Water (or any medium of RI = n)</strong><br>
        - Wavelength in medium: λ' = λ/n<br>
        - New fringe width: beta' = λ'*D/d = (λD)/(n*d) = <strong>beta/n</strong><br>
        - Since n > 1, fringe width <strong>DECREASES</strong><br>
        - For water (n = 4/3): beta' = (3/4)*beta — fringe width becomes 3/4 of original
      </div>
      <div class="key-point"><strong>Scenario 4: Thin Glass Slab Placed Over One Slit</strong><br>
        - Introduces extra optical path = (mu - 1)*t in one beam<br>
        - Entire fringe pattern <strong>shifts TOWARD the slit with the glass slab</strong><br>
        - Shift = (mu - 1)*t*D/d<br>
        - Number of fringes shifted = (mu - 1)*t / λ<br>
        - <strong>Fringe width does NOT change</strong> (it depends only on λ, D, d — not on the slab)
      </div>
      <div class="key-point"><strong>Scenario 5: Slit Widths Made Unequal</strong><br>
        - If slit widths are different, the two beams have <strong>unequal intensities</strong> I1 != I2<br>
        - I(max) = (sqrt(I1) + sqrt(I2))<sup>2</sup><br>
        - I(min) = (sqrt(I1) - sqrt(I2))<sup>2</sup> &nbsp; --> &nbsp; <strong>I(min) != 0</strong><br>
        - Dark fringes are no longer completely dark<br>
        - Contrast (visibility) of fringes decreases
      </div>
      <div class="key-point"><strong>Scenario 6: Source Slit (S) Made Wider</strong><br>
        - Each point of the wide source acts as an independent source<br>
        - These independent sources are NOT coherent with each other<br>
        - Net effect: fringe pattern becomes less sharp, then disappears<br>
        - Condition for fringes to disappear: source slit width s > λD'/d<br>
        &nbsp;&nbsp;(where D' = distance of source slit from double slit)
      </div>
      <div class="remember-box"><strong>Board Exam Alert:</strong> "What happens when one slit is covered?" and "What happens with white light?" are the two most common YDSE modification questions. The glass slab question usually appears as a 2-3 mark numerical.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> Students say "no pattern is formed" when one slit is covered. Wrong! A single slit diffraction pattern IS formed — just not an interference pattern. Also, when a glass slab is used, the pattern shifts but fringe width stays the same.</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Single Slit Diffraction — Complete Pattern Analysis with Solved Problems",
    body: `
      <p>Single slit diffraction is the second most important topic after YDSE. The key formulas and the diagram are must-know for CBSE.</p>
      <div class="diagram-container">
        <svg width="460" height="280" viewBox="0 0 460 280">
          <defs>
            <marker id="arrowDiff" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Incoming plane wavefront arrows -->
          <line x1="20" y1="100" x2="70" y2="100" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowDiff)"/>
          <line x1="20" y1="140" x2="70" y2="140" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowDiff)"/>
          <line x1="20" y1="180" x2="70" y2="180" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowDiff)"/>
          <text x="10" y="80" font-size="10" fill="#2563eb">Plane</text>
          <text x="10" y="92" font-size="10" fill="#2563eb">waves</text>
          <!-- Slit barrier -->
          <rect x="90" y="30" width="5" height="90" fill="#475569"/>
          <rect x="90" y="190" width="5" height="80" fill="#475569"/>
          <!-- Slit width label -->
          <line x1="84" y1="120" x2="84" y2="190" stroke="#16a34a" stroke-width="2"/>
          <text x="76" y="158" text-anchor="end" font-size="12" fill="#16a34a" font-weight="600">a</text>
          <!-- Secondary wavelets from different parts of slit -->
          <circle cx="93" cy="125" r="3" fill="#f59e0b"/>
          <circle cx="93" cy="145" r="3" fill="#f59e0b"/>
          <circle cx="93" cy="165" r="3" fill="#f59e0b"/>
          <circle cx="93" cy="185" r="3" fill="#f59e0b"/>
          <text x="110" y="115" font-size="9" fill="#f59e0b">Secondary wavelets</text>
          <!-- Rays to screen -->
          <line x1="95" y1="125" x2="340" y2="60" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,2"/>
          <line x1="95" y1="185" x2="340" y2="60" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,2"/>
          <line x1="95" y1="155" x2="340" y2="155" stroke="#f59e0b" stroke-width="1.2"/>
          <line x1="95" y1="125" x2="340" y2="230" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,2"/>
          <line x1="95" y1="185" x2="340" y2="230" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,2"/>
          <!-- Angle theta -->
          <path d="M120,155 A25,25 0 0,0 118,135" fill="none" stroke="#dc2626" stroke-width="1.2"/>
          <text x="130" y="143" font-size="10" fill="#dc2626">θ</text>
          <!-- Screen -->
          <rect x="338" y="30" width="5" height="230" fill="#e2e8f0" stroke="#475569" stroke-width="1"/>
          <!-- Intensity pattern -->
          <rect x="345" y="140" width="22" height="30" rx="2" fill="#f59e0b" opacity="0.9"/>
          <text x="370" y="158" font-size="8" fill="#475569">Central max</text>
          <rect x="345" y="105" width="8" height="10" rx="1" fill="#f59e0b" opacity="0.4"/>
          <text x="356" y="113" font-size="7" fill="#94a3b8">1st max</text>
          <rect x="345" y="195" width="8" height="10" rx="1" fill="#f59e0b" opacity="0.4"/>
          <text x="356" y="203" font-size="7" fill="#94a3b8">1st max</text>
          <rect x="345" y="80" width="4" height="6" rx="1" fill="#f59e0b" opacity="0.2"/>
          <rect x="345" y="222" width="4" height="6" rx="1" fill="#f59e0b" opacity="0.2"/>
          <!-- D label -->
          <line x1="98" y1="265" x2="336" y2="265" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrowDiff)"/>
          <text x="215" y="278" text-anchor="middle" font-size="11" fill="#8b5cf6" font-weight="600">D</text>
        </svg>
        <div class="diagram-caption">Single slit diffraction: each point within the slit acts as a secondary source (Huygens). They interfere to produce the diffraction pattern.</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Condition for Minima (Dark Bands)</span>
        a sin θ = nλ &nbsp;&nbsp; (n = 1, 2, 3, ... but NOT 0)
      </div>
      <div class="formula-box">
        <span class="formula-label">Condition for Secondary Maxima</span>
        a sin θ = (2n+1)*λ/2 &nbsp;&nbsp; (n = 1, 2, 3, ...)
      </div>
      <div class="formula-box">
        <span class="formula-label">Width of Central Maximum</span>
        Linear width = 2*λD/a &nbsp;&nbsp;|&nbsp;&nbsp; Angular width = 2λ/a
      </div>
      <div class="key-point"><strong>CRITICAL POINT:</strong> The central maximum width = 2*λD/a, while each secondary maximum width = λD/a. So the <strong>central maximum is TWICE as wide</strong> as any secondary maximum. This is a key difference from YDSE (where all fringes have equal width).</div>
      <div class="key-point"><strong>Solved Problem:</strong><br>
        <em>Light of wavelength 600 nm passes through a single slit of width 0.1 mm. A screen is placed at 1 m from the slit. Find the width of the central maximum.</em><br><br>
        <strong>Solution:</strong><br>
        Width of central maximum = 2*λD/a<br>
        = 2 x (600 x 10<sup>-9</sup>) x 1 / (0.1 x 10<sup>-3</sup>)<br>
        = 2 x 600 x 10<sup>-9</sup> / 10<sup>-4</sup><br>
        = 2 x 6 x 10<sup>-3</sup><br>
        = 0.012 m = <strong>12 mm</strong><br><br>
        Note: Width of first secondary maximum = 12/2 = 6 mm (half the central max width).
      </div>
      <div class="remember-box"><strong>Exam Tip:</strong> Central max in diffraction is TWICE as wide as other maxima. This is asked directly or indirectly in almost every exam. Also remember: as slit width 'a' decreases, the pattern spreads out MORE (inverse relationship).</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> In YDSE, d sin θ = nλ gives BRIGHT fringes. In single slit, a sin θ = nλ gives DARK fringes (minima). The conditions are swapped! This is the #1 trap in MCQs.</div>
    `
  },
  {
    id: 19, level: "exam",
    title: "Polarization — Malus's Law & Brewster's Law — Solved Board Problems",
    body: `
      <p>Polarization questions carry 2-3 marks every year. The two must-know laws are <strong>Malus's Law</strong> and <strong>Brewster's Law</strong>.</p>
      <div class="diagram-container">
        <svg width="460" height="220" viewBox="0 0 460 220">
          <defs>
            <marker id="arrowPol" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Unpolarized light symbol -->
          <circle cx="40" cy="110" r="18" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="40" y1="92" x2="40" y2="128" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="22" y1="110" x2="58" y2="110" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="27" y1="97" x2="53" y2="123" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="53" y1="97" x2="27" y2="123" stroke="#dc2626" stroke-width="1.5"/>
          <text x="40" y="145" text-anchor="middle" font-size="9" fill="#dc2626">Unpolarised</text>
          <text x="40" y="157" text-anchor="middle" font-size="9" fill="#dc2626">I0</text>
          <!-- Arrow to P1 -->
          <line x1="62" y1="110" x2="108" y2="110" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowPol)"/>
          <!-- Polariser P1 -->
          <rect x="115" y="65" width="10" height="90" rx="3" fill="#a78bfa" opacity="0.5" stroke="#7c3aed" stroke-width="1.5"/>
          <line x1="120" y1="70" x2="120" y2="150" stroke="#7c3aed" stroke-width="1.5"/>
          <text x="120" y="55" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="600">Polariser (P1)</text>
          <text x="120" y="170" text-anchor="middle" font-size="9" fill="#7c3aed">Pass axis: vertical</text>
          <!-- After P1: polarised, I0/2 -->
          <line x1="145" y1="110" x2="145" y2="85" stroke="#16a34a" stroke-width="2"/>
          <line x1="145" y1="110" x2="145" y2="135" stroke="#16a34a" stroke-width="2"/>
          <text x="165" y="90" font-size="9" fill="#16a34a" font-weight="600">I = I0/2</text>
          <text x="165" y="102" font-size="8" fill="#16a34a">(plane polarised)</text>
          <!-- Arrow to P2 -->
          <line x1="180" y1="110" x2="230" y2="110" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowPol)"/>
          <!-- Analyser P2 (at angle θ) -->
          <rect x="238" y="65" width="10" height="90" rx="3" fill="#fbbf24" opacity="0.5" stroke="#d97706" stroke-width="1.5"/>
          <line x1="243" y1="72" x2="243" y2="148" stroke="#d97706" stroke-width="1.5" transform="rotate(30,243,110)"/>
          <text x="243" y="55" text-anchor="middle" font-size="10" fill="#d97706" font-weight="600">Analyser (P2)</text>
          <text x="243" y="175" text-anchor="middle" font-size="9" fill="#d97706">At angle θ to P1</text>
          <!-- Angle theta arc -->
          <path d="M243,90 A20,20 0 0,1 253,95" fill="none" stroke="#d97706" stroke-width="1.2"/>
          <text x="260" y="88" font-size="10" fill="#d97706">θ</text>
          <!-- After P2 -->
          <line x1="268" y1="110" x2="320" y2="110" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowPol)"/>
          <text x="340" y="105" font-size="10" fill="#475569" font-weight="600">I = (I0/2)*cos²θ</text>
          <text x="340" y="122" font-size="9" fill="#475569">(Malus's Law)</text>
        </svg>
        <div class="diagram-caption">Light through two Polaroids: unpolarised I0 --> polariser gives I0/2 --> analyser applies Malus's law</div>
      </div>
      <div class="key-point"><strong>What is Polarization?</strong><br>
        - In unpolarised light, the electric field (E) vibrates in <strong>all directions perpendicular</strong> to the direction of propagation<br>
        - A polariser allows vibrations in <strong>only one direction</strong> (its pass axis)<br>
        - This proves light is a <strong>transverse wave</strong> (longitudinal waves cannot be polarised!)
      </div>
      <div class="formula-box">
        <span class="formula-label">Malus's Law</span>
        I = I0 * cos²θ &nbsp;&nbsp; (θ = angle between pass axes)
      </div>
      <div class="formula-box">
        <span class="formula-label">Brewster's Law</span>
        tan i<sub>B</sub> = n2/n1 &nbsp;&nbsp; (i<sub>B</sub> = Brewster angle / polarising angle)
      </div>
      <div class="key-point"><strong>Key Property at Brewster's Angle:</strong><br>
        Reflected ray is perpendicular to refracted ray: i<sub>B</sub> + r = 90 deg<br>
        The reflected light is <strong>completely plane polarised</strong>.
      </div>
      <div class="key-point"><strong>Solved Problem 1: Two Polaroids at 60 deg</strong><br>
        <em>Unpolarised light of intensity I0 passes through two Polaroids whose pass axes make an angle of 60 deg. Find the intensity of transmitted light.</em><br><br>
        <strong>Solution:</strong><br>
        Step 1: After first Polaroid: I1 = I0/2 (unpolarised becomes I0/2)<br>
        Step 2: After second Polaroid (Malus's law): I2 = I1 * cos<sup>2</sup>(60 deg)<br>
        I2 = (I0/2) * (1/2)<sup>2</sup> = (I0/2) * (1/4) = <strong>I0/8</strong>
      </div>
      <div class="key-point"><strong>Solved Problem 2: Brewster's Angle for Glass</strong><br>
        <em>Find the Brewster angle for glass of refractive index 1.5. Also find the angle of refraction at this angle.</em><br><br>
        <strong>Solution:</strong><br>
        tan i<sub>B</sub> = n = 1.5<br>
        i<sub>B</sub> = tan<sup>-1</sup>(1.5) = <strong>56.3 deg</strong><br><br>
        At Brewster's angle: i<sub>B</sub> + r = 90 deg<br>
        r = 90 - 56.3 = <strong>33.7 deg</strong><br>
        (Reflected and refracted rays are perpendicular!)
      </div>
      <div class="remember-box"><strong>CRITICAL Trick:</strong> When unpolarised light hits the first polariser, intensity becomes <strong>I0/2 (NOT I0!)</strong>. Forgetting this factor of 1/2 is the single most common mistake in polarization numericals. Malus's law I = I0*cos²θ applies only to ALREADY polarised light hitting an analyser.</div>
      <div class="mistake-box"><strong>Common Mistake:</strong> For the two-Polaroid problem, students write I = I0*cos<sup>2</sup>(60) = I0/4. WRONG! The correct answer is (I0/2)*cos<sup>2</sup>(60) = I0/8. Always remember: first polariser gives I0/2, THEN apply Malus's law.</div>
    `
  },
  {
    id: 20, level: "exam",
    title: "Previous Year CBSE Patterns + Quick Formula Reference — Wave Optics",
    body: `
      <p>Here is a complete breakdown of what CBSE has asked in Wave Optics over the last 10 years, along with solved board-level problems and a formula quick-reference card.</p>
      <div class="key-point"><strong>Most Repeated Questions (2015-2024):</strong><br>
        1. <strong>Derive Snell's law using Huygens principle</strong> — appeared 8/10 years (3-5 marks)<br>
        2. <strong>YDSE fringe width derivation</strong> — appeared 7/10 years (3 marks)<br>
        3. <strong>What happens when D/d/λ changes in YDSE</strong> — appeared 6/10 years (1-2 marks)<br>
        4. <strong>Difference between interference and diffraction</strong> — appeared 5/10 years (3 marks)<br>
        5. <strong>Malus's law numerical</strong> — appeared 5/10 years (2 marks)<br>
        6. <strong>Single slit diffraction: central max width</strong> — appeared 4/10 years (2-3 marks)<br>
        7. <strong>Brewster's law derivation/numerical</strong> — appeared 4/10 years (2 marks)<br>
        8. <strong>Effect of glass slab in YDSE</strong> — appeared 3/10 years (2-3 marks)
      </div>
      <div class="key-point"><strong>Solved Board Problem 1 (5-mark pattern):</strong><br>
        <em>"(a) Using Huygens principle, derive the law of refraction. (b) In YDSE, what is the effect on the fringe pattern if (i) screen is moved away from slits, (ii) source slit is replaced by white light source?"</em><br><br>
        <strong>Answer Strategy:</strong><br>
        (a) Draw the diagram (1 mark). Show wavefront AB incident on surface, wavefront CD after refraction. Use time taken: BC/v1 = AD/v2. Show sin(i)/sin(r) = v1/v2 = n2/n1 (2 marks).<br>
        (b)(i) When screen moves away, D increases, so beta = λD/d increases. Fringes become wider. (1 mark)<br>
        (b)(ii) Central fringe becomes white. Coloured fringes appear on sides — violet closest to centre, red farthest. Higher order fringes overlap. (1 mark)
      </div>
      <div class="key-point"><strong>Solved Board Problem 2 (3-mark numerical):</strong><br>
        <em>"In YDSE, d = 0.2 mm, D = 1 m. Fringes are observed using light of λ = 500 nm. A thin glass sheet of μ = 1.5 and thickness t = 0.1 mm is placed over one slit. Find (i) fringe width, (ii) shift of central fringe."</em><br><br>
        <strong>Solution:</strong><br>
        (i) Fringe width: beta = λD/d = (500 x 10<sup>-9</sup> x 1)/(0.2 x 10<sup>-3</sup>) = <strong>2.5 mm</strong><br>
        (ii) Shift = (μ−1)*t*D/d = (1.5-1) x 0.1 x 10<sup>-3</sup> x 1 / (0.2 x 10<sup>-3</sup>)<br>
        = 0.5 x 0.1/0.2 = <strong>0.25 m = 250 mm</strong><br>
        Number of fringes shifted = shift/beta = 250/2.5 = <strong>100 fringes</strong>
      </div>
      <div class="key-point"><strong>Solved Board Problem 3 (2-mark numerical):</strong><br>
        <em>"Two Polaroids P1 and P2 are placed with pass axes perpendicular. A third Polaroid P3 is placed between them at 45 deg to both. Unpolarised light of intensity I0 enters P1. Find the intensity emerging from P2."</em><br><br>
        <strong>Solution:</strong><br>
        After P1: I1 = I0/2 (unpolarised becomes half)<br>
        After P3 (at 45 deg to P1): I2 = (I0/2)*cos<sup>2</sup>(45) = (I0/2)*(1/2) = I0/4<br>
        After P2 (at 45 deg to P3): I3 = (I0/4)*cos<sup>2</sup>(45) = (I0/4)*(1/2) = <strong>I0/8</strong>
      </div>
      <div class="key-point"><strong>5-Mark Answer Strategy:</strong><br>
        For derivation questions (Huygens/YDSE), follow this structure:<br>
        1. <strong>Diagram</strong> — neat, labeled (1 mark guaranteed)<br>
        2. <strong>Setup description</strong> — one or two lines explaining the geometry (0.5 mark)<br>
        3. <strong>Mathematical derivation</strong> — step by step, showing all algebra (2.5 marks)<br>
        4. <strong>Final boxed result</strong> — clearly state the law/formula (1 mark)<br>
        Total = 5 marks. Never skip the diagram!
      </div>
      <table class="compare-table">
        <tr><th>Formula</th><th>Expression</th><th>Key Variable</th></tr>
        <tr><td>YDSE fringe width</td><td>beta = λD/d</td><td>d = slit separation</td></tr>
        <tr><td>Bright fringe position</td><td>y = n*λD/d</td><td>n = 0,1,2,...</td></tr>
        <tr><td>Dark fringe position</td><td>y = (2n-1)*λD/(2d)</td><td>n = 1,2,3,...</td></tr>
        <tr><td>Glass slab shift</td><td>(μ−1)*t*D/d</td><td>mu = RI of slab</td></tr>
        <tr><td>Diffraction minima</td><td>a sin θ = nλ</td><td>a = slit width</td></tr>
        <tr><td>Central max width</td><td>2*λD/a</td><td>TWICE secondary max</td></tr>
        <tr><td>Malus's law</td><td>I = I0*cos²θ</td><td>θ = angle between axes</td></tr>
        <tr><td>Brewster's law</td><td>tan i<sub>B</sub> = n</td><td>i<sub>B</sub> + r = 90 deg</td></tr>
        <tr><td>Resolving power (telescope)</td><td>D/(1.22*λ)</td><td>D = aperture diameter</td></tr>
        <tr><td>Snell's law (Huygens)</td><td>sin(i)/sin(r) = v1/v2</td><td>= n2/n1</td></tr>
      </table>
      <div class="remember-box"><strong>Last-Minute Revision Checklist:</strong><br>
        1. Huygens derivation of Snell's law — practice the diagram and derivation 3 times<br>
        2. YDSE: know beta = λD/d and all "what happens when..." scenarios<br>
        3. Single slit: central max = 2*λD/a (TWICE as wide!)<br>
        4. Polarization: unpolarised --> first polariser gives I0/2, then apply Malus's law<br>
        5. Brewster angle for glass = 56.3 deg, for water = 53.1 deg<br>
        6. Interference vs diffraction — memorise 5 differences
      </div>
    `
  }
];

if (typeof module !== 'undefined') module.exports = { ch10Concepts };
