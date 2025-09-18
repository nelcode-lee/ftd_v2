#!/usr/bin/env python3
"""
AI-Enhanced Test System for FTD Digital Workbook
Integrates OpenAI API for intelligent test generation and marking
"""

import os
import json
import openai
from typing import List, Dict, Any
import re

class AITestSystem:
    def __init__(self, api_key: str = None):
        """
        Initialize AI Test System with OpenAI API key
        """
        self.api_key = api_key or os.getenv('OPENAI_API_KEY')
        if not self.api_key:
            raise ValueError("OpenAI API key required. Set OPENAI_API_KEY environment variable or pass api_key parameter.")
        
        openai.api_key = self.api_key
        self.client = openai.OpenAI(api_key=self.api_key)
    
    def generate_test_questions(self, module_content: str, module_title: str, num_questions: int = 5) -> List[Dict[str, Any]]:
        """
        Generate test questions based on module content using AI
        """
        prompt = f"""
        You are an expert in Forward Tipping Dumper (FTD) training and assessment. 
        Generate {num_questions} high-quality test questions based on the following module content.
        
        Module Title: {module_title}
        Module Content: {module_content[:2000]}...
        
        Requirements:
        1. Mix of multiple choice (3-4 options) and open-ended questions
        2. Questions should test practical knowledge and safety awareness
        3. Multiple choice questions should have one clearly correct answer
        4. Open-ended questions should have specific, measurable criteria
        5. Focus on critical safety information and operational procedures
        6. Use UK English spelling and terminology
        
        Return as JSON array with this structure:
        [
            {{
                "id": 1,
                "type": "multiple_choice",
                "question": "Question text here",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correct": 0,
                "explanation": "Why this answer is correct",
                "difficulty": "easy|medium|hard"
            }},
            {{
                "id": 2,
                "type": "open_ended",
                "question": "Question text here",
                "correctAnswers": ["key term 1", "key term 2", "key term 3"],
                "explanation": "Expected answer explanation",
                "difficulty": "easy|medium|hard"
            }}
        ]
        """
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are an expert in construction plant training and assessment. Generate high-quality test questions that assess practical knowledge and safety awareness."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=2000
            )
            
            # Extract JSON from response
            content = response.choices[0].message.content
            json_match = re.search(r'\[.*\]', content, re.DOTALL)
            
            if json_match:
                questions = json.loads(json_match.group())
                return questions
            else:
                raise ValueError("Could not extract JSON from AI response")
                
        except Exception as e:
            print(f"Error generating questions: {e}")
            return []
    
    def mark_open_ended_answer(self, question: str, correct_answers: List[str], user_answer: str) -> Dict[str, Any]:
        """
        Mark an open-ended answer using AI
        """
        prompt = f"""
        You are marking a Forward Tipping Dumper training assessment question.
        
        Question: {question}
        Correct Answer Key Terms: {', '.join(correct_answers)}
        Student Answer: {user_answer}
        
        Mark this answer and provide detailed feedback. Consider:
        1. Technical accuracy
        2. Safety awareness
        3. Completeness of response
        4. Use of correct terminology
        
        Return as JSON:
        {{
            "score": 0.0-1.0,
            "feedback": "Detailed feedback for the student",
            "strengths": ["What the student got right"],
            "improvements": ["What the student could improve"],
            "key_terms_found": ["terms from correct answers that were mentioned"],
            "missing_terms": ["important terms that were missed"]
        }}
        """
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are an expert FTD trainer marking student assessments. Provide constructive, detailed feedback."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.3,
                max_tokens=500
            )
            
            content = response.choices[0].message.content
            json_match = re.search(r'\{.*\}', content, re.DOTALL)
            
            if json_match:
                return json.loads(json_match.group())
            else:
                # Fallback to basic scoring
                return self._basic_open_ended_scoring(question, correct_answers, user_answer)
                
        except Exception as e:
            print(f"Error marking answer: {e}")
            return self._basic_open_ended_scoring(question, correct_answers, user_answer)
    
    def _basic_open_ended_scoring(self, question: str, correct_answers: List[str], user_answer: str) -> Dict[str, Any]:
        """
        Fallback basic scoring for open-ended questions
        """
        if not user_answer or len(user_answer.strip()) < 5:
            return {
                "score": 0.0,
                "feedback": "Please provide a more detailed answer.",
                "strengths": [],
                "improvements": ["Provide a complete answer with relevant details"],
                "key_terms_found": [],
                "missing_terms": correct_answers
            }
        
        user_lower = user_answer.lower()
        found_terms = [term for term in correct_answers if term.lower() in user_lower]
        score = len(found_terms) / len(correct_answers)
        
        return {
            "score": min(score, 1.0),
            "feedback": f"Found {len(found_terms)} out of {len(correct_answers)} key terms.",
            "strengths": found_terms,
            "improvements": [term for term in correct_answers if term not in found_terms],
            "key_terms_found": found_terms,
            "missing_terms": [term for term in correct_answers if term not in found_terms]
        }
    
    def generate_feedback_report(self, test_results: Dict[str, Any]) -> str:
        """
        Generate comprehensive feedback report for test results
        """
        prompt = f"""
        Generate a comprehensive feedback report for a Forward Tipping Dumper training test.
        
        Test Results: {json.dumps(test_results, indent=2)}
        
        Provide:
        1. Overall performance summary
        2. Strengths and areas for improvement
        3. Specific recommendations for further study
        4. Safety-critical areas that need attention
        5. Next steps for the learner
        
        Keep it constructive and encouraging while being honest about areas needing improvement.
        """
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are an expert FTD trainer providing comprehensive feedback to students."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.5,
                max_tokens=800
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            print(f"Error generating feedback: {e}")
            return "Feedback generation temporarily unavailable. Please review your answers and try again."

def create_ai_enhanced_tests():
    """
    Create AI-enhanced test questions for all modules
    """
    # Module content samples (you would load these from your actual content)
    modules = {
        1: {
            "title": "Introduction to FTD",
            "content": "A Forward Tipping Dumper (FTD) is commonly used on construction sites to transport large quantities of materials across rough, undulating terrain. Its ability to handle a mixture of terrain and carry large loads makes it a flexible piece of equipment. Key features include forward tipping mechanism, robust design for heavy-duty operations, and versatility for various material types."
        },
        2: {
            "title": "Health & Safety Legislation", 
            "content": "Health and safety legislation including HSWA 1974, PUWER 98, and related regulations. PUWER requires that work equipment is suitable for its intended use, maintained in a safe condition, and used only by people who have received adequate information, instruction, and training. ROPS (Roll-Over Protective Structure) provides protection for the operator in roll-over accidents."
        },
        3: {
            "title": "Pre-Operational Checks",
            "content": "Daily inspection procedures including engine oil checks, hydraulic system inspection, tyre condition assessment, ROPS/FOPS inspection, and PPE requirements. Always wear gloves when checking engine oil to prevent skin disease and contamination. Maintain 3 points of contact when getting on and off the machine."
        }
    }
    
    # Initialize AI system
    try:
        ai_system = AITestSystem()
        
        all_tests = {}
        
        for module_id, module_data in modules.items():
            print(f"Generating questions for Module {module_id}: {module_data['title']}")
            
            questions = ai_system.generate_test_questions(
                module_data['content'],
                module_data['title'],
                num_questions=5
            )
            
            if questions:
                all_tests[module_id] = {
                    "title": f"Module {module_id}: {module_data['title']}",
                    "timeLimit": 20,
                    "questions": questions
                }
                print(f"  Generated {len(questions)} questions")
            else:
                print(f"  Failed to generate questions")
        
        # Save to file
        with open('ai_generated_tests.json', 'w') as f:
            json.dump(all_tests, f, indent=2)
        
        print(f"\n✅ Generated AI tests for {len(all_tests)} modules")
        print("📄 Saved to: ai_generated_tests.json")
        
        return all_tests
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("💡 Make sure to set your OPENAI_API_KEY environment variable")
        return None

if __name__ == "__main__":
    create_ai_enhanced_tests()
