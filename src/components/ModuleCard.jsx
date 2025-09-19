import { CheckCircle, Clock, Lock } from 'lucide-react';

const ModuleCard = ({ module, onClick }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'locked':
        return <Lock className="h-5 w-5 text-gray-400" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'locked':
        return 'Locked';
      default:
        return 'Not Started';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'in-progress':
        return 'text-yellow-600 bg-yellow-50';
      case 'locked':
        return 'text-gray-500 bg-gray-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="card module-card group cursor-pointer" onClick={onClick}>
      {/* Module Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{module.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              Module {module.id}
            </h3>
            <p className="text-sm text-gray-500">{module.title}</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
          {getStatusText(module.status)}
        </div>
      </div>

      {/* Module Description */}
      <p className="text-gray-600 mb-6 line-clamp-3">
        {module.description}
      </p>

      {/* Module Objectives Preview */}
      {module.content?.objectives && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Learning Objectives:</h4>
          <ul className="space-y-1">
            {module.content.objectives.slice(0, 2).map((objective, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="line-clamp-2">{objective}</span>
              </li>
            ))}
            {module.content.objectives.length > 2 && (
              <li className="text-sm text-gray-500">
                +{module.content.objectives.length - 2} more objectives
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Module Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {getStatusIcon(module.status)}
          <span className="text-sm text-gray-500">{getStatusText(module.status)}</span>
        </div>
        <div className="btn-enter">
          {module.status === 'locked' ? 'Locked' : 'Enter'}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
