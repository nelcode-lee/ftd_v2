import { BookOpen, Brain, Search, Target, Smartphone, Laptop, Tablet } from 'lucide-react';

const Guide = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="section-icon bg-blue-100 text-blue-600 mx-auto mb-6">
          <BookOpen className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Use This Guide</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know to get the most out of your Forward Tipping Dumper training experience.
        </p>
      </div>

      {/* Getting Started */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
        <div className="space-y-6">
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Complete Your Profile</h3>
            <p className="text-gray-700 mb-4">
              Make sure your email address is correct and up-to-date. This will be used for 
              progress tracking and certification purposes.
            </p>
          </div>
          
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Explore the Interface</h3>
            <p className="text-gray-700 mb-4">
              Familiarize yourself with the navigation menu and main sections. The interface 
              is designed to be intuitive and mobile-friendly.
            </p>
          </div>
          
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Start with Module 1</h3>
            <p className="text-gray-700 mb-4">
              Begin your learning journey with Module 1: Forward Tipping Dumper Overview. 
              Each module builds upon the previous one, so it's important to complete them in order.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
        <div className="space-y-6">
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Module Structure
            </h3>
            <p className="text-gray-700 mb-4">
              Each module contains learning objectives, detailed content sections, images, 
              knowledge stops, and interactive elements. Take your time to absorb the information.
            </p>
          </div>
          
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-600" />
              Learning Objectives
            </h3>
            <p className="text-gray-700 mb-4">
              Review the learning objectives at the beginning of each module. These will 
              help you understand what you should be able to do after completing the module.
            </p>
          </div>
          
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-600" />
              Knowledge Stops
            </h3>
            <p className="text-gray-700 mb-4">
              Look for Knowledge Stops throughout each module. These contain important 
              questions and answers that reinforce key learning points.
            </p>
          </div>
        </div>
      </section>

      {/* Tests and Assessments */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tests and Assessments</h2>
        <div className="space-y-6">
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Test Format</h3>
            <p className="text-gray-700 mb-4">
              Tests include multiple choice questions and open-ended questions. 
              You'll have a specific time limit for each test.
            </p>
          </div>
          
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Passing Requirements</h3>
            <p className="text-gray-700 mb-4">
              You need to score 80% or higher to pass each test. You can retake tests 
              if needed, but it's best to study the material thoroughly first.
            </p>
          </div>
          
          <div className="feature-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Progress Tracking</h3>
            <p className="text-gray-700 mb-4">
              Your progress is automatically saved. You can see which modules you've 
              completed and which tests you've passed.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary</h2>
        <div className="feature-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Search className="h-5 w-5 mr-2 text-indigo-600" />
            Search Functionality
          </h3>
          <p className="text-gray-700 mb-4">
            Use the search bar in the Glossary section to quickly find definitions. 
            You can search by term name or definition content.
          </p>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Device Compatibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card p-6 text-center">
            <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Phones</h3>
            <p className="text-gray-700 text-sm">
              Optimized for mobile learning with touch-friendly interface and responsive design.
            </p>
          </div>
          
          <div className="feature-card p-6 text-center">
            <Tablet className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tablets</h3>
            <p className="text-gray-700 text-sm">
              Perfect for detailed study with larger screen and enhanced readability.
            </p>
          </div>
          
          <div className="feature-card p-6 text-center">
            <Laptop className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Desktop</h3>
            <p className="text-gray-700 text-sm">
              Full-featured experience with all functionality and optimal performance.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Success</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">💡</span>
            <p className="text-gray-700">Take notes as you go through each module</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">💡</span>
            <p className="text-gray-700">Review the glossary regularly to reinforce terminology</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">💡</span>
            <p className="text-gray-700">Complete modules in order for best learning progression</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">💡</span>
            <p className="text-gray-700">Take breaks between modules to process information</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">💡</span>
            <p className="text-gray-700">Use the tests to identify areas that need more study</p>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
        <div className="feature-card p-6">
          <p className="text-gray-700 mb-4">
            If you encounter any technical issues or have questions about the content, 
            please contact your training supervisor or the course administrator.
          </p>
          <p className="text-gray-700">
            Remember: This training is designed to help you succeed. Take your time, 
            ask questions, and don't hesitate to review material as needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Guide;
