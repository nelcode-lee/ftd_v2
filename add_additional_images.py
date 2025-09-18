#!/usr/bin/env python3
"""
Add additional images throughout the modules for enhanced learning
"""

import json
import re
import os

def add_additional_images():
    """
    Add additional images throughout the modules
    """
    # Read current HTML
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    print("🖼️ Adding additional images throughout modules...")
    
    # Get list of available images
    available_images = []
    if os.path.exists('extracted_images'):
        available_images = [f for f in os.listdir('extracted_images') if f.endswith(('.png', '.jpg', '.jpeg'))]
    
    print(f"📸 Found {len(available_images)} available images")
    
    # Add images strategically throughout the content
    html_content = add_safety_images(html_content, available_images)
    html_content = add_operation_images(html_content, available_images)
    html_content = add_technical_images(html_content, available_images)
    
    # Write updated HTML
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ Additional images added throughout modules!")
    print("🌐 View the enhanced workbook at: http://localhost:8081")

def add_safety_images(html_content, available_images):
    """
    Add safety-related images
    """
    # Add safety images to Module 2
    safety_images = [img for img in available_images if any(keyword in img.lower() for keyword in ['safety', 'hazard', 'warning', 'sign'])]
    
    if safety_images:
        # Add first safety image to risk assessment section
        safety_img = safety_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{safety_img}" alt="Safety and Risk Assessment" class="w-full h-auto rounded-lg mb-3" style="max-height: 300px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Safety and Risk Assessment</h5>
                    <p class="text-sm text-gray-600">Visual guide to safety procedures and risk identification</p>
                </div>
        """
        
        # Insert after risk assessments section
        pattern = r'(<h4 class="font-semibold text-yellow-900 mb-2">⚠️ Risk Assessments and Method Statements</h4>.*?</div>)(\s*<div class="bg-green-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_operation_images(html_content, available_images):
    """
    Add operation-related images
    """
    # Add operation images to Module 4
    operation_images = [img for img in available_images if any(keyword in img.lower() for keyword in ['operation', 'control', 'cab', 'seat', 'mirror'])]
    
    if operation_images:
        # Add operation image to safely get on/off section
        operation_img = operation_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{operation_img}" alt="Machine Operation" class="w-full h-auto rounded-lg mb-3" style="max-height: 300px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Machine Operation Procedures</h5>
                    <p class="text-sm text-gray-600">Safe operation techniques and procedures</p>
                </div>
        """
        
        # Insert after safely get on/off section
        pattern = r'(<h4 class="font-semibold text-green-900 mb-2">🚶 Safely Get On and Off the Forward Tipping Dumper</h4>.*?</div>)(\s*<div class="bg-blue-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_technical_images(html_content, available_images):
    """
    Add technical/diagram images
    """
    # Add technical images to Module 3
    technical_images = [img for img in available_images if any(keyword in img.lower() for keyword in ['component', 'diagram', 'technical', 'system', 'hydraulic'])]
    
    if technical_images:
        # Add technical image to principal components section
        technical_img = technical_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{technical_img}" alt="Machine Components" class="w-full h-auto rounded-lg mb-3" style="max-height: 300px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Machine Components and Systems</h5>
                    <p class="text-sm text-gray-600">Detailed view of machine components and systems</p>
                </div>
        """
        
        # Insert after principal components section
        pattern = r'(<h4 class="font-semibold text-green-900 mb-2">⚙️ Principal Components of the Machine</h4>.*?</div>)(\s*<div class="bg-red-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

if __name__ == "__main__":
    add_additional_images()
