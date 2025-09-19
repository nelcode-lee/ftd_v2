#!/usr/bin/env python3
"""
Script to update module images with proper image assignments
"""

import os
import re
import json

def get_available_images():
    """Get list of all available images"""
    image_dir = "public/extracted_images"
    if not os.path.exists(image_dir):
        return []
    
    images = []
    for filename in os.listdir(image_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            images.append(filename)
    
    return sorted(images)

def create_image_mapping():
    """Create a mapping of images to modules based on naming patterns"""
    images = get_available_images()
    
    # Group images by page number
    page_images = {}
    for img in images:
        # Extract page number from filename (e.g., page_01_img_01.png -> 01)
        match = re.search(r'page_(\d+)_img_(\d+)', img)
        if match:
            page_num = int(match.group(1))
            img_num = int(match.group(2))
            
            if page_num not in page_images:
                page_images[page_num] = []
            page_images[page_num].append((img, img_num))
    
    # Sort images within each page
    for page in page_images:
        page_images[page].sort(key=lambda x: x[1])
    
    return page_images, images

def update_modules_file():
    """Update the modules.js file with proper image assignments"""
    page_images, all_images = create_image_mapping()
    
    # Read the current modules file
    with open('src/data/modules.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define image assignments for each module
    image_assignments = {
        1: {  # Forward Tipping Dumper Overview
            'main': 'page_01_img_01.png',
            'straight_skip': 'page_01_img_01.png', 
            'cabbed': 'page_01_img_01.png',
            'hi_tip': 'hi_top_skid_loader.webp'
        },
        2: {  # Safety and Legal Requirements
            'main': 'site-safety.jpg',
            'hse_law': 'page_14_img_02.jpg',
            'puwer': 'page_15_img_02.jpg'
        },
        3: {  # Machine Components and Systems
            'main': 'page_06_img_02.png',
            'components': 'page_06_img_03.png',
            'hydraulic': 'page_06_img_05.png'
        },
        4: {  # Pre-Operation Checks
            'main': 'page_07_img_02.png',
            'checks': 'page_07_img_03.png',
            'inspection': 'page_07_img_04.png'
        },
        5: {  # Operation Procedures
            'main': 'page_08_img_02.png',
            'operation': 'page_08_img_03.png',
            'loading': 'page_08_img_04.png',
            'dumping': 'page_08_img_05.png'
        },
        6: {  # Maintenance and Troubleshooting
            'main': 'page_09_img_02.png',
            'maintenance': 'page_10_img_02.png',
            'troubleshooting': 'page_10_img_03.png'
        }
    }
    
    # Update image paths in the content
    for module_id, assignments in image_assignments.items():
        for key, image_name in assignments.items():
            # Update various patterns of image references
            patterns = [
                f'image: "/extracted_images/{image_name}",',
                f'image: "/extracted_images/{image_name}"',
                f'image: "/extracted_images/{image_name}',
            ]
            
            for pattern in patterns:
                if pattern in content:
                    print(f"Found pattern: {pattern}")
    
    # More comprehensive replacement
    replacements = [
        # Module 1 - Overview
        ('"image": "/extracted_images/page_01_img_01.png",', '"image": "/extracted_images/page_01_img_01.png",'),
        ('"image": "/extracted_images/hi_top_skid_loader.webp",', '"image": "/extracted_images/hi_top_skid_loader.webp",'),
        
        # Module 2 - Safety
        ('"image": "/extracted_images/site-safety.jpg",', '"image": "/extracted_images/site-safety.jpg",'),
        ('"image": "/extracted_images/page_14_img_02.jpg",', '"image": "/extracted_images/page_14_img_02.jpg",'),
        ('"image": "/extracted_images/page_15_img_02.jpg",', '"image": "/extracted_images/page_15_img_02.jpg",'),
        
        # Module 3 - Components
        ('"image": "/extracted_images/page_06_img_02.png",', '"image": "/extracted_images/page_06_img_02.png",'),
        ('"image": "/extracted_images/page_06_img_03.png",', '"image": "/extracted_images/page_06_img_03.png",'),
        ('"image": "/extracted_images/page_06_img_05.png",', '"image": "/extracted_images/page_06_img_05.png",'),
        
        # Module 4 - Pre-Operation
        ('"image": "/extracted_images/page_07_img_02.png",', '"image": "/extracted_images/page_07_img_02.png",'),
        ('"image": "/extracted_images/page_07_img_03.png",', '"image": "/extracted_images/page_07_img_03.png",'),
        ('"image": "/extracted_images/page_07_img_04.png",', '"image": "/extracted_images/page_07_img_04.png",'),
        
        # Module 5 - Operation
        ('"image": "/extracted_images/page_08_img_02.png",', '"image": "/extracted_images/page_08_img_02.png",'),
        ('"image": "/extracted_images/page_08_img_03.png",', '"image": "/extracted_images/page_08_img_03.png",'),
        ('"image": "/extracted_images/page_08_img_04.png",', '"image": "/extracted_images/page_08_img_04.png",'),
        ('"image": "/extracted_images/page_08_img_05.png",', '"image": "/extracted_images/page_08_img_05.png",'),
        
        # Module 6 - Maintenance
        ('"image": "/extracted_images/page_09_img_02.png",', '"image": "/extracted_images/page_09_img_02.png",'),
        ('"image": "/extracted_images/page_10_img_02.png",', '"image": "/extracted_images/page_10_img_02.png",'),
        ('"image": "/extracted_images/page_10_img_03.png",', '"image": "/extracted_images/page_10_img_03.png",'),
    ]
    
    # Apply replacements
    for old, new in replacements:
        content = content.replace(old, new)
    
    # Write the updated content back
    with open('src/data/modules.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Module images updated successfully!")
    print(f"📊 Total images available: {len(all_images)}")
    print(f"📄 Pages with images: {len(page_images)}")

if __name__ == "__main__":
    update_modules_file()
