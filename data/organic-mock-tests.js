/* CBSE Class XII Organic Chemistry — Mock Test Data
   3 tests × 16 MCQs each
   Difficulty: Easy (6) · Medium (7) · Hard (3) per test
   Topics: Haloalkanes, Alcohols/Phenols, Carbonyl Compounds, Amines
   1 mark per correct answer | No negative marking | Duration: 30 minutes
*/

const ORGANIC_MOCK_TESTS = [

  /* ═══════════════════════════════════════════════
     TEST 1 — Mixed Chapters
  ═══════════════════════════════════════════════ */
  {
    id: 1,
    name: "Mock Test 1",
    subtitle: "Haloalkanes · Alcohols · Amines · Carbonyl",
    icon: "①",
    duration: 1800,
    questions: [
      {
        id: 101, chapter: "Haloalkanes", difficulty: "easy",
        text: "Which of the following is a primary alkyl halide?",
        options: ["CH₃Cl", "(CH₃)₃CCl", "C₆H₅Cl", "CH₂=CHCl"],
        answer: "A",
        explanation: "In CH₃Cl, the carbon bonded to the halogen is attached to only one other carbon (or none — methyl halide is often classified as primary). (CH₃)₃CCl is tertiary, C₆H₅Cl is aryl halide, and CH₂=CHCl is vinyl halide."
      },
      {
        id: 102, chapter: "Amines", difficulty: "easy",
        text: "Amines are derivatives of:",
        options: ["Alcohols", "Ammonia", "Carboxylic acids", "Ketones"],
        answer: "B",
        explanation: "Amines are derived by replacing one or more hydrogen atoms of ammonia (NH₃) with alkyl or aryl groups."
      },
      {
        id: 103, chapter: "Amines", difficulty: "easy",
        text: "Which functional group is present in amines?",
        options: ["–OH", "–NH₂", "–COOH", "–CHO"],
        answer: "B",
        explanation: "The amino group (–NH₂) defines the amine functional group."
      },
      {
        id: 104, chapter: "Haloalkanes", difficulty: "easy",
        text: "Which of the following is an aryl halide?",
        options: ["C₂H₅Br", "C₆H₅Cl", "CH₃Cl", "C₃H₇I"],
        answer: "B",
        explanation: "Aryl halides have a halogen atom directly attached to an aromatic (benzene) ring. C₆H₅Cl is chlorobenzene."
      },
      {
        id: 105, chapter: "Alcohols", difficulty: "easy",
        text: "The IUPAC name of m-cresol is:",
        options: ["3-Methylphenol", "3-Chlorophenol", "3-Methoxyphenol", "Benzene-1,3-diol"],
        answer: "A",
        explanation: "m-Cresol is meta-methylphenol, i.e. a methyl group at the 3-position of phenol."
      },
      {
        id: 106, chapter: "Amines", difficulty: "easy",
        text: "Which amine is also known as phenylamine?",
        options: ["Methylamine", "Aniline", "Ethylamine", "Propylamine"],
        answer: "B",
        explanation: "Aniline (C₆H₅NH₂) is the simplest aromatic amine, also called phenylamine or aminobenzene."
      },
      {
        id: 107, chapter: "Haloalkanes", difficulty: "medium",
        text: "Which reagent converts alkyl halides to alcohols?",
        options: ["KOH (aq)", "KOH (alc)", "Zn/acid", "Na metal"],
        answer: "A",
        explanation: "Aqueous KOH provides OH⁻ ions which replace the halogen via nucleophilic substitution (SN). Alcoholic KOH causes elimination to form alkenes."
      },
      {
        id: 108, chapter: "Alcohols", difficulty: "medium",
        text: "The reactivity order of alcohols with HBr is:",
        options: ["1° > 2° > 3°", "3° > 1° > 2°", "3° > 2° > 1°", "1° > 3° > 2°"],
        answer: "C",
        explanation: "Reaction with HBr follows SN1 for 3° and 2° alcohols. Tertiary carbocations are most stable, so 3° alcohols react fastest: 3° > 2° > 1°."
      },
      {
        id: 109, chapter: "Amines", difficulty: "medium",
        text: "Among CH₃NH₂, (CH₃)₂NH, (CH₃)₃N — the most basic in aqueous solution is:",
        options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "All are equally basic"],
        answer: "B",
        explanation: "In aqueous medium, (CH₃)₂NH (dimethylamine) is most basic due to a balance of +I effect of two methyl groups and good solvation of the conjugate acid. Trimethylamine is less basic due to poor solvation."
      },
      {
        id: 110, chapter: "Amines", difficulty: "medium",
        text: "Carbylamine reaction is given by:",
        options: ["Primary amines", "Secondary amines", "Tertiary amines", "Aromatic amines only"],
        answer: "A",
        explanation: "Only primary amines (R–NH₂) react with CHCl₃ + KOH to form foul-smelling isocyanides (carbylamines). This is a specific test for 1° amines."
      },
      {
        id: 111, chapter: "Haloalkanes", difficulty: "medium",
        text: "Which compound has the highest boiling point?",
        options: ["CH₃Cl", "CH₃Br", "CH₃F", "CH₃I"],
        answer: "D",
        explanation: "CH₃I has the highest molecular mass among the methyl halides, resulting in the strongest van der Waals (London) forces and highest boiling point."
      },
      {
        id: 112, chapter: "Alcohols", difficulty: "medium",
        text: "Phenol is less acidic than:",
        options: ["Ethanol", "o-Nitrophenol", "o-Methylphenol", "o-Methoxyphenol"],
        answer: "B",
        explanation: "The electron-withdrawing –NO₂ group (–I and –M effects) stabilizes the phenoxide ion by delocalizing the negative charge, making o-nitrophenol more acidic than phenol."
      },
      {
        id: 113, chapter: "Amines", difficulty: "medium",
        text: "Gabriel phthalimide synthesis is used to prepare:",
        options: ["Primary amines", "Secondary amines", "Tertiary amines", "Aromatic amines"],
        answer: "A",
        explanation: "Gabriel synthesis yields only primary amines because the nitrogen in potassium phthalimide has only one site for alkylation, preventing over-alkylation."
      },
      {
        id: 114, chapter: "Haloalkanes", difficulty: "hard",
        text: "The SN1 reactivity order of alkyl halides is:",
        options: ["3° > 2° > 1°", "1° > 2° > 3°", "2° > 3° > 1°", "3° > 1° > 2°"],
        answer: "A",
        explanation: "SN1 depends on carbocation stability. Tertiary carbocations are stabilized by hyperconjugation and +I effect from three alkyl groups, making 3° halides most reactive via SN1."
      },
      {
        id: 115, chapter: "Haloalkanes", difficulty: "hard",
        text: "Aryl halides are less reactive towards nucleophilic substitution because:",
        options: [
          "Resonance stabilizes C–X bond",
          "C–X bond is stronger (sp² carbon)",
          "Partial double bond character of C–X",
          "All of the above"
        ],
        answer: "D",
        explanation: "In aryl halides, the lone pair on halogen delocalizes into the benzene ring (resonance), creating partial double bond character. The C–X bond is also stronger because the carbon is sp² hybridized. All three factors contribute."
      },
      {
        id: 116, chapter: "Alcohols", difficulty: "hard",
        text: "Which is the strongest base among the following?",
        options: ["C₆H₅OH", "RO⁻", "C₆H₅O⁻", "RCOO⁻"],
        answer: "B",
        explanation: "The conjugate base of the weakest acid is the strongest base. Aliphatic alcohols (ROH) are the weakest acids here, so RO⁻ (alkoxide) is the strongest base. Phenoxide (C₆H₅O⁻) is stabilized by resonance; RCOO⁻ is even more stabilized."
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     TEST 2 — Mixed Chapters
  ═══════════════════════════════════════════════ */
  {
    id: 2,
    name: "Mock Test 2",
    subtitle: "Carbonyl · Haloalkanes · Alcohols · Amines",
    icon: "②",
    duration: 1800,
    questions: [
      {
        id: 201, chapter: "Carbonyl Compounds", difficulty: "easy",
        text: "Reduction of aldehydes and ketones to hydrocarbons using Zn-Hg and conc. HCl is called:",
        options: ["Cope reduction", "Dow reduction", "Wolff-Kishner reduction", "Clemmensen reduction"],
        answer: "D",
        explanation: "Clemmensen reduction uses Zn-Hg/conc. HCl to reduce C=O to CH₂. Wolff-Kishner uses NH₂NH₂/KOH (base medium)."
      },
      {
        id: 202, chapter: "Amines", difficulty: "easy",
        text: "Which of the following is a secondary amine?",
        options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "Aniline"],
        answer: "B",
        explanation: "Secondary amines have two alkyl or aryl groups attached to nitrogen: (CH₃)₂NH is dimethylamine."
      },
      {
        id: 203, chapter: "Amines", difficulty: "easy",
        text: "Which of the following is a tertiary amine?",
        options: ["(CH₃)₂NH", "(CH₃)₃N", "CH₃NH₂", "C₆H₅NH₂"],
        answer: "B",
        explanation: "Tertiary amines have three alkyl/aryl groups on nitrogen with no N–H bond: (CH₃)₃N is trimethylamine."
      },
      {
        id: 204, chapter: "Amines", difficulty: "easy",
        text: "The IUPAC name of CH₃–NH–CH₃ is:",
        options: ["N-Methylmethanamine", "Ethylamine", "Trimethylamine", "Propylamine"],
        answer: "A",
        explanation: "CH₃–NH–CH₃ has two methyl groups on nitrogen. IUPAC name: N-methylmethanamine (common name: dimethylamine)."
      },
      {
        id: 205, chapter: "Haloalkanes", difficulty: "easy",
        text: "Freon-12 (a refrigerant) is chemically:",
        options: ["CCl₄", "C₂H₅Cl", "CCl₂F₂", "CHCl₃"],
        answer: "C",
        explanation: "Freon-12 is dichlorodifluoromethane (CCl₂F₂), a chlorofluorocarbon once widely used as a refrigerant."
      },
      {
        id: 206, chapter: "Haloalkanes", difficulty: "easy",
        text: "The C–X bond in haloalkanes is:",
        options: ["Ionic", "Polar covalent", "Non-polar covalent", "Coordinate"],
        answer: "B",
        explanation: "Due to the electronegativity difference between carbon and halogen, the C–X bond is polar covalent with δ+ on C and δ− on X."
      },
      {
        id: 207, chapter: "Alcohols", difficulty: "medium",
        text: "Which of these compounds reacts with NaOH solution?",
        options: ["C₆H₅OH (Phenol)", "C₆H₅CH₂OH", "(CH₃)₃COH", "C₂H₅OH"],
        answer: "A",
        explanation: "Phenol is acidic enough (pKa ~10) to react with NaOH to form sodium phenoxide and water. Aliphatic alcohols are too weakly acidic to react with NaOH."
      },
      {
        id: 208, chapter: "Carbonyl Compounds", difficulty: "medium",
        text: "CH₃CHO and C₆H₅CH₂CHO can be distinguished by:",
        options: ["Benedict's test", "Iodoform test", "Tollens' reagent", "Fehling's solution"],
        answer: "B",
        explanation: "CH₃CHO gives a positive iodoform test (yellow CHI₃ precipitate) because it has the CH₃CO– group. C₆H₅CH₂CHO lacks this group and gives no iodoform."
      },
      {
        id: 209, chapter: "Amines", difficulty: "medium",
        text: "Aniline is less basic than methylamine because:",
        options: [
          "Lone pair on N is delocalized into benzene ring",
          "Inductive effect increases electron density on N",
          "Both are equally basic",
          "Aniline is sterically hindered"
        ],
        answer: "A",
        explanation: "In aniline, the lone pair on nitrogen participates in resonance with the benzene ring, reducing its availability for protonation and making aniline a weaker base."
      },
      {
        id: 210, chapter: "Amines", difficulty: "medium",
        text: "Which reagent converts a primary aromatic amine to a diazonium salt?",
        options: ["NaNO₂ + HCl at 0–5°C", "Conc. HNO₃", "SOCl₂", "Br₂/H₂O"],
        answer: "A",
        explanation: "Diazotization: ArNH₂ + NaNO₂ + 2HCl → ArN₂⁺Cl⁻ + NaCl + 2H₂O. Must be done at 273–278 K (0–5°C) to prevent decomposition."
      },
      {
        id: 211, chapter: "Haloalkanes", difficulty: "medium",
        text: "Chlorobenzene can be prepared from benzene diazonium chloride by:",
        options: ["Free radical chlorination", "Sandmeyer reaction", "Wurtz reaction", "Friedel-Crafts alkylation"],
        answer: "B",
        explanation: "Sandmeyer reaction: C₆H₅N₂⁺Cl⁻ + CuCl → C₆H₅Cl + N₂. Diazonium salt reacts with Cu₂Cl₂/CuCl to give chlorobenzene."
      },
      {
        id: 212, chapter: "Amines", difficulty: "medium",
        text: "The product formed when aniline reacts with bromine water is:",
        options: ["o-Bromoaniline", "2,4,6-Tribromoaniline", "p-Bromoaniline", "Bromobenzene"],
        answer: "B",
        explanation: "The –NH₂ group strongly activates the ring (ortho/para directing). Aniline reacts with Br₂/H₂O to give a white precipitate of 2,4,6-tribromoaniline."
      },
      {
        id: 213, chapter: "Amines", difficulty: "medium",
        text: "Hinsberg's reagent is:",
        options: ["C₆H₅SO₂Cl", "CHCl₃ + KOH", "HNO₃", "NaOH"],
        answer: "A",
        explanation: "Benzenesulfonyl chloride (C₆H₅SO₂Cl) is Hinsberg's reagent, used to distinguish 1°, 2°, and 3° amines based on their sulfonamide-forming ability."
      },
      {
        id: 214, chapter: "Carbonyl Compounds", difficulty: "hard",
        text: "Which compound is most reactive towards nucleophilic addition?",
        options: ["Benzaldehyde", "Acetophenone", "p-Nitrobenzaldehyde", "p-Methoxybenzaldehyde"],
        answer: "C",
        explanation: "The –NO₂ group is electron-withdrawing (–I and –M effects), which increases the positive character of the carbonyl carbon, making it more electrophilic. Also, aldehydes > ketones in reactivity (less steric hindrance)."
      },
      {
        id: 215, chapter: "Haloalkanes", difficulty: "hard",
        text: "Chlorobenzene reacts with NaOH at 623 K and 300 atm to form:",
        options: ["Phenol", "Benzene", "Chlorophenol", "Aniline"],
        answer: "A",
        explanation: "Under extreme conditions (Dow process), chlorobenzene undergoes nucleophilic substitution with NaOH to form sodium phenoxide, which on acidification gives phenol."
      },
      {
        id: 216, chapter: "Alcohols", difficulty: "hard",
        text: "The correct order of boiling points is:",
        options: [
          "Propan-1-ol < Butan-2-ol < Butan-1-ol < Pentan-1-ol",
          "Propan-1-ol < Butan-1-ol < Butan-2-ol < Pentan-1-ol",
          "Pentan-1-ol < Butan-1-ol < Propan-1-ol",
          "Butan-2-ol < Propan-1-ol < Butan-1-ol < Pentan-1-ol"
        ],
        answer: "A",
        explanation: "Boiling point increases with molecular mass. Among isomers, 1° alcohols have higher b.p. than 2° (more surface area for H-bonding). So: propan-1-ol (97°C) < butan-2-ol (99°C) < butan-1-ol (117°C) < pentan-1-ol (138°C)."
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     TEST 3 — Mixed Chapters
  ═══════════════════════════════════════════════ */
  {
    id: 3,
    name: "Mock Test 3",
    subtitle: "Amines · Haloalkanes · Alcohols · Carbonyl",
    icon: "③",
    duration: 1800,
    questions: [
      {
        id: 301, chapter: "Amines", difficulty: "easy",
        text: "Which type of amine shows the strongest intermolecular hydrogen bonding?",
        options: ["Primary amine", "Secondary amine", "Tertiary amine", "All are equal"],
        answer: "A",
        explanation: "Primary amines have two N–H bonds available for hydrogen bonding, making their intermolecular H-bonding the strongest among amines."
      },
      {
        id: 302, chapter: "Haloalkanes", difficulty: "easy",
        text: "The IUPAC name of CH₂=CH–CH₂Cl is:",
        options: ["Allyl chloride", "Vinyl chloride", "3-Chloropropene", "1-Chloropropane"],
        answer: "C",
        explanation: "The double bond gets priority. Numbering from the double bond end: prop-2-en-1-yl chloride or 3-chloropropene (3-chloroprop-1-ene)."
      },
      {
        id: 303, chapter: "Haloalkanes", difficulty: "easy",
        text: "Which carbon-halogen bond is the strongest?",
        options: ["C–F", "C–Cl", "C–Br", "C–I"],
        answer: "A",
        explanation: "C–F bond has the highest bond dissociation enthalpy (~485 kJ/mol) due to the small size and high electronegativity of fluorine."
      },
      {
        id: 304, chapter: "Amines", difficulty: "easy",
        text: "Reduction of nitrobenzene with Sn/HCl gives:",
        options: ["Phenol", "Aniline", "Benzoic acid", "Benzaldehyde"],
        answer: "B",
        explanation: "C₆H₅NO₂ + 3Sn + 7HCl → C₆H₅NH₃⁺Cl⁻ → (NaOH) → C₆H₅NH₂ (aniline). Nitro group is reduced to amino group."
      },
      {
        id: 305, chapter: "Amines", difficulty: "easy",
        text: "Ammonolysis of alkyl halides gives:",
        options: ["Alcohols", "Amines", "Carboxylic acids", "Alkanes"],
        answer: "B",
        explanation: "R–X + NH₃ (excess) → R–NH₂ + HX. Alkyl halides react with ammonia to form amines."
      },
      {
        id: 306, chapter: "Amines", difficulty: "easy",
        text: "Diazotization is the process of:",
        options: ["Preparing aldehydes", "Preparing ketones", "Converting amine to diazonium salt", "Preparing alcohols"],
        answer: "C",
        explanation: "Diazotization: treatment of primary aromatic amine with NaNO₂ + HCl at 0–5°C to form diazonium salt (ArN₂⁺Cl⁻)."
      },
      {
        id: 307, chapter: "Amines", difficulty: "medium",
        text: "Which is NOT a method of preparation of amines?",
        options: ["Hoffmann bromamide reaction", "Gabriel synthesis", "Reduction of nitro compounds", "Aldol condensation"],
        answer: "D",
        explanation: "Aldol condensation involves aldehydes/ketones forming β-hydroxy carbonyl compounds, not amines. The other three are standard methods for amine preparation."
      },
      {
        id: 308, chapter: "Amines", difficulty: "medium",
        text: "Hoffmann bromamide reaction gives a primary amine with:",
        options: ["Same number of carbons as amide", "One carbon less than amide", "One carbon more than amide", "Two carbons less than amide"],
        answer: "B",
        explanation: "RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃. The carbonyl carbon is lost as CO₃²⁻, so the amine has one carbon less than the starting amide."
      },
      {
        id: 309, chapter: "Haloalkanes", difficulty: "medium",
        text: "Beilstein test is used to detect:",
        options: ["Nitrogen in organic compounds", "Halogens in organic compounds", "Sulphur in organic compounds", "Oxygen in organic compounds"],
        answer: "B",
        explanation: "A green/blue-green flame appears when an organic compound containing halogen is heated on a copper wire — this is the Beilstein test."
      },
      {
        id: 310, chapter: "Alcohols", difficulty: "medium",
        text: "The reagent that converts ethanol to acetaldehyde (without over-oxidation) is:",
        options: ["Catalytic hydrogenation", "LiAlH₄", "Pyridinium chlorochromate (PCC)", "Alkaline KMnO₄"],
        answer: "C",
        explanation: "PCC is a mild, selective oxidizing agent that stops at the aldehyde stage. KMnO₄ or K₂Cr₂O₇ would over-oxidize to carboxylic acid."
      },
      {
        id: 311, chapter: "Carbonyl Compounds", difficulty: "medium",
        text: "The reaction of propanoic acid with Br₂/P (red phosphorus) is called:",
        options: ["Kolbe reaction", "Hell-Volhard-Zelinsky reaction", "Sandmeyer reaction", "Finkelstein reaction"],
        answer: "B",
        explanation: "Hell-Volhard-Zelinsky (HVZ) reaction: carboxylic acids with α-H react with Br₂/P to form α-bromo carboxylic acids."
      },
      {
        id: 312, chapter: "Alcohols", difficulty: "medium",
        text: "Which compound is NOT soluble in NaHCO₃ solution?",
        options: ["2,4,6-Trinitrophenol (picric acid)", "Benzoic acid", "o-Nitrophenol", "Benzenesulphonic acid"],
        answer: "C",
        explanation: "o-Nitrophenol is weakly acidic (pKa ~7.2) but not acidic enough to react with the weak base NaHCO₃. Picric acid, benzoic acid, and benzenesulphonic acid are all strong enough."
      },
      {
        id: 313, chapter: "Amines", difficulty: "medium",
        text: "Coupling reaction of diazonium salts with phenol gives:",
        options: ["Phenyl halide", "Azo dyes", "Nitro compounds", "Amides"],
        answer: "B",
        explanation: "ArN₂⁺ + ArOH (alkaline) → Ar–N=N–Ar'–OH. The azo (–N=N–) linkage forms colored compounds used as azo dyes."
      },
      {
        id: 314, chapter: "Amines", difficulty: "hard",
        text: "In the Hinsberg test, which amine does NOT react with benzenesulfonyl chloride?",
        options: [
          "Primary amine (gives alkali-soluble product)",
          "Secondary amine (gives alkali-insoluble product)",
          "Tertiary amine (no reaction)",
          "All amines react equally"
        ],
        answer: "C",
        explanation: "Tertiary amines lack an N–H bond and cannot form sulfonamides. 1° amines give R–NHSO₂C₆H₅ (soluble in NaOH), 2° amines give R₂NSO₂C₆H₅ (insoluble in NaOH)."
      },
      {
        id: 315, chapter: "Amines", difficulty: "hard",
        text: "Aniline is less basic than cyclohexylamine because:",
        options: [
          "Inductive effect of benzene ring",
          "Resonance delocalization of lone pair into the ring",
          "Steric hindrance in aniline",
          "Higher molecular weight of aniline"
        ],
        answer: "B",
        explanation: "In aniline, the lone pair on nitrogen is delocalized into the benzene π-system via resonance. In cyclohexylamine (no resonance), the lone pair is fully available for protonation, making it a stronger base."
      },
      {
        id: 316, chapter: "Haloalkanes", difficulty: "hard",
        text: "The fastest SN2 reaction occurs with:",
        options: ["CH₃Cl", "C₂H₅Cl", "(CH₃)₃CCl", "CH₃Br"],
        answer: "D",
        explanation: "SN2 requires minimal steric hindrance (methyl > 1° > 2° > 3°) and a good leaving group. CH₃Br has the least hindrance (methyl group) and Br⁻ is a better leaving group than Cl⁻ (larger, more polarizable)."
      }
    ]
  }
];
