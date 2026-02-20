// Chapter 6: Electromagnetic Induction — Questions
const ch6Questions = [
  // === CONCEPTUAL (1–10) ===
  { id:1, section:"Conceptual", text:"Electromagnetic induction was discovered by:", options:["Faraday","Ampere","Lenz","Maxwell"], answer:"A" },
  { id:2, section:"Conceptual", text:"The SI unit of magnetic flux is:", options:["Tesla","Weber","Henry","Volt"], answer:"B" },
  { id:3, section:"Conceptual", text:"According to Lenz's law, the induced current always:", options:["Opposes the change in flux that caused it","Flows in the same direction as the change in flux","Flows from higher to lower potential only","Is always clockwise"], answer:"A" },
  { id:4, section:"Conceptual", text:"Lenz's law is a consequence of the law of conservation of:", options:["Energy","Charge","Momentum","Mass"], answer:"A" },
  { id:5, section:"Conceptual", text:"The self-inductance of a solenoid depends on:", options:["The current through it","The voltage across it","The number of turns and geometry","The resistance of the wire"], answer:"C" },
  { id:6, section:"Conceptual", text:"Eddy currents can be minimized by:", options:["Using solid metal cores","Increasing the rate of flux change","Using thicker conductors","Using laminated cores"], answer:"D" },
  { id:7, section:"Conceptual", text:"An AC generator works on the principle of:", options:["Electromagnetic induction","Coulomb's law","Ampere's circuital law","Biot-Savart law"], answer:"A" },
  { id:8, section:"Conceptual", text:"In an AC generator, the output EMF is maximum when the coil plane is:", options:["Perpendicular to the magnetic field","At 45 degrees to the field","Parallel to the magnetic field","It does not depend on orientation"], answer:"C" },
  { id:9, section:"Conceptual", text:"The SI unit of self-inductance is:", options:["Volt","Henry","Weber","Farad"], answer:"B" },
  { id:10, section:"Conceptual", text:"Which of the following does NOT change the magnetic flux through a loop?", options:["Changing the magnetic field strength","Rotating the loop","Moving the loop parallel to a uniform field without leaving it","Changing the area of the loop"], answer:"C" },

  // === NUMERICAL (11–20) ===
  { id:11, section:"Numerical", text:"A magnetic flux of 5 x 10⁻⁴ Wb passes through a coil of 100 turns. If the flux drops to zero in 0.01 s, the induced EMF is:", options:["50 V","0.5 V","5 V","500 V"], answer:"C" },
  // EMF = N x dphi/dt = 100 x 5e-4/0.01 = 100 x 0.05 = 5 V
  { id:12, section:"Numerical", text:"A rod of length 0.5 m moves with velocity 4 m/s perpendicular to a magnetic field of 0.2 T. The motional EMF is:", options:["0.4 V","0.04 V","4 V","0.8 V"], answer:"A" },
  // EMF = Blv = 0.2 x 0.5 x 4 = 0.4 V
  { id:13, section:"Numerical", text:"A solenoid has 500 turns, length 0.5 m, and cross-sectional area 10 cm². Its self-inductance is approximately:", options:["6.28 x 10⁻⁴ H","3.14 x 10⁻⁴ H","6.28 x 10⁻³ H","3.14 x 10⁻³ H"], answer:"A" },
  // L = mu0 N² A/l = 4pi x 10⁻⁷ x 250000 x 10⁻³ / 0.5 = 4pi x 10⁻⁷ x 5 x 10⁵ x 10⁻³ = 4pi x 10⁻⁷ x 500 = 2pi x 10⁻⁴ = 6.28 x 10⁻⁴ H
  { id:14, section:"Numerical", text:"An inductor of 2 H carries a current of 3 A. The energy stored in the inductor is:", options:["18 J","3 J","6 J","9 J"], answer:"D" },
  // U = (1/2)LI² = (1/2)(2)(9) = 9 J
  { id:15, section:"Numerical", text:"A coil of 200 turns and area 0.1 m² is placed perpendicular to a magnetic field of 0.02 T. If the field is reduced to zero in 0.1 s, the average induced EMF is:", options:["0.4 V","40 V","0.04 V","4 V"], answer:"D" },
  // EMF = N dphi/dt = 200 x 0.02 x 0.1 / 0.1 = 200 x 0.002 = 0.4 V... wait
  // phi = BA = 0.02 x 0.1 = 0.002 Wb, dphi = 0.002, EMF = 200 x 0.002/0.1 = 200 x 0.02 = 4 V
  { id:16, section:"Numerical", text:"A metallic rod of length 1 m rotates about one end with angular velocity 10 rad/s in a magnetic field of 0.1 T perpendicular to the plane of rotation. The EMF between its ends is:", options:["1.0 V","0.05 V","0.5 V","5.0 V"], answer:"C" },
  // EMF = (1/2)B omega l² = (1/2)(0.1)(10)(1) = 0.5 V
  { id:17, section:"Numerical", text:"The mutual inductance of two coils is 0.5 H. If the current in one coil changes at the rate of 10 A/s, the EMF induced in the other coil is:", options:["0.5 V","5 V","50 V","0.05 V"], answer:"B" },
  // EMF = M(dI/dt) = 0.5 x 10 = 5 V
  { id:18, section:"Numerical", text:"A coil has self-inductance of 5 mH. If the current changes from 4 A to 2 A in 0.01 s, the magnitude of the induced EMF is:", options:["0.1 V","10 V","0.01 V","1 V"], answer:"D" },
  // EMF = L(dI/dt) = 5 x 10⁻³ x (2/0.01) = 5 x 10⁻³ x 200 = 1 V
  { id:19, section:"Numerical", text:"A coil of 200 turns and area 50 cm² is placed perpendicular to a field of 0.1 T. If the coil is removed from the field in 0.05 s, the average EMF induced is:", options:["0.2 V","20 V","2 V","0.02 V"], answer:"C" },
  // phi = NBA = 200 x 0.1 x 50e-4 = 200 x 0.1 x 0.005 = 0.1 Wb, EMF = 0.1/0.05 = 2 V
  { id:20, section:"Numerical", text:"A coil of self-inductance 10 mH carries a current of 1 A. The energy stored in the magnetic field is:", options:["10 x 10⁻³ J","10⁻³ J","0.5 J","5 x 10⁻³ J"], answer:"D" },
  // U = (1/2)LI² = (1/2)(10 x 10⁻³)(1) = 5 x 10⁻³ J

  // === FARADAY & LENZ (21–30) ===
  { id:21, section:"Faraday & Lenz", text:"According to Faraday's second law, the magnitude of induced EMF is equal to:", options:["The magnetic flux through the coil","The product B x A","The rate of change of magnetic flux","The current in the coil"], answer:"C" },
  { id:22, section:"Faraday & Lenz", text:"A north pole of a magnet is moved toward a coil. The face of the coil facing the magnet will behave as:", options:["North pole (repels)","South pole (attracts)","Neutral","Alternately N and S"], answer:"A" },
  { id:23, section:"Faraday & Lenz", text:"The flux through a coil changes from 6 Wb to 2 Wb in 0.2 s. The induced EMF is:", options:["20 V","40 V","10 V","4 V"], answer:"A" },
  // EMF = dphi/dt = (6-2)/0.2 = 4/0.2 = 20 V
  { id:24, section:"Faraday & Lenz", text:"When a magnet is dropped through a conducting ring (axis vertical), the acceleration of the magnet is:", options:["Equal to g","Greater than g","Less than g","Zero"], answer:"C" },
  { id:25, section:"Faraday & Lenz", text:"A rectangular loop is moved out of a uniform magnetic field region. The induced EMF:", options:["Remains zero throughout","Is maximum when fully inside","Is non-zero only when the loop is partly inside and partly outside","Is non-zero only when fully outside"], answer:"C" },
  { id:26, section:"Faraday & Lenz", text:"A coil of 100 turns is placed in a changing magnetic field. If the flux per turn changes by 0.01 Wb in 0.1 s, the EMF is:", options:["1 V","100 V","0.1 V","10 V"], answer:"D" },
  // EMF = N dphi/dt = 100 x 0.01/0.1 = 100 x 0.1 = 10 V
  { id:27, section:"Faraday & Lenz", text:"The negative sign in Faraday's law (EMF = -dphi/dt) indicates:", options:["EMF is always negative","The flux is decreasing","The current is decreasing","The direction of induced EMF opposes the change in flux"], answer:"D" },
  { id:28, section:"Faraday & Lenz", text:"A circular coil of 500 turns and area 0.04 m² is rotated from a position where it is perpendicular to a field of 0.3 T to one where it is parallel to the field in 0.1 s. The average EMF induced is:", options:["30 V","6 V","600 V","60 V"], answer:"D" },
  // φ<sub>initial</sub> = NBA = 500 x 0.3 x 0.04 = 6 Wb, φ<sub>final</sub> = 0 (parallel to field). EMF = 6/0.1 = 60 V
  { id:29, section:"Faraday & Lenz", text:"A bar magnet falls through a hollow metallic cylinder. Compared to free fall, the magnet falls:", options:["Faster","Slower","At the same speed","It stops completely"], answer:"B" },
  { id:30, section:"Faraday & Lenz", text:"The charge that flows through a coil of resistance 5 ohm when the flux linkage changes by 10 Wb is:", options:["50 C","2 C","0.5 C","10 C"], answer:"B" },
  // Q = δ<sub>φ</sub> / R = 10/5 = 2 C

  // === MIXED (31–40) ===
  { id:31, section:"Mixed", text:"In an AC generator, slip rings are used to:", options:["Rectify the output","Increase the EMF","Change AC to DC","Provide continuous electrical contact with the rotating coil"], answer:"D" },
  { id:32, section:"Mixed", text:"The peak EMF of an AC generator with 100 turns, area 0.1 m², field 0.5 T, and angular velocity 100 rad/s is:", options:["5000 V","50 V","500 V","5 V"], answer:"C" },
  // E<sub>0</sub> = NBAomega = 100 x 0.5 x 0.1 x 100 = 500 V
  { id:33, section:"Mixed", text:"Two coils have mutual inductance 0.2 H. If current in the first coil changes from 5 A to 1 A in 0.2 s, the EMF induced in the second coil is:", options:["4 V","1 V","2 V","8 V"], answer:"A" },
  // EMF = M dI/dt = 0.2 x (4/0.2) = 0.2 x 20 = 4 V
  { id:34, section:"Mixed", text:"Which of the following is NOT an application of eddy currents?", options:["Electromagnetic braking","Induction furnace","Transformer core heating","Electric motor operation"], answer:"D" },
  { id:35, section:"Mixed", text:"When the number of turns in a solenoid is doubled (keeping length and area same), the self-inductance becomes:", options:["Double","Half","Four times","Same"], answer:"C" },
  // L proportional to N², so doubling N gives 4L
  { id:36, section:"Mixed", text:"The energy stored in an inductor of 0.5 H carrying 4 A of current is:", options:["4 J","2 J","8 J","1 J"], answer:"A" },
  // U = (1/2)LI² = (1/2)(0.5)(16) = 4 J
  { id:37, section:"Mixed", text:"A wheel with 10 metallic spokes, each 0.5 m long, rotates in a field of 0.4 T at 120 rev/min. The EMF between axle and rim is:", options:["0.628 V","6.28 V","0.314 V","3.14 V"], answer:"A" },
  // omega = 120 x 2pi/60 = 4pi rad/s. EMF per spoke = (1/2)B omega l² = (1/2)(0.4)(4pi)(0.25) = 0.2pi = 0.628 V
  // All spokes are in parallel — same EMF across each. Total EMF = EMF of one spoke = 0.628 V
  { id:38, section:"Mixed", text:"The dimensional formula of self-inductance is:", options:["[ML²T⁻²A⁻¹]","[ML²T⁻¹A⁻²]","[MLT⁻²A⁻²]","[ML²T⁻²A⁻²]"], answer:"D" },
  // L = V.s/A = (ML²T⁻³A⁻¹)(T)(A⁻¹) = ML²T⁻²A⁻²
  { id:39, section:"Mixed", text:"A 50-turn coil has a flux of 0.02 Wb per turn. When the current is switched off in 10 ms, the induced EMF is:", options:["10 V","100 V","1000 V","1 V"], answer:"B" },
  // EMF = N dphi/dt = 50 x 0.02/0.01 = 50 x 2 = 100 V
  { id:40, section:"Mixed", text:"In an LC circuit, the frequency of oscillation depends on:", options:["Resistance only","Only L","L and C both","Only C"], answer:"C" },

  // === FINAL NUMERICAL (41–50) ===
  { id:41, section:"Final Numerical", text:"A rectangular loop of area 0.06 m² is placed in a magnetic field of 0.04 T with its plane perpendicular to the field. If the loop is rotated by 180 degrees in 0.2 s, the average induced EMF is:", options:["0.024 V","0.24 V","0.012 V","2.4 V"], answer:"A" },
  // φ<sub>i</sub> = BA = 0.04 x 0.06 = 0.0024 Wb, φ<sub>f</sub> = -0.0024 Wb, change = 0.0048 Wb
  // EMF = 0.0048/0.2 = 0.024 V
  { id:42, section:"Final Numerical", text:"Two coaxial solenoids have 300 and 400 turns respectively, length 30 cm, and inner solenoid area 10 cm². Their mutual inductance is approximately:", options:["1.58 x 10⁻⁴ H","5.03 x 10⁻⁴ H","5.03 x 10⁻³ H","1.58 x 10⁻³ H"], answer:"B" },
  // M = mu0 N1 N2 A/l = 4pi x 10⁻⁷ x 300 x 400 x 10⁻³ / 0.3
  // = 4pi x 10⁻⁷ x 120000 x 10⁻³ / 0.3 = 4pi x 10⁻⁷ x 400 = 1600pi x 10⁻⁷ = 5026 x 10⁻⁷ = 5.03 x 10⁻⁴ H
  { id:43, section:"Final Numerical", text:"A conducting rod of length 2 m slides at 5 m/s on two parallel rails in a field of 0.3 T. The current through a 6 ohm resistor connected across the rails is:", options:["0.3 A","0.5 A","1.0 A","1.5 A"], answer:"B" },
  // EMF = Blv = 0.3 x 2 x 5 = 3 V, I = 3/6 = 0.5 A
  { id:44, section:"Final Numerical", text:"A coil of 1000 turns and area 500 cm² is rotated from perpendicular to parallel position in a field of 0.4 T in 0.01 s. The average EMF is:", options:["200 V","20 V","20000 V","2000 V"], answer:"D" },
  // φ<sub>i</sub> = NBA = 1000 x 0.4 x 500 x 10⁻⁴ = 1000 x 0.4 x 0.05 = 20 Wb
  // φ<sub>f</sub> = 0 (parallel). EMF = 20/0.01 = 2000 V
  { id:45, section:"Final Numerical", text:"A rod of length 1.5 m rotates about one end with 600 rpm in a perpendicular field of 5 x 10⁻⁵ T. The EMF between its ends is:", options:["1.77 x 10⁻³ V","3.53 x 10⁻³ V","7.07 x 10⁻³ V","1.41 x 10⁻³ V"], answer:"B" },
  // omega = 600 x 2pi/60 = 20pi rad/s
  // EMF = (1/2)B omega l² = (1/2)(5 x 10⁻⁵)(20pi)(2.25) = (1/2)(5e-5)(141.37) = (1/2)(7.07e-3) = 3.53 x 10⁻³ V
  { id:46, section:"Final Numerical", text:"The current in an inductor of 4 H changes from 0 to 5 A in 0.5 s. The average EMF induced across the inductor is:", options:["20 V","40 V","10 V","4 V"], answer:"B" },
  // EMF = L dI/dt = 4 x 5/0.5 = 4 x 10 = 40 V
  { id:47, section:"Final Numerical", text:"An AC generator produces a peak EMF of 300 V. The instantaneous EMF when the coil has rotated 30 degrees from the position of zero EMF is:", options:["259.8 V","150 V","300 V","173.2 V"], answer:"B" },
  // EMF = E0 sin(omega t). At omega t = 30 deg from zero-EMF position: EMF = 300 x sin(30) = 300 x 0.5 = 150 V
  { id:48, section:"Final Numerical", text:"Two inductors of 3 H and 6 H are connected in parallel (no mutual coupling). The equivalent inductance is:", options:["9 H","1.5 H","4.5 H","2 H"], answer:"D" },
  // 1/L = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2, L = 2 H
  { id:49, section:"Final Numerical", text:"A solenoid of 1000 turns, length 1 m, and area 10⁻³ m² carries 10 A. The energy stored is approximately:", options:["3.14 x 10⁻² J","6.28 x 10⁻³ J","6.28 x 10⁻² J","3.14 x 10⁻³ J"], answer:"C" },
  // L = mu0 N² A/l = 4pi x 10⁻⁷ x 10⁶ x 10⁻³ / 1 = 4pi x 10⁻⁴ = 1.2566 x 10⁻³ H
  // U = (1/2)LI² = (1/2)(1.2566e-3)(100) = 6.283 x 10⁻² J
  { id:50, section:"Final Numerical", text:"A circular loop of radius 10 cm is placed in a magnetic field that changes uniformly from 0.5 T to 0 T in 0.05 s. The induced EMF in the loop is:", options:["0.628 V","0.314 V","3.14 V","0.157 V"], answer:"B" }
  // A = pi r² = pi x 0.01 = 0.0314 m²
  // dphi = BA = 0.5 x 0.0314 = 0.01571 Wb
  // EMF = 0.01571/0.05 = 0.3142 V = 0.314 V
];
