// Atoms — Questions
const ch12Questions = [
  // Conceptual (1-10): Thomson, Rutherford, Bohr basics
  { id:1, section:"Conceptual", text:"In Thomson's model of the atom, the positive charge is:", options:["Concentrated at the centre","Uniformly distributed throughout the sphere","Located in the nucleus","Orbiting the electrons"], answer:"B" },
  { id:2, section:"Conceptual", text:"In Rutherford's alpha-particle scattering experiment, most alpha particles:", options:["Were deflected by large angles","Bounced back","Passed through with little or no deflection","Were absorbed by the foil"], answer:"C" },
  { id:3, section:"Conceptual", text:"The fact that some alpha particles bounced back in Rutherford's experiment indicates that:", options:["Atoms are hollow","The positive charge is spread throughout the atom","There is a small, dense, positively charged nucleus","Electrons are very heavy"], answer:"C" },
  { id:4, section:"Conceptual", text:"The main failure of Rutherford's model was that it could not explain:", options:["Existence of the nucleus","Stability of the atom","Positive charge in the atom","Neutral nature of atoms"], answer:"B" },
  { id:5, section:"Conceptual", text:"According to Bohr's model, an electron in a stationary orbit:", options:["Continuously radiates energy","Does not radiate energy","Gradually loses speed","Spirals into the nucleus"], answer:"B" },
  { id:6, section:"Conceptual", text:"The angular momentum of an electron in the nth Bohr orbit is:", options:["nh","nh/2pi","n²h/2pi","2pinh"], answer:"B" },
  { id:7, section:"Conceptual", text:"Which spectral series of hydrogen falls in the visible region?", options:["Lyman","Balmer","Paschen","Brackett"], answer:"B" },
  { id:8, section:"Conceptual", text:"The Lyman series of hydrogen spectrum lies in the:", options:["Visible region","Infrared region","Ultraviolet region","Microwave region"], answer:"C" },
  { id:9, section:"Conceptual", text:"In Bohr's model, when an electron jumps from a higher orbit to a lower orbit, it:", options:["Absorbs a photon","Emits a photon","Gains kinetic energy only","Remains unchanged"], answer:"B" },
  { id:10, section:"Conceptual", text:"The ratio of the radius of the first orbit to the second orbit in hydrogen atom is:", options:["1:2","1:4","2:1","4:1"], answer:"B" },

  // Numerical (11-20): Energy levels, wavelengths, basic calculations
  { id:11, section:"Numerical", text:"The energy of the electron in the ground state of hydrogen is -13.6 eV. Its energy in the second excited state (n=3) is:", options:["-1.51 eV","-3.4 eV","-0.85 eV","-4.53 eV"], answer:"A" },
  { id:12, section:"Numerical", text:"The ionization energy of hydrogen atom from its ground state is:", options:["3.4 eV","10.2 eV","13.6 eV","27.2 eV"], answer:"C" },
  { id:13, section:"Numerical", text:"The first excitation energy of hydrogen atom (ground state to first excited state) is:", options:["13.6 eV","3.4 eV","10.2 eV","1.89 eV"], answer:"C" },
  { id:14, section:"Numerical", text:"The radius of the third Bohr orbit of hydrogen is (a₀ = 0.529 A):", options:["1.587 A","4.761 A","2.645 A","0.529 A"], answer:"B" },
  { id:15, section:"Numerical", text:"The speed of an electron in the first Bohr orbit of hydrogen is v₁. Its speed in the third orbit is:", options:["v₁/3","3v₁","v₁/9","9v₁"], answer:"A" },
  { id:16, section:"Numerical", text:"The wavelength of the first line of the Lyman series (n=2 to n=1) is approximately:", options:["656 nm","486 nm","122 nm","91 nm"], answer:"C" },
  { id:17, section:"Numerical", text:"If the electron in hydrogen is in the n=4 level, the maximum number of spectral lines it can emit while returning to ground state is:", options:["3","4","6","10"], answer:"C" },
  { id:18, section:"Numerical", text:"The energy required to excite a hydrogen atom from n=2 to n=4 is:", options:["2.55 eV","10.2 eV","0.85 eV","3.4 eV"], answer:"A" },
  { id:19, section:"Numerical", text:"The ratio of energies of the hydrogen atom in its first and second excited states (E₂/E₃) is:", options:["4/9","9/4","1/4","4/1"], answer:"B" },
  { id:20, section:"Numerical", text:"The shortest wavelength in the Balmer series of hydrogen is (R = 1.097 x 10⁷ m⁻¹):", options:["656 nm","486 nm","365 nm","91.2 nm"], answer:"C" },

  // Bohr Model (21-30): Derivations, hydrogen-like ions, deeper questions
  { id:21, section:"Bohr Model", text:"In Bohr's model, the relation between kinetic energy (KE) and potential energy (PE) of an electron in an orbit is:", options:["KE = PE","KE = -PE/2","KE = -PE","KE = 2PE"], answer:"B" },
  { id:22, section:"Bohr Model", text:"The ground state energy of He⁺ (Z=2) is:", options:["-13.6 eV","-54.4 eV","-27.2 eV","-3.4 eV"], answer:"B" },
  { id:23, section:"Bohr Model", text:"The radius of the first Bohr orbit of He⁺ is:", options:["0.529 A","1.058 A","0.2645 A","0.1323 A"], answer:"C" },
  { id:24, section:"Bohr Model", text:"If the electron in a hydrogen atom is in the first excited state, its orbital radius compared to the ground state radius is:", options:["Same","2 times","4 times","8 times"], answer:"C" },
  { id:25, section:"Bohr Model", text:"Which orbit of Li²⁺ (Z=3) has the same radius as the first Bohr orbit of hydrogen?", options:["n=1","n=2","n=3","No orbit has the same radius"], answer:"C" },
  { id:26, section:"Bohr Model", text:"The de Broglie wavelength of an electron in the nth Bohr orbit is related to the orbit circumference as:", options:["2*pi*r = lambda","2*pi*r = n*lambda","2*pi*r = lambda/n","pi*r = n*lambda"], answer:"B" },
  { id:27, section:"Bohr Model", text:"The time period of revolution of an electron in the nth orbit is proportional to:", options:["n","n²","n³","1/n³"], answer:"C" },
  { id:28, section:"Bohr Model", text:"The total energy of an electron in the nth Bohr orbit is -E. Its kinetic energy is:", options:["-E","E","2E","E/2"], answer:"B" },
  { id:29, section:"Bohr Model", text:"Bohr's model cannot explain the spectrum of:", options:["H","He⁺","Li²⁺","He (neutral)"], answer:"D" },
  { id:30, section:"Bohr Model", text:"The ratio of the longest wavelength of the Lyman series to the longest wavelength of the Balmer series is:", options:["5/27","27/5","3/4","4/3"], answer:"A" },

  // Mixed (31-40): All topics combined
  { id:31, section:"Mixed", text:"The impact parameter is zero when the scattering angle of the alpha particle is:", options:["0°","90°","180°","45°"], answer:"C" },
  { id:32, section:"Mixed", text:"In Rutherford's experiment, the number of alpha particles scattered at angle theta is proportional to:", options:["sin⁴(theta/2)","1/sin⁴(theta/2)","cos⁴(theta/2)","1/cos⁴(theta/2)"], answer:"B" },
  { id:33, section:"Mixed", text:"An electron in hydrogen atom makes a transition from n=3 to n=1. The emitted photon belongs to which series?", options:["Balmer","Paschen","Lyman","Brackett"], answer:"C" },
  { id:34, section:"Mixed", text:"The Bohr model of atom does NOT explain:", options:["Hydrogen spectrum","Ionization energy of H","Fine structure of spectral lines","Energy levels of H"], answer:"C" },
  { id:35, section:"Mixed", text:"If the kinetic energy of the alpha particle is doubled, the distance of closest approach:", options:["Is doubled","Is halved","Remains the same","Becomes 4 times"], answer:"B" },
  { id:36, section:"Mixed", text:"The second line of the Balmer series corresponds to the transition:", options:["n=3 to n=2","n=4 to n=2","n=4 to n=1","n=5 to n=2"], answer:"B" },
  { id:37, section:"Mixed", text:"The frequency of revolution of an electron in the nth Bohr orbit is proportional to:", options:["n³","1/n³","n²","1/n²"], answer:"B" },
  { id:38, section:"Mixed", text:"The binding energy of an electron in the ground state of a hydrogen-like atom is 122.4 eV. The atomic number Z of the atom is:", options:["1","2","3","4"], answer:"C" },
  { id:39, section:"Mixed", text:"The wavelength of the series limit of the Lyman series is:", options:["656 nm","365 nm","91.2 nm","820 nm"], answer:"C" },
  { id:40, section:"Mixed", text:"The ratio of the speed of an electron in the ground state of hydrogen to the speed of light (c) is approximately:", options:["1/137","1/237","1/37","1/13.6"], answer:"A" },

  // Final Numerical (41-50): Board-exam style numericals
  { id:41, section:"Final Numerical", text:"An alpha particle of kinetic energy 10 MeV approaches a gold nucleus (Z=79). The distance of closest approach is (k = 9 x 10⁹):", options:["2.27 x 10⁻¹⁴ m","4.55 x 10⁻¹⁴ m","1.14 x 10⁻¹⁴ m","9.1 x 10⁻¹⁴ m"], answer:"A" },
  { id:42, section:"Final Numerical", text:"The wavelength of the H-alpha line (first Balmer line, n=3 to n=2) is approximately:", options:["486 nm","434 nm","656 nm","365 nm"], answer:"C" },
  { id:43, section:"Final Numerical", text:"A photon of energy 12.09 eV is absorbed by a hydrogen atom in the ground state. The atom is excited to level:", options:["n=2","n=3","n=4","n=5"], answer:"B" },
  { id:44, section:"Final Numerical", text:"The energy of an electron in the first orbit of He⁺ is -54.4 eV. Its energy in the second orbit is:", options:["-13.6 eV","-27.2 eV","-3.4 eV","-6.8 eV"], answer:"A" },
  { id:45, section:"Final Numerical", text:"If the radius of the 3rd Bohr orbit of hydrogen is r, the radius of the 4th orbit is:", options:["(16/9)r","(4/3)r","(9/16)r","(3/4)r"], answer:"A" },
  { id:46, section:"Final Numerical", text:"The wavelength of the photon emitted when a hydrogen atom transitions from n=4 to n=2 is (use hc = 1240 eV·nm):", options:["486 nm","656 nm","434 nm","365 nm"], answer:"A" },
  { id:47, section:"Final Numerical", text:"The kinetic energy of an electron in the second Bohr orbit of hydrogen is:", options:["13.6 eV","3.4 eV","1.51 eV","0.85 eV"], answer:"B" },
  { id:48, section:"Final Numerical", text:"A hydrogen atom in the ground state absorbs a photon of wavelength 102.6 nm. The electron is excited to (use R = 1.097 x 10⁷ m⁻¹):", options:["n=2","n=3","n=4","n=5"], answer:"B" },
  { id:49, section:"Final Numerical", text:"The ratio of the wavelength of the first line of the Lyman series to the first line of the Paschen series is:", options:["7/108","108/7","7/36","36/7"], answer:"A" },
  { id:50, section:"Final Numerical", text:"The total energy of an electron in the 4th orbit of hydrogen is -0.85 eV. Its potential energy in this orbit is:", options:["-0.85 eV","-1.70 eV","+0.85 eV","+1.70 eV"], answer:"B" }
];
