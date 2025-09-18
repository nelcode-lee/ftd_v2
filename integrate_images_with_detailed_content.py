#!/usr/bin/env python3
"""
Integrate images with the detailed module content
"""

import json
import re

def load_image_mapping():
    """
    Load the image mapping from the JSON file
    """
    try:
        with open('image_placeholder_mapping.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print("❌ Image mapping file not found. Please run extract_images.py first.")
        return {}

def integrate_images_with_modules():
    """
    Integrate images with the detailed module content
    """
    # Load image mapping
    image_mapping = load_image_mapping()
    
    if not image_mapping:
        print("❌ No image mapping available. Please run extract_images.py first.")
        return
    
    # Read current HTML
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    print("🖼️ Integrating images with detailed module content...")
    
    # Update each module with appropriate images
    html_content = add_images_to_module1(html_content, image_mapping)
    html_content = add_images_to_module2(html_content, image_mapping)
    html_content = add_images_to_module3(html_content, image_mapping)
    html_content = add_images_to_module4(html_content, image_mapping)
    html_content = add_images_to_module5(html_content, image_mapping)
    html_content = add_images_to_module6(html_content, image_mapping)
    
    # Write updated HTML
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ Images integrated with detailed module content!")
    print("🌐 View the complete workbook at: http://localhost:8081")

def add_images_to_module1(html_content, image_mapping):
    """
    Add images to Module 1: Introduction to FTD
    """
    # Find Module 1 content and add FTD overview image
    ftd_overview_img = image_mapping.get('ftd-overview-diagram.jpg', {})
    if ftd_overview_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{ftd_overview_img['filename']}" alt="Forward Tipping Dumper Overview" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Forward Tipping Dumper Overview</h5>
                    <p class="text-sm text-gray-600">FTD machine overview diagram showing main components and features</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {ftd_overview_img['filename']} ({ftd_overview_img['width']}x{ftd_overview_img['height']})</p>
                </div>
        """
        
        # Insert image after the introduction section
        pattern = r'(<h4 class="font-semibold text-blue-900 mb-2">📋 Introduction to Forward Tipping Dumper</h4>.*?</div>)(\s*<div class="bg-green-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_images_to_module2(html_content, image_mapping):
    """
    Add images to Module 2: Health & Safety Legislation
    """
    # Add HSWA/PUWER flowchart image
    hswa_img = image_mapping.get('hswa-puwer-flowchart.jpg', {})
    if hswa_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{hswa_img['filename']}" alt="HSWA PUWER Flowchart" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Health & Safety Legislation Flowchart</h5>
                    <p class="text-sm text-gray-600">HSWA 1974 and PUWER 98 compliance flowchart</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {hswa_img['filename']} ({hswa_img['width']}x{hswa_img['height']})</p>
                </div>
        """
        
        # Insert image after the HSWA section
        pattern = r'(<h4 class="font-semibold text-red-900 mb-2">⚖️ Health and Safety at Work Act 1974</h4>.*?</div>)(\s*<div class="bg-orange-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_images_to_module3(html_content, image_mapping):
    """
    Add images to Module 3: Machine Components & Pre-Operational Checks
    """
    # Add pre-operational check diagram
    pre_op_img = image_mapping.get('pre-op-check-diagram.jpg', {})
    if pre_op_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{pre_op_img['filename']}" alt="Pre-Operational Check Diagram" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Pre-Operational Check Diagram</h5>
                    <p class="text-sm text-gray-600">Step-by-step pre-operational check procedures</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {pre_op_img['filename']} ({pre_op_img['width']}x{pre_op_img['height']})</p>
                </div>
        """
        
        # Insert image after the pre-operational checks section
        pattern = r'(<h4 class="font-semibold text-red-900 mb-2">✅ Pre-Operational Checks</h4>.*?</div>)(\s*<div class="bg-yellow-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    # Add PPE requirements image
    ppe_img = image_mapping.get('ppe-requirements.jpg', {})
    if ppe_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{ppe_img['filename']}" alt="PPE Requirements" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Personal Protective Equipment Requirements</h5>
                    <p class="text-sm text-gray-600">Complete PPE checklist for FTD operators</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {ppe_img['filename']} ({ppe_img['width']}x{ppe_img['height']})</p>
                </div>
        """
        
        # Insert image after the PPE section
        pattern = r'(<h4 class="font-semibold text-yellow-900 mb-2">🛡️ Personal Protective Equipment \(PPE\)</h4>.*?</div>)(\s*</div>)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_images_to_module4(html_content, image_mapping):
    """
    Add images to Module 4: Machine Operation & Safety Procedures
    """
    # Add visibility aids diagram
    visibility_img = image_mapping.get('visibility-aids-diagram.jpg', {})
    if visibility_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{visibility_img['filename']}" alt="Visibility Aids Diagram" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Visibility Aids and Safety Systems</h5>
                    <p class="text-sm text-gray-600">Mirror positioning and camera system setup</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {visibility_img['filename']} ({visibility_img['width']}x{visibility_img['height']})</p>
                </div>
        """
        
        # Insert image after the visibility aids section
        pattern = r'(<h4 class="font-semibold text-orange-900 mb-2">👁️ Visibility Aids</h4>.*?</div>)(\s*<div class="bg-red-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    # Add rotating seat diagram
    seat_img = image_mapping.get('rotating-seat-diagram.jpg', {})
    if seat_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{seat_img['filename']}" alt="Rotating Seat Dumper" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Rotating Seat Dumper Operation</h5>
                    <p class="text-sm text-gray-600">180-degree rotating platform for optimal visibility</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {seat_img['filename']} ({seat_img['width']}x{seat_img['height']})</p>
                </div>
        """
        
        # Insert image after the travel and manoeuvre section
        pattern = r'(<h4 class="font-semibold text-purple-900 mb-2">🚛 Travel and Manoeuvre the Dumper</h4>.*?</div>)(\s*</div>)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_images_to_module5(html_content, image_mapping):
    """
    Add images to Module 5: Material Handling & Transportation
    """
    # Add material handling diagram
    material_img = image_mapping.get('material-handling-diagram.jpg', {})
    if material_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{material_img['filename']}" alt="Material Handling Procedures" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Material Handling and Transportation</h5>
                    <p class="text-sm text-gray-600">Safe procedures for different material types</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {material_img['filename']} ({material_img['width']}x{material_img['height']})</p>
                </div>
        """
        
        # Insert image after the material handling section
        pattern = r'(<h4 class="font-semibold text-green-900 mb-2">📦 Loading, Transporting and Discharging Different Materials</h4>.*?</div>)(\s*<div class="bg-blue-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_images_to_module6(html_content, image_mapping):
    """
    Add images to Module 6: Environmental Considerations & Assessment
    """
    # Add environmental impact diagram
    env_img = image_mapping.get('environmental-impact-diagram.jpg', {})
    if env_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{env_img['filename']}" alt="Environmental Impact Considerations" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Environmental Impact Considerations</h5>
                    <p class="text-sm text-gray-600">Pollution prevention and environmental best practices</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {env_img['filename']} ({env_img['width']}x{env_img['height']})</p>
                </div>
        """
        
        # Insert image after the environmental considerations section
        pattern = r'(<h4 class="font-semibold text-green-900 mb-2">🌍 Environmental Considerations of Machine Use</h4>.*?</div>)(\s*<div class="bg-blue-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    # Add machine transportation diagram
    transport_img = image_mapping.get('machine-transportation-diagram.jpg', {})
    if transport_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{transport_img['filename']}" alt="Machine Transportation Procedures" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Machine Transportation and Loading</h5>
                    <p class="text-sm text-gray-600">Safe procedures for loading and unloading FTDs</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {transport_img['filename']} ({transport_img['width']}x{transport_img['height']})</p>
                </div>
        """
        
        # Insert image after the loading/unloading section
        pattern = r'(<h4 class="font-semibold text-red-900 mb-2">📋 Loading/Unloading Procedures for Machine Transportation</h4>.*?</div>)(\s*</div>)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    # Add exclusion zone diagram
    exclusion_img = image_mapping.get('exclusion-zone-diagram.jpg', {})
    if exclusion_img:
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{exclusion_img['filename']}" alt="Exclusion Zone Safety" class="w-full h-auto rounded-lg mb-3" style="max-height: 400px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Exclusion Zone Safety</h5>
                    <p class="text-sm text-gray-600">Safe working areas and exclusion zone requirements</p>
                    <p class="text-xs text-gray-500 mt-2">Source: {exclusion_img['filename']} ({exclusion_img['width']}x{exclusion_img['height']})</p>
                </div>
        """
        
        # Insert image after the end of work procedures
        pattern = r'(<h4 class="font-semibold text-yellow-900 mb-2">📋 End of Work and Shut Down Procedures</h4>.*?</div>)(\s*</div>)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

if __name__ == "__main__":
    integrate_images_with_modules()
