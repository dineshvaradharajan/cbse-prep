// Chapter 2: Electrostatic Potential and Capacitance — Questions
const ch2Questions = [
  // === Conceptual (1-10): Potential, equipotential surfaces, E-V relation ===
  { id:1, section:"Conceptual", text:"Electric potential is a:", options:["Vector quantity","Scalar quantity","Tensor quantity","Dimensionless quantity"], answer:"B" },
  { id:2, section:"Conceptual", text:"The SI unit of electric potential is:", options:["Coulomb","Joule","Volt","Newton/Coulomb"], answer:"C" },
  { id:3, section:"Conceptual", text:"Equipotential surfaces due to a point charge are:", options:["Parallel planes","Concentric spheres","Concentric cylinders","Radial lines"], answer:"B" },
  { id:4, section:"Conceptual", text:"Work done in moving a charge along an equipotential surface is:", options:["Positive","Negative","Zero","Depends on path"], answer:"C" },
  { id:5, section:"Conceptual", text:"Two equipotential surfaces can:", options:["Intersect at one point","Intersect along a line","Never intersect","Overlap completely"], answer:"C" },
  { id:6, section:"Conceptual", text:"Electric field lines and equipotential surfaces are:", options:["Parallel","At 45°","Perpendicular","At 60°"], answer:"C" },
  { id:7, section:"Conceptual", text:"The relation between E and V is:", options:["E = dV/dr","E = −dV/dr","E = V/r²","E = −V/r²"], answer:"B" },
  { id:8, section:"Conceptual", text:"Closer spacing of equipotential surfaces indicates:", options:["Weaker field","Stronger field","Uniform field","Zero field"], answer:"B" },
  { id:9, section:"Conceptual", text:"A positive charge moves spontaneously from:", options:["Low V to high V","High V to low V","Along equipotential","Perpendicular to E"], answer:"B" },
  { id:10, section:"Conceptual", text:"At the surface of a charged conductor, equipotential surface is:", options:["Parallel to surface","Perpendicular to surface","Coincident with surface","At 45° to surface"], answer:"C" },

  // === Numerical (11-20): Potential calculations, work done ===
  { id:11, section:"Numerical", text:"Potential at 0.1 m from a 5 μC charge is (k = 9 × 10⁹):", options:["4.5 × 10⁵ V","9 × 10⁵ V","4.5 × 10⁴ V","9 × 10⁴ V"], answer:"A" },
  { id:12, section:"Numerical", text:"Work done in moving 3 μC from a point at 10 V to 40 V is:", options:["9 × 10⁻⁵ J","3 × 10⁻⁵ J","90 × 10⁻⁶ J","Both A and C"], answer:"D" },
  { id:13, section:"Numerical", text:"Two charges +4 μC and −2 μC are 0.3 m apart. Potential at the midpoint is:", options:["1.2 × 10⁵ V","0.6 × 10⁵ V","3.6 × 10⁵ V","Zero"], answer:"A" },
  { id:14, section:"Numerical", text:"Potential at the centre of a square with charges +q, +q, −q, −q at its corners is:", options:["kq/a","2kq/a","4kq/a","Zero"], answer:"D" },
  { id:15, section:"Numerical", text:"Equipotential surfaces at 30 V and 20 V are 0.2 m apart. The electric field is:", options:["25 V/m","50 V/m","100 V/m","200 V/m"], answer:"B" },
  { id:16, section:"Numerical", text:"Potential at a distance r from a charge Q is 600 V. At distance 3r, it is:", options:["200 V","1800 V","100 V","300 V"], answer:"A" },
  { id:17, section:"Numerical", text:"An electron moves through a potential difference of 100 V. KE gained is:", options:["100 eV","1.6 × 10⁻¹⁷ J","Both A and B","50 eV"], answer:"C" },
  { id:18, section:"Numerical", text:"PE of two charges +2 μC and +3 μC separated by 0.1 m:", options:["0.54 J","0.27 J","5.4 J","54 J"], answer:"A" },
  { id:19, section:"Numerical", text:"Three equal charges of 2 μC at corners of equilateral triangle (side 0.1 m). Total PE:", options:["1.08 J","0.54 J","1.62 J","0.36 J"], answer:"A" },
  { id:20, section:"Numerical", text:"Work done by electric force when +5 μC moves from 80 V to 20 V:", options:["3 × 10⁻⁴ J","−3 × 10⁻⁴ J","6 × 10⁻⁴ J","−6 × 10⁻⁴ J"], answer:"A" },

  // === Capacitors (21-30): Capacitance, combinations, dielectrics ===
  { id:21, section:"Capacitors", text:"SI unit of capacitance is:", options:["Volt","Coulomb","Farad","Henry"], answer:"C" },
  { id:22, section:"Capacitors", text:"Capacitance of a parallel plate capacitor depends on:", options:["Charge on plates","Voltage applied","Plate area and separation","All of these"], answer:"C" },
  { id:23, section:"Capacitors", text:"If plate area is doubled and separation is halved, capacitance becomes:", options:["Same","2 times","4 times","Half"], answer:"C" },
  { id:24, section:"Capacitors", text:"Three capacitors 2 μF, 3 μF, 6 μF in series. Equivalent capacitance:", options:["1 μF","11 μF","6 μF","0.5 μF"], answer:"A" },
  { id:25, section:"Capacitors", text:"Three capacitors 2 μF, 3 μF, 6 μF in parallel. Equivalent capacitance:", options:["1 μF","11 μF","6 μF","36 μF"], answer:"B" },
  { id:26, section:"Capacitors", text:"A dielectric of K = 5 is inserted (fully) in a 10 μF capacitor. New capacitance:", options:["2 μF","10 μF","50 μF","15 μF"], answer:"C" },
  { id:27, section:"Capacitors", text:"A dielectric is inserted with battery connected. Charge on capacitor:", options:["Decreases","Remains same","Increases","Becomes zero"], answer:"C" },
  { id:28, section:"Capacitors", text:"A dielectric is inserted with battery disconnected. Voltage across capacitor:", options:["Increases","Remains same","Decreases","Becomes zero"], answer:"C" },
  { id:29, section:"Capacitors", text:"Two identical capacitors in series have equivalent capacitance C/2. In parallel:", options:["C/2","C","2C","4C"], answer:"C" },
  { id:30, section:"Capacitors", text:"In series combination, the quantity that remains same across all capacitors is:", options:["Voltage","Charge","Capacitance","Energy"], answer:"B" },

  // === Mixed (31-40): All topics ===
  { id:31, section:"Mixed", text:"A metal slab of thickness t is inserted in a parallel plate capacitor (separation d). New capacitance:", options:["ε₀A/d","ε₀A/(d−t)","ε₀A/(d+t)","ε₀A/t"], answer:"B" },
  { id:32, section:"Mixed", text:"Energy stored in a 10 μF capacitor charged to 100 V:", options:["0.05 J","0.5 J","0.1 J","1 J"], answer:"A" },
  { id:33, section:"Mixed", text:"Energy density of electric field is:", options:["½ε₀E","½ε₀E²","ε₀E²","½E²/ε₀"], answer:"B" },
  { id:34, section:"Mixed", text:"In Van de Graaff generator, charge accumulates on:", options:["Inner surface of dome","Outer surface of dome","Belt","Pulleys"], answer:"B" },
  { id:35, section:"Mixed", text:"Potential due to a dipole on the equatorial line is:", options:["Maximum","kp/r²","Zero","kp/r³"], answer:"C" },
  { id:36, section:"Mixed", text:"Dipole potential varies as:", options:["1/r","1/r²","1/r³","1/r⁴"], answer:"B" },
  { id:37, section:"Mixed", text:"When two charged capacitors (C, 2V) and (C, V) are connected in parallel, common potential:", options:["V","3V/2","2V","V/2"], answer:"B" },
  { id:38, section:"Mixed", text:"Energy is lost when two capacitors share charge because:", options:["Charge is destroyed","Energy is converted to heat in wire","Voltage decreases","Capacitance changes"], answer:"B" },
  { id:39, section:"Mixed", text:"If E = 0 at a point, the potential there is:", options:["Zero","Maximum or minimum","Positive","Negative"], answer:"B" },
  { id:40, section:"Mixed", text:"Potential inside a charged hollow conducting sphere is:", options:["Zero","Same as on surface","More than surface","Less than surface"], answer:"B" },

  // === Final Numerical (41-50): Board-exam style hard numericals ===
  { id:41, section:"Final Numerical", text:"A 4 μF capacitor is charged to 200 V and then disconnected. It is connected to an uncharged 2 μF capacitor. Common potential:", options:["100 V","200/3 V","400/3 V","50 V"], answer:"C" },
  { id:42, section:"Final Numerical", text:"In Q41, energy lost during sharing:", options:["2.67 × 10⁻² J","5.33 × 10⁻² J","8 × 10⁻² J","1.33 × 10⁻² J"], answer:"A" },
  { id:43, section:"Final Numerical", text:"A parallel plate capacitor (C = 12 μF) is charged to 300 V. A dielectric K = 3 is inserted with battery disconnected. New voltage:", options:["100 V","300 V","900 V","150 V"], answer:"A" },
  { id:44, section:"Final Numerical", text:"In Q43, energy stored after dielectric insertion:", options:["0.054 J","0.18 J","0.018 J","0.54 J"], answer:"B" },
  { id:45, section:"Final Numerical", text:"Two capacitors 6 μF and 3 μF in series across 300 V. Voltage across 6 μF capacitor:", options:["100 V","200 V","150 V","300 V"], answer:"A" },
  { id:46, section:"Final Numerical", text:"In Q45, charge on each capacitor:", options:["6 × 10⁻⁴ C","3 × 10⁻⁴ C","9 × 10⁻⁴ C","1.8 × 10⁻³ C"], answer:"A" },
  { id:47, section:"Final Numerical", text:"A capacitor of 5 μF is charged to 100 V. Energy stored:", options:["2.5 × 10⁻² J","5 × 10⁻² J","25 J","0.5 J"], answer:"A" },
  { id:48, section:"Final Numerical", text:"Plates of a parallel plate capacitor (area 100 cm², separation 5 mm) with ε₀ = 8.85 × 10⁻¹² F/m. Capacitance:", options:["17.7 pF","1.77 pF","177 pF","0.177 pF"], answer:"A" },
  { id:49, section:"Final Numerical", text:"A 2 μF and 4 μF capacitor are charged to 100 V and 200 V respectively. Connected with like plates together. Common potential:", options:["500/3 V","100 V","200 V","300 V"], answer:"A" },
  { id:50, section:"Final Numerical", text:"In Q49, total charge before connection:", options:["10 × 10⁻⁴ C","6 × 10⁻⁴ C","8 × 10⁻⁴ C","1 × 10⁻³ C"], answer:"A" }
];
