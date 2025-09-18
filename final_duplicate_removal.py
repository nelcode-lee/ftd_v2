#!/usr/bin/env python3
"""
Final script to remove ALL duplicate images and ensure each image appears only once
"""

import re
import os
from collections import defaultdict

def remove_final_duplicates():
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Find all image references
    image_pattern = r'<div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">\s*<img src="extracted_images/([^"]+)"[^>]*>\s*<h5 class="font-semibold text-gray-700 mb-2">[^<]*</h5>\s*<p class="text-sm text-gray-600">[^<]*</p>\s*</div>'
    
    # Find all image blocks
    image_blocks = re.findall(image_pattern, html_content, re.DOTALL)
    print(f"Found {len(image_blocks)} image blocks")
    
    # Count occurrences of each image
    image_counts = defaultdict(int)
    for image in image_blocks:
        image_counts[image] += 1
    
    print(f"Unique images: {len(image_counts)}")
    print(f"Total image blocks: {sum(image_counts.values())}")
    
    # Show duplicates
    duplicates = {img: count for img, count in image_counts.items() if count > 1}
    if duplicates:
        print(f"\nDuplicate images found:")
        for img, count in duplicates.items():
            print(f"  {img}: {count} times")
    
    # Remove ALL image blocks first
    print("\nRemoving all image blocks...")
    html_content = re.sub(image_pattern, '', html_content, flags=re.DOTALL)
    
    # Define the essential images with their optimal single placement
    essential_images = {
        # Module 1: Introduction & Safety (4 images)
        'page_01_img_01.png': (1, 'Introduction to Forward Tipping Dumper'),
        'page_06_img_02.png': (1, 'Safe Working Practices'),
        'page_07_img_02.png': (1, 'Course Objectives'),
        'page_10_img_02.png': (1, 'Operator Roles & Responsibilities'),
        
        # Module 2: Health & Safety Legislation (6 images)
        'page_12_img_02.png': (2, 'Health and Safety at Work Act 1974'),
        'page_13_img_02.png': (2, 'Provision & Use of Work Equipment Regulations'),
        'page_14_img_02.png': (2, 'Additional Legislation and Guidance'),
        'page_15_img_02.png': (2, 'Risk Assessments and Method Statements'),
        'page_16_img_02.png': (2, 'Social Responsibilities'),
        'page_21_img_02.png': (2, 'Site Induction'),
        
        # Module 3: Pre-Operational Checks (5 images)
        'page_17_img_02.png': (3, 'Major Components of a Forward Tipping Dumper'),
        'page_18_img_02.png': (3, 'Pre-Operational Checks'),
        'page_18_img_03.png': (3, 'Personal Protective Equipment (PPE)'),
        'page_19_img_02.png': (3, 'Safety Systems Inspection'),
        'page_20_img_02.png': (3, 'Fluid Level Checks'),
        
        # Module 4: Machine Operation (6 images)
        'page_22_img_02.png': (4, 'Visibility Aids'),
        'page_22_img_03.png': (4, 'Rotating Seat Operation'),
        'page_23_img_02.png': (4, 'Machine Operation Procedures'),
        'page_24_img_02.png': (4, 'Travel and Manoeuvre Procedures'),
        'page_25_img_02.png': (4, 'Operating in Confined Areas'),
        'page_28_img_04.png': (4, 'Towing Equipment with a Dumper'),
        
        # Module 5: Material Handling (6 images)
        'page_28_img_02.png': (5, 'Conduct All Necessary Safety Checks'),
        'page_28_img_03.png': (5, 'Ensure Load Integrity/Security'),
        'page_29_img_02.png': (5, 'Loading, Transporting and Discharging Materials'),
        'page_30_img_02.png': (5, 'Discharging Loads'),
        'page_31_img_02.png': (5, 'Loading/Unloading Procedures'),
        'page_32_img_02.png': (5, 'Environmental Considerations'),
        
        # Module 6: Assessment & Certification (5 images)
        'page_35_img_02.png': (6, 'Machine Transportation'),
        'page_35_img_03.png': (6, 'Exclusion Zone Safety'),
        'page_36_img_02.png': (6, 'End of Work and Shut Down Procedures'),
        'page_37_img_02.png': (6, 'Certification Process'),
        'page_38_img_02.png': (6, 'Final Assessment'),
    }
    
    # Add only essential images, one per location
    print(f"\nAdding {len(essential_images)} essential images (one per location)...")
    
    for image_file, (module_id, section_title) in essential_images.items():
        # Create image HTML
        image_html = f'''
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{image_file}" alt="{section_title}" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">{section_title}</h5>
                    <p class="text-sm text-gray-600">Visual reference for {section_title.lower()}</p>
                </div>
            '''
        
        # Find the module and add image after the section title
        module_pattern = f'({module_id}: \\{{[^}}]+title: "[^"]+",[^}}]+content: `)(.*?)(`[^}}]+\\}})'
        
        def add_image_to_module(match):
            module_start = match.group(1)
            module_content = match.group(2)
            module_end = match.group(3)
            
            # Find the section and add image after the title
            section_pattern = f'<h4 class="font-semibold text-[^"]+ mb-2">[^<]*{re.escape(section_title)}[^<]*</h4>'
            
            def add_image_after_title(match):
                return match.group(0) + image_html
            
            module_content = re.sub(section_pattern, add_image_after_title, module_content, flags=re.IGNORECASE)
            
            return module_start + module_content + module_end
        
        html_content = re.sub(module_pattern, add_image_to_module, html_content, flags=re.DOTALL)
        print(f"  Added {image_file} to Module {module_id} - {section_title}")
    
    # Write the updated HTML file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    # Verify no duplicates remain
    final_image_blocks = re.findall(image_pattern, html_content, re.DOTALL)
    final_image_counts = defaultdict(int)
    for image in final_image_blocks:
        final_image_counts[image] += 1
    
    final_duplicates = {img: count for img, count in final_image_counts.items() if count > 1}
    
    print(f"\n✅ Successfully removed all duplicates!")
    print(f"📊 Total unique images placed: {len(essential_images)}")
    print(f"🔍 Final verification: {len(final_image_blocks)} image blocks, {len(final_image_counts)} unique images")
    
    if final_duplicates:
        print(f"❌ WARNING: Still found duplicates:")
        for img, count in final_duplicates.items():
            print(f"  {img}: {count} times")
    else:
        print(f"✅ CONFIRMED: No duplicates found!")
    
    print(f"🌐 Updated file: index.html")

if __name__ == "__main__":
    remove_final_duplicates()
