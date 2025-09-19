import { Link } from 'react-router-dom';
import { BookOpen, Brain, Search, AlertTriangle } from 'lucide-react';
import TimeTrackingDisplay from '../components/TimeTrackingDisplay';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <div className="section-icon bg-blue-100 text-blue-600 mx-auto mb-6">
          🚜
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Forward Tipping Dumper Training
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Master Forward Tipping Dumper operations through interactive modules, 
          comprehensive assessments, and hands-on learning. Build the skills and 
          knowledge needed for safe, efficient FTD operation.
        </p>
      </div>

      {/* Time Tracking Display */}
      <TimeTrackingDisplay />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Link to="/modules" className="feature-card p-8 text-center group">
          <div className="section-icon bg-green-100 text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Modules</h3>
          <p className="text-gray-600 mb-6">
            6 comprehensive modules covering all aspects of FTD operation, 
            from basic principles to advanced techniques.
          </p>
          <div className="btn-enter w-full">Start Learning</div>
        </Link>
        
        <Link to="/tests" className="feature-card p-8 text-center group">
          <div className="section-icon bg-purple-100 text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Brain className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Knowledge Tests</h3>
          <p className="text-gray-600 mb-6">
            Test your understanding with interactive assessments and 
            track your progress throughout the course.
          </p>
          <div className="btn-enter w-full">Take Tests</div>
        </Link>
        
        <Link to="/glossary" className="feature-card p-8 text-center group">
          <div className="section-icon bg-indigo-100 text-indigo-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Search className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Glossary</h3>
          <p className="text-gray-600 mb-6">
            Searchable terms and definitions for FTD operations, 
            safety procedures, and technical concepts.
          </p>
          <div className="btn-enter w-full">Browse Terms</div>
        </Link>
      </div>

      {/* Course Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Forward Tipping Dumper types and applications
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Health and safety legislation and compliance
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Pre-operational checks and maintenance
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Safe operating procedures and techniques
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Environmental considerations and best practices
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                Assessment preparation and certification
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Features</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📚</span>
                Interactive learning modules with rich content
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🧠</span>
                Knowledge tests and progress tracking
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📱</span>
                Mobile-optimized for learning anywhere
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎯</span>
                CPCS A09 certification preparation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🔍</span>
                Comprehensive glossary and search
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📊</span>
                Detailed progress analytics
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Safety Reminder */}
      <div className="safety-card">
        <div className="flex items-center space-x-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">OperateSAFE</h3>
            <p className="text-red-700">
              Always put safety first and STOP any activity that could lead to harm to yourself or others. 
              When in doubt, ask for guidance from your supervisor or safety representative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
