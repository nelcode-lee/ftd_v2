#!/usr/bin/env python3
"""
Script to fix duplicate images and ensure each image is used only once
"""

import re
import os

def fix_duplicate_images():
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Get all available images
    image_dir = 'extracted_images'
    available_images = [f for f in os.listdir(image_dir) if f.endswith(('.png', '.jpg', '.jpeg'))]
    available_images.sort()
    
    print(f"Fixing duplicate images from {len(available_images)} available images")
    
    # Define optimal single placement for each image
    image_placements = {
        # Module 1: Introduction & Safety
        'page_01_img_01.png': (1, 'Introduction to Forward Tipping Dumper'),
        'page_06_img_02.png': (1, 'Safe Working Practices'),
        'page_07_img_02.png': (1, 'Course Objectives'),
        'page_08_img_02.png': (1, 'Machine Types and Applications'),
        'page_09_img_02.png': (1, 'Safety Features and Equipment'),
        'page_10_img_02.png': (1, 'Operator Roles & Responsibilities'),
        
        # Module 2: Health & Safety Legislation
        'page_12_img_02.png': (2, 'Health and Safety at Work Act 1974'),
        'page_13_img_02.png': (2, 'Provision & Use of Work Equipment Regulations'),
        'page_14_img_02.png': (2, 'Additional Legislation and Guidance'),
        'page_15_img_02.png': (2, 'Risk Assessments and Method Statements'),
        'page_16_img_02.png': (2, 'Social Responsibilities'),
        'page_21_img_02.png': (2, 'Site Induction'),
        
        # Module 3: Pre-Operational Checks
        'page_17_img_02.png': (3, 'Major Components of a Forward Tipping Dumper'),
        'page_18_img_02.png': (3, 'Pre-Operational Checks'),
        'page_18_img_03.png': (3, 'Personal Protective Equipment (PPE)'),
        'page_19_img_02.png': (3, 'Safety Systems Inspection'),
        'page_20_img_02.png': (3, 'Fluid Level Checks'),
        
        # Module 4: Machine Operation
        'page_22_img_02.png': (4, 'Visibility Aids'),
        'page_22_img_03.png': (4, 'Rotating Seat Operation'),
        'page_23_img_02.png': (4, 'Machine Operation Procedures'),
        'page_24_img_02.png': (4, 'Travel and Manoeuvre Procedures'),
        'page_25_img_02.png': (4, 'Operating in Confined Areas'),
        'page_28_img_04.png': (4, 'Towing Equipment with a Dumper'),
        
        # Module 5: Material Handling
        'page_28_img_02.png': (5, 'Conduct All Necessary Safety Checks'),
        'page_28_img_03.png': (5, 'Ensure Load Integrity/Security'),
        'page_29_img_02.png': (5, 'Loading, Transporting and Discharging Materials'),
        'page_30_img_02.png': (5, 'Discharging Loads'),
        'page_31_img_02.png': (5, 'Loading/Unloading Procedures'),
        'page_32_img_02.png': (5, 'Environmental Considerations'),
        
        # Module 6: Assessment & Certification
        'page_35_img_02.png': (6, 'Machine Transportation'),
        'page_35_img_03.png': (6, 'Exclusion Zone Safety'),
        'page_36_img_02.png': (6, 'End of Work and Shut Down Procedures'),
        'page_37_img_02.png': (6, 'Certification Process'),
        'page_38_img_02.png': (6, 'Final Assessment'),
        
        # Additional strategic placements
        'page_06_img_03.png': (1, 'Safety Procedures'),
        'page_06_img_05.png': (1, 'Safety Equipment'),
        'page_07_img_03.png': (1, 'Training Objectives'),
        'page_07_img_04.png': (1, 'Course Structure'),
        'page_08_img_03.png': (3, 'Machine Specifications'),
        'page_08_img_04.png': (3, 'Machine Variants'),
        'page_08_img_05.png': (3, 'Machine Applications'),
        'page_10_img_03.png': (2, 'Safety Protocols'),
        'page_11_img_02.png': (3, 'Machine Maintenance'),
        'page_11_img_03.png': (3, 'Maintenance Procedures'),
        'page_13_img_03.png': (2, 'Legislation Details'),
        'page_13_img_04.png': (2, 'Compliance Requirements'),
        'page_13_img_05.png': (2, 'Legal Framework'),
        'page_14_img_03.png': (2, 'Additional Guidance'),
        'page_14_img_04.png': (2, 'Industry Standards'),
        'page_15_img_03.png': (2, 'Risk Assessment Process'),
        'page_15_img_04.png': (2, 'Risk Control Measures'),
        'page_17_img_03.png': (3, 'Component Details'),
        'page_17_img_04.png': (3, 'Component Functions'),
        'page_18_img_04.png': (3, 'Check Procedures'),
        'page_18_img_05.png': (3, 'Check Documentation'),
        'page_18_img_06.png': (3, 'Safety Checks'),
        'page_18_img_07.png': (3, 'Pre-Operation Checks'),
        'page_18_img_08.png': (3, 'Daily Checks'),
        'page_18_img_09.png': (3, 'Weekly Checks'),
        'page_18_img_10.png': (3, 'Monthly Checks'),
        'page_18_img_11.png': (3, 'Annual Checks'),
        'page_18_img_12.png': (3, 'Check Records'),
        'page_18_img_13.png': (3, 'Check Schedules'),
        'page_18_img_14.png': (3, 'Comprehensive Check Procedures'),
        'page_19_img_03.png': (3, 'Safety Systems'),
        'page_19_img_04.png': (3, 'System Checks'),
        'page_19_img_05.png': (3, 'System Maintenance'),
        'page_22_img_04.png': (4, 'Visibility Systems'),
        'page_22_img_05.png': (4, 'Mirror Systems'),
        'page_22_img_06.png': (4, 'Camera Systems'),
        'page_22_img_07.png': (4, 'Lighting Systems'),
        'page_23_img_03.png': (4, 'Operation Procedures'),
        'page_23_img_04.png': (4, 'Control Systems'),
        'page_23_img_05.png': (4, 'Safety Features'),
        'page_23_img_06.png': (4, 'Emergency Procedures'),
        'page_23_img_07.png': (4, 'Maintenance Procedures'),
        'page_24_img_03.png': (4, 'Travel Procedures'),
        'page_24_img_05.png': (4, 'Maneuvering Techniques'),
        'page_26_img_02.png': (5, 'Load Management'),
        'page_26_img_03.png': (5, 'Load Distribution'),
        'page_26_img_06.png': (5, 'Load Security'),
        'page_26_img_07.png': (5, 'Load Transportation'),
        'page_27_img_02.png': (5, 'Environmental Protection'),
        'page_27_img_03.png': (5, 'Pollution Prevention'),
        'page_27_img_04.png': (5, 'Environmental Controls'),
        'page_29_img_03.png': (5, 'Environmental Impact'),
        'page_29_img_04.png': (5, 'Environmental Monitoring'),
        'page_29_img_05.png': (5, 'Environmental Best Practices'),
        'page_31_img_03.png': (5, 'Loading Procedures'),
        'page_31_img_04.png': (5, 'Unloading Procedures'),
        'page_31_img_05.png': (5, 'Transportation Procedures'),
        'page_31_img_07.png': (5, 'Safety Procedures'),
        'page_31_img_08.png': (5, 'Emergency Procedures'),
        'page_31_img_09.png': (5, 'Maintenance Procedures'),
        'page_31_img_10.png': (5, 'Inspection Procedures'),
        'page_33_img_02.png': (6, 'Communication Systems'),
        'page_33_img_03.png': (6, 'Site Communication'),
        'page_33_img_04.png': (6, 'Safety Communication'),
        'page_33_img_05.png': (6, 'Emergency Communication'),
        'page_33_img_06.png': (6, 'Communication Protocols'),
        'page_34_img_02.png': (6, 'Documentation Requirements'),
        'page_34_img_03.png': (6, 'Record Keeping'),
        'page_35_img_04.png': (6, 'Transportation Safety'),
        'page_35_img_05.png': (6, 'Loading Safety'),
        'page_35_img_06.png': (6, 'Unloading Safety'),
        'page_36_img_03.png': (6, 'Exclusion Zone Procedures'),
        'page_36_img_04.png': (6, 'Safety Zones'),
        'page_36_img_05.png': (6, 'Access Control'),
        'page_37_img_03.png': (6, 'Certification Process'),
        'page_37_img_04.png': (6, 'Assessment Procedures'),
        'page_37_img_05.png': (6, 'Qualification Requirements'),
        'page_38_img_03.png': (6, 'Final Assessment'),
        'page_38_img_04.png': (6, 'Assessment Criteria'),
        'page_38_img_05.png': (6, 'Pass Requirements'),
        'page_39_img_02.png': (6, 'Quality Assurance'),
        'page_39_img_03.png': (6, 'Quality Control'),
        'page_39_img_04.png': (6, 'Quality Standards'),
        'page_39_img_05.png': (6, 'Quality Procedures'),
        'page_39_img_06.png': (6, 'Quality Management'),
        'page_39_img_07.png': (6, 'Quality Records'),
        'page_39_img_08.png': (6, 'Quality Documentation'),
        'page_40_img_02.png': (6, 'Training Records'),
        'page_42_img_02.png': (3, 'Equipment Inspection'),
        'page_43_img_02.png': (4, 'Safety Signage'),
        'page_43_img_03.png': (4, 'Warning Systems'),
        'page_43_img_04.png': (4, 'Safety Information'),
        'page_44_img_02.png': (1, 'Personal Safety'),
        'page_45_img_02.png': (3, 'Site Layout'),
        'page_46_img_02.png': (5, 'Material Storage'),
        'page_46_img_04.png': (5, 'Storage Safety'),
        'page_46_img_05.png': (5, 'Storage Management'),
        'page_46_img_06.png': (5, 'Storage Requirements'),
        'page_47_img_02.png': (6, 'Final Procedures')
    }
    
    # First, remove all existing image blocks
    print("Removing all existing image blocks...")
    image_block_pattern = r'<div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">\s*<img src="extracted_images/[^"]+"[^>]*>\s*<h5 class="font-semibold text-gray-700 mb-2">[^<]*</h5>\s*<p class="text-sm text-gray-600">[^<]*</p>\s*</div>'
    html_content = re.sub(image_block_pattern, '', html_content, flags=re.DOTALL)
    
    # Now add each image only once in its designated location
    print("Adding images in their designated locations...")
    
    for image_file, (module_id, section_title) in image_placements.items():
        if image_file in available_images:
            # Create image HTML
            image_html = f'''
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{image_file}" alt="{section_title}" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">{section_title}</h5>
                    <p class="text-sm text-gray-600">Visual reference for {section_title.lower()}</p>
                </div>
            '''
            
            # Find the module and section
            module_pattern = f'({module_id}: \\{{[^}}]+title: "[^"]+",[^}}]+content: `)(.*?)(`[^}}]+\\}})'
            
            def add_image_to_section(match):
                module_start = match.group(1)
                module_content = match.group(2)
                module_end = match.group(3)
                
                # Find the section and add image after the title
                section_pattern = f'<h4 class="font-semibold text-[^"]+ mb-2">[^<]*{re.escape(section_title)}[^<]*</h4>'
                
                def add_image_after_title(match):
                    return match.group(0) + image_html
                
                module_content = re.sub(section_pattern, add_image_after_title, module_content, flags=re.IGNORECASE)
                
                return module_start + module_content + module_end
            
            html_content = re.sub(module_pattern, add_image_to_section, html_content, flags=re.DOTALL)
            print(f"  Added {image_file} to Module {module_id} - {section_title}")
    
    # Write the updated HTML file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"\n✅ Successfully fixed duplicate images!")
    print(f"📊 Total unique images placed: {len(image_placements)}")
    print(f"🌐 Updated file: index.html")

if __name__ == "__main__":
    fix_duplicate_images()
