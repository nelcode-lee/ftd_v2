import { useState, useEffect } from 'react';
import { Brain, Clock, CheckCircle, RotateCcw } from 'lucide-react';
import { getAllTests, getTestByModuleId } from '../data/testData';
import TestModal from '../components/TestModal';

const Tests = () => {
  const [testResults, setTestResults] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [showTestModal, setShowTestModal] = useState(false);

  // Get actual test data
  const allTests = getAllTests();
  
  // Map test data to display format
  const tests = allTests.map(test => ({
    id: test.id,
    title: test.title,
    questions: test.questions.length,
    duration: `${test.timeLimit} minutes`,
    status: "available", // All modules available for testing
    score: testResults.find(result => result.testId === test.id)?.percentage || null,
    testData: test
  }));

  // Check for auto-start test from module navigation
  useEffect(() => {
    const autoStartTestId = sessionStorage.getItem('autoStartTest');
    if (autoStartTestId) {
      const testData = getTestByModuleId(parseInt(autoStartTestId));
      if (testData) {
        setSelectedTest(testData);
        setShowTestModal(true);
      }
      // Clear the session storage after use
      sessionStorage.removeItem('autoStartTest');
    }
  }, []);

  const handleStartTest = (test) => {
    setSelectedTest(test.testData);
    setShowTestModal(true);
  };

  const handleTestComplete = (result) => {
    // Save test result
    const newResult = {
      testId: selectedTest.id,
      ...result,
      timestamp: new Date().toISOString()
    };
    
    setTestResults(prev => {
      const existing = prev.findIndex(r => r.testId === selectedTest.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newResult;
        return updated;
      }
      return [...prev, newResult];
    });
  };

  const handleCloseTest = () => {
    setShowTestModal(false);
    setSelectedTest(null);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'available':
        return <Brain className="h-5 w-5 text-blue-500" />;
      case 'locked':
        return <Clock className="h-5 w-5 text-gray-400" />;
      default:
        return <Brain className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'available':
        return 'Available';
      case 'locked':
        return 'Locked';
      default:
        return 'Not Available';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'available':
        return 'text-blue-600 bg-blue-50';
      case 'locked':
        return 'text-gray-500 bg-gray-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="section-icon bg-purple-100 text-purple-600 mx-auto mb-6">
          <Brain className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Knowledge Tests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test your understanding with interactive assessments. Each test covers the content 
          from its corresponding module and helps you track your learning progress.
        </p>
      </div>

      {/* Test Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{tests.length}</div>
          <div className="text-sm text-gray-600">Total Tests</div>
        </div>
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {tests.filter(t => t.status === 'available').length}
          </div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600 mb-2">0</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-gray-600 mb-2">
            {testResults.filter(r => r.passed).length}
          </div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tests.map((test) => (
          <div key={test.id} className="card module-card">
            {/* Test Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(test.status)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Test {test.id}
                  </h3>
                  <p className="text-sm text-gray-500">{test.title}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                {getStatusText(test.status)}
              </div>
            </div>

            {/* Test Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Brain className="h-4 w-4 mr-2" />
                <span>{test.questions} questions</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{test.duration}</span>
              </div>
              {test.score && (
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Score: {test.score}%</span>
                </div>
              )}
            </div>

            {/* Test Actions */}
            <div className="flex flex-col space-y-2">
              {test.status === 'available' && (
                <button 
                  onClick={() => handleStartTest(test)}
                  className="btn-enter w-full"
                >
                  Start Test
                </button>
              )}
              {test.score && (
                <div className="flex space-x-2">
                  <button className="btn-primary flex-1">
                    View Results
                  </button>
                  <button 
                    onClick={() => handleStartTest(test)}
                    className="btn-secondary flex-1"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Retake
                  </button>
                </div>
              )}
              {test.status === 'locked' && (
                <button className="btn-secondary w-full" disabled>
                  Complete Previous Modules
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Test Instructions */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Test Instructions</h3>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>Each test contains multiple choice and open-ended questions</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>You can review your answers before submitting</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>Tests are timed - complete them within the allocated time</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>You need 80% or higher to pass each test</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>You can retake tests if needed</span>
          </li>
        </ul>
      </div>

      {/* Test Modal */}
      <TestModal
        test={selectedTest}
        isOpen={showTestModal}
        onClose={handleCloseTest}
        onComplete={handleTestComplete}
      />
    </div>
  );
};

export default Tests;
