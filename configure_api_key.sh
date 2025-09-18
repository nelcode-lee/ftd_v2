#!/bin/bash

echo "🔑 OpenAI API Key Configuration for FTD Digital Workbook"
echo "======================================================="

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file..."
    cat > .env << 'EOF'
# OpenAI API Configuration
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Customize AI behavior
OPENAI_MODEL=gpt-4
OPENAI_TEMPERATURE=0.7
OPENAI_MAX_TOKENS=2000
EOF
    echo "✅ .env file created"
else
    echo "📄 .env file already exists"
fi

echo ""
echo "🔧 To add your OpenAI API key:"
echo "1. Get your API key from: https://platform.openai.com/api-keys"
echo "2. Run one of these commands:"
echo ""
echo "   Option A - Interactive setup:"
echo "   ./configure_api_key.sh interactive"
echo ""
echo "   Option B - Manual edit:"
echo "   nano .env"
echo "   # Replace 'your_openai_api_key_here' with your actual API key"
echo ""
echo "   Option C - Command line:"
echo "   echo 'OPENAI_API_KEY=your_actual_key_here' > .env"
echo ""

# Interactive setup if requested
if [ "$1" = "interactive" ]; then
    echo "🔑 Interactive API Key Setup"
    echo "============================"
    echo ""
    echo "Please enter your OpenAI API key:"
    read -s api_key
    
    if [ -n "$api_key" ]; then
        # Update .env file with the API key
        sed -i.bak "s/your_openai_api_key_here/$api_key/" .env
        echo ""
        echo "✅ API key saved to .env file"
        echo ""
        echo "🧪 Testing API key..."
        
        # Test the API key
        if command -v python3 &> /dev/null; then
            python3 -c "
import os
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
if api_key and api_key != 'your_openai_api_key_here':
    print('✅ API key loaded successfully')
    print('🔧 You can now run: python3 ai_test_system.py')
else:
    print('❌ API key not found or not set')
"
        else
            echo "⚠️  Python3 not found. Please test manually."
        fi
    else
        echo "❌ No API key provided"
    fi
fi

echo ""
echo "📚 Next steps:"
echo "1. Make sure your API key is set in .env"
echo "2. Run: python3 ai_test_system.py (to generate AI tests)"
echo "3. Update your HTML to include AI integration"
echo "4. View enhanced workbook at: http://localhost:8081"
