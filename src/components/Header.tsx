import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Code2 className="w-8 h-8 text-emerald-600 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold text-gray-900">Mohit Bhirani</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600"></span>
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
