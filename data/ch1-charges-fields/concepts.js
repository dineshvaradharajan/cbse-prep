// Chapter 1: Electric Charges and Fields — Concepts (excluding Dipole)
const ch1Concepts = [
  {
    id: 1, level: "basic",
    title: "Electric Charge — Properties, Conservation & Quantization",
    body: `
      <p>Let's start with the most basic question: <strong>What is electric charge?</strong></p>
      <p>Think of charge like an invisible label on particles. Some particles carry a <strong>positive (+)</strong> label, some carry a <strong>negative (–)</strong> label. That's it! This label decides how they interact with each other.</p>
      <div class="diagram-container">
        <svg width="420" height="160" viewBox="0 0 420 160">
          <circle cx="100" cy="70" r="35" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="100" y="77" text-anchor="middle" font-size="28" font-weight="700" fill="#16a34a">+</text>
          <text x="100" y="125" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Proton</text>
          <circle cx="210" cy="70" r="35" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5"/>
          <text x="210" y="77" text-anchor="middle" font-size="28" font-weight="700" fill="#dc2626">–</text>
          <text x="210" y="125" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Electron</text>
          <circle cx="320" cy="70" r="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5"/>
          <text x="320" y="77" text-anchor="middle" font-size="28" font-weight="700" fill="#64748b">0</text>
          <text x="320" y="125" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Neutron</text>
        </svg>
        <div class="diagram-caption">The three main subatomic particles and their charges</div>
      </div>
      <p><strong>Key Properties of Charge:</strong></p>
      <p>1. <strong>Like charges repel, unlike charges attract</strong> — Two positive charges push each other away. A positive and a negative pull each other in.</p>
      <p>2. <strong>Charge is additive</strong> — If you have +3 C and –1 C together, total = +2 C. Simple addition!</p>
      <div class="key-point"><strong>Conservation of Charge:</strong> Charge can neither be created nor destroyed. The total charge of an isolated system always stays the same. When you rub a glass rod with silk, the rod becomes positive and silk becomes negative — but the <em>total</em> charge is still zero.</div>
      <div class="formula-box">
        <span class="formula-label">Quantization of Charge</span>
        q = ne, where n = ±1, ±2, ±3... and e = 1.6 × 10⁻¹⁹ C
      </div>
      <p><strong>Quantization</strong> means charge comes in "packets" — you can have 1e, 2e, 3e... but <strong>never 0.5e or 1.7e</strong>. Think of it like stairs — you can stand on step 1, 2, 3, but never on step 1.5!</p>
      <div class="remember-box"><strong>Memory trick:</strong> "Charge is like money — you can have ₹1, ₹2, ₹3 coins, but never ₹1.5 coin." That's quantization!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Students write q = ne and forget that n must be an <strong>integer</strong>. If your calculation gives n = 2.5, something is wrong — go back and check.</div>
    `
  },
  {
    id: 2, level: "basic",
    title: "Conductors & Insulators — Free Electrons & Charging Methods",
    body: `
      <p>Why does a metal spoon conduct electricity but a plastic spoon doesn't? The answer is <strong>free electrons</strong>.</p>
      <table class="compare-table">
        <tr><th>Property</th><th>Conductors</th><th>Insulators</th></tr>
        <tr><td>Free electrons</td><td>Plenty (one per atom)</td><td>Almost none</td></tr>
        <tr><td>Examples</td><td>Metals (Cu, Al, Ag)</td><td>Rubber, glass, plastic</td></tr>
        <tr><td>Charge movement</td><td>Charge flows easily</td><td>Charge stays in place</td></tr>
        <tr><td>When charged</td><td>Charge spreads over surface</td><td>Charge stays where placed</td></tr>
      </table>
      <p>Think of conductors like a crowded hallway where people (electrons) can move freely. Insulators are like a room where everyone is glued to their chairs — nobody moves.</p>
      <p><strong>Charging Methods:</strong></p>
      <p>1. <strong>Friction (Rubbing):</strong> Rub glass rod with silk → electrons transfer from glass to silk → glass becomes +ve, silk becomes –ve.</p>
      <p>2. <strong>Conduction (Touch):</strong> Touch a charged rod to a neutral conductor → charges flow and spread. Both end up with the <strong>same sign</strong> of charge.</p>
      <div class="key-point"><strong>Key difference:</strong> Charging by friction works on insulators, charging by conduction works on conductors. Remember: insulators need rubbing, conductors need touching.</div>
      <div class="remember-box"><strong>Board exam favourite:</strong> "Why does a comb attract bits of paper after rubbing?" — Answer: The comb gets charged by friction, and it induces opposite charges on the near side of paper bits (polarisation), causing attraction.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Saying "rubbing creates charge." NO — rubbing only <strong>transfers</strong> electrons from one body to another. Total charge remains zero (conservation of charge).</div>
    `
  },
  {
    id: 3, level: "basic",
    title: "Charging by Induction",
    body: `
      <p><strong>Induction</strong> is the cleverest way to charge an object — you can charge it <strong>without even touching</strong> it!</p>
      <p>Think of it like this: A charged object "scares" the electrons in a nearby conductor. The electrons either run towards it (if it's positive) or run away (if it's negative).</p>
      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Steps of Charging by Induction</text>
          <!-- Step 1 -->
          <text x="30" y="55" font-size="12" font-weight="700" fill="#2563eb">Step 1</text>
          <rect x="80" y="38" width="100" height="40" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
          <text x="130" y="63" text-anchor="middle" font-size="12" fill="#64748b">Neutral body</text>
          <circle cx="220" cy="58" r="18" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="220" y="63" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">+</text>
          <text x="260" y="63" font-size="11" fill="#64748b">Bring +ve near</text>
          <!-- Step 2 -->
          <text x="30" y="115" font-size="12" font-weight="700" fill="#2563eb">Step 2</text>
          <rect x="80" y="98" width="50" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="105" y="123" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">– –</text>
          <rect x="130" y="98" width="50" height="40" rx="6" fill="#d1fae5" stroke="#22c55e" stroke-width="1.5"/>
          <text x="155" y="123" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">+ +</text>
          <circle cx="220" cy="118" r="18" fill="#d1fae5" stroke="#22c55e" stroke-width="2"/>
          <text x="220" y="123" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">+</text>
          <text x="260" y="123" font-size="11" fill="#64748b">Charges separate</text>
          <!-- Step 3 -->
          <text x="30" y="175" font-size="12" font-weight="700" fill="#2563eb">Step 3</text>
          <rect x="80" y="158" width="50" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="105" y="183" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">– –</text>
          <rect x="130" y="158" width="50" height="40" rx="6" fill="#d1fae5" stroke="#22c55e" stroke-width="1.5"/>
          <text x="155" y="183" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">+ +</text>
          <line x1="155" y1="198" x2="155" y2="215" stroke="#64748b" stroke-width="2"/>
          <line x1="145" y1="215" x2="165" y2="215" stroke="#64748b" stroke-width="3"/>
          <text x="260" y="183" font-size="11" fill="#64748b">Ground the far end</text>
          <!-- Step 4 -->
          <text x="30" y="248" font-size="12" font-weight="700" fill="#2563eb">Step 4</text>
          <rect x="80" y="228" width="100" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="130" y="253" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">– – – –</text>
          <text x="260" y="248" font-size="11" fill="#64748b">Remove ground, then rod → negatively charged!</text>
        </svg>
        <div class="diagram-caption">Charging by induction: the final charge is always opposite to the inducing charge</div>
      </div>
      <div class="key-point"><strong>Most important point:</strong> In charging by induction, the induced charge is always <strong>opposite</strong> to the inducing charge. A +ve rod gives a –ve charge by induction.</div>
      <div class="remember-box"><strong>Step order matters for exams:</strong> (1) Bring charged body near, (2) Ground the conductor, (3) Remove the ground first, (4) Remove the charged body. If you remove the charged body before removing the ground, the charge escapes to ground and you get nothing!</div>
    `
  },
  {
    id: 4, level: "basic",
    title: "Coulomb's Law — Formula & Vector Form",
    body: `
      <p>This is the <strong>most important formula</strong> in this chapter. Coulomb's Law tells you the force between two point charges.</p>
      <div class="formula-box">
        <span class="formula-label">Coulomb's Law</span>
        F = kq₁q₂/r² = (1/4πε₀) × (q₁q₂/r²)
      </div>
      <p>where k = 9 × 10⁹ N·m²/C² and ε₀ = 8.854 × 10⁻¹² C²/(N·m²)</p>
      <div class="diagram-container">
        <svg width="420" height="130" viewBox="0 0 420 130">
          <circle cx="100" cy="60" r="28" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="100" y="67" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">+q₁</text>
          <circle cx="320" cy="60" r="28" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="320" y="67" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">+q₂</text>
          <line x1="130" y1="60" x2="175" y2="60" stroke="#ef4444" stroke-width="3"/>
          <polygon points="130,54 116,60 130,66" fill="#ef4444"/>
          <line x1="290" y1="60" x2="245" y2="60" stroke="#ef4444" stroke-width="3"/>
          <polygon points="290,54 304,60 290,66" fill="#ef4444"/>
          <text x="210" y="45" text-anchor="middle" font-size="14" font-weight="700" fill="#ef4444">F (repulsion)</text>
          <line x1="100" y1="100" x2="320" y2="100" stroke="#64748b" stroke-width="1.5"/>
          <line x1="100" y1="95" x2="100" y2="105" stroke="#64748b" stroke-width="1.5"/>
          <line x1="320" y1="95" x2="320" y2="105" stroke="#64748b" stroke-width="1.5"/>
          <text x="210" y="118" text-anchor="middle" font-size="14" fill="#64748b" font-weight="600">r</text>
        </svg>
        <div class="diagram-caption">Like charges repel — force acts outward along the line joining them</div>
      </div>
      <p><strong>Key Features:</strong></p>
      <p>1. Force is <strong>directly proportional</strong> to product of charges — double one charge, force doubles.</p>
      <p>2. Force is <strong>inversely proportional</strong> to square of distance — double the distance, force becomes 1/4th.</p>
      <p>3. Force acts along the <strong>line joining the two charges</strong> (central force).</p>
      <p>4. Follows <strong>Newton's third law</strong>: F₁₂ = –F₂₁ (equal and opposite).</p>
      <div class="formula-box">
        <span class="formula-label">Vector Form</span>
        F→₁₂ = (kq₁q₂/r²) r̂₁₂
      </div>
      <p>Here r̂₁₂ is the unit vector from q₁ toward q₂. If q₁q₂ > 0 (same sign), force is along r̂₁₂ (repulsion). If q₁q₂ < 0 (opposite signs), force is against r̂₁₂ (attraction).</p>
      <div class="key-point"><strong>In a medium:</strong> F = kq₁q₂/(κr²), where κ (kappa) is the dielectric constant. For water κ ≈ 80, so force reduces by 80 times!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting to convert cm to m! If r = 30 cm, use r = 0.3 m in the formula. This single error will make your entire answer wrong.</div>
      <div class="remember-box"><strong>Quick comparison:</strong> Coulomb's Law looks just like Newton's gravity law (F = Gm₁m₂/r²). Both are inverse-square laws! But electric force can be attractive OR repulsive, while gravity is always attractive.</div>
    `
  },
  {
    id: 5, level: "intermediate",
    title: "Superposition Principle — Net Force from Multiple Charges",
    body: `
      <p>What if there are <strong>three or more charges</strong>? How do you find the force on one of them?</p>
      <p>The answer is the <strong>Superposition Principle</strong>: The force on any charge is the <strong>vector sum</strong> of forces due to all other charges, taken one at a time.</p>
      <div class="formula-box">
        <span class="formula-label">Superposition Principle</span>
        F→₁ = F→₁₂ + F→₁₃ + F→₁₄ + ... (vector addition)
      </div>
      <p>Think of it like this: each charge "independently" pushes or pulls on q₁, completely ignoring the other charges. Then you add up all these pushes and pulls using vector addition.</p>
      <p><strong>Step-by-step method for solving problems:</strong></p>
      <p>1. Find force due to each charge separately using Coulomb's Law</p>
      <p>2. Find the x and y components of each force</p>
      <p>3. Add all x-components: Fₓ = F₁ₓ + F₂ₓ + ...</p>
      <p>4. Add all y-components: Fᵧ = F₁ᵧ + F₂ᵧ + ...</p>
      <p>5. Net force: F = √(Fₓ² + Fᵧ²) and direction: θ = tan⁻¹(Fᵧ/Fₓ)</p>
      <div class="key-point"><strong>Critical understanding:</strong> The presence of q₃ does NOT change the force between q₁ and q₂. Each pair interacts independently. This is what makes electrostatics solvable!</div>
      <div class="remember-box"><strong>Exam tip:</strong> When charges are placed at corners of equilateral triangle and asked for net force on one charge — use symmetry! Two equal forces at 60° to each other give resultant = F√3 (when both forces are equal).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Adding forces as scalars (magnitudes only). Forces are <strong>vectors</strong> — you must consider direction! Two forces of 5 N each at 90° give √50 ≈ 7.07 N, not 10 N.</div>
    `
  },
  {
    id: 6, level: "intermediate",
    title: "Electric Field — Definition & Field Due to Point Charge",
    body: `
      <p>Imagine you place a positive charge Q in empty space. It changes the space around it — it creates an "invisible influence zone." This zone is the <strong>electric field</strong>.</p>
      <p>How do we detect it? Place a tiny positive test charge q₀ near Q. It will feel a force. The electric field at that point is:</p>
      <div class="formula-box">
        <span class="formula-label">Electric Field Definition</span>
        E→ = F→/q₀ (Force per unit positive test charge)
      </div>
      <p><strong>Unit:</strong> N/C (Newton per Coulomb) or equivalently V/m</p>
      <div class="diagram-container">
        <svg width="420" height="160" viewBox="0 0 420 160">
          <circle cx="120" cy="80" r="30" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="120" y="87" text-anchor="middle" font-size="20" font-weight="700" fill="#16a34a">+Q</text>
          <text x="120" y="130" text-anchor="middle" font-size="12" fill="#64748b">Source charge</text>
          <circle cx="300" cy="80" r="10" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
          <text x="300" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">q₀</text>
          <text x="300" y="110" text-anchor="middle" font-size="12" fill="#64748b">Test charge</text>
          <line x1="155" y1="80" x2="285" y2="80" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
          <line x1="315" y1="80" x2="370" y2="80" stroke="#2563eb" stroke-width="3"/>
          <polygon points="370,74 385,80 370,86" fill="#2563eb"/>
          <text x="350" y="70" font-size="14" font-weight="700" fill="#2563eb">E→</text>
          <line x1="120" y1="145" x2="300" y2="145" stroke="#64748b" stroke-width="1.5"/>
          <line x1="120" y1="140" x2="120" y2="150" stroke="#64748b" stroke-width="1.5"/>
          <line x1="300" y1="140" x2="300" y2="150" stroke="#64748b" stroke-width="1.5"/>
          <text x="210" y="158" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">r</text>
        </svg>
        <div class="diagram-caption">Electric field points away from positive source charge</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Field Due to Point Charge</span>
        E = kQ/r² = (1/4πε₀) × Q/r²
      </div>
      <p><strong>Direction:</strong></p>
      <p>• If source charge is <strong>+ve</strong>: Field points <strong>radially outward</strong> (away from Q)</p>
      <p>• If source charge is <strong>–ve</strong>: Field points <strong>radially inward</strong> (toward Q)</p>
      <div class="key-point"><strong>Important:</strong> The test charge q₀ must be infinitesimally small so it doesn't disturb the original field. In practice, we use q₀ → 0 in the definition.</div>
      <div class="remember-box"><strong>Quick link:</strong> E = F/q₀ means F = q₀E. So once you know the field, you can find force on ANY charge placed there. This is why the field concept is so powerful!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Confusing force and field. Force depends on BOTH charges (kq₁q₂/r²). Field depends only on the SOURCE charge (kQ/r²). The test charge just "feels" the field.</div>
    `
  },
  {
    id: 7, level: "intermediate",
    title: "Electric Field Lines — Properties & Rules for Drawing",
    body: `
      <p>Electric field lines are imaginary curves drawn to <strong>visualize</strong> the electric field. Think of them like wind maps that show you which way the wind blows and how strong it is.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Positive charge field lines -->
          <circle cx="110" cy="100" r="22" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="110" y="107" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">+</text>
          <line x1="132" y1="100" x2="190" y2="100" stroke="#2563eb" stroke-width="2"/>
          <polygon points="190,95 200,100 190,105" fill="#2563eb"/>
          <line x1="127" y1="78" x2="170" y2="45" stroke="#2563eb" stroke-width="2"/>
          <polygon points="168,38 178,41 171,50" fill="#2563eb"/>
          <line x1="127" y1="122" x2="170" y2="155" stroke="#2563eb" stroke-width="2"/>
          <polygon points="168,162 178,159 171,150" fill="#2563eb"/>
          <line x1="88" y1="100" x2="30" y2="100" stroke="#2563eb" stroke-width="2"/>
          <polygon points="30,95 20,100 30,105" fill="#2563eb"/>
          <line x1="93" y1="78" x2="50" y2="45" stroke="#2563eb" stroke-width="2"/>
          <polygon points="52,38 42,41 49,50" fill="#2563eb"/>
          <line x1="93" y1="122" x2="50" y2="155" stroke="#2563eb" stroke-width="2"/>
          <polygon points="52,162 42,159 49,150" fill="#2563eb"/>
          <text x="110" y="190" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Positive charge</text>
          <!-- Negative charge field lines -->
          <circle cx="330" cy="100" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5"/>
          <text x="330" y="107" text-anchor="middle" font-size="18" font-weight="700" fill="#dc2626">–</text>
          <line x1="390" y1="100" x2="355" y2="100" stroke="#2563eb" stroke-width="2"/>
          <polygon points="358,95 348,100 358,105" fill="#2563eb"/>
          <line x1="375" y1="48" x2="347" y2="78" stroke="#2563eb" stroke-width="2"/>
          <polygon points="350,72 344,83 354,80" fill="#2563eb"/>
          <line x1="375" y1="152" x2="347" y2="122" stroke="#2563eb" stroke-width="2"/>
          <polygon points="350,128 344,117 354,120" fill="#2563eb"/>
          <line x1="270" y1="100" x2="305" y2="100" stroke="#2563eb" stroke-width="2"/>
          <polygon points="302,95 312,100 302,105" fill="#2563eb"/>
          <line x1="285" y1="48" x2="313" y2="78" stroke="#2563eb" stroke-width="2"/>
          <polygon points="310,72 316,83 306,80" fill="#2563eb"/>
          <line x1="285" y1="152" x2="313" y2="122" stroke="#2563eb" stroke-width="2"/>
          <polygon points="310,128 316,117 306,120" fill="#2563eb"/>
          <text x="330" y="190" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Negative charge</text>
        </svg>
        <div class="diagram-caption">Field lines go OUT from +ve charges and come IN to –ve charges</div>
      </div>
      <p><strong>Properties of Electric Field Lines:</strong></p>
      <p>1. They start from <strong>positive charges</strong> and end at <strong>negative charges</strong></p>
      <p>2. They <strong>never cross</strong> each other (because field has unique direction at each point)</p>
      <p>3. They are <strong>continuous curves</strong> — no sudden breaks</p>
      <p>4. <strong>Closer lines = stronger field</strong>, farther apart = weaker field</p>
      <p>5. They are <strong>perpendicular</strong> to the surface of a conductor</p>
      <p>6. They <strong>contract lengthwise</strong> (attraction between unlike charges) and <strong>expand sideways</strong> (repulsion between like charges)</p>
      <div class="key-point"><strong>Why lines never cross:</strong> If they did, the field would have two directions at the crossing point — that's physically impossible! There can only be one electric field direction at any point.</div>
      <div class="remember-box"><strong>Board exam tip:</strong> "State any four properties of electric field lines" — this is a guaranteed 2-mark question. Memorize at least 5 properties to be safe.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Drawing field lines in closed loops. Electric field lines NEVER form closed loops (unlike magnetic field lines). They always start from + and end at – (or go to infinity).</div>
    `
  },
  {
    id: 8, level: "intermediate",
    title: "Electric Field Due to a System of Charges",
    body: `
      <p>Just like forces, electric fields also follow the <strong>superposition principle</strong>. The total field at a point is the vector sum of fields due to each individual charge.</p>
      <div class="formula-box">
        <span class="formula-label">Superposition of Electric Fields</span>
        E→ = E→₁ + E→₂ + E→₃ + ... = Σ (1/4πε₀) × (qᵢ/rᵢ²) r̂ᵢ
      </div>
      <p><strong>How to solve step-by-step:</strong></p>
      <p>1. Pick the point P where you need to find the field.</p>
      <p>2. Find the field at P due to each charge separately (magnitude AND direction).</p>
      <p>3. Resolve each field into x and y components.</p>
      <p>4. Add: Eₓ(total) = ΣEₓᵢ and Eᵧ(total) = ΣEᵧᵢ</p>
      <p>5. Final answer: E = √(Eₓ² + Eᵧ²)</p>
      <div class="key-point"><strong>Symmetry shortcut:</strong> Before calculating, LOOK for symmetry. If two equal charges are symmetrically placed about point P, their field components in one direction will cancel. This saves huge calculation time!</div>
      <p><strong>Common configurations you MUST know:</strong></p>
      <table class="compare-table">
        <tr><th>Configuration</th><th>Field at Centre</th></tr>
        <tr><td>Two equal +ve charges at equal distance</td><td>Fields cancel → E = 0 at midpoint</td></tr>
        <tr><td>+q and –q at equal distance (not dipole axis)</td><td>Fields add up → double the individual field at midpoint</td></tr>
        <tr><td>Three equal charges at corners of equilateral triangle</td><td>E = 0 at centroid (by symmetry)</td></tr>
        <tr><td>Four equal charges at corners of square</td><td>E = 0 at centre (by symmetry)</td></tr>
      </table>
      <div class="remember-box"><strong>Exam shortcut:</strong> For n equal charges equally spaced on a circle, the field at the centre is always ZERO. If one charge is removed, the field at centre equals the field due to that one removed charge, but in the <strong>opposite direction</strong>.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting that field from a –ve charge points TOWARD it, not away from it. Always draw arrows toward –ve charges.</div>
    `
  },
  {
    id: 9, level: "intermediate",
    title: "Continuous Charge Distribution — Linear, Surface & Volume Charge Density",
    body: `
      <p>So far we dealt with point charges. But what about a <strong>charged wire</strong>, a <strong>charged plate</strong>, or a <strong>charged sphere</strong>? The charge is spread continuously — we can't count individual charges.</p>
      <p>For this, we use <strong>charge densities</strong>:</p>
      <table class="compare-table">
        <tr><th>Type</th><th>Symbol</th><th>Formula</th><th>Unit</th><th>Example</th></tr>
        <tr><td>Linear charge density</td><td>λ (lambda)</td><td>λ = dq/dl</td><td>C/m</td><td>Charged wire, ring</td></tr>
        <tr><td>Surface charge density</td><td>σ (sigma)</td><td>σ = dq/dA</td><td>C/m²</td><td>Charged plate, sphere surface</td></tr>
        <tr><td>Volume charge density</td><td>ρ (rho)</td><td>ρ = dq/dV</td><td>C/m³</td><td>Charged solid sphere</td></tr>
      </table>
      <p>Think of it like spreading butter:</p>
      <p>• <strong>λ</strong> = butter spread on a line (thin bread stick)</p>
      <p>• <strong>σ</strong> = butter spread on a flat surface (chapati)</p>
      <p>• <strong>ρ</strong> = butter mixed throughout a volume (paneer block)</p>
      <div class="formula-box">
        <span class="formula-label">Finding Total Charge</span>
        Wire: Q = λL &nbsp;|&nbsp; Plate: Q = σA &nbsp;|&nbsp; Sphere: Q = ρV
      </div>
      <p><strong>To find field from continuous distribution:</strong></p>
      <p>1. Take a tiny element (dl, dA, or dV)</p>
      <p>2. Find charge on element: dq = λdl or σdA or ρdV</p>
      <p>3. Find field dE due to this dq (treat as point charge)</p>
      <p>4. Integrate: E = ∫dE over the entire distribution</p>
      <div class="key-point"><strong>Board exam note:</strong> You must know the meanings and units of λ, σ, and ρ. A 1-mark definition question appears frequently.</div>
      <div class="remember-box"><strong>Memory trick for units:</strong> λ has /m (1D), σ has /m² (2D), ρ has /m³ (3D). The denominator matches the dimensionality!</div>
    `
  },
  {
    id: 10, level: "advanced",
    title: "Electric Flux — Definition & Formula",
    body: `
      <p><strong>Electric flux</strong> is one of those topics that sounds scary but is actually simple once you get the picture.</p>
      <p>Think of flux like <strong>counting how many field lines pass through a surface</strong>. More lines through the surface = more flux.</p>
      <div class="diagram-container">
        <svg width="440" height="200" viewBox="0 0 440 200">
          <!-- Surface -->
          <rect x="180" y="30" width="100" height="140" rx="4" fill="#93c5fd" fill-opacity="0.2" stroke="#2563eb" stroke-width="2"/>
          <text x="230" y="25" text-anchor="middle" font-size="13" fill="#2563eb" font-weight="600">Area A</text>
          <!-- Normal vector -->
          <line x1="230" y1="100" x2="330" y2="100" stroke="#1e293b" stroke-width="2.5"/>
          <polygon points="330,94 345,100 330,106" fill="#1e293b"/>
          <text x="350" y="96" font-size="14" font-weight="700" fill="#1e293b">n̂</text>
          <!-- Field lines going through -->
          <line x1="60" y1="50" x2="400" y2="50" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="395,45 405,50 395,55" fill="#22c55e"/>
          <line x1="60" y1="80" x2="400" y2="80" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="395,75 405,80 395,85" fill="#22c55e"/>
          <line x1="60" y1="110" x2="400" y2="110" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="395,105 405,110 395,115" fill="#22c55e"/>
          <line x1="60" y1="140" x2="400" y2="140" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="395,135 405,140 395,145" fill="#22c55e"/>
          <text x="60" y="180" font-size="13" fill="#22c55e" font-weight="600">E→ (field lines)</text>
          <!-- Angle -->
          <path d="M 230,100 L 260,100 A 30,30 0 0,0 256,82" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <text x="268" y="95" font-size="14" fill="#64748b" font-weight="600">θ</text>
        </svg>
        <div class="diagram-caption">Electric flux = E · A · cos θ, where θ is the angle between E→ and the area normal n̂</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Electric Flux</span>
        Φ = E→ · A→ = EA cos θ
      </div>
      <p>where θ is the angle between the electric field E→ and the <strong>outward normal</strong> to the surface.</p>
      <p><strong>Unit:</strong> N·m²/C or equivalently V·m</p>
      <p><strong>Special cases:</strong></p>
      <p>• θ = 0° (field perpendicular to surface): Φ = EA (maximum flux)</p>
      <p>• θ = 90° (field parallel to surface): Φ = 0 (no flux — lines graze past, none go through)</p>
      <p>• θ = 180° (field entering surface): Φ = –EA (negative flux)</p>
      <div class="formula-box">
        <span class="formula-label">For Non-Uniform Fields</span>
        Φ = ∫ E→ · dA→ (integrate over entire surface)
      </div>
      <div class="key-point"><strong>Sign convention:</strong> Flux is <strong>positive</strong> when field lines go <strong>out</strong> of the surface and <strong>negative</strong> when they go <strong>into</strong> the surface.</div>
      <div class="remember-box"><strong>Analogy:</strong> Flux is like rain falling on a tilted umbrella. When the umbrella faces straight up (θ = 0°), maximum rain is caught. When tilted sideways (θ = 90°), no rain is caught. Flux works the same way!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Using the angle between E→ and the surface instead of the angle between E→ and the <strong>normal</strong> to the surface. If the surface makes angle α with E→, then θ = 90° – α.</div>
    `
  },
  {
    id: 11, level: "advanced",
    title: "Gauss's Law — Statement & Proof Concept",
    body: `
      <p>Gauss's Law is the most <strong>elegant</strong> result in electrostatics. It connects the electric flux through a closed surface to the charge enclosed inside.</p>
      <div class="formula-box">
        <span class="formula-label">Gauss's Law</span>
        ∮ E→ · dA→ = q(enclosed) / ε₀
      </div>
      <p><strong>In simple words:</strong> The total electric flux coming out of any closed surface equals (total charge inside) divided by ε₀.</p>
      <div class="diagram-container">
        <svg width="420" height="200" viewBox="0 0 420 200">
          <!-- Gaussian surface -->
          <ellipse cx="210" cy="100" rx="120" ry="80" fill="#93c5fd" fill-opacity="0.12" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="8,4"/>
          <text x="210" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">Gaussian Surface (closed)</text>
          <!-- Charge inside -->
          <circle cx="210" cy="100" r="20" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="210" y="107" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">+q</text>
          <!-- Field lines going out -->
          <line x1="240" y1="100" x2="370" y2="100" stroke="#22c55e" stroke-width="1.8"/>
          <polygon points="365,95 378,100 365,105" fill="#22c55e"/>
          <line x1="180" y1="100" x2="50" y2="100" stroke="#22c55e" stroke-width="1.8"/>
          <polygon points="55,95 42,100 55,105" fill="#22c55e"/>
          <line x1="210" y1="70" x2="210" y2="10" stroke="#22c55e" stroke-width="1.8"/>
          <line x1="225" y1="75" x2="290" y2="30" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="195" y1="75" x2="130" y2="30" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="225" y1="125" x2="290" y2="170" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="195" y1="125" x2="130" y2="170" stroke="#22c55e" stroke-width="1.5"/>
          <line x1="210" y1="130" x2="210" y2="190" stroke="#22c55e" stroke-width="1.8"/>
          <text x="380" y="120" font-size="13" fill="#22c55e" font-weight="600">Flux out</text>
        </svg>
        <div class="diagram-caption">All field lines from +q pass through the Gaussian surface. Total flux = q/ε₀</div>
      </div>
      <p><strong>Key points about Gauss's Law:</strong></p>
      <p>1. The closed surface is called a <strong>Gaussian surface</strong> — it's an imaginary surface you choose for convenience.</p>
      <p>2. Only charges <strong>inside</strong> the surface contribute to the total flux. Charges outside contribute zero net flux.</p>
      <p>3. The law is true for ANY shape of closed surface — sphere, cube, potato shape — it doesn't matter!</p>
      <p>4. Gauss's law is equivalent to Coulomb's law — both contain the same physics, just different formulations.</p>
      <div class="key-point"><strong>Why charges outside don't matter:</strong> Any field line from an outside charge that enters the surface must also exit it. So the inward flux and outward flux cancel out, giving zero net flux from external charges.</div>
      <p><strong>Proof sketch (for point charge at centre of sphere):</strong></p>
      <p>For a sphere of radius r centred on charge q: E = kq/r² everywhere on the surface, and E→ ∥ dA→.</p>
      <p>So Φ = E × (4πr²) = (kq/r²)(4πr²) = 4πkq = q/ε₀  ✓</p>
      <div class="remember-box"><strong>Exam tip:</strong> When CBSE asks "State and prove Gauss's theorem" — state the law, draw a sphere around a point charge, and show the above calculation. This is a guaranteed 3-5 mark question.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Thinking Gauss's law only works for spherical surfaces. It works for ANY closed surface! We choose symmetric surfaces to make calculations easier.</div>
    `
  },
  {
    id: 12, level: "advanced",
    title: "Applications of Gauss's Law — Infinite Line, Plane Sheet & Spherical Shell",
    body: `
      <p>Gauss's Law becomes super powerful when there's <strong>symmetry</strong>. Here are the three applications CBSE loves:</p>
      <p><strong>1. Infinite Straight Line of Charge (linear charge density λ):</strong></p>
      <div class="diagram-container">
        <svg width="440" height="140" viewBox="0 0 440 140">
          <!-- Wire -->
          <line x1="20" y1="70" x2="420" y2="70" stroke="#ef4444" stroke-width="3"/>
          <text x="30" y="60" font-size="12" fill="#dc2626" font-weight="600">+λ C/m</text>
          <!-- Gaussian cylinder -->
          <ellipse cx="220" cy="70" rx="20" ry="50" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,3"/>
          <line x1="120" y1="20" x2="320" y2="20" stroke="#2563eb" stroke-width="2"/>
          <line x1="120" y1="120" x2="320" y2="120" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="120" cy="70" rx="20" ry="50" fill="#93c5fd" fill-opacity="0.1" stroke="#2563eb" stroke-width="2"/>
          <ellipse cx="320" cy="70" rx="20" ry="50" fill="#93c5fd" fill-opacity="0.1" stroke="#2563eb" stroke-width="2"/>
          <!-- Labels -->
          <line x1="220" y1="70" x2="220" y2="20" stroke="#64748b" stroke-width="1.5"/>
          <text x="228" y="45" font-size="12" fill="#64748b" font-weight="600">r</text>
          <text x="220" y="138" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="600">Gaussian cylinder (length L)</text>
        </svg>
        <div class="diagram-caption">Cylindrical Gaussian surface around an infinite line charge</div>
      </div>
      <div class="formula-box">
        <span class="formula-label">Infinite Line Charge</span>
        E = λ/(2πε₀r) = 2kλ/r &nbsp; [Direction: radially outward]
      </div>
      <p><strong>How:</strong> Choose a cylindrical Gaussian surface of radius r, length L. Flux through curved surface = E × 2πrL. Flux through flat ends = 0 (E ⊥ dA). Charge enclosed = λL. Apply Gauss's law: E × 2πrL = λL/ε₀ → E = λ/(2πε₀r).</p>

      <p><strong>2. Infinite Plane Sheet of Charge (surface charge density σ):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Infinite Plane Sheet</span>
        E = σ/(2ε₀) &nbsp; [Uniform — does NOT depend on distance!]
      </div>
      <p><strong>How:</strong> Choose a cylindrical "pill-box" Gaussian surface cutting through the sheet. Flux through two flat faces = 2EA. Charge enclosed = σA. So 2EA = σA/ε₀ → E = σ/2ε₀.</p>
      <div class="key-point"><strong>Surprising result:</strong> The field from an infinite sheet is <strong>constant</strong> — it doesn't decrease with distance! Whether you're 1 m or 100 m away, the field is the same.</div>

      <p><strong>3. Uniformly Charged Spherical Shell (total charge Q, radius R):</strong></p>
      <div class="formula-box">
        <span class="formula-label">Spherical Shell</span>
        Outside (r > R): E = kQ/r² (same as point charge!)<br>
        Inside (r < R): E = 0 (field is ZERO!)
      </div>
      <p><strong>How:</strong> For r > R: Spherical Gaussian surface encloses charge Q → E × 4πr² = Q/ε₀. For r < R: Gaussian surface encloses zero charge → E = 0.</p>
      <div class="key-point"><strong>Shell theorem:</strong> A uniformly charged shell behaves exactly like a point charge (placed at centre) for points <strong>outside</strong>. For points <strong>inside</strong>, the field is zero — the shell "shields" the interior.</div>
      <table class="compare-table">
        <tr><th>Source</th><th>Gaussian Surface</th><th>Field</th><th>Variation</th></tr>
        <tr><td>Infinite line</td><td>Cylinder</td><td>λ/(2πε₀r)</td><td>1/r</td></tr>
        <tr><td>Infinite sheet</td><td>Pill-box</td><td>σ/(2ε₀)</td><td>Constant</td></tr>
        <tr><td>Spherical shell (outside)</td><td>Sphere</td><td>kQ/r²</td><td>1/r²</td></tr>
        <tr><td>Spherical shell (inside)</td><td>Sphere</td><td>0</td><td>Zero</td></tr>
      </table>
      <div class="remember-box"><strong>CBSE favourite:</strong> "Derive expression for field due to infinite plane sheet using Gauss's law" is a 5-mark question that appears almost every year. Practice the derivation with a neat diagram!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> In the plane sheet derivation, forgetting that BOTH flat faces of the pill-box contribute to flux — giving 2EA, not just EA. This halves your answer!</div>
    `
  },
  {
    id: 13, level: "exam",
    title: "Complete Formula Sheet — Electric Charges & Fields",
    body: `
      <p>Here's your <strong>one-page formula sheet</strong> for last-minute revision before the exam:</p>
      <p><strong>FUNDAMENTAL CONSTANTS:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Constants</span>
        k = 1/(4πε₀) = 9 × 10⁹ N·m²/C²<br>
        ε₀ = 8.854 × 10⁻¹² C²/(N·m²)<br>
        e = 1.6 × 10⁻¹⁹ C
      </div>
      <p><strong>CHARGE:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Quantization</span>
        q = ne &nbsp; (n = integer)
      </div>
      <p><strong>COULOMB'S LAW:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Coulomb's Law</span>
        F = kq₁q₂/r² &nbsp; | &nbsp; In medium: F = kq₁q₂/(κr²)
      </div>
      <p><strong>ELECTRIC FIELD:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Electric Field Formulas</span>
        E→ = F→/q₀ &nbsp; | &nbsp; E = kQ/r² (point charge)<br>
        E = λ/(2πε₀r) (infinite line)<br>
        E = σ/(2ε₀) (infinite plane sheet)<br>
        Spherical shell: E = kQ/r² (outside), E = 0 (inside)
      </div>
      <p><strong>CHARGE DENSITIES:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Charge Densities</span>
        λ = Q/L (C/m) &nbsp; | &nbsp; σ = Q/A (C/m²) &nbsp; | &nbsp; ρ = Q/V (C/m³)
      </div>
      <p><strong>ELECTRIC FLUX & GAUSS'S LAW:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Flux & Gauss's Law</span>
        Φ = E→ · A→ = EA cos θ &nbsp; (for uniform E)<br>
        Φ = ∮ E→ · dA→ = q(enclosed)/ε₀ &nbsp; (Gauss's Law)
      </div>
      <p><strong>SUPERPOSITION:</strong></p>
      <div class="formula-box">
        <span class="formula-label">Superposition</span>
        F→(net) = F→₁ + F→₂ + ... &nbsp; | &nbsp; E→(net) = E→₁ + E→₂ + ...
      </div>
      <p><strong>QUICK REFERENCE — How field varies:</strong></p>
      <table class="compare-table">
        <tr><th>Source</th><th>Field varies as</th></tr>
        <tr><td>Point charge</td><td>1/r²</td></tr>
        <tr><td>Infinite line</td><td>1/r</td></tr>
        <tr><td>Infinite sheet</td><td>Constant (independent of r)</td></tr>
        <tr><td>Dipole (far field)</td><td>1/r³</td></tr>
      </table>
      <div class="remember-box"><strong>Last-minute check:</strong> Make sure you know the SI units — Charge: Coulomb (C), Field: N/C or V/m, Flux: N·m²/C or V·m, Force: Newton (N), ε₀: C²/(N·m²).</div>
    `
  },
  {
    id: 14, level: "exam",
    title: "Common CBSE Numerical Tricks",
    body: `
      <p>Here are the most useful tricks that will save you time in the exam:</p>
      <p><strong>TRICK 1: Force in terms of ratio</strong></p>
      <div class="key-point"><strong>If charges or distances change:</strong> Don't recalculate from scratch! Use ratios.<br>
      F₂/F₁ = (q₁'/q₁)(q₂'/q₂)(r₁/r₂)²<br>
      Example: If r doubles → F becomes F/4. If q doubles and r doubles → F stays the same!</div>

      <p><strong>TRICK 2: Equilibrium of three charges</strong></p>
      <div class="key-point"><strong>Two charges Q₁ and Q₂ are fixed. Where to place q so it's in equilibrium?</strong><br>
      Place q between them (if same sign) or outside (if opposite sign).<br>
      Distance from Q₁: x = d/(1 + √(Q₂/Q₁))<br>
      where d = distance between Q₁ and Q₂.</div>

      <p><strong>TRICK 3: Force on charge at centre of polygon</strong></p>
      <div class="key-point"><strong>Equal charges at all corners of regular polygon:</strong> Force at centre = 0 (by symmetry).<br>
      <strong>One charge removed:</strong> Force = kqQ/r² directed <strong>toward the missing charge</strong>.</div>

      <p><strong>TRICK 4: Quick Coulomb's Law calculation</strong></p>
      <div class="key-point"><strong>For μC charges separated by cm:</strong><br>
      F = 9 × 10⁹ × (μC₁ × μC₂)/(cm)²<br>
      = 9 × 10⁹ × (10⁻⁶)(10⁻⁶)/(10⁻²)²<br>
      = 9 × 10⁹ × 10⁻¹²/10⁻⁴ = 9 × 10⁹ × 10⁻⁸ = 90<br>
      So for 1 μC charges at 1 cm: F = 90 N. Scale from here!</div>

      <p><strong>TRICK 5: Number of electrons transferred</strong></p>
      <div class="key-point"><strong>Given charge q, find number of electrons:</strong> n = q/e = q/(1.6 × 10⁻¹⁹)<br>
      Quick: 1 μC = 10⁻⁶ C → n = 10⁻⁶/1.6 × 10⁻¹⁹ = 6.25 × 10¹² electrons</div>

      <p><strong>TRICK 6: Null point between two charges</strong></p>
      <div class="key-point"><strong>For two +ve charges Q₁ and Q₂ (Q₁ > Q₂):</strong> The null point (where E = 0) lies between them, closer to the <strong>smaller charge</strong>.<br>
      Distance from Q₂: x = d/(1 + √(Q₁/Q₂))</div>

      <p><strong>TRICK 7: Flux shortcuts</strong></p>
      <div class="key-point"><strong>Charge q at centre of cube:</strong> Total flux = q/ε₀<br>
      Flux through one face = q/(6ε₀)<br>
      <strong>If charge is at corner of cube:</strong> It's shared by 8 cubes → flux through that cube = q/(8ε₀)</div>

      <div class="remember-box"><strong>Golden rule:</strong> In CBSE numericals, always write the formula first, substitute values with units, then calculate. You get marks for each step, even if the final answer is wrong!</div>
      <div class="mistake-box"><strong>Biggest exam mistake:</strong> Not converting units! Memorize: 1 μC = 10⁻⁶ C, 1 nC = 10⁻⁹ C, 1 cm = 10⁻² m, 1 mm = 10⁻³ m. Write the conversion explicitly.</div>
    `
  },
  {
    id: 15, level: "exam",
    title: "Board Exam Most Asked Questions — Chapter 1",
    body: `
      <p>Based on past 10+ years of CBSE board papers, here are the questions that appear <strong>most frequently</strong>:</p>

      <p><strong>🔥 GUARANTEED 5-MARK QUESTIONS (appear almost every year):</strong></p>
      <div class="key-point"><strong>Q1:</strong> State Gauss's theorem. Using it, derive the expression for electric field due to a uniformly charged infinite plane sheet.<br>
      <strong>Q2:</strong> State Gauss's theorem. Apply it to find the electric field at a point (a) outside and (b) inside a uniformly charged thin spherical shell.<br>
      <strong>Q3:</strong> State Coulomb's Law in electrostatics. Write it in vector form.</div>

      <p><strong>🔥 COMMON 3-MARK QUESTIONS:</strong></p>
      <div class="key-point"><strong>Q4:</strong> Define electric field intensity. What is its SI unit? Derive expression for electric field at a point on the axial line of an electric dipole. (Note: dipole part covered in dipole chapter)<br>
      <strong>Q5:</strong> Derive expression for electric field due to infinite line charge using Gauss's law.<br>
      <strong>Q6:</strong> Three charges are placed at the vertices of an equilateral triangle. Find the net force on one charge.</div>

      <p><strong>🔥 COMMON 2-MARK QUESTIONS:</strong></p>
      <div class="key-point"><strong>Q7:</strong> State and explain the properties of electric field lines. (Write any 4-5 properties)<br>
      <strong>Q8:</strong> What is quantization of charge? Why is it not observed at macroscopic level?<br>
      <strong>Q9:</strong> Define linear, surface, and volume charge density. Give their SI units.<br>
      <strong>Q10:</strong> A charge Q is placed at the centre of a cube. What is the flux through one face?</div>

      <p><strong>🔥 COMMON 1-MARK / MCQ QUESTIONS:</strong></p>
      <div class="key-point"><strong>Q11:</strong> Electric field lines never cross. Why?<br>
      <strong>Q12:</strong> Electric field inside a charged conductor is zero. Why?<br>
      <strong>Q13:</strong> What is the SI unit of electric flux?<br>
      <strong>Q14:</strong> What is the ratio of electric force to gravitational force between two protons?</div>

      <p><strong>ANSWERING STRATEGY:</strong></p>
      <table class="compare-table">
        <tr><th>Marks</th><th>Strategy</th><th>Time</th></tr>
        <tr><td>1 mark</td><td>Direct answer, no extra explanation</td><td>1-2 min</td></tr>
        <tr><td>2 marks</td><td>Definition + formula + 1-2 lines</td><td>3-4 min</td></tr>
        <tr><td>3 marks</td><td>Statement + derivation OR numerical</td><td>5-7 min</td></tr>
        <tr><td>5 marks</td><td>Full derivation with diagram + conclusion</td><td>10-12 min</td></tr>
      </table>

      <div class="remember-box"><strong>Presentation tips:</strong><br>
      1. Always draw a neat, labelled diagram — you get marks for it even without the derivation.<br>
      2. Box your final answers.<br>
      3. Write the formula before substituting values.<br>
      4. Mention direction of vector quantities (force, field).<br>
      5. Include SI units in your final answer.</div>

      <div class="mistake-box"><strong>Why students lose marks:</strong><br>
      1. Skipping the diagram in derivation questions (costs 1 mark).<br>
      2. Not writing the direction of electric field in the final answer.<br>
      3. Writing Gauss's law without mentioning "closed surface" — the word "closed" is essential!<br>
      4. In the spherical shell derivation, not separately handling r > R and r < R cases.</div>
    `
  },
  {
    id: 16, level: "exam",
    title: "Gauss's Theorem — Statement, Proof & Intuition",
    body: `
      <p><strong>Gauss's Theorem</strong> (also called Gauss's Law) is one of the most powerful tools in electrostatics. Let's understand it deeply.</p>

      <p><strong>Statement (plain language):</strong> The total electric flux through any closed surface is equal to 1/ε₀ times the total charge enclosed inside that surface.</p>

      <div class="formula-box">
        <span class="formula-label">Gauss's Theorem</span>
        ∮ E→ · dA→ = q(enclosed) / ε₀
      </div>

      <p>Think of it this way: imagine a closed bag around some charges. No matter what shape the bag is — sphere, cube, or a crumpled potato — the total number of field lines poking out through the bag depends <strong>only</strong> on the total charge inside.</p>

      <div class="diagram-container">
        <svg width="440" height="260" viewBox="0 0 440 260">
          <!-- Irregular Gaussian surface -->
          <path d="M 220,30 C 320,20 380,80 370,140 C 360,200 300,250 220,240 C 140,230 70,200 60,140 C 50,80 120,20 220,30 Z" fill="#dbeafe" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="8,4"/>
          <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">Gaussian Surface (any shape)</text>
          <!-- Charge inside -->
          <circle cx="220" cy="135" r="22" fill="#d1fae5" stroke="#22c55e" stroke-width="2.5"/>
          <text x="220" y="142" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">+q</text>
          <!-- Field lines radiating outward through surface -->
          <line x1="242" y1="135" x2="370" y2="135" stroke="#22c55e" stroke-width="1.8"/>
          <polygon points="365,130 378,135 365,140" fill="#22c55e"/>
          <line x1="198" y1="135" x2="62" y2="135" stroke="#22c55e" stroke-width="1.8"/>
          <polygon points="67,130 54,135 67,140" fill="#22c55e"/>
          <line x1="220" y1="113" x2="220" y2="35" stroke="#22c55e" stroke-width="1.8"/>
          <polygon points="215,40 220,27 225,40" fill="#22c55e"/>
          <line x1="220" y1="157" x2="220" y2="237" stroke="#22c55e" stroke-width="1.8"/>
          <polygon points="215,232 220,245 225,232" fill="#22c55e"/>
          <line x1="238" y1="118" x2="330" y2="55" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="325,48 338,50 328,60" fill="#22c55e"/>
          <line x1="202" y1="118" x2="110" y2="55" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="115,48 102,50 112,60" fill="#22c55e"/>
          <line x1="238" y1="152" x2="330" y2="215" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="325,222 338,220 328,210" fill="#22c55e"/>
          <line x1="202" y1="152" x2="110" y2="215" stroke="#22c55e" stroke-width="1.5"/>
          <polygon points="115,222 102,220 112,210" fill="#22c55e"/>
        </svg>
        <div class="diagram-caption">Field lines from +q pass through an irregular Gaussian surface. Total flux = q/ε₀ regardless of surface shape.</div>
      </div>

      <p><strong>Proof (for a point charge at the centre of a sphere of radius r):</strong></p>
      <p>1. The electric field at every point on the sphere is E = kq/r² = q/(4πε₀r²), directed radially outward.</p>
      <p>2. Since E→ is parallel to dA→ (outward normal) everywhere on the sphere, E→ · dA→ = E dA.</p>
      <p>3. Also, E has the same magnitude at every point on the sphere (by symmetry).</p>
      <p>4. Therefore: ∮ E→ · dA→ = E × ∮ dA = E × 4πr²</p>
      <p>5. Substituting E = q/(4πε₀r²):</p>
      <p>&nbsp;&nbsp;&nbsp;Φ = [q/(4πε₀r²)] × 4πr² = <strong>q/ε₀</strong> &nbsp; ✓</p>

      <p><strong>Why flux depends only on enclosed charge, not shape:</strong></p>
      <p>Any field line from an <strong>outside</strong> charge that enters the surface must also exit it — so its net contribution is zero. For charges <strong>inside</strong>, every field line that originates must eventually cross the surface outward. So the total outward flux depends only on how many field lines originate inside — which depends only on the enclosed charge.</p>

      <p><strong>Solved Example:</strong></p>
      <div class="key-point"><strong>Q: A charge of 5 μC is placed at the centre of a sphere of radius 1 m. Find the total electric flux through the sphere.</strong><br><br>
      <strong>Solution:</strong><br>
      By Gauss's theorem: Φ = q/ε₀<br>
      q = 5 μC = 5 × 10⁻⁶ C<br>
      ε₀ = 8.854 × 10⁻¹² C²/(N·m²)<br>
      Φ = 5 × 10⁻⁶ / 8.854 × 10⁻¹² = <strong>5.65 × 10⁵ N·m²/C</strong><br><br>
      Note: The radius (1 m) is irrelevant! Flux depends only on enclosed charge.</div>

      <div class="remember-box"><strong>Tip:</strong> Flux through a closed surface = q/ε₀ regardless of the shape, size, or position of the charge inside the surface. Even if the charge is off-centre, the total flux remains q/ε₀.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Thinking that if the charge is not at the centre, Gauss's law doesn't apply. The law is always valid — it's just that the field won't be uniform on the surface, making direct integration harder. The total flux is still q/ε₀.</div>
    `
  },
  {
    id: 17, level: "exam",
    title: "Gauss's Law Application — Electric Field due to Infinite Line Charge",
    body: `
      <p>This is one of the most frequently asked 5-mark derivations in CBSE. Let's build it step-by-step.</p>

      <p><strong>Setup:</strong> An infinitely long straight wire has uniform linear charge density λ (C/m). We need the electric field at a perpendicular distance r from the wire.</p>

      <p><strong>Step 1: Identify the symmetry</strong></p>
      <p>By symmetry, the electric field must point <strong>radially outward</strong> (perpendicular to the wire) and its magnitude can only depend on the distance r from the wire.</p>

      <p><strong>Step 2: Choose the Gaussian surface</strong></p>
      <p>We choose a <strong>cylindrical Gaussian surface</strong> of radius r and length L, coaxial with the wire.</p>

      <div class="diagram-container">
        <svg width="440" height="220" viewBox="0 0 440 220">
          <!-- Wire (line charge) -->
          <line x1="20" y1="110" x2="420" y2="110" stroke="#ef4444" stroke-width="3"/>
          <text x="30" y="100" font-size="12" fill="#dc2626" font-weight="700">+ + + + + + + + + + + + λ C/m + + + + + + + + + + + +</text>
          <!-- Gaussian cylinder body -->
          <line x1="110" y1="40" x2="330" y2="40" stroke="#2563eb" stroke-width="2"/>
          <line x1="110" y1="180" x2="330" y2="180" stroke="#2563eb" stroke-width="2"/>
          <!-- Left cap (ellipse) -->
          <ellipse cx="110" cy="110" rx="18" ry="70" fill="#93c5fd" fill-opacity="0.1" stroke="#2563eb" stroke-width="2"/>
          <!-- Right cap (ellipse) -->
          <ellipse cx="330" cy="110" rx="18" ry="70" fill="#93c5fd" fill-opacity="0.1" stroke="#2563eb" stroke-width="2"/>
          <!-- Front half of middle ellipse (dashed) -->
          <ellipse cx="220" cy="110" rx="18" ry="70" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
          <!-- Radius arrow -->
          <line x1="220" y1="110" x2="220" y2="40" stroke="#1e293b" stroke-width="2"/>
          <polygon points="215,45 220,32 225,45" fill="#1e293b"/>
          <text x="228" y="75" font-size="14" fill="#1e293b" font-weight="700">r</text>
          <!-- Length label -->
          <line x1="110" y1="200" x2="330" y2="200" stroke="#64748b" stroke-width="1.5"/>
          <line x1="110" y1="195" x2="110" y2="205" stroke="#64748b" stroke-width="1.5"/>
          <line x1="330" y1="195" x2="330" y2="205" stroke="#64748b" stroke-width="1.5"/>
          <text x="220" y="215" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">L</text>
          <!-- E arrows pointing outward from curved surface -->
          <line x1="220" y1="40" x2="220" y2="15" stroke="#22c55e" stroke-width="2.5"/>
          <polygon points="215,18 220,5 225,18" fill="#22c55e"/>
          <text x="235" y="12" font-size="12" fill="#22c55e" font-weight="700">E→</text>
          <line x1="220" y1="180" x2="220" y2="205" stroke="#22c55e" stroke-width="2" opacity="0.4"/>
          <!-- dA label on curved surface -->
          <text x="250" y="35" font-size="12" fill="#2563eb" font-weight="600">dA→ (outward)</text>
          <!-- End cap labels -->
          <text x="70" y="60" font-size="11" fill="#64748b">End cap:</text>
          <text x="65" y="75" font-size="11" fill="#64748b">E→ ⊥ dA→</text>
          <text x="65" y="88" font-size="11" fill="#ef4444" font-weight="600">Flux = 0</text>
        </svg>
        <div class="diagram-caption">Cylindrical Gaussian surface around an infinite line charge. E→ is radial, so flux through end caps is zero.</div>
      </div>

      <p><strong>Step 3: Calculate flux through each part</strong></p>
      <p><strong>Curved surface:</strong> E→ is parallel to dA→ (both radially outward).<br>
      Φ(curved) = E × (2πrL) &nbsp; [area of curved surface = 2πrL]</p>
      <p><strong>Two flat end caps:</strong> E→ is perpendicular to dA→ (E is radial, dA points along axis).<br>
      Φ(caps) = 0 &nbsp; [cos 90° = 0]</p>
      <p><strong>Total flux:</strong> Φ = E × 2πrL + 0 = E × 2πrL</p>

      <p><strong>Step 4: Find enclosed charge</strong></p>
      <p>Charge enclosed = λ × L</p>

      <p><strong>Step 5: Apply Gauss's Law</strong></p>
      <p>∮ E→ · dA→ = q(enc)/ε₀</p>
      <p>E × 2πrL = λL/ε₀</p>

      <div class="formula-box">
        <span class="formula-label">Electric Field — Infinite Line Charge</span>
        E = λ/(2πε₀r) &nbsp; [directed radially outward for +λ]
      </div>

      <p><strong>Solved Numerical:</strong></p>
      <div class="key-point"><strong>Q: A long straight wire carries a linear charge density λ = 5 × 10⁻⁶ C/m. Find the electric field at a distance of 10 cm from the wire.</strong><br><br>
      <strong>Solution:</strong><br>
      E = λ/(2πε₀r) = 2kλ/r<br>
      E = 2 × 9 × 10⁹ × 5 × 10⁻⁶ / 0.1<br>
      E = 90 × 10³ / 0.1 = <strong>9 × 10⁵ N/C</strong><br>
      Direction: radially outward from the wire.</div>

      <div class="remember-box"><strong>Key insight:</strong> The field falls off as 1/r (not 1/r²). This is because the source is one-dimensional (a line), not zero-dimensional (a point). More spread-out sources produce slower-decaying fields.</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Forgetting that flux through the end caps is ZERO. Students sometimes add the end cap areas to get total flux — this is wrong because E→ ⊥ dA→ on the caps, making cos 90° = 0.</div>
    `
  },
  {
    id: 18, level: "exam",
    title: "Gauss's Law Application — Electric Field due to Infinite Plane Sheet",
    body: `
      <p>This derivation appears almost every year in CBSE boards. Master it perfectly.</p>

      <p><strong>Setup:</strong> An infinite thin plane sheet has uniform surface charge density σ (C/m²). We need the field at a distance r from the sheet.</p>

      <p><strong>Step 1: Identify the symmetry</strong></p>
      <p>By symmetry, the field must be <strong>perpendicular to the sheet</strong> and must be the same at equal distances on either side. It points away from the sheet (for +σ).</p>

      <p><strong>Step 2: Choose the Gaussian surface</strong></p>
      <p>We choose a <strong>pill-box (short cylinder)</strong> with its flat faces parallel to the sheet, each at distance r from the sheet. Let the cross-sectional area of each face be A.</p>

      <div class="diagram-container">
        <svg width="440" height="240" viewBox="0 0 440 240">
          <!-- Infinite sheet (vertical) -->
          <rect x="215" y="10" width="4" height="220" fill="#f59e0b" opacity="0.5"/>
          <line x1="217" y1="10" x2="217" y2="230" stroke="#f59e0b" stroke-width="3"/>
          <text x="217" y="8" text-anchor="middle" font-size="12" fill="#d97706" font-weight="700">Charged sheet (σ)</text>
          <!-- + signs on sheet -->
          <text x="217" y="50" text-anchor="middle" font-size="14" font-weight="700" fill="#d97706">+</text>
          <text x="217" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#d97706">+</text>
          <text x="217" y="110" text-anchor="middle" font-size="14" font-weight="700" fill="#d97706">+</text>
          <text x="217" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#d97706">+</text>
          <text x="217" y="170" text-anchor="middle" font-size="14" font-weight="700" fill="#d97706">+</text>
          <text x="217" y="200" text-anchor="middle" font-size="14" font-weight="700" fill="#d97706">+</text>
          <!-- Pill-box Gaussian surface -->
          <!-- Left face -->
          <ellipse cx="120" cy="120" rx="12" ry="45" fill="#93c5fd" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
          <!-- Right face -->
          <ellipse cx="314" cy="120" rx="12" ry="45" fill="#93c5fd" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
          <!-- Top and bottom connecting lines -->
          <line x1="120" y1="75" x2="314" y2="75" stroke="#2563eb" stroke-width="2"/>
          <line x1="120" y1="165" x2="314" y2="165" stroke="#2563eb" stroke-width="2"/>
          <!-- E arrows pointing outward from both faces -->
          <line x1="120" y1="120" x2="60" y2="120" stroke="#22c55e" stroke-width="2.5"/>
          <polygon points="65,115 52,120 65,125" fill="#22c55e"/>
          <text x="45" y="112" font-size="12" fill="#22c55e" font-weight="700">E→</text>
          <line x1="314" y1="120" x2="374" y2="120" stroke="#22c55e" stroke-width="2.5"/>
          <polygon points="369,115 382,120 369,125" fill="#22c55e"/>
          <text x="385" y="112" font-size="12" fill="#22c55e" font-weight="700">E→</text>
          <!-- dA arrows on faces -->
          <line x1="120" y1="90" x2="90" y2="90" stroke="#2563eb" stroke-width="1.5"/>
          <polygon points="95,86 84,90 95,94" fill="#2563eb"/>
          <text x="78" y="85" font-size="10" fill="#2563eb" font-weight="600">dA→</text>
          <line x1="314" y1="90" x2="344" y2="90" stroke="#2563eb" stroke-width="1.5"/>
          <polygon points="339,86 350,90 339,94" fill="#2563eb"/>
          <text x="352" y="85" font-size="10" fill="#2563eb" font-weight="600">dA→</text>
          <!-- Distance labels -->
          <line x1="120" y1="180" x2="217" y2="180" stroke="#64748b" stroke-width="1.5"/>
          <text x="168" y="195" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">r</text>
          <line x1="217" y1="180" x2="314" y2="180" stroke="#64748b" stroke-width="1.5"/>
          <text x="265" y="195" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">r</text>
          <!-- Area label -->
          <text x="120" y="70" text-anchor="middle" font-size="11" fill="#2563eb">Area A</text>
          <text x="314" y="70" text-anchor="middle" font-size="11" fill="#2563eb">Area A</text>
        </svg>
        <div class="diagram-caption">Pill-box Gaussian surface cutting through the infinite plane sheet. E→ is perpendicular to the sheet on both sides.</div>
      </div>

      <p><strong>Step 3: Calculate flux through each part</strong></p>
      <p><strong>Right flat face:</strong> E→ ∥ dA→ (both point right) → Φ₁ = EA</p>
      <p><strong>Left flat face:</strong> E→ ∥ dA→ (both point left) → Φ₂ = EA</p>
      <p><strong>Curved surface:</strong> E→ ⊥ dA→ → Φ₃ = 0</p>
      <p><strong>Total flux:</strong> Φ = EA + EA + 0 = <strong>2EA</strong></p>

      <p><strong>Step 4: Find enclosed charge</strong></p>
      <p>The pill-box encloses a patch of area A of the sheet → q(enc) = σA</p>

      <p><strong>Step 5: Apply Gauss's Law</strong></p>
      <p>2EA = σA/ε₀</p>

      <div class="formula-box">
        <span class="formula-label">Electric Field — Infinite Plane Sheet</span>
        E = σ/(2ε₀) &nbsp; [directed away from the sheet on both sides]
      </div>

      <p><strong>Solved Numerical:</strong></p>
      <div class="key-point"><strong>Q: A large plane sheet has a uniform surface charge density σ = 2 × 10⁻⁶ C/m². Find the electric field on each side of the sheet.</strong><br><br>
      <strong>Solution:</strong><br>
      E = σ/(2ε₀)<br>
      E = (2 × 10⁻⁶) / (2 × 8.854 × 10⁻¹²)<br>
      E = 10⁻⁶ / 8.854 × 10⁻¹²<br>
      E = <strong>1.13 × 10⁵ N/C</strong><br>
      Direction: perpendicular to the sheet, pointing away on both sides.</div>

      <div class="key-point"><strong>Surprising result:</strong> The field E = σ/(2ε₀) does NOT depend on r (the distance from the sheet). Whether you are 1 cm or 100 m away from an infinite sheet, the field is exactly the same! This is because the contributions from farther parts of the sheet compensate for the greater distance.</div>

      <div class="remember-box"><strong>Trick for two parallel sheets:</strong><br>
      Two sheets with +σ and -σ: Field between them = σ/ε₀ (fields add), field outside = 0 (fields cancel). This is the principle behind a parallel plate capacitor!</div>
      <div class="mistake-box"><strong>Common mistake:</strong> Writing the total flux as EA instead of <strong>2EA</strong>. Both flat faces of the pill-box contribute flux — the field exits through BOTH faces. Forgetting the factor of 2 gives E = σ/ε₀ instead of σ/(2ε₀), which is wrong for a single sheet.</div>
    `
  },
  {
    id: 19, level: "exam",
    title: "Gauss's Law Application — Electric Field due to Uniformly Charged Spherical Shell",
    body: `
      <p>This is another guaranteed 5-mark CBSE question. There are <strong>two cases</strong> — you must derive both.</p>

      <p><strong>Setup:</strong> A thin spherical shell of radius R carries a total charge Q uniformly distributed on its surface.</p>

      <div class="diagram-container">
        <svg width="440" height="280" viewBox="0 0 440 280">
          <!-- Title -->
          <text x="220" y="18" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Two Gaussian Surfaces for a Spherical Shell</text>
          <!-- Charged shell -->
          <circle cx="220" cy="155" r="80" fill="none" stroke="#f59e0b" stroke-width="3"/>
          <!-- + signs on shell -->
          <text x="220" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="220" y="242" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="142" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="298" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="163" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="277" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="163" y="218" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="277" y="218" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">+</text>
          <text x="260" y="82" text-anchor="middle" font-size="11" fill="#d97706" font-weight="600">Shell (R, Q)</text>
          <!-- Gaussian surface OUTSIDE (r > R) -->
          <circle cx="220" cy="155" r="120" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="370" y="55" font-size="12" fill="#2563eb" font-weight="700">Gaussian surface</text>
          <text x="370" y="70" font-size="12" fill="#2563eb" font-weight="700">(r > R): outside</text>
          <!-- Gaussian surface INSIDE (r < R) -->
          <circle cx="220" cy="155" r="40" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/>
          <text x="220" y="155" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700">r < R</text>
          <text x="220" y="168" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700">(inside)</text>
          <!-- Radius labels -->
          <line x1="220" y1="155" x2="300" y2="155" stroke="#d97706" stroke-width="1.5"/>
          <text x="260" y="150" text-anchor="middle" font-size="12" fill="#d97706" font-weight="600">R</text>
          <line x1="220" y1="155" x2="220" y2="35" stroke="#2563eb" stroke-width="1.5"/>
          <text x="230" y="42" font-size="12" fill="#2563eb" font-weight="600">r</text>
          <!-- E arrows outside -->
          <line x1="340" y1="155" x2="395" y2="155" stroke="#22c55e" stroke-width="2"/>
          <polygon points="390,150 403,155 390,160" fill="#22c55e"/>
          <text x="405" y="150" font-size="11" fill="#22c55e" font-weight="700">E→</text>
        </svg>
        <div class="diagram-caption">Blue dashed circle: Gaussian surface outside (r > R). Red dashed circle: Gaussian surface inside (r < R).</div>
      </div>

      <p><strong>CASE 1: Point outside the shell (r > R)</strong></p>
      <p>Choose a spherical Gaussian surface of radius r (r > R), concentric with the shell.</p>
      <p>By symmetry, E→ is radial and has the same magnitude everywhere on this surface.</p>
      <p>Flux: ∮ E→ · dA→ = E × 4πr²</p>
      <p>Charge enclosed = Q (the entire shell charge is inside)</p>
      <p>Gauss's Law: E × 4πr² = Q/ε₀</p>

      <div class="formula-box">
        <span class="formula-label">Outside the Shell (r > R)</span>
        E = Q/(4πε₀r²) = kQ/r² &nbsp; [Same as a point charge at the centre!]
      </div>

      <p><strong>CASE 2: Point inside the shell (r < R)</strong></p>
      <p>Choose a spherical Gaussian surface of radius r (r < R), concentric with the shell.</p>
      <p>Charge enclosed = 0 (all charge is on the shell surface, which is outside this Gaussian surface)</p>
      <p>Gauss's Law: E × 4πr² = 0</p>

      <div class="formula-box">
        <span class="formula-label">Inside the Shell (r < R)</span>
        E = 0 &nbsp; [Electric field is ZERO everywhere inside!]
      </div>

      <p><strong>Solved Numerical 1 (outside):</strong></p>
      <div class="key-point"><strong>Q: A spherical shell of radius 0.5 m carries a charge of 10 μC. Find the electric field at a distance of 1.5 m from the centre.</strong><br><br>
      <strong>Solution:</strong><br>
      Since r = 1.5 m > R = 0.5 m, we are outside the shell.<br>
      E = kQ/r² = 9 × 10⁹ × 10 × 10⁻⁶ / (1.5)²<br>
      E = 9 × 10⁴ / 2.25 = <strong>4 × 10⁴ N/C</strong><br>
      Direction: radially outward from the centre.</div>

      <p><strong>Solved Numerical 2 (inside):</strong></p>
      <div class="key-point"><strong>Q: In the above shell, find the electric field at a distance of 0.2 m from the centre.</strong><br><br>
      <strong>Solution:</strong><br>
      Since r = 0.2 m < R = 0.5 m, we are inside the shell.<br>
      By Gauss's law, <strong>E = 0</strong>.<br><br>
      The field is zero everywhere inside a uniformly charged spherical shell — this is called <strong>electrostatic shielding</strong>.</div>

      <p><strong>CBSE Previous Year Pattern:</strong></p>
      <div class="key-point"><strong>Typical question format:</strong> "Using Gauss's theorem, show that no electric field exists inside a hollow charged conductor." OR "Using Gauss's theorem, derive the electric field due to a uniformly charged thin spherical shell at a point (i) outside and (ii) inside the shell. Draw the E vs r graph."</div>

      <p><strong>E vs r Graph (frequently asked):</strong></p>
      <p>For r < R: E = 0 (flat line on x-axis)</p>
      <p>At r = R: E jumps to E = kQ/R² (maximum)</p>
      <p>For r > R: E = kQ/r² (decreasing curve, like point charge)</p>

      <div class="remember-box"><strong>Key takeaway:</strong> Outside the shell, it behaves exactly like a point charge Q placed at the centre. Inside the shell, the field is zero — the shell provides perfect electrostatic shielding. This is why sensitive electronics are enclosed in metal cages (Faraday cages).</div>
      <div class="mistake-box"><strong>Common mistake:</strong> In CBSE, students forget to mention BOTH cases (r > R and r < R) in the derivation. The question always expects both. Also, many students forget to draw the E vs r graph — which carries 1 mark. Always draw it: flat zero line for r < R, then a 1/r² curve for r > R.</div>
    `
  }
];
