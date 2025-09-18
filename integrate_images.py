#!/usr/bin/env python3
"""
Image Integration Script for Forward Tipping Dumper Digital Workbook
Replaces image placeholders in HTML with actual extracted images
"""

import os
import json
import re
from pathlib import Path

def load_image_mapping(mapping_file="image_placeholder_mapping.json"):
    """
    Load the image-placeholder mapping
    """
    if not os.path.exists(mapping_file):
        print(f"Error: Mapping file not found: {mapping_file}")
        return {}
    
    with open(mapping_file, 'r') as f:
        return json.load(f)

def update_html_with_images(html_file, mapping):
    """
    Replace image placeholders in HTML with actual images
    """
    print(f"Updating HTML file: {html_file}")
    
    # Read HTML content
    with open(html_file, 'r') as f:
        html_content = f.read()
    
    # Find all image placeholders - simplified pattern to match actual HTML structure
    placeholder_pattern = r'<div class="bg-gray-100 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">.*?<h5 class="font-semibold text-gray-700 mb-2">([^<]+)</h5>.*?<p class="text-sm text-gray-600">[^<]*Image placeholder: ([^<]+)</p>.*?<p class="text-xs text-gray-500 mt-2">Replace with: ([^<]+)</p>.*?</div>'
    
    def replace_placeholder(match):
        title = match.group(1)
        description = match.group(2)
        placeholder_filename = match.group(3).strip()
        
        # Find matching image in mapping
        if placeholder_filename in mapping:
            image_info = mapping[placeholder_filename]
            image_path = f"extracted_images/{image_info['filename']}"
            
            # Create new image HTML
            new_html = f'''<div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <img src="{image_path}" alt="{title}" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                <h5 class="font-semibold text-gray-700 mb-2">{title}</h5>
                <p class="text-sm text-gray-600">{description}</p>
                <p class="text-xs text-gray-500 mt-2">Source: {image_info['filename']} ({image_info['width']}x{image_info['height']})</p>
            </div>'''
            
            print(f"  Replaced: {placeholder_filename} -> {image_info['filename']}")
            return new_html
        else:
            print(f"  Warning: No image found for placeholder: {placeholder_filename}")
            return match.group(0)  # Keep original placeholder
    
    # Replace all placeholders
    updated_content = re.sub(placeholder_pattern, replace_placeholder, html_content, flags=re.DOTALL)
    
    # Write updated HTML
    with open(html_file, 'w') as f:
        f.write(updated_content)
    
    print(f"✅ HTML updated with images!")

def create_image_gallery(extracted_images, output_file="image_gallery.html"):
    """
    Create a standalone image gallery for easy viewing
    """
    print(f"Creating image gallery: {output_file}")
    
    html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FTD Workbook - Image Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Forward Tipping Dumper - Image Gallery</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
'''
    
    for img in extracted_images:
        html_content += f'''
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <img src="{img['filepath']}" alt="{img['description']}" 
                     class="w-full h-48 object-cover" 
                     onclick="openModal('{img['filepath']}', '{img['description']}')">
                <div class="p-4">
                    <h3 class="font-semibold text-gray-900 mb-2">{img['description']}</h3>
                    <p class="text-sm text-gray-600">Page {img['page']} • {img['width']}x{img['height']} • {img['size_kb']}KB</p>
                    <p class="text-xs text-gray-500 mt-1">File: {img['filename']}</p>
                </div>
            </div>
        '''
    
    html_content += '''
        </div>
    </div>
    
    <!-- Modal -->
    <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50" onclick="closeModal()">
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div class="flex items-center justify-between p-4 border-b">
                    <h2 id="modalTitle" class="text-xl font-semibold"></h2>
                    <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <img id="modalImage" src="" alt="" class="w-full h-auto max-h-[70vh] object-contain">
                </div>
            </div>
        </div>
    </div>
    
    <script>
        function openModal(imageSrc, title) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('imageModal').classList.remove('hidden');
        }
        
        function closeModal() {
            document.getElementById('imageModal').classList.add('hidden');
        }
    </script>
</body>
</html>'''
    
    with open(output_file, 'w') as f:
        f.write(html_content)
    
    print(f"✅ Image gallery created: {output_file}")

def main():
    """
    Main integration process
    """
    html_file = "index.html"
    mapping_file = "image_placeholder_mapping.json"
    metadata_file = "image_metadata.json"
    
    # Load image mapping
    mapping = load_image_mapping(mapping_file)
    
    if not mapping:
        print("No image mapping found. Please run extract_images.py first.")
        return
    
    # Load extracted images metadata
    if os.path.exists(metadata_file):
        with open(metadata_file, 'r') as f:
            metadata = json.load(f)
            extracted_images = metadata.get('images', [])
    else:
        print(f"Warning: Metadata file not found: {metadata_file}")
        extracted_images = []
    
    # Update HTML with images
    if os.path.exists(html_file):
        update_html_with_images(html_file, mapping)
    else:
        print(f"Error: HTML file not found: {html_file}")
        return
    
    # Create image gallery
    if extracted_images:
        create_image_gallery(extracted_images)
    
    print("\n✅ Image integration complete!")
    print("🌐 View the updated workbook at: http://localhost:8081")
    print("🖼️  View the image gallery at: http://localhost:8081/image_gallery.html")

if __name__ == "__main__":
    main()
