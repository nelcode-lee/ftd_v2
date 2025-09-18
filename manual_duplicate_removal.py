#!/usr/bin/env python3
"""
Manual duplicate removal script - helps identify and remove specific duplicates
"""

import re
import os

def show_duplicates():
    """Show all duplicate images and their locations"""
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Find all image references
    image_pattern = r'<div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">\s*<img src="extracted_images/([^"]+)"[^>]*>\s*<h5 class="font-semibold text-gray-700 mb-2">[^<]*</h5>\s*<p class="text-sm text-gray-600">[^<]*</p>\s*</div>'
    
    # Find all image blocks with line numbers
    lines = html_content.split('\n')
    image_locations = []
    
    for i, line in enumerate(lines, 1):
        if 'extracted_images/' in line and 'img src=' in line:
            # Extract image filename
            match = re.search(r'extracted_images/([^"]+)', line)
            if match:
                image_file = match.group(1)
                # Find the alt text
                alt_match = re.search(r'alt="([^"]+)"', line)
                alt_text = alt_match.group(1) if alt_match else "Unknown"
                image_locations.append({
                    'line': i,
                    'image': image_file,
                    'alt': alt_text,
                    'content': line.strip()
                })
    
    # Group by image file
    from collections import defaultdict
    image_groups = defaultdict(list)
    for loc in image_locations:
        image_groups[loc['image']].append(loc)
    
    print("🔍 DUPLICATE IMAGES FOUND:")
    print("=" * 50)
    
    for image_file, locations in image_groups.items():
        if len(locations) > 1:
            print(f"\n📸 {image_file} (appears {len(locations)} times):")
            for i, loc in enumerate(locations, 1):
                print(f"  {i}. Line {loc['line']}: {loc['alt']}")
                print(f"     {loc['content'][:100]}...")
        else:
            print(f"\n✅ {image_file} (appears once):")
            print(f"  Line {locations[0]['line']}: {locations[0]['alt']}")

def remove_specific_duplicates(duplicates_to_remove):
    """Remove specific duplicate images based on line numbers"""
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    lines = html_content.split('\n')
    
    # Sort line numbers in descending order to avoid index issues
    lines_to_remove = sorted(duplicates_to_remove, reverse=True)
    
    print(f"\n🗑️ Removing duplicates at lines: {lines_to_remove}")
    
    for line_num in lines_to_remove:
        if 0 <= line_num - 1 < len(lines):
            # Find the complete image block (usually spans multiple lines)
            start_line = line_num - 1
            end_line = start_line
            
            # Look for the start of the image block
            while start_line > 0 and not lines[start_line].strip().startswith('<div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">'):
                start_line -= 1
            
            # Look for the end of the image block
            while end_line < len(lines) - 1 and not lines[end_line].strip().endswith('</div>'):
                end_line += 1
            
            # Remove the image block
            print(f"  Removing lines {start_line + 1}-{end_line + 1}")
            del lines[start_line:end_line + 1]
    
    # Write the updated content
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    
    print("✅ Duplicates removed successfully!")

def main():
    print("🔍 MANUAL DUPLICATE REMOVAL TOOL")
    print("=" * 40)
    
    # Show all duplicates
    show_duplicates()
    
    print("\n" + "=" * 50)
    print("📝 INSTRUCTIONS:")
    print("1. Take screenshots of each module showing the duplicates")
    print("2. Identify which specific duplicates you want to remove")
    print("3. Note the line numbers from the output above")
    print("4. Run: python3 manual_duplicate_removal.py remove [line1,line2,line3...]")
    print("\nExample: python3 manual_duplicate_removal.py remove 1351,1494,1816,1863,1937")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1 and sys.argv[1] == "remove":
        if len(sys.argv) > 2:
            try:
                line_numbers = [int(x) for x in sys.argv[2].split(',')]
                remove_specific_duplicates(line_numbers)
            except ValueError:
                print("❌ Error: Please provide comma-separated line numbers")
                print("Example: python3 manual_duplicate_removal.py remove 1351,1494,1816")
        else:
            print("❌ Error: Please provide line numbers to remove")
            print("Example: python3 manual_duplicate_removal.py remove 1351,1494,1816")
    else:
        main()
