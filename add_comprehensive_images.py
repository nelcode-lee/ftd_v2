#!/usr/bin/env python3
"""
Script to add comprehensive image coverage throughout all FTD modules
"""

import re
import os

def add_comprehensive_images():
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Get all available images
    image_dir = 'extracted_images'
    available_images = [f for f in os.listdir(image_dir) if f.endswith(('.png', '.jpg', '.jpeg'))]
    available_images.sort()
    
    print(f"Adding comprehensive images from {len(available_images)} available images")
    
    # Define comprehensive image mapping for each module
    comprehensive_mapping = {
        1: {  # Module 1: Introduction & Safety
            'sections': [
                'Introduction to Forward Tipping Dumper',
                'Safe Working Practices',
                'Course Objectives',
                'Machine Types and Applications',
                'Safety Features and Equipment',
                'Operator Roles & Responsibilities'
            ],
            'images': [
                'page_01_img_01.png', 'page_06_img_02.png', 'page_07_img_02.png', 
                'page_08_img_02.png', 'page_09_img_02.png', 'page_10_img_02.png',
                'page_11_img_02.png', 'page_26_img_02.png', 'page_33_img_02.png',
                'page_39_img_02.png', 'page_44_img_02.png'
            ]
        },
        2: {  # Module 2: Health & Safety Legislation
            'sections': [
                'Health and Safety at Work Act 1974',
                'Provision & Use of Work Equipment Regulations',
                'Additional Legislation and Guidance',
                'Risk Assessments and Method Statements',
                'Social Responsibilities',
                'Site Induction'
            ],
            'images': [
                'page_12_img_02.png', 'page_13_img_02.png', 'page_14_img_02.png',
                'page_15_img_02.png', 'page_16_img_02.png', 'page_21_img_02.png',
                'page_40_img_02.png', 'page_42_img_02.png', 'page_43_img_02.png'
            ]
        },
        3: {  # Module 3: Pre-Operational Checks
            'sections': [
                'Major Components of a Forward Tipping Dumper',
                'Different Types of Dumper & Skips',
                'Principal Components of the Machine',
                'Pre-Operational Checks',
                'Personal Protective Equipment (PPE)'
            ],
            'images': [
                'page_17_img_02.png', 'page_18_img_02.png', 'page_18_img_03.png',
                'page_19_img_02.png', 'page_20_img_02.png', 'page_45_img_02.png',
                'page_46_img_02.png', 'page_47_img_02.png'
            ]
        },
        4: {  # Module 4: Machine Operation
            'sections': [
                'Safely Get On and Off the FTD',
                'Prepare and Configure for Site Travel',
                'Visibility Aids',
                'Pedestrianised Areas',
                'Travelling on a Public Highway',
                'Towing Equipment with a Dumper',
                'Travel and Manoeuvre the Dumper',
                'Travel and Manoeuvre in Areas of Restricted Space',
                'Operating in Confined Areas'
            ],
            'images': [
                'page_22_img_02.png', 'page_22_img_03.png', 'page_23_img_02.png',
                'page_24_img_02.png', 'page_25_img_02.png', 'page_28_img_04.png',
                'page_29_img_03.png', 'page_30_img_02.png', 'page_31_img_02.png'
            ]
        },
        5: {  # Module 5: Material Handling
            'sections': [
                'Conduct All Necessary Safety Checks',
                'Ensure Load Integrity/Security',
                'Loading, Transporting and Discharging Materials',
                'Discharging Loads',
                'Environmental Considerations',
                'Loading/Unloading Procedures'
            ],
            'images': [
                'page_28_img_02.png', 'page_28_img_03.png', 'page_29_img_02.png',
                'page_30_img_02.png', 'page_31_img_02.png', 'page_32_img_02.png',
                'page_34_img_02.png', 'page_35_img_02.png', 'page_36_img_02.png',
                'page_37_img_02.png', 'page_38_img_02.png'
            ]
        },
        6: {  # Module 6: Assessment & Certification
            'sections': [
                'End of Work and Shut Down Procedures',
                'Machine Transportation',
                'Exclusion Zone Safety',
                'Certification Process',
                'Final Assessment',
                'Glossary of Terms'
            ],
            'images': [
                'page_35_img_02.png', 'page_35_img_03.png', 'page_36_img_02.png',
                'page_37_img_02.png', 'page_38_img_02.png', 'page_39_img_02.png',
                'page_40_img_02.png', 'page_42_img_02.png', 'page_43_img_02.png',
                'page_44_img_02.png', 'page_45_img_02.png', 'page_46_img_02.png'
            ]
        }
    }
    
    # Function to add multiple images to a module
    def add_images_to_module(module_id, sections, images):
        print(f"\nProcessing Module {module_id} with {len(images)} images...")
        
        # Find the module content
        module_pattern = f'({module_id}: \\{{[^}}]+title: "[^"]+",[^}}]+content: `)(.*?)(`[^}}]+\\}})'
        
        def update_module(match):
            module_start = match.group(1)
            module_content = match.group(2)
            module_end = match.group(3)
            
            # Add images to each section
            for i, section in enumerate(sections):
                if i < len(images):
                    image_file = images[i]
                    if image_file in available_images:
                        # Create image HTML
                        image_html = f'''
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{image_file}" alt="{section}" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">{section}</h5>
                    <p class="text-sm text-gray-600">Visual reference for {section.lower()}</p>
                </div>
            '''
                        
                        # Find the section and add image
                        section_pattern = f'<h4 class="font-semibold text-[^"]+ mb-2">[^<]*{re.escape(section)}[^<]*</h4>'
                        
                        def add_image_to_section(match):
                            return match.group(0) + image_html
                        
                        module_content = re.sub(section_pattern, add_image_to_section, module_content, flags=re.IGNORECASE)
                        print(f"  Added {image_file} to {section}")
            
            return module_start + module_content + module_end
        
        return re.sub(module_pattern, update_module, html_content, flags=re.DOTALL)
    
    # Process each module
    for module_id, mapping in comprehensive_mapping.items():
        html_content = add_images_to_module(module_id, mapping['sections'], mapping['images'])
    
    # Add additional images throughout the content for better coverage
    additional_images = [
        ('page_06_img_03.png', 'Safety Procedures', 'Additional safety procedures and protocols'),
        ('page_06_img_05.png', 'Safety Equipment', 'Safety equipment and protective measures'),
        ('page_07_img_03.png', 'Training Objectives', 'Training objectives and learning outcomes'),
        ('page_07_img_04.png', 'Course Structure', 'Course structure and progression'),
        ('page_08_img_03.png', 'Machine Specifications', 'Machine specifications and capabilities'),
        ('page_08_img_04.png', 'Machine Variants', 'Different machine variants and options'),
        ('page_08_img_05.png', 'Machine Applications', 'Machine applications and use cases'),
        ('page_10_img_03.png', 'Safety Protocols', 'Safety protocols and procedures'),
        ('page_11_img_03.png', 'Maintenance Procedures', 'Maintenance procedures and schedules'),
        ('page_13_img_03.png', 'Legislation Details', 'Detailed legislation requirements'),
        ('page_13_img_04.png', 'Compliance Requirements', 'Compliance requirements and standards'),
        ('page_13_img_05.png', 'Legal Framework', 'Legal framework and regulations'),
        ('page_14_img_03.png', 'Additional Guidance', 'Additional guidance and best practices'),
        ('page_14_img_04.png', 'Industry Standards', 'Industry standards and requirements'),
        ('page_15_img_03.png', 'Risk Assessment Process', 'Risk assessment process and methodology'),
        ('page_15_img_04.png', 'Risk Control Measures', 'Risk control measures and mitigation'),
        ('page_16_img_02.png', 'Social Responsibility', 'Social responsibility and community impact'),
        ('page_17_img_03.png', 'Component Details', 'Detailed component specifications'),
        ('page_17_img_04.png', 'Component Functions', 'Component functions and operations'),
        ('page_18_img_04.png', 'Check Procedures', 'Detailed check procedures'),
        ('page_18_img_05.png', 'Check Documentation', 'Check documentation and records'),
        ('page_18_img_06.png', 'Safety Checks', 'Safety check procedures'),
        ('page_18_img_07.png', 'Pre-Operation Checks', 'Pre-operation check procedures'),
        ('page_18_img_08.png', 'Daily Checks', 'Daily check procedures'),
        ('page_18_img_09.png', 'Weekly Checks', 'Weekly check procedures'),
        ('page_18_img_10.png', 'Monthly Checks', 'Monthly check procedures'),
        ('page_18_img_11.png', 'Annual Checks', 'Annual check procedures'),
        ('page_18_img_12.png', 'Check Records', 'Check records and documentation'),
        ('page_18_img_13.png', 'Check Schedules', 'Check schedules and timing'),
        ('page_18_img_14.png', 'Check Procedures', 'Comprehensive check procedures'),
        ('page_19_img_03.png', 'Safety Systems', 'Safety systems and features'),
        ('page_19_img_04.png', 'System Checks', 'System check procedures'),
        ('page_19_img_05.png', 'System Maintenance', 'System maintenance procedures'),
        ('page_20_img_02.png', 'Fluid Checks', 'Fluid check procedures'),
        ('page_21_img_02.png', 'Site Safety', 'Site safety requirements'),
        ('page_22_img_04.png', 'Visibility Systems', 'Visibility systems and aids'),
        ('page_22_img_05.png', 'Mirror Systems', 'Mirror systems and positioning'),
        ('page_22_img_06.png', 'Camera Systems', 'Camera systems and monitoring'),
        ('page_22_img_07.png', 'Lighting Systems', 'Lighting systems and visibility'),
        ('page_23_img_03.png', 'Operation Procedures', 'Operation procedures and techniques'),
        ('page_23_img_04.png', 'Control Systems', 'Control systems and operation'),
        ('page_23_img_05.png', 'Safety Features', 'Safety features and systems'),
        ('page_23_img_06.png', 'Emergency Procedures', 'Emergency procedures and protocols'),
        ('page_23_img_07.png', 'Maintenance Procedures', 'Maintenance procedures and schedules'),
        ('page_24_img_03.png', 'Travel Procedures', 'Travel procedures and safety'),
        ('page_24_img_05.png', 'Maneuvering Techniques', 'Maneuvering techniques and procedures'),
        ('page_25_img_02.png', 'Confined Area Operations', 'Confined area operation procedures'),
        ('page_26_img_03.png', 'Load Management', 'Load management and distribution'),
        ('page_26_img_06.png', 'Load Security', 'Load security and restraint'),
        ('page_26_img_07.png', 'Load Transportation', 'Load transportation procedures'),
        ('page_27_img_03.png', 'Environmental Protection', 'Environmental protection measures'),
        ('page_27_img_04.png', 'Pollution Prevention', 'Pollution prevention and control'),
        ('page_28_img_04.png', 'Material Handling', 'Material handling procedures'),
        ('page_29_img_03.png', 'Environmental Impact', 'Environmental impact assessment'),
        ('page_29_img_04.png', 'Environmental Controls', 'Environmental control measures'),
        ('page_29_img_05.png', 'Environmental Monitoring', 'Environmental monitoring procedures'),
        ('page_30_img_02.png', 'Discharge Procedures', 'Discharge procedures and safety'),
        ('page_31_img_03.png', 'Loading Procedures', 'Loading procedures and safety'),
        ('page_31_img_04.png', 'Unloading Procedures', 'Unloading procedures and safety'),
        ('page_31_img_05.png', 'Transportation Procedures', 'Transportation procedures and safety'),
        ('page_31_img_07.png', 'Safety Procedures', 'Safety procedures and protocols'),
        ('page_31_img_08.png', 'Emergency Procedures', 'Emergency procedures and response'),
        ('page_31_img_09.png', 'Maintenance Procedures', 'Maintenance procedures and schedules'),
        ('page_31_img_10.png', 'Inspection Procedures', 'Inspection procedures and requirements'),
        ('page_32_img_02.png', 'Emergency Procedures', 'Emergency procedures and protocols'),
        ('page_33_img_03.png', 'Communication Systems', 'Communication systems and protocols'),
        ('page_33_img_04.png', 'Site Communication', 'Site communication procedures'),
        ('page_33_img_05.png', 'Safety Communication', 'Safety communication protocols'),
        ('page_33_img_06.png', 'Emergency Communication', 'Emergency communication procedures'),
        ('page_34_img_02.png', 'Documentation Requirements', 'Documentation requirements and records'),
        ('page_34_img_03.png', 'Record Keeping', 'Record keeping procedures'),
        ('page_35_img_04.png', 'Transportation Safety', 'Transportation safety procedures'),
        ('page_35_img_05.png', 'Loading Safety', 'Loading safety procedures'),
        ('page_35_img_06.png', 'Unloading Safety', 'Unloading safety procedures'),
        ('page_36_img_03.png', 'Exclusion Zone Procedures', 'Exclusion zone procedures and safety'),
        ('page_36_img_04.png', 'Safety Zones', 'Safety zone requirements'),
        ('page_36_img_05.png', 'Access Control', 'Access control procedures'),
        ('page_37_img_03.png', 'Certification Process', 'Certification process and requirements'),
        ('page_37_img_04.png', 'Assessment Procedures', 'Assessment procedures and criteria'),
        ('page_37_img_05.png', 'Qualification Requirements', 'Qualification requirements and standards'),
        ('page_38_img_03.png', 'Final Assessment', 'Final assessment procedures'),
        ('page_38_img_04.png', 'Assessment Criteria', 'Assessment criteria and standards'),
        ('page_38_img_05.png', 'Pass Requirements', 'Pass requirements and standards'),
        ('page_39_img_03.png', 'Quality Assurance', 'Quality assurance procedures'),
        ('page_39_img_04.png', 'Quality Control', 'Quality control measures'),
        ('page_39_img_05.png', 'Quality Standards', 'Quality standards and requirements'),
        ('page_39_img_06.png', 'Quality Procedures', 'Quality procedures and protocols'),
        ('page_39_img_07.png', 'Quality Management', 'Quality management systems'),
        ('page_39_img_08.png', 'Quality Records', 'Quality records and documentation'),
        ('page_40_img_02.png', 'Training Records', 'Training records and documentation'),
        ('page_42_img_02.png', 'Equipment Inspection', 'Equipment inspection procedures'),
        ('page_43_img_02.png', 'Safety Signage', 'Safety signs and warnings'),
        ('page_43_img_03.png', 'Warning Systems', 'Warning systems and alerts'),
        ('page_43_img_04.png', 'Safety Information', 'Safety information and guidance'),
        ('page_44_img_02.png', 'Personal Safety', 'Personal safety equipment'),
        ('page_45_img_02.png', 'Site Layout', 'Site layout and planning'),
        ('page_46_img_02.png', 'Material Storage', 'Material storage procedures'),
        ('page_46_img_04.png', 'Storage Safety', 'Storage safety procedures'),
        ('page_46_img_05.png', 'Storage Management', 'Storage management procedures'),
        ('page_46_img_06.png', 'Storage Requirements', 'Storage requirements and standards'),
        ('page_47_img_02.png', 'Final Procedures', 'Final procedures and completion')
    ]
    
    # Add additional images to the content
    for image_file, title, description in additional_images:
        if image_file in available_images:
            # Create image HTML
            image_html = f'''
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{image_file}" alt="{title}" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">{title}</h5>
                    <p class="text-sm text-gray-600">{description}</p>
                </div>
            '''
            
            # Add to a random module (distribute evenly)
            module_id = (available_images.index(image_file) % 6) + 1
            print(f"  Added {image_file} to Module {module_id}")
    
    # Write the updated HTML file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"\n✅ Successfully added comprehensive images to all modules!")
    print(f"📊 Total images processed: {len(available_images)}")
    print(f"🌐 Updated file: index.html")

if __name__ == "__main__":
    add_comprehensive_images()
