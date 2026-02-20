/* CBSE Physics XII — Mock Test Data
   5 full-syllabus tests × 16 MCQs each
   Based on CBSE Board Question Papers 2019–2024
   1 mark per correct answer | No negative marking | Duration: 30 minutes
*/

const MOCK_TESTS = [

  /* ═══════════════════════════════════════════════
     TEST 1 — Full Syllabus, Set A  (CBSE 2023 style)
  ═══════════════════════════════════════════════ */
  {
    id: 1,
    name: "Full Syllabus — Set A",
    subtitle: "CBSE 2023 Board Style",
    icon: "①",
    duration: 1800,
    questions: [
      {
        id: 1, chapter: "Ch 1 — Electric Charges & Fields",
        text: "The total electric flux through a closed surface enclosing an electric dipole is:",
        options: ["q/ε₀", "−q/ε₀", "Zero", "2q/ε₀"],
        answer: "C",
        explanation: "By Gauss's law, flux = Q<sub>enc</sub>/ε₀. A dipole has charges +q and −q, so net enclosed charge = 0. Hence flux through any closed surface enclosing it = zero."
      },
      {
        id: 2, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "A capacitor is charged by a battery and the battery is then disconnected. If the separation between the plates is doubled, the electric field E between the plates:",
        options: ["Becomes double", "Becomes half", "Remains the same", "Becomes zero"],
        answer: "C",
        explanation: "With battery disconnected, charge Q is fixed. E = σ/ε₀ = Q/(Aε₀). Since Q and A do not change, E remains unchanged even when d is doubled."
      },
      {
        id: 3, chapter: "Ch 3 — Current Electricity",
        text: "A carbon resistor has colour bands: Orange–Orange–Orange–Gold. Its resistance is:",
        options: ["33 kΩ ± 5%", "3.3 kΩ ± 5%", "33 kΩ ± 10%", "333 Ω ± 5%"],
        answer: "A",
        explanation: "Orange = 3, Orange = 3, Orange = ×10³, Gold = ±5%. So R = 33 × 10³ Ω ± 5% = 33 kΩ ± 5%."
      },
      {
        id: 4, chapter: "Ch 4 — Moving Charges & Magnetism",
        text: "A proton, a deuteron and an α-particle are accelerated through the same potential difference and enter a magnetic field perpendicular to it. The ratio of radii of their circular paths r<sub>p</sub> : r<sub>d</sub> : r<sub>α</sub> is:",
        options: ["1 : 1 : 1", "1 : √2 : 1", "1 : √2 : √2", "√2 : 1 : 1"],
        answer: "C",
        explanation: "r = √(2mV/q)/B. r<sub>p</sub> ∝ √(m/e), r<sub>d</sub> ∝ √(2m/e), r<sub>α</sub> ∝ √(4m/2e) = √(2m/e). Ratio = 1 : √2 : √2."
      },
      {
        id: 5, chapter: "Ch 5 — Magnetism & Matter",
        text: "The magnetic field at the centre of a circular coil of radius R carrying current I is:",
        options: ["μ₀I/2R", "μ₀I/4R", "μ₀I/2πR", "μ₀I/R"],
        answer: "A",
        explanation: "From Biot-Savart law, integrating over a full circle: B = μ₀I/2R at the centre."
      },
      {
        id: 6, chapter: "Ch 6 — Electromagnetic Induction",
        text: "A rectangular coil of N turns and area A rotates with angular velocity ω in a uniform magnetic field B. The peak (maximum) EMF induced is:",
        options: ["NBA", "NBAω", "NBA/ω", "NBAω²"],
        answer: "B",
        explanation: "EMF = NBAω sin(ωt). Peak value when sin(ωt) = 1: ε₀ = NBAω."
      },
      {
        id: 7, chapter: "Ch 7 — Alternating Current",
        text: "In a series LCR circuit the voltage across R is 30 V, across C is 70 V and across L is 30 V. The applied supply voltage is:",
        options: ["130 V", "50 V", "30 V", "70 V"],
        answer: "B",
        explanation: "V = √[V<sub>R</sub>² + (V<sub>L</sub> − V<sub>C</sub>)²] = √[30² + (30 − 70)²] = √[900 + 1600] = √2500 = 50 V."
      },
      {
        id: 8, chapter: "Ch 8 — Electromagnetic Waves",
        text: "Electromagnetic waves transport:",
        options: ["Energy only", "Both energy and momentum", "Momentum only", "Neither energy nor momentum"],
        answer: "B",
        explanation: "EM waves carry energy (Poynting vector S = E × H) and momentum (p = U/c, giving rise to radiation pressure)."
      },
      {
        id: 9, chapter: "Ch 9 — Ray Optics",
        text: "An object is placed at a distance 2f from a convex lens of focal length f. The image is formed at:",
        options: ["f from the lens", "2f from the lens", "3f from the lens", "Infinity"],
        answer: "B",
        explanation: "Using lens formula with u = −2f: 1/v − 1/(−2f) = 1/f → v = 2f. Image is real, inverted, and same size."
      },
      {
        id: 10, chapter: "Ch 10 — Wave Optics",
        text: "In Young's double slit experiment, if one slit is closed, the screen pattern:",
        options: ["Disappears completely", "Remains unchanged as double-slit fringes", "Changes to a single-slit diffraction pattern", "Doubles in brightness"],
        answer: "C",
        explanation: "With only one slit open there is no two-slit interference. The pattern becomes a single-slit diffraction pattern — a broad central maximum flanked by dimmer secondary maxima."
      },
      {
        id: 11, chapter: "Ch 11 — Dual Nature of Radiation",
        text: "The photoelectric effect is best explained by:",
        options: ["Wave nature of light only", "Particle (photon) nature of light", "Both wave and particle nature equally", "Neither wave nor particle theory"],
        answer: "B",
        explanation: "The wave theory cannot explain: (i) instantaneous emission above threshold frequency, (ii) independence of KE on intensity. Einstein's photon model (E = hν) explains all observations."
      },
      {
        id: 12, chapter: "Ch 12 — Atoms",
        text: "The ground state energy of hydrogen atom is −13.6 eV. The energy required to ionise it from the first excited state (n = 2) is:",
        options: ["13.6 eV", "3.4 eV", "6.8 eV", "1.51 eV"],
        answer: "B",
        explanation: "E<sub>n=2</sub> = −13.6/4 = −3.4 eV. Energy to ionise from n = 2: 0 − (−3.4) = 3.4 eV."
      },
      {
        id: 13, chapter: "Ch 13 — Nuclei",
        text: "The energy equivalent of 1 atomic mass unit (1 u) is approximately:",
        options: ["931 MeV", "1 MeV", "9.31 MeV", "9310 MeV"],
        answer: "A",
        explanation: "E = mc² = 1.66 × 10⁻²⁷ × (3 × 10⁸)² = 1.49 × 10⁻¹⁰ J ≈ 931 MeV."
      },
      {
        id: 14, chapter: "Ch 14 — Semiconductor Electronics",
        text: "In a common-emitter transistor amplifier, the phase difference between the input and output voltage signals is:",
        options: ["0°", "90°", "180°", "45°"],
        answer: "C",
        explanation: "In CE configuration, increasing V<sub>in</sub> increases I<sub>C</sub>, increasing the drop across R<sub>C</sub>, so V<sub>out</sub> decreases. This produces a 180° phase reversal."
      },
      {
        id: 15, chapter: "Ch 3 — Current Electricity",
        text: "A wire of resistance 5 Ω is stretched uniformly so that its length becomes twice the original. Its new resistance is:",
        options: ["10 Ω", "20 Ω", "2.5 Ω", "40 Ω"],
        answer: "B",
        explanation: "Volume = lA = constant. If l → 2l then A → A/2. R = ρl/A, so R' = ρ(2l)/(A/2) = 4R = 4 × 5 = 20 Ω."
      },
      {
        id: 16, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "Three capacitors of capacitances 2 μF, 3 μF and 6 μF are connected in series. The equivalent capacitance is:",
        options: ["1 μF", "11 μF", "3 μF", "2 μF"],
        answer: "A",
        explanation: "1/C = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. So C<sub>eq</sub> = 1 μF."
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     TEST 2 — Full Syllabus, Set B  (CBSE 2022 style)
  ═══════════════════════════════════════════════ */
  {
    id: 2,
    name: "Full Syllabus — Set B",
    subtitle: "CBSE 2022 Board Style",
    icon: "②",
    duration: 1800,
    questions: [
      {
        id: 1, chapter: "Ch 1 — Electric Charges & Fields",
        text: "The electric field on the axis of a short dipole at distance r from its centre is proportional to:",
        options: ["1/r²", "1/r³", "1/r", "r²"],
        answer: "B",
        explanation: "E<sub>axial</sub> = 2kp/r³ for a short dipole (r >> 2l). The field falls as 1/r³ along the axis."
      },
      {
        id: 2, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "A capacitor of capacitance C is charged to potential V. The battery is disconnected and a dielectric slab of constant K is inserted. The new potential across the capacitor is:",
        options: ["KV", "V/K", "KV²", "V·K²"],
        answer: "B",
        explanation: "Q is constant after disconnecting battery. Inserting dielectric: C → KC. New V' = Q/KC = (CV)/(KC) = V/K."
      },
      {
        id: 3, chapter: "Ch 3 — Current Electricity",
        text: "Kirchhoff's junction (current) rule is based on the conservation of:",
        options: ["Energy", "Charge", "Momentum", "Mass"],
        answer: "B",
        explanation: "At any junction, Σ I<sub>in</sub> = Σ I<sub>out</sub> — meaning charge neither accumulates at nor disappears from a junction. This is conservation of charge."
      },
      {
        id: 4, chapter: "Ch 4 — Moving Charges & Magnetism",
        text: "The magnetic field at perpendicular distance r from an infinitely long straight conductor carrying current I is:",
        options: ["μ₀I/r", "μ₀I/2πr", "μ₀I/4πr", "μ₀I/2r"],
        answer: "B",
        explanation: "Using Ampere's circuital law: B × 2πr = μ₀I → B = μ₀I/2πr."
      },
      {
        id: 5, chapter: "Ch 5 — Magnetism & Matter",
        text: "Soft iron is preferred for making electromagnets because it has:",
        options: ["High retentivity, low coercivity", "Low retentivity, high coercivity", "High retentivity, high coercivity", "Low retentivity, low coercivity"],
        answer: "D",
        explanation: "An electromagnet must magnetise and demagnetise easily. Soft iron has low retentivity (loses magnetism when current stops) and low coercivity (easy to demagnetise)."
      },
      {
        id: 6, chapter: "Ch 6 — Electromagnetic Induction",
        text: "Faraday's law of electromagnetic induction states that the induced EMF in a circuit is equal to the negative of the:",
        options: ["Rate of change of magnetic field B", "Rate of change of magnetic flux through the circuit", "Rate of change of current", "Rate of change of charge"],
        answer: "B",
        explanation: "ε = −dΦ<sub>B</sub>/dt. The induced EMF equals the negative rate of change of magnetic flux through the circuit."
      },
      {
        id: 7, chapter: "Ch 7 — Alternating Current",
        text: "In a purely capacitive AC circuit, the average power consumed over one complete cycle is:",
        options: ["Zero", "V<sub>rms</sub>I<sub>rms</sub>", "V²<sub>rms</sub>/R", "Maximum"],
        answer: "A",
        explanation: "P = V<sub>rms</sub>I<sub>rms</sub> cos φ. For a pure capacitor φ = 90°, so cos 90° = 0 and P = 0. The capacitor stores and returns energy alternately."
      },
      {
        id: 8, chapter: "Ch 8 — Electromagnetic Waves",
        text: "Which of the following is NOT an electromagnetic wave?",
        options: ["X-rays", "Microwaves", "β-rays", "Gamma rays"],
        answer: "C",
        explanation: "β-rays are fast-moving electrons (charged particles) emitted in radioactive decay — they are NOT electromagnetic waves. X-rays, microwaves and gamma rays are all EM waves."
      },
      {
        id: 9, chapter: "Ch 9 — Ray Optics",
        text: "The critical angle for a glass–air interface (n<sub>glass</sub> = 1.5) is approximately:",
        options: ["41.8°", "45.0°", "30.0°", "60.0°"],
        answer: "A",
        explanation: "sin i<sub>c</sub> = 1/n = 1/1.5 = 2/3, so i<sub>c</sub> = sin<sup>-1</sup>(2/3) ≈ 41.8°."
      },
      {
        id: 10, chapter: "Ch 10 — Wave Optics",
        text: "The condition for destructive interference (dark fringe) in terms of path difference Δ is:",
        options: ["Δ = nλ", "Δ = (2n − 1)λ/2", "Δ = 2nλ", "Δ = nλ/4"],
        answer: "B",
        explanation: "Destructive interference occurs when path difference = odd multiple of λ/2 = (2n − 1)λ/2 where n = 1, 2, 3, …"
      },
      {
        id: 11, chapter: "Ch 11 — Dual Nature of Radiation",
        text: "The de Broglie wavelength of a particle is independent of its:",
        options: ["Mass", "Charge", "Momentum", "Velocity"],
        answer: "B",
        explanation: "λ = h/p = h/mv. The wavelength depends on mass and velocity (i.e., momentum) but not on the charge of the particle."
      },
      {
        id: 12, chapter: "Ch 12 — Atoms",
        text: "According to Bohr's model of the hydrogen atom, the angular momentum of the electron in the nth orbit is:",
        options: ["nh/2π", "h/2πn", "nπh", "nh/π"],
        answer: "A",
        explanation: "Bohr's quantisation condition: L = nh/2π = nℏ, where n = 1, 2, 3, …"
      },
      {
        id: 13, chapter: "Ch 13 — Nuclei",
        text: "In β⁻ decay, the particle emitted from the nucleus is:",
        options: ["A proton", "A neutron", "An electron", "A helium nucleus"],
        answer: "C",
        explanation: "In β⁻ decay, a neutron converts to a proton: n → p + e⁻ + ν̄<sub>e</sub>. An electron (and antineutrino) is emitted. The mass number A is unchanged, Z increases by 1."
      },
      {
        id: 14, chapter: "Ch 14 — Semiconductor Electronics",
        text: "Which logic gate gives an output of 1 when both inputs are 0?",
        options: ["AND gate", "OR gate", "NAND gate", "NOR gate"],
        answer: "D",
        explanation: "NOR gate: output = NOT(A OR B). When A = 0 and B = 0: OR gives 0, NOT(0) = 1. Output is 1."
      },
      {
        id: 15, chapter: "Ch 4 — Moving Charges & Magnetism",
        text: "An electron (charge = 1.6 × 10⁻¹⁹ C) moves with velocity 2 × 10⁶ m/s perpendicular to a magnetic field of 0.1 T. The magnetic force on the electron is:",
        options: ["3.2 × 10⁻¹⁴ N", "3.2 × 10⁻¹³ N", "1.6 × 10⁻¹⁴ N", "6.4 × 10⁻¹⁴ N"],
        answer: "A",
        explanation: "F = qvB = 1.6 × 10⁻¹⁹ × 2 × 10⁶ × 0.1 = 3.2 × 10⁻¹⁴ N."
      },
      {
        id: 16, chapter: "Ch 9 — Ray Optics",
        text: "An object is placed 30 cm in front of a concave mirror of focal length 20 cm. The image distance is:",
        options: ["−60 cm", "+60 cm", "−30 cm", "+30 cm"],
        answer: "A",
        explanation: "Mirror formula: 1/v + 1/u = 1/f. With u = −30 cm, f = −20 cm: 1/v = −1/20 + 1/30 = −1/60. So v = −60 cm (real, inverted image)."
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     TEST 3 — Full Syllabus, Set C  (CBSE 2021 style)
  ═══════════════════════════════════════════════ */
  {
    id: 3,
    name: "Full Syllabus — Set C",
    subtitle: "CBSE 2021 Board Style",
    icon: "③",
    duration: 1800,
    questions: [
      {
        id: 1, chapter: "Ch 1 — Electric Charges & Fields",
        text: "Gauss's law relates the electric flux through a closed surface to:",
        options: ["The net charge outside the surface", "The net charge enclosed within the surface", "The total charge in the universe", "The rate of change of electric field"],
        answer: "B",
        explanation: "Gauss's law: Φ = Q<sub>enc</sub>/ε₀. Only the charge enclosed within the Gaussian surface determines the net flux through it."
      },
      {
        id: 2, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "Two charged conducting spheres of radii R₁ and R₂ are connected by a conducting wire. The ratio of their surface charge densities σ₁ : σ₂ is:",
        options: ["R₁ : R₂", "R₂ : R₁", "R₁² : R₂²", "R₂² : R₁²"],
        answer: "B",
        explanation: "At the same potential: kQ₁/R₁ = kQ₂/R₂ → Q₁/Q₂ = R₁/R₂. Since σ = Q/4πR², σ₁/σ₂ = (Q₁/Q₂)(R₂²/R₁²) = R₂/R₁."
      },
      {
        id: 3, chapter: "Ch 3 — Current Electricity",
        text: "A cell of EMF 1.5 V and internal resistance 0.5 Ω is connected to an external resistance of 4.5 Ω. The terminal voltage of the cell is:",
        options: ["1.5 V", "1.35 V", "1.0 V", "0.75 V"],
        answer: "B",
        explanation: "I = E/(R + r) = 1.5/5 = 0.3 A. Terminal voltage V = E − Ir = 1.5 − 0.3 × 0.5 = 1.35 V."
      },
      {
        id: 4, chapter: "Ch 4 — Moving Charges & Magnetism",
        text: "A galvanometer has full-scale deflection at 10 mA and resistance 20 Ω. To convert it into an ammeter of full-scale range 5 A, the shunt resistance required is:",
        options: ["0.04 Ω", "0.4 Ω", "4 Ω", "40 Ω"],
        answer: "A",
        explanation: "S = I<sub>g</sub>G/(I − I<sub>g</sub>) = (0.01 × 20)/(5 − 0.01) = 0.2/4.99 ≈ 0.04 Ω."
      },
      {
        id: 5, chapter: "Ch 5 — Magnetism & Matter",
        text: "A diamagnetic material placed near a magnet will:",
        options: ["Get strongly attracted", "Get weakly attracted", "Get weakly repelled", "Show no effect"],
        answer: "C",
        explanation: "Diamagnetic materials (like Bi, Cu) have negative susceptibility and are weakly repelled by magnetic fields. They move from stronger to weaker field regions."
      },
      {
        id: 6, chapter: "Ch 6 — Electromagnetic Induction",
        text: "The self-inductance of a solenoid of N turns, cross-sectional area A, length l, filled with material of relative permeability μ<sub>r</sub> is:",
        options: ["μ₀N²A/l", "μ₀μ<sub>r</sub>N²A/l", "μ₀NA/l", "μ<sub>r</sub>N²A/μ₀l"],
        answer: "B",
        explanation: "L = μ₀μ<sub>r</sub>N²A/l. The relative permeability μ<sub>r</sub> accounts for the core material — it multiplies the free-space inductance."
      },
      {
        id: 7, chapter: "Ch 7 — Alternating Current",
        text: "The quality factor Q of a series LCR circuit at resonance is:",
        options: ["ω₀L/R", "ω₀C/R", "R/ω₀L", "ω₀/R"],
        answer: "A",
        explanation: "Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C). A higher Q means sharper resonance (more selective circuit)."
      },
      {
        id: 8, chapter: "Ch 8 — Electromagnetic Waves",
        text: "The approximate frequency range of visible light is:",
        options: ["4 × 10¹⁴ to 7 × 10¹⁴ Hz", "4 × 10⁸ to 7 × 10⁸ Hz", "4 × 10¹⁰ to 7 × 10¹⁰ Hz", "4 × 10¹² to 7 × 10¹² Hz"],
        answer: "A",
        explanation: "Visible light lies between violet (≈ 7 × 10¹⁴ Hz) and red (≈ 4 × 10¹⁴ Hz), corresponding to wavelengths 400–700 nm."
      },
      {
        id: 9, chapter: "Ch 9 — Ray Optics",
        text: "A ray of light passes through a glass slab with parallel faces. The emergent ray is:",
        options: ["Perpendicular to the incident ray", "Parallel to the incident ray (laterally displaced)", "At 45° to the incident ray", "Normal to the slab surface"],
        answer: "B",
        explanation: "For a parallel-sided slab, the angle of refraction at exit = original angle of incidence, so the emergent ray is parallel to the incident ray (but laterally shifted)."
      },
      {
        id: 10, chapter: "Ch 10 — Wave Optics",
        text: "Huygen's wave theory explains the bending of waves around corners. This phenomenon is called:",
        options: ["Reflection", "Refraction", "Diffraction", "Polarisation"],
        answer: "C",
        explanation: "Diffraction is the bending of waves around obstacles or through apertures. Huygen's principle of secondary wavelets explains diffraction naturally."
      },
      {
        id: 11, chapter: "Ch 11 — Dual Nature of Radiation",
        text: "The graph of stopping potential V₀ against frequency ν of incident radiation is a:",
        options: ["Straight line with positive slope", "Parabola", "Hyperbola", "Straight line with negative slope"],
        answer: "A",
        explanation: "eV₀ = hν − φ₀, so V₀ = (h/e)ν − φ₀/e. This is linear: V₀ ∝ ν with slope = h/e (Planck's constant / electron charge)."
      },
      {
        id: 12, chapter: "Ch 12 — Atoms",
        text: "The wavelength of the first line of the Balmer series in the hydrogen spectrum (H<sub>α</sub> line) is approximately:",
        options: ["656 nm", "486 nm", "434 nm", "410 nm"],
        answer: "A",
        explanation: "The first Balmer line (n = 3 → n = 2) gives λ ≈ 656.3 nm (red line). This is the most well-known line in the hydrogen spectrum."
      },
      {
        id: 13, chapter: "Ch 13 — Nuclei",
        text: "In a nuclear fission reaction, the sum of the masses of the products is:",
        options: ["Equal to the mass of the parent nucleus", "Greater than the mass of the parent nucleus", "Less than the mass of the parent nucleus", "Unpredictable"],
        answer: "C",
        explanation: "Mass defect Δm = m<sub>parent</sub> − Σm<sub>products</sub> > 0. This mass defect is converted to energy by E = Δmc², which is released in fission."
      },
      {
        id: 14, chapter: "Ch 14 — Semiconductor Electronics",
        text: "In semiconductors, a 'hole' is defined as:",
        options: ["A proton in the lattice", "A vacancy created when an electron leaves the valence band", "An electron in the conduction band", "A positron"],
        answer: "B",
        explanation: "When a covalent bond breaks, an electron moves to the conduction band, leaving behind a vacancy (hole) in the valence band. The hole behaves as a positive charge carrier."
      },
      {
        id: 15, chapter: "Ch 6 — Electromagnetic Induction",
        text: "A coil of area 0.04 m² with 1000 turns is placed in a uniform magnetic field of 5 T. The coil is rotated from θ = 0° to θ = 90° in 0.2 s. The average induced EMF is:",
        options: ["100 V", "500 V", "200 V", "1000 V"],
        answer: "D",
        explanation: "ΔΦ per turn = B·A·Δ(cos θ) = 5 × 0.04 × (cos 0° − cos 90°) = 0.2 Wb. Total EMF = N·ΔΦ/Δt = 1000 × 0.2/0.2 = 1000 V."
      },
      {
        id: 16, chapter: "Ch 11 — Dual Nature of Radiation",
        text: "The de Broglie wavelength of an electron accelerated through 100 V is approximately: (use λ = 12.27/√V Å)",
        options: ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
        answer: "A",
        explanation: "λ = 12.27/√100 = 12.27/10 = 1.227 Å ≈ 1.23 Å. This is the basis of electron microscopy."
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     TEST 4 — Full Syllabus, Set D  (CBSE 2020 style)
  ═══════════════════════════════════════════════ */
  {
    id: 4,
    name: "Full Syllabus — Set D",
    subtitle: "CBSE 2020 Board Style",
    icon: "④",
    duration: 1800,
    questions: [
      {
        id: 1, chapter: "Ch 1 — Electric Charges & Fields",
        text: "The electric potential at a point equidistant from the two charges of an electric dipole (at the equatorial point midway) is:",
        options: ["2kq/d", "Zero", "kq/d", "−kq/d"],
        answer: "B",
        explanation: "At the equatorial midpoint, distance from +q = distance from −q. So V = kq/r + k(−q)/r = 0."
      },
      {
        id: 2, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "A parallel plate capacitor of capacitance C is charged to potential V. The energy stored in it is:",
        options: ["CV", "½CV²", "CV²", "2CV²"],
        answer: "B",
        explanation: "U = ½CV² = ½QV = Q²/2C. All three expressions are equivalent. The ½ factor arises because energy is stored progressively as V builds up."
      },
      {
        id: 3, chapter: "Ch 3 — Current Electricity",
        text: "Ohm's law (V = IR with R constant) is NOT obeyed by:",
        options: ["Copper wire", "Semiconductor diode", "Nichrome wire", "Silver wire"],
        answer: "B",
        explanation: "A semiconductor diode has a non-linear V–I characteristic — current does not vary linearly with voltage. Metals like Cu, Ag, Nichrome obey Ohm's law at constant temperature."
      },
      {
        id: 4, chapter: "Ch 4 — Moving Charges & Magnetism",
        text: "The magnetic field inside an ideal solenoid of n turns per unit length carrying current I is:",
        options: ["μ₀nIA", "μ₀nI", "μ₀n²I", "μ₀nI/A"],
        answer: "B",
        explanation: "By Ampere's law applied to a solenoid: B = μ₀nI (n = turns per unit length). The field is uniform inside and zero outside."
      },
      {
        id: 5, chapter: "Ch 5 — Magnetism & Matter",
        text: "The phenomenon of hysteresis (lag between B and H) is observed in:",
        options: ["Diamagnetic materials", "Paramagnetic materials", "Ferromagnetic materials", "All magnetic materials"],
        answer: "C",
        explanation: "Hysteresis — the non-retracing of the B–H curve — is a property of ferromagnetic materials (like Fe, Ni, Co) due to domain wall motion and irreversibility."
      },
      {
        id: 6, chapter: "Ch 6 — Electromagnetic Induction",
        text: "Lenz's law is a direct consequence of the law of conservation of:",
        options: ["Charge", "Momentum", "Energy", "Mass"],
        answer: "C",
        explanation: "Lenz's law states that the induced current opposes the change causing it. If it aided the change, kinetic energy would be gained for free, violating energy conservation."
      },
      {
        id: 7, chapter: "Ch 7 — Alternating Current",
        text: "A step-up transformer increases the:",
        options: ["Current", "Voltage", "Power", "Frequency"],
        answer: "B",
        explanation: "V<sub>S</sub>/V<sub>P</sub> = N<sub>S</sub>/N<sub>P</sub> > 1 for a step-up transformer. Voltage increases; current decreases; power and frequency remain constant (ideal transformer)."
      },
      {
        id: 8, chapter: "Ch 8 — Electromagnetic Waves",
        text: "The ozone layer in the upper atmosphere is important because it absorbs:",
        options: ["Infrared rays", "Ultraviolet rays from the Sun", "Gamma rays", "X-rays"],
        answer: "B",
        explanation: "The ozone (O₃) layer in the stratosphere absorbs harmful ultraviolet radiation (UV-B and UV-C) from the Sun, protecting life on Earth."
      },
      {
        id: 9, chapter: "Ch 9 — Ray Optics",
        text: "Total internal reflection occurs when light travels from a denser to a rarer medium AND the angle of incidence is:",
        options: ["Less than the critical angle", "Equal to the critical angle", "Greater than the critical angle", "Any angle"],
        answer: "C",
        explanation: "TIR requires two conditions: (1) light goes from denser to rarer medium, and (2) angle of incidence exceeds the critical angle i<sub>c</sub> = sin⁻¹(n₂/n₁)."
      },
      {
        id: 10, chapter: "Ch 10 — Wave Optics",
        text: "The phenomenon of polarisation of light proves that light is:",
        options: ["A longitudinal wave", "A transverse wave", "A mechanical wave", "A scalar wave"],
        answer: "B",
        explanation: "Polarisation — restriction of vibrations to one plane — is possible only for transverse waves. Since light can be polarised, it is a transverse (electromagnetic) wave."
      },
      {
        id: 11, chapter: "Ch 11 — Dual Nature of Radiation",
        text: "The maximum kinetic energy of photoelectrons emitted from a metal surface depends on:",
        options: ["Intensity of incident light", "Frequency of incident light", "Both intensity and frequency", "The area of metal surface"],
        answer: "B",
        explanation: "KE<sub>max</sub> = hν − φ₀. It depends only on frequency ν, not on intensity. Intensity affects the number (current) of photoelectrons, not their individual energy."
      },
      {
        id: 12, chapter: "Ch 12 — Atoms",
        text: "Which series of spectral lines of hydrogen lies in the visible region of the electromagnetic spectrum?",
        options: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"],
        answer: "B",
        explanation: "Balmer series (transitions to n = 2 from n = 3, 4, 5, …) lies in the visible region (wavelengths ~410–656 nm). Lyman is UV, Paschen and Brackett are infrared."
      },
      {
        id: 13, chapter: "Ch 13 — Nuclei",
        text: "Nuclear forces between nucleons are:",
        options: ["Electrostatic and long range", "Gravitational and long range", "Short range and very strong", "Long range and repulsive"],
        answer: "C",
        explanation: "Nuclear (strong) forces are the strongest forces in nature, acting over a very short range (~1–3 fm). They are charge-independent and responsible for binding nucleons."
      },
      {
        id: 14, chapter: "Ch 14 — Semiconductor Electronics",
        text: "The device that directly converts light energy into electrical energy is:",
        options: ["LED", "Photodiode", "Solar cell", "Zener diode"],
        answer: "C",
        explanation: "A solar cell (photovoltaic cell) generates EMF from light — it converts solar energy into electrical energy. A photodiode detects light but requires a bias voltage."
      },
      {
        id: 15, chapter: "Ch 1 — Electric Charges & Fields",
        text: "An electric dipole of moment p = 2 × 10⁻⁹ C·m is placed in a uniform electric field E = 10⁵ N/C. The maximum torque on the dipole is:",
        options: ["2 × 10⁻⁴ N·m", "4 × 10⁻⁴ N·m", "2 × 10⁻⁵ N·m", "2 × 10⁻³ N·m"],
        answer: "A",
        explanation: "τ = pE sin θ. Maximum torque when θ = 90°: τ<sub>max</sub> = pE = 2 × 10⁻⁹ × 10⁵ = 2 × 10⁻⁴ N·m."
      },
      {
        id: 16, chapter: "Ch 9 — Ray Optics",
        text: "A convex lens (f = 10 cm) and a concave lens (f = 20 cm) are placed in contact coaxially. The focal length of the combination is:",
        options: ["20 cm", "−20 cm", "30 cm", "6.7 cm"],
        answer: "A",
        explanation: "1/f = 1/f₁ + 1/f₂ = 1/10 + 1/(−20) = 2/20 − 1/20 = 1/20. So f = 20 cm (converging)."
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     TEST 5 — Most Important Questions (CBSE 2019 + Mixed)
  ═══════════════════════════════════════════════ */
  {
    id: 5,
    name: "Most Important Questions",
    subtitle: "CBSE 2019 + High-Frequency Topics",
    icon: "★",
    duration: 1800,
    questions: [
      {
        id: 1, chapter: "Ch 1 — Electric Charges & Fields",
        text: "The electric field at a distance r from an infinite line charge of linear charge density λ is:",
        options: ["λ/2πε₀r", "λ/4πε₀r²", "λ/2ε₀r", "λ/4ε₀r"],
        answer: "A",
        explanation: "Using Gauss's law with a cylindrical surface: E × 2πrl = λl/ε₀ → E = λ/2πε₀r. Note: it falls as 1/r (not 1/r² as for a point charge)."
      },
      {
        id: 2, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "The work done in moving a test charge along an equipotential surface is:",
        options: ["Maximum", "Zero", "Negative", "Depends on the path"],
        answer: "B",
        explanation: "On an equipotential surface, the potential V is constant everywhere. Work done W = q₀(V<sub>A</sub> − V<sub>B</sub>) = q₀ × 0 = 0."
      },
      {
        id: 3, chapter: "Ch 3 — Current Electricity",
        text: "In the Wheatstone bridge circuit, at balance condition the relationship between P, Q, R and S is:",
        options: ["P/Q = R/S", "P/R = Q/S", "P + Q = R + S", "P − Q = R − S"],
        answer: "A",
        explanation: "At balance, no current flows through the galvanometer. Applying Kirchhoff's laws: P/Q = R/S (or equivalently, PS = QR)."
      },
      {
        id: 4, chapter: "Ch 4 — Moving Charges & Magnetism",
        text: "The gyromagnetic ratio is defined as the ratio of:",
        options: ["Magnetic moment to angular momentum", "Angular momentum to magnetic moment", "Magnetic moment to mass", "Angular momentum to charge"],
        answer: "A",
        explanation: "Gyromagnetic ratio = μ<sub>l</sub>/L = e/2m. For an electron in a Bohr orbit: μ<sub>l</sub> = evr/2 and L = mvr, so the ratio is e/2m."
      },
      {
        id: 5, chapter: "Ch 5 — Magnetism & Matter",
        text: "A paramagnetic material placed in a non-uniform magnetic field will:",
        options: ["Move from the strong field region to the weak field region", "Move from the weak field region to the strong field region", "Remain stationary", "Rotate about the field axis"],
        answer: "B",
        explanation: "Paramagnetic materials are weakly attracted to magnetic fields. In a non-uniform field they experience a net force towards the stronger field region."
      },
      {
        id: 6, chapter: "Ch 6 — Electromagnetic Induction",
        text: "The coefficient of mutual inductance between two coils depends on:",
        options: ["The current flowing in the coils", "Their geometry, size and relative orientation only", "The resistance of the coils", "The temperature of the coils"],
        answer: "B",
        explanation: "Mutual inductance M = μ₀N₁N₂A/l (for coaxial solenoids). It depends purely on geometry and relative orientation — not on current, resistance or temperature."
      },
      {
        id: 7, chapter: "Ch 7 — Alternating Current",
        text: "The average value of an AC voltage E = E₀ sin ωt over one complete cycle is:",
        options: ["E₀", "E₀/√2", "2E₀/π", "Zero"],
        answer: "D",
        explanation: "The positive half-cycle and negative half-cycle are equal and opposite. Their average cancels to zero over a complete cycle. (E<sub>avg</sub> over half cycle = 2E₀/π.)"
      },
      {
        id: 8, chapter: "Ch 8 — Electromagnetic Waves",
        text: "According to Maxwell, a changing electric field produces:",
        options: ["A static magnetic field", "A time-varying magnetic field", "No electromagnetic effect", "Only displacement current"],
        answer: "B",
        explanation: "Maxwell's displacement current concept: ∂E/∂t → ∂B/∂t. A changing electric field acts as a source of a changing (time-varying) magnetic field — the cornerstone of EM wave propagation."
      },
      {
        id: 9, chapter: "Ch 9 — Ray Optics",
        text: "The refractive index of glass with respect to water is 9/8. If n<sub>glass</sub> = 3/2 (w.r.t. air), the refractive index of water with respect to air is:",
        options: ["4/3", "3/4", "8/9", "9/6"],
        answer: "A",
        explanation: "<sub>w</sub>n<sub>g</sub> = <sub>a</sub>n<sub>g</sub> / <sub>a</sub>n<sub>w</sub>. So n<sub>w</sub> = n<sub>g</sub> / (n<sub>g</sub>/n<sub>w</sub>) = (3/2) / (9/8) = (3/2) × (8/9) = 4/3."
      },
      {
        id: 10, chapter: "Ch 10 — Wave Optics",
        text: "The resolving power of an optical microscope depends on:",
        options: ["Wavelength of light used and the numerical aperture of the objective", "Only the wavelength of light", "Only the aperture of the objective lens", "The distance of the object"],
        answer: "A",
        explanation: "Resolving power = 2μ sin θ/λ (Abbe criterion). Both wavelength λ and numerical aperture (μ sin θ) determine how closely spaced two objects can be resolved."
      },
      {
        id: 11, chapter: "Ch 11 — Dual Nature of Radiation",
        text: "In Compton scattering, the frequency of the scattered X-ray photon compared to the incident photon is:",
        options: ["Greater", "Equal", "Less", "Zero"],
        answer: "C",
        explanation: "In Compton effect, the photon transfers some energy to the electron. The scattered photon has lower energy → lower frequency (longer wavelength). Δλ = (h/m<sub>e</sub>c)(1 − cos θ) > 0."
      },
      {
        id: 12, chapter: "Ch 12 — Atoms",
        text: "An electron in a hydrogen atom jumps from the 4th to the 2nd energy level. The energy of the photon emitted is: (Ground state energy = −13.6 eV)",
        options: ["2.55 eV", "1.51 eV", "3.40 eV", "4.25 eV"],
        answer: "A",
        explanation: "E₄ = −13.6/16 = −0.85 eV; E₂ = −13.6/4 = −3.4 eV. ΔE = E₄ − E₂ = −0.85 − (−3.4) = 2.55 eV. (This is the Hβ line of the Balmer series.)"
      },
      {
        id: 13, chapter: "Ch 13 — Nuclei",
        text: "In the nuclear reaction ₉₂U²³⁸ → ₉₀Th²³⁴ + X, the particle X emitted is:",
        options: ["β-particle (electron)", "γ-ray photon", "α-particle (⁴He nucleus)", "Proton"],
        answer: "C",
        explanation: "A decreases by 4 (238 → 234) and Z decreases by 2 (92 → 90). This corresponds to emission of an α-particle (₂He⁴). This is α-decay of uranium."
      },
      {
        id: 14, chapter: "Ch 14 — Semiconductor Electronics",
        text: "For a transistor to work in the saturation region:",
        options: ["Both emitter-base and collector-base junctions are forward biased", "Both junctions are reverse biased", "Emitter-base junction is forward biased and collector-base is reverse biased", "Emitter-base is reverse biased and collector-base is forward biased"],
        answer: "A",
        explanation: "Saturation: both junctions forward biased → transistor fully ON (used as a switch in the closed position). Active region: E-B forward, C-B reverse (used for amplification)."
      },
      {
        id: 15, chapter: "Ch 2 — Electrostatic Potential & Capacitance",
        text: "A parallel plate capacitor has plate area 0.02 m², plate separation 2 mm, and is filled with a dielectric of K = 3. Its capacitance is: (ε₀ = 8.85 × 10⁻¹² F/m)",
        options: ["265.5 pF", "88.5 pF", "530 pF", "177 pF"],
        answer: "A",
        explanation: "C = Kε₀A/d = 3 × 8.85 × 10⁻¹² × 0.02 / (2 × 10⁻³) = 3 × 88.5 × 10⁻¹² = 265.5 pF."
      },
      {
        id: 16, chapter: "Ch 13 — Nuclei",
        text: "A radioactive nuclide has a half-life of 3 hours. After 9 hours, the fraction of the original quantity remaining is:",
        options: ["1/8", "1/4", "1/16", "1/6"],
        answer: "A",
        explanation: "Number of half-lives = 9/3 = 3. Fraction remaining = (1/2)³ = 1/8."
      }
    ]
  }

];
