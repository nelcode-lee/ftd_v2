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
      sections: [
        {
          title: "Introduction to Forward Tipping Dumper",
          content: "Forward Tipping Dumpers (FTDs) are versatile construction vehicles designed for transporting and dumping materials on construction sites. They are essential equipment for efficient material handling in various construction and civil engineering projects."
        },
        {
          title: "Purpose and Applications",
          content: "Forward Tipping Dumpers are used for:\n\n• Transporting loose materials (soil, gravel, sand, debris)\n• Site clearance and preparation\n• Construction waste removal\n• Material distribution across construction sites\n• Working in confined spaces where larger vehicles cannot operate"
        },
        {
          title: "Different Types of Dumper & Skips",
          content: "There are several types of FTDs designed for different applications and working conditions.",
          subsections: [
            {
              title: "Straight Skip Dumper",
              content: "A basic dumper with a simple skip that tips forward for material discharge.",
              image: "/extracted_images/page_18_img_14.png",
              imageAlt: "Straight Skip Dumper"
            },
            {
              title: "Forward Tipping Cabbed Dumper", 
              content: "Features an enclosed operator cab for protection from weather and site conditions.",
              image: "/extracted_images/page_18_img_07.png",
              imageAlt: "Forward Tipping Cabbed Dumper"
            },
            {
              title: "Rotating Seat (Swivel Skip) Cabbed Dumper",
              content: "Advanced dumper with rotating operator seat and swivel skip for enhanced maneuverability and visibility during operations.",
              image: "/extracted_images/page_18_img_08.png",
              imageAlt: "Rotating Seat (Swivel Skip) Cabbed Dumper"
            },
            {
              title: "Hi Top Skid Loader",
              content: "Specialized dumper with high-capacity skip designed for loading and transporting larger volumes of materials in construction and industrial applications.",
              image: "/extracted_images/hi_top_skid_loader.webp",
              imageAlt: "Hi Top Skid Loader"
            }
          ]
        }
      ],
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
      sections: [
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
        },
        {
          title: "Health and Safety at Work Act 1974",
          content: "The Health and Safety at Work Act 1974 is the primary legislation covering occupational health and safety. It places duties on employers to ensure the health, safety and welfare of employees and others who may be affected by work activities."
        },
        {
          title: "PUWER Regulations 1998",
          content: "The Provision and Use of Work Equipment Regulations 1998 (PUWER) require that equipment provided for use at work is safe, suitable for use, properly maintained and that people using it are adequately trained."
        },
        {
          title: "Operator Responsibilities",
          content: "As a forward tipping dumper operator, you are responsible for:\n\n• Operating equipment safely and competently\n• Following site rules and procedures\n• Reporting defects and safety concerns\n• Wearing appropriate PPE\n• Conducting pre-operational checks\n• Working within your competence level"
        }
      ],
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
      sections: [
        {
          title: "Major Components Overview",
          content: "Forward Tipping Dumpers consist of several key components that work together to provide safe and efficient operation. Understanding these components is essential for proper operation and maintenance."
        },
        {
          title: "Engine and Power Unit",
          content: "The engine provides power for both propulsion and hydraulic systems. It must be properly maintained with regular checks of oil levels, coolant, and air filtration systems."
        },
        {
          title: "Hydraulic System",
          content: "The hydraulic system operates the tipping mechanism and other powered functions. It requires regular fluid level checks and pressure system maintenance."
        },
        {
          title: "Chassis and Frame",
          content: "The chassis provides the structural foundation for the dumper, supporting the engine, hydraulics, and skip. It must be inspected for damage and wear."
        },
        {
          title: "Skip and Tipping Mechanism",
          content: "The skip is the material-carrying component that tips forward to discharge loads. The tipping mechanism must be properly maintained and operated within safe limits."
        },
        {
          title: "Safety Features",
          content: "Modern dumpers include important safety features:\n\n• ROPS (Roll Over Protective Structure)\n• FOPS (Falling Object Protective Structure)\n• Seat belts and operator restraints\n• Warning systems and lights\n• Emergency stops"
        },
        {
          title: "Forward Tipping Dumper Isolation",
          content: "Understanding proper isolation procedures is critical for safe maintenance and operation of forward tipping dumpers.",
          video: {
            title: "Forward Tipping Dumper Isolation",
            embedUrl: "https://www.youtube.com/embed/kfcIiqrEaxU",
            description: "Learn the proper procedures for isolating a forward tipping dumper safely."
          }
        }
      ],
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
          additionalImages: [
            {
              image: "/extracted_images/page_22_img_05.png",
              imageAlt: "Figure 1. Check Engine Levels"
            },
            {
              image: "/extracted_images/page_22_img_06.png",
              imageAlt: "Figure 2. Check the Chassis"
            },
            {
              image: "/extracted_images/page_22_img_07.png",
              imageAlt: "Figure 3. Check hydraulic hoses"
            }
          ],
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
      sections: [
        {
          title: "Operating Controls",
          content: "Understanding the location and function of all controls is essential for safe operation. Controls include steering, throttle, brake, gear selection, and hydraulic functions."
        },
        {
          title: "Starting and Stopping Procedures",
          content: "Proper starting and stopping procedures ensure safe operation and extend equipment life. Always follow manufacturer's guidelines for startup and shutdown sequences."
        },
        {
          title: "Safe Driving Techniques",
          content: "Safe driving techniques include:\n\n• Maintaining appropriate speed for conditions\n• Using proper steering and braking techniques\n• Understanding machine stability limits\n• Negotiating slopes and uneven terrain safely"
        },
        {
          title: "Load Handling",
          content: "Proper load handling involves understanding load capacity limits, loading techniques, and safe transportation of materials across the work site."
        },
        {
          title: "Tipping Procedures",
          content: "Safe tipping procedures ensure accurate material placement while maintaining machine stability and operator safety."
        }
      ],
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
      sections: [
        {
          title: "Routine Maintenance Schedule",
          content: "Regular maintenance is essential for safe operation and equipment longevity. Follow manufacturer's maintenance schedules for daily, weekly, and periodic maintenance tasks."
        },
        {
          title: "Basic Troubleshooting",
          content: "Basic troubleshooting skills help identify common problems:\n\n• Engine performance issues\n• Hydraulic system problems\n• Electrical faults\n• Steering and brake concerns\n• Unusual noises or vibrations"
        },
        {
          title: "When to Seek Technical Support",
          content: "Know when to stop operation and seek qualified technical support. Never attempt repairs beyond your competence level or without proper authorization."
        },
        {
          title: "Maintenance Documentation",
          content: "Proper documentation of maintenance activities is required for compliance and equipment tracking. Always complete maintenance records accurately and promptly."
        }
      ],
      knowledgeStops: []
    }
  }
];

export const glossaryTerms = [];
