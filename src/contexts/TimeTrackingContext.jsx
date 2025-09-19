import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const TimeTrackingContext = createContext();

export const useTimeTracking = () => {
  const context = useContext(TimeTrackingContext);
  if (!context) {
    throw new Error('useTimeTracking must be used within a TimeTrackingProvider');
  }
  return context;
};

export const TimeTrackingProvider = ({ children }) => {
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [moduleStartTime, setModuleStartTime] = useState(null);
  const [sectionStartTime, setSectionStartTime] = useState(null);
  const [totalSessionTime, setTotalSessionTime] = useState(0);
  const [moduleTimes, setModuleTimes] = useState({});
  const [sectionTimes, setSectionTimes] = useState({});
  const [isTracking, setIsTracking] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ftd_time_tracking');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setModuleTimes(data.moduleTimes || {});
        setSectionTimes(data.sectionTimes || {});
        setTotalSessionTime(data.totalSessionTime || 0);
      } catch (error) {
        console.error('Error loading time tracking data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const dataToSave = {
      moduleTimes,
      sectionTimes,
      totalSessionTime,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('ftd_time_tracking', JSON.stringify(dataToSave));
  }, [moduleTimes, sectionTimes, totalSessionTime]);

  // Start a new learning session
  const startSession = useCallback(() => {
    const now = new Date();
    setSessionStartTime(now);
    setIsTracking(true);
    
    // Save session start time
    localStorage.setItem('ftd_session_start', now.toISOString());
    
    console.log('Learning session started at:', now.toISOString());
  }, []);

  // End the current learning session
  const endSession = useCallback(() => {
    if (!sessionStartTime) return;

    const now = new Date();
    const sessionDuration = Math.floor((now - sessionStartTime) / 1000);
    
    // Add final session time to total
    setTotalSessionTime(prev => prev + sessionDuration);
    
    // End current module/section if active
    if (currentModuleId) {
      endModule();
    }
    
    setIsTracking(false);
    setSessionStartTime(null);
    
    // Save session end time
    localStorage.setItem('ftd_session_end', now.toISOString());
    localStorage.setItem('ftd_last_session_duration', sessionDuration.toString());
    
    console.log('Learning session ended. Duration:', sessionDuration, 'seconds');
  }, [sessionStartTime, currentModuleId]);

  // Start tracking time for a specific module
  const startModule = useCallback((moduleId) => {
    const now = new Date();
    
    // End previous module if active
    if (currentModuleId && moduleStartTime) {
      endModule();
    }
    
    setCurrentModuleId(moduleId);
    setModuleStartTime(now);
    setCurrentSectionId(null);
    setSectionStartTime(null);
    
    console.log(`Started tracking module ${moduleId} at:`, now.toISOString());
  }, [currentModuleId, moduleStartTime]);

  // End tracking time for current module
  const endModule = useCallback(() => {
    if (!currentModuleId || !moduleStartTime) return;

    const now = new Date();
    const moduleDuration = Math.floor((now - moduleStartTime) / 1000);
    
    // Add to module times
    setModuleTimes(prev => ({
      ...prev,
      [currentModuleId]: (prev[currentModuleId] || 0) + moduleDuration
    }));
    
    // Add to total session time
    setTotalSessionTime(prev => prev + moduleDuration);
    
    console.log(`Module ${currentModuleId} completed. Duration:`, moduleDuration, 'seconds');
    
    setCurrentModuleId(null);
    setModuleStartTime(null);
  }, [currentModuleId, moduleStartTime]);

  // Start tracking time for a specific section
  const startSection = useCallback((moduleId, sectionId) => {
    const now = new Date();
    
    // End previous section if active
    if (currentSectionId && sectionStartTime) {
      endSection();
    }
    
    setCurrentSectionId(sectionId);
    setSectionStartTime(now);
    
    // Ensure module is being tracked
    if (currentModuleId !== moduleId) {
      startModule(moduleId);
    }
    
    console.log(`Started tracking section ${sectionId} in module ${moduleId} at:`, now.toISOString());
  }, [currentModuleId, currentSectionId, sectionStartTime, startModule]);

  // End tracking time for current section
  const endSection = useCallback(() => {
    if (!currentSectionId || !sectionStartTime) return;

    const now = new Date();
    const sectionDuration = Math.floor((now - sectionStartTime) / 1000);
    const sectionKey = `${currentModuleId}_${currentSectionId}`;
    
    // Add to section times
    setSectionTimes(prev => ({
      ...prev,
      [sectionKey]: (prev[sectionKey] || 0) + sectionDuration
    }));
    
    console.log(`Section ${currentSectionId} completed. Duration:`, sectionDuration, 'seconds');
    
    setCurrentSectionId(null);
    setSectionStartTime(null);
  }, [currentModuleId, currentSectionId, sectionStartTime]);

  // Get formatted time string
  const formatTime = useCallback((seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }, []);

  // Get current session duration
  const getCurrentSessionDuration = useCallback(() => {
    if (!sessionStartTime) return 0;
    return Math.floor((new Date() - sessionStartTime) / 1000);
  }, [sessionStartTime]);

  // Get total learning time across all sessions
  const getTotalLearningTime = useCallback(() => {
    return totalSessionTime + (sessionStartTime ? getCurrentSessionDuration() : 0);
  }, [totalSessionTime, sessionStartTime, getCurrentSessionDuration]);

  // Get time spent on specific module
  const getModuleTime = useCallback((moduleId) => {
    const baseTime = moduleTimes[moduleId] || 0;
    const currentTime = (currentModuleId === moduleId && moduleStartTime) 
      ? Math.floor((new Date() - moduleStartTime) / 1000) 
      : 0;
    return baseTime + currentTime;
  }, [moduleTimes, currentModuleId, moduleStartTime]);

  // Get time spent on specific section
  const getSectionTime = useCallback((moduleId, sectionId) => {
    const sectionKey = `${moduleId}_${sectionId}`;
    const baseTime = sectionTimes[sectionKey] || 0;
    const currentTime = (currentModuleId === moduleId && currentSectionId === sectionId && sectionStartTime) 
      ? Math.floor((new Date() - sectionStartTime) / 1000) 
      : 0;
    return baseTime + currentTime;
  }, [sectionTimes, currentModuleId, currentSectionId, sectionStartTime]);

  // Export time tracking data for evidential purposes
  const exportTimeData = useCallback(() => {
    const data = {
      sessionInfo: {
        sessionStart: sessionStartTime?.toISOString(),
        isActive: isTracking,
        currentModule: currentModuleId,
        currentSection: currentSectionId
      },
      totalTimes: {
        totalLearningTime: getTotalLearningTime(),
        totalSessionTime: totalSessionTime,
        currentSessionDuration: getCurrentSessionDuration()
      },
      moduleTimes: Object.keys(moduleTimes).reduce((acc, moduleId) => {
        acc[moduleId] = {
          totalTime: moduleTimes[moduleId],
          formattedTime: formatTime(moduleTimes[moduleId])
        };
        return acc;
      }, {}),
      sectionTimes: Object.keys(sectionTimes).reduce((acc, sectionKey) => {
        acc[sectionKey] = {
          totalTime: sectionTimes[sectionKey],
          formattedTime: formatTime(sectionTimes[sectionKey])
        };
        return acc;
      }, {}),
      exportTimestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    return data;
  }, [
    sessionStartTime, isTracking, currentModuleId, currentSectionId,
    getTotalLearningTime, totalSessionTime, getCurrentSessionDuration,
    moduleTimes, sectionTimes, formatTime
  ]);

  // Reset all time tracking data
  const resetTimeData = useCallback(() => {
    setSessionStartTime(null);
    setCurrentModuleId(null);
    setCurrentSectionId(null);
    setModuleStartTime(null);
    setSectionStartTime(null);
    setTotalSessionTime(0);
    setModuleTimes({});
    setSectionTimes({});
    setIsTracking(false);
    
    localStorage.removeItem('ftd_time_tracking');
    localStorage.removeItem('ftd_session_start');
    localStorage.removeItem('ftd_session_end');
    localStorage.removeItem('ftd_last_session_duration');
    
    console.log('Time tracking data reset');
  }, []);

  const value = {
    // State
    isTracking,
    sessionStartTime,
    currentModuleId,
    currentSectionId,
    
    // Actions
    startSession,
    endSession,
    startModule,
    endModule,
    startSection,
    endSection,
    
    // Getters
    getCurrentSessionDuration,
    getTotalLearningTime,
    getModuleTime,
    getSectionTime,
    formatTime,
    exportTimeData,
    resetTimeData
  };

  return (
    <TimeTrackingContext.Provider value={value}>
      {children}
    </TimeTrackingContext.Provider>
  );
};
