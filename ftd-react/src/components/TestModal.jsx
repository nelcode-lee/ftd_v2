import { useState, useEffect } from 'react';
import { X, Clock, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { calculateScore } from '../data/testData';

const TestModal = ({ test, isOpen, onClose, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(test?.timeLimit * 60 || 1200); // Convert to seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [result, setResult] = useState(null);

  // Timer effect
  useEffect(() => {
    if (!testStarted || isSubmitted || !isOpen) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, isSubmitted, isOpen]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen && test) {
      setCurrentQuestion(0);
      setAnswers({});
      setTimeRemaining(test.timeLimit * 60);
      setIsSubmitted(false);
      setTestStarted(false);
      setResult(null);
    }
  }, [isOpen, test]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleSubmit = () => {
    const testResult = calculateScore(answers, test);
    setResult(testResult);
    setIsSubmitted(true);
    if (onComplete) {
      onComplete(testResult);
    }
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(test?.timeLimit * 60 || 1200);
    setIsSubmitted(false);
    setTestStarted(false);
    setResult(null);
    onClose();
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const nextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (!isOpen || !test) return null;

  // Test intro screen
  if (!testStarted && !isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{test.title}</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Test Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Test Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Time Limit: {test.timeLimit} minutes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Questions: {test.questions.length}</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>Pass Mark: {test.passThreshold}%</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Instructions</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Read each question carefully before selecting your answer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>You can navigate between questions using the navigation buttons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Your answers are automatically saved as you make selections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>The test will auto-submit when time expires</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>You need {test.passThreshold}% or higher to pass</span>
                </li>
              </ul>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartTest}
              className="btn-enter w-full py-3 text-lg font-semibold"
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (isSubmitted && result) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Test Results</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Result Summary */}
            <div className={`border rounded-lg p-6 mb-6 ${
              result.passed 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center justify-center mb-4">
                {result.passed ? (
                  <CheckCircle className="h-16 w-16 text-green-500" />
                ) : (
                  <AlertCircle className="h-16 w-16 text-red-500" />
                )}
              </div>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 ${
                  result.passed ? 'text-green-900' : 'text-red-900'
                }`}>
                  {result.passed ? 'Congratulations!' : 'Test Not Passed'}
                </h3>
                <p className={`text-lg mb-4 ${
                  result.passed ? 'text-green-800' : 'text-red-800'
                }`}>
                  {result.passed 
                    ? 'You have successfully passed this test!' 
                    : `You need ${result.threshold}% to pass. Please review the material and try again.`
                  }
                </p>
                <div className="text-3xl font-bold mb-2">
                  {result.percentage}%
                </div>
                <div className="text-gray-600">
                  {result.score} out of {result.total} questions correct
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Question Review</h3>
              {test.questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correct;
                return (
                  <div key={index} className={`border rounded-lg p-4 ${
                    isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Question {index + 1}: {question.question}
                        </h4>
                        {userAnswer !== undefined && (
                          <p className={`text-sm mb-2 ${
                            isCorrect ? 'text-green-700' : 'text-red-700'
                          }`}>
                            Your answer: {question.options[userAnswer]}
                          </p>
                        )}
                        {!isCorrect && (
                          <p className="text-sm text-green-700 mb-2">
                            Correct answer: {question.options[question.correct]}
                          </p>
                        )}
                        <p className="text-sm text-gray-600">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleClose}
                className="btn-primary flex-1"
              >
                Close
              </button>
              {!result.passed && (
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setTimeRemaining(test.timeLimit * 60);
                    setIsSubmitted(false);
                    setTestStarted(false);
                    setResult(null);
                  }}
                  className="btn-secondary flex-1"
                >
                  Retake Test
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test taking screen
  const question = test.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / test.questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{test.title}</h2>
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {test.questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-red-600">
                <Clock className="h-5 w-5 mr-1" />
                <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {question.question}
            </h3>

            {/* Multiple Choice Options */}
            {question.type === 'multiple_choice' && (
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                      answers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name={`question-${currentQuestion}`}
                        value={index}
                        checked={answers[currentQuestion] === index}
                        onChange={() => handleAnswerChange(currentQuestion, index)}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Question Navigation */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {test.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    index === currentQuestion
                      ? 'bg-blue-500 text-white'
                      : answers[index] !== undefined
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-gray-100 text-gray-600 border border-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation and Submit */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="btn-secondary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>

            <div className="flex space-x-3">
              {currentQuestion === test.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="btn-enter"
                >
                  Submit Test
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="btn-primary flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestModal;
