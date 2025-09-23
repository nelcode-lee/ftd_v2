import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const TimeTrackingContext = createContext();

export const useTimeTracking = () => {
  const context = useContext(TimeTrackingContext);
  if (!context) {
    throw new Error('useTimeTracking must be used within a TimeTrackingProvider');
  }
  return context;
};

export const TimeTrackingProvider = ({ children }) => {
  // Session tracking
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [totalSessionTime, setTotalSessionTime] = useState(0);
  
  // Module tracking
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [moduleStartTime, setModuleStartTime] = useState(null);
  const [moduleTimes, setModuleTimes] = useState({});
  
  // Section tracking
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [sectionStartTime, setSectionStartTime] = useState(null);
  const [sectionTimes, setSectionTimes] = useState({});
  
  // Use refs to avoid dependency issues in useEffect
  const sessionStartRef = useRef(null);
  const moduleStartRef = useRef(null);
  const sectionStartRef = useRef(null);

  // Debounced save function to prevent excessive localStorage writes
  const saveToStorage = useCallback((data) => {
    try {
      localStorage.setItem('timeTrackingData', JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save time tracking data:', error);
    }
  }, []);

  // Load data from localStorage on initialization
  const loadFromStorage = useCallback(() => {
    try {
      const saved = localStorage.getItem('timeTrackingData');
      if (saved) {
        const data = JSON.parse(saved);
        setTotalSessionTime(data.totalSessionTime || 0);
        setModuleTimes(data.moduleTimes || {});
        setSectionTimes(data.sectionTimes || {});
      }
    } catch (error) {
      console.warn('Failed to load time tracking data:', error);
    }
  }, []);

  // Session management
  const startSession = useCallback(() => {
    const now = Date.now();
    setSessionStartTime(now);
    sessionStartRef.current = now;
    loadFromStorage();
  }, [loadFromStorage]);

  const endSession = useCallback(() => {
    if (sessionStartRef.current) {
      const sessionDuration = Date.now() - sessionStartRef.current;
      const newTotalTime = totalSessionTime + sessionDuration;
      setTotalSessionTime(newTotalTime);
      
      // Save to localStorage
      saveToStorage({
        totalSessionTime: newTotalTime,
        moduleTimes,
        sectionTimes,
        lastUpdated: Date.now()
      });
      
      setSessionStartTime(null);
      sessionStartRef.current = null;
    }
  }, [totalSessionTime, moduleTimes, sectionTimes, saveToStorage]);

  // Module management
  const startModule = useCallback((moduleId) => {
    // End current module if exists
    if (currentModuleId && moduleStartRef.current) {
      const duration = Date.now() - moduleStartRef.current;
      setModuleTimes(prev => ({
        ...prev,
        [currentModuleId]: (prev[currentModuleId] || 0) + duration
      }));
    }
    
    // Start new module
    const now = Date.now();
    setCurrentModuleId(moduleId);
    setModuleStartTime(now);
    moduleStartRef.current = now;
  }, [currentModuleId]);

  const endModule = useCallback(() => {
    if (currentModuleId && moduleStartRef.current) {
      const duration = Date.now() - moduleStartRef.current;
      setModuleTimes(prev => {
        const updated = {
          ...prev,
          [currentModuleId]: (prev[currentModuleId] || 0) + duration
        };
        
        // Save to localStorage
        saveToStorage({
          totalSessionTime,
          moduleTimes: updated,
          sectionTimes,
          lastUpdated: Date.now()
        });
        
        return updated;
      });
    }
    
    setCurrentModuleId(null);
    setModuleStartTime(null);
    moduleStartRef.current = null;
  }, [currentModuleId, totalSessionTime, sectionTimes, saveToStorage]);

  // Section management
  const startSection = useCallback((sectionId) => {
    // End current section if exists
    if (currentSectionId && sectionStartRef.current) {
      const duration = Date.now() - sectionStartRef.current;
      setSectionTimes(prev => ({
        ...prev,
        [currentSectionId]: (prev[currentSectionId] || 0) + duration
      }));
    }
    
    // Start new section
    const now = Date.now();
    setCurrentSectionId(sectionId);
    setSectionStartTime(now);
    sectionStartRef.current = now;
  }, [currentSectionId]);

  const endSection = useCallback(() => {
    if (currentSectionId && sectionStartRef.current) {
      const duration = Date.now() - sectionStartRef.current;
      setSectionTimes(prev => {
        const updated = {
          ...prev,
          [currentSectionId]: (prev[currentSectionId] || 0) + duration
        };
        
        // Save to localStorage
        saveToStorage({
          totalSessionTime,
          moduleTimes,
          sectionTimes: updated,
          lastUpdated: Date.now()
        });
        
        return updated;
      });
    }
    
    setCurrentSectionId(null);
    setSectionStartTime(null);
    sectionStartRef.current = null;
  }, [currentSectionId, totalSessionTime, moduleTimes, saveToStorage]);

  // Get formatted time
  const formatTime = useCallback((milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }, []);

  // Get current session time
  const getCurrentSessionTime = useCallback(() => {
    if (sessionStartRef.current) {
      return Date.now() - sessionStartRef.current;
    }
    return 0;
  }, []);

  // Get current module time
  const getCurrentModuleTime = useCallback(() => {
    if (moduleStartRef.current) {
      return Date.now() - moduleStartRef.current;
    }
    return 0;
  }, []);

  // Get time for specific module
  const getModuleTime = useCallback((moduleId) => {
    let time = moduleTimes[moduleId] || 0;
    if (currentModuleId === moduleId && moduleStartRef.current) {
      time += Date.now() - moduleStartRef.current;
    }
    return time;
  }, [moduleTimes, currentModuleId]);

  // Get time for specific section
  const getSectionTime = useCallback((sectionId) => {
    let time = sectionTimes[sectionId] || 0;
    if (currentSectionId === sectionId && sectionStartRef.current) {
      time += Date.now() - sectionStartRef.current;
    }
    return time;
  }, [sectionTimes, currentSectionId]);

  // Generate time report
  const getTimeReport = useCallback(() => {
    const currentSession = getCurrentSessionTime();
    return {
      totalSessionTime: totalSessionTime + currentSession,
      currentSessionTime: currentSession,
      moduleTimes: Object.keys(moduleTimes).reduce((acc, moduleId) => {
        acc[moduleId] = getModuleTime(moduleId);
        return acc;
      }, {}),
      sectionTimes: Object.keys(sectionTimes).reduce((acc, sectionId) => {
        acc[sectionId] = getSectionTime(sectionId);
        return acc;
      }, {}),
      isSessionActive: !!sessionStartRef.current,
      currentModule: currentModuleId,
      currentSection: currentSectionId
    };
  }, [totalSessionTime, moduleTimes, sectionTimes, currentModuleId, currentSectionId, getCurrentSessionTime, getModuleTime, getSectionTime]);

  const value = {
    // Session management
    startSession,
    endSession,
    getCurrentSessionTime,
    
    // Module management
    startModule,
    endModule,
    getCurrentModuleTime,
    getModuleTime,
    currentModuleId,
    
    // Section management
    startSection,
    endSection,
    getSectionTime,
    currentSectionId,
    
    // Utilities
    formatTime,
    getTimeReport,
    
    // State
    sessionStartTime,
    totalSessionTime,
    moduleTimes,
    sectionTimes
  };

  return (
    <TimeTrackingContext.Provider value={value}>
      {children}
    </TimeTrackingContext.Provider>
  );
};
