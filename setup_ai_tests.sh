#!/bin/bash

echo "🤖 Setting up AI-Enhanced Test System for FTD Digital Workbook"
echo "============================================================="

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
echo "📦 Installing Python packages for AI integration..."
pip3 install openai python-dotenv

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "🔧 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment and install packages
echo "🔧 Installing packages in virtual environment..."
source venv/bin/activate
pip install openai python-dotenv

# Create .env file template
echo "📝 Creating environment configuration..."
cat > .env.template << EOF
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Customize AI behavior
OPENAI_MODEL=gpt-4
OPENAI_TEMPERATURE=0.7
OPENAI_MAX_TOKENS=2000
EOF

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    cp .env.template .env
    echo "📄 Created .env file. Please add your OpenAI API key."
fi

echo ""
echo "✅ AI Test System setup complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Get your OpenAI API key from: https://platform.openai.com/api-keys"
echo "2. Add it to the .env file: OPENAI_API_KEY=your_key_here"
echo "3. Run the AI test generator: python3 ai_test_system.py"
echo "4. Update your HTML to include AI integration"
echo ""
echo "💡 Features you'll get:"
echo "   • AI-generated test questions"
echo "   • Intelligent marking of open-ended answers"
echo "   • Detailed feedback reports"
echo "   • Personalized learning recommendations"
echo "   • Safety-focused assessment criteria"
echo ""
echo "🌐 View the enhanced workbook at: http://localhost:8081"
