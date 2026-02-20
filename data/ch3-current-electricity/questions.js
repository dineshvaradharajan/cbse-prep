// Current Electricity — Questions
const ch3Questions = [
  // Conceptual (1-10)
  { id:1, section:"Conceptual", text:"Electric current is defined as:", options:["Rate of flow of charge","Rate of flow of electrons","Force on charges","Energy per unit charge"], answer:"A" },
  { id:2, section:"Conceptual", text:"Conventional current flows from:", options:["Negative to positive terminal","Positive to negative terminal","In the direction of electron flow","In random directions"], answer:"B" },
  { id:3, section:"Conceptual", text:"Drift velocity of electrons in a conductor is typically of the order of:", options:["3 × 10⁸ m/s","10³ m/s","10⁻³ m/s","10⁶ m/s"], answer:"C" },
  { id:4, section:"Conceptual", text:"Ohm's law is valid for:", options:["All conductors","Only metallic conductors at constant temperature","Semiconductors","Electrolytes"], answer:"B" },
  { id:5, section:"Conceptual", text:"Resistivity of a conductor depends on:", options:["Length and area","Length only","Material and temperature","Dimensions of the conductor"], answer:"C" },
  { id:6, section:"Conceptual", text:"When temperature of a metallic conductor increases, its resistance:", options:["Decreases","Increases","Remains the same","First increases then decreases"], answer:"B" },
  { id:7, section:"Conceptual", text:"EMF of a cell is measured when:", options:["Maximum current is drawn","No current is drawn","Cell is fully discharged","Internal resistance is zero"], answer:"B" },
  { id:8, section:"Conceptual", text:"Kirchhoff's junction rule is based on conservation of:", options:["Energy","Momentum","Charge","Mass"], answer:"C" },
  { id:9, section:"Conceptual", text:"Kirchhoff's loop rule is based on conservation of:", options:["Charge","Energy","Momentum","Angular momentum"], answer:"B" },
  { id:10, section:"Conceptual", text:"A potentiometer is preferred over a voltmeter for measuring EMF because:", options:["It is cheaper","It draws no current at null point","It is more portable","It works faster"], answer:"B" },

  // Numerical (11-20)
  { id:11, section:"Numerical", text:"A charge of 120 C flows through a wire in 1 minute. The current is:", options:["2 A","120 A","0.5 A","60 A"], answer:"A" },
  { id:12, section:"Numerical", text:"A copper wire has n = 8.5 × 10²⁸ /m³, A = 1 × 10⁻⁶ m², I = 1.36 A. Drift velocity is approximately:", options:["1.0 × 10⁻⁴ m/s","1.0 × 10⁻³ m/s","1.0 × 10⁻² m/s","1.0 × 10⁻⁵ m/s"], answer:"A" },
  { id:13, section:"Numerical", text:"A wire of resistance 10 Ω is stretched to double its length. New resistance is:", options:["20 Ω","40 Ω","5 Ω","10 Ω"], answer:"B" },
  { id:14, section:"Numerical", text:"Resistance of a wire at 0°C is 100 Ω. If α = 0.004/°C, resistance at 100°C is:", options:["104 Ω","140 Ω","400 Ω","100.4 Ω"], answer:"B" },
  { id:15, section:"Numerical", text:"A cell of EMF 2 V and internal resistance 1 Ω is connected to a 4 Ω resistor. Current is:", options:["0.5 A","0.4 A","2 A","1 A"], answer:"B" },
  { id:16, section:"Numerical", text:"In the above question (Q15), terminal voltage across the cell is:", options:["2 V","1.6 V","1 V","0.4 V"], answer:"B" },
  { id:17, section:"Numerical", text:"Three resistors of 6 Ω each are connected in parallel. Equivalent resistance is:", options:["18 Ω","6 Ω","2 Ω","9 Ω"], answer:"C" },
  { id:18, section:"Numerical", text:"Two resistors 4 Ω and 12 Ω are connected in parallel. Equivalent resistance is:", options:["3 Ω","16 Ω","8 Ω","48 Ω"], answer:"A" },
  { id:19, section:"Numerical", text:"A 2 m long wire has resistance 8 Ω. Resistance of 0.5 m of the same wire is:", options:["4 Ω","2 Ω","1 Ω","16 Ω"], answer:"B" },
  { id:20, section:"Numerical", text:"Current I = 5 A flows through a wire of cross-section 2.5 × 10⁻⁶ m². Current density J is:", options:["2 × 10⁶ A/m²","5 × 10⁶ A/m²","2 × 10⁵ A/m²","12.5 A/m²"], answer:"A" },

  // Kirchhoff's & Bridges (21-30)
  { id:21, section:"Kirchhoff's & Bridges", text:"At a junction, currents of 3 A and 5 A enter. If one outgoing current is 6 A, the other outgoing current is:", options:["2 A","8 A","4 A","1 A"], answer:"A" },
  { id:22, section:"Kirchhoff's & Bridges", text:"In a Wheatstone bridge, P = 100 Ω, Q = 200 Ω, R = 40 Ω. For balance, S equals:", options:["80 Ω","20 Ω","400 Ω","50 Ω"], answer:"A" },
  { id:23, section:"Kirchhoff's & Bridges", text:"In a meter bridge, R = 10 Ω and null point is at 40 cm. Unknown resistance S is:", options:["15 Ω","10 Ω","6.67 Ω","20 Ω"], answer:"A" },
  { id:24, section:"Kirchhoff's & Bridges", text:"In a potentiometer, balancing length for a cell is 60 cm. If the wire length is 1 m and potential drop across it is 2 V, EMF of the cell is:", options:["1.2 V","0.6 V","2 V","3.33 V"], answer:"A" },
  { id:25, section:"Kirchhoff's & Bridges", text:"Two cells of EMF 1.5 V and 1.0 V give balancing lengths of 75 cm and 50 cm respectively on a potentiometer. The ratio is consistent because:", options:["ε₁/ε₂ = l₁/l₂ = 75/50 = 1.5","The cells have equal internal resistance","The wire is non-uniform","The galvanometer is insensitive"], answer:"A" },
  { id:26, section:"Kirchhoff's & Bridges", text:"In a potentiometer experiment, l₁ = 76 cm (key open), l₂ = 60 cm (key closed), R = 10 Ω. Internal resistance of the cell is:", options:["2.67 Ω","7.6 Ω","1.6 Ω","6 Ω"], answer:"A" },
  { id:27, section:"Kirchhoff's & Bridges", text:"A Wheatstone bridge is most sensitive when:", options:["All four resistances are very large","All four resistances are nearly equal","One resistance is much larger","The galvanometer has high resistance"], answer:"B" },
  { id:28, section:"Kirchhoff's & Bridges", text:"In a balanced Wheatstone bridge, the current through the galvanometer is:", options:["Maximum","Minimum but not zero","Zero","Equal to the main current"], answer:"C" },
  { id:29, section:"Kirchhoff's & Bridges", text:"If in a meter bridge the balance point is at 20 cm, and R = 5 Ω, then S equals:", options:["20 Ω","15 Ω","10 Ω","25 Ω"], answer:"A" },
  { id:30, section:"Kirchhoff's & Bridges", text:"For a potentiometer to work, the EMF of the driver cell must be:", options:["Equal to the unknown EMF","Less than the unknown EMF","Greater than the unknown EMF","Exactly double the unknown EMF"], answer:"C" },

  // Mixed (31-40)
  { id:31, section:"Mixed", text:"SI unit of resistivity is:", options:["Ω","Ω/m","Ω·m","Ω·m²"], answer:"C" },
  { id:32, section:"Mixed", text:"If the length of a wire is halved and radius is doubled, its resistance becomes:", options:["R/8","R/4","R/2","2R"], answer:"A" },
  { id:33, section:"Mixed", text:"Electric current is a:", options:["Vector quantity","Scalar quantity","Tensor quantity","Neither scalar nor vector"], answer:"B" },
  { id:34, section:"Mixed", text:"The colour code bands Brown, Black, Red, Gold represent:", options:["10 Ω ± 5%","1 kΩ ± 5%","100 Ω ± 5%","10 kΩ ± 5%"], answer:"B" },
  { id:35, section:"Mixed", text:"5 cells each of EMF 1.5 V and internal resistance 0.5 Ω are connected in series to a 5 Ω resistor. Current is:", options:["1.5 A","1 A","0.5 A","7.5 A"], answer:"B" },
  { id:36, section:"Mixed", text:"During charging of a cell, the terminal voltage is:", options:["Less than EMF","Equal to EMF","Greater than EMF","Zero"], answer:"C" },
  { id:37, section:"Mixed", text:"Relaxation time in the drift velocity formula represents:", options:["Time between two successive collisions (average)","Time for one complete electron orbit","Time for current to become steady","Period of AC"], answer:"A" },
  { id:38, section:"Mixed", text:"When a wire of resistance R is cut into 3 equal parts and connected in parallel, the equivalent resistance is:", options:["R/9","R/3","3R","9R"], answer:"A" },
  { id:39, section:"Mixed", text:"In a meter bridge, the balance point shifts to the left when:", options:["R is increased","S is increased","R is decreased","Temperature increases"], answer:"C" },
  { id:40, section:"Mixed", text:"Mobility of charge carriers is defined as:", options:["Drift velocity per unit electric field","Current per unit area","Charge per unit time","Resistance per unit length"], answer:"A" },

  // Final Numerical (41-50)
  { id:41, section:"Final Numerical", text:"A wire of resistance 12 Ω is bent into a circle. Effective resistance between two diametrically opposite points is:", options:["12 Ω","6 Ω","3 Ω","24 Ω"], answer:"C" },
  { id:42, section:"Final Numerical", text:"Two cells of EMF 1 V and 2 V with internal resistances 1 Ω and 2 Ω respectively are connected in parallel (same polarity). The equivalent EMF is:", options:["1.5 V","4/3 V","3/2 V","5/3 V"], answer:"B" },
  { id:43, section:"Final Numerical", text:"In Q42, the equivalent internal resistance is:", options:["3 Ω","1.5 Ω","2/3 Ω","1 Ω"], answer:"C" },
  { id:44, section:"Final Numerical", text:"A potentiometer wire of length 100 cm has a resistance of 10 Ω. It is connected in series with a resistance of 40 Ω and a battery of EMF 2 V. The potential gradient along the wire is:", options:["0.02 V/cm","0.04 V/cm","0.004 V/cm","0.4 V/cm"], answer:"C" },
  { id:45, section:"Final Numerical", text:"In Q44, the balancing length for a cell of EMF 0.2 V is:", options:["20 cm","40 cm","50 cm","10 cm"], answer:"C" },
  { id:46, section:"Final Numerical", text:"A Wheatstone bridge has P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω. The bridge is:", options:["Balanced","Unbalanced with current from B to D","Unbalanced with current from D to B","Cannot be determined"], answer:"A" },
  { id:47, section:"Final Numerical", text:"Six 12 Ω resistors are connected to form a cube. Resistance between two diagonally opposite corners is:", options:["12 Ω","10 Ω","6 Ω","5 Ω"], answer:"B" },
  { id:48, section:"Final Numerical", text:"A cell of EMF 1.5 V gives a balance point at 75 cm on a potentiometer. When a 10 Ω resistance is connected across the cell, balance point shifts to 65 cm. Internal resistance of the cell is:", options:["1.54 Ω","0.65 Ω","1.0 Ω","0.75 Ω"], answer:"A" },
  { id:49, section:"Final Numerical", text:"A meter bridge is balanced at 36 cm with R in the left gap. If R = 9 Ω, then S is:", options:["16 Ω","12 Ω","4 Ω","25 Ω"], answer:"A" },
  { id:50, section:"Final Numerical", text:"Current through a wire is 2 A. Number of electrons crossing a cross-section per second is:", options:["1.25 × 10¹⁹","3.2 × 10¹⁹","1.6 × 10¹⁹","6.25 × 10¹⁸"], answer:"A" }
];
