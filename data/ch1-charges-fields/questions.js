// Chapter 1: Electric Charges and Fields — Questions (excluding Dipole)
const ch1Questions = [
  // === CONCEPTUAL (1–10) ===
  { id:1, section:"Conceptual", text:"Which of the following is NOT a property of electric charge?", options:["Charge is quantized","Charge is conserved","Charge is always positive","Charge is additive"], answer:"C" },
  { id:2, section:"Conceptual", text:"The minimum possible charge on a body is:", options:["1 C","1 μC","1.6 × 10⁻¹⁹ C","Zero"], answer:"C" },
  { id:3, section:"Conceptual", text:"When a glass rod is rubbed with silk, the rod becomes positively charged because:", options:["Protons are added to the rod","Electrons are transferred from rod to silk","Neutrons are removed","Positive charge is created on the rod"], answer:"B" },
  { id:4, section:"Conceptual", text:"Electric field lines never cross each other because:", options:["They are always straight","Two directions of field at one point is impossible","They repel each other","They are imaginary"], answer:"B" },
  { id:5, section:"Conceptual", text:"Coulomb's Law is valid for:", options:["Only positive charges","Only negative charges","Point charges at rest","Moving charges only"], answer:"C" },
  { id:6, section:"Conceptual", text:"In charging by induction, the charge acquired is:", options:["Same as inducing charge","Opposite to inducing charge","Always positive","Always zero"], answer:"B" },
  { id:7, section:"Conceptual", text:"The SI unit of electric field intensity is:", options:["C/N","N/C","J/C","C/m²"], answer:"B" },
  { id:8, section:"Conceptual", text:"Electric field inside a uniformly charged thin spherical shell is:", options:["kQ/r²","kQ/R²","σ/ε₀","Zero"], answer:"D" },
  { id:9, section:"Conceptual", text:"The dielectric constant of a metal is:", options:["Zero","1","Infinity","Negative"], answer:"C" },
  { id:10, section:"Conceptual", text:"If a charge Q is placed at the centre of a cube, the total flux through the cube is:", options:["Q/ε₀","Q/6ε₀","6Q/ε₀","Zero"], answer:"A" },

  // === NUMERICAL (11–20) ===
  { id:11, section:"Numerical", text:"Two charges of 3 μC and 4 μC are placed 30 cm apart. The force between them is:", options:["1.2 N","0.12 N","12 N","0.36 N"], answer:"A" },
  { id:12, section:"Numerical", text:"The number of electrons in 1 C of charge is:", options:["6.25 × 10¹⁸","6.25 × 10¹⁹","1.6 × 10¹⁹","1.6 × 10¹⁸"], answer:"A" },
  { id:13, section:"Numerical", text:"Two identical charges of 2 μC each are separated by 10 cm. The force between them is:", options:["0.36 N","3.6 N","36 N","0.036 N"], answer:"B" },
  { id:14, section:"Numerical", text:"The electric field at a distance of 20 cm from a charge of 4 × 10⁻⁷ C is:", options:["9 × 10⁴ N/C","9 × 10³ N/C","9 × 10² N/C","9 × 10⁵ N/C"], answer:"A" },
  { id:15, section:"Numerical", text:"If the distance between two charges is halved, the Coulomb force becomes:", options:["Half","Double","Four times","One-fourth"], answer:"C" },
  { id:16, section:"Numerical", text:"A charge of 5 μC experiences a force of 25 N in an electric field. The field intensity is:", options:["5 × 10⁶ N/C","5 × 10⁵ N/C","5 × 10⁴ N/C","5 × 10³ N/C"], answer:"A" },
  { id:17, section:"Numerical", text:"Two charges +4 μC and –4 μC are 20 cm apart. The force between them is:", options:["3.6 N","0.36 N","36 N","0.036 N"], answer:"A" },
  { id:18, section:"Numerical", text:"How many electrons must be removed from a neutral body to give it a charge of +1 μC?", options:["6.25 × 10¹²","6.25 × 10¹⁵","6.25 × 10¹⁸","6.25 × 10⁹"], answer:"A" },
  { id:19, section:"Numerical", text:"The force between two charges in vacuum is 10 N. If they are placed in a medium of dielectric constant 5, the force becomes:", options:["50 N","2 N","10 N","0.5 N"], answer:"B" },
  { id:20, section:"Numerical", text:"A charge of 10 nC is placed at a point. The electric field at 1 m from it is:", options:["90 N/C","9 N/C","0.9 N/C","900 N/C"], answer:"A" },

  // === GAUSS'S LAW (21–30) ===
  { id:21, section:"Gauss's Law", text:"The SI unit of electric flux is:", options:["N·m²/C","N/C","C/m²","N·m/C²"], answer:"A" },
  { id:22, section:"Gauss's Law", text:"A charge of 8.85 × 10⁻¹² C is placed inside a closed surface. The total flux through the surface is:", options:["1 N·m²/C","8.85 N·m²/C","0.1 N·m²/C","10 N·m²/C"], answer:"A" },
  { id:23, section:"Gauss's Law", text:"Electric field due to an infinite plane sheet of charge density σ is:", options:["σ/ε₀","σ/(2ε₀)","2σ/ε₀","σ/(4ε₀)"], answer:"B" },
  { id:24, section:"Gauss's Law", text:"A charge Q is placed at a corner of a cube. The flux through the cube is:", options:["Q/ε₀","Q/(6ε₀)","Q/(8ε₀)","Q/(2ε₀)"], answer:"C" },
  { id:25, section:"Gauss's Law", text:"If the radius of a Gaussian surface enclosing a charge is doubled, the flux through it:", options:["Doubles","Becomes four times","Becomes half","Remains the same"], answer:"D" },
  { id:26, section:"Gauss's Law", text:"Electric field due to a long straight wire of linear charge density λ at distance r is:", options:["λ/(2πε₀r)","λ/(4πε₀r²)","2λ/(πε₀r)","λ/(πε₀r)"], answer:"A" },
  { id:27, section:"Gauss's Law", text:"The electric field due to an infinite line charge varies as:", options:["1/r²","1/r","1/r³","Constant"], answer:"B" },
  { id:28, section:"Gauss's Law", text:"A charge of 5 C is placed at the centre of a cube. Flux through each face is:", options:["5/(6ε₀)","5/ε₀","30/ε₀","ε₀/5"], answer:"A" },
  { id:29, section:"Gauss's Law", text:"Gauss's Law is applicable to:", options:["Only point charges","Only spherical symmetry","Any charge distribution","Only conductors"], answer:"C" },
  { id:30, section:"Gauss's Law", text:"Outside a uniformly charged spherical shell of total charge Q and radius R, the field at distance r (r > R) is:", options:["kQ/R²","kQ/r²","σ/(2ε₀)","Zero"], answer:"B" },

  // === MIXED (31–40) ===
  { id:31, section:"Mixed", text:"The ratio of electric force to gravitational force between two protons (mₚ = 1.67 × 10⁻²⁷ kg) is approximately:", options:["10²⁰","10³⁶","10¹⁰","10⁴⁰"], answer:"B" },
  { id:32, section:"Mixed", text:"Two point charges +Q and +4Q are separated by distance d. The null point lies at:", options:["d/3 from +Q","d/3 from +4Q","d/2 from +Q","2d/3 from +Q"], answer:"A" },
  { id:33, section:"Mixed", text:"A charge Q is placed at the centre of a cube. If the charge is moved to a corner, the total flux through the cube:", options:["Remains Q/ε₀","Becomes Q/(8ε₀)","Becomes zero","Doubles"], answer:"B" },
  { id:34, section:"Mixed", text:"The electric flux through a surface perpendicular to E→ of magnitude 500 N/C and area 0.1 m² is:", options:["50 N·m²/C","5000 N·m²/C","500 N·m²/C","5 N·m²/C"], answer:"A" },
  { id:35, section:"Mixed", text:"An electric field line can emerge from:", options:["A negative charge","A positive charge","Both positive and negative","Neither"], answer:"B" },
  { id:36, section:"Mixed", text:"If three equal charges are placed at the corners of an equilateral triangle, the electric field at the centroid is:", options:["3kQ/r²","kQ/r²","Zero","√3 kQ/r²"], answer:"C" },
  { id:37, section:"Mixed", text:"The surface charge density of a sphere of radius 10 cm and total charge 10 μC is:", options:["7.96 × 10⁻⁵ C/m²","7.96 × 10⁻⁴ C/m²","3.18 × 10⁻⁵ C/m²","3.18 × 10⁻⁴ C/m²"], answer:"A" },
  { id:38, section:"Mixed", text:"Two parallel infinite plane sheets have charge densities +σ and –σ. The field between them is:", options:["σ/ε₀","σ/(2ε₀)","Zero","2σ/ε₀"], answer:"A" },
  { id:39, section:"Mixed", text:"A proton and an electron are placed in the same uniform electric field. They experience:", options:["Same force, same acceleration","Same force, different acceleration","Different force, same acceleration","Different force, different acceleration"], answer:"B" },
  { id:40, section:"Mixed", text:"Which statement about conductors in electrostatic equilibrium is CORRECT?", options:["Field inside is non-zero","Charge resides on the surface","Charge distributes throughout volume","Surface is not equipotential"], answer:"B" },

  // === FINAL NUMERICAL (41–50) ===
  { id:41, section:"Final Numerical", text:"Two charges +2 μC and +8 μC are 12 cm apart. Where should a third charge be placed for zero net force on it?", options:["4 cm from 2 μC","8 cm from 2 μC","6 cm from 2 μC","3 cm from 2 μC"], answer:"A" },
  { id:42, section:"Final Numerical", text:"Three charges of 2 μC each are at the corners of an equilateral triangle of side 10 cm. The net force on any one charge is:", options:["6.24 N","3.6 N","7.2 N","1.8 N"], answer:"A" },
  { id:43, section:"Final Numerical", text:"A conducting sphere of radius 20 cm has a total charge of 4 μC. The surface charge density is:", options:["3.18 × 10⁻⁵ C/m²","7.96 × 10⁻⁵ C/m²","1.59 × 10⁻⁵ C/m²","6.36 × 10⁻⁵ C/m²"], answer:"A" },
  { id:44, section:"Final Numerical", text:"An electric field of 300 N/C makes an angle of 60° with the normal to a surface of area 0.2 m². The flux is:", options:["30 N·m²/C","60 N·m²/C","52 N·m²/C","15 N·m²/C"], answer:"A" },
  { id:45, section:"Final Numerical", text:"Two charges of +5 μC and –5 μC are placed 40 cm apart. The electric field at the midpoint is:", options:["2.25 × 10⁶ N/C","4.5 × 10⁶ N/C","1.125 × 10⁶ N/C","9 × 10⁶ N/C"], answer:"A" },
  { id:46, section:"Final Numerical", text:"A charge of 10 μC is placed at the centre of a sphere of radius 50 cm. The flux through a hemisphere is:", options:["5.65 × 10⁵ N·m²/C","1.13 × 10⁶ N·m²/C","11.3 × 10⁶ N·m²/C","2.83 × 10⁵ N·m²/C"], answer:"A" },
  { id:47, section:"Final Numerical", text:"The linear charge density of a wire is 3 × 10⁻⁶ C/m. The electric field at 10 cm from the wire is:", options:["5.4 × 10⁵ N/C","2.7 × 10⁵ N/C","1.08 × 10⁶ N/C","5.4 × 10⁴ N/C"], answer:"A" },
  { id:48, section:"Final Numerical", text:"A uniformly charged spherical shell of radius 10 cm has total charge 12 μC. The field at r = 5 cm is:", options:["Zero","10.8 × 10⁶ N/C","5.4 × 10⁶ N/C","2.16 × 10⁷ N/C"], answer:"A" },
  { id:49, section:"Final Numerical", text:"A plane surface of area 50 cm² is placed in a uniform field of 200 N/C. Maximum flux through this surface is:", options:["1 N·m²/C","10 N·m²/C","0.1 N·m²/C","100 N·m²/C"], answer:"A" },
  { id:50, section:"Final Numerical", text:"A charge of 2 μC is placed at the centre of a cube of side 10 cm. The flux through each face of the cube is:", options:["3.77 × 10⁴ N·m²/C","2.26 × 10⁵ N·m²/C","1.88 × 10⁵ N·m²/C","1.13 × 10⁴ N·m²/C"], answer:"A" }
];
