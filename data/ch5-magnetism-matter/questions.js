// Magnetism and Matter — Questions
const ch5Questions = [
  // Conceptual (1-10): Bar magnet, field lines, earth's magnetism
  { id:1, section:"Conceptual", text:"Magnetic field lines inside a bar magnet go from:", options:["North to South","South to North","Don't exist inside","Perpendicular to axis"], answer:"B" },
  { id:2, section:"Conceptual", text:"When a bar magnet is broken into two halves, each half is:", options:["A monopole","A complete magnet with N and S","Non-magnetic","Twice as strong"], answer:"B" },
  { id:3, section:"Conceptual", text:"Earth's magnetic south pole is located near the:", options:["Geographic south pole","Geographic north pole","Equator","Tropic of Cancer"], answer:"B" },
  { id:4, section:"Conceptual", text:"The angle between geographic meridian and magnetic meridian is called:", options:["Dip","Declination","Inclination","Latitude"], answer:"B" },
  { id:5, section:"Conceptual", text:"At the magnetic poles of Earth, the dip angle is:", options:["0°","45°","90°","180°"], answer:"C" },
  { id:6, section:"Conceptual", text:"Gauss's law for magnetism states that:", options:["∮B·dA = μ₀I","∮B·dA = 0","∮B·dA = q/ε₀","∮B·dA = μ₀M"], answer:"B" },
  { id:7, section:"Conceptual", text:"Magnetic field lines:", options:["Start from N-pole and end at S-pole","Form open curves","Form continuous closed loops","Can cross each other"], answer:"C" },
  { id:8, section:"Conceptual", text:"A compass needle at the magnetic equator will be:", options:["Vertical","Horizontal","At 45°","Non-functional"], answer:"B" },
  { id:9, section:"Conceptual", text:"The axial magnetic field of a short bar magnet at distance r varies as:", options:["1/r","1/r²","1/r³","1/r⁴"], answer:"C" },
  { id:10, section:"Conceptual", text:"The ratio B(axial)/B(equatorial) at the same distance from a short bar magnet is:", options:["1","2","1/2","4"], answer:"B" },

  // Numerical (11-20): Magnetic elements, field calculations
  { id:11, section:"Numerical", text:"If BH = 0.4 G and dip δ = 30°, the total magnetic field B is:", options:["0.46 G","0.8 G","0.4/√3 G ≈ 0.46 G","0.2 G"], answer:"A" },
  { id:12, section:"Numerical", text:"At a place where dip = 60° and BH = 0.3 G, the vertical component Bv is:", options:["0.3 G","0.3√3 G ≈ 0.52 G","0.15 G","0.6 G"], answer:"B" },
  { id:13, section:"Numerical", text:"A bar magnet has magnetic moment 5 A·m². The field at 20 cm on the axial line is (μ₀/4π = 10⁻⁷):", options:["1.25 × 10⁻⁴ T","2.5 × 10⁻⁴ T","6.25 × 10⁻⁵ T","5 × 10⁻⁵ T"], answer:"A" },
  { id:14, section:"Numerical", text:"A solenoid has 1000 turns, length 50 cm, current 2 A, area 10 cm². Its magnetic moment is:", options:["2 A·m²","0.2 A·m²","1 A·m²","0.5 A·m²"], answer:"A" },
  { id:15, section:"Numerical", text:"If dip at a place is 45°, then BH and Bv are related as:", options:["BH = Bv","BH = 2Bv","Bv = 2BH","BH = Bv/√2"], answer:"A" },
  { id:16, section:"Numerical", text:"The magnetic moment of a bar magnet with pole strength 50 A·m and length 20 cm is:", options:["10 A·m²","100 A·m²","5 A·m²","1 A·m²"], answer:"A" },
  { id:17, section:"Numerical", text:"If B = 0.5 G and dip = 60°, the horizontal component BH is:", options:["0.25 G","0.43 G","0.5 G","1.0 G"], answer:"A" },
  { id:18, section:"Numerical", text:"A magnet of moment m produces field B at distance r on axial line. At distance 2r, the field is:", options:["B/2","B/4","B/8","B/16"], answer:"C" },
  { id:19, section:"Numerical", text:"At a place, BH = 0.36 G and Bv = 0.48 G. The total field B is:", options:["0.6 G","0.84 G","0.12 G","0.42 G"], answer:"A" },
  { id:20, section:"Numerical", text:"For Q19 above, the dip angle δ is approximately:", options:["37°","53°","45°","60°"], answer:"B" },

  // Magnetic Materials (21-30): Dia/para/ferro, susceptibility, hysteresis
  { id:21, section:"Magnetic Materials", text:"A material with χ = −0.00004 is:", options:["Ferromagnetic","Paramagnetic","Diamagnetic","Antiferromagnetic"], answer:"C" },
  { id:22, section:"Magnetic Materials", text:"The susceptibility of a paramagnetic material at 300 K is 0.006. At 600 K it becomes:", options:["0.012","0.003","0.006","0.024"], answer:"B" },
  { id:23, section:"Magnetic Materials", text:"Which material has domains?", options:["Diamagnetic","Paramagnetic","Ferromagnetic","All of these"], answer:"C" },
  { id:24, section:"Magnetic Materials", text:"Retentivity of a material is the magnetization retained when:", options:["Temperature is zero","External field H is zero","Material is saturated","Material is heated above Tc"], answer:"B" },
  { id:25, section:"Magnetic Materials", text:"For a transformer core, the ideal material should have:", options:["High retentivity, high coercivity","Low retentivity, low coercivity","High retentivity, low coercivity","Low retentivity, high coercivity"], answer:"B" },
  { id:26, section:"Magnetic Materials", text:"Curie's law χ = C/T applies to:", options:["Diamagnetic materials","Paramagnetic materials","Ferromagnetic materials below Tc","Superconductors"], answer:"B" },
  { id:27, section:"Magnetic Materials", text:"If μᵣ = 0.998 for a substance, the substance is:", options:["Paramagnetic","Ferromagnetic","Diamagnetic","Non-magnetic"], answer:"C" },
  { id:28, section:"Magnetic Materials", text:"Above the Curie temperature, a ferromagnetic material becomes:", options:["Diamagnetic","Paramagnetic","Superconducting","Non-magnetic"], answer:"B" },
  { id:29, section:"Magnetic Materials", text:"Energy lost per cycle in a ferromagnetic material equals:", options:["Retentivity × coercivity","Area of hysteresis loop","Permeability × susceptibility","Zero"], answer:"B" },
  { id:30, section:"Magnetic Materials", text:"A superconductor is a perfect:", options:["Paramagnet","Ferromagnet","Diamagnet with χ = −1","Conductor with χ = 0"], answer:"C" },

  // Mixed (31-40): All topics
  { id:31, section:"Mixed", text:"The relation between B, H, and M is:", options:["B = μ₀H","B = μ₀(H + M)","B = μ₀(H − M)","B = μ₀M/H"], answer:"B" },
  { id:32, section:"Mixed", text:"The SI unit of magnetic moment is:", options:["A/m","A·m²","T·m","Weber"], answer:"B" },
  { id:33, section:"Mixed", text:"In a non-uniform magnetic field, a diamagnetic substance moves toward:", options:["Stronger field","Weaker field","Doesn't move","Either direction"], answer:"B" },
  { id:34, section:"Mixed", text:"The magnetic susceptibility χ has:", options:["Unit of A/m","Unit of Tesla","No unit (dimensionless)","Unit of Henry"], answer:"C" },
  { id:35, section:"Mixed", text:"If χ = 0.0005 for a material, its relative permeability μᵣ is:", options:["0.0005","1.0005","0.9995","5000"], answer:"B" },
  { id:36, section:"Mixed", text:"A bar magnet of moment m is cut into two equal halves along its length. Each half has moment:", options:["m","m/2","m/4","2m"], answer:"B" },
  { id:37, section:"Mixed", text:"The angle of dip at the magnetic equator is:", options:["90°","0°","45°","Depends on location"], answer:"B" },
  { id:38, section:"Mixed", text:"Which quantity is independent of the nature of the material?", options:["B","M","H","χ"], answer:"C" },
  { id:39, section:"Mixed", text:"Permanent magnets are made of materials with:", options:["High retentivity and high coercivity","Low retentivity and low coercivity","High retentivity and low coercivity","Low retentivity and high coercivity"], answer:"A" },
  { id:40, section:"Mixed", text:"The Curie temperature of iron is approximately:", options:["358°C","770°C","1121°C","100°C"], answer:"B" },

  // Final Numerical (41-50): Board-exam style
  { id:41, section:"Final Numerical", text:"A short bar magnet has moment 0.48 A·m². The magnetic field at 0.1 m on the equatorial line is (μ₀/4π = 10⁻⁷):", options:["4.8 × 10⁻⁵ T","4.8 × 10⁻⁴ T","2.4 × 10⁻⁵ T","9.6 × 10⁻⁵ T"], answer:"B" },
  { id:42, section:"Final Numerical", text:"A place has BH = 0.26 G and dip = 60°. The value of B is:", options:["0.26 G","0.52 G","0.13 G","0.78 G"], answer:"B" },
  { id:43, section:"Final Numerical", text:"A magnetizing field of 1500 A/m produces B = 0.48 T in an iron bar. The permeability μ is:", options:["3.2 × 10⁻⁴ T·m/A","0.48 T·m/A","720 T·m/A","4π × 10⁻⁷ T·m/A"], answer:"A" },
  { id:44, section:"Final Numerical", text:"For Q43, the relative permeability μᵣ is approximately:", options:["255","2550","25.5","25500"], answer:"A" },
  { id:45, section:"Final Numerical", text:"The susceptibility of magnesium at 300 K is 1.2 × 10⁻⁵. At 200 K it becomes:", options:["0.8 × 10⁻⁵","1.8 × 10⁻⁵","1.2 × 10⁻⁵","2.4 × 10⁻⁵"], answer:"B" },
  { id:46, section:"Final Numerical", text:"If BH = 0.34 G and Bv = 0.34 G at a place, the dip angle is:", options:["30°","45°","60°","90°"], answer:"B" },
  { id:47, section:"Final Numerical", text:"A magnet of moment 2 A·m² is placed in a field of 0.5 T. The maximum torque is:", options:["1 N·m","0.5 N·m","2 N·m","4 N·m"], answer:"A" },
  { id:48, section:"Final Numerical", text:"A solenoid with 800 turns, length 0.4 m, area 3 × 10⁻⁴ m², carrying 3 A has magnetic moment:", options:["1.8 A·m²","0.72 A·m²","0.18 A·m²","7.2 A·m²"], answer:"B" },
  { id:49, section:"Final Numerical", text:"If χ = 599 for a ferromagnetic material, the value of μᵣ is:", options:["599","600","598","1200"], answer:"B" },
  { id:50, section:"Final Numerical", text:"A magnetic needle has moment 6 × 10⁻² A·m² in a field of 6 × 10⁻⁴ T. The work done to rotate it from 0° to 60° is:", options:["1.8 × 10⁻⁵ J","3.6 × 10⁻⁵ J","0.9 × 10⁻⁵ J","7.2 × 10⁻⁵ J"], answer:"A" }
];
