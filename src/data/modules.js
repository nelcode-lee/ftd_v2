// Fresh modules.js - NO PPE content
export const modules = [
  {
    id: 1,
    title: "Introduction to Forward Tipping Dumper",
    description: "Learn about Forward Tipping Dumpers, their purpose, types, and basic operation principles.",
    status: "completed",
    icon: "🚜",
    content: {
      objectives: [
        "Understand the purpose and applications of Forward Tipping Dumpers",
        "Learn about safety responsibilities and regulations",
        "Identify different types of dumpers and their uses"
      ],
      sections: [],
      knowledgeStops: []
    }
  },
  {
    id: 2,
    title: "Health & Safety, Legislation and Responsibilities",
    description: "Master health and safety legislation, risk assessments, and operator responsibilities.",
    status: "completed", 
    icon: "⚖️",
    content: {
      objectives: [
        "Understand relevant health and safety legislation",
        "Learn about risk assessments and method statements",
        "Know your responsibilities as an operator"
      ],
      sections: [],
      knowledgeStops: []
    }
  },
  {
    id: 3,
    title: "Major Components of Forward Tipping Dumper",
    description: "Explore the main components, systems, and operational features of Forward Tipping Dumpers.",
    status: "completed",
    icon: "⚙️",
    content: {
      objectives: [
        "Identify major components and their functions",
        "Understand different dumper types and configurations", 
        "Recognize major components and safety features",
        "Learn basic operation principles and safety considerations"
      ],
      sections: [],
      knowledgeStops: []
    }
  },
  {
    id: 4,
    title: "Pre-Operational Checks & Safety Procedures",
    description: "Master the essential pre-operational checks and safety procedures for safe operation.",
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
          title: "Pre-Operational Checks in Accordance with Manufacturers and Legislative Requirements",
          content: "The Health and Safety at Work Act 1974 states that employees must take reasonable care of themselves and others who may be affected by their actions.\n\nIt is a requirement to check that the machine is safe to use prior to using it.\n\nThe following items must be checked prior to use:",
          subsections: [
            {
              title: "Items/Components to be Checked",
              content: "Axle oil, Engine oil, Transmission oil, Hydraulic oil, Coolant level, Fuel level, Grease, Air cleaner, Brake oil, Wheel nuts, Tyre pressure, Fan belt.",
              isHighlight: true
            },
            {
              title: "Running Checks", 
              content: "Foot brake, Parking brake, Steering, Electrics, Horn, Reverse alarm, Flashing beacons, Lights, Tipping lever, Raise/lower skip, Rotate skip.",
              isHighlight: true
            }
          ],
          video: {
            title: "Daily Checks: Dual View Dumper",
            embedUrl: "https://www.youtube.com/embed/oABC5YmKhr8",
            description: "Watch this video to see the pre-operational checks in action on a dual view dumper."
          },
          additionalImages: [
            {
              image: "/extracted_images/page_22_img_07.png",
              imageAlt: "Pre-Operational Check Example"
            }
          ]
        },
        {
          title: "Personal Protective Equipment (PPE)",
          content: "Always ensure that you wear the full PPE required for the site that you are working on.",
          image: "/extracted_images/PPE.webp",
          imageAlt: "Personal Protective Equipment Icons",
          subsections: [
            {
              title: "Required PPE",
              content: "• Head protection\n• Foot protection\n• High-visibility clothing\n• Weather-appropriate clothing\n• Hearing protection\n• Eye protection\n• Gloves"
            }
          ],
          video: {
            title: "OperateSAFE briefing: PPE",
            embedUrl: "https://www.youtube.com/embed/cp3JD6tBXzk",
            description: "Watch this OperateSAFE briefing video about Personal Protective Equipment requirements and best practices."
          },
          safetyMessage: {
            text: "Always Remember to OperateSAFE\n\nAlways wear gloves when carrying out pre-use checks and maintenance on the machine.",
            background: "#4A90A4"
          }
        }
      ],
      knowledgeStops: []
    }
  },
  {
    id: 5,
    title: "Operation & Control Systems",
    description: "Learn operational procedures, control systems, and safe driving techniques.",
    status: "locked",
    icon: "🎮",
    content: {
      objectives: [
        "Master operational controls and systems",
        "Learn safe driving and maneuvering techniques", 
        "Understand load handling and tipping procedures",
        "Practice emergency procedures and responses"
      ],
      sections: [],
      knowledgeStops: []
    }
  },
  {
    id: 6,
    title: "Maintenance & Troubleshooting",
    description: "Understand maintenance requirements, common issues, and troubleshooting procedures.",
    status: "locked",
    icon: "🔧",
    content: {
      objectives: [
        "Understand routine maintenance schedules",
        "Learn basic troubleshooting techniques",
        "Know when to seek technical support",
        "Practice proper maintenance procedures"
      ],
      sections: [],
      knowledgeStops: []
    }
  }
];

export const glossaryTerms = [];
