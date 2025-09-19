import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on mount
    const checkAuth = () => {
      try {
        const authStatus = localStorage.getItem('isAuthenticated');
        const email = localStorage.getItem('userEmail');
        
        if (authStatus === 'true' && email) {
          setIsAuthenticated(true);
          setUserEmail(email);
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (email, password) => {
    // Simple validation for demo purposes
    if (email === 'student@example.com' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('loginTime', new Date().toISOString());
      setIsAuthenticated(true);
      setUserEmail(email);
      return { success: true };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('loginTime');
    setIsAuthenticated(false);
    setUserEmail('');
  };

  const value = {
    isAuthenticated,
    userEmail,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
