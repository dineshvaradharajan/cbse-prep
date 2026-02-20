// Semiconductor Electronics — Questions
const ch14Questions = [
  // Conceptual (1-10): Energy bands, intrinsic/extrinsic, p-n junction basics
  { id:1, section:"Conceptual", text:"The energy band gap of silicon at room temperature is approximately:", options:["0.67 eV","1.1 eV","5.47 eV","3.0 eV"], answer:"B" },
  { id:2, section:"Conceptual", text:"In an intrinsic semiconductor at room temperature:", options:["ne > nh","ne < nh","ne = nh","ne = 0"], answer:"C" },
  { id:3, section:"Conceptual", text:"When a pentavalent impurity is added to silicon, the resulting semiconductor is:", options:["p-type","n-type","Intrinsic","Insulator"], answer:"B" },
  { id:4, section:"Conceptual", text:"In a p-type semiconductor, the majority carriers are:", options:["Electrons","Protons","Holes","Neutrons"], answer:"C" },
  { id:5, section:"Conceptual", text:"The depletion region in a p-n junction contains:", options:["Only free electrons","Only holes","Mobile charge carriers","Immobile ions"], answer:"D" },
  { id:6, section:"Conceptual", text:"The barrier potential of a germanium p-n junction diode is approximately:", options:["0.7 V","0.3 V","1.1 V","0.1 V"], answer:"B" },
  { id:7, section:"Conceptual", text:"An n-type semiconductor is electrically:", options:["Positively charged","Negatively charged","Neutral","Depends on doping level"], answer:"C" },
  { id:8, section:"Conceptual", text:"Which of the following is NOT a trivalent dopant?", options:["Boron","Aluminium","Phosphorus","Gallium"], answer:"C" },
  { id:9, section:"Conceptual", text:"In forward bias of a p-n junction, the depletion region:", options:["Widens","Narrows","Remains same","Disappears completely"], answer:"B" },
  { id:10, section:"Conceptual", text:"The mass action law for semiconductors states:", options:["ne + nh = ni","ne - nh = ni","ne x nh = ni²","ne / nh = ni"], answer:"C" },

  // Numerical (11-20): Diode, rectifier, Zener calculations
  { id:11, section:"Numerical", text:"A silicon diode has a reverse saturation current of 20 uA. The forward current at 0.7 V applied voltage (at room temperature, kT/e = 26 mV) is approximately:", options:["Very large (mA range)","20 uA","Zero","200 uA"], answer:"A" },
  { id:12, section:"Numerical", text:"In a half-wave rectifier with input frequency 50 Hz, the ripple frequency of the output is:", options:["25 Hz","50 Hz","100 Hz","150 Hz"], answer:"B" },
  { id:13, section:"Numerical", text:"In a full-wave rectifier with input frequency 50 Hz, the ripple frequency is:", options:["25 Hz","50 Hz","100 Hz","200 Hz"], answer:"C" },
  { id:14, section:"Numerical", text:"A Zener diode has breakdown voltage 6 V. If the input voltage is 10 V and the series resistance is 200 ohm, the current through the series resistance is:", options:["20 mA","30 mA","50 mA","10 mA"], answer:"A" },
  { id:15, section:"Numerical", text:"For the Zener regulator in Q14, if the load resistance is 1 kohm, the load current is:", options:["6 mA","10 mA","20 mA","4 mA"], answer:"A" },
  { id:16, section:"Numerical", text:"For Q14 and Q15, the current through the Zener diode is:", options:["14 mA","20 mA","6 mA","26 mA"], answer:"A" },
  { id:17, section:"Numerical", text:"If a half-wave rectifier has peak input voltage Vm = 311 V, the average DC output voltage is approximately:", options:["99 V","198 V","155.5 V","311 V"], answer:"A" },
  { id:18, section:"Numerical", text:"A full-wave rectifier has peak voltage 200 V. The DC output voltage is:", options:["63.7 V","127.4 V","200 V","100 V"], answer:"B" },
  { id:19, section:"Numerical", text:"The dynamic resistance of a diode at an operating point where a change of 0.2 V causes a current change of 10 mA is:", options:["20 ohm","200 ohm","2 ohm","0.02 ohm"], answer:"A" },
  { id:20, section:"Numerical", text:"In an intrinsic semiconductor, ni = 1.5 x 10¹⁶ /m³. After doping with a donor impurity, ne = 4.5 x 10²² /m³. The hole concentration nh is:", options:["5 x 10⁹ /m³","4.5 x 10²² /m³","1.5 x 10¹⁶ /m³","3 x 10¹⁰ /m³"], answer:"A" },

  // Diodes & Transistors (21-30)
  { id:21, section:"Diodes & Transistors", text:"An LED converts:", options:["Light energy to electrical energy","Electrical energy to light energy","Thermal energy to light energy","Light energy to thermal energy"], answer:"B" },
  { id:22, section:"Diodes & Transistors", text:"A photodiode is operated in:", options:["Forward bias","Reverse bias","No bias","Both forward and reverse"], answer:"B" },
  { id:23, section:"Diodes & Transistors", text:"A solar cell works without any external bias because:", options:["It has no p-n junction","The built-in field separates photogenerated carriers","It uses thermal energy","It is made of metal"], answer:"B" },
  { id:24, section:"Diodes & Transistors", text:"In a transistor, the base region is:", options:["Thick and heavily doped","Thin and lightly doped","Thick and lightly doped","Thin and heavily doped"], answer:"B" },
  { id:25, section:"Diodes & Transistors", text:"In an npn transistor in active mode, the emitter-base junction is:", options:["Forward biased","Reverse biased","Unbiased","Alternately biased"], answer:"A" },
  { id:26, section:"Diodes & Transistors", text:"If alpha = 0.98 for a transistor, the value of beta is:", options:["49","98","0.98","0.49"], answer:"A" },
  { id:27, section:"Diodes & Transistors", text:"In a common-emitter amplifier, the phase difference between input and output is:", options:["0 degrees","90 degrees","180 degrees","270 degrees"], answer:"C" },
  { id:28, section:"Diodes & Transistors", text:"If IC = 4.9 mA and IB = 100 uA in a CE transistor, the value of beta is:", options:["49","4.9","490","0.49"], answer:"A" },
  { id:29, section:"Diodes & Transistors", text:"The current gain alpha of a transistor is always:", options:["Greater than 1","Equal to 1","Less than 1 but positive","Negative"], answer:"C" },
  { id:30, section:"Diodes & Transistors", text:"A transistor acts as a switch when it operates in:", options:["Active region only","Cutoff and saturation regions","Forward bias only","Reverse bias only"], answer:"B" },

  // Mixed (31-40)
  { id:31, section:"Mixed", text:"NAND gate is called a universal gate because:", options:["It is most commonly used","Any logic gate can be realized using NAND gates alone","It has the simplest circuit","It consumes least power"], answer:"B" },
  { id:32, section:"Mixed", text:"The Boolean expression for a NAND gate with inputs A and B is:", options:["A + B","A . B","(A . B)'","(A + B)'"], answer:"C" },
  { id:33, section:"Mixed", text:"According to De Morgan's first theorem, (A + B)' equals:", options:["A' + B'","A' . B'","A . B","A + B"], answer:"B" },
  { id:34, section:"Mixed", text:"If both inputs of a NOR gate are connected together, it functions as:", options:["AND gate","OR gate","NOT gate","NAND gate"], answer:"C" },
  { id:35, section:"Mixed", text:"The output of an OR gate is 0 only when:", options:["Both inputs are 1","Both inputs are 0","One input is 0","One input is 1"], answer:"B" },
  { id:36, section:"Mixed", text:"Which material is used for making blue LEDs?", options:["GaAsP","GaP","InGaN (Gallium Nitride based)","GaAs"], answer:"C" },
  { id:37, section:"Mixed", text:"The width of the depletion region in a p-n junction is more on the side which is:", options:["More heavily doped","Less heavily doped","p-type always","n-type always"], answer:"B" },
  { id:38, section:"Mixed", text:"The Zener diode is used as a voltage regulator because in the breakdown region:", options:["Current is constant","Voltage is constant","Both current and voltage are constant","Resistance is zero"], answer:"B" },
  { id:39, section:"Mixed", text:"In a CE transistor amplifier, the voltage gain depends on:", options:["Only beta","Only RC","beta and the ratio RC/RBE","Only the input voltage"], answer:"C" },
  { id:40, section:"Mixed", text:"The conductivity of a semiconductor increases with increase in temperature because:", options:["Drift velocity increases","Number of charge carriers increases","Relaxation time increases","All of the above"], answer:"B" },

  // Final Numerical (41-50): Board-exam style
  { id:41, section:"Final Numerical", text:"A transistor has alpha = 0.95. If the emitter current is 10 mA, the base current is:", options:["0.5 mA","9.5 mA","0.95 mA","1.0 mA"], answer:"A" },
  { id:42, section:"Final Numerical", text:"For the transistor in Q41, the collector current is:", options:["0.5 mA","9.5 mA","10 mA","10.5 mA"], answer:"B" },
  { id:43, section:"Final Numerical", text:"In a CE amplifier, beta = 100 and the collector resistance RC = 2 kohm. If the input resistance is 1 kohm, the voltage gain is:", options:["100","200","50","400"], answer:"B" },
  { id:44, section:"Final Numerical", text:"For Q43, the power gain of the amplifier is:", options:["200","2000","20000","100"], answer:"C" },
  { id:45, section:"Final Numerical", text:"A Zener diode of breakdown voltage 9.1 V is connected in a regulator circuit with series resistance 5 kohm. If the input voltage varies from 12 V to 16 V, the minimum current through the Zener is:", options:["0.58 mA","1.38 mA","5 mA","9.1 mA"], answer:"A" },
  { id:46, section:"Final Numerical", text:"For Q45, the maximum current through the Zener (with no load) when input is 16 V is:", options:["0.58 mA","1.38 mA","3.18 mA","6.9 mA"], answer:"B" },
  { id:47, section:"Final Numerical", text:"In an n-type silicon, the electron concentration is 10¹⁷ /cm³. If ni for Si is 1.5 x 10¹⁰ /cm³, the hole concentration is:", options:["2.25 x 10³ /cm³","1.5 x 10¹⁰ /cm³","10¹⁷ /cm³","4.5 x 10¹³ /cm³"], answer:"A" },
  { id:48, section:"Final Numerical", text:"If beta of a transistor changes from 50 to 100 and IC changes from 5 mA to 8 mA, the change in base current is:", options:["20 uA","100 uA","80 uA","60 uA"], answer:"A" },
  { id:49, section:"Final Numerical", text:"An LED emits light of wavelength 620 nm. The energy of the photon emitted is (h = 6.63 x 10⁻³⁴ Js, c = 3 x 10⁸ m/s):", options:["2.0 eV","3.2 eV","1.5 eV","4.0 eV"], answer:"A" },
  { id:50, section:"Final Numerical", text:"A full-wave rectifier uses a transformer with secondary voltage of 12.6 V (rms). The peak voltage and DC output voltage are approximately:", options:["Vpeak = 17.8 V, Vdc = 11.3 V","Vpeak = 12.6 V, Vdc = 8.0 V","Vpeak = 17.8 V, Vdc = 5.7 V","Vpeak = 25.2 V, Vdc = 16.0 V"], answer:"A" }
];
