import { useState, useEffect } from 'react';
import { Clock, Play, Pause, Download, RotateCcw } from 'lucide-react';
import { useTimeTracking } from '../contexts/TimeTrackingContext';

const TimeTrackingDisplay = () => {
  const {
    isTracking,
    sessionStartTime,
    currentModuleId,
    currentSectionId,
    startSession,
    endSession,
    getCurrentSessionDuration,
    getTotalLearningTime,
    formatTime,
    exportTimeData,
    resetTimeData
  } = useTimeTracking();

  const [currentTime, setCurrentTime] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Update current time every second
  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setCurrentTime(getCurrentSessionDuration());
    }, 1000);

    return () => clearInterval(interval);
  }, [isTracking, getCurrentSessionDuration]);

  const handleStartSession = () => {
    startSession();
    setCurrentTime(0);
  };

  const handleEndSession = () => {
    endSession();
    setCurrentTime(0);
  };

  const handleExportData = () => {
    const data = exportTimeData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ftd-learning-time-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all time tracking data? This cannot be undone.')) {
      resetTimeData();
      setCurrentTime(0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Learning Time Tracker</h3>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {formatTime(currentTime)}
          </div>
          <div className="text-sm text-gray-600">Current Session</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            {formatTime(getTotalLearningTime())}
          </div>
          <div className="text-sm text-gray-600">Total Learning Time</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">
            {sessionStartTime ? new Date(sessionStartTime).toLocaleTimeString() : '--:--'}
          </div>
          <div className="text-sm text-gray-600">Session Started</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-4 items-center justify-center">
        {!isTracking ? (
          <button
            onClick={handleStartSession}
            className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto min-w-[200px]"
          >
            <Play className="h-4 w-4" />
            <span>Start Learning Session</span>
          </button>
        ) : (
          <button
            onClick={handleEndSession}
            className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto min-w-[200px]"
          >
            <Pause className="h-4 w-4" />
            <span>End Learning Session</span>
          </button>
        )}

        <button
          onClick={handleExportData}
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto min-w-[200px]"
        >
          <Download className="h-4 w-4" />
          <span>Export Data</span>
        </button>

        <button
          onClick={handleResetData}
          className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors w-full sm:w-auto min-w-[200px]"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset Data</span>
        </button>
      </div>

      {showDetails && (
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Current Status</h4>
              <div className="space-y-1">
                <div>Session Active: <span className={isTracking ? 'text-green-600' : 'text-red-600'}>{isTracking ? 'Yes' : 'No'}</span></div>
                <div>Current Module: <span className="text-blue-600">{currentModuleId || 'None'}</span></div>
                <div>Current Section: <span className="text-blue-600">{currentSectionId || 'None'}</span></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Session Info</h4>
              <div className="space-y-1">
                <div>Session Start: {sessionStartTime ? new Date(sessionStartTime).toLocaleString() : 'Not started'}</div>
                <div>Current Duration: {formatTime(currentTime)}</div>
                <div>Total Learning Time: {formatTime(getTotalLearningTime())}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeTrackingDisplay;
