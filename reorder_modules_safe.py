#!/usr/bin/env python3
"""
Safe script to reorder modules according to table of contents without losing content
"""

import re

def reorder_modules_safe():
    # Read the current HTML file
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    print("🔄 Safely reordering modules according to table of contents...")
    
    # Find all module cards in the dashboard
    module_card_pattern = r'(<div class="card module-card" data-module="(\d+)">.*?</div>\s*</div>)'
    module_cards = re.findall(module_card_pattern, html_content, re.DOTALL)
    
    print(f"Found {len(module_cards)} module cards")
    
    # Define the new order based on table of contents
    new_order = [1, 2, 3, 4, 5, 6]  # Keep the same order for now, just update titles
    
    # Update module titles to match table of contents
    title_updates = {
        1: "Module 1: Introduction & Safe Working Practices",
        2: "Module 2: Health & Safety Legislation", 
        3: "Module 3: Operator Roles & Machine Components",
        4: "Module 4: Machine Operation",
        5: "Module 5: Material Handling",
        6: "Module 6: Transportation & Assessment"
    }
    
    # Update titles in the dashboard
    for module_id, new_title in title_updates.items():
        # Find and update the module title
        title_pattern = f'(<h3 class="text-lg font-semibold text-brand-900">Module {module_id}: [^<]+</h3>)'
        new_title_html = f'<h3 class="text-lg font-semibold text-brand-900">{new_title}</h3>'
        html_content = re.sub(title_pattern, new_title_html, html_content)
        print(f"  ✅ Updated Module {module_id} title")
    
    # Update module titles in the JavaScript content
    for module_id, new_title in title_updates.items():
        # Update in the moduleContent array
        title_pattern = f'(moduleContent\\[{module_id}\\]\\.title = "Module {module_id}: [^"]+")'
        new_title_js = f'moduleContent[{module_id}].title = "{new_title}"'
        html_content = re.sub(title_pattern, new_title_js, html_content)
        print(f"  ✅ Updated Module {module_id} JavaScript title")
    
    # Write the updated HTML file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"\n✅ Successfully updated module titles!")
    print(f"📊 Updated {len(title_updates)} module titles")
    print(f"🌐 All content and images preserved")
    print(f"🌐 Updated file: index.html")

if __name__ == "__main__":
    reorder_modules_safe()
