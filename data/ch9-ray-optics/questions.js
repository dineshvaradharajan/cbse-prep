// Ray Optics and Optical Instruments — Questions
const ch9Questions = [
  // ============================================================
  // Conceptual (1-10): Reflection, refraction, mirrors, lenses basics
  // ============================================================
  { id:1, section:"Conceptual", text:"A convex mirror is used as a rear-view mirror because it:", options:["Forms a real image","Has a longer focal length","Produces magnified images","Forms a virtual, erect, diminished image with a wider field of view"], answer:"D" },
  { id:2, section:"Conceptual", text:"Total internal reflection can occur when light travels from:", options:["Rarer to denser medium","Denser to rarer medium","Any medium to vacuum","Vacuum to any medium"], answer:"B" },
  { id:3, section:"Conceptual", text:"The image formed by a concave mirror when the object is placed between the pole and the focus is:", options:["Real, inverted, magnified","Real, inverted, diminished","Virtual, erect, diminished","Virtual, erect, magnified"], answer:"D" },
  { id:4, section:"Conceptual", text:"When light passes from a denser medium to a rarer medium, it bends:", options:["Towards the normal","Away from the normal","Along the normal","Does not bend at all"], answer:"B" },
  { id:5, section:"Conceptual", text:"The refractive index of a medium depends on:", options:["The angle of incidence","The wavelength of light","The intensity of light","The area of the surface"], answer:"B" },
  { id:6, section:"Conceptual", text:"A ray of light passes through a glass slab. The emergent ray is:", options:["Deviated and laterally shifted","Converged to a point","Parallel to the incident ray but laterally shifted","Completely reflected back"], answer:"C" },
  { id:7, section:"Conceptual", text:"The power of a lens is negative. The lens is:", options:["Convex","Concave","Plano-convex","Bi-convex"], answer:"B" },
  { id:8, section:"Conceptual", text:"In a compound microscope, the intermediate image formed by the objective is:", options:["Virtual, erect, magnified","Virtual, inverted, diminished","Real, erect, diminished","Real, inverted, magnified"], answer:"D" },
  { id:9, section:"Conceptual", text:"In a telescope, the objective lens has:", options:["Small focal length and small aperture","Small focal length and large aperture","Large focal length and small aperture","Large focal length and large aperture"], answer:"D" },
  { id:10, section:"Conceptual", text:"Which of the following does NOT change when light undergoes refraction?", options:["Speed","Wavelength","Frequency","Direction"], answer:"C" },

  // ============================================================
  // Numerical (11-20): Mirror and refraction calculations
  // ============================================================
  { id:11, section:"Numerical", text:"An object is placed 30 cm in front of a concave mirror of focal length 20 cm. The image distance is:", options:["-60 cm","-40 cm","+60 cm","+40 cm"], answer:"A" },
  // 1/v + 1/u = 1/f => 1/v + 1/(-30) = 1/(-20) => 1/v = -1/20 + 1/30 = (-3+2)/60 = -1/60 => v = -60 cm

  { id:12, section:"Numerical", text:"The magnification produced by a concave mirror when the object is at 30 cm and image is at 60 cm (both in front) is:", options:["+2","-2","+0.5","-0.5"], answer:"B" },
  // m = -v/u = -(-60)/(-30) = -2

  { id:13, section:"Numerical", text:"A light ray passes from air into glass (n = 1.5) at an angle of incidence 30 degrees. The angle of refraction is approximately:", options:["19.5 degrees","20 degrees","22 degrees","15 degrees"], answer:"A" },
  // sin 30 = 1.5 sin r => 0.5 = 1.5 sin r => sin r = 1/3 = 0.333 => r = 19.47 degrees approx 19.5 degrees

  { id:14, section:"Numerical", text:"The critical angle for a medium of refractive index sqrt(2) is:", options:["30 degrees","45 degrees","60 degrees","90 degrees"], answer:"B" },
  // sin ic = 1/sqrt(2) => ic = 45 degrees

  { id:15, section:"Numerical", text:"A tank of water (n = 4/3) is 12 cm deep. The apparent depth when viewed from above is:", options:["16 cm","8 cm","9 cm","10 cm"], answer:"C" },
  // Apparent depth = real depth / n = 12 / (4/3) = 12 x 3/4 = 9 cm

  { id:16, section:"Numerical", text:"An object is placed 15 cm in front of a convex mirror of focal length 20 cm. The image distance is:", options:["+8.57 cm","-8.57 cm","+60 cm","-60 cm"], answer:"A" },
  // 1/v + 1/(-15) = 1/(+20) => 1/v = 1/20 + 1/15 = (3+4)/60 = 7/60 => v = +8.57 cm

  { id:17, section:"Numerical", text:"Two plane mirrors are placed facing each other at an angle of 60 degrees. The number of images of an object placed between them is:", options:["5","6","4","Infinite"], answer:"A" },
  // n = 360/60 - 1 = 6 - 1 = 5

  { id:18, section:"Numerical", text:"The focal length of a concave mirror is 15 cm. The radius of curvature is:", options:["7.5 cm","30 cm","15 cm","45 cm"], answer:"B" },
  // R = 2f = 2 x 15 = 30 cm

  { id:19, section:"Numerical", text:"A ray of light is incident on a plane mirror at an angle of 35 degrees with the mirror surface. The angle of reflection is:", options:["35 degrees","55 degrees","70 degrees","45 degrees"], answer:"B" },
  // Angle with mirror = 35 deg, so angle with normal = 90 - 35 = 55 deg = angle of incidence = angle of reflection

  { id:20, section:"Numerical", text:"If the speed of light in vacuum is 3 x 10⁸ m/s and in a medium it is 2 x 10⁸ m/s, the refractive index of the medium is:", options:["1.5","0.67","2.0","1.33"], answer:"A" },
  // n = c/v = 3e8/2e8 = 1.5

  // ============================================================
  // Lenses & Prisms (21-30)
  // ============================================================
  { id:21, section:"Lenses & Prisms", text:"An object is placed 20 cm from a convex lens of focal length 15 cm. The image distance is:", options:["+60 cm","+30 cm","-60 cm","-30 cm"], answer:"A" },
  // 1/v - 1/(-20) = 1/15 => 1/v = 1/15 - 1/20 = (4-3)/60 = 1/60 => v = +60 cm

  { id:22, section:"Lenses & Prisms", text:"A convex lens of focal length 10 cm is placed in contact with a concave lens of focal length 15 cm. The power of the combination is:", options:["-3.33 D","+10 D","+3.33 D","+1.67 D"], answer:"C" },
  // P = P1 + P2 = 1/0.1 + 1/(-0.15) = 10 - 6.67 = +3.33 D

  { id:23, section:"Lenses & Prisms", text:"The magnification produced by a convex lens when an object at 20 cm forms an image at 60 cm is:", options:["-3","+3","-1/3","+1/3"], answer:"A" },
  // m = v/u = 60/(-20) = -3 (but u = -20, v = +60 => m = v/u = +60/(-20) = -3)

  { id:24, section:"Lenses & Prisms", text:"A thin prism of angle 5 degrees and refractive index 1.6 produces a deviation of:", options:["5 degrees","2 degrees","8 degrees","3 degrees"], answer:"D" },
  // delta = (n-1)A = (1.6-1)(5) = 0.6 x 5 = 3 degrees

  { id:25, section:"Lenses & Prisms", text:"The angle of minimum deviation for a prism of angle 60 degrees and refractive index sqrt(2) is:", options:["45 degrees","60 degrees","30 degrees","40 degrees"], answer:"C" },
  // n = sin[(A+dm)/2]/sin(A/2) => sqrt(2) = sin[(60+dm)/2]/sin30 => sqrt(2) x 0.5 = sin[(60+dm)/2]
  // sin[(60+dm)/2] = 0.7071 => (60+dm)/2 = 45 => dm = 30 degrees

  { id:26, section:"Lenses & Prisms", text:"A convex lens has a focal length of 25 cm. Its power is:", options:["+2.5 D","+4 D","+0.25 D","+40 D"], answer:"B" },
  // P = 1/f = 1/0.25 = +4 D

  { id:27, section:"Lenses & Prisms", text:"An object is placed at the focus of a convex lens. The image is formed at:", options:["The focus on the other side","Infinity","The centre of curvature","The same position as the object"], answer:"B" },

  { id:28, section:"Lenses & Prisms", text:"A lens has a power of -2.5 D. Its focal length is:", options:["+40 cm","-25 cm","+25 cm","-40 cm"], answer:"D" },
  // f = 1/P = 1/(-2.5) = -0.4 m = -40 cm

  { id:29, section:"Lenses & Prisms", text:"For a glass prism (n = 1.5) in the position of minimum deviation with prism angle A = 60 degrees, the angle of incidence is:", options:["48.6 degrees","30 degrees","60 degrees","41.8 degrees"], answer:"A" },
  // n = sin[(A+dm)/2]/sin(A/2) => 1.5 = sin[(60+dm)/2]/sin30 => sin[(60+dm)/2] = 0.75
  // (60+dm)/2 = 48.59 deg => 60+dm = 97.18 => dm = 37.18 deg
  // At min dev: i = (A+dm)/2 = 97.18/2 = 48.59 approx 48.6 degrees

  { id:30, section:"Lenses & Prisms", text:"Two thin lenses of power +5 D and -3 D are placed in contact. The focal length of the combination is:", options:["25 cm","-50 cm","50 cm","100 cm"], answer:"C" },
  // P = 5 + (-3) = +2 D => f = 1/2 = 0.5 m = 50 cm

  // ============================================================
  // Mixed (31-40): Conceptual + numerical mix
  // ============================================================
  { id:31, section:"Mixed", text:"A fish inside water (n = 4/3) looks at a bird directly above. The bird appears to the fish to be at a distance:", options:["Greater than the actual distance","Less than the actual distance","Equal to the actual distance","Depends on the angle"], answer:"A" },
  // Light going from rarer (air) to denser (water): apparent height = n x real height. So bird appears farther.

  { id:32, section:"Mixed", text:"The magnifying power of an astronomical telescope in normal adjustment with objective focal length 100 cm and eyepiece focal length 5 cm is:", options:["+20","-10","-20","+10"], answer:"C" },
  // m = -fo/fe = -100/5 = -20

  { id:33, section:"Mixed", text:"A biconvex lens with equal radii of curvature R and refractive index 1.5 has a focal length of:", options:["R/2","2R","R/4","R"], answer:"D" },
  // 1/f = (1.5-1)(1/R - 1/(-R)) = 0.5(2/R) = 1/R => f = R

  { id:34, section:"Mixed", text:"The magnifying power of a compound microscope with f<sub>o</sub> = 1 cm, f<sub>e</sub> = 5 cm, and tube length L = 15 cm (distance between focal points) in normal adjustment is:", options:["-100","-75","-25","-50"], answer:"B" },
  // m = -L*D/(fo*fe) = -(15 x 25)/(1 x 5) = -375/5 = -75

  { id:35, section:"Mixed", text:"A convex lens of focal length 20 cm is placed in a liquid of refractive index equal to the refractive index of the lens. The lens will:", options:["Act as a converging lens","Act as a diverging lens","Have no refracting effect (behave as a plane glass)","Have double the power"], answer:"C" },
  // When n<sub>lens</sub> = n<sub>medium</sub>, (n<sub>lens</sub>/n<sub>medium</sub> - 1) = 0 => 1/f = 0 => f = infinity. No refraction.

  { id:36, section:"Mixed", text:"A concave lens of focal length 20 cm forms an image at 10 cm from the lens. The object distance is:", options:["-10 cm","-15 cm","-20 cm","-30 cm"], answer:"C" },
  // Concave lens: f = -20 cm, v = -10 cm (virtual image on same side as object)
  // 1/v - 1/u = 1/f => 1/(-10) - 1/u = 1/(-20) => -1/u = -1/20 + 1/10 = 1/20 => u = -20 cm

  { id:37, section:"Mixed", text:"Optical fibres work on the principle of:", options:["Refraction","Diffraction","Total internal reflection","Scattering"], answer:"C" },

  { id:38, section:"Mixed", text:"A convex mirror of focal length 15 cm forms an image that is one-third the size of the object. The object distance is:", options:["-30 cm","-15 cm","-45 cm","-10 cm"], answer:"A" },
  // m = +1/3 (convex mirror, always erect diminished). m = -v/u => 1/3 = -v/u => v = -u/3
  // 1/v + 1/u = 1/f => 1/(-u/3) + 1/u = 1/15 => -3/u + 1/u = 1/15 => -2/u = 1/15 => u = -30 cm

  { id:39, section:"Mixed", text:"The dispersive power of a medium depends on:", options:["The angle of the prism","The refractive indices for different wavelengths","The thickness of the prism","The intensity of incident light"], answer:"B" },

  { id:40, section:"Mixed", text:"An object is placed 10 cm from a convex lens of focal length 10 cm. The image is formed:", options:["At 20 cm on the same side","At infinity","At 10 cm on the other side","At 20 cm on the other side"], answer:"B" },
  // Object at focus of convex lens: image at infinity.
  // 1/v - 1/(-10) = 1/10 => 1/v = 1/10 - 1/10 = 0 => v = infinity

  // ============================================================
  // Final Numerical (41-50): Challenging numericals
  // ============================================================
  { id:41, section:"Final Numerical", text:"A concave mirror produces a real image 3 times the size of the object. If the object is at 20 cm from the mirror, the focal length is:", options:["15 cm","10 cm","20 cm","30 cm"], answer:"A" },
  // Real image: m = -3 (inverted). m = -v/u => -3 = -v/(-20) => -3 = v/20 => v = -60 cm
  // 1/f = 1/v + 1/u = 1/(-60) + 1/(-20) = (-1-3)/60 = -4/60 => f = -15 cm. |f| = 15 cm

  { id:42, section:"Final Numerical", text:"A convex lens of focal length 20 cm produces a virtual image when the object is placed at:", options:["25 cm from the lens","40 cm from the lens","10 cm from the lens","At infinity"], answer:"C" },
  // Virtual image when object is between F and lens. f = 20 cm, so object within 20 cm. Only option A (10 cm) qualifies.

  { id:43, section:"Final Numerical", text:"Light enters from air into glass (n = 1.5) at an angle of incidence 60 degrees. The angle of refraction is:", options:["30 degrees","40 degrees","19.5 degrees","35.3 degrees"], answer:"D" },
  // sin 60 = 1.5 sin r => sin r = 0.866/1.5 = 0.5774 => r = 35.26 approx 35.3 degrees

  { id:44, section:"Final Numerical", text:"A convex lens of focal length 30 cm forms a real image when the object is at 60 cm. If the object is moved 15 cm closer to the lens, the new image distance is:", options:["120 cm","90 cm","45 cm","75 cm"], answer:"B" },
  // Original: u = -60, f = 30. New u = -60 + 15 = -45 cm.
  // 1/v - 1/(-45) = 1/30 => 1/v = 1/30 - 1/45 = (3-2)/90 = 1/90 => v = 90 cm

  { id:45, section:"Final Numerical", text:"A double convex lens (n = 1.5) has both radii of curvature 20 cm. Its focal length is:", options:["10 cm","40 cm","20 cm","30 cm"], answer:"C" },
  // 1/f = (1.5-1)(1/20 - 1/(-20)) = 0.5 x 2/20 = 0.5 x 0.1 = 1/20 => f = 20 cm

  { id:46, section:"Final Numerical", text:"The image of an object placed at 40 cm from a convex lens of focal length 30 cm is at:", options:["+60 cm","-120 cm","+120 cm","-60 cm"], answer:"C" },
  // 1/v = 1/30 + 1/(-40) = (4-3)/120 = 1/120... wait: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u = 1/30 + 1/(-40) = (4-3)/120 = 1/120 => v = 120 cm

  { id:47, section:"Final Numerical", text:"A concave mirror of focal length 10 cm forms an image of magnification -2. The object distance is:", options:["20 cm","10 cm","15 cm","30 cm"], answer:"C" },
  // m = -v/u = -2 => v = 2u. Since concave mirror real image: u = -ve, v = -ve.
  // v = 2u (keeping signs: if u = -a, v = -2a). 1/v + 1/u = 1/f => 1/(-2a) + 1/(-a) = 1/(-10)
  // -1/(2a) - 1/a = -1/10 => -3/(2a) = -1/10 => a = 15 => u = -15 cm, |u| = 15 cm

  { id:48, section:"Final Numerical", text:"A glass prism of angle 60 degrees has a refractive index of 1.5. The minimum deviation is approximately:", options:["30 degrees","42 degrees","48 degrees","37 degrees"], answer:"D" },
  // n = sin[(60+dm)/2]/sin30 => 1.5 = sin[(60+dm)/2]/0.5 => sin[(60+dm)/2] = 0.75
  // (60+dm)/2 = 48.59 => 60+dm = 97.18 => dm = 37.18 approx 37 degrees

  { id:49, section:"Final Numerical", text:"A lens of focal length +50 cm and a lens of focal length -25 cm are placed in contact. The focal length and nature of the combination are:", options:["+50 cm, converging","-25 cm, diverging","-50 cm, diverging","+75 cm, converging"], answer:"C" },
  // 1/f = 1/50 + 1/(-25) = 1/50 - 2/50 = -1/50 => f = -50 cm (diverging)

  { id:50, section:"Final Numerical", text:"An astronomical telescope has an objective of focal length 150 cm and an eyepiece of focal length 5 cm. Its magnifying power in normal adjustment and the tube length are:", options:["-30, 145 cm","-25, 155 cm","-30, 155 cm","-25, 150 cm"], answer:"C" }
  // m = -fo/fe = -150/5 = -30. Tube length = fo + fe = 150 + 5 = 155 cm
];
