import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', isSection: true },
    { href: '#skills', label: 'Skills', isSection: true },
    { href: '#projects', label: 'Projects', isSection: true },
    { href: '#experience', label: 'Experience', isSection: true },
    { href: '#contact', label: 'Contact', isSection: true },
    { href: '/blog', label: 'Blog', isSection: false },
    { href: '/links', label: 'Links', isSection: false },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isSection) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = '/' + item.href;
      } else {
        scrollToSection(item.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            KG
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-slate-300 hover:text-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-800/95 rounded-lg backdrop-blur-sm">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};