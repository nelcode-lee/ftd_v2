// Test data based on module knowledge stops with multiple choice questions
export const testData = {
  1: {
    id: 1,
    title: "Module 1: Introduction to Forward Tipping Dumper",
    timeLimit: 20, // minutes
    passThreshold: 80, // percentage
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "List 4 main hazards that are commonly found on a construction site.",
        options: [
          "Moving vehicles and machinery, Working at height, Electrical hazards, Manual handling injuries",
          "Bad weather, Poor lighting, Loud noises, Uncomfortable temperatures",
          "Heavy lifting, Long hours, Difficult terrain, Complex procedures",
          "Equipment failure, Software bugs, Communication issues, Time pressure"
        ],
        correct: 0,
        explanation: "The main construction site hazards include moving vehicles and machinery, working at height, electrical hazards, and manual handling injuries. Additional hazards include slips trips and falls, noise exposure, dust and harmful substances, and excavations and confined spaces."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "A dumper is classified by a manufacturer as a six-tonne dumper. What does this mean?",
        options: [
          "The dumper weighs six tonnes when empty",
          "The dumper can safely carry up to six tonnes of material in its skip",
          "The dumper's engine produces six tonnes of force",
          "The dumper can tow up to six tonnes behind it"
        ],
        correct: 1,
        explanation: "This refers to the maximum payload capacity of the dumper - it can safely carry up to six tonnes of material in its skip. This is the safe working load limit for the machine."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "List 5 effects of hazards on a construction site:",
        options: [
          "Increased costs, Slower progress, More paperwork, Additional meetings, Extra supervision",
          "Injury to people, Damage to equipment/property, Environmental damage, Production delays/losses, Legal consequences",
          "Worker complaints, Management concerns, Client dissatisfaction, Supplier issues, Transport problems",
          "Equipment wear, Material wastage, Energy consumption, Space requirements, Storage needs"
        ],
        correct: 1,
        explanation: "The five main effects of hazards are: injury to people, damage to equipment/property, environmental damage, production delays/losses, and legal consequences and prosecution."
      }
    ]
  },
  2: {
    id: 2,
    title: "Module 2: Health & Safety Legislation",
    timeLimit: 25, // minutes
    passThreshold: 80, // percentage
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "What does the Health & Safety at Work etc. Act 1974 require employers to do, specifically regarding plant?",
        options: [
          "Only provide basic safety information to workers",
          "Ensure plant is purchased from approved suppliers only",
          "Ensure plant and equipment is safe, provide adequate training and supervision, maintain equipment safely",
          "Replace all plant equipment every five years regardless of condition"
        ],
        correct: 2,
        explanation: "Employers must ensure that plant and equipment is safe and without risks to health, provide adequate training and supervision, maintain equipment in safe condition, and provide information, instruction, training and supervision to ensure health and safety at work."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "List the 3 main duties placed on employees under the Health and Safety at Work Act 1974:",
        options: [
          "Work overtime when required, Follow all company policies, Report to work on time",
          "Take reasonable care for health and safety, Cooperate with employer, Not misuse safety provisions",
          "Wear company uniform, Use company equipment only, Follow supervisor instructions",
          "Complete training courses, Pass safety tests, Maintain clean workspace"
        ],
        correct: 1,
        explanation: "The three main duties are: 1) Take reasonable care for their own health and safety and that of others, 2) Cooperate with their employer on health and safety matters, 3) Not intentionally or recklessly interfere with or misuse anything provided in the interests of health, safety or welfare."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "What is the primary piece of health and safety legislation in the UK?",
        options: [
          "The Construction (Design and Management) Regulations 2015",
          "The Health and Safety at Work Act 1974",
          "The Provision and Use of Work Equipment Regulations 1998",
          "The Management of Health and Safety at Work Regulations 1999"
        ],
        correct: 1,
        explanation: "The Health and Safety at Work Act 1974 is the primary piece of health and safety legislation in the UK, providing the framework for all other health and safety regulations."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Why are plant operators generally regarded as safety critical workers?",
        options: [
          "Because they earn higher wages than other construction workers",
          "Because they work longer hours and need more breaks",
          "Because their actions with the machine can have significant health & safety consequences for themselves and others",
          "Because they need special licenses to operate on public roads"
        ],
        correct: 2,
        explanation: "Plant operators are safety critical workers because their actions with the machine can have significant health & safety consequences for themselves and others. Their operations can directly impact the safety of other workers and the public."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "What are the two main plant operator card schemes in the construction plant training sector?",
        options: [
          "CSCS and CITB",
          "CPCS and NPORS",
          "NHBC and LABC",
          "HSE and CQC"
        ],
        correct: 1,
        explanation: "CPCS (Construction Plant Competence Scheme) and NPORS (National Plant Operators Registration Scheme) are the two main plant operator card schemes in the construction plant training sector."
      }
    ]
  },
  3: {
    id: 3,
    title: "Module 3: Pre-Operational Checks and Procedures",
    timeLimit: 30, // minutes
    passThreshold: 80, // percentage
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "What are the main components of a Forward Tipping Dumper that should be checked?",
        options: [
          "Radio, air conditioning, cup holders, and seat adjustment",
          "Paint condition, company logos, registration plates, and documentation",
          "Chassis, skip, hydraulic system, engine, operator controls, and safety systems",
          "Fuel efficiency, emissions levels, noise output, and vibration levels"
        ],
        correct: 2,
        explanation: "The main components include the chassis, skip, hydraulic system, engine, operator controls, and safety systems. These are critical for safe operation."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "If an operator has to top-up the hydraulic oil, state two precautions that ensure cleanliness of the system:",
        options: [
          "Wear gloves and safety glasses",
          "Always ensure the filler cap area is clean before removing the cap, and always use a clean container",
          "Check the oil temperature and viscosity first",
          "Turn off the engine and wait for cool down"
        ],
        correct: 1,
        explanation: "The two key precautions are: 1) Always ensure the filler cap area is clean before removing the cap, 2) Always use a clean container when filling the system to prevent contamination."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "Why should the machine be re-fuelled at the end of the day?",
        options: [
          "To ensure the tank is always full for emergency use",
          "To prevent condensation building up in the tank, which can cause water contamination",
          "To make the morning startup faster and more efficient",
          "To reduce the risk of fuel theft overnight"
        ],
        correct: 1,
        explanation: "Re-fuelling at the end of the day prevents condensation building up in the tank, which can cause water contamination in the fuel system and potential engine problems."
      }
    ]
  },
  4: {
    id: 4,
    title: "Module 4: Basic Operating Procedures",
    timeLimit: 25, // minutes
    passThreshold: 80, // percentage
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "What should be checked before operating a Forward Tipping Dumper?",
        options: [
          "Only the fuel level and engine oil",
          "Visual inspection, fluid levels, safety systems, brakes, steering, and all safety equipment",
          "Just the hydraulic system and skip operation",
          "Only the operator's seat and mirrors"
        ],
        correct: 1,
        explanation: "Before operating, you should conduct a visual inspection, check fluid levels, safety systems, brakes, steering, and all safety equipment to ensure safe operation."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "The function or job role of a dumper driver, when transporting materials, is to:",
        options: [
          "Drive as fast as possible to increase productivity",
          "Only focus on loading the maximum amount of material",
          "Safely transport materials from loading areas to discharge points while following safe operating procedures",
          "Prioritize speed over safety to meet deadlines"
        ],
        correct: 2,
        explanation: "The dumper driver's role is to safely transport materials from loading areas to discharge points, ensure load integrity and security, follow safe operating procedures, and maintain awareness of site conditions and other workers."
      }
    ]
  },
  5: {
    id: 5,
    title: "Module 5: Travel and Manoeuvre Operations",
    timeLimit: 20, // minutes
    passThreshold: 80, // percentage
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "What is the correct sequence for operating a Forward Tipping Dumper?",
        options: [
          "Start engine, load materials, drive to site, dump load, return",
          "Load materials first, then start engine, drive and dump",
          "Pre-start checks, start engine, warm-up, load materials, transport to dump site, position for dumping, discharge load, return to loading area, shutdown procedures",
          "Warm-up engine, skip checks, load quickly, dump and return"
        ],
        correct: 2,
        explanation: "The correct sequence is: Pre-start checks, start engine, warm-up, load materials, transport to dump site, position for dumping, discharge load, return to loading area, shutdown procedures."
      }
    ]
  },
  6: {
    id: 6,
    title: "Module 6: Loading and Discharging Operations",
    timeLimit: 30, // minutes
    passThreshold: 80, // percentage
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "What are the key safety considerations when discharging loads?",
        options: [
          "Just make sure the skip is empty after dumping",
          "Only check that no one is behind the machine",
          "Use a banksman if necessary, ensure stop blocks are in place, check cameras for visibility, and never overrun into trenches",
          "Drive as close to the edge as possible for better dumping"
        ],
        correct: 2,
        explanation: "Key safety considerations include: use a banksman if necessary, ensure stop blocks are in place, check cameras for visibility, and never overrun into trenches. These prevent accidents during discharge operations."
      }
    ]
  }
};

// Get test by module ID
export const getTestByModuleId = (moduleId) => {
  return testData[moduleId] || null;
};

// Get all available tests
export const getAllTests = () => {
  return Object.values(testData);
};

// Calculate test score
export const calculateScore = (answers, test) => {
  if (!answers || !test) return { score: 0, percentage: 0, passed: false };
  
  let correctAnswers = 0;
  const totalQuestions = test.questions.length;
  
  test.questions.forEach((question, index) => {
    const userAnswer = answers[index];
    if (question.type === 'multiple_choice' && userAnswer === question.correct) {
      correctAnswers++;
    }
  });
  
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = percentage >= test.passThreshold;
  
  return {
    score: correctAnswers,
    total: totalQuestions,
    percentage,
    passed,
    threshold: test.passThreshold
  };
};
