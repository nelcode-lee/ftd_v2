import { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { glossaryTerms } from '../data/modules';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = useMemo(() => {
    if (!searchTerm) return glossaryTerms;
    
    return glossaryTerms.filter(term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="section-icon bg-indigo-100 text-indigo-600 mx-auto mb-6">
          <BookOpen className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Definitions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Search and explore definitions for Forward Tipping Dumper operations, 
          safety procedures, and technical concepts. Use this reference to 
          enhance your understanding throughout the course.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search terms and definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          {filteredTerms.length} of {glossaryTerms.length} terms
        </p>
      </div>

      {/* Glossary Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map((term, index) => (
          <div key={index} className="feature-card p-6">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              {term.term}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {term.definition}
            </p>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No terms found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search terms or browse all available terms.
          </p>
        </div>
      )}

      {/* Glossary Stats */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Term Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {glossaryTerms.length}
            </div>
            <div className="text-sm text-gray-600">Total Terms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {glossaryTerms.filter(term => term.term.length > 10).length}
            </div>
            <div className="text-sm text-gray-600">Technical Terms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {glossaryTerms.filter(term => term.definition.includes('safety')).length}
            </div>
            <div className="text-sm text-gray-600">Safety Related</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
