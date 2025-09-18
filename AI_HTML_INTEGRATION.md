# AI Integration Guide for HTML Workbook

## 🎯 Quick Integration Steps

### 1. Add AI Scripts to Your HTML

Add these lines to your `index.html` file, just before the closing `</body>` tag:

```html
<!-- AI Test System Integration -->
<script src="ai_test_integration.js"></script>
<script>
    // Initialize AI system when page loads
    document.addEventListener('DOMContentLoaded', function() {
        // Check if API key is available
        const apiKey = localStorage.getItem('openai_api_key');
        if (apiKey) {
            console.log('🤖 AI Test System ready');
            // Enable AI features
            enableAIFeatures();
        } else {
            console.log('⚠️ OpenAI API key not found. Using basic test system.');
        }
    });

    function enableAIFeatures() {
        // Replace basic test submission with AI-enhanced version
        window.submitTest = window.submitTestWithAI;
        
        // Add AI-powered badge to test buttons
        const testButtons = document.querySelectorAll('[onclick*="startModuleTest"]');
        testButtons.forEach(button => {
            button.innerHTML += ' <span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">AI-Powered</span>';
        });
    }
</script>
```

### 2. Add API Key Input (Optional)

Add this to your login page or settings section:

```html
<!-- API Key Configuration (Optional) -->
<div class="bg-gray-50 p-4 rounded-lg mb-4">
    <h4 class="font-semibold text-gray-900 mb-2">🤖 AI Test System</h4>
    <p class="text-sm text-gray-600 mb-3">Enter your OpenAI API key to enable AI-powered test generation and marking.</p>
    <div class="flex space-x-2">
        <input type="password" id="apiKeyInput" placeholder="sk-..." 
               class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        <button onclick="saveAPIKey()" class="btn btn-primary">Save</button>
    </div>
    <p class="text-xs text-gray-500 mt-2">
        Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" class="text-blue-600">OpenAI Platform</a>
    </p>
</div>

<script>
function saveAPIKey() {
    const apiKey = document.getElementById('apiKeyInput').value;
    if (apiKey && apiKey.startsWith('sk-')) {
        localStorage.setItem('openai_api_key', apiKey);
        alert('✅ API key saved! AI features are now enabled.');
        location.reload();
    } else {
        alert('❌ Please enter a valid OpenAI API key (starts with sk-)');
    }
}
</script>
```

### 3. Enhanced Test Results Display

The AI system will automatically enhance your test results with:
- **Detailed AI feedback** for each question
- **Strengths and improvements** analysis
- **Personalized recommendations**
- **Safety-focused insights**

### 4. Generate AI Test Questions

Run this command to generate AI-powered test questions:

```bash
# Make sure your API key is set
./configure_api_key.sh interactive

# Generate AI tests
python3 ai_test_system.py
```

This will create `ai_generated_tests.json` with intelligent questions for all modules.

### 5. Load AI-Generated Tests

Add this to your JavaScript to load AI-generated tests:

```javascript
// Load AI-generated tests
async function loadAITests() {
    try {
        const response = await fetch('ai_generated_tests.json');
        const aiTests = await response.json();
        
        // Merge with existing test data
        Object.assign(testData, aiTests);
        
        console.log('✅ AI tests loaded successfully');
    } catch (error) {
        console.log('⚠️ AI tests not available, using default tests');
    }
}

// Call this when the page loads
loadAITests();
```

## 🎨 Visual Enhancements

### AI-Powered Badge
Add this CSS to highlight AI features:

```css
.ai-powered {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
}
```

### Enhanced Test Modal
The AI system will automatically enhance your test modal with:
- Real-time feedback indicators
- Progress analytics
- Detailed explanations
- Personalized recommendations

## 🔧 Configuration Options

### Customize AI Behavior
Edit `ai_config.json` to adjust:
- Question difficulty levels
- Marking criteria weights
- Feedback tone and style
- Safety focus areas

### API Key Management
- **Secure Storage**: API keys stored in localStorage
- **Fallback System**: Basic marking when AI unavailable
- **Error Handling**: Graceful degradation to standard tests

## 🚀 Testing the Integration

1. **Add your API key** using the interactive setup
2. **Generate AI tests** with the Python script
3. **Load the enhanced HTML** in your browser
4. **Take a test** to see AI-powered marking in action

## 📊 What You'll See

### Before AI Integration:
- Basic keyword matching for open-ended questions
- Simple pass/fail results
- Limited feedback

### After AI Integration:
- Intelligent answer evaluation
- Detailed feedback with strengths/improvements
- Personalized learning recommendations
- Safety-focused assessment criteria
- Professional, encouraging tone

## 🛠️ Troubleshooting

### Common Issues:
1. **API Key Not Working**: Check it starts with 'sk-' and has proper permissions
2. **Tests Not Loading**: Ensure `ai_generated_tests.json` exists
3. **AI Features Not Showing**: Check browser console for errors
4. **Fallback to Basic**: AI system automatically falls back if API fails

### Debug Mode:
Add this to see what's happening:
```javascript
localStorage.setItem('debug_ai', 'true');
```

---

**Ready to enhance your FTD Digital Workbook with AI!** 🚀
