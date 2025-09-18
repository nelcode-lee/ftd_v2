#!/usr/bin/env python3
"""
Update HTML with detailed PDF content
"""

import re

def update_html_with_detailed_content():
    """
    Update HTML with the detailed content from PDF
    """
    # Read the detailed content
    with open('detailed_workbook_content.txt', 'r') as f:
        detailed_content = f.read()
    
    # Read current HTML
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    print("🔄 Updating HTML with detailed PDF content...")
    
    # Extract and organize content by sections
    sections = extract_content_sections(detailed_content)
    
    # Update Module 1: Introduction to FTD & Safe Working Practices
    module1_content = create_module_content([
        sections.get('introduction', ''),
        sections.get('safe_working_practices', ''),
        sections.get('operator_roles', '')
    ])
    
    # Update Module 2: Health & Safety Legislation & Risk Assessment
    module2_content = create_module_content([
        sections.get('health_safety_act', ''),
        sections.get('puwer_regulations', ''),
        sections.get('additional_legislation', ''),
        sections.get('risk_assessments', ''),
        sections.get('social_responsibilities', ''),
        sections.get('site_induction', '')
    ])
    
    # Update Module 3: Machine Components & Pre-Operational Checks
    module3_content = create_module_content([
        sections.get('major_components', ''),
        sections.get('different_types', ''),
        sections.get('principal_components', ''),
        sections.get('pre_operational_checks', ''),
        sections.get('ppe', '')
    ])
    
    # Update Module 4: Machine Operation & Safety Procedures
    module4_content = create_module_content([
        sections.get('safely_get_on_off', ''),
        sections.get('prepare_configure', ''),
        sections.get('visibility_aids', ''),
        sections.get('operating_confined', ''),
        sections.get('travel_manoeuvre', '')
    ])
    
    # Update Module 5: Material Handling & Transportation
    module5_content = create_module_content([
        sections.get('loading_transporting', ''),
        sections.get('travelling_highway', ''),
        sections.get('towing_equipment', ''),
        sections.get('loading_unloading', '')
    ])
    
    # Update Module 6: Environmental Considerations & Assessment
    module6_content = create_module_content([
        sections.get('environmental_considerations', ''),
        sections.get('glossary', '')
    ])
    
    # Update each module in the HTML
    html_content = update_module_in_html(html_content, 1, module1_content)
    html_content = update_module_in_html(html_content, 2, module2_content)
    html_content = update_module_in_html(html_content, 3, module3_content)
    html_content = update_module_in_html(html_content, 4, module4_content)
    html_content = update_module_in_html(html_content, 5, module5_content)
    html_content = update_module_in_html(html_content, 6, module6_content)
    
    # Write updated HTML
    with open('index.html', 'w') as f:
        f.write(html_content)
    
    print("✅ HTML updated with detailed PDF content!")
    print("🌐 View the complete workbook at: http://localhost:8081")

def extract_content_sections(content):
    """
    Extract content sections from the detailed text
    """
    sections = {}
    
    # Define section patterns
    section_patterns = {
        'introduction': r'INTRODUCTION TO THE FORWARD TIPPING DUMPER.*?(?=SAFE WORKING PRACTICES|$)',
        'safe_working_practices': r'SAFE WORKING PRACTICES.*?(?=HEALTH AND SAFETY|$)',
        'health_safety_act': r'HEALTH AND SAFETY AT WORK ACT 1974.*?(?=PROVISION & USE|$)',
        'puwer_regulations': r'PROVISION & USE OF WORK EQUIPMENT REGULATIONS.*?(?=ADDITIONAL LEGISLATION|$)',
        'additional_legislation': r'ADDITIONAL LEGISLATION AND GUIDANCE.*?(?=RISK ASSESSMENTS|$)',
        'risk_assessments': r'RISK ASSESSMENTS AND METHOD STATEMENTS.*?(?=SOCIAL RESPONSIBILITIES|$)',
        'social_responsibilities': r'SOCIAL RESPONSIBILITIES.*?(?=SITE INDUCTION|$)',
        'site_induction': r'SITE INDUCTION.*?(?=OPERATOR ROLES|$)',
        'operator_roles': r'OPERATOR ROLES.*?(?=MAJOR COMPONENTS|$)',
        'major_components': r'MAJOR COMPONENTS.*?(?=DIFFERENT TYPES|$)',
        'different_types': r'DIFFERENT TYPES.*?(?=PRINCIPAL COMPONENTS|$)',
        'principal_components': r'PRINCIPAL COMPONENTS.*?(?=PRE-OPERATIONAL CHECKS|$)',
        'pre_operational_checks': r'PRE-OPERATIONAL CHECKS.*?(?=PERSONAL PROTECTIVE|$)',
        'ppe': r'PERSONAL PROTECTIVE EQUIPMENT.*?(?=SAFELY GET ON|$)',
        'safely_get_on_off': r'SAFELY GET ON AND OFF.*?(?=PREPARE AND CONFIGURE|$)',
        'prepare_configure': r'PREPARE AND CONFIGURE.*?(?=VISIBILITY AIDS|$)',
        'visibility_aids': r'VISIBILITY AIDS.*?(?=PEDESTRIANISED AREAS|$)',
        'operating_confined': r'OPERATING IN CONFINED AREAS.*?(?=CONDUCT ALL NECESSARY|$)',
        'travel_manoeuvre': r'TRAVEL AND MANOEUVRE.*?(?=TRAVELLING ON A PUBLIC|$)',
        'travelling_highway': r'TRAVELLING ON A PUBLIC HIGHWAY.*?(?=TOWING EQUIPMENT|$)',
        'towing_equipment': r'TOWING EQUIPMENT.*?(?=TRAVEL AND MANOEUVRE|$)',
        'loading_transporting': r'LOADING, TRANSPORTING.*?(?=DISCHARGING LOADS|$)',
        'loading_unloading': r'LOADING/ UNLOADING.*?(?=ENVIRONMENTAL CONSIDERATIONS|$)',
        'environmental_considerations': r'ENVIRONMENTAL CONSIDERATIONS.*?(?=GLOSSARY|$)',
        'glossary': r'GLOSSARY OF TERMS.*?(?=$)'
    }
    
    for section_name, pattern in section_patterns.items():
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            section_content = match.group(0).strip()
            # Clean up the content
            section_content = re.sub(r'Page \d+ of \d+', '', section_content)
            section_content = re.sub(r'Learner Workbook FTD v4 June25', '', section_content)
            section_content = re.sub(r'\s+', ' ', section_content)
            sections[section_name] = section_content
            print(f"✅ Extracted: {section_name}")
        else:
            print(f"❌ Missing: {section_name}")
    
    return sections

def create_module_content(section_contents):
    """
    Create HTML content for a module from section contents
    """
    content_parts = []
    
    for section_content in section_contents:
        if section_content and len(section_content) > 50:  # Only include substantial content
            # Extract title and content
            lines = section_content.split('\n')
            title = lines[0] if lines else "Section"
            content = '\n'.join(lines[1:]) if len(lines) > 1 else section_content
            
            content_parts.append(f"""
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-semibold text-blue-900 mb-2">📋 {title}</h4>
                    <div class="text-blue-800 text-sm leading-relaxed">
                        {content}
                    </div>
                </div>
            """)
    
    return ''.join(content_parts)

def update_module_in_html(html_content, module_id, module_content):
    """
    Update a specific module in the HTML content
    """
    # Find the module content section
    pattern = rf'({module_id}:\s*{{\s*title:\s*"[^"]*",\s*content:\s*`)(.*?)(`\s*}})'
    
    def replace_module_content(match):
        return f"{match.group(1)}{module_content}{match.group(3)}"
    
    updated_html = re.sub(pattern, replace_module_content, html_content, flags=re.DOTALL)
    return updated_html

if __name__ == "__main__":
    update_html_with_detailed_content()
