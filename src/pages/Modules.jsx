import { useState } from 'react';
import { modules } from '../data/modules';
import ModuleCard from '../components/ModuleCard';
import ModuleModal from '../components/ModuleModal';

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModule(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="section-icon bg-green-100 text-green-600 mx-auto mb-6">
          📚
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Modules</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore comprehensive training modules covering all aspects of Forward Tipping Dumper operation, 
          safety, and maintenance. Each module builds upon the previous one to provide complete knowledge.
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onClick={() => handleModuleClick(module)}
          />
        ))}
      </div>

      {/* Module Modal */}
      {isModalOpen && selectedModule && (
        <ModuleModal
          module={selectedModule}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Modules;
