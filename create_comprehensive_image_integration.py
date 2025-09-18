#!/usr/bin/env python3
"""
Create comprehensive image integration for all modules
"""

import json
import re
import os
import random

def create_comprehensive_image_integration():
    """
    Create comprehensive image integration for all modules
    """
    # Read current HTML
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    print("🖼️ Creating comprehensive image integration...")
    
    # Get all available images
    available_images = []
    if os.path.exists('extracted_images'):
        available_images = [f for f in os.listdir('extracted_images') if f.endswith(('.png', '.jpg', '.jpeg'))]
    
    print(f"📸 Integrating {len(available_images)} images across all modules")
    
    # Add images to each module strategically
    html_content = add_module1_images(html_content, available_images)
    html_content = add_module2_images(html_content, available_images)
    html_content = add_module3_images(html_content, available_images)
    html_content = add_module4_images(html_content, available_images)
    html_content = add_module5_images(html_content, available_images)
    html_content = add_module6_images(html_content, available_images)
    
    # Write updated HTML
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ Comprehensive image integration completed!")
    print("🌐 View the enhanced workbook at: http://localhost:8081")

def add_module1_images(html_content, available_images):
    """
    Add images to Module 1: Introduction to FTD
    """
    # Get images from early pages (likely introduction content)
    intro_images = [img for img in available_images if any(page in img for page in ['page_01', 'page_02', 'page_03', 'page_04', 'page_05'])]
    
    if intro_images:
        # Add image after course objectives
        intro_img = intro_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{intro_img}" alt="FTD Introduction" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Forward Tipping Dumper Introduction</h5>
                    <p class="text-sm text-gray-600">Introduction to FTD operations and capabilities</p>
                </div>
        """
        
        # Insert after course objectives
        pattern = r'(<h5 class="font-semibold text-blue-900 mb-2">Course Objectives:</h5>.*?</ul>)(\s*</div>)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_module2_images(html_content, available_images):
    """
    Add images to Module 2: Health & Safety Legislation
    """
    # Get images from pages 6-15 (likely safety content)
    safety_images = [img for img in available_images if any(page in img for page in ['page_06', 'page_07', 'page_08', 'page_09', 'page_10', 'page_11', 'page_12', 'page_13', 'page_14', 'page_15'])]
    
    if safety_images:
        # Add safety image after additional legislation
        safety_img = safety_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{safety_img}" alt="Health & Safety Legislation" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Health & Safety Compliance</h5>
                    <p class="text-sm text-gray-600">Visual guide to health and safety requirements</p>
                </div>
        """
        
        # Insert after additional legislation section
        pattern = r'(<h4 class="font-semibold text-blue-900 mb-2">📋 Additional Legislation and Guidance</h4>.*?</div>)(\s*<div class="bg-yellow-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_module3_images(html_content, available_images):
    """
    Add images to Module 3: Machine Components & Pre-Operational Checks
    """
    # Get images from pages 16-25 (likely components content)
    component_images = [img for img in available_images if any(page in img for page in ['page_16', 'page_17', 'page_18', 'page_19', 'page_20', 'page_21', 'page_22', 'page_23', 'page_24', 'page_25'])]
    
    if component_images:
        # Add component image after major components
        component_img = component_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{component_img}" alt="Machine Components" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Machine Components Detail</h5>
                    <p class="text-sm text-gray-600">Detailed view of FTD components and systems</p>
                </div>
        """
        
        # Insert after major components section
        pattern = r'(<h4 class="font-semibold text-blue-900 mb-2">🔧 Major Components of a Forward Tipping Dumper</h4>.*?</div>)(\s*<div class="bg-orange-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_module4_images(html_content, available_images):
    """
    Add images to Module 4: Machine Operation & Safety Procedures
    """
    # Get images from pages 26-35 (likely operation content)
    operation_images = [img for img in available_images if any(page in img for page in ['page_26', 'page_27', 'page_28', 'page_29', 'page_30', 'page_31', 'page_32', 'page_33', 'page_34', 'page_35'])]
    
    if operation_images:
        # Add operation image after prepare and configure
        operation_img = operation_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{operation_img}" alt="Machine Operation" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Machine Operation Procedures</h5>
                    <p class="text-sm text-gray-600">Safe operation techniques and procedures</p>
                </div>
        """
        
        # Insert after prepare and configure section
        pattern = r'(<h4 class="font-semibold text-blue-900 mb-2">⚙️ Prepare and Configure the FTD for Site Travel</h4>.*?</div>)(\s*<div class="bg-orange-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_module5_images(html_content, available_images):
    """
    Add images to Module 5: Material Handling & Transportation
    """
    # Get images from pages 36-45 (likely material handling content)
    material_images = [img for img in available_images if any(page in img for page in ['page_36', 'page_37', 'page_38', 'page_39', 'page_40', 'page_41', 'page_42', 'page_43', 'page_44', 'page_45'])]
    
    if material_images:
        # Add material handling image after loading procedures
        material_img = material_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{material_img}" alt="Material Handling" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Material Handling Procedures</h5>
                    <p class="text-sm text-gray-600">Safe material handling and transportation</p>
                </div>
        """
        
        # Insert after material handling section
        pattern = r'(<h4 class="font-semibold text-green-900 mb-2">📦 Loading, Transporting and Discharging Different Materials</h4>.*?</div>)(\s*<div class="bg-blue-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def add_module6_images(html_content, available_images):
    """
    Add images to Module 6: Environmental Considerations & Assessment
    """
    # Get images from pages 46-50 (likely environmental content)
    env_images = [img for img in available_images if any(page in img for page in ['page_46', 'page_47', 'page_48', 'page_49', 'page_50'])]
    
    if env_images:
        # Add environmental image after environmental considerations
        env_img = env_images[0]
        image_html = f"""
                <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                    <img src="extracted_images/{env_img}" alt="Environmental Considerations" class="w-full h-auto rounded-lg mb-3" style="max-height: 350px; object-fit: contain;">
                    <h5 class="font-semibold text-gray-700 mb-2">Environmental Best Practices</h5>
                    <p class="text-sm text-gray-600">Environmental considerations and best practices</p>
                </div>
        """
        
        # Insert after environmental considerations section
        pattern = r'(<h4 class="font-semibold text-green-900 mb-2">🌍 Environmental Considerations of Machine Use</h4>.*?</div>)(\s*<div class="bg-blue-50)'
        replacement = r'\1' + image_html + r'\2'
        html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

if __name__ == "__main__":
    create_comprehensive_image_integration()
