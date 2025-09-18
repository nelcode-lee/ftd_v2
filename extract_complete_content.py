#!/usr/bin/env python3
"""
Complete PDF Content Extraction for FTD Digital Workbook
Ensures ALL content from the controlled learning document is captured
"""

import re
import json
from pathlib import Path

def extract_all_sections(text_content):
    """
    Extract all sections from the PDF text content
    """
    sections = {}
    
    # Define all major sections to extract
    section_patterns = {
        "introduction": r"INTRODUCTION TO THE FORWARD TIPPING DUMPER.*?(?=SAFE WORKING PRACTICES|$)",
        "safe_working_practices": r"SAFE WORKING PRACTICES.*?(?=HEALTH AND SAFETY|$)",
        "health_safety_act": r"HEALTH AND SAFETY AT WORK ACT 1974.*?(?=PROVISION & USE|$)",
        "puwer_regulations": r"PROVISION & USE OF WORK EQUIPMENT REGULATIONS 1998.*?(?=ADDITIONAL LEGISLATION|$)",
        "additional_legislation": r"ADDITIONAL LEGISLATION AND GUIDANCE.*?(?=RISK ASSESSMENTS|$)",
        "risk_assessments": r"RISK ASSESSMENTS AND METHOD STATEMENTS.*?(?=SOCIAL RESPONSIBILITIES|$)",
        "social_responsibilities": r"SOCIAL RESPONSIBILITIES.*?(?=SITE INDUCTION|$)",
        "site_induction": r"SITE INDUCTION.*?(?=OPERATOR ROLES|$)",
        "operator_roles": r"OPERATOR ROLES.*?(?=MAJOR COMPONENTS|$)",
        "major_components": r"MAJOR COMPONENTS.*?(?=DIFFERENT TYPES|$)",
        "different_types": r"DIFFERENT TYPES.*?(?=PRINCIPAL COMPONENTS|$)",
        "principal_components": r"PRINCIPAL COMPONENTS.*?(?=PRE-OPERATIONAL CHECKS|$)",
        "pre_operational_checks": r"PRE-OPERATIONAL CHECKS.*?(?=PERSONAL PROTECTIVE|$)",
        "ppe": r"PERSONAL PROTECTIVE EQUIPMENT.*?(?=SAFELY GET ON|$)",
        "safely_get_on_off": r"SAFELY GET ON AND OFF.*?(?=PREPARE AND CONFIGURE|$)",
        "prepare_configure": r"PREPARE AND CONFIGURE.*?(?=VISIBILITY AIDS|$)",
        "visibility_aids": r"VISIBILITY AIDS.*?(?=LOADING, TRANSPORTING|$)",
        "loading_transporting": r"LOADING, TRANSPORTING.*?(?=OPERATING IN CONFINED|$)",
        "operating_confined": r"OPERATING IN CONFINED.*?(?=TRAVEL AND MANOEUVRE|$)",
        "travel_manoeuvre": r"TRAVEL AND MANOEUVRE.*?(?=TRAVELLING ON A PUBLIC|$)",
        "travelling_highway": r"TRAVELLING ON A PUBLIC.*?(?=TOWING EQUIPMENT|$)",
        "towing_equipment": r"TOWING EQUIPMENT.*?(?=LOADING/ UNLOADING|$)",
        "loading_unloading": r"LOADING/ UNLOADING.*?(?=ENVIRONMENTAL CONSIDERATIONS|$)",
        "environmental_considerations": r"ENVIRONMENTAL CONSIDERATIONS.*?(?=GLOSSARY|$)",
        "glossary": r"GLOSSARY OF TERMS.*?(?=$)"
    }
    
    for section_name, pattern in section_patterns.items():
        match = re.search(pattern, text_content, re.DOTALL | re.IGNORECASE)
        if match:
            content = match.group(0).strip()
            # Clean up the content
            content = re.sub(r'Page \d+ of \d+', '', content)
            content = re.sub(r'Learner Workbook FTD v4 June25', '', content)
            content = re.sub(r'\s+', ' ', content)
            sections[section_name] = content
            print(f"✅ Extracted: {section_name}")
        else:
            print(f"❌ Missing: {section_name}")
    
    return sections

def create_comprehensive_modules(sections):
    """
    Create comprehensive modules from all extracted sections
    """
    modules = {
        1: {
            "title": "Introduction to FTD & Safe Working Practices",
            "content": {
                "introduction": sections.get("introduction", ""),
                "safe_working_practices": sections.get("safe_working_practices", ""),
                "operator_roles": sections.get("operator_roles", "")
            }
        },
        2: {
            "title": "Health & Safety Legislation & Risk Assessment",
            "content": {
                "health_safety_act": sections.get("health_safety_act", ""),
                "puwer_regulations": sections.get("puwer_regulations", ""),
                "additional_legislation": sections.get("additional_legislation", ""),
                "risk_assessments": sections.get("risk_assessments", ""),
                "social_responsibilities": sections.get("social_responsibilities", ""),
                "site_induction": sections.get("site_induction", "")
            }
        },
        3: {
            "title": "Machine Components & Pre-Operational Checks",
            "content": {
                "major_components": sections.get("major_components", ""),
                "different_types": sections.get("different_types", ""),
                "principal_components": sections.get("principal_components", ""),
                "pre_operational_checks": sections.get("pre_operational_checks", ""),
                "ppe": sections.get("ppe", "")
            }
        },
        4: {
            "title": "Machine Operation & Safety Procedures",
            "content": {
                "safely_get_on_off": sections.get("safely_get_on_off", ""),
                "prepare_configure": sections.get("prepare_configure", ""),
                "visibility_aids": sections.get("visibility_aids", ""),
                "operating_confined": sections.get("operating_confined", ""),
                "travel_manoeuvre": sections.get("travel_manoeuvre", "")
            }
        },
        5: {
            "title": "Material Handling & Transportation",
            "content": {
                "loading_transporting": sections.get("loading_transporting", ""),
                "travelling_highway": sections.get("travelling_highway", ""),
                "towing_equipment": sections.get("towing_equipment", ""),
                "loading_unloading": sections.get("loading_unloading", "")
            }
        },
        6: {
            "title": "Environmental Considerations & Assessment",
            "content": {
                "environmental_considerations": sections.get("environmental_considerations", ""),
                "glossary": sections.get("glossary", "")
            }
        }
    }
    
    return modules

def extract_glossary_terms(text_content):
    """
    Extract glossary terms and definitions
    """
    glossary_section = re.search(r"GLOSSARY OF TERMS.*?(?=$)", text_content, re.DOTALL | re.IGNORECASE)
    if not glossary_section:
        return {}
    
    glossary_text = glossary_section.group(0)
    terms = {}
    
    # Extract terms and definitions
    lines = glossary_text.split('\n')
    current_term = None
    current_definition = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if this is a term (usually in caps or bold)
        if re.match(r'^[A-Z][A-Z\s]+$', line) and len(line) > 3:
            if current_term and current_definition:
                terms[current_term] = ' '.join(current_definition)
            current_term = line
            current_definition = []
        elif current_term:
            current_definition.append(line)
    
    # Add the last term
    if current_term and current_definition:
        terms[current_term] = ' '.join(current_definition)
    
    return terms

def main():
    """
    Main extraction process
    """
    print("🔍 Extracting Complete PDF Content for FTD Digital Workbook")
    print("=" * 60)
    
    # Read the PDF text content
    with open('workbook-text.txt', 'r') as f:
        text_content = f.read()
    
    print(f"📄 PDF text length: {len(text_content)} characters")
    
    # Extract all sections
    sections = extract_all_sections(text_content)
    print(f"📋 Extracted {len(sections)} sections")
    
    # Create comprehensive modules
    modules = create_comprehensive_modules(sections)
    
    # Extract glossary
    glossary_terms = extract_glossary_terms(text_content)
    print(f"📚 Extracted {len(glossary_terms)} glossary terms")
    
    # Save complete content
    complete_content = {
        "extraction_date": "2024-09-18",
        "total_sections": len(sections),
        "sections": sections,
        "modules": modules,
        "glossary_terms": glossary_terms,
        "content_completeness": {
            "total_characters": len(text_content),
            "extracted_sections": len(sections),
            "glossary_terms": len(glossary_terms),
            "completeness_percentage": (len(sections) / 25) * 100  # Assuming 25 total sections
        }
    }
    
    # Save to file
    with open('complete_pdf_content.json', 'w') as f:
        json.dump(complete_content, f, indent=2)
    
    print(f"\n✅ Complete content extraction finished!")
    print(f"📁 Saved to: complete_pdf_content.json")
    print(f"📊 Content completeness: {complete_content['content_completeness']['completeness_percentage']:.1f}%")
    
    # Print missing sections
    missing_sections = []
    for section_name in ["introduction", "safe_working_practices", "health_safety_act", "puwer_regulations", 
                        "additional_legislation", "risk_assessments", "social_responsibilities", "site_induction",
                        "operator_roles", "major_components", "different_types", "principal_components",
                        "pre_operational_checks", "ppe", "safely_get_on_off", "prepare_configure",
                        "visibility_aids", "loading_transporting", "operating_confined", "travel_manoeuvre",
                        "travelling_highway", "towing_equipment", "loading_unloading", "environmental_considerations", "glossary"]:
        if section_name not in sections:
            missing_sections.append(section_name)
    
    if missing_sections:
        print(f"\n⚠️  Missing sections: {', '.join(missing_sections)}")
    else:
        print(f"\n🎉 All sections successfully extracted!")

if __name__ == "__main__":
    main()
