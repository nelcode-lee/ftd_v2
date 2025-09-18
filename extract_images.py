#!/usr/bin/env python3
"""
PDF Image Extraction Script for Forward Tipping Dumper Digital Workbook
Extracts images from PDF and creates organized image files for integration
"""

import os
import json
import subprocess
import fitz  # PyMuPDF
from PIL import Image
import io

def extract_images_from_pdf(pdf_path, output_dir):
    """
    Extract images from PDF using PyMuPDF
    Returns list of extracted image metadata
    """
    print(f"Extracting images from: {pdf_path}")
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Open PDF
    doc = fitz.open(pdf_path)
    extracted_images = []
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        print(f"Processing page {page_num + 1}...")
        
        # Get images on this page
        image_list = page.get_images()
        
        for img_index, img in enumerate(image_list):
            # Get image data
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            
            # Skip if image is too small (likely decorative)
            if pix.width < 100 or pix.height < 100:
                pix = None
                continue
                
            # Convert to PIL Image
            if pix.n - pix.alpha < 4:  # GRAY or RGB
                img_data = pix.tobytes("png")
                pil_image = Image.open(io.BytesIO(img_data))
                
                # Generate filename
                filename = f"page_{page_num+1:02d}_img_{img_index+1:02d}.png"
                filepath = os.path.join(output_dir, filename)
                
                # Save image
                pil_image.save(filepath, "PNG")
                
                # Store metadata
                extracted_images.append({
                    'filename': filename,
                    'filepath': filepath,
                    'page': page_num + 1,
                    'width': pix.width,
                    'height': pix.height,
                    'size_kb': os.path.getsize(filepath) // 1024,
                    'description': f"Image from page {page_num + 1}"
                })
                
                print(f"  Extracted: {filename} ({pix.width}x{pix.height})")
            
            pix = None
    
    doc.close()
    print(f"Extracted {len(extracted_images)} images to {output_dir}")
    return extracted_images

def create_image_metadata(extracted_images, output_file):
    """
    Create JSON metadata file for extracted images
    """
    metadata = {
        'extraction_date': subprocess.check_output(['date']).decode().strip(),
        'total_images': len(extracted_images),
        'images': extracted_images
    }
    
    with open(output_file, 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"Image metadata saved to: {output_file}")

def map_images_to_placeholders(extracted_images, placeholder_file):
    """
    Map extracted images to placeholder positions in the workbook
    """
    # Read current placeholders
    with open(placeholder_file, 'r') as f:
        placeholder_content = f.read()
    
    # Find all image placeholders
    import re
    placeholders = re.findall(r'Replace with: ([^<]+)', placeholder_content)
    
    print(f"Found {len(placeholders)} image placeholders in workbook")
    
    # Create mapping
    mapping = {}
    for i, placeholder in enumerate(placeholders):
        if i < len(extracted_images):
            mapping[placeholder.strip()] = extracted_images[i]
        else:
            print(f"Warning: Not enough images for placeholder: {placeholder}")
    
    return mapping

def main():
    """
    Main extraction process
    """
    pdf_path = "forward-tipping-dumper-workbook.pdf"
    output_dir = "extracted_images"
    metadata_file = "image_metadata.json"
    placeholder_file = "IMAGE_PLACEHOLDERS.md"
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        return
    
    # Extract images
    extracted_images = extract_images_from_pdf(pdf_path, output_dir)
    
    # Create metadata
    create_image_metadata(extracted_images, metadata_file)
    
    # Map to placeholders
    if os.path.exists(placeholder_file):
        mapping = map_images_to_placeholders(extracted_images, placeholder_file)
        mapping_file = "image_placeholder_mapping.json"
        with open(mapping_file, 'w') as f:
            json.dump(mapping, f, indent=2)
        print(f"Image-placeholder mapping saved to: {mapping_file}")
    
    print("\n✅ Image extraction complete!")
    print(f"📁 Images saved to: {output_dir}/")
    print(f"📄 Metadata saved to: {metadata_file}")

if __name__ == "__main__":
    main()
