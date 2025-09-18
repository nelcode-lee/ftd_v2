#!/usr/bin/env python3
"""
Extract detailed content from PDF using PyMuPDF
"""

import fitz  # PyMuPDF
import json
import re

def extract_detailed_content(pdf_path):
    """
    Extract detailed content from PDF using PyMuPDF
    """
    doc = fitz.open(pdf_path)
    full_text = ""
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()
        full_text += f"\n--- PAGE {page_num + 1} ---\n"
        full_text += text
    
    doc.close()
    return full_text

def clean_and_organize_content(text):
    """
    Clean and organize the extracted content
    """
    # Remove page numbers and headers
    text = re.sub(r'Page \d+ of \d+', '', text)
    text = re.sub(r'Learner Workbook FTD v4 June25', '', text)
    text = re.sub(r'--- PAGE \d+ ---', '', text)
    
    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'\n\s*\n', '\n\n', text)
    
    return text.strip()

def main():
    """
    Extract detailed content from PDF
    """
    print("🔍 Extracting detailed content from PDF...")
    
    # Extract content
    detailed_text = extract_detailed_content('forward-tipping-dumper-workbook.pdf')
    
    # Clean and organize
    cleaned_text = clean_and_organize_content(detailed_text)
    
    # Save to file
    with open('detailed_workbook_content.txt', 'w') as f:
        f.write(cleaned_text)
    
    print(f"✅ Detailed content extracted: {len(cleaned_text)} characters")
    print("📁 Saved to: detailed_workbook_content.txt")
    
    # Show sample
    print("\n📄 Sample content:")
    print(cleaned_text[:500] + "...")

if __name__ == "__main__":
    main()
