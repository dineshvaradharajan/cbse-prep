// Nuclei — Questions
const ch13Questions = [
  // Conceptual (1-10): Nuclear structure, forces, binding energy basics
  { id:1, section:"Conceptual", text:"The nuclear radius is proportional to:", options:["A","A<sup>(1/3)</sup>","A<sup>(2/3)</sup>","A²"], answer:"B" },
  { id:2, section:"Conceptual", text:"Nuclei with the same mass number but different atomic numbers are called:", options:["Isotopes","Isobars","Isotones","Isomers"], answer:"B" },
  { id:3, section:"Conceptual", text:"The nuclear force between two nucleons is:", options:["Always attractive","Always repulsive","Attractive at ~1 fm, repulsive below ~0.7 fm","Depends on charge only"], answer:"C" },
  { id:4, section:"Conceptual", text:"Which nucleus has the highest binding energy per nucleon?", options:["U-238","He-4","Fe-56","H-2"], answer:"C" },
  { id:5, section:"Conceptual", text:"Nuclear density is approximately:", options:["10³ kg/m³","10⁸ kg/m³","10¹⁷ kg/m³","10²⁵ kg/m³"], answer:"C" },
  { id:6, section:"Conceptual", text:"The energy equivalent of 1 atomic mass unit is:", options:["1 MeV","9.31 MeV","93.15 MeV","931.5 MeV"], answer:"D" },
  { id:7, section:"Conceptual", text:"Nuclear forces are:", options:["Long range, like gravity","Short range and charge dependent","Short range and charge independent","Electromagnetic in nature"], answer:"C" },
  { id:8, section:"Conceptual", text:"The mass of a nucleus is:", options:["Equal to the sum of masses of its nucleons","Greater than the sum of masses of its nucleons","Less than the sum of masses of its nucleons","Equal to A atomic mass units exactly"], answer:"C" },
  { id:9, section:"Conceptual", text:"The constant nuclear density for all nuclei implies that:", options:["Nuclear force is gravitational","Nuclear force has saturation property","All nuclei have same radius","Neutrons and protons have equal mass"], answer:"B" },
  { id:10, section:"Conceptual", text:"In the binding energy per nucleon curve, the nearly constant value (~8.5 MeV) for A = 30 to 170 indicates:", options:["Nuclear force is long range","Nuclear force is saturated (each nucleon interacts with limited neighbors)","Coulomb force dominates","Gravity balances repulsion"], answer:"B" },

  // Numerical (11-20): Mass defect, binding energy, nuclear size
  { id:11, section:"Numerical", text:"The mass defect of He-4 is 0.0304 u. Its binding energy is approximately:", options:["28.3 MeV","14.1 MeV","7.1 MeV","56.6 MeV"], answer:"A" },
  { id:12, section:"Numerical", text:"If the radius of Al-27 nucleus is 3.6 fm, the radius of Te-125 nucleus is approximately:", options:["4.8 fm","6.0 fm","9.0 fm","12.0 fm"], answer:"B" },
  { id:13, section:"Numerical", text:"The binding energy per nucleon of O-16 is 7.97 MeV. Its total binding energy is:", options:["127.5 MeV","63.8 MeV","7.97 MeV","159.4 MeV"], answer:"A" },
  { id:14, section:"Numerical", text:"The mass of a C-12 atom is exactly 12 u. The mass of 1 u in kg is:", options:["1.66 x 10⁻²⁷ kg","1.66 x 10⁻²⁴ kg","1.66 x 10⁻³⁰ kg","1.66 x 10⁻²⁰ kg"], answer:"A" },
  { id:15, section:"Numerical", text:"The ratio of nuclear radii of two nuclei with A₁ = 8 and A₂ = 64 is:", options:["1:2","1:4","1:8","1:16"], answer:"A" },
  { id:16, section:"Numerical", text:"If the mass defect of a nucleus is 0.5 u, the binding energy in joules is (1 u = 931.5 MeV, 1 MeV = 1.6 x 10⁻¹³ J):", options:["7.45 x 10⁻¹¹ J","4.65 x 10⁻¹¹ J","7.45 x 10⁻¹³ J","4.65 x 10⁻¹³ J"], answer:"A" },
  { id:17, section:"Numerical", text:"The nuclear radius of a nucleus with A = 216 is R. The radius of a nucleus with A = 27 is:", options:["R/2","R/3","R/4","R/6"], answer:"A" },
  { id:18, section:"Numerical", text:"The BE/A of a fission fragment (A = 117) is 8.5 MeV and that of U-235 is 7.6 MeV. Approximate energy released per fission is:", options:["200 MeV","100 MeV","~211 MeV","50 MeV"], answer:"C" },
  { id:19, section:"Numerical", text:"The mass of a proton is 1.00728 u and neutron is 1.00866 u. For a nucleus with Z = 8, A = 16 and mass 15.9949 u, the mass defect is:", options:["0.137 u","0.128 u","0.236 u","0.098 u"], answer:"A" },
  { id:20, section:"Numerical", text:"Using the mass defect from Q19, the binding energy per nucleon of O-16 is approximately:", options:["7.97 MeV","8.0 MeV","7.5 MeV","6.8 MeV"], answer:"A" },

  // Radioactivity (21-30): Decay law, half-life, decay types
  { id:21, section:"Radioactivity", text:"In alpha decay, the daughter nucleus has:", options:["Z-2, A-4","Z-1, A","Z+1, A","Z+2, A-4"], answer:"A" },
  { id:22, section:"Radioactivity", text:"In beta-minus decay, which particle is also emitted along with the electron?", options:["Neutrino","Antineutrino","Proton","Photon"], answer:"B" },
  { id:23, section:"Radioactivity", text:"A radioactive sample has a half-life of 10 years. After 30 years, the fraction of undecayed nuclei is:", options:["1/2","1/4","1/8","1/16"], answer:"C" },
  { id:24, section:"Radioactivity", text:"The activity of a radioactive sample is 800 Bq. After 3 half-lives, the activity becomes:", options:["400 Bq","200 Bq","100 Bq","50 Bq"], answer:"C" },
  { id:25, section:"Radioactivity", text:"The relation between mean life (tau) and half-life T(1/2) is:", options:["tau = T(1/2)","tau = 0.693 T(1/2)","tau = 1.44 T(1/2)","tau = 2 T(1/2)"], answer:"C" },
  { id:26, section:"Radioactivity", text:"Gamma rays emitted during radioactive decay are:", options:["Helium nuclei","Electrons","High energy electromagnetic radiation","Neutrons"], answer:"C" },
  { id:27, section:"Radioactivity", text:"Which radiation has the highest penetrating power?", options:["Alpha","Beta","Gamma","All equal"], answer:"C" },
  { id:28, section:"Radioactivity", text:"A radioactive nucleus X decays to Y by emitting two alpha particles and one beta-minus particle. If X has Z = 92 and A = 238, then Y has:", options:["Z = 89, A = 230","Z = 87, A = 230","Z = 88, A = 230","Z = 90, A = 230"], answer:"A" },
  { id:29, section:"Radioactivity", text:"The SI unit of radioactive activity is:", options:["Curie","Becquerel","Rutherford","Roentgen"], answer:"B" },
  { id:30, section:"Radioactivity", text:"If the decay constant of a substance is 0.0693 per year, its half-life is:", options:["5 years","10 years","15 years","20 years"], answer:"B" },

  // Mixed (31-40): All topics combined
  { id:31, section:"Mixed", text:"The moderator in a nuclear reactor is used to:", options:["Absorb neutrons","Speed up neutrons","Slow down neutrons","Shield radiation"], answer:"C" },
  { id:32, section:"Mixed", text:"Control rods in a nuclear reactor are made of:", options:["Uranium","Graphite","Cadmium or Boron","Heavy water"], answer:"C" },
  { id:33, section:"Mixed", text:"Nuclear fusion requires extremely high temperature because:", options:["Nuclei are very heavy","Nuclei must overcome Coulomb repulsion","Neutrons need to be slowed","Gravity must be overcome"], answer:"B" },
  { id:34, section:"Mixed", text:"The temperature required for nuclear fusion is of the order of:", options:["10³ K","10⁵ K","10⁷ K","10¹⁰ K"], answer:"C" },
  { id:35, section:"Mixed", text:"In the proton-proton fusion cycle, the net energy released when 4 hydrogen nuclei fuse to form He-4 is approximately:", options:["2 MeV","6.7 MeV","26.7 MeV","200 MeV"], answer:"C" },
  { id:36, section:"Mixed", text:"The approximate energy released per fission of U-235 is:", options:["2 MeV","20 MeV","200 MeV","2000 MeV"], answer:"C" },
  { id:37, section:"Mixed", text:"Which of the following has the highest ionizing power?", options:["Alpha particles","Beta particles","Gamma rays","X-rays"], answer:"A" },
  { id:38, section:"Mixed", text:"The function of heavy water in a nuclear reactor is to act as:", options:["Fuel","Coolant only","Moderator","Control rod material"], answer:"C" },
  { id:39, section:"Mixed", text:"If N₀ nuclei are present at t = 0 and the decay constant is lambda, the number of nuclei that have decayed after time t is:", options:["N₀ e<sup>(-λt)</sup>","N₀ (1 - e<sup>(-λt)</sup>)","N₀ lambda t","N₀ / (1 + lambda t)"], answer:"B" },
  { id:40, section:"Mixed", text:"A nucleus with Z = 82 and A = 208 is formed from a parent with Z = 90 and A = 232. The number of alpha and beta decays are:", options:["6 alpha, 4 beta","5 alpha, 4 beta","6 alpha, 2 beta","4 alpha, 6 beta"], answer:"A" },

  // Final Numerical (41-50): Board-exam style numericals
  { id:41, section:"Final Numerical", text:"A radioactive element has a half-life of 30 minutes. If the initial number of atoms is 6.4 x 10¹⁰, the number remaining after 2.5 hours is:", options:["3.2 x 10⁹","2.0 x 10⁹","6.4 x 10⁸","1.6 x 10⁹"], answer:"B" },
  { id:42, section:"Final Numerical", text:"The mass defect for a He-4 nucleus (given: mp = 1.00728 u, mn = 1.00866 u, M(He-4) = 4.00260 u) is:", options:["0.02928 u","0.03038 u","0.01928 u","0.04038 u"], answer:"B" },
  { id:43, section:"Final Numerical", text:"For Q42, the binding energy of He-4 in MeV is:", options:["27.3 MeV","28.3 MeV","29.3 MeV","30.3 MeV"], answer:"B" },
  { id:44, section:"Final Numerical", text:"The activity of a radioactive sample drops from 6400 disintegrations/s to 400 disintegrations/s in 8 hours. The half-life is:", options:["1 hour","2 hours","4 hours","8 hours"], answer:"B" },
  { id:45, section:"Final Numerical", text:"The nuclear radius of Si-27 is measured to be 3.6 fm. The radius of a nucleus with A = 125 is:", options:["4.5 fm","6.0 fm","7.2 fm","9.0 fm"], answer:"B" },
  { id:46, section:"Final Numerical", text:"U-238 decays to Pb-206 through a series of alpha and beta decays. The number of alpha particles emitted is:", options:["6","7","8","10"], answer:"C" },
  { id:47, section:"Final Numerical", text:"For Q46, the number of beta-minus particles emitted is:", options:["4","6","8","10"], answer:"B" },
  { id:48, section:"Final Numerical", text:"A radioactive sample has N₀ = 10⁶ atoms and decay constant lambda = 10⁻³ per second. The initial activity is:", options:["10³ Bq","10⁶ Bq","10⁹ Bq","10⁻³ Bq"], answer:"A" },
  { id:49, section:"Final Numerical", text:"Two nuclei have radii in the ratio 1:2. The ratio of their mass numbers is:", options:["1:2","1:4","1:8","1:6"], answer:"C" },
  { id:50, section:"Final Numerical", text:"If 75% of a radioactive substance decays in 24 minutes, the half-life is:", options:["6 minutes","8 minutes","12 minutes","16 minutes"], answer:"C" }
];
