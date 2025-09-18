/**
 * AI-Enhanced Test System Integration
 * Provides intelligent test generation and marking using OpenAI API
 */

class AITestSystem {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.openai.com/v1';
    }

    /**
     * Generate test questions for a module using AI
     */
    async generateTestQuestions(moduleContent, moduleTitle, numQuestions = 5) {
        const prompt = `You are an expert in Forward Tipping Dumper (FTD) training and assessment. 
        Generate ${numQuestions} high-quality test questions based on the following module content.
        
        Module Title: ${moduleTitle}
        Module Content: ${moduleContent.substring(0, 2000)}...
        
        Requirements:
        1. Mix of multiple choice (3-4 options) and open-ended questions
        2. Questions should test practical knowledge and safety awareness
        3. Multiple choice questions should have one clearly correct answer
        4. Open-ended questions should have specific, measurable criteria
        5. Focus on critical safety information and operational procedures
        6. Use UK English spelling and terminology
        
        Return as JSON array with this structure:
        [
            {
                "id": 1,
                "type": "multiple_choice",
                "question": "Question text here",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correct": 0,
                "explanation": "Why this answer is correct",
                "difficulty": "easy|medium|hard"
            },
            {
                "id": 2,
                "type": "open_ended",
                "question": "Question text here",
                "correctAnswers": ["key term 1", "key term 2", "key term 3"],
                "explanation": "Expected answer explanation",
                "difficulty": "easy|medium|hard"
            }
        ]`;

        try {
            const response = await fetch(`${this.baseURL}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an expert in construction plant training and assessment. Generate high-quality test questions that assess practical knowledge and safety awareness.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 2000
                })
            });

            const data = await response.json();
            const content = data.choices[0].message.content;
            
            // Extract JSON from response
            const jsonMatch = content.match(/\[.*\]/s);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('Could not extract JSON from AI response');
            }
        } catch (error) {
            console.error('Error generating questions:', error);
            return [];
        }
    }

    /**
     * Mark an open-ended answer using AI
     */
    async markOpenEndedAnswer(question, correctAnswers, userAnswer) {
        const prompt = `You are marking a Forward Tipping Dumper training assessment question.
        
        Question: ${question}
        Correct Answer Key Terms: ${correctAnswers.join(', ')}
        Student Answer: ${userAnswer}
        
        Mark this answer and provide detailed feedback. Consider:
        1. Technical accuracy
        2. Safety awareness
        3. Completeness of response
        4. Use of correct terminology
        
        Return as JSON:
        {
            "score": 0.0-1.0,
            "feedback": "Detailed feedback for the student",
            "strengths": ["What the student got right"],
            "improvements": ["What the student could improve"],
            "key_terms_found": ["terms from correct answers that were mentioned"],
            "missing_terms": ["important terms that were missed"]
        }`;

        try {
            const response = await fetch(`${this.baseURL}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an expert FTD trainer marking student assessments. Provide constructive, detailed feedback.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.3,
                    max_tokens: 500
                })
            });

            const data = await response.json();
            const content = data.choices[0].message.content;
            
            const jsonMatch = content.match(/\{.*\}/s);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            } else {
                return this.basicOpenEndedScoring(question, correctAnswers, userAnswer);
            }
        } catch (error) {
            console.error('Error marking answer:', error);
            return this.basicOpenEndedScoring(question, correctAnswers, userAnswer);
        }
    }

    /**
     * Fallback basic scoring for open-ended questions
     */
    basicOpenEndedScoring(question, correctAnswers, userAnswer) {
        if (!userAnswer || userAnswer.trim().length < 5) {
            return {
                score: 0.0,
                feedback: "Please provide a more detailed answer.",
                strengths: [],
                improvements: ["Provide a complete answer with relevant details"],
                key_terms_found: [],
                missing_terms: correctAnswers
            };
        }

        const userLower = userAnswer.toLowerCase();
        const foundTerms = correctAnswers.filter(term => 
            userLower.includes(term.toLowerCase())
        );
        const score = foundTerms.length / correctAnswers.length;

        return {
            score: Math.min(score, 1.0),
            feedback: `Found ${foundTerms.length} out of ${correctAnswers.length} key terms.`,
            strengths: foundTerms,
            improvements: correctAnswers.filter(term => !foundTerms.includes(term)),
            key_terms_found: foundTerms,
            missing_terms: correctAnswers.filter(term => !foundTerms.includes(term))
        };
    }

    /**
     * Generate comprehensive feedback report
     */
    async generateFeedbackReport(testResults) {
        const prompt = `Generate a comprehensive feedback report for a Forward Tipping Dumper training test.
        
        Test Results: ${JSON.stringify(testResults, null, 2)}
        
        Provide:
        1. Overall performance summary
        2. Strengths and areas for improvement
        3. Specific recommendations for further study
        4. Safety-critical areas that need attention
        5. Next steps for the learner
        
        Keep it constructive and encouraging while being honest about areas needing improvement.`;

        try {
            const response = await fetch(`${this.baseURL}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an expert FTD trainer providing comprehensive feedback to students.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.5,
                    max_tokens: 800
                })
            });

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Error generating feedback:', error);
            return "Feedback generation temporarily unavailable. Please review your answers and try again.";
        }
    }
}

// Enhanced test submission with AI marking
async function submitTestWithAI() {
    if (!currentTest) return;

    clearInterval(testTimer);
    saveCurrentAnswer();
    
    // Initialize AI system (you would get API key from secure storage)
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
        // Fallback to basic marking
        submitTest();
        return;
    }

    const aiSystem = new AITestSystem(apiKey);
    
    // Calculate score with AI marking
    let score = 0;
    let totalQuestions = currentTest.data.questions.length;
    let detailedResults = [];

    for (let i = 0; i < currentTest.data.questions.length; i++) {
        const question = currentTest.data.questions[i];
        const userAnswer = currentTest.answers[i];
        
        if (question.type === 'multiple_choice') {
            const isCorrect = userAnswer === question.correct;
            if (isCorrect) score++;
            
            detailedResults.push({
                question: question.question,
                type: 'multiple_choice',
                userAnswer: userAnswer,
                correctAnswer: question.correct,
                isCorrect: isCorrect,
                explanation: question.explanation
            });
        } else if (question.type === 'open_ended') {
            // Use AI to mark open-ended questions
            const aiResult = await aiSystem.markOpenEndedAnswer(
                question.question,
                question.correctAnswers,
                userAnswer || ''
            );
            
            score += aiResult.score;
            
            detailedResults.push({
                question: question.question,
                type: 'open_ended',
                userAnswer: userAnswer,
                aiResult: aiResult,
                explanation: question.explanation
            });
        }
    }

    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 80;

    // Generate AI feedback report
    const feedbackReport = await aiSystem.generateFeedbackReport({
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentage,
        passed: passed,
        detailedResults: detailedResults
    });

    showAIEnhancedTestResults(score, totalQuestions, percentage, passed, detailedResults, feedbackReport);
}

// Enhanced results display with AI feedback
function showAIEnhancedTestResults(score, total, percentage, passed, detailedResults, feedbackReport) {
    const resultsHTML = `
        <div class="space-y-6">
            <!-- Overall Results -->
            <div class="text-center space-y-4">
                <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center ${passed ? 'bg-success-100' : 'bg-danger-100'}">
                    <svg class="w-10 h-10 ${passed ? 'text-success-600' : 'text-danger-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${passed ? 
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>' :
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
                        }
                    </svg>
                </div>
                <h3 class="text-2xl font-bold ${passed ? 'text-success-600' : 'text-danger-600'}">
                    ${passed ? 'Congratulations!' : 'Keep Learning!'}
                </h3>
                <div class="text-4xl font-bold text-gray-900">${percentage}%</div>
                <p class="text-gray-600">${score} out of ${total} questions correct</p>
            </div>

            <!-- AI Feedback Report -->
            <div class="bg-blue-50 p-6 rounded-lg">
                <h4 class="text-lg font-semibold text-blue-900 mb-4">🤖 AI Feedback Report</h4>
                <div class="text-blue-800 whitespace-pre-line">${feedbackReport}</div>
            </div>

            <!-- Detailed Results -->
            <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-900">Detailed Results</h4>
                ${detailedResults.map((result, index) => `
                    <div class="border border-gray-200 rounded-lg p-4">
                        <div class="flex items-start justify-between mb-2">
                            <h5 class="font-medium text-gray-900">Question ${index + 1}</h5>
                            <span class="text-sm ${result.type === 'multiple_choice' ? 
                                (result.isCorrect ? 'text-success-600' : 'text-danger-600') : 
                                'text-blue-600'
                            }">
                                ${result.type === 'multiple_choice' ? 
                                    (result.isCorrect ? '✓ Correct' : '✗ Incorrect') : 
                                    `AI Score: ${Math.round((result.aiResult?.score || 0) * 100)}%`
                                }
                            </span>
                        </div>
                        <p class="text-gray-700 mb-2">${result.question}</p>
                        <p class="text-sm text-gray-600 mb-2"><strong>Your Answer:</strong> ${result.userAnswer || 'No answer provided'}</p>
                        ${result.type === 'open_ended' && result.aiResult ? `
                            <div class="bg-gray-50 p-3 rounded text-sm">
                                <p class="font-medium text-gray-700 mb-1">AI Feedback:</p>
                                <p class="text-gray-600 mb-2">${result.aiResult.feedback}</p>
                                ${result.aiResult.strengths.length > 0 ? `
                                    <p class="text-success-600"><strong>Strengths:</strong> ${result.aiResult.strengths.join(', ')}</p>
                                ` : ''}
                                ${result.aiResult.improvements.length > 0 ? `
                                    <p class="text-warning-600"><strong>Areas for Improvement:</strong> ${result.aiResult.improvements.join(', ')}</p>
                                ` : ''}
                            </div>
                        ` : ''}
                        <p class="text-sm text-gray-500 mt-2"><strong>Explanation:</strong> ${result.explanation}</p>
                    </div>
                `).join('')}
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4 justify-center">
                <button onclick="retakeTest()" class="btn btn-primary">Retake Test</button>
                <button onclick="closeTest()" class="btn btn-secondary">Close</button>
            </div>
        </div>
    `;

    document.getElementById('testContent').innerHTML = resultsHTML;
}

// API Key management
function setOpenAIAPIKey() {
    const apiKey = prompt('Enter your OpenAI API key:');
    if (apiKey) {
        localStorage.setItem('openai_api_key', apiKey);
        alert('API key saved successfully!');
    }
}

// Export for use in main HTML
window.AITestSystem = AITestSystem;
window.submitTestWithAI = submitTestWithAI;
window.setOpenAIAPIKey = setOpenAIAPIKey;
