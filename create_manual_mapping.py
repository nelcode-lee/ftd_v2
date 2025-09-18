#!/usr/bin/env python3
"""
Manual Image Mapping Script
Creates intelligent mapping between extracted images and HTML placeholders
"""

import json
import os

def create_manual_mapping():
    """
    Create manual mapping based on image content and page analysis
    """
    
    # Load extracted images metadata
    with open('image_metadata.json', 'r') as f:
        metadata = json.load(f)
        images = metadata['images']
    
    # Define placeholder mappings based on content analysis
    # This is based on the PDF structure and typical FTD training content
    mapping = {
        # Module 1: Introduction to FTD
        "ftd-overview-diagram.jpg": {
            "filename": "page_01_img_01.png",
            "filepath": "extracted_images/page_01_img_01.png",
            "page": 1,
            "width": 2500,
            "height": 1668,
            "size_kb": 5096,
            "description": "FTD machine overview diagram showing main components and features"
        },
        
        # Module 2: Health & Safety Legislation
        "hswa-puwer-flowchart.jpg": {
            "filename": "page_12_img_02.png",
            "filepath": "extracted_images/page_12_img_02.png", 
            "page": 12,
            "width": 1575,
            "height": 1038,
            "size_kb": 222,
            "description": "Diagram showing HSWA 1974, PUWER 98, and related regulations hierarchy"
        },
        
        # Module 3: Pre-Operational Checks
        "pre-op-check-diagram.jpg": {
            "filename": "page_18_img_02.png",
            "filepath": "extracted_images/page_18_img_02.png",
            "page": 18,
            "width": 266,
            "height": 148,
            "size_kb": 3,
            "description": "Diagram showing FTD components to check (engine, hydraulics, tyres, ROPS/FOPS)"
        },
        
        "ppe-requirements.jpg": {
            "filename": "page_18_img_03.png",
            "filepath": "extracted_images/page_18_img_03.png",
            "page": 18,
            "width": 715,
            "height": 429,
            "size_kb": 25,
            "description": "Diagram showing required PPE (hard hat, safety boots, hi-vis, gloves, etc.)"
        },
        
        # Module 4: Machine Operation
        "visibility-aids-diagram.jpg": {
            "filename": "page_22_img_02.png",
            "filepath": "extracted_images/page_22_img_02.png",
            "page": 22,
            "width": 355,
            "height": 473,
            "size_kb": 12,
            "description": "Diagram showing mirror positions, cameras, and blind spot areas on FTD"
        },
        
        "rotating-seat-diagram.jpg": {
            "filename": "page_22_img_03.png",
            "filepath": "extracted_images/page_22_img_03.png",
            "page": 22,
            "width": 312,
            "height": 148,
            "size_kb": 4,
            "description": "Diagram showing rotating seat mechanism and 180-degree rotation capability"
        },
        
        # Module 5: Environmental Considerations
        "material-handling-diagram.jpg": {
            "filename": "page_28_img_02.png",
            "filepath": "extracted_images/page_28_img_02.png",
            "page": 28,
            "width": 562,
            "height": 591,
            "size_kb": 28,
            "description": "Diagram showing different material types and handling procedures (dense, semi-fluid, spoil)"
        },
        
        "environmental-impact-diagram.jpg": {
            "filename": "page_29_img_02.png",
            "filepath": "extracted_images/page_29_img_02.png",
            "page": 29,
            "width": 445,
            "height": 146,
            "size_kb": 5,
            "description": "Diagram showing air, water, and noise pollution sources and prevention measures"
        },
        
        # Module 6: Assessment & Certification
        "machine-transportation-diagram.jpg": {
            "filename": "page_35_img_02.png",
            "filepath": "extracted_images/page_35_img_02.png",
            "page": 35,
            "width": 259,
            "height": 346,
            "size_kb": 6,
            "description": "Diagram showing FTD loading onto transporter with ramps, chocking, and securing procedures"
        },
        
        "exclusion-zone-diagram.jpg": {
            "filename": "page_35_img_03.png",
            "filepath": "extracted_images/page_35_img_03.png",
            "page": 35,
            "width": 444,
            "height": 148,
            "size_kb": 4,
            "description": "Diagram showing exclusion zone requirements and minimum clearance distances"
        }
    }
    
    # Save the mapping
    with open('image_placeholder_mapping.json', 'w') as f:
        json.dump(mapping, f, indent=2)
    
    print(f"✅ Created manual mapping for {len(mapping)} images")
    print("📋 Mapped placeholders:")
    for placeholder, image_info in mapping.items():
        print(f"  {placeholder} -> {image_info['filename']} (Page {image_info['page']})")
    
    return mapping

def create_image_gallery_from_mapping(mapping):
    """
    Create a simple image gallery showing the mapped images
    """
    gallery_html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FTD Workbook - Mapped Images</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Forward Tipping Dumper - Mapped Images</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
'''
    
    for placeholder, image_info in mapping.items():
        gallery_html += f'''
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <img src="{image_info['filepath']}" alt="{image_info['description']}" 
                     class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-gray-900 mb-2">{image_info['description']}</h3>
                    <p class="text-sm text-gray-600 mb-2">Page {image_info['page']} • {image_info['width']}x{image_info['height']}</p>
                    <p class="text-xs text-gray-500">Placeholder: {placeholder}</p>
                    <p class="text-xs text-gray-500">File: {image_info['filename']}</p>
                </div>
            </div>
        '''
    
    gallery_html += '''
        </div>
    </div>
</body>
</html>'''
    
    with open('mapped_images_gallery.html', 'w') as f:
        f.write(gallery_html)
    
    print("🖼️  Created mapped images gallery: mapped_images_gallery.html")

if __name__ == "__main__":
    mapping = create_manual_mapping()
    create_image_gallery_from_mapping(mapping)
    print("\n✅ Manual mapping complete!")
    print("🌐 View mapped images at: http://localhost:8081/mapped_images_gallery.html")
