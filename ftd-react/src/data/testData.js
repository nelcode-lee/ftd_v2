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
    timeLimit: 35, // minutes
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
        question: "What does PUWER 1998 require regarding work equipment?",
        options: [
          "Work equipment must be replaced every 5 years",
          "Work equipment must be suitable for its intended use, maintained in a safe condition, inspected regularly, and only used by trained people",
          "Work equipment must only be purchased from approved suppliers",
          "Work equipment must be tested by external contractors only"
        ],
        correct: 1,
        explanation: "PUWER 1998 requires that work equipment must be suitable for its intended use, maintained in a safe condition, inspected regularly, and only used by people who have received adequate information, instruction and training."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "What are the main types of pollution associated with construction operations?",
        options: [
          "Light pollution, Sound pollution, Air pollution",
          "Air pollution, Water pollution, Noise pollution",
          "Chemical pollution, Visual pollution, Thermal pollution",
          "Electromagnetic pollution, Radioactive pollution, Biological pollution"
        ],
        correct: 1,
        explanation: "The main types of pollution associated with construction operations are: Air pollution, Water pollution, and Noise pollution."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "List SIX typical subject areas that should be covered in a site induction:",
        options: [
          "Access and egress, Safety signs and signals, Emergency procedures, Welfare facilities, Restricted/prohibited areas, Traffic routes",
          "Company history, Employee benefits, Holiday policies, Training schedules, Equipment manuals, Safety procedures",
          "Weather conditions, Site layout, Working hours, Break times, Lunch facilities, Parking arrangements",
          "Uniform requirements, ID badges, Security procedures, Visitor policies, Meeting rooms, Communication systems"
        ],
        correct: 0,
        explanation: "Six typical subject areas include: Access and egress, Safety signs and signals, Emergency procedures, Welfare facilities, Restricted/prohibited areas, Traffic routes. Additional areas include site layout, reporting procedures, PPE/RPE requirements, smoking policy, waste disposal, working from/at height, lifting operations, electricity, buried services, confined spaces, and accident reporting."
      },
      {
        id: 7,
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
        id: 8,
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
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "What is the purpose of a Method Statement?",
        options: [
          "To record daily work activities and hours",
          "To document specific instructions on how to SAFELY perform a work-related task",
          "To track equipment maintenance schedules",
          "To record training completion certificates"
        ],
        correct: 1,
        explanation: "A Method Statement documents specific instructions on how to SAFELY perform a work-related task, including the sequence of work and safety precautions."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "What are the main duties of a plant operator as a safety critical worker?",
        options: [
          "Only operate the machine efficiently and quickly",
          "Only use site plant if trained and authorized, work safely and efficiently, comply with method statements, be punctual and cooperative",
          "Just follow supervisor instructions without question",
          "Only focus on completing tasks as quickly as possible"
        ],
        correct: 1,
        explanation: "As a safety critical worker, plant operators must: only use site plant if trained and authorized, work safely and efficiently, comply with method statements, and be punctual and cooperative."
      },
      {
        id: 11,
        type: "multiple_choice",
        question: "What additional legislation covers health and safety in construction?",
        options: [
          "Only the Health and Safety at Work Act 1974",
          "Management of Health and Safety at Work Regulations (MHSWR), Construction (Design and Management) Regulations (CDM), Vibration at Work Regulations, Road Traffic Act",
          "Only PUWER 1998 and CDM Regulations",
          "Only HSE guidance documents"
        ],
        correct: 1,
        explanation: "Additional legislation includes: Management of Health and Safety at Work Regulations (MHSWR), Construction (Design and Management) Regulations (CDM), Vibration at Work Regulations, Road Traffic Act, HSG 114, HSG 46, Plant Safety Group guidelines, COSHH Regulations, Control of Noise Regulations."
      },
      {
        id: 12,
        type: "multiple_choice",
        question: "What are the key environmental best practices when operating plant?",
        options: [
          "Use the machine as fast as possible to finish quickly",
          "Use the machine efficiently, minimize emissions, prevent fuel and oil spills, reduce noise levels, and follow site environmental policies",
          "Only focus on productivity and speed",
          "Ignore environmental considerations to save time"
        ],
        correct: 1,
        explanation: "Key environmental best practices include: use the machine efficiently, minimize emissions, prevent fuel and oil spills, reduce noise levels, and follow site environmental policies."
      }
    ]
  },
  3: {
    id: 3,
    title: "Module 3: Major Components of Forward Tipping Dumper",
    timeLimit: 35, // minutes
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
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "What is the purpose of ROPS (Roll Over Protective Structure)?",
        options: [
          "To provide shade from the sun",
          "To reduce noise levels in the cab",
          "To provide some protection to the operating position in the event of an overturn",
          "To improve fuel efficiency"
        ],
        correct: 2,
        explanation: "ROPS provides some protection to the operating position (as far as is reasonably practicable) in the event of an overturn."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "What is the purpose of FOPS (Falling Object Protective Structures)?",
        options: [
          "To improve visibility for the operator",
          "To reduce engine noise",
          "To stop any falling material striking the operator where there is risk of people being struck by falling material",
          "To increase the machine's lifting capacity"
        ],
        correct: 2,
        explanation: "FOPS or a manufacturer's strengthened cab must be fitted to stop any falling material striking the operator where there is risk of people being struck by falling material."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Why must seat belts be worn even when the cab door is closed?",
        options: [
          "To comply with company policy only",
          "To keep the operator warm in cold weather",
          "In the event of a roll over, it will keep the operator within the confines of the operating seat which may minimise injury",
          "To prevent the operator from falling out of the seat during normal operation"
        ],
        correct: 2,
        explanation: "In the event of a roll over (as far as reasonably practical), it will keep the operator within the confines of the operating seat which may minimise injury."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Name THREE purposes of the raised lugs on tyres and what can happen to a dumper if the lugs are severely worn?",
        options: [
          "Provide traction/grip for moving, Enable steering control, Assist with braking in soft mud. If severely worn: traction and grip will be severely affected",
          "Reduce fuel consumption, Improve speed, Increase comfort. If severely worn: the machine will be faster",
          "Look attractive, Make noise, Show company branding. If severely worn: the machine will be quieter",
          "Reduce maintenance, Increase durability, Improve handling. If severely worn: maintenance costs will decrease"
        ],
        correct: 0,
        explanation: "Three purposes: 1) Provide traction/grip for moving, 2) Enable steering control, 3) Assist with braking in soft mud. If severely worn: traction and grip will be severely affected, making the machine unsafe to operate on soft or slippery surfaces."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Can you identify at least one component you would be checking in the following images?",
        options: [
          "Company logos, Paint condition, Registration plates",
          "Engine oil level, hydraulic fluid level, coolant level, fuel level, tyre condition, brake system, steering system, lights and indicators, mirrors, seat belts, ROPS/FOPS structures",
          "Radio settings, Air conditioning, Cup holders",
          "Fuel efficiency, Emissions levels, Noise output"
        ],
        correct: 1,
        explanation: "Components to check include: Engine oil level, hydraulic fluid level, coolant level, fuel level, tyre condition, brake system, steering system, lights and indicators, mirrors, seat belts, ROPS/FOPS structures."
      }
    ]
  },
  4: {
    id: 4,
    title: "Module 4: Pre-Operational Checks & Safety Procedures",
    timeLimit: 35, // minutes
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
        question: "What PPE is required when operating a Forward Tipping Dumper?",
        options: [
          "Only a hard hat and safety boots",
          "Head protection, Foot protection, High-visibility clothing, Weather-appropriate clothing, Hearing protection, Eye protection, and Gloves",
          "Just high-visibility clothing and safety boots",
          "Only what the site manager tells you to wear"
        ],
        correct: 1,
        explanation: "Required PPE includes: Head protection, Foot protection, High-visibility clothing, Weather-appropriate clothing, Hearing protection, Eye protection, and Gloves."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "What are the key points for safely getting on and off the Forward Tipping Dumper?",
        options: [
          "Jump on and off as quickly as possible",
          "Face the machine using specific steps and handrails, maintain 3 points of contact wherever possible, ensure steps and handrails are clean and clear of debris",
          "Use any available handhold or step",
          "Get on and off from any direction"
        ],
        correct: 1,
        explanation: "Key points include: Face the machine using specific steps and handrails, maintain 3 points of contact wherever possible, ensure steps and handrails are clean and clear of debris, ensure ground is firm and clear of obstructions before exiting."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "What items should be checked in the pre-travel configuration checklist?",
        options: [
          "Only the fuel level and engine temperature",
          "Engine cover secured, parking brake on, controls neutralised, seat adjusted for comfort/reach, steering column adjusted appropriately, seatbelt worn and adjusted, foot brake pressure checked",
          "Just the radio and air conditioning",
          "Only the mirrors and lights"
        ],
        correct: 1,
        explanation: "Pre-travel checklist includes: Engine cover secured, parking brake on, controls neutralised, seat adjusted for comfort/reach, steering column adjusted appropriately, seatbelt worn and adjusted, foot brake pressure checked."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "What should be checked regarding visibility aids?",
        options: [
          "Only that mirrors are clean",
          "All mirrors/cameras correctly fitted, unbroken, clean, and correctly adjusted. Check that ALL mirrors are clean and correctly positioned to provide clear, unobstructed view behind the dumper",
          "Just that cameras are working",
          "Only the rear view mirror"
        ],
        correct: 1,
        explanation: "Visibility aids check includes: All mirrors/cameras correctly fitted, unbroken, clean, and correctly adjusted. Check that ALL mirrors are clean and correctly positioned to provide clear, unobstructed view behind the dumper."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "What are the requirements for travelling on a public highway?",
        options: [
          "Just drive carefully and follow traffic signs",
          "Dumper must be registered and taxed as 'special vehicle', have vehicle insurance, horn if exceeding 20mph, speedometer if exceeding 25mph, brakes enabling it to stop, lights and indicators, operator must hold full UK car license (Category B)",
          "Only need a driving license",
          "Just follow the same rules as a car"
        ],
        correct: 1,
        explanation: "Requirements include: Dumper must be registered and taxed as 'special vehicle', have vehicle insurance, horn if exceeding 20mph, speedometer if exceeding 25mph, brakes enabling it to stop, lights and indicators, operator must hold full UK car license (Category B), be minimum 18 for 3.5T-7.5T vehicles, minimum 21 for vehicles exceeding 7.5T."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "What considerations are needed when working in pedestrianised areas?",
        options: [
          "Just drive slowly and carefully",
          "Always ensure physical segregation of pedestrians from machines and work, consider machine movements, noise, and fumes",
          "Only work when no pedestrians are present",
          "Just use a banksman"
        ],
        correct: 1,
        explanation: "Considerations include: Always ensure physical segregation of pedestrians from machines and work, consider machine movements, noise, and fumes."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "What are the daily checks that should be performed?",
        options: [
          "Only check fuel and oil levels",
          "Items/Components to be checked: Engine oil, hydraulic fluid, coolant, fuel, tyres, brakes, steering, lights, mirrors, seat belts, ROPS/FOPS. Running checks: Engine operation, hydraulic functions, steering response, brake effectiveness, skip operation",
          "Just check the engine and hydraulic system",
          "Only check what the supervisor tells you"
        ],
        correct: 1,
        explanation: "Daily checks include: Items/Components to be checked: Engine oil, hydraulic fluid, coolant, fuel, tyres, brakes, steering, lights, mirrors, seat belts, ROPS/FOPS. Running checks: Engine operation, hydraulic functions, steering response, brake effectiveness, skip operation."
      }
    ]
  },
  5: {
    id: 5,
    title: "Module 5: Travel and Manoeuvre Operations",
    timeLimit: 35, // minutes
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
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "What is the general rule for travelling on slopes with a loaded skip?",
        options: [
          "Always travel downhill regardless of load position",
          "Travel the heaviest part of the machine UPHILL",
          "Travel sideways across slopes for better stability",
          "Reduce speed and use low gear only"
        ],
        correct: 1,
        explanation: "The general rule is to travel the heaviest part of the machine UPHILL. Always refer to the operator's manual for correct positioning on inclines/slopes."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "What are the minimum safe distances to maintain from overhead power lines?",
        options: [
          "Low-voltage: 1m, 11kV/33kV: 3m, 132kV: 6m, 275kV/400kV: 7m",
          "All power lines require a minimum of 5 meters distance",
          "Low-voltage: 2m, High-voltage: 10m",
          "Distance depends on weather conditions only"
        ],
        correct: 0,
        explanation: "The minimum safe distances are: Low-voltage line – 1m, 11kV and 33kV lines – 3m, 132kV line – 6m, 275kV and 400kV lines – 7m."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "What are the main hazards when operating in confined areas?",
        options: [
          "Only noise and limited visibility",
          "Fumes, Noise, Limited visibility, Excessive manoeuvring, Proximity hazards",
          "Just poor lighting and tight spaces",
          "Only equipment damage and fuel consumption"
        ],
        correct: 1,
        explanation: "The main hazards when operating in confined areas are: Fumes, Noise, Limited visibility, Excessive manoeuvring, and Proximity hazards."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "What does the Spillard Human Detection System aim to do?",
        options: [
          "Only monitor fuel consumption and engine performance",
          "Warn operators and pedestrians of potential collision risks, improve operator awareness, detect human form whilst ignoring changing backgrounds, reduce risk whilst improving operator-pedestrian interaction",
          "Just record video footage for later review",
          "Only control the skip operation automatically"
        ],
        correct: 1,
        explanation: "The Spillard Human Detection System aims to: warn operators and pedestrians of potential collision risks, improve operator awareness, detect human form whilst ignoring changing backgrounds, and reduce risk whilst improving operator-pedestrian interaction."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "What are the key requirements for towing equipment with a dumper?",
        options: [
          "Any equipment can be towed as long as it has a tow hitch",
          "All options considered, manufacturer authorization, compatible equipment, proper training, correct towing pin and safety pin",
          "Just ensure the dumper has enough power",
          "Only check that the equipment is not too heavy"
        ],
        correct: 1,
        explanation: "Key requirements include: all options have been considered, towing activities are authorized by the manufacturer, equipment compatibility, proper training, and correct towing pin with safety pin."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "What are the requirements for working in pedestrianised areas?",
        options: [
          "Just drive slowly and carefully",
          "Always ensure physical segregation of pedestrians from machines and work, consider machine movements, noise, and fumes",
          "Only work when no pedestrians are present",
          "Just use a banksman"
        ],
        correct: 1,
        explanation: "Requirements include: Always ensure physical segregation of pedestrians from machines and work, consider machine movements, noise, and fumes."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "What are the requirements for travelling on a public highway?",
        options: [
          "Just drive carefully and follow traffic signs",
          "Dumper must be registered and taxed as 'special vehicle', have vehicle insurance, horn if exceeding 20mph, speedometer if exceeding 25mph, brakes enabling it to stop, lights and indicators, operator must hold full UK car license (Category B)",
          "Only need a driving license",
          "Just follow the same rules as a car"
        ],
        correct: 1,
        explanation: "Requirements include: Dumper must be registered and taxed as 'special vehicle', have vehicle insurance, horn if exceeding 20mph, speedometer if exceeding 25mph, brakes enabling it to stop, lights and indicators, operator must hold full UK car license (Category B), be minimum 18 for 3.5T-7.5T vehicles, minimum 21 for vehicles exceeding 7.5T."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "What safety considerations are needed when manoeuvring in areas of restricted space?",
        options: [
          "Just drive slowly and carefully",
          "Check overhead services, maintain safe distances from power lines, use banksman if necessary, be aware of blind spots, and follow site traffic management plans",
          "Only work when no other machines are present",
          "Just follow the supervisor's instructions"
        ],
        correct: 1,
        explanation: "Safety considerations include: Check overhead services, maintain safe distances from power lines, use banksman if necessary, be aware of blind spots, and follow site traffic management plans."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "What is the purpose of a rotating seat dumper?",
        options: [
          "To make the operator more comfortable",
          "Allows the operator to change seat and console position to provide the best viewpoint while travelling, manoeuvring and operating the machine",
          "To reduce operator fatigue",
          "To increase the machine's speed"
        ],
        correct: 1,
        explanation: "A rotating seat dumper allows the operator to change seat and console position to provide the best viewpoint while travelling, manoeuvring and operating the machine."
      }
    ]
  },
  6: {
    id: 6,
    title: "Module 6: Loading and Discharging Operations",
    timeLimit: 35, // minutes
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
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "What actions must be taken to ensure load integrity and security?",
        options: [
          "Just load as much as possible to maximize efficiency",
          "Ensure the load is secured and stable, check your travel route, arrange assistance for observation and visibility, never overload the skip",
          "Only check that the load doesn't fall out",
          "Just drive carefully to the destination"
        ],
        correct: 1,
        explanation: "Actions include: Ensure the load is secured and stable, check your travel route, arrange assistance for observation and visibility, never overload the skip as it obscures the operator's view and significantly reduces visibility."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "What are the considerations when loading, transporting and discharging different materials?",
        options: [
          "All materials should be handled the same way",
          "Denser materials: may overload tyres and stick to the body when tipping, may need to tip at different locations. Semi-Fluid materials: may spill during travel. Spoil: should be segregated for re-use on or off-site where possible",
          "Just load everything together to save time",
          "Only consider the weight of the material"
        ],
        correct: 1,
        explanation: "Considerations include: Denser materials: may overload tyres and stick to the body when tipping, may need to tip at different locations. Semi-Fluid materials: may spill during travel. Spoil: should be segregated for re-use on or off-site where possible."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "What are the main types of pollution associated with construction operations?",
        options: [
          "Light pollution, Sound pollution, Air pollution",
          "Air pollution, Water pollution, Noise pollution",
          "Chemical pollution, Visual pollution, Thermal pollution",
          "Electromagnetic pollution, Radioactive pollution, Biological pollution"
        ],
        correct: 1,
        explanation: "The main types of pollution associated with construction operations are: Air pollution, Water pollution, and Noise pollution."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "What checks should be made before loading a dumper onto a transporter?",
        options: [
          "Only check that the dumper fits on the trailer",
          "Ground support, Ramp condition, Overhead and other hazards, Positioning on trailer, Direction of travel",
          "Just check the weather conditions",
          "Only check the driver's license"
        ],
        correct: 1,
        explanation: "Checks include: Ground support, Ramp condition, Overhead and other hazards, Positioning on trailer, Direction of travel."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "What is an exclusion zone and why is it important?",
        options: [
          "An area where only certain people can work",
          "A designated area where access is restricted due to potential hazards such as heavy machinery or dangerous operations. It's important for preventing accidents and protecting workers",
          "An area where equipment is stored",
          "An area where materials are stockpiled"
        ],
        correct: 1,
        explanation: "An exclusion zone is a designated area where access is restricted due to potential hazards such as heavy machinery or dangerous operations. It's important for preventing accidents and protecting workers."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "What are the key shut down procedures?",
        options: [
          "Just turn off the engine and walk away",
          "Park on level ground, lower skip completely, engage parking brake, turn off engine, remove key, secure machine, complete documentation, report any defects",
          "Only turn off the engine and remove the key",
          "Just park the machine anywhere convenient"
        ],
        correct: 1,
        explanation: "Key shut down procedures include: Park on level ground, lower skip completely, engage parking brake, turn off engine, remove key, secure machine, complete documentation, report any defects."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "What environmental best practices should be followed when operating plant?",
        options: [
          "Use the machine as fast as possible to finish quickly",
          "Use the machine efficiently, minimize emissions, prevent fuel and oil spills, reduce noise levels, and follow site environmental policies",
          "Only focus on productivity and speed",
          "Ignore environmental considerations to save time"
        ],
        correct: 1,
        explanation: "Environmental best practices include: use the machine efficiently, minimize emissions, prevent fuel and oil spills, reduce noise levels, and follow site environmental policies."
      }
    ]
  },
  7: {
    id: 7,
    title: "End of Course Assessment - Complete Knowledge Test",
    timeLimit: 60, // minutes
    passThreshold: 80, // percentage
    questions: [
      // Module 1 Questions
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
        explanation: "The main construction site hazards include moving vehicles and machinery, working at height, electrical hazards, and manual handling injuries."
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
        explanation: "This refers to the maximum payload capacity of the dumper - it can safely carry up to six tonnes of material in its skip."
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
        explanation: "The five main effects of hazards are: injury to people, damage to equipment/property, environmental damage, production delays/losses, and legal consequences."
      },
      // Module 2 Questions
      {
        id: 4,
        type: "multiple_choice",
        question: "What does the Health & Safety at Work etc. Act 1974 require employers to do, specifically regarding plant?",
        options: [
          "Only provide basic safety information to workers",
          "Ensure plant is purchased from approved suppliers only",
          "Ensure plant and equipment is safe, provide adequate training and supervision, maintain equipment safely",
          "Replace all plant equipment every five years regardless of condition"
        ],
        correct: 2,
        explanation: "Employers must ensure that plant and equipment is safe and without risks to health, provide adequate training and supervision, and maintain equipment in safe condition."
      },
      {
        id: 5,
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
        id: 6,
        type: "multiple_choice",
        question: "What are the two main plant operator card schemes in the construction plant training sector?",
        options: [
          "CSCS and CITB",
          "CPCS and NPORS",
          "NHBC and LABC",
          "HSE and CQC"
        ],
        correct: 1,
        explanation: "CPCS (Construction Plant Competence Scheme) and NPORS (National Plant Operators Registration Scheme) are the two main plant operator card schemes."
      },
      // Module 3 Questions
      {
        id: 7,
        type: "multiple_choice",
        question: "What are the main components of a Forward Tipping Dumper that should be checked?",
        options: [
          "Radio, air conditioning, cup holders, and seat adjustment",
          "Paint condition, company logos, registration plates, and documentation",
          "Chassis, skip, hydraulic system, engine, operator controls, and safety systems",
          "Fuel efficiency, emissions levels, noise output, and vibration levels"
        ],
        correct: 2,
        explanation: "The main components include the chassis, skip, hydraulic system, engine, operator controls, and safety systems."
      },
      {
        id: 8,
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
        id: 9,
        type: "multiple_choice",
        question: "Why should the machine be re-fuelled at the end of the day?",
        options: [
          "To ensure the tank is always full for emergency use",
          "To prevent condensation building up in the tank, which can cause water contamination",
          "To make the morning startup faster and more efficient",
          "To reduce the risk of fuel theft overnight"
        ],
        correct: 1,
        explanation: "Re-fuelling at the end of the day prevents condensation building up in the tank, which can cause water contamination in the fuel system."
      },
      // Module 4 Questions
      {
        id: 10,
        type: "multiple_choice",
        question: "What should be checked before operating a Forward Tipping Dumper?",
        options: [
          "Only the fuel level and engine oil",
          "Visual inspection, fluid levels, safety systems, brakes, steering, and all safety equipment",
          "Just the hydraulic system and skip operation",
          "Only the operator's seat and mirrors"
        ],
        correct: 1,
        explanation: "Before operating, you should conduct a visual inspection, check fluid levels, safety systems, brakes, steering, and all safety equipment."
      },
      {
        id: 11,
        type: "multiple_choice",
        question: "The function or job role of a dumper driver, when transporting materials, is to:",
        options: [
          "Drive as fast as possible to increase productivity",
          "Only focus on loading the maximum amount of material",
          "Safely transport materials from loading areas to discharge points while following safe operating procedures",
          "Prioritize speed over safety to meet deadlines"
        ],
        correct: 2,
        explanation: "The dumper driver's role is to safely transport materials from loading areas to discharge points while following safe operating procedures."
      },
      // Module 5 Questions
      {
        id: 12,
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
      },
      {
        id: 13,
        type: "multiple_choice",
        question: "What are the key safety considerations when discharging loads?",
        options: [
          "Just make sure the skip is empty after dumping",
          "Only check that no one is behind the machine",
          "Use a banksman if necessary, ensure stop blocks are in place, check cameras for visibility, and never overrun into trenches",
          "Drive as close to the edge as possible for better dumping"
        ],
        correct: 2,
        explanation: "Key safety considerations include: use a banksman if necessary, ensure stop blocks are in place, check cameras for visibility, and never overrun into trenches."
      },
      // Additional Comprehensive Questions
      {
        id: 14,
        type: "multiple_choice",
        question: "What is the general rule for travelling on slopes with a loaded skip?",
        options: [
          "Always travel downhill regardless of load position",
          "Travel the heaviest part of the machine UPHILL",
          "Travel sideways across slopes for better stability",
          "Reduce speed and use low gear only"
        ],
        correct: 1,
        explanation: "The general rule is to travel the heaviest part of the machine UPHILL. Always refer to the operator's manual for correct positioning on inclines/slopes."
      },
      {
        id: 15,
        type: "multiple_choice",
        question: "What are the minimum safe distances to maintain from overhead power lines?",
        options: [
          "Low-voltage: 1m, 11kV/33kV: 3m, 132kV: 6m, 275kV/400kV: 7m",
          "All power lines require a minimum of 5 meters distance",
          "Low-voltage: 2m, High-voltage: 10m",
          "Distance depends on weather conditions only"
        ],
        correct: 0,
        explanation: "The minimum safe distances are: Low-voltage line – 1m, 11kV and 33kV lines – 3m, 132kV line – 6m, 275kV and 400kV lines – 7m."
      },
      {
        id: 16,
        type: "multiple_choice",
        question: "What are the main hazards when operating in confined areas?",
        options: [
          "Only noise and limited visibility",
          "Fumes, Noise, Limited visibility, Excessive manoeuvring, Proximity hazards",
          "Just poor lighting and tight spaces",
          "Only equipment damage and fuel consumption"
        ],
        correct: 1,
        explanation: "The main hazards when operating in confined areas are: Fumes, Noise, Limited visibility, Excessive manoeuvring, and Proximity hazards."
      },
      {
        id: 17,
        type: "multiple_choice",
        question: "What does the Spillard Human Detection System aim to do?",
        options: [
          "Only monitor fuel consumption and engine performance",
          "Warn operators and pedestrians of potential collision risks, improve operator awareness, detect human form whilst ignoring changing backgrounds, reduce risk whilst improving operator-pedestrian interaction",
          "Just record video footage for later review",
          "Only control the skip operation automatically"
        ],
        correct: 1,
        explanation: "The Spillard Human Detection System aims to: warn operators and pedestrians of potential collision risks, improve operator awareness, detect human form whilst ignoring changing backgrounds, and reduce risk whilst improving operator-pedestrian interaction."
      },
      {
        id: 18,
        type: "multiple_choice",
        question: "What are the key requirements for towing equipment with a dumper?",
        options: [
          "Any equipment can be towed as long as it has a tow hitch",
          "All options considered, manufacturer authorization, compatible equipment, proper training, correct towing pin and safety pin",
          "Just ensure the dumper has enough power",
          "Only check that the equipment is not too heavy"
        ],
        correct: 1,
        explanation: "Key requirements include: all options have been considered, towing activities are authorized by the manufacturer, equipment compatibility, proper training, and correct towing pin with safety pin."
      },
      {
        id: 19,
        type: "multiple_choice",
        question: "What is the purpose of a Method Statement?",
        options: [
          "To record daily work activities and hours",
          "To document specific instructions on how to SAFELY perform a work-related task",
          "To track equipment maintenance schedules",
          "To record training completion certificates"
        ],
        correct: 1,
        explanation: "A Method Statement documents specific instructions on how to SAFELY perform a work-related task, including the sequence of work and safety precautions."
      },
      {
        id: 20,
        type: "multiple_choice",
        question: "What are the main duties of a plant operator as a safety critical worker?",
        options: [
          "Only operate the machine efficiently and quickly",
          "Only use site plant if trained and authorized, work safely and efficiently, comply with method statements, be punctual and cooperative",
          "Just follow supervisor instructions without question",
          "Only focus on completing tasks as quickly as possible"
        ],
        correct: 1,
        explanation: "As a safety critical worker, plant operators must: only use site plant if trained and authorized, work safely and efficiently, comply with method statements, and be punctual and cooperative."
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
