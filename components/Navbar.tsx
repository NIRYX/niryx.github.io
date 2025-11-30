import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Handle scroll effect (hide on down, show on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.games'), path: '/games' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out border-b border-primary/20 backdrop-blur-md bg-background/85 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40 group-hover:bg-primary/30 transition-colors">
                 <span className="text-primary font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">Niryx Studio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-text hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-primary/20 shadow-2xl transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium py-2 border-l-2 pl-4 transition-colors ${
                 isActive(link.path)
                 ? 'border-primary text-primary bg-primary/5' 
                 : 'border-transparent text-muted hover:text-white hover:border-white/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;