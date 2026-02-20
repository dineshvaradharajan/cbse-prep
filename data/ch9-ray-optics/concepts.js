// Ray Optics and Optical Instruments — Concepts
const ch9Concepts = [
  {
    id: 1, level: "basic",
    title: "Reflection of Light — Laws and Plane Mirrors",
    body: `
      <p>When light bounces off a surface, it follows two simple but fundamental laws.</p>
      <div class="formula-box">
        <span class="formula-label">Laws of Reflection</span>
        1. The angle of incidence (i) = angle of reflection (r)<br>
        2. The incident ray, reflected ray, and normal all lie in the same plane
      </div>
      <div class="diagram-container">
        <svg width="420" height="220" viewBox="0 0 420 220">
          <defs>
            <marker id="arrRef" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrInc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
          </defs>
          <!-- Mirror surface -->
          <line x1="60" y1="180" x2="360" y2="180" stroke="#64748b" stroke-width="3"/>
          <line x1="60" y1="183" x2="80" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="90" y1="183" x2="110" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="120" y1="183" x2="140" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="150" y1="183" x2="170" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="180" y1="183" x2="200" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="210" y1="183" x2="230" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="240" y1="183" x2="260" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="270" y1="183" x2="290" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="300" y1="183" x2="320" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <line x1="330" y1="183" x2="350" y2="195" stroke="#94a3b8" stroke-width="1"/>
          <!-- Normal (dashed) -->
          <line x1="210" y1="180" x2="210" y2="30" stroke="#64748b" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="215" y="45" font-size="12" fill="#64748b">Normal</text>
          <!-- Incident ray -->
          <line x1="90" y1="40" x2="207" y2="177" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrInc)"/>
          <text x="110" y="90" font-size="13" font-weight="bold" fill="#2563eb">Incident ray</text>
          <!-- Reflected ray -->
          <line x1="213" y1="177" x2="330" y2="40" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrRef)"/>
          <text x="280" y="90" font-size="13" font-weight="bold" fill="#dc2626">Reflected ray</text>
          <!-- Angle arcs -->
          <path d="M210,140 A40,40 0 0,0 182,160" fill="none" stroke="#2563eb" stroke-width="1.5"/>
          <text x="175" y="140" font-size="13" fill="#2563eb">i</text>
          <path d="M210,140 A40,40 0 0,1 238,160" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <text x="240" y="140" font-size="13" fill="#dc2626">r</text>
          <!-- Point of incidence -->
          <circle cx="210" cy="180" r="3" fill="#f59e0b"/>
          <text x="195" y="210" font-size="11" fill="#64748b">Point of incidence</text>
        </svg>
        <div class="diagram-caption">Reflection at a plane mirror: angle of incidence i = angle of reflection r</div>
      </div>
      <div class="key-point"><strong>Plane mirror image properties:</strong><br>
      - Image is virtual, erect, same size as object<br>
      - Image distance behind mirror = object distance in front<br>
      - Image is laterally inverted (left-right reversed)</div>
      <div class="remember-box"><strong>Quick trick:</strong> If you walk towards a plane mirror at speed v, your image approaches you at speed 2v (relative to you). If the mirror moves towards you at speed v, the image approaches at speed 2v relative to you as well.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Spherical Mirrors — Concave and Convex",
    body: `
      <p>A spherical mirror is a section of a hollow sphere. The two types are <strong>concave</strong> (reflecting surface curves inward) and <strong>convex</strong> (reflecting surface curves outward).</p>
      <div class="key-point"><strong>Key terms:</strong><br>
      - <strong>Centre of curvature (C):</strong> Centre of the sphere of which the mirror is a part<br>
      - <strong>Radius of curvature (R):</strong> Radius of that sphere<br>
      - <strong>Pole (P):</strong> Centre of the mirror surface<br>
      - <strong>Principal axis:</strong> Line joining P and C<br>
      - <strong>Focus (F):</strong> Point where parallel rays converge (concave) or appear to diverge from (convex)<br>
      - <strong>Focal length (f):</strong> Distance from P to F; <strong>f = R/2</strong></div>
      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <defs>
            <marker id="arrMir" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrMirR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
          </defs>
          <text x="110" y="20" font-size="14" font-weight="bold" fill="#1e293b">Concave Mirror</text>
          <!-- Concave mirror arc -->
          <path d="M200,40 Q160,130 200,220" fill="none" stroke="#475569" stroke-width="3"/>
          <!-- Principal axis -->
          <line x1="20" y1="130" x2="200" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
          <!-- Labels -->
          <circle cx="200" cy="130" r="3" fill="#f59e0b"/>
          <text x="202" y="125" font-size="11" fill="#1e293b">P</text>
          <circle cx="140" cy="130" r="3" fill="#22c55e"/>
          <text x="135" y="148" font-size="11" fill="#22c55e">F</text>
          <circle cx="80" cy="130" r="3" fill="#dc2626"/>
          <text x="75" y="148" font-size="11" fill="#dc2626">C</text>
          <!-- Parallel ray converging -->
          <line x1="20" y1="80" x2="195" y2="80" stroke="#2563eb" stroke-width="2" marker-end="url(#arrMir)"/>
          <line x1="195" y1="80" x2="140" y2="130" stroke="#2563eb" stroke-width="2" marker-end="url(#arrMir)"/>
          <line x1="20" y1="180" x2="195" y2="180" stroke="#2563eb" stroke-width="2" marker-end="url(#arrMir)"/>
          <line x1="195" y1="180" x2="140" y2="130" stroke="#2563eb" stroke-width="2" marker-end="url(#arrMir)"/>
          <text x="25" y="250" font-size="11" fill="#64748b">Parallel rays converge at F</text>

          <!-- Convex mirror -->
          <text x="320" y="20" font-size="14" font-weight="bold" fill="#1e293b">Convex Mirror</text>
          <path d="M240,40 Q280,130 240,220" fill="none" stroke="#475569" stroke-width="3"/>
          <!-- Principal axis -->
          <line x1="240" y1="130" x2="420" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="240" cy="130" r="3" fill="#f59e0b"/>
          <text x="225" y="125" font-size="11" fill="#1e293b">P</text>
          <circle cx="300" cy="130" r="3" fill="#22c55e"/>
          <text x="295" y="148" font-size="11" fill="#22c55e">F</text>
          <circle cx="360" cy="130" r="3" fill="#dc2626"/>
          <text x="355" y="148" font-size="11" fill="#dc2626">C</text>
          <!-- Parallel rays diverging -->
          <line x1="420" y1="80" x2="245" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arrMirR)"/>
          <line x1="245" y1="80" x2="400" y2="60" stroke="#dc2626" stroke-width="2" marker-end="url(#arrMirR)"/>
          <line x1="420" y1="180" x2="245" y2="180" stroke="#dc2626" stroke-width="2" marker-end="url(#arrMirR)"/>
          <line x1="245" y1="180" x2="400" y2="200" stroke="#dc2626" stroke-width="2" marker-end="url(#arrMirR)"/>
          <!-- Virtual focus dashed lines -->
          <line x1="245" y1="80" x2="300" y2="130" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="245" y1="180" x2="300" y2="130" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="250" y="250" font-size="11" fill="#64748b">Rays appear to diverge from F (virtual)</text>
        </svg>
        <div class="diagram-caption">Concave mirror converges parallel rays at F; convex mirror diverges them (virtual focus behind mirror)</div>
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Concave Mirror</th><th>Convex Mirror</th></tr>
        <tr><td>Focus</td><td>Real (in front)</td><td>Virtual (behind)</td></tr>
        <tr><td>Image (distant object)</td><td>Real, inverted</td><td>Virtual, erect, diminished</td></tr>
        <tr><td>Used in</td><td>Shaving mirrors, headlights, solar concentrators</td><td>Rear-view mirrors, security mirrors</td></tr>
        <tr><td>Sign of f</td><td>Negative (new Cartesian)</td><td>Positive (new Cartesian)</td></tr>
      </table>
      <div class="remember-box"><strong>CBSE favourite:</strong> Convex mirrors are used as rear-view mirrors because they always form erect, diminished images and have a wider field of view.</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Mirror Formula and Magnification",
    body: `
      <p>The mirror formula relates object distance (u), image distance (v), and focal length (f).</p>
      <div class="formula-box">
        <span class="formula-label">Mirror Formula</span>
        1/v + 1/u = 1/f
      </div>
      <div class="formula-box">
        <span class="formula-label">Linear Magnification</span>
        m = h'/h = -v/u
      </div>
      <div class="key-point"><strong>New Cartesian Sign Convention:</strong><br>
      1. All distances measured from the <strong>pole (P)</strong> of the mirror<br>
      2. Distances in the direction of incident light are <strong>positive</strong> (+x direction)<br>
      3. Distances against the direction of incident light are <strong>negative</strong> (-x direction)<br>
      4. Heights above principal axis are <strong>positive</strong><br>
      5. Heights below principal axis are <strong>negative</strong></div>
      <div class="key-point"><strong>Sign table for concave mirror (object on left):</strong><br>
      - Object distance u: always <strong>negative</strong> (object is to the left of P)<br>
      - Focal length f: <strong>negative</strong> (focus is in front of concave mirror)<br>
      - Image distance v: negative if real image (in front), positive if virtual (behind)</div>
      <div class="key-point"><strong>Magnification interpretation:</strong><br>
      - m positive: image is <strong>erect</strong><br>
      - m negative: image is <strong>inverted</strong><br>
      - |m| > 1: image is <strong>enlarged</strong><br>
      - |m| < 1: image is <strong>diminished</strong><br>
      - |m| = 1: same size</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting to apply sign convention. Always assign signs BEFORE substituting into the formula. For concave mirror, both u and f are negative. Many students lose marks by mixing up signs!</div>
      <div class="remember-box"><strong>Quick check:</strong> For a concave mirror with object beyond C:<br>
      u = negative, f = negative. Solving 1/v = 1/f - 1/u gives v = negative (real image). m = -v/u = negative (inverted). This matches the ray diagram!</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Refraction of Light and Snell's Law",
    body: `
      <p>When light passes from one transparent medium to another, it changes direction at the boundary. This is <strong>refraction</strong>.</p>
      <div class="formula-box">
        <span class="formula-label">Snell's Law (Law of Refraction)</span>
        n<sub>1</sub> sin i = n<sub>2</sub> sin r &nbsp;&nbsp;or&nbsp;&nbsp; sin i / sin r = n<sub>2</sub>/n<sub>1</sub> = n<sub>21</sub>
      </div>
      <div class="diagram-container">
        <svg width="400" height="280" viewBox="0 0 400 280">
          <defs>
            <marker id="arrSnI" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrSnR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
          </defs>
          <!-- Medium 1 (lighter) -->
          <rect x="0" y="0" width="400" height="140" fill="#dbeafe" opacity="0.5"/>
          <text x="15" y="30" font-size="13" fill="#2563eb" font-weight="bold">Medium 1 (n1)</text>
          <text x="15" y="48" font-size="11" fill="#2563eb">Rarer (e.g., air)</text>
          <!-- Medium 2 (darker) -->
          <rect x="0" y="140" width="400" height="140" fill="#bfdbfe" opacity="0.5"/>
          <text x="15" y="265" font-size="13" fill="#1e40af" font-weight="bold">Medium 2 (n2)</text>
          <text x="15" y="278" font-size="11" fill="#1e40af">Denser (e.g., glass)</text>
          <!-- Interface -->
          <line x1="0" y1="140" x2="400" y2="140" stroke="#475569" stroke-width="2"/>
          <!-- Normal -->
          <line x1="200" y1="20" x2="200" y2="260" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,4"/>
          <text x="205" y="35" font-size="11" fill="#64748b">Normal</text>
          <!-- Incident ray -->
          <line x1="100" y1="20" x2="197" y2="137" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrSnI)"/>
          <text x="105" y="70" font-size="12" font-weight="bold" fill="#2563eb">Incident ray</text>
          <!-- Refracted ray (bends towards normal in denser medium) -->
          <line x1="203" y1="143" x2="270" y2="260" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrSnR)"/>
          <text x="250" y="220" font-size="12" font-weight="bold" fill="#dc2626">Refracted ray</text>
          <!-- Angle of incidence -->
          <path d="M200,100 A40,40 0 0,0 172,120" fill="none" stroke="#2563eb" stroke-width="1.5"/>
          <text x="160" y="100" font-size="14" fill="#2563eb" font-weight="bold">i</text>
          <!-- Angle of refraction -->
          <path d="M200,180 A40,40 0 0,1 215,177" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <text x="218" y="178" font-size="14" fill="#dc2626" font-weight="bold">r</text>
          <!-- Note -->
          <text x="260" y="130" font-size="11" fill="#475569">Bends towards normal</text>
          <text x="260" y="145" font-size="11" fill="#475569">(entering denser medium)</text>
        </svg>
        <div class="diagram-caption">Refraction: light bends towards the normal when entering a denser medium (n2 > n1), so r < i</div>
      </div>
      <div class="key-point"><strong>Refractive index:</strong><br>
      - Absolute refractive index: n = c/v (speed of light in vacuum / speed in medium)<br>
      - Relative refractive index: n<sub>21</sub> = n<sub>2</sub>/n<sub>1</sub> = v<sub>1</sub>/v<sub>2</sub><br>
      - n for vacuum = 1, for air approximately 1, for water = 1.33, for glass approximately 1.5</div>
      <div class="key-point"><strong>When light goes from rarer to denser medium:</strong> it bends <strong>towards</strong> the normal (r < i)<br>
      <strong>When light goes from denser to rarer medium:</strong> it bends <strong>away from</strong> the normal (r > i)</div>
      <div class="remember-box"><strong>CBSE tip:</strong> The frequency of light does NOT change during refraction. Only wavelength and speed change. Use: n = c/v and v = f * lambda.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Writing Snell's law as n1 sin r = n2 sin i (mixing up i and r). Remember: n1 sin(angle in medium 1) = n2 sin(angle in medium 2).</div>
    `
  },
  {
    id: 5, level: "basic",
    title: "Total Internal Reflection (TIR)",
    body: `
      <p>When light travels from a <strong>denser to a rarer medium</strong> and the angle of incidence exceeds the <strong>critical angle</strong>, the light is completely reflected back. This is Total Internal Reflection.</p>
      <div class="formula-box">
        <span class="formula-label">Critical Angle</span>
        sin i<sub>c</sub> = n<sub>2</sub>/n<sub>1</sub> = 1/n (when medium 2 is air, n<sub>2</sub> = 1)
      </div>
      <div class="diagram-container">
        <svg width="440" height="240" viewBox="0 0 440 240">
          <defs>
            <marker id="arrTIR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrTIR2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrTIR3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- Denser medium below -->
          <rect x="0" y="120" width="440" height="120" fill="#dbeafe" opacity="0.4"/>
          <text x="5" y="230" font-size="11" fill="#1e40af">Denser medium (n1)</text>
          <text x="5" y="30" font-size="11" fill="#64748b">Rarer medium (n2)</text>
          <line x1="0" y1="120" x2="440" y2="120" stroke="#475569" stroke-width="2"/>

          <!-- Case 1: i < ic -->
          <line x1="60" y1="220" x2="100" y2="120" stroke="#2563eb" stroke-width="2" marker-end="url(#arrTIR)"/>
          <line x1="100" y1="120" x2="130" y2="30" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrTIR)"/>
          <line x1="100" y1="120" x2="60" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="55" y="15" font-size="11" fill="#2563eb" font-weight="bold">i &lt; i<sub>c</sub></text>
          <text x="50" y="145" font-size="10" fill="#64748b">Partial refraction</text>

          <!-- Case 2: i = ic (along surface) -->
          <line x1="200" y1="220" x2="240" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arrTIR2)"/>
          <line x1="240" y1="120" x2="340" y2="120" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrTIR2)"/>
          <text x="220" y="15" font-size="11" fill="#dc2626" font-weight="bold">i = i<sub>c</sub></text>
          <text x="195" y="145" font-size="10" fill="#64748b">Grazes along surface</text>

          <!-- Case 3: i > ic (TIR) -->
          <line x1="350" y1="220" x2="390" y2="120" stroke="#22c55e" stroke-width="2" marker-end="url(#arrTIR3)"/>
          <line x1="390" y1="120" x2="430" y2="220" stroke="#22c55e" stroke-width="2" marker-end="url(#arrTIR3)"/>
          <text x="365" y="15" font-size="11" fill="#22c55e" font-weight="bold">i &gt; i<sub>c</sub> (TIR)</text>
          <text x="355" y="145" font-size="10" fill="#64748b">Total reflection</text>

          <!-- Normals -->
          <line x1="100" y1="120" x2="100" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="240" y1="120" x2="240" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="390" y1="120" x2="390" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
        </svg>
        <div class="diagram-caption">Three cases: (1) i &lt; i<sub>c</sub>: partial refraction, (2) i = i<sub>c</sub>: ray grazes surface, (3) i &gt; i<sub>c</sub>: total internal reflection</div>
      </div>
      <div class="key-point"><strong>Conditions for TIR:</strong><br>
      1. Light must travel from <strong>denser to rarer</strong> medium<br>
      2. Angle of incidence must be <strong>greater than critical angle</strong></div>
      <div class="key-point"><strong>Applications of TIR:</strong><br>
      - <strong>Optical fibres:</strong> Light undergoes repeated TIR inside the fibre core<br>
      - <strong>Prisms:</strong> 45-45-90 degree prisms (TIR at 45 degrees since critical angle for glass is about 42 degrees)<br>
      - <strong>Mirage:</strong> TIR of light from heated air layers near ground<br>
      - <strong>Sparkling of diamond:</strong> Low critical angle (24.4 degrees) causes extensive TIR</div>
      <div class="remember-box"><strong>Critical angle values to remember:</strong><br>
      - Water: i<sub>c</sub> = 48.75 degrees (approximately 49 degrees)<br>
      - Glass (n=1.5): i<sub>c</sub> = 41.8 degrees (approximately 42 degrees)<br>
      - Diamond (n=2.42): i<sub>c</sub> = 24.4 degrees</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Refraction at Spherical Surfaces and Lenses",
    body: `
      <p>When light refracts at a curved surface separating two media, we get a relation between object distance, image distance, refractive indices, and radius of curvature.</p>
      <div class="formula-box">
        <span class="formula-label">Refraction at a Single Spherical Surface</span>
        n<sub>2</sub>/v - n<sub>1</sub>/u = (n<sub>2</sub> - n<sub>1</sub>)/R
      </div>
      <div class="formula-box">
        <span class="formula-label">Lens Maker's Formula</span>
        1/f = (n<sub>21</sub> - 1) [1/R<sub>1</sub> - 1/R<sub>2</sub>]
      </div>
      <p>where n<sub>21</sub> = n<sub>lens</sub>/n<sub>medium</sub>, R<sub>1</sub> = radius of first surface, R<sub>2</sub> = radius of second surface.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <defs>
            <marker id="arrLn1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrLn2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
          </defs>
          <!-- Convex lens -->
          <text x="160" y="18" font-size="13" font-weight="bold" fill="#1e293b">Convex (Converging) Lens</text>
          <ellipse cx="210" cy="110" rx="12" ry="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <!-- Principal axis -->
          <line x1="30" y1="110" x2="400" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
          <!-- F and 2F labels -->
          <circle cx="150" cy="110" r="3" fill="#22c55e"/>
          <text x="145" y="130" font-size="11" fill="#22c55e">F<sub>1</sub></text>
          <circle cx="270" cy="110" r="3" fill="#22c55e"/>
          <text x="265" y="130" font-size="11" fill="#22c55e">F<sub>2</sub></text>
          <circle cx="90" cy="110" r="3" fill="#f59e0b"/>
          <text x="80" y="130" font-size="11" fill="#f59e0b">2F<sub>1</sub></text>
          <circle cx="330" cy="110" r="3" fill="#f59e0b"/>
          <text x="320" y="130" font-size="11" fill="#f59e0b">2F<sub>2</sub></text>
          <!-- Object arrow at 2F -->
          <line x1="90" y1="110" x2="90" y2="55" stroke="#1e293b" stroke-width="2.5"/>
          <polygon points="85,58 95,58 90,45" fill="#1e293b"/>
          <text x="78" y="48" font-size="10" fill="#1e293b">Object</text>
          <!-- Ray 1: parallel to axis, then through F2 -->
          <line x1="90" y1="55" x2="210" y2="55" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrLn1)"/>
          <line x1="210" y1="55" x2="330" y2="165" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrLn1)"/>
          <!-- Ray 2: through F1 to lens, then parallel -->
          <line x1="90" y1="55" x2="210" y2="165" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrLn2)"/>
          <line x1="210" y1="165" x2="380" y2="165" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrLn2)"/>
          <!-- Image arrow at 2F2 -->
          <line x1="330" y1="110" x2="330" y2="165" stroke="#1e293b" stroke-width="2.5"/>
          <polygon points="325,162 335,162 330,175" fill="#1e293b"/>
          <text x="335" y="175" font-size="10" fill="#1e293b">Image</text>
          <text x="260" y="200" font-size="10" fill="#64748b">Object at 2F: Image at 2F, same size, inverted</text>
        </svg>
        <div class="diagram-caption">Convex lens: object at 2F produces a real, inverted, same-size image at 2F on the other side</div>
      </div>
      <div class="key-point"><strong>Sign convention for lenses (also New Cartesian):</strong><br>
      - Distances measured from the <strong>optical centre (O)</strong><br>
      - Convex lens: f is <strong>positive</strong><br>
      - Concave lens: f is <strong>negative</strong></div>
      <div class="remember-box"><strong>Lens Maker's formula tip:</strong> For a biconvex lens with equal radii R:<br>
      R<sub>1</sub> = +R, R<sub>2</sub> = -R (by sign convention)<br>
      1/f = (n - 1)(1/R + 1/R) = (n - 1)(2/R) => f = R/[2(n-1)]</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Thin Lens Formula, Magnification, and Power",
    body: `
      <p>The thin lens formula looks like the mirror formula but with a key sign difference.</p>
      <div class="formula-box">
        <span class="formula-label">Thin Lens Formula</span>
        1/v - 1/u = 1/f
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnification (Lens)</span>
        m = h'/h = v/u
      </div>
      <div class="formula-box">
        <span class="formula-label">Power of a Lens</span>
        P = 1/f (in metres) &nbsp;&nbsp;[Unit: Dioptre (D)]
      </div>
      <div class="key-point"><strong>Mirror vs Lens formula comparison:</strong><br>
      - Mirror: 1/v + 1/u = 1/f; &nbsp; m = -v/u<br>
      - Lens: 1/v - 1/u = 1/f; &nbsp; m = v/u<br>
      Note the sign differences!</div>
      <div class="formula-box">
        <span class="formula-label">Combination of Thin Lenses in Contact</span>
        1/f = 1/f<sub>1</sub> + 1/f<sub>2</sub> + ... &nbsp;&nbsp;or equivalently&nbsp;&nbsp; P = P<sub>1</sub> + P<sub>2</sub> + ...
      </div>
      <div class="key-point"><strong>Important image cases for convex lens:</strong><br>
      - Object at infinity: Image at F (real, point-sized)<br>
      - Object beyond 2F: Image between F and 2F (real, inverted, diminished)<br>
      - Object at 2F: Image at 2F (real, inverted, same size)<br>
      - Object between F and 2F: Image beyond 2F (real, inverted, enlarged)<br>
      - Object at F: Image at infinity<br>
      - Object between F and O: Image on same side (virtual, erect, enlarged)</div>
      <div class="remember-box"><strong>Power:</strong><br>
      - Convex lens: P is positive (converging)<br>
      - Concave lens: P is negative (diverging)<br>
      - If f = 20 cm = 0.2 m, then P = 1/0.2 = +5 D (convex)<br>
      - If f = -25 cm = -0.25 m, then P = -4 D (concave)</div>
      <div class="mistake-box"><strong>Common mistake:</strong> When combining lenses, always convert focal lengths to metres before calculating power. Students often mix up cm and m, getting answers off by a factor of 100.</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Refraction Through a Prism",
    body: `
      <p>A prism disperses white light because the refractive index varies with wavelength. The key formula connects the angle of the prism, deviation, and angles of refraction.</p>
      <div class="formula-box">
        <span class="formula-label">Prism Formula</span>
        A = r<sub>1</sub> + r<sub>2</sub> &nbsp;&nbsp;and&nbsp;&nbsp; delta = i<sub>1</sub> + i<sub>2</sub> - A
      </div>
      <div class="formula-box">
        <span class="formula-label">At Minimum Deviation (δ<sub>m</sub>)</span>
        i<sub>1</sub> = i<sub>2</sub> = i, &nbsp; r<sub>1</sub> = r<sub>2</sub> = A/2, &nbsp; δ<sub>m</sub> = 2i - A<br><br>
        n = sin[(A + δ<sub>m</sub>)/2] / sin(A/2)
      </div>
      <div class="diagram-container">
        <svg width="420" height="250" viewBox="0 0 420 250">
          <defs>
            <marker id="arrPr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrPr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
          </defs>
          <!-- Prism triangle -->
          <polygon points="210,30 80,220 340,220" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" fill-opacity="0.3"/>
          <text x="200" y="25" font-size="13" font-weight="bold" fill="#2563eb">A</text>
          <!-- Labels -->
          <text x="55" y="235" font-size="11" fill="#64748b">Base</text>
          <!-- Incident ray -->
          <line x1="30" y1="100" x2="130" y2="145" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrPr1)"/>
          <text x="40" y="95" font-size="12" fill="#2563eb">Incident ray</text>
          <!-- Internal ray -->
          <line x1="133" y1="147" x2="280" y2="165" stroke="#f59e0b" stroke-width="2"/>
          <!-- Emergent ray -->
          <line x1="283" y1="167" x2="400" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrPr2)"/>
          <text x="330" y="105" font-size="12" fill="#dc2626">Emergent ray</text>
          <!-- Normals at surfaces -->
          <line x1="130" y1="195" x2="130" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
          <line x1="283" y1="215" x2="283" y2="115" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
          <!-- Angles -->
          <text x="88" y="118" font-size="12" fill="#2563eb">i<tspan font-size="9" dy="3">1</tspan></text>
          <text x="148" y="133" font-size="12" fill="#f59e0b">r<tspan font-size="9" dy="3">1</tspan></text>
          <text x="254" y="152" font-size="12" fill="#f59e0b">r<tspan font-size="9" dy="3">2</tspan></text>
          <text x="305" y="143" font-size="12" fill="#dc2626">i<tspan font-size="9" dy="3">2</tspan></text>
          <!-- Deviation angle -->
          <line x1="130" y1="145" x2="250" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="310" y="80" font-size="12" fill="#22c55e" font-weight="bold">delta (deviation)</text>
          <path d="M360,115 Q340,100 350,85" fill="none" stroke="#22c55e" stroke-width="1.5"/>
        </svg>
        <div class="diagram-caption">Light passing through a prism: undergoes deviation delta = i1 + i2 - A</div>
      </div>
      <div class="key-point"><strong>At minimum deviation:</strong><br>
      - The ray passes symmetrically through the prism<br>
      - i<sub>1</sub> = i<sub>2</sub> and r<sub>1</sub> = r<sub>2</sub><br>
      - The refracted ray inside the prism is parallel to the base<br>
      - This is the condition used to determine refractive index of the prism material</div>
      <div class="remember-box"><strong>For a thin prism</strong> (small angle A): δ = (n − 1)A. This is a very useful approximation for quick calculations!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing the prism angle A with the deviation angle delta. Remember: A is fixed (angle of the prism), delta depends on the angle of incidence.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Dispersion of Light and Rainbow",
    body: `
      <p>White light splits into its constituent colours when passing through a prism because the refractive index depends on wavelength. This is <strong>dispersion</strong>.</p>
      <div class="key-point"><strong>VIBGYOR order</strong> (from most deviated to least deviated):<br>
      Violet - Indigo - Blue - Green - Yellow - Orange - Red<br><br>
      <strong>Violet</strong> has the highest n and maximum deviation.<br>
      <strong>Red</strong> has the lowest n and minimum deviation.</div>
      <div class="formula-box">
        <span class="formula-label">Angular Dispersion</span>
        Angular dispersion = delta_V - delta_R = (n<sub>V</sub> - n<sub>R</sub>) A &nbsp;(for thin prism)
      </div>
      <div class="formula-box">
        <span class="formula-label">Dispersive Power</span>
        ω = (n<sub>V</sub> − n<sub>R</sub>) / (n_Y − 1)
      </div>
      <div class="key-point"><strong>Cauchy's relation:</strong> n = A + B/lambda<sup>2</sup> (approximately). Shorter wavelength leads to higher n, hence more deviation.</div>
      <table class="compare-table">
        <tr><th>Colour</th><th>Wavelength Range (nm)</th><th>Refractive Index (glass)</th><th>Deviation</th></tr>
        <tr><td>Violet</td><td>380 - 450</td><td>Highest</td><td>Maximum</td></tr>
        <tr><td>Blue</td><td>450 - 495</td><td>High</td><td>High</td></tr>
        <tr><td>Green</td><td>495 - 570</td><td>Medium</td><td>Medium</td></tr>
        <tr><td>Yellow</td><td>570 - 590</td><td>Medium (reference)</td><td>Medium</td></tr>
        <tr><td>Red</td><td>620 - 750</td><td>Lowest</td><td>Minimum</td></tr>
      </table>
      <div class="key-point"><strong>Rainbow formation:</strong><br>
      - <strong>Primary rainbow:</strong> Two refractions + one internal reflection in water droplets. Red on top, violet at bottom. Angle subtended approximately 42 degrees.<br>
      - <strong>Secondary rainbow:</strong> Two refractions + two internal reflections. Reversed order (violet on top, red at bottom). Angle approximately 52 degrees. Fainter than primary.</div>
      <div class="remember-box"><strong>CBSE tip:</strong> Questions often ask why the sky appears blue (Rayleigh scattering varies as 1/lambda<sup>4</sup>, so shorter wavelengths scatter more) and why sunsets appear red (short wavelengths scattered away during long path through atmosphere).</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Compound Microscope — Ray Diagram and Magnification",
    body: `
      <p>A compound microscope uses two convex lenses: a short focal length <strong>objective</strong> and a longer focal length <strong>eyepiece</strong>.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <defs>
            <marker id="arrMic" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#2563eb"/></marker>
          </defs>
          <!-- Objective lens -->
          <ellipse cx="130" cy="110" rx="8" ry="60" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="115" y="185" font-size="11" font-weight="bold" fill="#2563eb">Objective</text>
          <text x="120" y="198" font-size="10" fill="#2563eb">(f<sub>o</sub> small)</text>
          <!-- Eyepiece lens -->
          <ellipse cx="340" cy="110" rx="8" ry="60" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="323" y="185" font-size="11" font-weight="bold" fill="#f59e0b">Eyepiece</text>
          <text x="323" y="198" font-size="10" fill="#f59e0b">(f<sub>e</sub> larger)</text>
          <!-- Object (small arrow just outside f<sub>o</sub>) -->
          <line x1="85" y1="110" x2="85" y2="85" stroke="#1e293b" stroke-width="2"/>
          <polygon points="81,88 89,88 85,80" fill="#1e293b"/>
          <text x="70" y="78" font-size="10" fill="#1e293b">Object</text>
          <!-- Intermediate image (inverted, between lenses, near f<sub>e</sub>) -->
          <line x1="290" y1="110" x2="290" y2="145" stroke="#dc2626" stroke-width="2"/>
          <polygon points="286,142 294,142 290,150" fill="#dc2626"/>
          <text x="258" y="162" font-size="10" fill="#dc2626">Intermediate</text>
          <text x="262" y="174" font-size="10" fill="#dc2626">image (real)</text>
          <!-- Ray from object through objective -->
          <line x1="85" y1="85" x2="130" y2="85" stroke="#2563eb" stroke-width="1.5"/>
          <line x1="130" y1="85" x2="290" y2="145" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrMic)"/>
          <!-- Ray through centre -->
          <line x1="85" y1="85" x2="290" y2="145" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Final virtual image (arrow on left side, far) -->
          <text x="10" y="30" font-size="10" fill="#22c55e">Final image</text>
          <text x="10" y="42" font-size="10" fill="#22c55e">(virtual, enlarged)</text>
          <text x="10" y="54" font-size="10" fill="#22c55e">at distance D (25cm)</text>
          <!-- Tube length L label -->
          <line x1="130" y1="210" x2="340" y2="210" stroke="#64748b" stroke-width="1"/>
          <line x1="130" y1="205" x2="130" y2="215" stroke="#64748b" stroke-width="1"/>
          <line x1="340" y1="205" x2="340" y2="215" stroke="#64748b" stroke-width="1"/>
          <text x="220" y="208" font-size="10" fill="#64748b" text-anchor="middle">L (tube length)</text>
        </svg>
        <div class="diagram-caption">Compound microscope: objective forms a real intermediate image, eyepiece magnifies it further</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnifying Power (image at D = 25 cm, near point)</span>
        m = -L/f<sub>o</sub> x (1 + D/f<sub>e</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnifying Power (image at infinity, normal adjustment)</span>
        m = -L/f<sub>o</sub> x D/f<sub>e</sub>
      </div>
      <p>where L = distance between the lenses (tube length), D = 25 cm (least distance of distinct vision).</p>
      <div class="key-point"><strong>How it works step by step:</strong><br>
      1. Object placed just outside f<sub>o</sub> of the objective<br>
      2. Objective forms a <strong>real, inverted, magnified</strong> intermediate image<br>
      3. This intermediate image falls within f<sub>e</sub> of the eyepiece<br>
      4. Eyepiece acts as a simple magnifier and creates a <strong>virtual, enlarged</strong> final image</div>
      <div class="remember-box"><strong>CBSE tip:</strong> For maximum magnification, both f<sub>o</sub> and f<sub>e</sub> should be small, but f<sub>o</sub> should be smaller than f<sub>e</sub>. The negative sign indicates the final image is inverted with respect to the object.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Astronomical Telescope — Ray Diagram and Magnification",
    body: `
      <p>An astronomical (refracting) telescope uses two convex lenses: a large focal length <strong>objective</strong> and a small focal length <strong>eyepiece</strong>.</p>
      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <defs>
            <marker id="arrTel" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#2563eb"/></marker>
          </defs>
          <!-- Objective lens (large) -->
          <ellipse cx="80" cy="110" rx="10" ry="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="55" y="205" font-size="11" font-weight="bold" fill="#2563eb">Objective</text>
          <text x="55" y="218" font-size="10" fill="#2563eb">(f<sub>o</sub> large)</text>
          <!-- Eyepiece lens (small) -->
          <ellipse cx="370" cy="110" rx="7" ry="45" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="350" y="170" font-size="11" font-weight="bold" fill="#f59e0b">Eyepiece</text>
          <text x="348" y="183" font-size="10" fill="#f59e0b">(f<sub>e</sub> small)</text>
          <!-- Parallel rays from distant object -->
          <line x1="0" y1="75" x2="75" y2="75" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrTel)"/>
          <line x1="0" y1="110" x2="75" y2="110" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrTel)"/>
          <text x="5" y="65" font-size="10" fill="#2563eb">From distant object</text>
          <!-- Converging at F<sub>o</sub> = F<sub>e</sub> (intermediate image) -->
          <line x1="80" y1="75" x2="350" y2="130" stroke="#2563eb" stroke-width="1.5"/>
          <line x1="80" y1="110" x2="350" y2="130" stroke="#2563eb" stroke-width="1.5"/>
          <!-- Intermediate image at common focus -->
          <line x1="350" y1="110" x2="350" y2="130" stroke="#dc2626" stroke-width="2"/>
          <circle cx="350" cy="130" r="2" fill="#dc2626"/>
          <text x="320" y="148" font-size="9" fill="#dc2626">Image at</text>
          <text x="318" y="158" font-size="9" fill="#dc2626">common focus</text>
          <!-- Emergent rays from eyepiece (diverging as if from infinity) -->
          <line x1="370" y1="110" x2="435" y2="100" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="370" y1="125" x2="435" y2="130" stroke="#22c55e" stroke-width="1.5"/>
          <!-- Tube length -->
          <line x1="80" y1="15" x2="370" y2="15" stroke="#64748b" stroke-width="1"/>
          <line x1="80" y1="10" x2="80" y2="20" stroke="#64748b" stroke-width="1"/>
          <line x1="370" y1="10" x2="370" y2="20" stroke="#64748b" stroke-width="1"/>
          <text x="200" y="12" font-size="10" fill="#64748b">L = f<sub>o</sub> + f<sub>e</sub> (normal adjustment)</text>
          <!-- Eye -->
          <text x="415" y="118" font-size="16">&#x1f441;</text>
        </svg>
        <div class="diagram-caption">Astronomical telescope in normal adjustment: image at infinity, tube length = f<sub>o</sub> + f<sub>e</sub></div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnifying Power (normal adjustment, image at infinity)</span>
        m = -f<sub>o</sub> / f<sub>e</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnifying Power (image at D = 25 cm)</span>
        m = -f<sub>o</sub> / f<sub>e</sub> x (1 + f<sub>e</sub>/D)
      </div>
      <div class="formula-box">
        <span class="formula-label">Tube Length</span>
        Normal adjustment: L = f<sub>o</sub> + f<sub>e</sub><br>
        Image at D: L = f<sub>o</sub> + u_e (where u_e is object distance for eyepiece)
      </div>
      <table class="compare-table">
        <tr><th>Property</th><th>Microscope</th><th>Telescope</th></tr>
        <tr><td>Objective f</td><td>Small</td><td>Large</td></tr>
        <tr><td>Eyepiece f</td><td>Larger than f<sub>o</sub></td><td>Small</td></tr>
        <tr><td>Objective aperture</td><td>Small</td><td>Large (for more light)</td></tr>
        <tr><td>Object distance</td><td>Just beyond f<sub>o</sub></td><td>At infinity</td></tr>
        <tr><td>Magnification</td><td>m = -(L/f<sub>o</sub>)(D/f<sub>e</sub>)</td><td>m = -f<sub>o</sub>/f<sub>e</sub></td></tr>
      </table>
      <div class="key-point"><strong>Why is the objective of a telescope large?</strong><br>
      A large aperture objective collects more light, making faint objects visible. It also improves resolving power (ability to distinguish close objects).</div>
      <div class="remember-box"><strong>Reflecting telescope advantage:</strong> Uses a concave mirror instead of a lens as objective. No chromatic aberration, easier to make large mirrors, lighter. Example: Cassegrain telescope uses a concave primary mirror and a convex secondary mirror.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Refraction at Plane Surfaces — Apparent Depth and Lateral Shift",
    body: `
      <p>When you look at an object inside a denser medium (like a coin in water), it appears to be at a different depth. This is due to refraction.</p>
      <div class="formula-box">
        <span class="formula-label">Apparent Depth (Normal Viewing)</span>
        Apparent depth = Real depth / n &nbsp;&nbsp;or&nbsp;&nbsp; n = Real depth / Apparent depth
      </div>
      <div class="formula-box">
        <span class="formula-label">Lateral Shift (through a glass slab)</span>
        d = t x sin(i - r) / cos r
      </div>
      <p>where t = thickness of the slab, i = angle of incidence, r = angle of refraction.</p>
      <div class="key-point"><strong>Normal shift through a glass slab:</strong><br>
      The emergent ray is parallel to the incident ray but shifted laterally. For normal incidence:<br>
      Normal shift = t(1 - 1/n)<br>
      The object appears to be shifted by this amount towards the observer.</div>
      <div class="key-point"><strong>Multiple slabs:</strong> If there are several slabs of different thicknesses and refractive indices stacked together:<br>
      Apparent depth = t<sub>1</sub>/n<sub>1</sub> + t<sub>2</sub>/n<sub>2</sub> + t<sub>3</sub>/n<sub>3</sub> + ...</div>
      <div class="remember-box"><strong>CBSE favourites:</strong><br>
      - "A tank of water appears shallower than it is" - use apparent depth formula<br>
      - "A glass slab does not deviate the ray but shifts it laterally" - the emergent ray is parallel to the incident ray<br>
      - "A fish in water appears closer to the surface" - real depth is more than apparent depth</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using n = apparent depth / real depth instead of n = real depth / apparent depth. Remember: for a denser medium (n > 1), apparent depth is LESS than real depth, so real depth must be in the numerator.</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Ray Optics",
    body: `
      <p>All essential formulae for Chapter 9 in one place. Print or screenshot this card for quick revision!</p>
      <div class="formula-box">
        <span class="formula-label">Reflection</span>
        Mirror formula: 1/v + 1/u = 1/f<br>
        Magnification: m = -v/u = h'/h<br>
        f = R/2
      </div>
      <div class="formula-box">
        <span class="formula-label">Refraction</span>
        Snell's law: n<sub>1</sub> sin i = n<sub>2</sub> sin r<br>
        n = c/v<br>
        Apparent depth = Real depth / n<br>
        Critical angle: sin i<sub>c</sub> = 1/n (for denser to air)
      </div>
      <div class="formula-box">
        <span class="formula-label">Spherical Surface</span>
        n<sub>2</sub>/v - n<sub>1</sub>/u = (n<sub>2</sub> - n<sub>1</sub>)/R
      </div>
      <div class="formula-box">
        <span class="formula-label">Lenses</span>
        Thin lens: 1/v - 1/u = 1/f<br>
        Magnification: m = v/u<br>
        Power: P = 1/f (in metres), unit: Dioptre (D)<br>
        Lens maker: 1/f = (n - 1)[1/R<sub>1</sub> - 1/R<sub>2</sub>]<br>
        Combination: P = P<sub>1</sub> + P<sub>2</sub> + ... or 1/f = 1/f<sub>1</sub> + 1/f<sub>2</sub> + ...
      </div>
      <div class="formula-box">
        <span class="formula-label">Prism</span>
        delta = i<sub>1</sub> + i<sub>2</sub> - A<br>
        A = r<sub>1</sub> + r<sub>2</sub><br>
        At minimum deviation: n = sin[(A + δ<sub>m</sub>)/2] / sin(A/2)<br>
        Thin prism: δ = (n − 1)A
      </div>
      <div class="formula-box">
        <span class="formula-label">Microscope</span>
        m = -(L/f<sub>o</sub>)(D/f<sub>e</sub>) [image at infinity]<br>
        m = -(L/f<sub>o</sub>)(1 + D/f<sub>e</sub>) [image at D = 25 cm]
      </div>
      <div class="formula-box">
        <span class="formula-label">Telescope</span>
        m = -f<sub>o</sub>/f<sub>e</sub> [normal adjustment, image at infinity]<br>
        m = -(f<sub>o</sub>/f<sub>e</sub>)(1 + f<sub>e</sub>/D) [image at D]<br>
        Tube length (normal): L = f<sub>o</sub> + f<sub>e</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">Dispersive Power</span>
        ω = (n<sub>V</sub> − n<sub>R</sub>)/(n_Y − 1)<br>
        Angular dispersion = (n<sub>V</sub> - n<sub>R</sub>)A [thin prism]
      </div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Common CBSE Tricks and Shortcuts",
    body: `
      <p>Quick-fire tricks that save time in MCQs and numericals.</p>
      <div class="key-point"><strong>Trick 1 — Mirror/Lens problems: </strong> If an object is at the centre of curvature of a concave mirror (u = -2f), the image is also at C. Same for object at 2F of a convex lens.</div>
      <div class="key-point"><strong>Trick 2 — Power of combination:</strong> For a convex lens (P1 = +ve) and concave lens (P2 = -ve) in contact: P = P1 + P2. If P > 0, the combination acts as converging; if P < 0, diverging.</div>
      <div class="key-point"><strong>Trick 3 — Thin prism shortcut:</strong> For a thin prism, δ = (n−1)A. If n = 1.5 and A = 6 degrees, delta = 0.5 x 6 = 3 degrees. No need for the full prism formula!</div>
      <div class="key-point"><strong>Trick 4 — Critical angle from n:</strong> sin(i<sub>c</sub>) = 1/n. For glass (n=1.5): i<sub>c</sub> = sin<sup>-1</sup>(2/3) = 41.8 degrees approximately 42 degrees.</div>
      <div class="key-point"><strong>Trick 5 — Apparent depth stacking:</strong> Object under multiple layers? Just add up t<sub>i</sub>/n<sub>i</sub> for each layer to get the total apparent depth.</div>
      <div class="key-point"><strong>Trick 6 — Image speed (plane mirror):</strong><br>
      If object moves with velocity v<sub>o</sub> towards a stationary mirror: image speed = v<sub>o</sub> (towards mirror from behind)<br>
      Relative speed of approach = 2v<sub>o</sub></div>
      <div class="key-point"><strong>Trick 7 — Lens in a different medium:</strong> If a convex lens (n<sub>g</sub> > n<sub>m</sub>) is placed in a medium denser than the lens (n<sub>m</sub> > n<sub>g</sub>), it behaves as a <strong>diverging</strong> lens! Use the lens maker's formula: (n<sub>g</sub>/n<sub>m</sub> - 1) becomes negative.</div>
      <div class="key-point"><strong>Trick 8 — Telescope vs Microscope magnification:</strong><br>
      Telescope: m = f<sub>o</sub>/f<sub>e</sub> (larger ratio = more magnification, so f<sub>o</sub> should be large)<br>
      Microscope: m involves L/(f<sub>o</sub> x f<sub>e</sub>) (both small f values help)</div>
      <div class="remember-box"><strong>Sign convention memory aid:</strong><br>
      "All distances measured from the pole/optical centre. Left is negative, right is positive (for mirrors and lenses with light coming from the left)."</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "CBSE Previous Year Patterns and Exam Tips",
    body: `
      <p>Ray Optics is one of the <strong>highest-weighted chapters</strong> in CBSE Physics. Here is what to focus on for guaranteed marks.</p>
      <div class="key-point"><strong>Most repeated question types:</strong><br>
      1. Derive mirror formula or lens formula (3-5 marks)<br>
      2. Ray diagram for compound microscope or telescope (3 marks)<br>
      3. Numerical on mirror formula / lens formula (2-3 marks)<br>
      4. Numerical on prism (minimum deviation) (2-3 marks)<br>
      5. Total internal reflection and applications (2-3 marks)<br>
      6. Power of lens combination (2 marks)</div>
      <div class="key-point"><strong>Must-know derivations (frequently asked):</strong><br>
      1. Mirror formula using geometry of concave mirror<br>
      2. Lens maker's formula<br>
      3. Refraction at a single spherical surface (n2/v - n1/u = (n2-n1)/R)<br>
      4. Prism formula: n = sin[(A+dm)/2] / sin(A/2)<br>
      5. Magnifying power of compound microscope and telescope</div>
      <div class="remember-box"><strong>Ray diagram rules (for lenses):</strong><br>
      1. A ray parallel to the principal axis passes through F after refraction<br>
      2. A ray through the optical centre goes undeviated<br>
      3. A ray through F emerges parallel to the principal axis<br>
      Use ANY TWO of these three rays to locate the image.</div>
      <div class="key-point"><strong>Important distinctions CBSE loves to test:</strong><br>
      - Real vs virtual image<br>
      - Concave mirror as converging vs convex as diverging<br>
      - Why optical fibres use TIR (not metallic reflection)<br>
      - Difference between angular magnification and linear magnification<br>
      - Why objective of telescope has large aperture</div>
      <div class="mistake-box"><strong>Top exam mistakes to avoid:</strong><br>
      1. Forgetting sign convention in numericals (biggest mark-loser!)<br>
      2. Drawing incomplete ray diagrams (must show at least 2 rays with arrows)<br>
      3. Not mentioning "virtual, erect, magnified" (all three properties!) when describing images<br>
      4. Mixing up microscope and telescope magnification formulae<br>
      5. Writing f = R instead of f = R/2</div>
      <div class="key-point"><strong>Time management:</strong> Ray optics numericals are usually straightforward if signs are applied correctly. Spend no more than 3-4 minutes per numerical. If you get stuck on signs, draw a quick diagram and mark all distances with their signs before substituting.</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Compound Microscope — Complete Board Exam Breakdown",
    body: `
      <p>The compound microscope is a <strong>must-know instrument</strong> for CBSE boards. Expect a 5-mark question combining ray diagram + derivation + numerical.</p>

      <div class="key-point"><strong>Construction:</strong><br>
      - <strong>Objective lens:</strong> Convex lens of very short focal length (f<sub>o</sub>) and small aperture<br>
      - <strong>Eyepiece lens:</strong> Convex lens of moderate focal length (f<sub>e</sub>) and larger aperture<br>
      - Both lenses are mounted coaxially in a tube, separated by distance L (tube length)<br>
      - The object is placed just outside f<sub>o</sub> of the objective</div>

      <div class="diagram-container">
        <svg width="460" height="280" viewBox="0 0 460 280">
          <defs>
            <marker id="arrCM1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrCM2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrCM3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- Principal axis -->
          <line x1="10" y1="130" x2="450" y2="130" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>

          <!-- Objective lens -->
          <ellipse cx="120" cy="130" rx="8" ry="65" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="100" y="210" font-size="11" font-weight="bold" fill="#2563eb">Objective</text>
          <text x="105" y="223" font-size="9" fill="#2563eb">(f<sub>o</sub> short)</text>

          <!-- Eyepiece lens -->
          <ellipse cx="350" cy="130" rx="8" ry="55" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="330" y="200" font-size="11" font-weight="bold" fill="#f59e0b">Eyepiece</text>
          <text x="330" y="213" font-size="9" fill="#f59e0b">(f<sub>e</sub> longer)</text>

          <!-- Object AB (small upward arrow just outside fo) -->
          <line x1="75" y1="130" x2="75" y2="95" stroke="#1e293b" stroke-width="2.5"/>
          <polygon points="71,98 79,98 75,88" fill="#1e293b"/>
          <text x="55" y="85" font-size="10" font-weight="bold" fill="#1e293b">A'B'</text>
          <text x="55" y="75" font-size="9" fill="#1e293b">(Object)</text>

          <!-- Fo markers -->
          <circle cx="100" cy="130" r="2.5" fill="#2563eb"/>
          <text x="94" y="148" font-size="9" fill="#2563eb">F<sub>o</sub></text>

          <!-- Intermediate image A'B' (real, inverted, magnified) -->
          <line x1="300" y1="130" x2="300" y2="175" stroke="#dc2626" stroke-width="2.5"/>
          <polygon points="296,172 304,172 300,182" fill="#dc2626"/>
          <text x="262" y="190" font-size="10" fill="#dc2626">A'B' (Real,</text>
          <text x="262" y="202" font-size="10" fill="#dc2626">inverted image)</text>

          <!-- Fe marker -->
          <circle cx="320" cy="130" r="2.5" fill="#f59e0b"/>
          <text x="314" y="148" font-size="9" fill="#f59e0b">F<sub>e</sub></text>

          <!-- Ray 1: parallel to axis from object, through objective, converges to intermediate image -->
          <line x1="75" y1="95" x2="120" y2="95" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrCM1)"/>
          <line x1="120" y1="95" x2="300" y2="175" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrCM1)"/>

          <!-- Ray 2: through optical centre of objective -->
          <line x1="75" y1="95" x2="300" y2="175" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>

          <!-- Ray 3: from intermediate image through eyepiece, diverging -->
          <line x1="300" y1="175" x2="350" y2="175" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="350" y1="175" x2="440" y2="210" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrCM3)"/>

          <!-- Ray 4: from intermediate image through centre of eyepiece -->
          <line x1="300" y1="175" x2="350" y2="155" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="350" y1="155" x2="440" y2="130" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrCM3)"/>

          <!-- Virtual image extensions (dashed, going back to left) -->
          <line x1="350" y1="175" x2="50" y2="260" stroke="#22c55e" stroke-width="1" stroke-dasharray="4,3"/>
          <line x1="350" y1="155" x2="50" y2="260" stroke="#22c55e" stroke-width="1" stroke-dasharray="4,3"/>

          <!-- Final virtual image label -->
          <text x="15" y="255" font-size="10" font-weight="bold" fill="#22c55e">A''B'' (Final virtual</text>
          <text x="15" y="267" font-size="10" fill="#22c55e">magnified image at D)</text>

          <!-- Tube length bracket -->
          <line x1="120" y1="240" x2="350" y2="240" stroke="#64748b" stroke-width="1"/>
          <line x1="120" y1="235" x2="120" y2="245" stroke="#64748b" stroke-width="1"/>
          <line x1="350" y1="235" x2="350" y2="245" stroke="#64748b" stroke-width="1"/>
          <text x="210" y="253" font-size="10" fill="#64748b" text-anchor="middle">L (tube length)</text>

          <!-- Eye position -->
          <text x="435" y="138" font-size="14">&#x1f441;</text>
        </svg>
        <div class="diagram-caption">Compound microscope: object just beyond F<sub>o</sub> of objective produces real intermediate image, which eyepiece magnifies into a virtual final image</div>
      </div>

      <div class="key-point"><strong>Working — Step by Step:</strong><br>
      1. The object AB is placed just outside the focal length of the objective (between f<sub>o</sub> and 2f<sub>o</sub>)<br>
      2. The objective forms a <strong>real, inverted, and magnified</strong> intermediate image A'B' on the other side<br>
      3. This intermediate image A'B' falls within the focal length of the eyepiece (inside f<sub>e</sub>)<br>
      4. The eyepiece acts as a <strong>simple magnifying glass</strong> and produces a <strong>virtual, erect (w.r.t. A'B'), and further magnified</strong> final image A''B''<br>
      5. The final image A''B'' is <strong>inverted with respect to the original object</strong> AB</div>

      <div class="formula-box">
        <span class="formula-label">Magnifying Power — Final image at D (near point, 25 cm)</span>
        m = m<sub>o</sub> x m<sub>e</sub> = (-v<sub>o</sub>/u<sub>o</sub>) x (1 + D/f<sub>e</sub>)
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnifying Power — Final image at infinity (normal adjustment)</span>
        m = (-L/f<sub>o</sub>) x (D/f<sub>e</sub>)
      </div>
      <p>where v<sub>o</sub> = image distance from objective, u<sub>o</sub> = object distance from objective, L = tube length (approximate distance between lenses), D = 25 cm.</p>

      <div class="key-point"><strong>Solved Numerical:</strong><br>
      <em>Q: A compound microscope has f<sub>o</sub> = 1.25 cm, f<sub>e</sub> = 5 cm, and tube length L = 15 cm. Find the magnifying power for normal adjustment (D = 25 cm).</em><br><br>
      <strong>Solution:</strong><br>
      For normal adjustment (final image at infinity):<br>
      m = -(L/f<sub>o</sub>) x (D/f<sub>e</sub>)<br>
      m = -(15/1.25) x (25/5)<br>
      m = -12 x 5<br>
      <strong>m = -60</strong><br><br>
      The magnitude of magnification is 60. The negative sign indicates the final image is inverted relative to the object.</div>

      <div class="remember-box"><strong>Board Exam Tip:</strong> Always specify WHERE the final image is formed (at D = 25 cm or at infinity). The formula changes! At D: use (1 + D/f<sub>e</sub>). At infinity: use D/f<sub>e</sub>. Examiners deduct marks if you use the wrong formula.</div>

      <div class="mistake-box"><strong>Common CBSE Question Pattern:</strong> "Draw a labelled ray diagram of a compound microscope for final image at the least distance of distinct vision. Derive the expression for its magnifying power." (5 marks) — Practice this complete answer including diagram + step-by-step derivation.</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Refracting Telescope (Astronomical Telescope) — Complete Board Exam Breakdown",
    body: `
      <p>The astronomical refracting telescope is used to view distant celestial objects. It produces a <strong>magnified image at infinity</strong> in normal adjustment.</p>

      <div class="key-point"><strong>Construction:</strong><br>
      - <strong>Objective lens:</strong> Convex lens of <strong>large focal length</strong> (f<sub>o</sub>) and <strong>large aperture</strong><br>
      - <strong>Eyepiece lens:</strong> Convex lens of <strong>small focal length</strong> (f<sub>e</sub>) and small aperture<br>
      - Both lenses are mounted coaxially at the two ends of a cylindrical tube<br>
      - The distance between them is adjustable</div>

      <div class="diagram-container">
        <svg width="460" height="260" viewBox="0 0 460 260">
          <defs>
            <marker id="arrRT1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrRT2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrRT3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>
          <!-- Principal axis -->
          <line x1="5" y1="120" x2="450" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>

          <!-- Objective lens (large) -->
          <ellipse cx="80" cy="120" rx="10" ry="85" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="52" y="220" font-size="11" font-weight="bold" fill="#2563eb">Objective</text>
          <text x="45" y="233" font-size="9" fill="#2563eb">(f<sub>o</sub> large, large</text>
          <text x="50" y="244" font-size="9" fill="#2563eb">aperture)</text>

          <!-- Eyepiece lens (small) -->
          <ellipse cx="380" cy="120" rx="7" ry="50" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="358" y="185" font-size="11" font-weight="bold" fill="#f59e0b">Eyepiece</text>
          <text x="355" y="198" font-size="9" fill="#f59e0b">(f<sub>e</sub> small)</text>

          <!-- Parallel rays from distant object (at slight angle) -->
          <line x1="5" y1="90" x2="75" y2="90" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arrRT1)"/>
          <line x1="5" y1="120" x2="75" y2="120" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arrRT1)"/>
          <text x="8" y="80" font-size="10" fill="#2563eb">Parallel rays from</text>
          <text x="8" y="70" font-size="10" fill="#2563eb">distant object</text>

          <!-- Fo = Fe common focus point (intermediate image) -->
          <circle cx="360" cy="120" r="3" fill="#dc2626"/>
          <line x1="360" y1="120" x2="360" y2="142" stroke="#dc2626" stroke-width="2"/>
          <circle cx="360" cy="142" r="2" fill="#dc2626"/>
          <text x="332" y="158" font-size="9" fill="#dc2626">A'B' at common</text>
          <text x="335" y="168" font-size="9" fill="#dc2626">focus (F<sub>o</sub> = F<sub>e</sub>)</text>

          <!-- Rays converging from objective to focus -->
          <line x1="80" y1="90" x2="358" y2="142" stroke="#2563eb" stroke-width="1.5"/>
          <line x1="80" y1="120" x2="358" y2="142" stroke="#2563eb" stroke-width="1.5"/>

          <!-- Rays diverging from eyepiece (emerging parallel for image at infinity) -->
          <line x1="380" y1="130" x2="445" y2="140" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrRT3)"/>
          <line x1="380" y1="115" x2="445" y2="125" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrRT3)"/>

          <!-- Beta angle label (angle subtended by final image) -->
          <path d="M420,120 A20,20 0 0,1 418,132" fill="none" stroke="#22c55e" stroke-width="1.5"/>
          <text x="430" y="130" font-size="10" fill="#22c55e">beta</text>

          <!-- Alpha angle at objective -->
          <path d="M95,120 A15,15 0 0,0 93,110" fill="none" stroke="#2563eb" stroke-width="1.5"/>
          <text x="100" y="112" font-size="10" fill="#2563eb">alpha</text>

          <!-- Tube length bracket -->
          <line x1="80" y1="250" x2="380" y2="250" stroke="#64748b" stroke-width="1"/>
          <line x1="80" y1="245" x2="80" y2="255" stroke="#64748b" stroke-width="1"/>
          <line x1="380" y1="245" x2="380" y2="255" stroke="#64748b" stroke-width="1"/>
          <text x="195" y="248" font-size="10" fill="#64748b">L = f<sub>o</sub> + f<sub>e</sub> (normal adjustment)</text>

          <!-- Eye -->
          <text x="442" y="128" font-size="14">&#x1f441;</text>
        </svg>
        <div class="diagram-caption">Astronomical telescope in normal adjustment: parallel rays from a distant object converge at common focus, then emerge parallel from eyepiece (image at infinity)</div>
      </div>

      <div class="key-point"><strong>Working — Step by Step:</strong><br>
      1. Parallel rays from a distant object enter the objective and converge at its focal point F<sub>o</sub><br>
      2. A real, inverted, diminished intermediate image A'B' is formed at F<sub>o</sub><br>
      3. The eyepiece is positioned so that A'B' falls at its focus F<sub>e</sub> (i.e., F<sub>o</sub> and F<sub>e</sub> coincide)<br>
      4. The eyepiece then produces the final image at infinity (parallel rays emerge) — this is <strong>normal adjustment</strong><br>
      5. The final image is <strong>inverted with respect to the object</strong> (not a problem for celestial objects)</div>

      <div class="formula-box">
        <span class="formula-label">Magnifying Power — Normal Adjustment (image at infinity)</span>
        m = -f<sub>o</sub> / f<sub>e</sub> &nbsp;&nbsp;&nbsp; Tube length: L = f<sub>o</sub> + f<sub>e</sub>
      </div>
      <div class="formula-box">
        <span class="formula-label">Magnifying Power — Image at D (near point, 25 cm)</span>
        m = -(f<sub>o</sub> / f<sub>e</sub>)(1 + f<sub>e</sub>/D) &nbsp;&nbsp;&nbsp; Tube length: L = f<sub>o</sub> + u<sub>e</sub>
      </div>
      <p>where u<sub>e</sub> is the object distance for the eyepiece (found using lens formula: 1/v<sub>e</sub> - 1/u<sub>e</sub> = 1/f<sub>e</sub>, with v<sub>e</sub> = -D).</p>

      <div class="key-point"><strong>Solved Numerical:</strong><br>
      <em>Q: An astronomical telescope has an objective of focal length f<sub>o</sub> = 150 cm and an eyepiece of focal length f<sub>e</sub> = 5 cm. Find the magnifying power and tube length in normal adjustment.</em><br><br>
      <strong>Solution:</strong><br>
      Magnifying power (normal adjustment):<br>
      m = -f<sub>o</sub>/f<sub>e</sub> = -150/5 = <strong>-30</strong><br><br>
      Tube length:<br>
      L = f<sub>o</sub> + f<sub>e</sub> = 150 + 5 = <strong>155 cm</strong><br><br>
      The magnitude of magnification is 30. The negative sign indicates the final image is inverted.</div>

      <div class="key-point"><strong>Why does the objective have a large aperture?</strong><br>
      1. <strong>Light gathering:</strong> A large aperture collects more light from faint distant stars, making them visible<br>
      2. <strong>Better resolution:</strong> Larger aperture improves resolving power (ability to distinguish two closely spaced stars)<br>
      3. The limit of resolution is proportional to lambda/D, where D is the aperture diameter — larger D means smaller resolution limit (better resolution)</div>

      <table class="compare-table">
        <tr><th>Feature</th><th>Image at Infinity (Normal Adjustment)</th><th>Image at D (Near Point)</th></tr>
        <tr><td>Magnification</td><td>m = -f<sub>o</sub>/f<sub>e</sub></td><td>m = -(f<sub>o</sub>/f<sub>e</sub>)(1 + f<sub>e</sub>/D)</td></tr>
        <tr><td>Tube length</td><td>L = f<sub>o</sub> + f<sub>e</sub></td><td>L = f<sub>o</sub> + u<sub>e</sub> (u<sub>e</sub> &lt; f<sub>e</sub>)</td></tr>
        <tr><td>Eye strain</td><td>Minimum (relaxed eye)</td><td>More strain (eye accommodates)</td></tr>
        <tr><td>Magnification</td><td>Lower</td><td>Slightly higher</td></tr>
      </table>

      <div class="remember-box"><strong>Board Exam Tip:</strong> Normal adjustment means the final image is at infinity and the eye is relaxed. This is the most common configuration asked in CBSE. Always state: "In normal adjustment, L = f<sub>o</sub> + f<sub>e</sub> and m = -f<sub>o</sub>/f<sub>e</sub>."</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Reflecting Telescope (Cassegrain) — Construction and Advantages",
    body: `
      <p>The reflecting telescope uses <strong>mirrors instead of lenses</strong> as the objective. The Cassegrain design is the most commonly asked configuration in CBSE.</p>

      <div class="key-point"><strong>Why reflecting over refracting?</strong><br>
      Refracting telescopes suffer from several limitations that mirrors can overcome. This is one of the <strong>most frequently asked</strong> comparison questions in CBSE boards.</div>

      <div class="key-point"><strong>Construction (Cassegrain Design):</strong><br>
      - <strong>Primary mirror:</strong> Large concave (parabolic) mirror with a hole at its centre<br>
      - <strong>Secondary mirror:</strong> Small convex mirror placed near the focus of the primary<br>
      - <strong>Eyepiece:</strong> Convex lens placed behind the hole in the primary mirror<br>
      - Light enters from the open end, reflects off the primary, then off the secondary, and passes through the hole to the eyepiece</div>

      <div class="diagram-container">
        <svg width="460" height="260" viewBox="0 0 460 260">
          <defs>
            <marker id="arrRF1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#2563eb"/></marker>
            <marker id="arrRF2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker>
            <marker id="arrRF3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22c55e"/></marker>
          </defs>

          <!-- Title -->
          <text x="150" y="20" font-size="13" font-weight="bold" fill="#1e293b">Cassegrain Reflecting Telescope</text>

          <!-- Primary concave mirror (right side, large) -->
          <path d="M400,35 Q360,130 400,225" fill="none" stroke="#2563eb" stroke-width="3"/>
          <text x="408" y="120" font-size="10" fill="#2563eb">Primary</text>
          <text x="408" y="132" font-size="10" fill="#2563eb">(concave)</text>

          <!-- Hole in primary mirror -->
          <line x1="400" y1="120" x2="400" y2="140" stroke="white" stroke-width="5"/>
          <line x1="398" y1="119" x2="398" y2="141" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
          <line x1="402" y1="119" x2="402" y2="141" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>

          <!-- Secondary convex mirror (left of centre) -->
          <path d="M160,100 Q175,130 160,160" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
          <text x="120" y="95" font-size="10" fill="#f59e0b">Secondary</text>
          <text x="120" y="107" font-size="10" fill="#f59e0b">(convex)</text>

          <!-- Eyepiece (behind primary mirror) -->
          <ellipse cx="440" cy="130" rx="5" ry="25" fill="#fef3c7" stroke="#22c55e" stroke-width="2"/>
          <text x="430" y="170" font-size="10" fill="#22c55e">Eyepiece</text>

          <!-- Incoming parallel rays -->
          <line x1="30" y1="80" x2="155" y2="80" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arrRF1)"/>
          <line x1="30" y1="130" x2="155" y2="130" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arrRF1)"/>
          <line x1="30" y1="180" x2="155" y2="180" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arrRF1)"/>
          <text x="35" y="65" font-size="10" fill="#2563eb">Parallel rays</text>
          <text x="35" y="55" font-size="10" fill="#2563eb">from distant star</text>

          <!-- Rays hitting primary mirror -->
          <line x1="155" y1="80" x2="395" y2="80" stroke="#2563eb" stroke-width="1.5"/>
          <line x1="155" y1="180" x2="395" y2="180" stroke="#2563eb" stroke-width="1.5"/>

          <!-- Reflected from primary (converging towards focus, but intercepted by secondary) -->
          <line x1="395" y1="80" x2="163" y2="118" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrRF2)"/>
          <line x1="395" y1="180" x2="163" y2="142" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrRF2)"/>

          <!-- Reflected from secondary (through hole in primary to eyepiece) -->
          <line x1="163" y1="118" x2="435" y2="122" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrRF3)"/>
          <line x1="163" y1="142" x2="435" y2="138" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrRF3)"/>

          <!-- Focus point near eyepiece -->
          <circle cx="425" cy="130" r="3" fill="#dc2626"/>
          <text x="410" y="155" font-size="9" fill="#dc2626">Focus</text>

          <!-- Eye -->
          <text x="448" y="136" font-size="14">&#x1f441;</text>

          <!-- Light path labels -->
          <text x="50" y="245" font-size="10" fill="#64748b">Light path: Parallel rays --> Primary mirror --> Secondary mirror --> Through hole --> Eyepiece --> Eye</text>
        </svg>
        <div class="diagram-caption">Cassegrain reflecting telescope: concave primary mirror reflects light to convex secondary, which sends it back through the central hole to the eyepiece</div>
      </div>

      <div class="formula-box">
        <span class="formula-label">Magnifying Power</span>
        m = f<sub>o</sub> / f<sub>e</sub> &nbsp;&nbsp;(same as refracting telescope, where f<sub>o</sub> = focal length of primary mirror)
      </div>

      <table class="compare-table">
        <tr><th>Feature</th><th>Refracting Telescope</th><th>Reflecting Telescope</th></tr>
        <tr><td>Objective</td><td>Convex lens</td><td>Concave mirror</td></tr>
        <tr><td>Chromatic aberration</td><td>Present (different colours focus at different points)</td><td><strong>Absent</strong> (mirrors reflect all colours equally)</td></tr>
        <tr><td>Spherical aberration</td><td>Present</td><td>Reduced using parabolic mirror</td></tr>
        <tr><td>Large aperture</td><td>Difficult (heavy, sags under gravity)</td><td><strong>Easier</strong> (mirror supported from back)</td></tr>
        <tr><td>Weight</td><td>Heavy (thick glass lens)</td><td><strong>Lighter</strong> (only one reflecting surface needed)</td></tr>
        <tr><td>Cost</td><td>Expensive for large sizes</td><td>More economical for large sizes</td></tr>
        <tr><td>Mechanical support</td><td>Lens supported at edges only</td><td>Mirror supported across entire back surface</td></tr>
      </table>

      <div class="key-point"><strong>Advantages of Reflecting Telescope over Refracting — The "Big 4" for CBSE:</strong><br>
      1. <strong>No chromatic aberration:</strong> Mirrors do not cause dispersion of light, so all colours come to the same focus<br>
      2. <strong>Larger aperture possible:</strong> Mirrors can be made much larger than lenses because they can be supported from behind<br>
      3. <strong>Lighter and cheaper:</strong> Only one reflecting surface needs to be polished (vs. four surfaces in a refracting telescope with two lenses)<br>
      4. <strong>Better resolution and brightness:</strong> Larger mirrors gather more light and have better resolving power</div>

      <div class="remember-box"><strong>Board Exam Tip:</strong> CBSE loves asking "State the advantages of a reflecting telescope over a refracting telescope" as a 2-3 mark question. Memorize at least 3-4 points from the table above. The most important point is <strong>no chromatic aberration</strong> — always mention this first!</div>

      <div class="mistake-box"><strong>Common confusion:</strong> Students mix up the Cassegrain design with the Newtonian telescope. In CBSE, the Cassegrain design (concave primary + convex secondary + eyepiece at back) is the standard one to describe. The Newtonian design uses a flat secondary mirror at 45 degrees — not typically asked in boards.</div>
    `
  },
  {
    id: 19, level: "exam",
    title: "Optical Instruments Comparison + CBSE Previous Year Problems",
    body: `
      <p>A master comparison of all three instruments and solved previous year problems. This card is your <strong>one-stop revision</strong> before the exam.</p>

      <table class="compare-table">
        <tr><th>Feature</th><th>Compound Microscope</th><th>Refracting Telescope</th><th>Reflecting Telescope</th></tr>
        <tr><td>Purpose</td><td>View tiny nearby objects</td><td>View distant celestial objects</td><td>View distant celestial objects</td></tr>
        <tr><td>Objective</td><td>Convex lens, <strong>short f<sub>o</sub></strong>, small aperture</td><td>Convex lens, <strong>large f<sub>o</sub></strong>, large aperture</td><td>Concave mirror, <strong>large f<sub>o</sub></strong>, large aperture</td></tr>
        <tr><td>Eyepiece</td><td>Convex lens, f<sub>e</sub> > f<sub>o</sub></td><td>Convex lens, f<sub>e</sub> &lt;&lt; f<sub>o</sub></td><td>Convex lens, f<sub>e</sub> &lt;&lt; f<sub>o</sub></td></tr>
        <tr><td>Object distance</td><td>Just beyond f<sub>o</sub></td><td>At infinity</td><td>At infinity</td></tr>
        <tr><td>Intermediate image</td><td>Real, inverted, magnified</td><td>Real, inverted, diminished</td><td>Real, inverted, diminished</td></tr>
        <tr><td>Final image</td><td>Virtual, inverted w.r.t. object</td><td>Virtual, inverted w.r.t. object</td><td>Virtual, inverted w.r.t. object</td></tr>
        <tr><td>Magnification (at infinity)</td><td>m = -(L/f<sub>o</sub>)(D/f<sub>e</sub>)</td><td>m = -f<sub>o</sub>/f<sub>e</sub></td><td>m = -f<sub>o</sub>/f<sub>e</sub></td></tr>
        <tr><td>Magnification (at D)</td><td>m = (-v<sub>o</sub>/u<sub>o</sub>)(1 + D/f<sub>e</sub>)</td><td>m = -(f<sub>o</sub>/f<sub>e</sub>)(1 + f<sub>e</sub>/D)</td><td>Same as refracting</td></tr>
        <tr><td>Tube length (normal)</td><td>L (adjustable)</td><td>L = f<sub>o</sub> + f<sub>e</sub></td><td>Compact (folded path)</td></tr>
        <tr><td>Chromatic aberration</td><td>Present</td><td>Present</td><td><strong>Absent</strong></td></tr>
      </table>

      <div class="key-point"><strong>Solved CBSE Previous Year Problem 1:</strong><br>
      <em>Q: (CBSE 2019, 3 marks) An astronomical telescope consists of two convex lenses of focal lengths 80 cm and 4 cm. When it is in normal adjustment, what is its (a) magnifying power, and (b) length of the telescope?</em><br><br>
      <strong>Solution:</strong><br>
      Given: f<sub>o</sub> = 80 cm, f<sub>e</sub> = 4 cm (since objective has larger focal length)<br><br>
      (a) Magnifying power (normal adjustment):<br>
      m = -f<sub>o</sub>/f<sub>e</sub> = -80/4 = <strong>-20</strong><br>
      The magnitude of magnification is 20.<br><br>
      (b) Length of telescope (normal adjustment):<br>
      L = f<sub>o</sub> + f<sub>e</sub> = 80 + 4 = <strong>84 cm</strong></div>

      <div class="key-point"><strong>Solved CBSE Previous Year Problem 2:</strong><br>
      <em>Q: (CBSE 2020, 3 marks) A compound microscope uses an objective lens of focal length 4 cm and eyepiece of focal length 10 cm. An object is placed at 6 cm from the objective lens. (a) Calculate the magnifying power if the final image is formed at the near point (D = 25 cm). (b) Calculate the length of the microscope tube.</em><br><br>
      <strong>Solution:</strong><br>
      Given: f<sub>o</sub> = 4 cm, f<sub>e</sub> = 10 cm, u<sub>o</sub> = -6 cm, D = 25 cm<br><br>
      <strong>Step 1:</strong> Find image distance from objective (v<sub>o</sub>):<br>
      Using lens formula: 1/v<sub>o</sub> - 1/u<sub>o</sub> = 1/f<sub>o</sub><br>
      1/v<sub>o</sub> - 1/(-6) = 1/4<br>
      1/v<sub>o</sub> = 1/4 - 1/6 = (3 - 2)/12 = 1/12<br>
      v<sub>o</sub> = <strong>12 cm</strong><br><br>
      <strong>Step 2:</strong> Find object distance for eyepiece (u<sub>e</sub>):<br>
      For final image at D = 25 cm: v<sub>e</sub> = -25 cm<br>
      1/v<sub>e</sub> - 1/u<sub>e</sub> = 1/f<sub>e</sub><br>
      1/(-25) - 1/u<sub>e</sub> = 1/10<br>
      1/u<sub>e</sub> = -1/25 - 1/10 = (-2 - 5)/50 = -7/50<br>
      u<sub>e</sub> = <strong>-50/7 = -7.14 cm</strong><br><br>
      <strong>Step 3:</strong> Magnifying power:<br>
      m = (v<sub>o</sub>/u<sub>o</sub>) x (1 + D/f<sub>e</sub>)<br>
      m = (12/(-6)) x (1 + 25/10)<br>
      m = (-2) x (3.5) = <strong>-7</strong><br><br>
      <strong>Step 4:</strong> Tube length:<br>
      L = v<sub>o</sub> + |u<sub>e</sub>| = 12 + 7.14 = <strong>19.14 cm</strong></div>

      <div class="key-point"><strong>What Examiners Typically Ask — Pattern Analysis:</strong><br>
      1. <strong>3-mark question:</strong> "Draw a ray diagram for [telescope/microscope] in normal adjustment and write the expression for magnifying power"<br>
      2. <strong>5-mark question:</strong> "Draw a labelled ray diagram, derive the expression for magnifying power, and state how magnification can be increased"<br>
      3. <strong>2-mark question:</strong> "State two advantages of reflecting telescope over refracting telescope"<br>
      4. <strong>Numerical (2-3 marks):</strong> Given f<sub>o</sub>, f<sub>e</sub>, and either L or D, find magnification and/or tube length<br>
      5. <strong>MCQ:</strong> "In normal adjustment of a telescope, the final image is formed at [infinity]" or "To increase magnifying power of a telescope, [increase f<sub>o</sub> and decrease f<sub>e</sub>]"</div>

      <div class="remember-box"><strong>Marks Strategy for Optical Instruments:</strong><br>
      - <strong>Ray diagram:</strong> Always draw with at minimum 2 rays, label all lenses/mirrors, mark focal points, show intermediate and final images. Arrows on rays are mandatory! (1-2 marks for diagram alone)<br>
      - <strong>Derivation:</strong> Start from magnification = angle subtended by image / angle subtended by object. Show each step clearly. State the final formula in a box.<br>
      - <strong>Numerical:</strong> Write "Given", "To find", "Formula", "Solution" format. Apply sign convention explicitly. Box the final answer with units.<br>
      - <strong>Quick answer for "how to increase magnification":</strong> For telescope: increase f<sub>o</sub>, decrease f<sub>e</sub>. For microscope: decrease f<sub>o</sub>, decrease f<sub>e</sub>, increase L.</div>
    `
  }
];
