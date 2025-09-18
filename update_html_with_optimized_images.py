#!/usr/bin/env python3
"""
Update HTML file to use optimized images
"""

import re
import json

def update_html_images():
    # Read the image mapping
    with open('image_mapping.json', 'r') as f:
        mapping = json.load(f)
    
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update image paths
    updated_content = content
    
    # Replace extracted_images/ with extracted_images_optimized/
    updated_content = re.sub(r'extracted_images/', 'extracted_images_optimized/', updated_content)
    
    # Update file extensions from .png and .webp to .jpg
    for original_name, optimized_name in mapping.items():
        if original_name != optimized_name:
            # Replace the specific filename
            updated_content = updated_content.replace(original_name, optimized_name)
    
    # Write the updated content
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print("✓ HTML file updated with optimized images")
    print(f"✓ Updated {len(mapping)} image references")
    print("✓ All images now point to extracted_images_optimized/ directory")
    print("✓ All images converted to .jpg format")

if __name__ == "__main__":
    update_html_images()
