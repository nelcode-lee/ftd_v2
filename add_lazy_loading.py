#!/usr/bin/env python3
"""
Add lazy loading to all images in HTML file
"""

import re

def add_lazy_loading():
    # Read the HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match img tags
    img_pattern = r'<img([^>]*?)>'
    
    def add_loading_attr(match):
        # Get the full img tag
        full_match = match.group(0)
        
        # Check if loading attribute already exists
        if 'loading=' in full_match:
            return full_match
        
        # Add loading="lazy" before the closing >
        return full_match.replace('>', ' loading="lazy">')
    
    # Apply the transformation
    updated_content = re.sub(img_pattern, add_loading_attr, content)
    
    # Count how many images were updated
    original_imgs = len(re.findall(r'<img[^>]*>', content))
    updated_imgs = len(re.findall(r'<img[^>]*loading="lazy"[^>]*>', updated_content))
    
    # Write the updated content
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✓ Added lazy loading to {updated_imgs} images")
    print("✓ Images will now load only when they come into view")
    print("✓ This will significantly improve initial page load speed")

if __name__ == "__main__":
    add_lazy_loading()
