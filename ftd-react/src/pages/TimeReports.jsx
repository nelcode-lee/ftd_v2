import React, { useState, useEffect } from 'react';
import { Clock, BarChart3, TrendingUp, Download, RefreshCw } from 'lucide-react';
import { useTimeTracking } from '../contexts/TimeTrackingContext';
import { modules } from '../data/modules';

const TimeReports = () => {
  const { getTimeReport, formatTime } = useTimeTracking();
  const [report, setReport] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const updateReport = () => {
      setReport(getTimeReport());
    };

    updateReport();
    const interval = setInterval(updateReport, 1000); // Update every second

    return () => clearInterval(interval);
  }, [getTimeReport, refreshKey]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const exportData = () => {
    if (!report) return;
    
    const exportData = {
      exportDate: new Date().toISOString(),
      totalSessionTime: formatTime(report.totalSessionTime),
      currentSessionTime: formatTime(report.currentSessionTime),
      modules: Object.entries(report.moduleTimes).map(([moduleId, time]) => {
        const module = modules.find(m => m.id === parseInt(moduleId));
        return {
          moduleId,
          moduleName: module?.title || `Module ${moduleId}`,
          timeSpent: formatTime(time),
          timeInMs: time
        };
      }),
      sections: Object.entries(report.sectionTimes).map(([sectionId, time]) => ({
        sectionId,
        timeSpent: formatTime(time),
        timeInMs: time
      }))
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `time-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!report) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Loading time tracking data...</p>
        </div>
      </div>
    );
  }

  const totalModuleTime = Object.values(report.moduleTimes).reduce((sum, time) => sum + time, 0);
  const averageModuleTime = totalModuleTime / Object.keys(report.moduleTimes).length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="section-icon bg-blue-100 text-blue-600 mx-auto mb-6">
          <Clock className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Time Reports</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Track your learning progress and time spent studying the Forward Tipping Dumper course materials.
        </p>
        
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleRefresh}
            className="btn-secondary flex items-center"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
          <button
            onClick={exportData}
            className="btn-primary flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Session Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {formatTime(report.totalSessionTime)}
          </div>
          <div className="text-sm text-gray-600">Total Study Time</div>
        </div>
        
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {formatTime(report.currentSessionTime)}
          </div>
          <div className="text-sm text-gray-600">Current Session</div>
          {report.isSessionActive && (
            <div className="text-xs text-green-600 mt-1">● Active</div>
          )}
        </div>
        
        <div className="feature-card p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {Object.keys(report.moduleTimes).length}
          </div>
          <div className="text-sm text-gray-600">Modules Studied</div>
        </div>
      </div>

      {/* Current Activity */}
      {(report.currentModule || report.currentSection) && (
        <div className="card p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
            Current Activity
          </h3>
          <div className="space-y-2">
            {report.currentModule && (
              <p className="text-gray-700">
                <strong>Module:</strong> {modules.find(m => m.id === parseInt(report.currentModule))?.title || `Module ${report.currentModule}`}
              </p>
            )}
            {report.currentSection && (
              <p className="text-gray-700">
                <strong>Section:</strong> {report.currentSection}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Module Time Breakdown */}
      <div className="card p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
          Module Time Breakdown
        </h3>
        
        {Object.keys(report.moduleTimes).length === 0 ? (
          <p className="text-gray-500 text-center py-8">No module time recorded yet. Start studying to see your progress!</p>
        ) : (
          <div className="space-y-4">
            {Object.entries(report.moduleTimes)
              .sort(([, a], [, b]) => b - a) // Sort by time spent (descending)
              .map(([moduleId, time]) => {
                const module = modules.find(m => m.id === parseInt(moduleId));
                const percentage = totalModuleTime > 0 ? (time / totalModuleTime) * 100 : 0;
                
                return (
                  <div key={moduleId} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        Module {moduleId}: {module?.title || 'Unknown Module'}
                      </span>
                      <span className="text-gray-600">{formatTime(time)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {percentage.toFixed(1)}% of total module time
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Study Statistics</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Average per module:</span>
              <span className="font-medium">{formatTime(averageModuleTime)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Longest session:</span>
              <span className="font-medium">{formatTime(report.currentSessionTime)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total sections:</span>
              <span className="font-medium">{Object.keys(report.sectionTimes).length}</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Learning Progress</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Modules started:</span>
              <span className="font-medium">{Object.keys(report.moduleTimes).length} / {modules.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Completion rate:</span>
              <span className="font-medium">
                {modules.length > 0 ? Math.round((Object.keys(report.moduleTimes).length / modules.length) * 100) : 0}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Session active:</span>
              <span className={`font-medium ${report.isSessionActive ? 'text-green-600' : 'text-gray-600'}`}>
                {report.isSessionActive ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">About Time Tracking</h3>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>Time tracking automatically starts when you begin a session</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>Module time is tracked when you open and study module content</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>Data is automatically saved to your browser's local storage</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>Export your data for record-keeping or evidential purposes</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeReports;
