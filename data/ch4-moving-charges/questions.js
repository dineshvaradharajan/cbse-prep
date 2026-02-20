// Moving Charges and Magnetism — Questions
const ch4Questions = [
  // ============================================================
  // Conceptual (1-10): Magnetic force, Lorentz force, field direction
  // ============================================================
  { id:1, section:"Conceptual", text:"A charged particle moving parallel to a magnetic field experiences:", options:["Maximum force","Minimum non-zero force","Zero force","Force perpendicular to B"], answer:"C" },
  { id:2, section:"Conceptual", text:"The magnetic force on a moving charged particle is always:", options:["Along its velocity","Opposite to its velocity","Perpendicular to its velocity","Along the magnetic field"], answer:"C" },
  { id:3, section:"Conceptual", text:"A charged particle enters a uniform magnetic field perpendicular to the field. Its kinetic energy:", options:["Increases","Decreases","Remains constant","First increases then decreases"], answer:"C" },
  { id:4, section:"Conceptual", text:"In a velocity selector, the condition for a charge to pass undeflected is:", options:["v = B/E","v = E/B","v = EB","v = qE/B"], answer:"B" },
  { id:5, section:"Conceptual", text:"The SI unit of magnetic field is:", options:["Gauss","Weber","Tesla","Henry"], answer:"C" },
  { id:6, section:"Conceptual", text:"The work done by a magnetic force on a moving charge is:", options:["Positive","Negative","Zero","Depends on angle"], answer:"C" },
  { id:7, section:"Conceptual", text:"A proton and an electron, both moving with the same velocity, enter a magnetic field perpendicular to their motion. Which has the larger radius of circular path?", options:["Proton","Electron","Both same","Cannot be determined"], answer:"A" },
  { id:8, section:"Conceptual", text:"The time period of a charged particle in a magnetic field is independent of:", options:["Mass of the particle","Charge of the particle","Magnetic field strength","Speed of the particle"], answer:"D" },
  { id:9, section:"Conceptual", text:"When a charged particle moves at an angle θ (0° < θ < 90°) to a uniform magnetic field, its path is:", options:["Circular","Straight line","Helical","Parabolic"], answer:"C" },
  { id:10, section:"Conceptual", text:"Fleming's Left-Hand Rule gives the direction of:", options:["Magnetic field due to a current","Force on a current-carrying conductor in B","Current induced in a conductor","Magnetic moment of a loop"], answer:"B" },

  // ============================================================
  // Numerical (11-20): Force calculations, radius, cyclotron
  // ============================================================
  { id:11, section:"Numerical", text:"A proton (q = 1.6 × 10⁻¹⁹ C) moves with velocity 3 × 10⁶ m/s perpendicular to a field B = 0.2 T. The magnetic force on it is:", options:["9.6 × 10⁻¹⁴ N","4.8 × 10⁻¹⁴ N","1.6 × 10⁻¹⁴ N","3.2 × 10⁻¹⁴ N"], answer:"A" },
  // F = qvB = 1.6e-19 × 3e6 × 0.2 = 9.6e-14 N
  { id:12, section:"Numerical", text:"An electron (m = 9.1 × 10⁻³¹ kg) moves at 2 × 10⁷ m/s perpendicular to B = 0.1 T. The radius of its circular path is approximately:", options:["1.14 × 10⁻³ m","2.28 × 10⁻³ m","0.57 × 10⁻³ m","5.7 × 10⁻⁴ m"], answer:"A" },
  // r = mv/qB = 9.1e-31 × 2e7 / (1.6e-19 × 0.1) = 1.14e-3 m
  { id:13, section:"Numerical", text:"A proton (m = 1.67 × 10⁻²⁷ kg) moves in a circle of radius 0.2 m in a field of 0.5 T. Its speed is approximately:", options:["9.6 × 10⁶ m/s","4.8 × 10⁶ m/s","1.92 × 10⁷ m/s","2.4 × 10⁶ m/s"], answer:"A" },
  // v = qBr/m = 1.6e-19 × 0.5 × 0.2 / 1.67e-27 = 1.6e-20/1.67e-27 = 9.58e6 ≈ 9.6e6 m/s
  { id:14, section:"Numerical", text:"The cyclotron frequency of a proton (m = 1.67 × 10⁻²⁷ kg) in a magnetic field of 1 T is approximately:", options:["1.53 × 10⁷ Hz","3.06 × 10⁷ Hz","7.6 × 10⁶ Hz","15.2 × 10⁷ Hz"], answer:"A" },
  // f = qB/2πm = 1.6e-19/(2π × 1.67e-27) = 1.525e7 ≈ 1.53e7 Hz
  { id:15, section:"Numerical", text:"A charge of 2 μC moves with velocity 10⁵ m/s at 30° to a magnetic field of 0.5 T. The force on it is:", options:["5 × 10⁻² N","2.5 × 10⁻² N","1 × 10⁻² N","0.5 × 10⁻² N"], answer:"A" },
  // F = qvBsinθ = 2e-6 × 1e5 × 0.5 × 0.5 = 5e-2 N
  { id:16, section:"Numerical", text:"An alpha particle (q = 3.2 × 10⁻¹⁹ C, m = 6.68 × 10⁻²⁷ kg) and a proton have the same kinetic energy. The ratio of their radii in a magnetic field (r_α / r<sub>p</sub>) is:", options:["1 : 1","2 : 1","1 : 2","√2 : 1"], answer:"A" },
  // r = √(2mKE)/qB → r_α/r<sub>p</sub> = [√(4m<sub>p</sub>)/(2q<sub>p</sub>)] / [√(m<sub>p</sub>)/q<sub>p</sub>] = 1
  { id:17, section:"Numerical", text:"A cyclotron has dee radius 0.5 m and B = 1 T. The maximum kinetic energy of a proton (m = 1.67 × 10⁻²⁷ kg) accelerated is:", options:["1.92 × 10⁻¹² J","3.84 × 10⁻¹² J","0.96 × 10⁻¹² J","7.68 × 10⁻¹² J"], answer:"A" },
  // KE = q²B²r₀²/2m = (2.56e-38)(0.25)/(3.34e-27) = 1.92e-12 J
  { id:18, section:"Numerical", text:"A particle with charge 2e and mass 4 u enters a magnetic field of 0.1 T perpendicular to it with velocity 10⁶ m/s. The radius of its path is (1 u = 1.67 × 10⁻²⁷ kg):", options:["0.209 m","0.418 m","0.105 m","0.836 m"], answer:"A" },
  // r = mv/qB = (6.68e-27)(1e6)/(3.2e-19 × 0.1) = 6.68e-21/3.2e-20 = 0.209 m
  { id:19, section:"Numerical", text:"An electron with KE = 100 eV enters a magnetic field of 10⁻⁴ T perpendicular to B. Its radius is approximately (m<sub>e</sub> = 9.1 × 10⁻³¹ kg):", options:["0.34 m","3.4 m","0.034 m","34 m"], answer:"A" },
  // v = √(2×100×1.6e-19/9.1e-31) = 5.93e6 m/s; r = mv/qB = 0.337 ≈ 0.34 m
  { id:20, section:"Numerical", text:"Two charges +q and −q (same mass) enter a magnetic field B perpendicular to it with the same speed v. Which statement is correct?", options:["Both move in circles of same radius but opposite directions","Both move in the same direction","The positive charge has a larger radius","Only the positive charge moves in a circle"], answer:"A" },

  // ============================================================
  // Biot-Savart & Ampere (21-30)
  // ============================================================
  { id:21, section:"Biot-Savart & Ampere", text:"According to Biot-Savart law, the magnetic field dB due to a current element is proportional to:", options:["1/r","1/r²","1/r³","r²"], answer:"B" },
  { id:22, section:"Biot-Savart & Ampere", text:"The magnetic field at the centre of a circular loop of radius 10 cm carrying a current of 5 A is (μ₀ = 4π × 10⁻⁷):", options:["π × 10⁻⁵ T","2π × 10⁻⁵ T","4π × 10⁻⁵ T","π × 10⁻⁶ T"], answer:"A" },
  // B = μ₀I/2R = 4π×10⁻⁷ × 5/(2×0.1) = π×10⁻⁵ T
  { id:23, section:"Biot-Savart & Ampere", text:"The magnetic field at a distance of 2 cm from an infinitely long wire carrying a current of 10 A is:", options:["10⁻⁴ T","10⁻⁵ T","10⁻³ T","2 × 10⁻⁴ T"], answer:"A" },
  // B = μ₀I/2πd = 4π×10⁻⁷×10/(2π×0.02) = 10⁻⁴ T
  { id:24, section:"Biot-Savart & Ampere", text:"A solenoid has 500 turns per metre and carries a current of 2 A. The magnetic field inside it is:", options:["4π × 10⁻⁴ T","2π × 10⁻⁴ T","8π × 10⁻⁴ T","π × 10⁻⁴ T"], answer:"A" },
  // B = μ₀nI = 4π×10⁻⁷ × 500 × 2 = 4π×10⁻⁴ T
  { id:25, section:"Biot-Savart & Ampere", text:"The magnetic field at the centre of a semicircular wire of radius R carrying current I is:", options:["μ₀I/4R","μ₀I/2R","μ₀I/R","μ₀I/πR"], answer:"A" },
  // Semicircle subtends π rad. B = μ₀Iπ/(4πR) = μ₀I/4R
  { id:26, section:"Biot-Savart & Ampere", text:"Two concentric circular loops of radii R and 2R carry currents I and 2I respectively in opposite directions. The magnetic field at the centre is:", options:["μ₀I/4R","Zero","μ₀I/2R","3μ₀I/4R"], answer:"B" },
  // B₁ = μ₀I/2R, B₂ = μ₀(2I)/(2×2R) = μ₀I/2R, opposite → net = 0
  { id:27, section:"Biot-Savart & Ampere", text:"A toroid with 1000 turns, mean radius 0.1 m, and current 2 A has a magnetic field inside it of:", options:["4 × 10⁻³ T","2 × 10⁻³ T","8 × 10⁻³ T","10⁻³ T"], answer:"A" },
  // B = μ₀NI/2πr = 4π×10⁻⁷×1000×2/(2π×0.1) = 4×10⁻³ T
  { id:28, section:"Biot-Savart & Ampere", text:"The magnetic field outside an ideal solenoid is:", options:["Same as inside","Half of inside","Zero","Depends on distance"], answer:"C" },
  { id:29, section:"Biot-Savart & Ampere", text:"The direction of magnetic field at the centre of a current-carrying circular loop is given by:", options:["Fleming's Left-Hand Rule","Right-Hand Thumb Rule","Lenz's Law","Ampere's Swimming Rule"], answer:"B" },
  { id:30, section:"Biot-Savart & Ampere", text:"A wire carries current I. The magnetic field at a point on the axis of the wire (along the wire extended) is:", options:["μ₀I/2πd","μ₀I/4πd","Zero","Infinite"], answer:"C" },
  // On the axis, sinθ = 0 for all elements → B = 0

  // ============================================================
  // Mixed (31-40): All topics
  // ============================================================
  { id:31, section:"Mixed", text:"Two parallel wires carry currents in the same direction. They:", options:["Attract each other","Repel each other","Do not interact","First attract then repel"], answer:"A" },
  { id:32, section:"Mixed", text:"1 Ampere is defined using the force between two parallel wires. The force per metre for 1 A currents at 1 m separation is:", options:["2 × 10⁻⁷ N/m","4π × 10⁻⁷ N/m","10⁻⁷ N/m","2π × 10⁻⁷ N/m"], answer:"A" },
  { id:33, section:"Mixed", text:"The magnetic dipole moment of a circular coil of 50 turns, radius 0.1 m, carrying 2 A current is:", options:["π A·m²","0.5π A·m²","0.1π A·m²","2π A·m²"], answer:"A" },
  // m = NIA = 50 × 2 × π(0.1)² = π A·m²
  { id:34, section:"Mixed", text:"A current loop is in stable equilibrium when the angle between its magnetic moment and the field is:", options:["0°","90°","180°","45°"], answer:"A" },
  { id:35, section:"Mixed", text:"The torque on a current loop is maximum when the angle between m and B is:", options:["0°","45°","90°","180°"], answer:"C" },
  { id:36, section:"Mixed", text:"A cyclotron cannot accelerate:", options:["Protons","Electrons","Alpha particles","Deuterons"], answer:"B" },
  { id:37, section:"Mixed", text:"The magnetic field at the end of a long solenoid is:", options:["μ₀nI","μ₀nI/2","Zero","2μ₀nI"], answer:"B" },
  { id:38, section:"Mixed", text:"The force per unit length between two parallel wires carrying 10 A each, separated by 0.1 m, is:", options:["2 × 10⁻⁴ N/m","4 × 10⁻⁴ N/m","10⁻⁴ N/m","10⁻⁵ N/m"], answer:"A" },
  // F/L = μ₀I₁I₂/2πd = 4π×10⁻⁷×100/(2π×0.1) = 2×10⁻⁴ N/m
  { id:39, section:"Mixed", text:"The ratio of magnetic field at the centre of a circular loop to that at an axial point at distance R from the centre is:", options:["2√2 : 1","4 : 1","2 : 1","√2 : 1"], answer:"A" },
  // B<sub>centre</sub>/B<sub>axis</sub> = (μ₀I/2R) / (μ₀I/4√2R) = 2√2
  { id:40, section:"Mixed", text:"A charged particle of mass m and charge q is accelerated through potential V and enters B perpendicular to it. Its radius is:", options:["(1/B)√(2mV/q)","(1/B)√(mV/2q)","(q/mB)√(2mV)","(m/qB)√(qV)"], answer:"A" },
  // r = mv/qB, v = √(2qV/m) → r = (1/B)√(2mV/q)

  // ============================================================
  // Final Numerical (41-50): Board-exam style
  // ============================================================
  { id:41, section:"Final Numerical", text:"An electron (m = 9.1 × 10⁻³¹ kg) moves in a circular orbit of radius 0.5 m in a magnetic field of 2 × 10⁻⁴ T. Its speed is approximately:", options:["1.76 × 10⁷ m/s","3.52 × 10⁷ m/s","0.88 × 10⁷ m/s","5.28 × 10⁷ m/s"], answer:"A" },
  // v = qBr/m = 1.6e-19 × 2e-4 × 0.5 / 9.1e-31 = 1.76e7 m/s
  { id:42, section:"Final Numerical", text:"A wire of length 0.5 m carrying 10 A is placed perpendicular to a magnetic field of 0.4 T. The force on the wire is:", options:["2 N","1 N","4 N","0.5 N"], answer:"A" },
  // F = BIL = 0.4 × 10 × 0.5 = 2 N
  { id:43, section:"Final Numerical", text:"A rectangular coil of 100 turns, each of area 0.02 m², carrying 1 A is placed in a field of 0.5 T. The maximum torque is:", options:["1 N·m","0.5 N·m","2 N·m","0.1 N·m"], answer:"A" },
  // τ = NIAB = 100 × 1 × 0.02 × 0.5 = 1 N·m
  { id:44, section:"Final Numerical", text:"A circular coil of 20 turns and radius 10 cm carries a current of 5 A. The magnetic field at its centre is:", options:["2π × 10⁻⁴ T","π × 10⁻⁴ T","4π × 10⁻⁴ T","0.5π × 10⁻⁴ T"], answer:"A" },
  // B = μ₀NI/2R = 4π×10⁻⁷ × 20 × 5/(2 × 0.1) = 2π×10⁻⁴ T
  { id:45, section:"Final Numerical", text:"A solenoid of length 0.5 m has 1000 turns and carries 3 A. The magnetic field inside is:", options:["2.4π × 10⁻³ T","1.2π × 10⁻³ T","4.8π × 10⁻³ T","6π × 10⁻³ T"], answer:"A" },
  // n = 2000, B = μ₀nI = 4π×10⁻⁷ × 2000 × 3 = 2.4π×10⁻³ T
  { id:46, section:"Final Numerical", text:"Two parallel wires separated by 5 cm carry currents of 10 A and 20 A in opposite directions. The force per metre between them is:", options:["8 × 10⁻⁴ N/m, repulsive","8 × 10⁻⁴ N/m, attractive","4 × 10⁻⁴ N/m, repulsive","4 × 10⁻⁴ N/m, attractive"], answer:"A" },
  // F/L = μ₀I₁I₂/2πd = 4π×10⁻⁷×200/(2π×0.05) = 8×10⁻⁴ N/m, repulsive
  { id:47, section:"Final Numerical", text:"A proton accelerated through 100 V enters B = 0.2 T perpendicular to it. The radius of its circular path is (m<sub>p</sub> = 1.67 × 10⁻²⁷ kg):", options:["0.72 × 10⁻² m","1.44 × 10⁻² m","0.36 × 10⁻² m","2.88 × 10⁻² m"], answer:"A" },
  // v = √(2qV/m) = √(2×1.6e-19×100/1.67e-27) = √(1.916e10) = 1.384e5 m/s
  // r = mv/qB = 1.67e-27×1.384e5/(1.6e-19×0.2) = 2.31e-22/3.2e-20 = 7.22e-3 ≈ 0.72e-2 m
  { id:48, section:"Final Numerical", text:"A quarter-circle arc of radius 0.1 m carries a current of 20 A. The magnetic field at the centre of the arc is:", options:["π × 10⁻⁵ T","2π × 10⁻⁵ T","0.5π × 10⁻⁵ T","4π × 10⁻⁵ T"], answer:"A" },
  // B = (1/4)(μ₀I/2R) = (1/4)(4π×10⁻⁷×20)/(2×0.1) = (1/4)(40π×10⁻⁶) = π×10⁻⁵ T
  { id:49, section:"Final Numerical", text:"A galvanometer coil of 50 turns, area 4 × 10⁻⁴ m², in a field of 0.2 T, has a torsional constant k = 10⁻⁶ N·m/rad. The current sensitivity (deflection per unit current) is:", options:["4 rad/mA","0.4 rad/mA","40 rad/mA","0.04 rad/mA"], answer:"A" },
  // φ/I = NAB/k = 50 × 4e-4 × 0.2 / 1e-6 = 4e-3/1e-6 = 4000 rad/A = 4 rad/mA
  { id:50, section:"Final Numerical", text:"A long straight wire carries 5 A. At what distance from the wire is the magnetic field 10⁻⁵ T?", options:["0.1 m","0.2 m","0.01 m","1 m"], answer:"A" }
  // d = μ₀I/2πB = 4π×10⁻⁷×5/(2π×10⁻⁵) = 0.1 m
];

if (typeof module !== 'undefined') module.exports = { ch4Questions };
