#!/bin/bash

echo "🚀 Setting up PDF Image Extraction for FTD Digital Workbook"
echo "=========================================================="

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is not installed. Please install Python3 first."
    exit 1
fi

# Check if pip is available
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3 is not installed. Please install pip3 first."
    exit 1
fi

# Install Python requirements
echo "📦 Installing Python packages..."
pip3 install -r requirements.txt

# Check if poppler-utils is installed
if ! command -v pdftoppm &> /dev/null; then
    echo "⚠️  poppler-utils not found. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install poppler
        else
            echo "❌ Homebrew not found. Please install poppler manually:"
            echo "   brew install poppler"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        sudo apt-get update
        sudo apt-get install -y poppler-utils
    else
        echo "❌ Unsupported OS. Please install poppler-utils manually."
        exit 1
    fi
fi

echo "✅ Setup complete!"
echo ""
echo "🔧 To extract images from PDF, run:"
echo "   python3 extract_images.py"
echo ""
echo "🔧 To integrate images into HTML, run:"
echo "   python3 integrate_images.py"
echo ""
echo "🌐 Then view at: http://localhost:8081"
