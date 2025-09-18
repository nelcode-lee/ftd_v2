#!/usr/bin/env python3
"""
Image Optimization Script for FTD Workbook
Optimizes all images for faster web loading while maintaining quality
"""

import os
import sys
from PIL import Image
import glob

def optimize_image(input_path, output_path, max_width=1200, quality=85):
    """
    Optimize an image for web use
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for JPEG output)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create a white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Calculate new dimensions maintaining aspect ratio
            width, height = img.size
            if width > max_width:
                new_height = int((height * max_width) / width)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save optimized image
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file sizes
            original_size = os.path.getsize(input_path)
            optimized_size = os.path.getsize(output_path)
            reduction = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✓ {os.path.basename(input_path)}: {original_size/1024:.1f}KB → {optimized_size/1024:.1f}KB ({reduction:.1f}% reduction)")
            
            return True
            
    except Exception as e:
        print(f"✗ Error optimizing {input_path}: {e}")
        return False

def main():
    # Create optimized images directory
    optimized_dir = "extracted_images_optimized"
    os.makedirs(optimized_dir, exist_ok=True)
    
    # Get all image files
    image_extensions = ['*.png', '*.jpg', '*.jpeg', '*.webp']
    image_files = []
    
    for ext in image_extensions:
        image_files.extend(glob.glob(f"extracted_images/{ext}"))
    
    print(f"Found {len(image_files)} images to optimize...")
    print(f"Output directory: {optimized_dir}")
    print("-" * 60)
    
    total_original_size = 0
    total_optimized_size = 0
    success_count = 0
    
    for image_path in image_files:
        filename = os.path.basename(image_path)
        name, ext = os.path.splitext(filename)
        output_path = os.path.join(optimized_dir, f"{name}.jpg")
        
        original_size = os.path.getsize(image_path)
        total_original_size += original_size
        
        if optimize_image(image_path, output_path):
            total_optimized_size += os.path.getsize(output_path)
            success_count += 1
    
    print("-" * 60)
    print(f"Optimization complete!")
    print(f"Successfully optimized: {success_count}/{len(image_files)} images")
    print(f"Total size reduction: {total_original_size/1024/1024:.1f}MB → {total_optimized_size/1024/1024:.1f}MB")
    print(f"Overall reduction: {((total_original_size - total_optimized_size) / total_original_size) * 100:.1f}%")
    
    # Create a mapping file for updating HTML
    print("\nCreating image mapping file...")
    mapping = {}
    for image_path in image_files:
        filename = os.path.basename(image_path)
        name, ext = os.path.splitext(filename)
        mapping[filename] = f"{name}.jpg"
    
    with open("image_mapping.json", "w") as f:
        import json
        json.dump(mapping, f, indent=2)
    
    print("✓ Image mapping saved to image_mapping.json")
    print(f"\nNext steps:")
    print(f"1. Replace 'extracted_images/' with '{optimized_dir}/' in index.html")
    print(f"2. Update all .png/.webp references to .jpg")
    print(f"3. Test the optimized images")

if __name__ == "__main__":
    main()
