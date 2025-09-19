import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, BookOpen, Brain, Search, HelpCircle, Clock } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userEmail, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Modules', href: '/modules', icon: '📚' },
    { name: 'Tests', href: '/tests', icon: '🧠' },
    { name: 'Glossary', href: '/glossary', icon: '📖' },
    { name: 'Time Reports', href: '/time-reports', icon: '⏱️' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="gradient-bg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚜</span>
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">Forward Tipping Dumper</h1>
                <p className="text-sm text-white/80">Skills Bootcamp</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Info and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-white truncate max-w-xs">
                {userEmail}
              </p>
              <p className="text-xs text-white/70">Student Portal</p>
            </div>
            <Link
              to="/guide"
              className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors flex items-center space-x-2"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Guide</span>
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/20">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-white truncate">
                    {userEmail}
                  </p>
                  <p className="text-xs text-white/70">Student Portal</p>
                </div>
                <div className="mt-2 space-y-2">
                  <Link
                    to="/guide"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>Guide</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors w-full text-left"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
