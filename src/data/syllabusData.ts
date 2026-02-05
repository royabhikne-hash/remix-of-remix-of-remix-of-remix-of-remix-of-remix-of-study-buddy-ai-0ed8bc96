 // Official Syllabus Data for CBSE, Bihar Board, and ICSE
 // Source: NCERT, BSEB, CISCE official curriculum 2024-25
 
 export type BoardType = "CBSE" | "Bihar Board" | "ICSE" | "Other";
 
 export interface SyllabusData {
   [board: string]: {
     [classLevel: string]: {
       [subject: string]: string[];
     };
   };
 }
 
 // CBSE/NCERT Syllabus (Classes 6-12)
 const CBSE_SYLLABUS: Record<string, Record<string, string[]>> = {
   "6": {
     "Math": ["Knowing Our Numbers", "Whole Numbers", "Playing with Numbers", "Basic Geometrical Ideas", "Understanding Elementary Shapes", "Integers", "Fractions", "Decimals", "Data Handling", "Mensuration", "Algebra", "Ratio and Proportion", "Symmetry", "Practical Geometry"],
     "Science": ["Food: Where Does It Come From?", "Components of Food", "Fibre to Fabric", "Sorting Materials into Groups", "Separation of Substances", "Changes Around Us", "Getting to Know Plants", "Body Movements", "The Living Organisms and Their Surroundings", "Motion and Measurement of Distances", "Light, Shadows and Reflections", "Electricity and Circuits", "Fun with Magnets", "Water", "Air Around Us", "Garbage In, Garbage Out"],
     "Social Science": ["What, Where, How and When?", "On The Trial of the Earliest People", "From Gathering to Growing Food", "In the Earliest Cities", "Kingdoms, Kings and an Early Republic", "New Questions and Ideas", "Ashoka, The Emperor Who Gave Up War", "Diversity", "Government", "Local Government", "Rural Livelihoods", "Urban Livelihoods", "Understanding Diversity", "The Earth in the Solar System", "Globe: Latitudes and Longitudes", "Motions of the Earth", "Maps", "Major Domains of the Earth", "Major Landforms of the Earth", "India: Climate, Vegetation and Wildlife"],
     "English": ["Who Did Patrick's Homework?", "How the Dog Found Himself a New Master!", "Taro's Reward", "An Indian-American Woman in Space: Kalpana Chawla", "A Different Kind of School", "Who I Am", "Fair Play", "A Game of Chance", "Desert Animals", "The Banyan Tree"],
     "Hindi": ["वह चिड़िया जो", "बचपन", "नादान दोस्त", "चाँद से थोड़ी-सी गप्पें", "अक्षरों का महत्व", "पार नज़र के", "साथी हाथ बढ़ाना", "ऐसे-ऐसे", "टिकट-अलबम", "झाँसी की रानी"],
   },
   "7": {
     "Math": ["Integers", "Fractions and Decimals", "Data Handling", "Simple Equations", "Lines and Angles", "The Triangle and its Properties", "Congruence of Triangles", "Comparing Quantities", "Rational Numbers", "Practical Geometry", "Perimeter and Area", "Algebraic Expressions", "Exponents and Powers", "Symmetry", "Visualising Solid Shapes"],
     "Science": ["Nutrition in Plants", "Nutrition in Animals", "Fibre to Fabric", "Heat", "Acids, Bases and Salts", "Physical and Chemical Changes", "Weather, Climate and Adaptations of Animals to Climate", "Winds, Storms and Cyclones", "Soil", "Respiration in Organisms", "Transportation in Animals and Plants", "Reproduction in Plants", "Motion and Time", "Electric Current and Its Effects", "Light", "Water: A Precious Resource", "Forests: Our Lifeline", "Wastewater Story"],
     "Social Science": ["Tracing Changes Through a Thousand Years", "New Kings and Kingdoms", "The Delhi Sultans", "The Mughal Empire", "Rulers and Buildings", "Towns, Traders and Craftspersons", "Tribes, Nomads and Settled Communities", "Devotional Paths to the Divine", "The Making of Regional Cultures", "Eighteenth-Century Political Formations", "On Equality", "Role of the Government in Health", "How the State Government Works", "Growing up as Boys and Girls", "Women Change the World", "Understanding Media", "Markets Around Us", "A Shirt in the Market", "Environment", "Inside Our Earth", "Our Changing Earth", "Air", "Water", "Natural Vegetation and Wildlife", "Human Environment – Settlement, Transport and Communication", "Human Environment Interactions"],
     "English": ["Three Questions", "A Gift of Chappals", "Gopal and the Hilsa Fish", "The Ashes That Made Trees Bloom", "Quality", "Expert Detectives", "The Invention of Vita-Wonk", "Fire: Friend and Foe", "A Bicycle in Good Repair", "The Story of Cricket"],
     "Hindi": ["हम पंछी उन्मुक्त गगन के", "दादी माँ", "हिमालय की बेटियाँ", "कठपुतली", "मिठाईवाला", "रक्त और हमारा शरीर", "पापा खो गए", "शाम – एक किसान", "चिड़िया की बच्ची", "अपूर्व अनुभव", "रहीम के दोहे"],
   },
   "8": {
     "Math": ["Rational Numbers", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Practical Geometry", "Data Handling", "Squares and Square Roots", "Cubes and Cube Roots", "Comparing Quantities", "Algebraic Expressions and Identities", "Visualising Solid Shapes", "Mensuration", "Exponents and Powers", "Direct and Inverse Proportions", "Factorisation", "Introduction to Graphs", "Playing with Numbers"],
     "Science": ["Crop Production and Management", "Microorganisms: Friend and Foe", "Synthetic Fibres and Plastics", "Materials: Metals and Non-Metals", "Coal and Petroleum", "Combustion and Flame", "Conservation of Plants and Animals", "Cell — Structure and Functions", "Reproduction in Animals", "Reaching the Age of Adolescence", "Force and Pressure", "Friction", "Sound", "Chemical Effects of Electric Current", "Some Natural Phenomena", "Light", "Stars and the Solar System", "Pollution of Air and Water"],
     "Social Science": ["How, When and Where", "From Trade to Territory", "Ruling the Countryside", "Tribals, Dikus and the Vision of a Golden Age", "When People Rebel", "Weavers, Iron Smelters and Factory Owners", "Civilising the 'Native', Educating the Nation", "Women, Caste and Reform", "The Making of the National Movement: 1870s–1947", "India After Independence", "The Indian Constitution", "Understanding Secularism", "Why Do We Need a Parliament?", "Understanding Laws", "Judiciary", "Understanding Our Criminal Justice System", "Understanding Marginalization", "Confronting Marginalization", "Public Facilities", "Law and Social Justice", "Resources", "Land, Soil, Water, Natural Vegetation and Wildlife Resources", "Mineral and Power Resources", "Agriculture", "Industries", "Human Resources"],
     "English": ["The Best Christmas Present in the World", "The Tsunami", "Glimpses of the Past", "Bepin Choudhury's Lapse of Memory", "The Summit Within", "This is Jody's Fawn", "A Visit to Cambridge", "A Short Monsoon Diary"],
     "Hindi": ["ध्वनि", "लाख की चूड़ियाँ", "बस की यात्रा", "दीवानों की हस्ती", "चिट्ठियों की अनूठी दुनिया", "भगवान के डाकिए", "क्या निराश हुआ जाए", "यह सबसे कठिन समय नहीं", "कबीर की साखियाँ", "कामचोर", "जब सिनेमा ने बोलना सीखा", "सुदामा चरित"],
   },
   "9": {
     "Math": ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", "Introduction to Euclid's Geometry", "Lines and Angles", "Triangles", "Quadrilaterals", "Areas of Parallelograms and Triangles", "Circles", "Constructions", "Heron's Formula", "Surface Areas and Volumes", "Statistics", "Probability"],
     "Science": ["Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules", "Structure of the Atom", "The Fundamental Unit of Life", "Tissues", "Diversity in Living Organisms", "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound", "Why Do We Fall Ill?", "Natural Resources", "Improvement in Food Resources"],
     "Social Science": ["The French Revolution", "Socialism in Europe and the Russian Revolution", "Nazism and the Rise of Hitler", "Forest Society and Colonialism", "Pastoralists in the Modern World", "What is Democracy? Why Democracy?", "Constitutional Design", "Electoral Politics", "Working of Institutions", "Democratic Rights", "The Story of Village Palampur", "People as Resource", "Poverty as a Challenge", "Food Security in India", "India – Size and Location", "Physical Features of India", "Drainage", "Climate", "Natural Vegetation and Wildlife", "Population"],
     "English": ["The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind", "The Snake and the Mirror", "My Childhood", "Packing", "Reach for the Top", "The Bond of Love", "Kathmandu", "If I Were You"],
     "Hindi": ["दो बैलों की कथा", "ल्हासा की ओर", "उपभोक्तावाद की संस्कृति", "साँवले सपनों की याद", "नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया", "प्रेमचंद के फटे जूते", "मेरे बचपन के दिन", "एक कुत्ता और एक मैना"],
   },
   "10": {
     "Math": ["Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Some Applications of Trigonometry", "Circles", "Constructions", "Areas Related to Circles", "Surface Areas and Volumes", "Statistics", "Probability"],
     "Science": ["Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and its Compounds", "Periodic Classification of Elements", "Life Processes", "Control and Coordination", "How do Organisms Reproduce?", "Heredity and Evolution", "Light – Reflection and Refraction", "Human Eye and Colourful World", "Electricity", "Magnetic Effects of Electric Current", "Sources of Energy", "Our Environment", "Management of Natural Resources"],
     "Social Science": ["The Rise of Nationalism in Europe", "Nationalism in India", "The Making of a Global World", "The Age of Industrialization", "Print Culture and the Modern World", "Power Sharing", "Federalism", "Democracy and Diversity", "Gender, Religion and Caste", "Popular Struggles and Movements", "Political Parties", "Outcomes of Democracy", "Challenges to Democracy", "Development", "Sectors of the Indian Economy", "Money and Credit", "Globalisation and the Indian Economy", "Consumer Rights", "Resources and Development", "Forest and Wildlife Resources", "Water Resources", "Agriculture", "Minerals and Energy Resources", "Manufacturing Industries", "Lifelines of National Economy"],
     "English": ["A Letter to God", "Nelson Mandela: Long Walk to Freedom", "Two Stories about Flying", "From the Diary of Anne Frank", "The Hundred Dresses – I", "The Hundred Dresses – II", "Glimpses of India", "Mijbil the Otter", "Madam Rides the Bus", "The Sermon at Benares", "The Proposal"],
     "Hindi": ["सूरदास के पद", "राम-लक्ष्मण-परशुराम संवाद", "आत्मकथ्य", "उत्साह और अट नहीं रही", "यह दंतुरहित मुस्कान और फसल", "छाया मत छूना", "कन्यादान", "संगतकार", "नेताजी का चश्मा", "बालगोबिन भगत", "लखनवी अंदाज़", "मानवीय करुणा की दिव्य चमक"],
   },
   "11": {
     "Physics": ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles and Rotational Motion", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
     "Chemistry": ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements and Periodicity in Properties", "Chemical Bonding and Molecular Structure", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "The s-Block Elements", "The p-Block Elements", "Organic Chemistry – Some Basic Principles and Techniques", "Hydrocarbons", "Environmental Chemistry"],
     "Biology": ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals", "Cell: The Unit of Life", "Biomolecules", "Cell Cycle and Cell Division", "Transport in Plants", "Mineral Nutrition", "Photosynthesis in Higher Plants", "Respiration in Plants", "Plant Growth and Development", "Digestion and Absorption", "Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination", "Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration"],
     "Math": ["Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Mathematical Induction", "Complex Numbers and Quadratic Equations", "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "Introduction to Three Dimensional Geometry", "Limits and Derivatives", "Mathematical Reasoning", "Statistics", "Probability"],
     "English": ["The Portrait of a Lady", "We're Not Afraid to Die… if We Can All Be Together", "Discovering Tut: the Saga Continues", "Landscape of the Soul", "The Ailing Planet: the Green Movement's Role", "The Browning Version", "The Adventure", "Silk Road", "A Photograph", "The Laburnum Top", "The Voice of the Rain", "Childhood", "Father to Son"],
     "Accountancy": ["Introduction to Accounting", "Theory Base of Accounting", "Recording of Transactions – I", "Recording of Transactions – II", "Bank Reconciliation Statement", "Trial Balance and Rectification of Errors", "Depreciation, Provisions and Reserves", "Bill of Exchange", "Financial Statements – I", "Financial Statements – II", "Accounts from Incomplete Records", "Applications of Computers in Accounting", "Computerised Accounting System"],
     "Economics": ["Indian Economy on the Eve of Independence", "Indian Economy 1950-1990", "Liberalisation, Privatisation and Globalisation: An Appraisal", "Poverty", "Human Capital Formation in India", "Rural Development", "Employment: Growth, Informalisation and Other Issues", "Infrastructure", "Environment and Sustainable Development", "Comparative Development Experiences of India and Its Neighbours"],
     "Business Studies": ["Nature and Purpose of Business", "Forms of Business Organisation", "Private, Public and Global Enterprises", "Business Services", "Emerging Modes of Business", "Social Responsibilities of Business and Business Ethics", "Sources of Business Finance", "Small Business", "Internal Trade", "International Business"],
   },
   "12": {
     "Physics": ["Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics and Optical Instruments", "Wave Optics", "Dual Nature of Radiation and Matter", "Atoms", "Nuclei", "Semiconductor Electronics"],
     "Chemistry": ["The Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "General Principles and Processes of Isolation of Elements", "The p-Block Elements", "The d- and f-Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life"],
     "Biology": ["Reproduction in Organisms", "Sexual Reproduction in Flowering Plants", "Human Reproduction", "Reproductive Health", "Principles of Inheritance and Variation", "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Strategies for Enhancement in Food Production", "Microbes in Human Welfare", "Biotechnology: Principles and Processes", "Biotechnology and its Applications", "Organisms and Populations", "Ecosystem", "Biodiversity and Conservation", "Environmental Issues"],
     "Math": ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity and Differentiability", "Application of Derivatives", "Integrals", "Application of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"],
     "English": ["The Last Lesson", "Lost Spring", "Deep Water", "The Rattrap", "Indigo", "Poets and Pancakes", "The Interview", "Going Places", "My Mother at Sixty-six", "An Elementary School Classroom in a Slum", "Keeping Quiet", "A Thing of Beauty", "Aunt Jennifer's Tigers"],
     "Accountancy": ["Accounting for Not-for-Profit Organisation", "Accounting for Partnership: Basic Concepts", "Reconstitution of a Partnership Firm – Admission of a Partner", "Reconstitution of a Partnership Firm – Retirement/Death of a Partner", "Dissolution of Partnership Firm", "Accounting for Share Capital", "Issue and Redemption of Debentures", "Financial Statements of a Company", "Analysis of Financial Statements", "Accounting Ratios", "Cash Flow Statement"],
     "Economics": ["Introduction to Macroeconomics", "National Income Accounting", "Money and Banking", "Determination of Income and Employment", "Government Budget and the Economy", "Open Economy Macroeconomics"],
     "Business Studies": ["Nature and Significance of Management", "Principles of Management", "Business Environment", "Planning", "Organising", "Staffing", "Directing", "Controlling", "Financial Management", "Financial Markets", "Marketing Management", "Consumer Protection"],
   },
 };
 
 // Bihar Board (BSEB) Syllabus - Based on SCERT Bihar
 // Note: Bihar Board follows NCERT but has some variations in chapter order and naming
 const BIHAR_BOARD_SYLLABUS: Record<string, Record<string, string[]>> = {
   "6": {
     ...CBSE_SYLLABUS["6"],
   },
   "7": {
     ...CBSE_SYLLABUS["7"],
   },
   "8": {
     ...CBSE_SYLLABUS["8"],
   },
   "9": {
     "Math": ["संख्या पद्धति (Number Systems)", "बहुपद (Polynomials)", "निर्देशांक ज्यामिति (Coordinate Geometry)", "दो चरों वाले रैखिक समीकरण (Linear Equations in Two Variables)", "यूक्लिड की ज्यामिति का परिचय (Introduction to Euclid's Geometry)", "रेखाएँ और कोण (Lines and Angles)", "त्रिभुज (Triangles)", "चतुर्भुज (Quadrilaterals)", "समांतर चतुर्भुजों और त्रिभुजों के क्षेत्रफल (Areas of Parallelograms and Triangles)", "वृत्त (Circles)", "रचनाएँ (Constructions)", "हीरोन का सूत्र (Heron's Formula)", "पृष्ठीय क्षेत्रफल और आयतन (Surface Areas and Volumes)", "सांख्यिकी (Statistics)", "प्रायिकता (Probability)"],
     "Science": ["हमारे आस-पास के पदार्थ (Matter in Our Surroundings)", "क्या हमारे आस-पास के पदार्थ शुद्ध हैं (Is Matter Around Us Pure?)", "परमाणु एवं अणु (Atoms and Molecules)", "परमाणु की संरचना (Structure of the Atom)", "जीवन की मौलिक इकाई (The Fundamental Unit of Life)", "ऊतक (Tissues)", "जीवों में विविधता (Diversity in Living Organisms)", "गति (Motion)", "बल तथा गति के नियम (Force and Laws of Motion)", "गुरुत्वाकर्षण (Gravitation)", "कार्य तथा ऊर्जा (Work and Energy)", "ध्वनि (Sound)", "हम बीमार क्यों होते हैं (Why Do We Fall Ill?)", "प्राकृतिक संसाधन (Natural Resources)", "खाद्य संसाधनों में सुधार (Improvement in Food Resources)"],
     "Social Science": CBSE_SYLLABUS["9"]["Social Science"],
     "English": CBSE_SYLLABUS["9"]["English"],
     "Hindi": ["दो बैलों की कथा", "ल्हासा की ओर", "उपभोक्तावाद की संस्कृति", "साँवले सपनों की याद", "नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया", "प्रेमचंद के फटे जूते", "मेरे बचपन के दिन", "एक कुत्ता और एक मैना", "सबद", "वाख", "रैदास के पद"],
   },
   "10": {
     "Math": ["वास्तविक संख्याएँ (Real Numbers)", "बहुपद (Polynomials)", "दो चरों वाले रैखिक समीकरण युग्म (Pair of Linear Equations)", "द्विघात समीकरण (Quadratic Equations)", "समांतर श्रेढ़ी (Arithmetic Progressions)", "त्रिभुज (Triangles)", "निर्देशांक ज्यामिति (Coordinate Geometry)", "त्रिकोणमिति का परिचय (Introduction to Trigonometry)", "त्रिकोणमिति के कुछ अनुप्रयोग (Applications of Trigonometry)", "वृत्त (Circles)", "रचनाएँ (Constructions)", "वृत्तों से संबंधित क्षेत्रफल (Areas Related to Circles)", "पृष्ठीय क्षेत्रफल और आयतन (Surface Areas and Volumes)", "सांख्यिकी (Statistics)", "प्रायिकता (Probability)"],
     "Science": ["रासायनिक अभिक्रियाएँ एवं समीकरण (Chemical Reactions and Equations)", "अम्ल, क्षारक एवं लवण (Acids, Bases and Salts)", "धातु एवं अधातु (Metals and Non-metals)", "कार्बन एवं उसके यौगिक (Carbon and its Compounds)", "तत्वों का आवर्त वर्गीकरण (Periodic Classification of Elements)", "जैव प्रक्रम (Life Processes)", "नियंत्रण एवं समन्वय (Control and Coordination)", "जीव जनन कैसे करते हैं (How do Organisms Reproduce?)", "आनुवंशिकता एवं जैव विकास (Heredity and Evolution)", "प्रकाश - परावर्तन तथा अपवर्तन (Light – Reflection and Refraction)", "मानव नेत्र तथा रंगबिरंगा संसार (Human Eye and Colourful World)", "विद्युत (Electricity)", "विद्युत धारा के चुंबकीय प्रभाव (Magnetic Effects of Electric Current)", "ऊर्जा के स्रोत (Sources of Energy)", "हमारा पर्यावरण (Our Environment)", "प्राकृतिक संसाधनों का प्रबंधन (Management of Natural Resources)"],
     "Social Science": CBSE_SYLLABUS["10"]["Social Science"],
     "English": CBSE_SYLLABUS["10"]["English"],
     "Hindi": CBSE_SYLLABUS["10"]["Hindi"],
   },
   "11": {
     "Physics": ["भौतिक जगत (Physical World)", "मात्रक और मापन (Units and Measurements)", "सरल रेखा में गति (Motion in a Straight Line)", "समतल में गति (Motion in a Plane)", "गति के नियम (Laws of Motion)", "कार्य, ऊर्जा और शक्ति (Work, Energy and Power)", "कणों के निकाय तथा घूर्णी गति (System of Particles and Rotational Motion)", "गुरुत्वाकर्षण (Gravitation)", "ठोसों के यांत्रिक गुण (Mechanical Properties of Solids)", "तरलों के यांत्रिक गुण (Mechanical Properties of Fluids)", "द्रव्य के तापीय गुण (Thermal Properties of Matter)", "ऊष्मागतिकी (Thermodynamics)", "अणुगति सिद्धांत (Kinetic Theory)", "दोलन (Oscillations)", "तरंगें (Waves)"],
     "Chemistry": ["रसायन विज्ञान की कुछ मूल अवधारणाएँ (Some Basic Concepts of Chemistry)", "परमाणु की संरचना (Structure of Atom)", "तत्वों का वर्गीकरण एवं गुणधर्मों में आवर्तिता (Classification of Elements)", "रासायनिक आबंधन तथा आण्विक संरचना (Chemical Bonding)", "द्रव्य की अवस्थाएँ (States of Matter)", "ऊष्मागतिकी (Thermodynamics)", "साम्यावस्था (Equilibrium)", "अपचयोपचय अभिक्रियाएँ (Redox Reactions)", "हाइड्रोजन (Hydrogen)", "s-ब्लॉक तत्व (The s-Block Elements)", "p-ब्लॉक तत्व (The p-Block Elements)", "कार्बनिक रसायन (Organic Chemistry)", "हाइड्रोकार्बन (Hydrocarbons)", "पर्यावरणीय रसायन (Environmental Chemistry)"],
     "Biology": ["जीव जगत (The Living World)", "जीव जगत का वर्गीकरण (Biological Classification)", "वनस्पति जगत (Plant Kingdom)", "प्राणी जगत (Animal Kingdom)", "पुष्पी पादपों की आकारिकी (Morphology of Flowering Plants)", "पुष्पी पादपों का शारीर (Anatomy of Flowering Plants)", "प्राणियों में संरचनात्मक संगठन (Structural Organisation in Animals)", "कोशिका: जीवन की इकाई (Cell: The Unit of Life)", "जैव अणु (Biomolecules)", "कोशिका चक्र और कोशिका विभाजन (Cell Cycle and Cell Division)", "पादपों में परिवहन (Transport in Plants)", "खनिज पोषण (Mineral Nutrition)", "उच्च पादपों में प्रकाश संश्लेषण (Photosynthesis in Higher Plants)", "पादप में श्वसन (Respiration in Plants)", "पादप वृद्धि एवं परिवर्धन (Plant Growth and Development)", "पाचन एवं अवशोषण (Digestion and Absorption)", "श्वासन और गैसों का विनिमय (Breathing and Exchange of Gases)", "शरीर द्रव तथा परिसंचरण (Body Fluids and Circulation)", "उत्सर्जी उत्पाद एवं उनका निष्कासन (Excretory Products)", "गमन एवं संचलन (Locomotion and Movement)", "तंत्रिकीय नियंत्रण एवं समन्वय (Neural Control and Coordination)", "रासायनिक समन्वय तथा एकीकरण (Chemical Coordination and Integration)"],
     "Math": CBSE_SYLLABUS["11"]["Math"],
     "English": CBSE_SYLLABUS["11"]["English"],
   },
   "12": {
     "Physics": ["वैद्युत आवेश तथा क्षेत्र (Electric Charges and Fields)", "स्थिर विद्युत विभव तथा धारिता (Electrostatic Potential and Capacitance)", "विद्युत धारा (Current Electricity)", "गतिमान आवेश और चुंबकत्व (Moving Charges and Magnetism)", "चुंबकत्व एवं द्रव्य (Magnetism and Matter)", "विद्युत चुंबकीय प्रेरण (Electromagnetic Induction)", "प्रत्यावर्ती धारा (Alternating Current)", "विद्युत चुंबकीय तरंगें (Electromagnetic Waves)", "किरण प्रकाशिकी एवं प्रकाशिक यंत्र (Ray Optics and Optical Instruments)", "तरंग प्रकाशिकी (Wave Optics)", "विकिरण तथा द्रव्य की द्वैत प्रकृति (Dual Nature of Radiation and Matter)", "परमाणु (Atoms)", "नाभिक (Nuclei)", "अर्धचालक इलेक्ट्रॉनिकी (Semiconductor Electronics)"],
     "Chemistry": ["ठोस अवस्था (The Solid State)", "विलयन (Solutions)", "वैद्युतरसायन (Electrochemistry)", "रासायनिक बलगतिकी (Chemical Kinetics)", "पृष्ठ रसायन (Surface Chemistry)", "तत्वों के निष्कर्षण के सिद्धांत एवं प्रक्रम (Isolation of Elements)", "p-ब्लॉक तत्व (The p-Block Elements)", "d एवं f-ब्लॉक तत्व (The d- and f-Block Elements)", "उपसहसंयोजन यौगिक (Coordination Compounds)", "हैलोऐल्केन तथा हैलोऐरीन (Haloalkanes and Haloarenes)", "ऐल्कोहॉल, फीनॉल एवं ईथर (Alcohols, Phenols and Ethers)", "ऐल्डिहाइड, कीटोन एवं कार्बोक्सिलिक अम्ल (Aldehydes, Ketones and Carboxylic Acids)", "ऐमीन (Amines)", "जैव अणु (Biomolecules)", "बहुलक (Polymers)", "दैनिक जीवन में रसायन (Chemistry in Everyday Life)"],
     "Biology": ["जीवों में जनन (Reproduction in Organisms)", "पुष्पी पादपों में लैंगिक जनन (Sexual Reproduction in Flowering Plants)", "मानव जनन (Human Reproduction)", "जनन स्वास्थ्य (Reproductive Health)", "वंशागति तथा विविधता के सिद्धांत (Principles of Inheritance and Variation)", "वंशागति का आण्विक आधार (Molecular Basis of Inheritance)", "विकास (Evolution)", "मानव स्वास्थ्य तथा रोग (Human Health and Disease)", "खाद्य उत्पादन में वृद्धि की कार्यनीति (Strategies for Enhancement in Food Production)", "मानव कल्याण में सूक्ष्मजीव (Microbes in Human Welfare)", "जैव प्रौद्योगिकी: सिद्धांत व प्रक्रम (Biotechnology: Principles and Processes)", "जैव प्रौद्योगिकी एवं उसके उपयोग (Biotechnology and its Applications)", "जीव और समष्टियाँ (Organisms and Populations)", "पारितंत्र (Ecosystem)", "जैव विविधता एवं संरक्षण (Biodiversity and Conservation)", "पर्यावरण के मुद्दे (Environmental Issues)"],
     "Math": CBSE_SYLLABUS["12"]["Math"],
     "English": CBSE_SYLLABUS["12"]["English"],
   },
 };
 
 // ICSE (CISCE) Syllabus
 const ICSE_SYLLABUS: Record<string, Record<string, string[]>> = {
   "6": {
     "Math": ["Number System", "Ratio and Proportion", "Algebra", "Geometry", "Mensuration", "Data Handling"],
     "Science": ["Plant Life", "The Cell", "Human Body", "Health and Hygiene", "Housing and Clothing", "Air and Atmosphere", "Water", "Rocks and Minerals", "Light", "Magnetism", "Our Environment"],
     "History & Civics": ["What is History?", "Early Man", "Indus Valley Civilization", "The Vedic Age", "Jainism and Buddhism", "The Mauryan Empire", "Civics: The Family", "Our Neighbourhood", "Our School"],
     "Geography": ["The Earth: A Unique Planet", "The Land: Rocks and Minerals", "The Soil", "The Water", "The Air", "Weather and Climate", "Natural Vegetation", "India: Physical Features"],
     "English": ["Prose", "Poetry", "Grammar", "Composition", "Comprehension"],
     "Hindi": ["गद्य भाग", "पद्य भाग", "व्याकरण", "रचना"],
   },
   "7": {
     "Math": ["Integers", "Fractions", "Decimals", "Exponents", "Algebraic Expressions", "Linear Equations", "Ratio and Proportion", "Percentage", "Profit and Loss", "Lines and Angles", "Triangles", "Congruence", "Area and Perimeter", "Data Handling"],
     "Science": ["Tissue", "Classification of Plants", "Nutrition in Plants", "Nutrition in Animals", "Acids, Bases and Salts", "Physical and Chemical Changes", "Weather", "Soil", "Respiration", "Transportation", "Reproduction", "Motion and Time", "Electric Current", "Light", "Water"],
     "History & Civics": ["The Delhi Sultanate", "The Mughal Empire", "The Marathas", "The British Conquest", "Civics: The Constitution of India", "Fundamental Rights and Duties", "The Government"],
     "Geography": ["Our Environment", "Air", "Water", "Natural Vegetation", "Human Resources", "Settlements", "India: Physical Features", "India: Climate"],
     "English": ["Prose", "Poetry", "Grammar and Composition", "Comprehension"],
     "Hindi": ["गद्य भाग", "पद्य भाग", "व्याकरण", "रचना"],
   },
   "8": {
     "Math": ["Rational Numbers", "Exponents and Powers", "Squares and Square Roots", "Cubes and Cube Roots", "Playing with Numbers", "Algebraic Expressions", "Factorisation", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Practical Geometry", "Data Handling", "Direct and Inverse Variation", "Time and Work", "Percentage and its Applications", "Compound Interest", "Mensuration"],
     "Science": ["Matter", "Physical and Chemical Changes", "Elements, Compounds and Mixtures", "Atomic Structure", "Language of Chemistry", "Chemical Reactions", "Hydrogen", "Carbon and its Compounds", "Air and Water", "Metals", "Electricity", "Magnetism", "Sound", "Force and Pressure", "Light", "The Cell", "Tissues", "Human Body Systems"],
     "History & Civics": ["The French Revolution", "The American War of Independence", "Colonialism", "Nationalism in India", "The Indian National Movement", "Civics: Our Constitution", "Parliament", "The Judiciary"],
     "Geography": ["Maps and Diagrams", "Weathering and Soil Formation", "Rocks", "Volcanoes and Earthquakes", "River", "Manufacturing Industries", "Transport", "India: Agriculture", "India: Industries"],
     "English": ["Prose", "Poetry", "Drama", "Grammar", "Composition"],
     "Hindi": ["गद्य भाग", "पद्य भाग", "व्याकरण", "रचना", "पत्र लेखन"],
   },
   "9": {
     "Math": ["Rational and Irrational Numbers", "Compound Interest", "Expansions", "Factorisation", "Simultaneous Linear Equations", "Indices", "Logarithms", "Triangles", "Isosceles Triangles", "Inequalities", "Mid-Point and Intercept Theorems", "Pythagoras Theorem", "Rectilinear Figures", "Construction of Polygons", "Area", "Statistics", "Mean and Median", "Area and Perimeter of Plane Figures", "Solids"],
     "Physics": ["Measurements and Experimentation", "Motion in One Dimension", "Laws of Motion", "Fluids", "Heat", "Light", "Sound", "Current Electricity", "Magnetism"],
     "Chemistry": ["The Language of Chemistry", "Chemical Changes and Reactions", "Water", "Atomic Structure and Chemical Bonding", "The Periodic Table", "Study of the First Element – Hydrogen", "Study of Gas Laws", "Atmospheric Pollution"],
     "Biology": ["Cell: The Unit of Life", "Tissues: Plant and Animal", "The Flower", "Pollination and Fertilization", "Seeds", "Respiration in Plants", "Five Kingdom Classification", "Economic Importance of Bacteria and Fungi", "Movement and Locomotion", "Skin – The Jack of All Trades", "The Respiratory System", "Diseases: Cause and Control"],
     "History & Civics": ["The Harappan Civilization", "The Vedic Period", "Jainism and Buddhism", "The Mauryan Empire", "The Sangam Age", "The Age of the Guptas", "Medieval India: The Sultanate Period", "The Mughal Empire", "The Beginning of Modern Age in Europe", "The Renaissance", "The Reformation", "Civics: Our Constitution", "Fundamental Rights and Duties", "Directive Principles of State Policy"],
     "Geography": ["Our World", "Geographic Grid: Latitudes and Longitudes", "Rotation and Revolution", "Structure of the Earth", "Landforms of the Earth", "Rocks", "Volcanoes", "Earthquakes", "Weathering", "Hydrosphere", "The Atmosphere", "Weather and Climate", "Pollution", "Natural Regions of the World"],
     "English": ["Prose", "Poetry", "Drama", "Short Stories", "Grammar", "Composition"],
     "Hindi": ["गद्य भाग", "पद्य भाग", "व्याकरण", "रचना", "अपठित गद्यांश"],
   },
   "10": {
     "Math": ["Commercial Mathematics", "Algebra", "Geometry", "Mensuration", "Trigonometry", "Statistics", "Probability", "Coordinate Geometry"],
     "Physics": ["Force", "Work, Energy and Power", "Machines", "Refraction of Light", "Lenses", "Spectrum", "Sound", "Current Electricity", "Electrical Power and Household Circuits", "Electro-magnetism", "Calorimetry", "Radioactivity"],
     "Chemistry": ["Periodic Properties and Variations of Properties", "Chemical Bonding", "Study of Acids, Bases and Salts", "Analytical Chemistry", "Mole Concept and Stoichiometry", "Electrolysis", "Metallurgy", "Study of Compounds", "Organic Chemistry"],
     "Biology": ["Cell Cycle and Cell Division", "Genetics", "Absorption by Roots", "Transpiration", "Photosynthesis", "The Circulatory System", "The Excretory System", "The Nervous System", "The Endocrine System", "The Reproductive System", "Population", "Pollution", "Health and Hygiene", "HIV/AIDS"],
     "History & Civics": ["The First War of Independence 1857", "Growth of Nationalism", "First Phase of the Indian National Movement", "Rise of Assertive Nationalism", "Partition of Bengal", "Foundation of the Muslim League", "The Lucknow Pact", "The Montagu-Chelmsford Reforms", "Mahatma Gandhi and the National Movement", "Forward Bloc and INA", "The Cabinet Mission", "Independence and Partition of India", "Civics: Union Legislature", "Union Executive", "The Judiciary"],
     "Geography": ["Map Work", "Development", "India: Location, Extent and Physical Features", "Climate", "Soil", "Natural Vegetation", "Water Resources", "Mineral and Energy Resources", "Agriculture", "Manufacturing Industries", "Transport", "Waste Management"],
     "English": ["Prose", "Poetry", "Drama", "Short Stories", "Grammar", "Composition", "Letter Writing"],
     "Hindi": ["गद्य भाग", "पद्य भाग", "व्याकरण", "रचना", "अपठित गद्यांश", "पत्र लेखन"],
   },
   "11": {
     "Physics": ["Physical World and Measurement", "Kinematics", "Laws of Motion", "Work, Energy and Power", "Motion of System of Particles and Rigid Body", "Gravitation", "Properties of Bulk Matter", "Thermodynamics", "Behaviour of Perfect Gas and Kinetic Theory", "Oscillations and Waves"],
     "Chemistry": ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements and Periodicity", "Chemical Bonding and Molecular Structure", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "The s-Block Elements", "The p-Block Elements", "Organic Chemistry: Basic Principles", "Hydrocarbons", "Environmental Chemistry"],
     "Biology": ["Diversity in Living World", "Structural Organisation in Animals and Plants", "Cell Structure and Function", "Plant Physiology", "Human Physiology"],
     "Math": ["Sets and Functions", "Algebra", "Coordinate Geometry", "Calculus", "Mathematical Reasoning", "Statistics and Probability"],
     "English": ["Prose", "Poetry", "Drama", "Short Stories", "Grammar", "Composition", "Comprehension"],
     "Accountancy": ["Meaning and Objectives of Accounting", "Basic Accounting Terms", "Theory Base of Accounting", "Origin of Transactions", "Recording of Transactions", "Ledger", "Trial Balance", "Subsidiary Books", "Rectification of Errors", "Financial Statements"],
     "Economics": ["Introduction to Economics", "Theory of Consumer Behaviour", "Theory of Production and Cost", "Theory of the Firm Under Perfect Competition", "Market Equilibrium", "Indian Economy", "Economic Development", "Human Capital Formation", "Rural Development", "Employment"],
     "Commerce": ["Nature and Purpose of Business", "Classification of Business", "Forms of Business Organisation", "Public, Private and Global Enterprises", "Business Services", "Sources of Business Finance", "Small Business", "Internal Trade", "External Trade", "Transport", "Communication", "Banking", "Insurance"],
   },
   "12": {
     "Physics": ["Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves", "Optics", "Dual Nature of Radiation and Matter", "Atoms and Nuclei", "Electronic Devices"],
     "Chemistry": ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "General Principles and Processes of Isolation of Elements", "p-Block Elements", "d and f Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Organic Compounds Containing Nitrogen", "Biomolecules", "Polymers", "Chemistry in Everyday Life"],
     "Biology": ["Reproduction", "Genetics and Evolution", "Biology and Human Welfare", "Biotechnology and Its Applications", "Ecology and Environment"],
     "Math": ["Relations and Functions", "Algebra", "Calculus", "Vectors and Three-Dimensional Geometry", "Linear Programming", "Probability"],
     "English": ["Prose", "Poetry", "Drama", "Short Stories", "Grammar", "Composition", "Comprehension"],
     "Accountancy": ["Accounting for Partnership Firms", "Reconstitution of Partnership", "Dissolution of Partnership Firm", "Accounting for Share Capital", "Issue and Redemption of Debentures", "Financial Statements of Companies", "Analysis of Financial Statements", "Cash Flow Statement"],
     "Economics": ["National Income", "Money and Banking", "Aggregate Demand and Aggregate Supply", "Government Budget", "Balance of Payments", "Development Experience of India"],
     "Commerce": ["Marketing", "Consumer Protection", "Nature and Significance of Management", "Principles of Management", "Business Environment", "Planning", "Organising", "Staffing", "Directing", "Controlling", "Financial Management", "Financial Markets"],
   },
 };
 
 // Combined syllabus data
 export const SYLLABUS_DATA: SyllabusData = {
   "CBSE": CBSE_SYLLABUS,
   "Bihar Board": BIHAR_BOARD_SYLLABUS,
   "ICSE": ICSE_SYLLABUS,
   "Other": CBSE_SYLLABUS, // Default to CBSE for Other boards
 };
 
 // Helper function to get syllabus for a specific board, class, and subject
 export const getSyllabus = (
   board: BoardType,
   classLevel: string,
   subject?: string
 ): string[] | Record<string, string[]> | null => {
   const boardData = SYLLABUS_DATA[board] || SYLLABUS_DATA["CBSE"];
   const classData = boardData[classLevel];
   
   if (!classData) return null;
   
   if (subject) {
     return classData[subject] || null;
   }
   
   return classData;
 };
 
 // Helper function to get all subjects for a class and board
 export const getSubjects = (board: BoardType, classLevel: string): string[] => {
   const boardData = SYLLABUS_DATA[board] || SYLLABUS_DATA["CBSE"];
   const classData = boardData[classLevel];
   
   if (!classData) return [];
   
   return Object.keys(classData);
 };
 
 // Helper function to get chapters for a subject
 export const getChapters = (
   board: BoardType,
   classLevel: string,
   subject: string
 ): string[] => {
   const boardData = SYLLABUS_DATA[board] || SYLLABUS_DATA["CBSE"];
   const classData = boardData[classLevel];
   
   if (!classData || !classData[subject]) return [];
   
   return classData[subject];
 };