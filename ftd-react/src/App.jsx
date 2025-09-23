import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { TimeTrackingProvider } from './contexts/TimeTrackingContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Tests from './pages/Tests';
import Glossary from './pages/Glossary';
import Guide from './pages/Guide';
import TimeReports from './pages/TimeReports';
import Navigation from './components/Navigation';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/modules" 
          element={
            <ProtectedRoute>
              <Modules />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tests" 
          element={
            <ProtectedRoute>
              <Tests />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/glossary" 
          element={
            <ProtectedRoute>
              <Glossary />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/guide" 
          element={
            <ProtectedRoute>
              <Guide />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/time-reports" 
          element={
            <ProtectedRoute>
              <TimeReports />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <TimeTrackingProvider>
        <Router>
          <AppContent />
        </Router>
      </TimeTrackingProvider>
    </AuthProvider>
  );
}

export default App;