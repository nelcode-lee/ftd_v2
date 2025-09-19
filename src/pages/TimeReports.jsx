import { useState, useEffect } from 'react';
import { Clock, Download, Calendar, BarChart3, TrendingUp } from 'lucide-react';
import { useTimeTracking } from '../contexts/TimeTrackingContext';
import { modules } from '../data/modules';

const TimeReports = () => {
  const {
    getTotalLearningTime,
    getModuleTime,
    getSectionTime,
    formatTime,
    exportTimeData,
    moduleTimes,
    sectionTimes
  } = useTimeTracking();

  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const data = exportTimeData();
    setReportData(data);
  }, [exportTimeData]);

  const getModuleTitle = (moduleId) => {
    const module = modules.find(m => m.id === parseInt(moduleId));
    return module ? module.title : `Module ${moduleId}`;
  };

  const getSectionTitle = (sectionKey) => {
    const [moduleId, sectionIndex] = sectionKey.split('_');
    const module = modules.find(m => m.id === parseInt(moduleId));
    if (module && module.content.sections && module.content.sections[parseInt(sectionIndex)]) {
      return module.content.sections[parseInt(sectionIndex)].title;
    }
    return `Section ${sectionIndex}`;
  };

  const exportDetailedReport = () => {
    const data = exportTimeData();
    const detailedReport = {
      ...data,
      summary: {
        totalLearningTime: formatTime(data.totalTimes.totalLearningTime),
        totalModules: Object.keys(data.moduleTimes).length,
        totalSections: Object.keys(data.sectionTimes).length,
        averageModuleTime: Object.values(data.moduleTimes).reduce((a, b) => a + b, 0) / Object.keys(data.moduleTimes).length || 0
      },
      moduleBreakdown: Object.keys(data.moduleTimes).map(moduleId => ({
        moduleId,
        title: getModuleTitle(moduleId),
        time: data.moduleTimes[moduleId].totalTime,
        formattedTime: data.moduleTimes[moduleId].formattedTime
      })),
      sectionBreakdown: Object.keys(data.sectionTimes).map(sectionKey => ({
        sectionKey,
        title: getSectionTitle(sectionKey),
        time: data.sectionTimes[sectionKey].totalTime,
        formattedTime: data.sectionTimes[sectionKey].formattedTime
      }))
    };

    const blob = new Blob([JSON.stringify(detailedReport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ftd-detailed-time-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!reportData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading time tracking data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="section-icon bg-blue-100 text-blue-600 mx-auto mb-6">
          <Clock className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Time Reports</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Detailed analysis of your learning progress and time investment across all modules and sections.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {formatTime(reportData.totalTimes.totalLearningTime)}
          </div>
          <div className="text-sm text-gray-600">Total Learning Time</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {Object.keys(reportData.moduleTimes).length}
          </div>
          <div className="text-sm text-gray-600">Modules Studied</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {Object.keys(reportData.sectionTimes).length}
          </div>
          <div className="text-sm text-gray-600">Sections Completed</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            {reportData.sessionInfo.isActive ? 'Active' : 'Inactive'}
          </div>
          <div className="text-sm text-gray-600">Current Session</div>
        </div>
      </div>

      {/* Module Time Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-blue-600" />
            Module Time Breakdown
          </h2>
          <button
            onClick={exportDetailedReport}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Export Detailed Report</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {Object.keys(reportData.moduleTimes).map(moduleId => {
            const moduleData = reportData.moduleTimes[moduleId];
            const moduleTitle = getModuleTitle(moduleId);
            const percentage = (moduleData.totalTime / reportData.totalTimes.totalLearningTime) * 100;
            
            return (
              <div key={moduleId} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{moduleTitle}</h3>
                  <span className="text-lg font-bold text-blue-600">{moduleData.formattedTime}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {percentage.toFixed(1)}% of total learning time
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Time Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
          Section Time Breakdown
        </h2>
        
        <div className="space-y-3">
          {Object.keys(reportData.sectionTimes).map(sectionKey => {
            const sectionData = reportData.sectionTimes[sectionKey];
            const sectionTitle = getSectionTitle(sectionKey);
            
            return (
              <div key={sectionKey} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{sectionTitle}</h4>
                  <p className="text-sm text-gray-600">{sectionKey}</p>
                </div>
                <span className="font-semibold text-green-600">{sectionData.formattedTime}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Session Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-purple-600" />
          Session Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Session</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className={reportData.sessionInfo.isActive ? 'text-green-600' : 'text-red-600'}>
                  {reportData.sessionInfo.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Started:</span>
                <span className="text-gray-900">
                  {reportData.sessionInfo.sessionStart ? 
                    new Date(reportData.sessionInfo.sessionStart).toLocaleString() : 
                    'Not started'
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Module:</span>
                <span className="text-gray-900">
                  {reportData.sessionInfo.currentModule ? 
                    getModuleTitle(reportData.sessionInfo.currentModule) : 
                    'None'
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Section:</span>
                <span className="text-gray-900">
                  {reportData.sessionInfo.currentSection !== null ? 
                    `Section ${reportData.sessionInfo.currentSection}` : 
                    'None'
                  }
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Statistics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Learning Time:</span>
                <span className="text-gray-900 font-semibold">
                  {formatTime(reportData.totalTimes.totalLearningTime)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Session:</span>
                <span className="text-gray-900 font-semibold">
                  {formatTime(reportData.totalTimes.currentSessionDuration)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Previous Sessions:</span>
                <span className="text-gray-900 font-semibold">
                  {formatTime(reportData.totalTimes.totalSessionTime)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeReports;
