#!/usr/bin/env python3
"""
Script to reinsert all extracted images into the FTD Digital Workbook modules
"""

import re
import os
import json

def reinsert_images():
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Get list of all available images
    image_dir = 'extracted_images'
    if not os.path.exists(image_dir):
        print(f"Error: {image_dir} directory not found")
        return
    
    available_images = [f for f in os.listdir(image_dir) if f.endswith(('.png', '.jpg', '.jpeg'))]
    available_images.sort()
    
    print(f"Found {len(available_images)} images to integrate")
    
    # Define image placement strategy for each module
    image_placements = {
        1: {  # Module 1: Introduction & Safety
            'images': [
                'page_01_img_01.png',  # FTD Overview
                'page_06_img_02.png',  # Safety procedures
                'page_07_img_02.png',  # Course objectives
                'page_08_img_02.png',  # Machine types
                'page_09_img_02.png',  # Safety features
            ],
            'sections': [
                'Introduction to Forward Tipping Dumper',
                'Safe Working Practices',
                'Course Objectives',
                'Machine Types and Applications',
                'Safety Features and Equipment'
            ]
        },
        2: {  # Module 2: Health & Safety Legislation
            'images': [
                'page_12_img_02.png',  # HSWA PUWER flowchart
                'page_13_img_02.png',  # Legislation overview
                'page_14_img_02.png',  # PUWER requirements
                'page_15_img_02.png',  # Risk assessment
                'page_16_img_02.png',  # Method statements
            ],
            'sections': [
                'Health and Safety at Work Act 1974',
                'Provision & Use of Work Equipment Regulations',
                'Additional Legislation and Guidance',
                'Risk Assessments and Method Statements',
                'Social Responsibilities'
            ]
        },
        3: {  # Module 3: Pre-Operational Checks
            'images': [
                'page_17_img_02.png',  # Machine components
                'page_18_img_02.png',  # Pre-op check diagram
                'page_18_img_03.png',  # PPE requirements
                'page_19_img_02.png',  # Safety systems
                'page_20_img_02.png',  # Fluid checks
            ],
            'sections': [
                'Major Components of a Forward Tipping Dumper',
                'Pre-Operational Checks',
                'Personal Protective Equipment (PPE)',
                'Safety Systems Inspection',
                'Fluid Level Checks'
            ]
        },
        4: {  # Module 4: Machine Operation
            'images': [
                'page_22_img_02.png',  # Visibility aids
                'page_22_img_03.png',  # Rotating seat
                'page_23_img_02.png',  # Machine operation
                'page_24_img_02.png',  # Travel procedures
                'page_25_img_02.png',  # Confined areas
            ],
            'sections': [
                'Safely Get On and Off the FTD',
                'Prepare and Configure for Site Travel',
                'Visibility Aids',
                'Travel and Manoeuvre Procedures',
                'Operating in Confined Areas'
            ]
        },
        5: {  # Module 5: Material Handling
            'images': [
                'page_28_img_02.png',  # Material handling
                'page_28_img_03.png',  # Loading procedures
                'page_29_img_02.png',  # Environmental impact
                'page_30_img_02.png',  # Discharge procedures
                'page_31_img_02.png',  # Load security
            ],
            'sections': [
                'Conduct Safety Checks at Loading Area',
                'Ensure Load Integrity/Security',
                'Loading, Transporting and Discharging Materials',
                'Environmental Considerations',
                'Loading/Unloading Procedures'
            ]
        },
        6: {  # Module 6: Assessment & Certification
            'images': [
                'page_35_img_02.png',  # Machine transportation
                'page_35_img_03.png',  # Exclusion zones
                'page_36_img_02.png',  # End of work procedures
                'page_37_img_02.png',  # Certification process
                'page_38_img_02.png',  # Final assessment
            ],
            'sections': [
                'End of Work and Shut Down Procedures',
                'Machine Transportation',
                'Exclusion Zone Safety',
                'Certification Process',
                'Final Assessment'
            ]
        }
    }
    
    # Function to add image to a section
    def add_image_to_section(content, section_title, image_path, image_alt):
        # Look for the section and add image after the title
        pattern = f'<h4 class="font-semibold text-[^"]+ mb-2">[^<]*{re.escape(section_title)}[^<]*</h4>'
        
        def replace_section(match):
            section_start = match.group(0)
            # Add image after the section title
            image_html = f'''
                {section_start}
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{image_path}" alt="{image_alt}" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">{image_alt}</h5>
                    <p class="text-sm text-gray-600">Visual reference for {section_title.lower()}</p>
                </div>
            '''
            return image_html
        
        return re.sub(pattern, replace_section, content, flags=re.IGNORECASE)
    
    # Process each module
    for module_id, placement_info in image_placements.items():
        print(f"\nProcessing Module {module_id}...")
        
        # Find the module content in the HTML
        module_pattern = f'({module_id}: \\{{[^}}]+title: "[^"]+",[^}}]+content: `)(.*?)(`[^}}]+\\}})'
        
        def update_module_content(match):
            module_start = match.group(1)
            module_content = match.group(2)
            module_end = match.group(3)
            
            # Add images to each section
            for i, (image_file, section_title) in enumerate(zip(placement_info['images'], placement_info['sections'])):
                if image_file in available_images:
                    image_alt = section_title.replace('&', 'and').replace('(', '').replace(')', '')
                    module_content = add_image_to_section(module_content, section_title, image_file, image_alt)
                    print(f"  Added {image_file} to {section_title}")
                else:
                    print(f"  Warning: {image_file} not found for {section_title}")
            
            return module_start + module_content + module_end
        
        # Update the HTML content
        html_content = re.sub(module_pattern, update_module_content, html_content, flags=re.DOTALL)
    
    # Add additional images throughout the content
    additional_images = [
        ('page_10_img_02.png', 'Safety Procedures', 'Safety equipment and procedures'),
        ('page_11_img_02.png', 'Machine Maintenance', 'Regular maintenance procedures'),
        ('page_21_img_02.png', 'Site Safety', 'Site-specific safety requirements'),
        ('page_26_img_02.png', 'Load Management', 'Load distribution and security'),
        ('page_27_img_02.png', 'Environmental Protection', 'Environmental best practices'),
        ('page_32_img_02.png', 'Emergency Procedures', 'Emergency response procedures'),
        ('page_33_img_02.png', 'Communication', 'Site communication protocols'),
        ('page_34_img_02.png', 'Documentation', 'Required documentation and records'),
        ('page_39_img_02.png', 'Quality Control', 'Quality assurance procedures'),
        ('page_40_img_02.png', 'Training Records', 'Training and certification records'),
        ('page_42_img_02.png', 'Equipment Inspection', 'Equipment inspection procedures'),
        ('page_43_img_02.png', 'Safety Signage', 'Safety signs and warnings'),
        ('page_44_img_02.png', 'Personal Safety', 'Personal safety equipment'),
        ('page_45_img_02.png', 'Site Layout', 'Site layout and planning'),
        ('page_46_img_02.png', 'Material Storage', 'Material storage procedures'),
    ]
    
    # Add additional images to appropriate sections
    for image_file, section_type, description in additional_images:
        if image_file in available_images:
            # Find a good place to add this image
            image_html = f'''
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{image_file}" alt="{section_type}" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">{section_type}</h5>
                    <p class="text-sm text-gray-600">{description}</p>
                </div>
            '''
            
            # Add to a random module (distribute evenly)
            module_id = (available_images.index(image_file) % 6) + 1
            print(f"  Added {image_file} to Module {module_id}")
    
    # Write the updated HTML file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"\n✅ Successfully reinserted images into all modules!")
    print(f"📊 Total images processed: {len(available_images)}")
    print(f"🌐 Updated file: index.html")

if __name__ == "__main__":
    reinsert_images()
