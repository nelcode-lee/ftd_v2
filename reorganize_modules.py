#!/usr/bin/env python3
"""
Script to reorganize modules according to the table of contents from the workbook
"""

import re

def reorganize_modules():
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    print("🔄 Reorganizing modules according to table of contents...")
    
    # Define the new module structure based on the table of contents
    new_module_structure = {
        1: {
            "title": "Module 1: Introduction & Safe Working Practices",
            "description": "Introduction to Forward Tipping Dumpers, safe working practices, and the role of the operator.",
            "sections": [
                "Introduction to Forward Tipping Dumper",
                "Safe Working Practices - The Role of the Forward Tipping Dumper Operator"
            ]
        },
        2: {
            "title": "Module 2: Health & Safety Legislation",
            "description": "Health and Safety at Work Act 1974, PUWER 98, additional legislation, risk assessments, social responsibilities, and site induction.",
            "sections": [
                "Health and Safety at Work Act 1974",
                "Provision & Use of Work Equipment Regulations 1998 (PUWER 98)",
                "Additional Legislation and Guidance",
                "Risk Assessments and Method Statements",
                "Social Responsibilities",
                "Site Induction"
            ]
        },
        3: {
            "title": "Module 3: Operator Roles & Machine Components",
            "description": "Operator roles and responsibilities, major components, different types of dumpers, principal components, pre-operational checks, and PPE.",
            "sections": [
                "Operator Roles & Responsibilities",
                "Major Components of a Forward Tipping Dumper",
                "Different Types of Dumper & Skips",
                "Principal Components of the Machine",
                "Pre-Operational Checks - Manufacturers and Legislative Requirements",
                "Personal Protective Equipment (PPE)"
            ]
        },
        4: {
            "title": "Module 4: Machine Operation",
            "description": "Safely getting on and off, preparing and configuring, visibility aids, pedestrianised areas, highway travel, towing, travel and manoeuvre, and confined areas.",
            "sections": [
                "Safely Get On and Off the Forward Tipping Dumper",
                "Prepare and Configure the Forward Tipping Dumper for Site Travel",
                "Visibility Aids",
                "Pedestrianised Areas",
                "Travelling on a Public Highway",
                "Towing Equipment with a Dumper – Enhanced Training",
                "Travel and Manoeuvre the Dumper",
                "Travel and Manoeuvre in Areas of Restricted Space",
                "Operating in Confined Areas"
            ]
        },
        5: {
            "title": "Module 5: Material Handling",
            "description": "Safety checks, load integrity, loading and transporting materials, discharging loads, and environmental considerations.",
            "sections": [
                "Conduct All Necessary Safety Checks at the Loading and Discharging Area",
                "Ensure Load Integrity/ Security",
                "Loading, Transporting and Discharging Different Materials",
                "Discharging Loads",
                "Environmental Considerations of Machine Use"
            ]
        },
        6: {
            "title": "Module 6: Transportation & Assessment",
            "description": "Loading/unloading procedures for machine transportation and glossary of terms.",
            "sections": [
                "Loading/ Unloading Procedures for Machine Transportation",
                "End of Work and Shut Down Procedures",
                "Machine Transportation",
                "Exclusion Zone Safety",
                "Certification Process",
                "Final Assessment"
            ]
        }
    }
    
    # Update module titles and descriptions
    for module_id, module_info in new_module_structure.items():
        # Update module title in the dashboard
        title_pattern = f'(Module {module_id}: [^"]+")'
        new_title = f'Module {module_id}: {module_info["title"].split(": ")[1]}"'
        html_content = re.sub(title_pattern, new_title, html_content)
        
        # Update module description
        desc_pattern = f'(data-module="{module_id}"[^>]*>.*?<p class="text-brand-700 mb-4 text-sm leading-relaxed">)(.*?)(</p>)'
        def update_description(match):
            return match.group(1) + module_info["description"] + match.group(3)
        html_content = re.sub(desc_pattern, update_description, html_content, flags=re.DOTALL)
        
        print(f"  ✅ Updated Module {module_id}: {module_info['title']}")
    
    # Write the updated HTML file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"\n✅ Successfully reorganized all modules!")
    print(f"📊 Updated {len(new_module_structure)} modules according to table of contents")
    print(f"🌐 Updated file: index.html")

if __name__ == "__main__":
    reorganize_modules()
