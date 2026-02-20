// Wave Optics — Questions
const ch10Questions = [
  // Conceptual (1-10): Huygens, coherence, interference basics, polarization concepts
  { id:1, section:"Conceptual", text:"According to Huygens principle, every point on a wavefront acts as a source of:", options:["Longitudinal waves","Secondary wavelets","Primary waves","Stationary waves"], answer:"B" },
  { id:2, section:"Conceptual", text:"Two independent sources of light cannot produce sustained interference because they are:", options:["Too far apart","Of different intensity","Not coherent","Of different size"], answer:"C" },
  { id:3, section:"Conceptual", text:"In Young's double slit experiment, the central fringe is:", options:["Dark","Bright","Absent","Coloured"], answer:"B" },
  { id:4, section:"Conceptual", text:"The phenomenon of polarization of light proves that light is a:", options:["Longitudinal wave","Transverse wave","Mechanical wave","Particle"], answer:"B" },
  { id:5, section:"Conceptual", text:"When a wavefront passes from a rarer to a denser medium, the wavelength:", options:["Increases","Decreases","Remains same","Becomes zero"], answer:"B" },
  { id:6, section:"Conceptual", text:"In single slit diffraction, the condition a*sin(theta) = lambda gives:", options:["Central maximum","First maximum","First minimum","Second maximum"], answer:"C" },
  { id:7, section:"Conceptual", text:"At Brewster's angle, the reflected and refracted rays are:", options:["Parallel","At 45 degrees","Perpendicular","At 60 degrees"], answer:"C" },
  { id:8, section:"Conceptual", text:"In YDSE, if the experiment is performed in water instead of air, the fringe width:", options:["Increases","Decreases","Remains same","Becomes zero"], answer:"B" },
  { id:9, section:"Conceptual", text:"Diffraction of light is significant when the slit width is:", options:["Much larger than wavelength","Much smaller than wavelength","Comparable to wavelength","Equal to zero"], answer:"C" },
  { id:10, section:"Conceptual", text:"In YDSE with white light, the central fringe is:", options:["Red","Violet","White","Dark"], answer:"C" },

  // Numerical (11-20): YDSE calculations, fringe width, path difference
  { id:11, section:"Numerical", text:"In YDSE, d = 0.1 mm, D = 1 m, lambda = 600 nm. The fringe width is:", options:["6 mm","0.6 mm","0.06 mm","60 mm"], answer:"A" },
  // beta = 600e-9 * 1 / 0.1e-3 = 6e-3 m = 6 mm

  { id:12, section:"Numerical", text:"In YDSE, fringe width is 4 mm. The position of the 5th bright fringe from centre is:", options:["10 mm","15 mm","20 mm","25 mm"], answer:"C" },
  // y5 = 5 * beta = 5 * 4 = 20 mm

  { id:13, section:"Numerical", text:"In YDSE, if the slit separation is halved and screen distance is doubled, the fringe width becomes:", options:["Same","Double","Four times","Half"], answer:"C" },
  // beta' = lambda*(2D)/(d/2) = 4*lambda*D/d = 4*beta

  { id:14, section:"Numerical", text:"Two slits separated by 0.5 mm are illuminated by light of wavelength 500 nm. The angular fringe width is:", options:["10⁻³ rad","10⁻² rad","10⁻⁴ rad","10⁻⁵ rad"], answer:"A" },
  // theta = lambda/d = 500e-9/0.5e-3 = 10⁻³ rad

  { id:15, section:"Numerical", text:"In YDSE, the path difference at a point where intensity is half the maximum intensity (for equal sources) is:", options:["lambda/4","lambda/3","lambda/6","lambda/2"], answer:"A" },
  // I = 4*I0*cos²(phi/2) = 2*I0 gives cos²(phi/2)=1/2, phi=pi/2, Delta=lambda/4

  { id:16, section:"Numerical", text:"In YDSE, two coherent sources have intensities in ratio 1:4. The ratio I(max)/I(min) is:", options:["5:3","9:1","25:9","3:1"], answer:"B" },
  // I1:I2=1:4, a1:a2=1:2, Imax/Imin = (1+2)²/(2-1)² = 9/1

  { id:17, section:"Numerical", text:"In YDSE with d = 1 mm, D = 1 m, lambda = 500 nm, a thin glass plate (mu = 1.5, t = 0.01 mm) is placed before one slit. The central fringe shifts by:", options:["5 mm","2.5 mm","10 mm","0.5 mm"], answer:"A" },
  // shift = (1.5-1)*0.01e-3*1/(1e-3) = 0.5*1e-5/1e-3 = 5e-3 m = 5 mm

  { id:18, section:"Numerical", text:"Light of wavelength 500 nm falls on two slits 0.2 mm apart. The 3rd dark fringe is at distance (D = 1.5 m):", options:["9.375 mm","18.75 mm","5.625 mm","11.25 mm"], answer:"B" },
  // y3(dark) = (2*3-1)*lambda*D/(2d) = 5*500e-9*1.5/(2*0.2e-3) = 5*750e-9/4e-4 = 3750e-9/4e-4 = 18.75e-3 m = 18.75 mm

  { id:19, section:"Numerical", text:"In YDSE, fringe width with lambda = 600 nm is 6 mm. If lambda is changed to 400 nm, the new fringe width is:", options:["4 mm","9 mm","3 mm","8 mm"], answer:"A" },
  // beta proportional to lambda: 6*(400/600) = 4 mm

  { id:20, section:"Numerical", text:"The ratio of slit widths in YDSE is 4:1. The ratio I(max):I(min) is:", options:["9:1","4:1","25:9","3:1"], answer:"A" },
  // slit widths ratio = intensity ratio = 4:1, amplitude ratio = 2:1
  // Imax/Imin = (2+1)²/(2-1)² = 9:1

  // Interference & Diffraction (21-30)
  { id:21, section:"Interference & Diffraction", text:"In single slit diffraction, the angular width of the central maximum is:", options:["lambda/a","2*lambda/a","lambda/(2a)","a/lambda"], answer:"B" },

  { id:22, section:"Interference & Diffraction", text:"The width of the central maximum in single slit diffraction is 2 cm. The width of the first secondary maximum is:", options:["4 cm","2 cm","1 cm","0.5 cm"], answer:"C" },
  // Central max = 2*lambda*D/a, secondary max = lambda*D/a = half of central

  { id:23, section:"Interference & Diffraction", text:"In single slit diffraction with a = 0.1 mm, lambda = 600 nm and D = 1 m, the width of the central maximum is:", options:["1.2 cm","0.6 cm","2.4 cm","0.3 cm"], answer:"A" },
  // W = 2*lambda*D/a = 2*600e-9*1/0.1e-3 = 1.2e-2 m = 1.2 cm

  { id:24, section:"Interference & Diffraction", text:"In YDSE, all bright fringes have the same intensity. In diffraction:", options:["Same — all fringes are equally bright","Central max is brightest, others have decreasing intensity","All fringes are equally dim","Dark fringes are brighter"], answer:"B" },

  { id:25, section:"Interference & Diffraction", text:"If the slit width in single slit diffraction is doubled, the width of the central maximum:", options:["Doubles","Halves","Remains same","Quadruples"], answer:"B" },
  // W = 2*lambda*D/a, if a -> 2a, W -> W/2

  { id:26, section:"Interference & Diffraction", text:"The Fresnel distance for a slit of width 0.5 mm with light of wavelength 500 nm is:", options:["0.5 m","5 m","50 m","500 m"], answer:"A" },
  // zF = a²/lambda = (0.5e-3)²/500e-9 = 25e-8/5e-7 = 0.5 m

  { id:27, section:"Interference & Diffraction", text:"Which phenomenon cannot be explained by the wave theory of light?", options:["Interference","Diffraction","Polarization","Photoelectric effect"], answer:"D" },

  { id:28, section:"Interference & Diffraction", text:"In YDSE, interference fringes are observed. If one slit is completely covered, the pattern becomes:", options:["Brighter fringes","No fringes — uniform illumination","Single slit diffraction pattern","Same pattern with half intensity"], answer:"C" },

  { id:29, section:"Interference & Diffraction", text:"The resolving power of a telescope can be increased by:", options:["Increasing focal length","Increasing aperture of objective","Using longer wavelength","Decreasing aperture"], answer:"B" },

  { id:30, section:"Interference & Diffraction", text:"If the wavelength of light used in single slit diffraction is increased, the central maximum:", options:["Becomes narrower","Becomes wider","Remains same width","Disappears"], answer:"B" },
  // W = 2*lambda*D/a, lambda increases -> W increases

  // Mixed (31-40): All topics combined
  { id:31, section:"Mixed", text:"Unpolarised light of intensity I0 passes through a single polaroid. The transmitted intensity is:", options:["I0","I0/2","I0/4","Zero"], answer:"B" },

  { id:32, section:"Mixed", text:"The Brewster angle for a medium of refractive index sqrt(3) is:", options:["30 deg","45 deg","60 deg","53 deg"], answer:"C" },
  // tan(iB) = sqrt(3), iB = 60 deg

  { id:33, section:"Mixed", text:"In YDSE using monochromatic light, if the path difference at a point is lambda, the point has:", options:["Dark fringe","Bright fringe","Neither bright nor dark","Central maximum"], answer:"B" },
  // path diff = lambda = 1*lambda -> constructive -> bright fringe

  { id:34, section:"Mixed", text:"According to Huygens principle, during refraction of light from air to glass:", options:["Wavelength increases","Speed increases","Frequency changes","Speed decreases"], answer:"D" },

  { id:35, section:"Mixed", text:"When two polaroids are crossed (90 deg), a third polaroid at 45 deg is inserted between them. If incident unpolarised light has intensity I0, the final intensity is:", options:["I0/4","I0/8","I0/2","Zero"], answer:"B" },
  // I0 -> I0/2 (first) -> I0/2*cos²(45) = I0/4 (middle) -> I0/4*cos²(45) = I0/8 (last)

  { id:36, section:"Mixed", text:"In YDSE, the 4th bright fringe and the 5th dark fringe are separated by a distance equal to:", options:["beta/2","beta","3*beta/2","2*beta"], answer:"A" },
  // 4th bright: y = 4*beta; 5th dark: y = (2*5-1)*beta/2 = 9*beta/2 = 4.5*beta; distance = 0.5*beta = beta/2

  { id:37, section:"Mixed", text:"In Newton's corpuscular model, light travels faster in a denser medium. Huygens wave theory predicts light travels:", options:["Faster in denser medium","Same speed everywhere","Slower in denser medium","Only in vacuum"], answer:"C" },

  { id:38, section:"Mixed", text:"Two coherent sources of intensity I each produce maximum intensity at a point. The maximum intensity is:", options:["I","2I","4I","Zero"], answer:"C" },
  // Imax = (sqrt(I) + sqrt(I))² = 4I

  { id:39, section:"Mixed", text:"A plane wavefront falls on a convex lens. The emerging wavefront is:", options:["Plane","Spherical converging","Spherical diverging","Cylindrical"], answer:"B" },

  { id:40, section:"Mixed", text:"If the frequency of light in YDSE is doubled (keeping everything else same), the fringe width:", options:["Doubles","Halves","Remains same","Quadruples"], answer:"B" },
  // lambda = c/f, if f doubles, lambda halves, beta halves

  // Final Numerical (41-50): Board-exam style
  { id:41, section:"Final Numerical", text:"In YDSE, d = 0.2 mm, D = 2 m, lambda = 500 nm. A glass slab (mu = 1.5, t = 0.02 mm) is placed before S1. The number of fringes shifted is:", options:["10","20","5","15"], answer:"B" },
  // N = (mu-1)*t/lambda = 0.5*0.02e-3/500e-9 = 0.5*2e-5/5e-7 = 1e-5/5e-7 = 20

  { id:42, section:"Final Numerical", text:"Unpolarised light of intensity 32 W/m² passes through three polaroids with angles 0 deg, 30 deg, and 60 deg respectively. The final intensity is:", options:["6 W/m²","3 W/m²","9 W/m²","12 W/m²"], answer:"C" },
  // After P1: 32/2 = 16; After P2: 16*cos²(30) = 16*3/4 = 12; After P3: 12*cos²(30) = 12*3/4 = 9

  { id:43, section:"Final Numerical", text:"Light of wavelength 600 nm falls on a single slit of width 0.2 mm. The angular position of the 2nd minimum is:", options:["6 * 10⁻³ rad","3 * 10⁻³ rad","12 * 10⁻³ rad","1.5 * 10⁻³ rad"], answer:"A" },
  // sin(theta) = n*lambda/a = 2*600e-9/0.2e-3 = 1200e-9/2e-4 = 6e-3 rad

  { id:44, section:"Final Numerical", text:"In YDSE, the 5th bright fringe is at 2.5 cm from centre. The fringe width is:", options:["0.5 cm","5 mm","2.5 mm","1 cm"], answer:"B" },
  // beta = y5/5 = 2.5/5 = 0.5 cm = 5 mm

  { id:45, section:"Final Numerical", text:"Two coherent sources with intensity ratio 25:1 produce interference. The ratio (I<sub>max</sub> - I<sub>min</sub>)/(I<sub>max</sub> + I<sub>min</sub>) is:", options:["5/13","10/13","5/12","12/13"], answer:"A" },
  // a1:a2 = 5:1; Imax = 36, Imin = 16; (36-16)/(36+16) = 20/52 = 5/13

  { id:46, section:"Final Numerical", text:"The Brewster angle for a glass slab of refractive index 1.5 is approximately:", options:["48.6 deg","56.3 deg","60 deg","41.4 deg"], answer:"B" },
  // tan(iB) = 1.5, iB = 56.3 deg

  { id:47, section:"Final Numerical", text:"In YDSE, lambda = 500 nm, d = 0.5 mm, D = 1 m. The distance between the 3rd bright and 3rd dark fringe on the same side is:", options:["0.5 mm","1 mm","0.25 mm","2 mm"], answer:"A" },
  // 3rd bright: y = 3*beta = 3*1 = 3 mm; 3rd dark: y = (2*3-1)*beta/2 = 5/2*1 = 2.5 mm
  // beta = 500e-9*1/0.5e-3 = 1 mm; distance = 3 - 2.5 = 0.5 mm

  { id:48, section:"Final Numerical", text:"In single slit diffraction, light of lambda = 500 nm passes through a slit of width 0.5 mm. At what distance from the slit does spreading due to diffraction equal the slit width (Fresnel distance)?", options:["0.5 m","1.0 m","0.25 m","2.0 m"], answer:"A" },
  // zF = a²/lambda = (0.5e-3)²/500e-9 = 2.5e-7/5e-7 = 0.5 m

  { id:49, section:"Final Numerical", text:"Polarised light of intensity 16 W/m² passes through an analyser at 60 deg to the pass axis. The transmitted intensity is:", options:["8 W/m²","4 W/m²","12 W/m²","2 W/m²"], answer:"B" },
  // I = 16*cos²(60) = 16*1/4 = 4 W/m²

  { id:50, section:"Final Numerical", text:"In YDSE, when a thin mica sheet (mu = 1.6, t = 1.5 * 10⁻⁶ m) is placed over one slit, the central fringe shifts by 3 fringe widths. The wavelength of light used is:", options:["500 nm","300 nm","600 nm","450 nm"], answer:"B" }
  // N = (mu-1)*t/lambda => lambda = (mu-1)*t/N = 0.6*1.5e-6/3 = 0.9e-6/3 = 3e-7 = 300 nm
];

if (typeof module !== 'undefined') module.exports = { ch10Questions };
