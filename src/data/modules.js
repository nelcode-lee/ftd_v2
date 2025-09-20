// Corrected module data based on PDF content structure
export const modules = [
  {
    id: 1,
    title: "Introduction to Forward Tipping Dumper",
    description: "Learn about Forward Tipping Dumpers, their purpose, types, and basic operation principles. Understand the machine components and safety features.",
    status: "completed",
    icon: "🚜",
    content: {
      objectives: [
        "Understand the purpose and applications of Forward Tipping Dumpers",
        "Identify different types of FTDs and their characteristics", 
        "Recognize major components and safety features",
        "Learn basic operation principles and safety considerations"
      ],
      sections: [
        {
          title: "Always Remember to OperateSAFE",
          content: "Throughout the workbook, you will come across OperateSAFE safety reminders. OperateSAFE is an example of a company wide Health & Safety campaign which is championed by Flannery Plant Hire. It is a campaign aimed at driving health and safety awareness and engagement across the business and industry wide. Other companies will champion their own internal and external health and safety campaigns which we encourage you to familiarise yourself with when starting at a new job.\n\nThe OperateSAFE safety reminders throughout the workbook aim to highlight key safety messages to our learners. Scan the QR code here to view the OperateSafe introduction video."
        },
        {
          title: "Literacy – Numeracy – ICT",
          content: "English, Mathematics and ICT are embedded into the content. You will be required to extract information from the operator manual, conduct simple calculations of bucket capacities and read digital screens in the cab of the machine or using one of our training simulators."
        },
        {
          title: "Introduction to Forward Tipping Dumper",
          content: "A Forward Tipping Dumper (FTD) is commonly used on construction sites. It is used to transport large quantities of materials across a site, usually on rough, undulating terrain. Its ability to handle a mixture of terrain and carry large loads makes it a flexible piece of equipment.\n\nThis course will equip you with the knowledge, skills and confidence to operate the machine safely, protecting both you and those around you. This course offers two certificate options: operating either a tracked or wheeled machine depending on your needs.",
          additionalImages: [
            {
              image: "/extracted_images/page_18_img_05.png",
              imageAlt: "Forward Tipping Dumper Operations"
            }
          ]
        },
        {
          title: "Course Objectives",
          content: "The course objectives are as follows:\n\n• Understand the relevant legislation relating to work activities.\n• Comply with the manufacturer's instructions, using the operator's handbook and other information sources.\n• Identify the hazards associated with plant or machinery operations and put the appropriate control measures in place.\n• Identify the machine components and operator controls.\n• Perform pre-shift and operational checks.\n• Prepare the forward tipping dumper for site and road travel.\n• Drive over various types of terrain.\n• Manoeuvre in confined areas.\n• Complete a range of loading procedures.\n• Discharge loads into trenches or over edges.\n• Explain the procedures for loading and unloading on and off a transporter.\n• Shut down machinery safely and secure it at the end of the operation.\n\nN.B. All content delivered on this course meets the requirements set out in the National Occupational Standards for this machine type."
        },
        {
          title: "Construction Site Operations",
          content: "Construction sites are busy places and present many dangers. During this course you will be taught how to act responsibly on site, how to identify common hazards and how to operate your machine safely and efficiently on site to reduce to as low as possible the risks to you and others.",
          links: [
            {
              url: "https://www.flanneryplanthire.com/resources/safety/operatesafe-ten-golden-rules-speak-up-stop-work/",
              text: "OperateSAFE - Ten Golden Rules: Speak Up & Stop Work"
            }
          ]
        }
      ],
      knowledgeStops: [
        {
          question: "List 4 main hazards that are commonly found on a construction site.",
          answer: "Moving vehicles and machinery, Working at height, Electrical hazards, Manual handling injuries, Slips trips and falls, Noise exposure, Dust and harmful substances, Excavations and confined spaces"
        },
        {
          question: "A dumper is classified by a manufacturer as a six-tonne dumper. What does this mean?",
          answer: "This refers to the maximum payload capacity of the dumper - it can safely carry up to six tonnes of material in its skip."
        },
        {
          question: "List 5 effects of hazards:",
          answer: "Injury to people, Damage to equipment/property, Environmental damage, Production delays/losses, Legal consequences and prosecution"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Safe Working Practices & Health & Safety",
    description: "Understand your legal responsibilities under the Health and Safety at Work Act 1974, PUWER regulations, and other relevant legislation.",
    status: "in-progress",
    icon: "⛑️",
    content: {
      objectives: [
        "Understand the Health and Safety at Work Act 1974",
        "Learn about PUWER 1998 regulations",
        "Recognize operator responsibilities and duties",
        "Understand the importance of risk assessments and method statements"
      ],
      sections: [
        {
          title: "Health and Safety at Work Act 1974",
          content: "The Health and Safety at Work Act 1974 is designed to protect people and the environment from workplace activities. It places certain duties and responsibilities on employers, employees, self-employed, designers and manufactures.",
          video: {
            title: "Health and safety risk assessment and management",
            embedUrl: "https://www.youtube.com/embed/xyANahuhGs0",
            description: "Essential health and safety practices and risk assessment procedures"
          },
          links: [
            {
              url: "https://www.legislation.gov.uk/ukpga/1974/37/contents",
              text: "Health and Safety at Work Act 1974 - Full Legislation"
            },
            {
              url: "https://www.hse.gov.uk/pubns/priced/puwer.pdf",
              text: "PUWER 1998 Regulations"
            }
          ],
          knowledgeStops: [
            {
              question: "What does the Health & Safety at Work etc. Act 1974 require employers to do, specifically regarding plant?",
              answer: "Employers must ensure that plant and equipment is safe and without risks to health, provide adequate training and supervision, maintain equipment in safe condition, and provide information, instruction, training and supervision to ensure health and safety at work."
            },
            {
              question: "List the 3 main duties placed on employees under the Health and Safety at Work act 1974:",
              answer: "1. Take reasonable care for their own health and safety and that of others who may be affected by their acts or omissions, 2. Cooperate with their employer on health and safety matters, 3. Not intentionally or recklessly interfere with or misuse anything provided in the interests of health, safety or welfare"
            }
          ]
        },
        {
          title: "Provision & Use of Work Equipment Regulations 1998 (PUWER 98)",
          content: "Work equipment is any machinery, appliance, apparatus, tool or installation for use at work (whether exclusively or not). This includes equipment which employees provide for their own use at work. The scope of work equipment is therefore extremely wide.",
          image: "/extracted_images/page_08_img_03.png",
          imageAlt: "PUWER 1998 Regulations - Personal Protective Equipment"
        },
        {
          title: "Machine Stability and Protective Structures",
          content: "Machines must be stable when in use; machines have been known to fall over. ROPS (Roll Over Protective Structures) & FOPS (Falling Object Protective Structures) must be in place to provide some protection to the operator in the event of the machine overturning or from small falling objects.\n\nEquipment must be capable of being maintained safely. Accidents occur during maintenance thus the risks encountered during such maintenance must be reduced.",
          isHighlight: true
        },
        {
          title: "Additional Legislation and Guidance",
          content: "Management of Health and Safety at Work Regulations (MHSWR), Construction (Design and Management) Regulations (CDM), Vibration at Work Regulations, Road Traffic Act, HSG 114 – The safe use of vehicles on construction sites, HSG 46 – Guide for small contractors, Plant Safety Group – Safe use of dumpers, Control of Substances Hazardous to Health Regulations, The Control of Noise Regulations"
        },
        {
          title: "Risk Assessments and Method Statements",
          content: "Employers are required by law to protect your employees, and others, from harm. Under the Management of Health and Safety at Work Regulations 1999, the minimum you must do is: Identify what could cause injury or illness in your business (hazards), Decide how likely it is that someone could be harmed and how seriously (the risk), Take action to eliminate the hazard, or if this isn't possible, control the risk.",
          image: "/extracted_images/page_13_img_04.png",
          imageAlt: "Risk Assessment"
        },
        {
          title: "Social Responsibilities",
          content: "In general plant operators are regarded as 'safety-critical' workers, which means their actions with the machine can have significant health & safety consequences for themselves and others. It is essential that all personnel involved in the planning, supervision and carrying out of mobile plant operations are adequately trained and competent for their role."
        },
        {
          title: "Site Induction",
          content: "When starting work on a new site you will undergo a site induction. Familiarise yourself with some of the subject areas that will be included in a site induction:\n\n• Access and egress\n• Safety signs and signals\n• Emergency procedures\n• Welfare facilities\n• Restricted/prohibited areas\n• Traffic routes\n• Site layout\n• Reporting procedures\n• PPE/RPE requirements\n• Smoking policy\n• Waste disposal\n• Working from/at height\n• Lifting operations\n• Electricity\n• Buried services\n• Confined spaces\n• Accident reporting\n• Contamination",
          image: "/extracted_images/page_19_img_02.png",
          imageAlt: "Site Induction"
        },
        {
          title: "Safe Working Practices - The Role of the Forward Tipping Dumper Operator",
          content: "Preparing for work: Conduct all pre-operational checks in accordance with manufacturers and legislative requirements. Travelling and maneuvering: Travel and maneuver the forward tipping dumper safely across varying terrain and inclines.",
          video: {
            title: "Training Videos - Dual View Dumper Daily Checks",
            embedUrl: "https://www.youtube.com/embed/PH5XD__tMeg",
            description: "Essential daily checks and safety procedures for Forward Tipping Dumper operations"
          }
        },
        {
          title: "Operator Roles & Responsibilities",
          content: "As a 'safety critical' worker, plant operators are required to:\n\n• Only use site plant or equipment if you are trained, competent and have been authorised to do so.\n• Only authorised operators should hold vehicle keys.\n• You are required to work safely, efficiently and comply with the method statement.\n• Be punctual and co-operate with other workers – this can contribute towards repeat business with the client or principal contractor.\n\nOperators should also be trained in the safe operation of the specific machine that they are required to operate.",
          image: "/extracted_images/trained_operator.jpeg",
          imageAlt: "Trained Operator",
          additionalImages: [
            {
              image: "/extracted_images/blue_card.jpeg",
              imageAlt: "CPCS Blue Card"
            }
          ]
        },
        {
          title: "Safe Working Practices Relevant to the Role of the Forward Tipping Dumper Operator",
          content: "The following table outlines the key safe working practices that operators must follow:\n\n**Preparing for work**\nConduct all pre-operational checks in accordance with manufacturers and legislative requirements.\n\n**Travelling and manoeuvring**\nTravel and manoeuvre the forward tipping dumper safely across varying terrain and inclines.\n\n**Setting up for work**\nConduct all necessary safety checks at the loading and discharging areas.\n\n**Working tasks**\n• Receive loads from other machines safely\n• Ensure load integrity and security\n• Tip safely into excavations or over edges\n• Completing work\n• The environmental considerations of machine use\n• Loading/unloading procedures for machine transportation\n\n**Shutting Down**\nCarry out all end of work and shut down procedures."
        }
      ],
      knowledgeStops: [
        {
          question: "What is the primary piece of health and safety legislation in the UK?",
          answer: "The Health and Safety at Work Act 1974"
        },
        {
          question: "Why are plant operators generally regarded as safety critical workers?",
          answer: "Because their actions with the machine can have significant health & safety consequences for themselves and others. Their operations can directly impact the safety of other workers and the public."
        },
        {
          question: "List SIX typical subject areas that should be covered in a site induction.",
          answer: "Access and egress, Safety signs and signals, Emergency procedures, Welfare facilities, Restricted/prohibited areas, Traffic routes, Site layout, Reporting procedures, PPE/RPE requirements, Smoking policy, Waste disposal, Working from/at height, Lifting operations, Electricity, Buried services, Confined spaces, Accident reporting"
        },
        {
          question: "What are the two main plant operator card schemes in the construction plant training sector?",
          answer: "CPCS (Construction Plant Competence Scheme) and NPORS (National Plant Operators Registration Scheme)"
        },
        {
          question: "List THREE ways that a plant operator can contribute towards repeat business with the client or principal contractor.",
          answer: "Good timekeeping, being polite, being safe, doing a good job, cooperating with other workers, following method statements, maintaining high standards"
        },
        {
          question: "How can a qualification or card benefit a plant operator?",
          answer: "Demonstrates competence and training, provides industry recognition, may be required for certain sites, shows commitment to safety standards, can lead to better job opportunities and higher pay rates."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Major Components of Forward Tipping Dumper",
    description: "Understand the major components, hydraulic systems, engine systems, and safety features of Forward Tipping Dumpers.",
    status: "not-started",
    icon: "🔧",
    content: {
      objectives: [
        "Identify major machine components and their functions",
        "Understand hydraulic system operation and maintenance",
        "Learn about engine and power systems",
        "Recognize safety features and their importance"
      ],
      sections: [
        {
          title: "Major Components of a Forward Tipping Dumper",
          content: "Forward Tipping Dumpers consist of several key components including the chassis, skip, hydraulic system, engine, and operator controls.",
          image: "/extracted_images/page_07_img_02.png",
          imageAlt: "Major Components Overview"
        },
        {
          title: "Different Types of Dumper & Skips",
          content: "There are several types of FTDs designed for different applications and working conditions.",
          subsections: [
            {
              title: "Straight Skip Dumper",
              content: "A basic dumper with a simple skip that tips forward for material discharge.",
              image: "/extracted_images/page_01_img_01.png",
              imageAlt: "Straight Skip Dumper"
            },
            {
              title: "Forward Tipping Cabbed Dumper", 
              content: "Features an enclosed operator cab for protection from weather and site conditions.",
              image: "/extracted_images/page_12_img_02.png",
              imageAlt: "Forward Tipping Cabbed Dumper"
            },
            {
              title: "Hi-Tip Skid Loader",
              content: "A compact loader with high-lift capability for confined spaces and precise material placement.",
              image: "/extracted_images/hi_top_skid_loader.webp",
              imageAlt: "Hi-Tip Skid Loader"
            }
          ]
        },
        {
          title: "Principal Components of the Machine",
          content: "The main components include the power unit, hydraulic system, fuel system, cooling system, and safety structures.",
          subsections: [
            {
              title: "Power Unit - Oils",
              content: "Always wear gloves when checking engine oil to prevent skin disease and contamination of oil onto the operating controls and the cab.",
              image: "/extracted_images/page_21_img_02.png",
              imageAlt: "Power Unit - Oils"
            },
            {
              title: "Hydraulic System",
              content: "Always ensure the filler cap area is clean and pressure in the system is released before removing the cap. Always use a clean container when filling the system to prevent contamination.",
              image: "/extracted_images/page_22_img_02.png",
              imageAlt: "Hydraulic System"
            },
            {
              title: "Fuel System",
              content: "Where possible, plant should be filled up at the end of your shift to prevent condensation building up in the tank.",
              image: "/extracted_images/page_23_img_02.png",
              imageAlt: "Fuel System"
            },
            {
              title: "Cooling System",
              content: "Cooling systems are normally pressurised and removing the cap can allow hot water to escape with the potential for causing SEVERE burns.",
              image: "/extracted_images/page_24_img_02.png",
              imageAlt: "Cooling System"
            },
            {
              title: "Roll Over Protective Structure (ROPS)",
              content: "ROPS provides some protection to the operating position (as far as is reasonably practicable) in the event of an overturn.",
              image: "/extracted_images/page_25_img_02.png",
              imageAlt: "Roll Over Protective Structure"
            },
            {
              title: "Falling Object Protective Structures (FOPS)",
              content: "Where there is the risk of people operating mobile work equipment being struck by falling material, falling object protective structures (FOPS) or a manufacturer's strengthened cab must be fitted to stop any falling material striking the operator.",
              image: "/extracted_images/page_26_img_02.png",
              imageAlt: "Falling Object Protective Structures"
            },
            {
              title: "Restraining Systems",
              content: "Seat belts must be worn even when the cab door is closed. This is because in the event of a roll over (as far as reasonably practical), it will keep the operator within the confines of the operating seat which may minimise injury.",
              image: "/extracted_images/page_27_img_02.png",
              imageAlt: "Restraining Systems"
            },
            {
              title: "Tyres",
              content: "Raised lugs on tyres provide traction / grip for moving, steering and braking in soft mud. If tyres are worn, traction and grip will be severely affected.",
              image: "/extracted_images/page_28_img_02.png",
              imageAlt: "Tyres"
            }
          ]
        }
      ],
      knowledgeStops: [
        {
          question: "What are the main components of a Forward Tipping Dumper?",
          answer: "The main components include the chassis, skip, hydraulic system, engine, operator controls, and safety systems"
        },
        {
          question: "Can you identify at least one component you would be checking in the following images?",
          answer: "Engine oil level, hydraulic fluid level, coolant level, fuel level, tyre condition, brake system, steering system, lights and indicators, mirrors, seat belts, ROPS/FOPS structures"
        },
        {
          question: "If an operator has to top-up the hydraulic oil, state two precautions that ensure cleanliness of the system.",
          answer: "1) Always ensure the filler cap area is clean before removing the cap, 2) Always use a clean container when filling the system to prevent contamination"
        },
        {
          question: "Why should the machine be re-fuelled at the end of the day?",
          answer: "To prevent condensation building up in the tank, which can cause water contamination in the fuel system and potential engine problems"
        },
        {
          question: "Name THREE purposes of the raised lugs on tyres and what can happen to a dumper if the lugs are severely worn?",
          answer: "Three purposes: 1) Provide traction/grip for moving, 2) Enable steering control, 3) Assist with braking in soft mud. If severely worn: traction and grip will be severely affected, making the machine unsafe to operate on soft or slippery surfaces"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Pre-Operational Checks & Safety Procedures",
    description: "Master the essential pre-operational checks including visual inspections, fluid levels, safety systems, and documentation requirements.",
    status: "locked",
    icon: "🔍",
    content: {
      objectives: [
        "Perform comprehensive pre-operational inspections",
        "Check fluid levels and system integrity",
        "Verify safety systems and emergency equipment",
        "Complete required documentation and reporting"
      ],
      sections: [
        {
          title: "Pre-Operational Checks - Manufacturers and Legislative Requirements",
          content: "The Health and Safety at Work Act 1974 states that employees must take reasonable care of themselves and others who may be affected by their actions. It is a requirement to check that the machine is safe to use prior to using it.",
          image: "/extracted_images/page_06_img_02.png",
          imageAlt: "Pre-Operational Checks"
        },
        {
          title: "Personal Protective Equipment (PPE)",
          content: "Always ensure that you wear the full PPE required for the site that you are working on.",
          subsections: [
            {
              title: "Required PPE",
              content: "Head protection, Foot protection, High-visibility clothing, Weather-appropriate clothing, Hearing protection, Eye protection, Gloves"
            }
          ],
          image: "/extracted_images/page_29_img_02.png",
          imageAlt: "Personal Protective Equipment"
        },
        {
          title: "Safely Get On and Off the Forward Tipping Dumper",
          content: "Face the machine using the specific steps and handrails provided. Maintain 3 points of contact wherever possible. Ensure the steps and handrails are clean and clear of debris in your daily checks.",
          image: "/extracted_images/page_30_img_02.png",
          imageAlt: "Safely Get On and Off the Machine"
        },
        {
          title: "Prepare and Configure the Forward Tipping Dumper for Site Travel",
          content: "Engine cover – secured. Check parking brake – on. Check controls are neutralised. Adjust seat for comfort / reach. Adjust steering column as appropriate. Wear seatbelt – adjust as required. Foot brake – pressure.",
          image: "/extracted_images/page_31_img_02.png",
          imageAlt: "Prepare and Configure for Site Travel"
        },
        {
          title: "Visibility Aids",
          content: "Always ensure that all mirrors / cameras are correctly fitted, unbroken, clean, and correctly adjusted. Check that ALL mirrors are clean and correctly positioned to provide you with a clear, unobstructed view behind the dumper.",
          image: "/extracted_images/page_32_img_02.png",
          imageAlt: "Visibility Aids"
        }
      ],
      knowledgeStops: [
        {
          question: "What should be checked before operating a Forward Tipping Dumper?",
          answer: "Visual inspection, fluid levels, safety systems, brakes, steering, and all safety equipment"
        },
        {
          question: "The function or job role of a dumper driver, when transporting materials, is to?",
          answer: "Safely transport materials from loading areas to discharge points, ensure load integrity and security, follow safe operating procedures, and maintain awareness of site conditions and other workers."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Travel and Manoeuvre Operations",
    description: "Learn safe operating procedures, load handling, maneuvering techniques, and emergency procedures for Forward Tipping Dumpers.",
    status: "locked",
    icon: "🚛",
    content: {
      objectives: [
        "Master safe operating procedures and techniques",
        "Learn proper load handling and positioning",
        "Understand maneuvering and site navigation",
        "Know emergency procedures and responses"
      ],
      sections: [
        {
          title: "Pedestrianised Areas",
          content: "If you are setting up to work in pedestrianised areas, always take the following into consideration: Always ensure physical segregation of pedestrians from machines and the work, Machine movements, Noise, Fumes",
          image: "/extracted_images/page_33_img_02.png",
          imageAlt: "Pedestrianised Areas"
        },
        {
          title: "Travelling on a Public Highway",
          content: "When travelling on the public highway, the machine must adhere to the following requirements by law: The dumper must be registered and taxed as a 'special vehicle', The dumper must have vehicle insurance, If the dumper can exceed 20 mph it must have a horn in good working condition",
          image: "/extracted_images/page_34_img_02.png",
          imageAlt: "Travelling on Public Highway"
        },
        {
          title: "Towing Equipment with a Dumper – Enhanced Training",
          content: "Some dumpers have the capability to tow equipment such as small bowsers and compressors. As dumpers are not specifically designed for towing purposes, other methods should be explored before deciding on this purpose.",
          image: "/extracted_images/page_35_img_02.png",
          imageAlt: "Towing Equipment"
        },
        {
          title: "Travel and Manoeuvre the Dumper",
          content: "When travelling and manoeuvring the dumper, it is important to ensure machine stability to reduce the risk of the dumper becoming stuck or tipping over. When operating a rotating seat dumper, you can change the seat and console position to allow the operator the best viewpoint while travelling, manoeuvring and operating the machine.",
          image: "/extracted_images/page_36_img_02.png",
          imageAlt: "Travel and Manoeuvre"
        },
        {
          title: "Travel and Manoeuvre in Areas of Restricted Space",
          content: "Overhead Services: It is important that all work near to overhead lines is properly planned and managed to reduce the risk of accidents. The Health and Safety Executive publication 'Avoiding danger from overhead power lines' (GS6) gives valuable information and guidance on how to safely plan and set up work near to overhead power lines.",
          image: "/extracted_images/page_37_img_02.png",
          imageAlt: "Restricted Space Operations"
        },
        {
          title: "Operating in Confined Areas",
          content: "The Spillard Human Detection System identifies only human form through deep intelligent mapping. It aims to: Warn operators and pedestrians of potential risks of collision, Improve operators all around awareness of their surroundings, Detect human form whilst ignoring ever changing backgrounds, Reduce risk whilst improving the operator and pedestrian interaction.",
          image: "/extracted_images/page_38_img_02.png",
          imageAlt: "Operating in Confined Areas"
        }
      ],
      knowledgeStops: [
        {
          question: "What is the correct sequence for operating a Forward Tipping Dumper?",
          answer: "Pre-start checks, start engine, warm-up, load materials, transport to dump site, position for dumping, discharge load, return to loading area, shutdown procedures"
        }
      ]
    }
  },
  {
    id: 6,
    title: "Loading and Discharging Operations",
    description: "Master loading procedures, load security, material handling, and discharging techniques for safe and efficient operations.",
    status: "locked",
    icon: "📦",
    content: {
      objectives: [
        "Learn proper loading procedures and techniques",
        "Understand load security and integrity requirements",
        "Master discharging procedures and safety",
        "Know environmental considerations and procedures"
      ],
      sections: [
        {
          title: "Conduct All Necessary Safety Checks at the Loading and Discharging Area",
          content: "Prior to setting up for work, the operator must conduct safety checks at the work area to identify any potential hazards.",
          image: "/extracted_images/page_39_img_02.png",
          imageAlt: "Safety Checks at Loading Area"
        },
        {
          title: "Ensure Load Integrity/ Security",
          content: "Prior to transporting the load, the following actions must be taken: Ensure the load is secured and stable, Check your travel route, Arrange assistance for observation and visibility, Never overload the skip. Overloading obscures the operator's view and significantly reduces visibility.",
          image: "/extracted_images/page_40_img_02.png",
          imageAlt: "Load Integrity and Security"
        },
        {
          title: "Loading, Transporting and Discharging Different Materials",
          content: "Denser materials: may overload your tyres and may stick to the body when tipping. You may need to tip at different locations. Semi-Fluid materials: may spill during travel. Spoil: this material should be segregated for re-use on or off-site, where possible.",
          image: "/extracted_images/page_41_img_02.png",
          imageAlt: "Loading Different Materials"
        },
        {
          title: "Discharging Loads",
          content: "A banksman should be used if deemed necessary in the risk assessment. Cameras are there as a visual aid when approaching the tipping area / stop block. Stop blocks are used to indicate the stopping point of the dumper and to prevent the machine from overrunning into the trench.",
          image: "/extracted_images/page_42_img_02.png",
          imageAlt: "Discharging Loads"
        },
        {
          title: "Environmental Considerations of Machine Use",
          content: "The main types of pollution associated with construction operations are: Air pollution, Water pollution, Noise pollution. There are various pollution prevention strategies that can be used. Operators can minimise their effect on the environment by using the machine efficiently.",
          image: "/extracted_images/page_43_img_02.png",
          imageAlt: "Environmental Considerations"
        },
        {
          title: "Loading/ Unloading Procedures for Machine Transportation",
          content: "The transporter driver is responsible for loading operations. The following checks should be made before loading commences: Ground support, Ramp condition, Overhead and other hazards, Positioning on trailer, Direction of travel",
          image: "/extracted_images/page_44_img_02.png",
          imageAlt: "Loading/Unloading Procedures"
        }
      ],
      knowledgeStops: [
        {
          question: "What are the key safety considerations when discharging loads?",
          answer: "Use a banksman if necessary, ensure stop blocks are in place, check cameras for visibility, and never overrun into trenches"
        }
      ]
    }
  }
];

// Glossary terms extracted from the PDF
export const glossaryTerms = [
  { term: "Forward Tipping Dumper", definition: "A construction machine designed to carry and unload loose material by tipping its skip forward over the front wheels." },
  { term: "Access", definition: "To be able to get to a place." },
  { term: "Actuating", definition: "Cause (a machine or device) to operate." },
  { term: "Articulated", definition: "Having two or more sections connected by a flexible joint." },
  { term: "Backfilling", definition: "The process of filling in excavated areas with transported material." },
  { term: "Banksman", definition: "A person who guides the machine operator during movement, especially in confined spaces and when reversing." },
  { term: "Beacon", definition: "A flashing safety light mounted on the ROPS/top of cab to alert others when the machine is in operation." },
  { term: "Blind Spots", definition: "Areas around the dumper not visible to the operator, requiring caution." },
  { term: "Boom", definition: "The main arm attached to a 360's body that supports the dipper and bucket." },
  { term: "Brake Test", definition: "A routine check to ensure the dumper's braking system is functioning correctly and safely before operation, typically performed at the start of a shift." },
  { term: "Bucket", definition: "The attachment on a 360 used for digging, grading, trenching or loading duties." },
  { term: "Cabbed Dumper", definition: "Dumper fitted with an enclosed operator cab, providing protection from weather and site conditions." },
  { term: "Cab / Operator's Cab", definition: "The compartment where the operator sits to control the machine, often equipped with joysticks and pedals." },
  { term: "Centre of Gravity", definition: "Balance point of a load." },
  { term: "Chassis", definition: "The main framework of the machine to which all components are mounted." },
  { term: "Check Valves", definition: "Valve monitoring pressure of the system." },
  { term: "Collapse", definition: "The sudden failure of the sides or walls of an excavation, causing soil or materials to cave in." },
  { term: "Consequences", definition: "The effect, result, or outcome of something occurring earlier" },
  { term: "Contour", definition: "To change the shape of a surface, making some parts higher and some parts lower" },
  { term: "Counterbalance", definition: "A weight that balances another weight." },
  { term: "Crush Zone", definition: "An area where a person could be crushed between moving parts of machinery or between a moving part and a stationary object." },
  { term: "Cut and Fill", definition: "A process involving the removal (cut) and redistribution (fill) of earth to level ground." },
  { term: "Deadman", definition: "The Deadman lever is a safety control mechanism on a machine that must be placed in the isolated (neutral or safe) position to disable machine movement before anyone approaches the machine." },
  { term: "Differential Lock", definition: "A feature that locks the drive axles for better traction on slippery or uneven terrain." },
  { term: "Discharging", definition: "The process of unloading material from the skip." },
  { term: "Edge Protection", definition: "A safety system or stop block installed at the edge of elevated work areas to prevent people, materials, or equipment from falling." },
  { term: "Egress", definition: "To be able to leave a place." },
  { term: "Exclusion Zone", definition: "A designated area where access is restricted due to potential hazards, such as heavy machinery, or dangerous operations." },
  { term: "Expansion Tank", definition: "Prevents the system from becoming over-pressurised as the coolant heats up and expands." },
  { term: "F.O.P.S.", definition: "Falling Object Protective Structure - a safety feature built into the cab or canopy of the machine designed to protect the operator from falling objects, such as rocks, debris, or materials from above." },
  { term: "Front Axle", definition: "Supports the front wheels, often provides steering capability, and transmits drive power depending on the dumper's drivetrain." },
  { term: "GPS", definition: "Helps ensure precise digging by providing real-time location data, allowing operators to excavate to the correct depth and dimensions without manual measuring." },
  { term: "Gradients", definition: "Slopes." },
  { term: "Human Form Recognition (HFR)", definition: "Technology used to detect the presence of people around the machine." },
  { term: "Hydraulics", definition: "The system of pressurised fluid used to power and control the movement of the machine's key components." },
  { term: "Hydraulic Rams", definition: "Cylinders that lift the skip to tip and discharge material." },
  { term: "Inclines", definition: "Slopes, gradient." },
  { term: "Isolation Procedure", definition: "Locking out the machine to prevent accidental start-up during maintenance or inspection." },
  { term: "Laden Skip", definition: "The dumper's skip when it is fully loaded with material ready for transport or unloading." },
  { term: "Load Capacity", definition: "The maximum weight of material the dumper is designed and rated to carry safely in its dump body." },
  { term: "Loading", definition: "Filling the skip with soil, rubble, or other materials, usually by a loader or excavator." },
  { term: "Loading Area/Zone", definition: "The designated area where excavators or loaders load material into the FTD." },
  { term: "Load Integrity", definition: "The condition in which a load remains stable, secure, and contained during transport, ensuring it does not shift, spill, or exceed the limits of the vehicle." },
  { term: "Load Limits", definition: "Maintaining balance when tipping, especially on slopes or uneven ground." },
  { term: "Load Security", definition: "Ensuring that material is safely contained within the body and not overloaded." },
  { term: "Hauling", definition: "Transporting material (e.g., soil, aggregates, spoil) from a loading area to a tipping area." },
  { term: "Manoeuvre", definition: "To move or control the machine. This involves adjusting the machine's direction, speed, or position for tasks." },
  { term: "Material Handling", definition: "Moving bulk materials, like soil, gravel, or sand, from one place to another." },
  { term: "Muck Shifting", definition: "The process of moving large volumes of earth or spoil from one area of a site to another." },
  { term: "Oscillating", definition: "To move repeatedly from side to side or up and down between two points." },
  { term: "Overloaded", definition: "The machine carries more weight than its maximum safe payload, risking damage and unsafe operation." },
  { term: "People, Plant Interface", definition: "The interaction between workers (people) and machinery (plant)." },
  { term: "Pressurised", definition: "If a container, etc. is pressurised, the air pressure inside it is higher than the air pressure outside it." },
  { term: "Rear Axle", definition: "Located at the back of the vehicle, the rear axle supports the rear wheels, carries part of the load's weight, and provides drive power to help propel the dumper across the site." },
  { term: "Red Zone", definition: "Area around the machine that is high-risk." },
  { term: "Restraining Systems", definition: "Seat belt." },
  { term: "Reversing Alarm", definition: "A loud alert sound to warn others when the machine is reversing." },
  { term: "Risk Assessment", definition: "The process of identifying hazards in the workplace." },
  { term: "R.O.P.S.", definition: "Rollover Protective Structure – a safety feature in cabs to protect the operator in case of a rollover." },
  { term: "Rotating Seat Dumper", definition: "A type of forward tipping dumper where the operator's seat and controls can rotate." },
  { term: "Safety Critical", definition: "Actions with the machine can have significant health & safety consequences." },
  { term: "Safety Strut / Prop", definition: "A strong rod, usually made from metal that helps support raised components (i.e. skip/ booms)" },
  { term: "Skip/ Bucket", definition: "The container that holds the load; tips forward to discharge material." },
  { term: "Shoring", definition: "To make a trench stronger by supporting it" },
  { term: "Slew / Slewing", definition: "The rotation of the upper structure (cab and boom) of an excavator on its undercarriage." },
  { term: "Spoil", definition: "Waste material such as soil or rubble excavated from the ground and transported by FTD." },
  { term: "Spoil Removal", definition: "Removing excavated material (soil, rocks, etc.) from the site." },
  { term: "Straight Skip Dumper", definition: "type of forward tipping dumper with a fixed, non-rotating skip that tips forward to unload material directly in front of the vehicle." },
  { term: "Stockpiling", definition: "Depositing material in designated piles for later use or removal." },
  { term: "Stop Blocks", definition: "Concrete barriers or blocks used to prevent vehicle access." },
  { term: "Sub-base", definition: "A layer of material placed on top of the ground to provide a stable foundation." },
  { term: "Swing Radius", definition: "The area around an excavator that the upper structure can reach when rotating." },
  { term: "Swivel Skip Dumper", definition: "A forward tipping dumper with a skip that can rotate, allowing the operator to tip material to the side for easier unloading in tight or uneven spaces." },
  { term: "Telematics", definition: "Remote monitoring systems used for tracking machine performance, location, and maintenance needs." },
  { term: "Tipping", definition: "Unloading material by tipping the skip forward over the front wheels." },
  { term: "Tipping Area/Zone", definition: "The area where the dump body is raised to unload material." },
  { term: "Tipping Stability", definition: "The safe practice of tipping only on level, compacted ground to avoid overturning." },
  { term: "Towing", definition: "The act of pulling or hauling another vehicle, trailer, or equipment using the dumper, usually by attaching a tow bar or hitch." },
  { term: "Terrain", definition: "The physical characteristics and surface conditions of the ground, including its slope, texture, hardness, and obstacles, which affect how machinery and workers move and operate." },
  { term: "Traffic Management Plan", definition: "A site-specific layout that controls plant movement to prevent collisions." },
  { term: "Transmission", definition: "The system that transfers engine power to the wheels." },
  { term: "Trenches", definition: "Narrow, deep excavations made in the ground, typically used for laying pipes, cables, drainage systems, or foundations." },
  { term: "Undercarriage", definition: "Includes the wheels, axles, suspension, frame, and related components that support the machine, provide stability, and enable it to move and carry loads safely across site." },
  { term: "Unladen Skip", definition: "The dumper's skip when it is empty and not carrying any load." },
  { term: "Visibility Aids", definition: "Mirrors, cameras, or alarms to assist the operator's awareness of surroundings." }
];
