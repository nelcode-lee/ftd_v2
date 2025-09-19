import { useState, useEffect } from 'react';
import { X, BookOpen, Target, Lightbulb, Image as ImageIcon } from 'lucide-react';
import { useTimeTracking } from '../contexts/TimeTrackingContext';

const ModuleModal = ({ module, onClose }) => {
  const [activeSection, setActiveSection] = useState(0);
  const { startModule, endModule, startSection, endSection } = useTimeTracking();

  // Start tracking module time when modal opens
  useEffect(() => {
    startModule(module.id);
    
    // Start tracking first section
    if (module.content.sections && module.content.sections.length > 0) {
      startSection(module.id, 0);
    }

    // Cleanup when modal closes
    return () => {
      endModule();
    };
  }, [module.id, startModule, endModule, startSection]);

  // Track section changes
  useEffect(() => {
    if (module.content.sections && module.content.sections[activeSection]) {
      startSection(module.id, activeSection);
    }
  }, [activeSection, module.id, startSection]);

  // Handle modal close with time tracking
  const handleClose = () => {
    endModule();
    onClose();
  };

  const renderImage = (image, alt) => {
    if (!image) return null;
    
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-auto rounded-lg mb-3" 
          style={{ maxHeight: '400px', objectFit: 'contain' }}
          loading="eager"
        />
        <h5 className="font-semibold text-gray-700 mb-2">{alt}</h5>
      </div>
    );
  };

  const renderVideo = (video) => {
    if (!video) return null;
    
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-3">
          <iframe
            src={video.embedUrl}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h5 className="font-semibold text-gray-700 mb-2">{video.title}</h5>
        {video.description && (
          <p className="text-sm text-gray-600">{video.description}</p>
        )}
      </div>
    );
  };

  const renderSection = (section, index) => (
    <div key={index} className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
          {section.title}
        </h3>
        
        {section.content && (
          <p className="text-gray-700 mb-4 leading-relaxed">
            {section.content}
          </p>
        )}

        {section.link && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <a 
              href={section.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              📄 {section.linkText || 'View Document'}
            </a>
          </div>
        )}

        {section.image && renderImage(section.image, section.imageAlt || section.title)}
        {section.additionalImages && section.additionalImages.map((additionalImage, imgIndex) => 
          renderImage(additionalImage.image, additionalImage.imageAlt || section.title)
        )}
        {section.video && renderVideo(section.video)}

        {section.subsections && (
        <div className="space-y-6">
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex} className="border-l-4 border-blue-200 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {subsection.title}
              </h4>
              <p className="text-gray-700 mb-3">
                {subsection.content}
              </p>
              {subsection.image && renderImage(subsection.image, subsection.imageAlt || subsection.title)}
              {subsection.video && renderVideo(subsection.video)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{module.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Module {module.id}: {module.title}
              </h2>
              <p className="text-sm text-gray-500">Forward Tipping Dumper Training</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Learning Objectives */}
          {module.content?.objectives && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                Learning Objectives
              </h3>
              <ul className="space-y-2">
                {module.content.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Module Content Sections */}
          {module.content?.sections && (
            <div className="space-y-8">
              {module.content.sections.map((section, index) => renderSection(section, index))}
            </div>
          )}

          {/* Knowledge Stops */}
          {module.content?.knowledgeStops && module.content.knowledgeStops.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Knowledge Stops
              </h3>
              <div className="space-y-4">
                {module.content.knowledgeStops.map((stop, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">📚 Knowledge Stop</h4>
                    <p className="text-green-800 mb-2">
                      <strong>Question:</strong> {stop.question}
                    </p>
                    <p className="text-green-700">
                      <strong>Answer:</strong> {stop.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Module Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-enter flex-1">
                Start Module Test
              </button>
              <button 
                onClick={onClose}
                className="btn-secondary flex-1"
              >
                Close Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;
