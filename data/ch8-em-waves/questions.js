// Chapter 8: Electromagnetic Waves — Questions
const ch8Questions = [
  // ============================================================
  // Conceptual (1-10): Displacement current, EM wave properties, Maxwell
  // ============================================================
  { id:1, section:"Conceptual", text:"Displacement current arises due to:", options:["Flow of free electrons","Flow of positive ions","Time-varying electric field","Time-varying magnetic field"], answer:"C" },
  { id:2, section:"Conceptual", text:"Electromagnetic waves are produced by:", options:["A charge at rest","A charge moving with constant velocity","An accelerating charge","A stationary magnet"], answer:"C" },
  { id:3, section:"Conceptual", text:"In an electromagnetic wave, the electric and magnetic fields are:", options:["Parallel to each other","Perpendicular to each other but parallel to direction of propagation","Perpendicular to each other and to the direction of propagation","Anti-parallel to each other"], answer:"C" },
  { id:4, section:"Conceptual", text:"Which of the following is NOT true about electromagnetic waves?", options:["They are transverse waves","They can travel through vacuum","They need a material medium for propagation","They carry energy and momentum"], answer:"C" },
  { id:5, section:"Conceptual", text:"The ratio E<sub>0</sub>/B<sub>0</sub> in an electromagnetic wave equals:", options:["1/c","c","c²","1/c²"], answer:"B" },
  { id:6, section:"Conceptual", text:"The displacement current between the plates of a parallel plate capacitor during charging is:", options:["Zero","Less than conduction current","Equal to conduction current","Greater than conduction current"], answer:"C" },
  { id:7, section:"Conceptual", text:"Maxwell modified Ampere's circuital law by adding:", options:["Conduction current","Convection current","Displacement current","Eddy current"], answer:"C" },
  { id:8, section:"Conceptual", text:"In an electromagnetic wave, E and B are:", options:["Out of phase by 90 degrees","Out of phase by 180 degrees","In phase","Out of phase by 45 degrees"], answer:"C" },
  { id:9, section:"Conceptual", text:"The speed of electromagnetic waves in vacuum depends upon:", options:["Wavelength of the wave","Frequency of the wave","Amplitude of the wave","None of these — it is constant"], answer:"D" },
  { id:10, section:"Conceptual", text:"Who experimentally demonstrated the existence of electromagnetic waves?", options:["Maxwell","Faraday","Hertz","Ampere"], answer:"C" },

  // ============================================================
  // Numerical (11-20): E-B calculations, intensity, pressure, displacement current
  // ============================================================
  { id:11, section:"Numerical", text:"An EM wave has E<sub>0</sub> = 60 V/m. The amplitude of the magnetic field B<sub>0</sub> is:", options:["2 x 10⁻⁷ T","6 x 10⁻⁷ T","2 x 10⁻⁶ T","6 x 10⁻⁶ T"], answer:"A" },
  // B<sub>0</sub> = E<sub>0</sub>/c = 60/(3e8) = 2e-7 T
  { id:12, section:"Numerical", text:"The magnetic field in an EM wave is B<sub>0</sub> = 5 x 10⁻⁸ T. The electric field amplitude is:", options:["15 V/m","1.5 V/m","150 V/m","0.15 V/m"], answer:"A" },
  // E<sub>0</sub> = B<sub>0</sub> * c = 5e-8 * 3e8 = 15 V/m
  { id:13, section:"Numerical", text:"A radio station broadcasts at 1000 kHz. The wavelength of the broadcast is:", options:["30 m","300 m","3000 m","3 m"], answer:"B" },
  // lambda = c/f = 3e8/(1e6) = 300 m
  { id:14, section:"Numerical", text:"The electric field of an EM wave has amplitude 120 V/m. The average intensity of the wave is approximately:", options:["19.1 W/m²","38.2 W/m²","9.55 W/m²","76.4 W/m²"], answer:"A" },
  // I = (1/2)(3e8)(8.85e-12)(120²) = (1/2)(3e8)(8.85e-12)(14400) = 19.1 W/m²
  { id:15, section:"Numerical", text:"A laser beam has intensity 10¹² W/m² hitting a perfectly absorbing surface. The radiation pressure is:", options:["3.33 x 10³ Pa","6.67 x 10³ Pa","3.33 x 10⁶ Pa","6.67 x 10⁶ Pa"], answer:"A" },
  // P = I/c = 10¹²/(3e8) = 3.33e3 Pa
  { id:16, section:"Numerical", text:"Light of intensity 2 W/m² falls on a perfectly reflecting surface of area 2 m². The radiation force on the surface is:", options:["2.67 x 10⁻⁸ N","1.33 x 10⁻⁸ N","5.33 x 10⁻⁸ N","4 x 10⁻⁸ N"], answer:"A" },
  // F = 2IA/c = 2(2)(2)/(3e8) = 8/(3e8) = 2.67e-8 N
  { id:17, section:"Numerical", text:"A parallel plate capacitor with plate area 0.02 m² has electric field changing at the rate of 10¹² V/m/s. The displacement current is:", options:["0.177 A","1.77 A","0.0177 A","17.7 A"], answer:"A" },
  // I<sub>d</sub> = ε<sub>0</sub> * A * dE/dt = 8.85e-12 * 0.02 * 1e12 = 8.85 * 0.02 = 0.177 A
  { id:18, section:"Numerical", text:"An EM wave has frequency 5 x 10¹⁴ Hz. Its wavelength is:", options:["600 nm","500 nm","400 nm","700 nm"], answer:"A" },
  // lambda = c/f = 3e8/(5e14) = 6e-7 m = 600 nm
  { id:19, section:"Numerical", text:"The energy of a photon of wavelength 6000 angstrom (h = 6.63 x 10⁻³⁴ J.s) is approximately:", options:["3.31 x 10⁻¹⁹ J","6.63 x 10⁻¹⁹ J","1.66 x 10⁻¹⁹ J","9.94 x 10⁻¹⁹ J"], answer:"A" },
  // E = hc/lambda = 6.63e-34 * 3e8 / 6e-7 = 19.89e-26/6e-7 = 3.315e-19 J
  { id:20, section:"Numerical", text:"If the amplitude of the electric field in an EM wave is doubled, the intensity becomes:", options:["Double","Four times","Half","Same"], answer:"B" },
  // I proportional to E<sub>0</sub>², so doubling E<sub>0</sub> gives 4I

  // ============================================================
  // EM Spectrum (21-30): Sources, detection, applications, ordering
  // ============================================================
  { id:21, section:"EM Spectrum", text:"Which electromagnetic waves are used in RADAR?", options:["Radio waves","Microwaves","Infrared","X-rays"], answer:"B" },
  { id:22, section:"EM Spectrum", text:"The ozone layer in the atmosphere absorbs:", options:["Infrared radiation","Visible light","Ultraviolet radiation","Microwaves"], answer:"C" },
  { id:23, section:"EM Spectrum", text:"X-rays are produced by:", options:["Radioactive nuclei","Oscillating LC circuits","Bombardment of a metal target by high-energy electrons","Hot filaments"], answer:"C" },
  { id:24, section:"EM Spectrum", text:"Which of the following has the longest wavelength?", options:["Gamma rays","X-rays","Microwaves","Radio waves"], answer:"D" },
  { id:25, section:"EM Spectrum", text:"The greenhouse effect is due to absorption by the atmosphere of:", options:["Ultraviolet radiation","Visible light","Infrared radiation","Microwaves"], answer:"C" },
  { id:26, section:"EM Spectrum", text:"Gamma rays originate from:", options:["Electronic transitions in atoms","Vibrating molecules","Radioactive decay of nuclei","Accelerating electrons in an antenna"], answer:"C" },
  { id:27, section:"EM Spectrum", text:"Which EM waves are used in night vision devices?", options:["UV rays","Visible light","Infrared rays","Microwaves"], answer:"C" },
  { id:28, section:"EM Spectrum", text:"Arrange in order of increasing frequency: Infrared (IR), Gamma (G), Visible (V), X-ray (X).", options:["IR, V, X, G","V, IR, X, G","G, X, V, IR","IR, X, V, G"], answer:"A" },
  { id:29, section:"EM Spectrum", text:"Microwaves in an oven heat food because:", options:["They ionize atoms in food","They excite nuclear transitions","Water molecules absorb microwaves and their kinetic energy increases","They break chemical bonds"], answer:"C" },
  { id:30, section:"EM Spectrum", text:"Which EM radiation is used for studying crystal structure?", options:["Ultraviolet","Infrared","Microwaves","X-rays"], answer:"D" },

  // ============================================================
  // Mixed (31-40): Conceptual + application mix
  // ============================================================
  { id:31, section:"Mixed", text:"The direction of propagation of an EM wave is given by:", options:["E . B","B . E","E x B","B x E x c"], answer:"C" },
  { id:32, section:"Mixed", text:"In an EM wave, the energy is:", options:["Entirely in the electric field","Entirely in the magnetic field","Shared equally between E and B fields","Shared in the ratio 2:1 between E and B"], answer:"C" },
  { id:33, section:"Mixed", text:"The refractive index of a medium is related to relative permittivity (ε<sub>r</sub>) and relative permeability (μ<sub>r</sub>) by:", options:["n = ε<sub>r</sub> * μ<sub>r</sub>","n = sqrt(ε<sub>r</sub> * μ<sub>r</sub>)","n = sqrt(ε<sub>r</sub> / μ<sub>r</sub>)","n = ε<sub>r</sub> + μ<sub>r</sub>"], answer:"B" },
  { id:34, section:"Mixed", text:"An EM wave of wavelength lambda in vacuum enters a medium of refractive index 1.5. Its wavelength in the medium is:", options:["1.5 lambda","lambda / 1.5","lambda","2.25 lambda"], answer:"B" },
  { id:35, section:"Mixed", text:"Which of the following can be polarised?", options:["Sound waves","Longitudinal waves","Electromagnetic waves","Pressure waves in a gas"], answer:"C" },
  { id:36, section:"Mixed", text:"The dimension of (1/μ<sub>0</sub> * ε<sub>0</sub>) is:", options:["[LT⁻¹]","[L² T⁻²]","[ML² T⁻²]","[M⁰ L⁰ T⁰]"], answer:"B" },
  // 1/(μ<sub>0</sub> * ε<sub>0</sub>) = c² = [L² T⁻²]
  { id:37, section:"Mixed", text:"A capacitor is being charged. At the same instant, the conduction current (I<sub>c</sub>) in the wire and the displacement current (I<sub>d</sub>) between the plates are related as:", options:["I<sub>c</sub> > I<sub>d</sub>","I<sub>c</sub> < I<sub>d</sub>","I<sub>c</sub> = I<sub>d</sub>","I<sub>c</sub> = 2 I<sub>d</sub>"], answer:"C" },
  { id:38, section:"Mixed", text:"Which of the following EM waves has photons with the highest energy?", options:["Radio waves","Visible light","X-rays","Gamma rays"], answer:"D" },
  { id:39, section:"Mixed", text:"An EM wave is travelling along the z-direction. At a certain point, E is along x-direction. The magnetic field B at that point is along:", options:["z-direction","x-direction","y-direction","-y-direction"], answer:"C" },
  // E along x, propagation along z, so B = direction such that E x B = z. x-hat x y-hat = z-hat. B along y.
  { id:40, section:"Mixed", text:"When light travels from vacuum to a denser medium, which quantity remains unchanged?", options:["Wavelength","Speed","Frequency","Wave number"], answer:"C" },

  // ============================================================
  // Final Numerical (41-50): Board-level numerical problems
  // ============================================================
  { id:41, section:"Final Numerical", text:"An EM wave has E = 200 sin(5 x 10¹⁴ t - 1.67 x 10⁶ x) V/m. The speed of the wave is:", options:["3 x 10⁸ m/s","2 x 10⁸ m/s","1.5 x 10⁸ m/s","5 x 10⁸ m/s"], answer:"A" },
  // v = omega/k = 5e14/1.67e6 = 2.99e8 approx 3e8 m/s
  { id:42, section:"Final Numerical", text:"The magnetic field of an EM wave is B = 3 x 10⁻⁸ sin(kx - omega*t) T. The peak value of electric field is:", options:["9 V/m","3 V/m","90 V/m","0.9 V/m"], answer:"A" },
  // E<sub>0</sub> = B<sub>0</sub> * c = 3e-8 * 3e8 = 9 V/m
  { id:43, section:"Final Numerical", text:"A 100 MHz FM signal has wavelength:", options:["3 m","30 m","0.3 m","300 m"], answer:"A" },
  // lambda = c/f = 3e8/1e8 = 3 m
  { id:44, section:"Final Numerical", text:"The average energy density in an EM wave with E<sub>0</sub> = 6 V/m is (ε<sub>0</sub> = 8.85 x 10⁻¹²):", options:["1.6 x 10⁻¹⁰ J/m³","3.2 x 10⁻¹⁰ J/m³","0.8 x 10⁻¹⁰ J/m³","6.4 x 10⁻¹⁰ J/m³"], answer:"A" },
  // u<sub>avg</sub> = (1/2) ε<sub>0</sub> E<sub>0</sub>² = (1/2)(8.85e-12)(36) = 1.593e-10 approx 1.6e-10 J/m³
  { id:45, section:"Final Numerical", text:"Solar radiation at Earth's surface has intensity 1.4 kW/m². The amplitude of the electric field is approximately:", options:["1027 V/m","728 V/m","514 V/m","364 V/m"], answer:"A" },
  // E<sub>0</sub> = sqrt(2I/(c*ε<sub>0</sub>)) = sqrt(2*1400/(3e8*8.85e-12)) = sqrt(2800/2.655e-3) = sqrt(1.055e6) = 1027 V/m
  { id:46, section:"Final Numerical", text:"A parallel plate capacitor of plate area 50 cm² is being charged by a current of 0.1 A. The displacement current is:", options:["0.1 A","0.05 A","0.2 A","Zero"], answer:"A" },
  // I<sub>d</sub> = I<sub>c</sub> = 0.1 A (always equal during charging)
  { id:47, section:"Final Numerical", text:"An EM wave has wavelength 500 nm. The photon energy is (h = 6.63 x 10⁻³⁴ J.s):", options:["3.98 x 10⁻¹⁹ J","2.48 x 10⁻¹⁹ J","6.63 x 10⁻¹⁹ J","1.99 x 10⁻¹⁹ J"], answer:"A" },
  // E = hc/lambda = 6.63e-34 * 3e8 / 5e-7 = 19.89e-26/5e-7 = 3.978e-19 J
  { id:48, section:"Final Numerical", text:"The electric field of an EM wave in vacuum is E = 50 V/m. The average Poynting vector magnitude (intensity) is:", options:["3.3 W/m²","6.6 W/m²","1.65 W/m²","13.2 W/m²"], answer:"A" },
  // I = (1/2) c ε<sub>0</sub> E<sub>0</sub>² = 0.5 * 3e8 * 8.85e-12 * 2500 = 3.32 W/m²
  { id:49, section:"Final Numerical", text:"Light of intensity 8 W/m² falls normally on a perfectly absorbing surface of area 25 cm². The force on the surface is:", options:["6.67 x 10⁻¹¹ N","1.33 x 10⁻¹⁰ N","3.33 x 10⁻¹¹ N","2.67 x 10⁻¹⁰ N"], answer:"A" },
  // F = IA/c = 8 * 25e-4 / 3e8 = 0.02/3e8 = 6.67e-11 N
  { id:50, section:"Final Numerical", text:"An EM wave of frequency 10¹⁰ Hz is propagating in a medium with ε<sub>r</sub> = 4 and μ<sub>r</sub> = 1. The wavelength in the medium is:", options:["1.5 cm","3 cm","0.75 cm","6 cm"], answer:"A" }
  // v = c/sqrt(ε<sub>r</sub> * μ<sub>r</sub>) = 3e8/2 = 1.5e8 m/s
  // lambda = v/f = 1.5e8/1e10 = 1.5e-2 m = 1.5 cm
];
