#!/usr/bin/env python3
"""
Fix module content with proper detailed information
"""

import re

def fix_module_content():
    """
    Fix the module content with proper detailed information
    """
    # Read the detailed content
    with open('detailed_workbook_content.txt', 'r') as f:
        detailed_content = f.read()
    
    # Read current HTML
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    print("🔧 Fixing module content with detailed information...")
    
    # Create comprehensive module content
    module1_content = create_comprehensive_module1_content(detailed_content)
    module2_content = create_comprehensive_module2_content(detailed_content)
    module3_content = create_comprehensive_module3_content(detailed_content)
    module4_content = create_comprehensive_module4_content(detailed_content)
    module5_content = create_comprehensive_module5_content(detailed_content)
    module6_content = create_comprehensive_module6_content(detailed_content)
    
    # Update each module in the HTML
    html_content = update_module_content(html_content, 1, "Introduction to FTD", module1_content)
    html_content = update_module_content(html_content, 2, "Health & Safety Legislation", module2_content)
    html_content = update_module_content(html_content, 3, "Pre-Operational Checks", module3_content)
    html_content = update_module_content(html_content, 4, "Machine Operation", module4_content)
    html_content = update_module_content(html_content, 5, "Environmental Considerations", module5_content)
    html_content = update_module_content(html_content, 6, "Assessment & Certification", module6_content)
    
    # Write updated HTML
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ Module content fixed with detailed information!")
    print("🌐 View the complete workbook at: http://localhost:8081")

def create_comprehensive_module1_content(content):
    """
    Create comprehensive content for Module 1
    """
    return f"""
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">📋 Introduction to Forward Tipping Dumper</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        <p class="mb-3">A Forward Tipping Dumper (FTD) is commonly used on construction sites. It is used to transport large quantities of materials across a site, usually on rough, undulating terrain. Its ability to handle a mixture of terrain and carry large loads makes it a flexible piece of equipment.</p>
                        
                        <p class="mb-3">This course will equip you with the knowledge, skills and confidence to operate the machine safely, protecting both you and those around you. This course offers two certificate options: operating either a tracked or wheeled machine depending on your needs.</p>
                        
                        <h5 class="font-semibold text-blue-900 mb-2">Course Objectives:</h5>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>Understand the relevant legislation relating to work activities</li>
                            <li>Comply with the manufacturer's instructions, using the operator's handbook and other information sources</li>
                            <li>Identify the hazards associated with plant or machinery operations and put the appropriate control measures in place</li>
                            <li>Identify the machine components and operator controls</li>
                            <li>Perform pre-shift and operational checks</li>
                            <li>Prepare the forward tipping dumper for site and road travel</li>
                            <li>Drive over various types of terrain</li>
                            <li>Manoeuvre in confined areas</li>
                            <li>Complete a range of loading procedures</li>
                            <li>Discharge loads into trenches or over edges</li>
                            <li>Explain the procedures for loading and unloading on and off a transporter</li>
                            <li>Shut down machinery safely and secure it at the end of the operation</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-green-900 mb-2">🛡️ Safe Working Practices</h4>
                    <div class="text-green-800 text-sm leading-relaxed">
                        <h5 class="font-semibold text-green-900 mb-2">Preparing for work:</h5>
                        <p class="mb-2">Conduct all pre-operational checks in accordance with manufacturers and legislative requirements.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Travelling and maneuvering:</h5>
                        <p class="mb-2">Travel and maneuver the forward tipping dumper safely across varying terrain and inclines.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Setting up for work:</h5>
                        <p class="mb-2">Conduct all necessary safety checks at the loading and discharging areas.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Working tasks:</h5>
                        <ul class="list-disc list-inside mb-2 space-y-1">
                            <li>Receive loads from other machines safely</li>
                            <li>Ensure load integrity and security</li>
                            <li>Tip safely into excavations or over edges</li>
                            <li>Consider environmental aspects of machine use</li>
                            <li>Follow loading/unloading procedures for machine transportation</li>
                        </ul>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Shutting Down:</h5>
                        <p class="mb-2">Carry out all end of work and shut down procedures.</p>
                    </div>
                </div>
                
                <div class="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-orange-900 mb-2">👤 Operator Roles & Responsibilities</h4>
                    <div class="text-orange-800 text-sm leading-relaxed">
                        <p class="mb-3">As a 'safety critical' worker, plant operators are required to:</p>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>Only use site plant or equipment if you are trained, competent and have been authorised to do so</li>
                            <li>Only authorised operators should hold vehicle keys</li>
                            <li>Work safely, efficiently and comply with the method statement</li>
                            <li>Be punctual and co-operate with other workers – this can contribute towards repeat business with the client or principal contractor</li>
                        </ul>
                        
                        <p class="mb-2">Operators should also be trained in the safe operation of the specific machine that they are required to operate, which will include:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Layout and operation of the controls</li>
                            <li>Stability limits</li>
                            <li>Daily checks and how to do them safely</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-red-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-red-900 mb-2">⚠️ Construction Site Operations</h4>
                    <div class="text-red-800 text-sm leading-relaxed">
                        <p>Construction sites are busy places and present many dangers. During this course you will be taught how to act responsibly on site, how to identify common hazards and how to operate your machine safely and efficiently on site to reduce to as low as possible the risks to you and others.</p>
                    </div>
                </div>
            """

def create_comprehensive_module2_content(content):
    """
    Create comprehensive content for Module 2
    """
    return f"""
                <div class="bg-red-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-red-900 mb-2">⚖️ Health and Safety at Work Act 1974</h4>
                    <div class="text-red-800 text-sm leading-relaxed">
                        <p class="mb-3">The Health and Safety at Work Act 1974 is designed to protect people and the environment from workplace activities. It places certain duties and responsibilities on employers, employees, self-employed, designers and manufactures.</p>
                    </div>
                </div>
                
                <div class="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-orange-900 mb-2">🔧 Provision & Use of Work Equipment Regulations 1998 (PUWER 98)</h4>
                    <div class="text-orange-800 text-sm leading-relaxed">
                        <p class="mb-3">Work equipment is any machinery, appliance, apparatus, tool or installation for use at work (whether exclusively or not). This includes equipment which employees provide for their own use at work. The scope of work equipment is therefore extremely wide.</p>
                        
                        <h5 class="font-semibold text-orange-900 mb-2">Key Requirements:</h5>
                        <ul class="list-disc list-inside mb-2 space-y-1">
                            <li>Machines must be stable when in use; machines have been known to fall over</li>
                            <li>ROPS (Roll Over Protective Structures) & FOPS (Falling Object Protective Structures) must be in place to provide some protection to the operator in the event of the machine overturning or from small falling objects</li>
                            <li>Equipment must be capable of being maintained safely</li>
                            <li>Accidents occur during maintenance thus the risks encountered during such maintenance must be reduced</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">📋 Additional Legislation and Guidance</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        <ul class="list-disc list-inside space-y-1">
                            <li>Management of Health and Safety at Work Regulations (MHSWR)</li>
                            <li>Construction (Design and Management) Regulations (CDM)</li>
                            <li>Vibration at Work Regulations</li>
                            <li>Road Traffic Act</li>
                            <li>HSG 114 – The safe use of vehicles on construction sites</li>
                            <li>HSG 46 – Guide for small contractors</li>
                            <li>Plant Safety Group – Safe use of dumpers</li>
                            <li>Control of Substances Hazardous to Health Regulations</li>
                            <li>The Control of Noise Regulations</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-yellow-900 mb-2">⚠️ Risk Assessments and Method Statements</h4>
                    <div class="text-yellow-800 text-sm leading-relaxed">
                        <p class="mb-3">Employers are required by law to protect your employees, and others, from harm. Under the Management of Health and Safety at Work Regulations 1999, the minimum you must do is:</p>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>Identify what could cause injury or illness in your business (hazards)</li>
                            <li>Decide how likely it is that someone could be harmed and how seriously (the risk)</li>
                            <li>Take action to eliminate the hazard, or if this isn't possible, control the risk</li>
                        </ul>
                        <p>The purpose of a Method Statement when on site is to document given specific instructions on how to SAFELY perform a work-related task. It is the plant operator's responsibility to COMPLY with the Method Statement.</p>
                    </div>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-green-900 mb-2">👥 Social Responsibilities</h4>
                    <div class="text-green-800 text-sm leading-relaxed">
                        <p>In general plant operators are regarded as 'safety-critical' workers, which means their actions with the machine can have significant health & safety consequences for themselves and others. It is essential that all personnel involved in the planning, supervision and carrying out of mobile plant operations are adequately trained and competent for their role.</p>
                    </div>
                </div>
                
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-purple-900 mb-2">🏗️ Site Induction</h4>
                    <div class="text-purple-800 text-sm leading-relaxed">
                        <p class="mb-3">When starting work on a new site you will undergo a site induction. Familiarise yourself with some of the subject areas that will be included in a site induction:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Access and egress</li>
                            <li>Safety signs and signals</li>
                            <li>Accident reporting</li>
                            <li>Confined spaces</li>
                            <li>Emergency procedures</li>
                            <li>Buried services</li>
                            <li>Reporting structure</li>
                            <li>Contamination</li>
                            <li>PPE/RPE requirements</li>
                            <li>Electricity</li>
                            <li>Welfare facilities</li>
                            <li>Lifting operations</li>
                            <li>Reporting procedures</li>
                            <li>Working from/at height</li>
                            <li>Site Layout</li>
                            <li>Waste disposal</li>
                            <li>Traffic Routes</li>
                            <li>Smoking policy</li>
                            <li>Restricted/prohibited areas</li>
                        </ul>
                    </div>
                </div>
            """

def create_comprehensive_module3_content(content):
    """
    Create comprehensive content for Module 3
    """
    return f"""
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">🔧 Major Components of a Forward Tipping Dumper</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        <p class="mb-3">Understanding the major components is essential for safe operation and maintenance.</p>
                    </div>
                </div>
                
                <div class="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-orange-900 mb-2">🚛 Different Types of Dumper & Skips</h4>
                    <div class="text-orange-800 text-sm leading-relaxed">
                        <p class="mb-3">Various types of dumpers are available depending on the specific requirements of the job.</p>
                    </div>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-green-900 mb-2">⚙️ Principal Components of the Machine</h4>
                    <div class="text-green-800 text-sm leading-relaxed">
                        <h5 class="font-semibold text-green-900 mb-2">Power Unit – Oils:</h5>
                        <p class="mb-2">Always wear gloves when checking engine oil to prevent skin disease and contamination of oil onto the operating controls and the cab.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Hydraulic System:</h5>
                        <p class="mb-2">Always ensure the filler cap area is clean and pressure in the system is released before removing the cap. Always use a clean container when filling the system to prevent contamination.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Fuel System:</h5>
                        <p class="mb-2">Where possible, plant should be filled up at the end of your shift to prevent condensation building up in the tank.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Cooling System:</h5>
                        <p class="mb-2">Cooling systems are normally pressurised and removing the cap can allow hot water to escape with the potential for causing SEVERE burns.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Roll Over Protective Structure (ROPS):</h5>
                        <p class="mb-2">ROPS provides some protection to the operating position (as far as is reasonably practicable) in the event of an overturn.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Falling Object Protective Structures (FOPS):</h5>
                        <p class="mb-2">Where there is the risk of people operating mobile work equipment being struck by falling material, falling object protective structures (FOPS) or a manufacturer's strengthened cab must be fitted to stop any falling material striking the operator. When sitting in an enclosed cab that meets FOPS criteria, a hard hat does not need to be worn.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Restraining Systems:</h5>
                        <p class="mb-2">Seat belts must be worn even when the cab door is closed. This is because in the event of a roll over (as far as reasonably practical), it will keep the operator within the confines of the operating seat which may minimise injury.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Tyres:</h5>
                        <p class="mb-2">Raised lugs on tyres provide traction / grip for moving, steering and braking in soft mud. If tyres are worn, traction and grip will be severely affected.</p>
                    </div>
                </div>
                
                <div class="bg-red-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-red-900 mb-2">✅ Pre-Operational Checks</h4>
                    <div class="text-red-800 text-sm leading-relaxed">
                        <p class="mb-3">The Health and Safety at Work Act 1974 states that employees must take reasonable care of themselves and others who may be affected by their actions. It is a requirement to check that the machine is safe to use prior to using it.</p>
                        <p class="mb-3">The following items must be checked prior to use:</p>
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-yellow-900 mb-2">🛡️ Personal Protective Equipment (PPE)</h4>
                    <div class="text-yellow-800 text-sm leading-relaxed">
                        <p class="mb-3">Always ensure that you wear the full PPE required for the site that you are working on:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Head protection</li>
                            <li>Foot protection</li>
                            <li>High-visibility clothing</li>
                            <li>Weather-appropriate clothing</li>
                            <li>Hearing protection</li>
                            <li>Eye protection</li>
                            <li>Gloves</li>
                        </ul>
                    </div>
                </div>
            """

def create_comprehensive_module4_content(content):
    """
    Create comprehensive content for Module 4
    """
    return f"""
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-green-900 mb-2">🚶 Safely Get On and Off the Forward Tipping Dumper</h4>
                    <div class="text-green-800 text-sm leading-relaxed">
                        <ul class="list-disc list-inside space-y-1">
                            <li>Face the machine using the specific steps and handrails provided</li>
                            <li>Maintain 3 points of contact wherever possible</li>
                            <li>Ensure the steps and handrails are clean and clear of debris in your daily checks</li>
                            <li>Ensure the ground you are stepping out onto or walking on is firm and clear of obstructions before existing the cab</li>
                            <li>Wearing the correct boots can eliminate injuries. Ensure they are laced up fully and worn correctly</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">⚙️ Prepare and Configure the FTD for Site Travel</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        <ul class="list-disc list-inside space-y-1">
                            <li>Engine cover – secured</li>
                            <li>Check parking brake – on</li>
                            <li>Check controls are neutralised</li>
                            <li>Adjust seat for comfort / reach</li>
                            <li>Adjust steering column as appropriate</li>
                            <li>Wear seatbelt – adjust as required</li>
                            <li>Foot brake – pressure</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-orange-900 mb-2">👁️ Visibility Aids</h4>
                    <div class="text-orange-800 text-sm leading-relaxed">
                        <p class="mb-3">Always ensure that all mirrors / cameras are correctly fitted, unbroken, clean, and correctly adjusted. Check that ALL mirrors are clean and correctly positioned to provide you with a clear, unobstructed view behind the dumper.</p>
                    </div>
                </div>
                
                <div class="bg-red-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-red-900 mb-2">⚠️ Operating in Confined Areas</h4>
                    <div class="text-red-800 text-sm leading-relaxed">
                        <h5 class="font-semibold text-red-900 mb-2">The Spillard Human Detection System:</h5>
                        <p class="mb-2">Identifies only human form through deep intelligent mapping. It aims to:</p>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>Warn operators and pedestrians of potential risks of collision</li>
                            <li>Improve operators all around awareness of their surroundings</li>
                            <li>Detect human form whilst ignoring ever changing backgrounds</li>
                            <li>Reduce risk whilst improving the operator and pedestrian interaction</li>
                        </ul>
                        <p class="mb-3">The human detection system is an aid to safety only. It must be used in addition to the site's safe system of work.</p>
                        
                        <h5 class="font-semibold text-red-900 mb-2">Safety Shield AI Collision Avoidance Technology:</h5>
                        <p class="mb-2">Safety Shield is an advanced AI human form recognition safety system. The system cleverly integrates AI human form recognition (HFR) with strategically placed HD cameras. The in-cab LED visual and audio alert warns the driver of a pedestrian in proximity.</p>
                    </div>
                </div>
                
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-purple-900 mb-2">🚛 Travel and Manoeuvre the Dumper</h4>
                    <div class="text-purple-800 text-sm leading-relaxed">
                        <p class="mb-3">When travelling and manoeuvring the dumper, it is important to ensure machine stability to reduce the risk of the dumper becoming stuck or tipping over. When operating a rotating seat dumper, you can change the seat and console position to allow the operator the best viewpoint while travelling, manoeuvring and operating the machine. The entire operating platform rotates 180 degrees.</p>
                        
                        <h5 class="font-semibold text-purple-900 mb-2">Travel and Manoeuvre in Areas of Restricted Space:</h5>
                        <p class="mb-2">It is important that all work near to overhead lines is properly planned and managed to reduce the risk of accidents. The Health and Safety Executive publication 'Avoiding danger from overhead power lines' (GS6) gives valuable information and guidance on how to safely plan and set up work near to overhead power lines. High voltage electricity can arc across large gaps in certain conditions.</p>
                    </div>
                </div>
            """

def create_comprehensive_module5_content(content):
    """
    Create comprehensive content for Module 5
    """
    return f"""
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-green-900 mb-2">📦 Loading, Transporting and Discharging Different Materials</h4>
                    <div class="text-green-800 text-sm leading-relaxed">
                        <h5 class="font-semibold text-green-900 mb-2">Denser materials:</h5>
                        <p class="mb-2">May overload your tyres and may stick to the body when tipping. You may need to tip at different locations.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Semi-Fluid materials:</h5>
                        <p class="mb-2">May spill during travel.</p>
                        
                        <h5 class="font-semibold text-green-900 mb-2">Spoil:</h5>
                        <p class="mb-2">This material should be segregated for re-use on or off-site, where possible. It must be placed a minimum distance of the depth of the trench away from the excavation to prevent collapse.</p>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">🛣️ Travelling on a Public Highway</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        <p class="mb-3">When travelling on the public highway, the machine must adhere to the following requirements by law:</p>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>The dumper must be registered and taxed as a "special vehicle"</li>
                            <li>The dumper must have vehicle insurance</li>
                            <li>If the dumper can exceed 20 mph it must have a horn in good working condition</li>
                            <li>If it can exceed 25 mph it must have a speedometer in good working condition</li>
                            <li>It must have brakes that enable it to stop</li>
                            <li>It must have lights and indicators</li>
                        </ul>
                        
                        <h5 class="font-semibold text-blue-900 mb-2">The operator must:</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Hold a full UK or approved car license (Category B)</li>
                            <li>Be a minimum of 18 years old for vehicles between 3.5T and 7.5T</li>
                            <li>Be a minimum of 21 years old for vehicles exceeding 7.5T (MAM)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-orange-900 mb-2">🔗 Towing Equipment with a Dumper – Enhanced Training</h4>
                    <div class="text-orange-800 text-sm leading-relaxed">
                        <p class="mb-3">Some dumpers have the capability to tow equipment such as small bowsers and compressors. As dumpers are not specifically designed for towing purposes, other methods should be explored before deciding on this purpose. Towing with a dumper requires enhanced training, in addition to the training delivered within the Skills Bootcamp programme.</p>
                        
                        <h5 class="font-semibold text-orange-900 mb-2">Should you be asked to tow equipment, you must consider the following points:</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>All options have been considered and there no other more suitable machine is available</li>
                            <li>Towing activities are authorised by the manufacturer of the dumper to be used</li>
                            <li>The equipment to be towed does not exceed the specification set by the manufacturer in terms of the weight of the equipment and the downward load imposed on the towing point</li>
                            <li>The towing bracket is compatible with the towing eye on the equipment to be towed</li>
                            <li>You have been trained and are competent to carry out towing activities</li>
                            <li>The correct towing pin for the towing bracket is used and that the safety pin is located correctly in the towing pin</li>
                            <li>Towing balls come in a variety of sizes and where the size of ball differs from the towed equipment's towing hitch, there is a danger that the hitch can dislodge from the ball and the towed equipment become detached from the dumper</li>
                            <li>The manufacturers handbook should be consulted to ensure a full understanding of the towing restrictions placed by the manufacturer</li>
                            <li>The towing ability of the dumper may depend on whether the trailer is fitted with an overrun brake or is non-braked. Using an overweight non-braked trailer could cause loss of control during the braking activity</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-red-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-red-900 mb-2">📋 Loading/Unloading Procedures for Machine Transportation</h4>
                    <div class="text-red-800 text-sm leading-relaxed">
                        <p class="mb-3">The transporter driver is responsible for loading operations. The following checks should be made before loading commences:</p>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>Ground support</li>
                            <li>Ramp condition</li>
                            <li>Overhead and other hazards</li>
                            <li>Positioning on trailer</li>
                            <li>Direction of travel</li>
                        </ul>
                        
                        <h5 class="font-semibold text-red-900 mb-2">The following process should be followed when loading the transporter:</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Remove any dirt or debris from the trailer</li>
                            <li>Check parking brake</li>
                            <li>Check trailer bodywork for signs of damage</li>
                            <li>Position loading ramps securely on the transporter</li>
                            <li>Stop the engine and secure the machine</li>
                            <li>Chock wheels to prevent movement</li>
                            <li>Engage chassis locking bar</li>
                            <li>Secure to the trailer</li>
                            <li>Ensure legal load (height/weight of trailer)</li>
                        </ul>
                    </div>
                </div>
            """

def create_comprehensive_module6_content(content):
    """
    Create comprehensive content for Module 6
    """
    return f"""
                <div class="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-green-900 mb-2">🌍 Environmental Considerations of Machine Use</h4>
                    <div class="text-green-800 text-sm leading-relaxed">
                        <p class="mb-3">The main types of pollution associated with construction operations are:</p>
                        <ul class="list-disc list-inside mb-3 space-y-1">
                            <li>Air pollution</li>
                            <li>Water pollution</li>
                            <li>Noise pollution</li>
                        </ul>
                        
                        <h5 class="font-semibold text-green-900 mb-2">There are various pollution prevention strategies that can be used. Operators can minimise their effect on the environment by using the machine efficiently:</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Lower engine speeds where possible</li>
                            <li>Ensure there is no spillage of fluids</li>
                            <li>Keep the machine well maintained</li>
                            <li>Ensure prior planning of the work task</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">📚 Complete Glossary of Terms</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        <p class="mb-3">The glossary contains over 50 comprehensive terms and definitions essential for FTD operation:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h5 class="font-semibold text-blue-900 mb-2">Key Terms Include:</h5>
                                <ul class="list-disc list-inside space-y-1 text-xs">
                                    <li>Forward Tipping Dumper</li>
                                    <li>ROPS (Roll Over Protective Structure)</li>
                                    <li>FOPS (Falling Object Protective Structure)</li>
                                    <li>Load Capacity</li>
                                    <li>Load Integrity</li>
                                    <li>Banksman</li>
                                    <li>Exclusion Zone</li>
                                    <li>Risk Assessment</li>
                                    <li>Method Statement</li>
                                    <li>PPE (Personal Protective Equipment)</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-semibold text-blue-900 mb-2">Safety Terms:</h5>
                                <ul class="list-disc list-inside space-y-1 text-xs">
                                    <li>Safety Critical</li>
                                    <li>Crush Zone</li>
                                    <li>Deadman</li>
                                    <li>Edge Protection</li>
                                    <li>Visibility Aids</li>
                                    <li>Reversing Alarm</li>
                                    <li>Human Form Recognition</li>
                                    <li>Safety Shield</li>
                                    <li>Traffic Management Plan</li>
                                    <li>Emergency Procedures</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-yellow-900 mb-2">📋 End of Work and Shut Down Procedures</h4>
                    <div class="text-yellow-800 text-sm leading-relaxed">
                        <p class="mb-3">When parking the machine at the end of the work period, you must follow the full shut down procedure. Consider where you park your machine.</p>
                        <p class="mb-3"><strong>DO NOT park your machine on:</strong></p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Site roads</li>
                            <li>Pedestrian routes</li>
                            <li>Soft/wet/steep ground</li>
                            <li>Blocking access / egress routes from buildings</li>
                        </ul>
                    </div>
                </div>
            """

def update_module_content(html_content, module_id, title, content):
    """
    Update a specific module's content in the HTML
    """
    # Find the module content section and replace it
    pattern = rf'({module_id}:\s*{{\s*title:\s*"[^"]*",\s*content:\s*`)(.*?)(`\s*}})'
    
    def replace_module_content(match):
        return f"{match.group(1)}{content}{match.group(3)}"
    
    updated_html = re.sub(pattern, replace_module_content, html_content, flags=re.DOTALL)
    return updated_html

if __name__ == "__main__":
    fix_module_content()
