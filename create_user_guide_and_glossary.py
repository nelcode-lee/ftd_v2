#!/usr/bin/env python3
"""
Create separate user guide and comprehensive glossary
"""

import json
import re

def create_user_guide_and_glossary():
    """
    Create separate user guide and comprehensive glossary
    """
    # Read current HTML
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    print("📚 Creating user guide and comprehensive glossary...")
    
    # Create user guide content
    user_guide_content = create_user_guide_content()
    
    # Create comprehensive glossary content
    glossary_content = create_comprehensive_glossary()
    
    # Update the HTML with new content
    html_content = update_progress_section(html_content, user_guide_content)
    html_content = update_glossary_section(html_content, glossary_content)
    
    # Write updated HTML
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ User guide and comprehensive glossary created!")
    print("🌐 View the enhanced workbook at: http://localhost:8081")

def create_user_guide_content():
    """
    Create comprehensive user guide content
    """
    return """
                <div class="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 class="text-xl font-semibold text-blue-900 mb-4">📖 How to Use This Digital Workbook</h3>
                    <p class="text-blue-800 mb-4">This interactive digital workbook is designed to guide you through the Forward Tipping Dumper (FTD) training course. Follow this guide to get the most out of your learning experience.</p>
                </div>

                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">🎯 Getting Started</h4>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                                <div>
                                    <p class="font-medium text-gray-900">Complete the Login Process</p>
                                    <p class="text-sm text-gray-600">Use the provided credentials to access the workbook. Your progress will be automatically saved.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                                <div>
                                    <p class="font-medium text-gray-900">Navigate Through Modules</p>
                                    <p class="text-sm text-gray-600">Click on any module card to access detailed content. Modules are designed to be completed in sequence.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                                <div>
                                    <p class="font-medium text-gray-900">Study the Content</p>
                                    <p class="text-sm text-gray-600">Read through all sections, view images, and take notes. Each module contains comprehensive information.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">📚 Module Structure</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <h5 class="font-semibold text-gray-800">Module 1: Introduction to FTD</h5>
                                <p class="text-sm text-gray-600">Course objectives, safe working practices, and operator roles</p>
                            </div>
                            <div class="space-y-2">
                                <h5 class="font-semibold text-gray-800">Module 2: Health & Safety Legislation</h5>
                                <p class="text-sm text-gray-600">HSWA 1974, PUWER 98, risk assessments, and site induction</p>
                            </div>
                            <div class="space-y-2">
                                <h5 class="font-semibold text-gray-800">Module 3: Machine Components</h5>
                                <p class="text-sm text-gray-600">Major components, pre-operational checks, and PPE requirements</p>
                            </div>
                            <div class="space-y-2">
                                <h5 class="font-semibold text-gray-800">Module 4: Machine Operation</h5>
                                <p class="text-sm text-gray-600">Safe operation procedures, visibility aids, and confined area work</p>
                            </div>
                            <div class="space-y-2">
                                <h5 class="font-semibold text-gray-800">Module 5: Material Handling</h5>
                                <p class="text-sm text-gray-600">Loading procedures, highway travel, and towing equipment</p>
                            </div>
                            <div class="space-y-2">
                                <h5 class="font-semibold text-gray-800">Module 6: Environmental & Assessment</h5>
                                <p class="text-sm text-gray-600">Environmental considerations and comprehensive assessment</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">🧪 Testing and Assessment</h4>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">📝</span>
                                <div>
                                    <p class="font-medium text-gray-900">Knowledge Stops</p>
                                    <p class="text-sm text-gray-600">Each module contains Knowledge Stops with questions and answers to test your understanding.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">🎯</span>
                                <div>
                                    <p class="font-medium text-gray-900">Interactive Tests</p>
                                    <p class="text-sm text-gray-600">Take comprehensive tests for each module with multiple choice and open-ended questions.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">🤖</span>
                                <div>
                                    <p class="font-medium text-gray-900">AI-Powered Assessment</p>
                                    <p class="text-sm text-gray-600">Advanced AI marking system provides intelligent feedback on your answers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">📱 Mobile and Device Usage</h4>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">📱</span>
                                <div>
                                    <p class="font-medium text-gray-900">Mobile Optimized</p>
                                    <p class="text-sm text-gray-600">The workbook is fully responsive and works perfectly on phones and tablets.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">💾</span>
                                <div>
                                    <p class="font-medium text-gray-900">Progress Saving</p>
                                    <p class="text-sm text-gray-600">Your progress is automatically saved and synced across devices.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">🔄</span>
                                <div>
                                    <p class="font-medium text-gray-900">Offline Access</p>
                                    <p class="text-sm text-gray-600">Once loaded, the workbook works offline for continued learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">💡 Learning Tips</h4>
                        <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold">⭐</span>
                                <div>
                                    <p class="font-medium text-gray-900">Take Your Time</p>
                                    <p class="text-sm text-gray-600">Read through each section carefully and don't rush through the content.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold">📝</span>
                                <div>
                                    <p class="font-medium text-gray-900">Take Notes</p>
                                    <p class="text-sm text-gray-600">Use the note-taking features to record important information and key points.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold">🔄</span>
                                <div>
                                    <p class="font-medium text-gray-900">Review Regularly</p>
                                    <p class="text-sm text-gray-600">Revisit completed modules to reinforce your learning and understanding.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <span class="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold">🎯</span>
                                <div>
                                    <p class="font-medium text-gray-900">Practice Tests</p>
                                    <p class="text-sm text-gray-600">Take practice tests multiple times to ensure you understand all concepts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h4 class="text-lg font-semibold text-green-900 mb-3">🛡️ Safety First</h4>
                        <p class="text-green-800 mb-3">Remember that this training is designed to keep you and others safe. Always follow the safety procedures outlined in each module.</p>
                        <ul class="list-disc list-inside text-green-800 space-y-1">
                            <li>Never operate machinery without proper training and authorization</li>
                            <li>Always wear the required PPE for your work environment</li>
                            <li>Follow all site-specific safety procedures and method statements</li>
                            <li>Report any safety concerns or incidents immediately</li>
                            <li>When in doubt, ask for clarification from your supervisor</li>
                        </ul>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h4 class="text-lg font-semibold text-blue-900 mb-3">📞 Support and Help</h4>
                        <p class="text-blue-800 mb-3">If you need assistance with the digital workbook or have questions about the content:</p>
                        <div class="space-y-2">
                            <p class="text-blue-800"><strong>Technical Support:</strong> Contact your training provider for technical issues</p>
                            <p class="text-blue-800"><strong>Content Questions:</strong> Refer to your instructor or training supervisor</p>
                            <p class="text-blue-800"><strong>Emergency Procedures:</strong> Follow your site's emergency protocols</p>
                        </div>
                    </div>
                </div>
            """

def create_comprehensive_glossary():
    """
    Create comprehensive glossary content
    """
    return """
                <div class="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 class="text-xl font-semibold text-blue-900 mb-4">📚 FTD Glossary of Terms</h3>
                    <p class="text-blue-800 mb-4">Comprehensive glossary of terms and definitions used throughout the Forward Tipping Dumper training course.</p>
                    <div class="bg-white p-4 rounded-lg">
                        <input type="text" id="glossarySearch" placeholder="Search glossary terms..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                </div>

                <div id="glossaryTerms" class="grid gap-4">
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Access</h3>
                        <p class="text-brand-700">To be able to get to a place.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Actuating</h3>
                        <p class="text-brand-700">Cause (a machine or device) to operate.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Articulated</h3>
                        <p class="text-brand-700">Having two or more sections connected by a flexible joint.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Backfilling</h3>
                        <p class="text-brand-700">The process of filling in excavated areas with transported material.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Banksman</h3>
                        <p class="text-brand-700">A person who guides the machine operator during movement, especially in confined spaces and when reversing.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Beacon</h3>
                        <p class="text-brand-700">A flashing safety light mounted on the ROPS/top of cab to alert others when the machine is in operation.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Blind Spots</h3>
                        <p class="text-brand-700">Areas around the dumper not visible to the operator, requiring caution.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Boom</h3>
                        <p class="text-brand-700">The main arm attached to a 360's body that supports the dipper and bucket.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Brake Test</h3>
                        <p class="text-brand-700">A routine check to ensure the dumper's braking system is functioning correctly and safely before operation, typically performed at the start of a shift.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Bucket</h3>
                        <p class="text-brand-700">The attachment on a 360 used for digging, grading, trenching or loading duties.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Cabbed Dumper</h3>
                        <p class="text-brand-700">Dumper fitted with an enclosed operator cab, providing protection from weather and site conditions.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Cab / Operator's Cab</h3>
                        <p class="text-brand-700">The compartment where the operator sits to control the machine, often equipped with joysticks and pedals.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Centre of Gravity</h3>
                        <p class="text-brand-700">Balance point of a load.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Chassis</h3>
                        <p class="text-brand-700">The main framework of the machine to which all components are mounted.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Check Valves</h3>
                        <p class="text-brand-700">Valve monitoring pressure of the system.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Collapse</h3>
                        <p class="text-brand-700">The sudden failure of the sides or walls of an excavation, causing soil or materials to cave in.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Consequences</h3>
                        <p class="text-brand-700">The effect, result, or outcome of something occurring earlier.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Contour</h3>
                        <p class="text-brand-700">To change the shape of a surface, making some parts higher and some parts lower.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Counterbalance</h3>
                        <p class="text-brand-700">A weight that balances another weight.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Crush Zone</h3>
                        <p class="text-brand-700">An area where a person could be crushed between moving parts of machinery or between a moving part and a stationary object.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Cut and Fill</h3>
                        <p class="text-brand-700">A process involving the removal (cut) and redistribution (fill) of earth to level ground.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Deadman</h3>
                        <p class="text-brand-700">The Deadman lever is a safety control mechanism on a machine that must be placed in the isolated (neutral or safe) position to disable machine movement before anyone approaches the machine.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Differential Lock</h3>
                        <p class="text-brand-700">A feature that locks the drive axles for better traction on slippery or uneven terrain.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Discharging</h3>
                        <p class="text-brand-700">The process of unloading material from the skip.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Edge Protection</h3>
                        <p class="text-brand-700">A safety system or stop block installed at the edge of elevated work areas to prevent people, materials, or equipment from falling.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Egress</h3>
                        <p class="text-brand-700">To be able to leave a place.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Exclusion Zone</h3>
                        <p class="text-brand-700">A designated area where access is restricted due to potential hazards, such as heavy machinery, or dangerous operations.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Expansion Tank</h3>
                        <p class="text-brand-700">Prevents the system from becoming over-pressurised as the coolant heats up and expands.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">F.O.P.S.</h3>
                        <p class="text-brand-700">Falling Object Protective Structure - a safety feature built into the cab or canopy of the machine designed to protect the operator from falling objects, such as rocks, debris, or materials from above.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Forward Tipping Dumper</h3>
                        <p class="text-brand-700">A construction machine designed to carry and unload loose material by tipping its skip forward over the front wheels.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Front Axle</h3>
                        <p class="text-brand-700">Supports the front wheels, often provides steering capability, and transmits drive power depending on the dumper's drivetrain.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">GPS</h3>
                        <p class="text-brand-700">Helps ensure precise digging by providing real-time location data, allowing operators to excavate to the correct depth and dimensions without manual measuring.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Gradients</h3>
                        <p class="text-brand-700">Slopes.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Human Form Recognition (HFR)</h3>
                        <p class="text-brand-700">Technology used to detect the presence of people around the machine.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Hydraulics</h3>
                        <p class="text-brand-700">The system of pressurised fluid used to power and control the movement of the machine's key components.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Hydraulic Rams</h3>
                        <p class="text-brand-700">Cylinders that lift the skip to tip and discharge material.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Inclines</h3>
                        <p class="text-brand-700">Slopes, gradient.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Isolation Procedure</h3>
                        <p class="text-brand-700">Locking out the machine to prevent accidental start-up during maintenance or inspection.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Laden Skip</h3>
                        <p class="text-brand-700">The dumper's skip when it is fully loaded with material ready for transport or unloading.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Load Capacity</h3>
                        <p class="text-brand-700">The maximum weight of material the dumper is designed and rated to carry safely in its dump body.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Loading</h3>
                        <p class="text-brand-700">Filling the skip with soil, rubble, or other materials, usually by a loader or excavator.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Loading Area/Zone</h3>
                        <p class="text-brand-700">The designated area where excavators or loaders load material into the FTD.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Load Integrity</h3>
                        <p class="text-brand-700">The condition in which a load remains stable, secure, and contained during transport, ensuring it does not shift, spill, or exceed the limits of the vehicle.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Load Limits</h3>
                        <p class="text-brand-700">Maintaining balance when tipping, especially on slopes or uneven ground.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Load Security</h3>
                        <p class="text-brand-700">Ensuring that material is safely contained within the body and not overloaded.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Hauling</h3>
                        <p class="text-brand-700">Transporting material (e.g., soil, aggregates, spoil) from a loading area to a tipping area.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Manoeuvre</h3>
                        <p class="text-brand-700">To move or control the machine. This involves adjusting the machine's direction, speed, or position for tasks.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Material Handling</h3>
                        <p class="text-brand-700">Moving bulk materials, like soil, gravel, or sand, from one place to another.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Muck Shifting</h3>
                        <p class="text-brand-700">The process of moving large volumes of earth or spoil from one area of a site to another.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Oscillating</h3>
                        <p class="text-brand-700">To move repeatedly from side to side or up and down between two points.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Overloaded</h3>
                        <p class="text-brand-700">The machine carries more weight than its maximum safe payload, risking damage and unsafe operation.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">People, Plant Interface</h3>
                        <p class="text-brand-700">The interaction between workers (people) and machinery (plant).</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Pressurised</h3>
                        <p class="text-brand-700">If a container, etc. is pressurised, the air pressure inside it is higher than the air pressure outside it.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Rear Axle</h3>
                        <p class="text-brand-700">Located at the back of the vehicle, the rear axle supports the rear wheels, carries part of the load's weight, and provides drive power to help propel the dumper across the site.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Red Zone</h3>
                        <p class="text-brand-700">Area around the machine that is high-risk.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Restraining Systems</h3>
                        <p class="text-brand-700">Seat belt.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Reversing Alarm</h3>
                        <p class="text-brand-700">A loud alert sound to warn others when the machine is reversing.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Risk Assessment</h3>
                        <p class="text-brand-700">The process of identifying hazards in the workplace.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">R.O.P.S.</h3>
                        <p class="text-brand-700">Rollover Protective Structure – a safety feature in cabs to protect the operator in case of a rollover.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Rotating Seat Dumper</h3>
                        <p class="text-brand-700">A type of forward tipping dumper where the operator's seat and controls can rotate.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Safety Critical</h3>
                        <p class="text-brand-700">Actions with the machine can have significant health & safety consequences.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Safety Strut / Prop</h3>
                        <p class="text-brand-700">A strong rod, usually made from metal that helps support raised components (i.e. skip/ booms).</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Skip/ Bucket</h3>
                        <p class="text-brand-700">The container that holds the load; tips forward to discharge material.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Shoring</h3>
                        <p class="text-brand-700">To make a trench stronger by supporting it.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Slew / Slewing</h3>
                        <p class="text-brand-700">The rotation of the upper structure (cab and boom) of an excavator on its undercarriage.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Spoil</h3>
                        <p class="text-brand-700">Waste material such as soil or rubble excavated from the ground and transported by FTD.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Spoil Removal</h3>
                        <p class="text-brand-700">Removing excavated material (soil, rocks, etc.) from the site.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Straight Skip Dumper</h3>
                        <p class="text-brand-700">Type of forward tipping dumper with a fixed, non-rotating skip that tips forward to unload material directly in front of the vehicle.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Stockpiling</h3>
                        <p class="text-brand-700">Depositing material in designated piles for later use or removal.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Stop Blocks</h3>
                        <p class="text-brand-700">Concrete barriers or blocks used to prevent vehicle access.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Sub-base</h3>
                        <p class="text-brand-700">A layer of material placed on top of the ground to provide a stable foundation.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Swing Radius</h3>
                        <p class="text-brand-700">The area around an excavator that the upper structure can reach when rotating.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Swivel Skip Dumper</h3>
                        <p class="text-brand-700">A forward tipping dumper with a skip that can rotate, allowing the operator to tip material to the side for easier unloading in tight or uneven spaces.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Telematics</h3>
                        <p class="text-brand-700">Remote monitoring systems used for tracking machine performance, location, and maintenance needs.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Terrain</h3>
                        <p class="text-brand-700">The physical characteristics and surface conditions of the ground, including its slope, texture, hardness, and obstacles, which affect how machinery and workers move and operate.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Tipping</h3>
                        <p class="text-brand-700">Unloading material by tipping the skip forward over the front wheels.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Tipping Area/Zone</h3>
                        <p class="text-brand-700">The area where the dump body is raised to unload material.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Tipping Stability</h3>
                        <p class="text-brand-700">The safe practice of tipping only on level, compacted ground to avoid overturning.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Towing</h3>
                        <p class="text-brand-700">The act of pulling or hauling another vehicle, trailer, or equipment using the dumper, usually by attaching a tow bar or hitch.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Traction</h3>
                        <p class="text-brand-700">Grip.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Traffic Management Plan</h3>
                        <p class="text-brand-700">A site-specific layout that controls plant movement to prevent collisions.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Transmission</h3>
                        <p class="text-brand-700">The system that transfers engine power to the wheels.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Trenches</h3>
                        <p class="text-brand-700">Narrow, deep excavations made in the ground, typically used for laying pipes, cables, drainage systems, or foundations.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Undercarriage</h3>
                        <p class="text-brand-700">Includes the wheels, axles, suspension, frame, and related components that support the machine, provide stability, and enable it to move and carry loads safely across site.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Unladen Skip</h3>
                        <p class="text-brand-700">The dumper's skip when it is empty and not carrying any load.</p>
                    </div>
                    <div class="card">
                        <h3 class="font-semibold text-brand-900 mb-2">Visibility Aids</h3>
                        <p class="text-brand-700">Mirrors, cameras, or alarms to assist the operator's awareness of surroundings.</p>
                    </div>
                </div>
            """

def update_progress_section(html_content, user_guide_content):
    """
    Update the progress section with user guide content
    """
    # Find and replace the progress content
    pattern = r'(<div id="progress-content".*?>)(.*?)(</div>)'
    replacement = f'\\1{user_guide_content}\\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    # Update the tab title
    html_content = re.sub(r'Progress', 'User Guide', html_content)
    
    return html_content

def update_glossary_section(html_content, glossary_content):
    """
    Update the glossary section with comprehensive glossary content
    """
    # Find and replace the glossary content
    pattern = r'(<div id="glossary-content".*?>)(.*?)(</div>)'
    replacement = f'\\1{glossary_content}\\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

if __name__ == "__main__":
    create_user_guide_and_glossary()
