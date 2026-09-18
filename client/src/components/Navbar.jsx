import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu au clic en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const getNavClass = (path) => {
    const isActive = activeSection === path || (activeSection === 'hero' && path === 'home');
    const activeClasses = 'bg-surface-container text-primary font-semibold';
    const inactiveClasses = 'text-on-surface-variant hover:text-on-surface transition-colors';
    return `px-3.5 py-1.5 rounded-full transition-colors ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getMobileNavClass = (path) => {
    const isActive = activeSection === path || (activeSection === 'hero' && path === 'home');
    return `flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-colors ${
      isActive
        ? 'bg-primary-container/20 text-primary font-semibold border-l-2 border-primary pl-3'
        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
    }`;
  };

  const handleSmoothScroll = (e, targetId, path) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerOffset = 80;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(path);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'hero',       path: 'home',       icon: 'home',          label: t('nav.home') },
    { id: 'about',      path: 'about',      icon: 'person',        label: t('nav.about') },
    { id: 'skills',     path: 'skills',     icon: 'code',          label: t('nav.skills') },
    { id: 'services',   path: 'services',   icon: 'design_services',label: t('nav.services') },
    { id: 'projects',   path: 'projects',   icon: 'folder_open',   label: t('nav.projects') },
    { id: 'experience', path: 'experience', icon: 'work',          label: t('nav.experience') },
    { id: 'education',  path: 'education',  icon: 'school',        label: t('nav.education') },
    { id: 'contact',    path: 'contact',    icon: 'mail',          label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      {/* Barre principale */}
      <div className="h-16 md:h-20 max-w-[1120px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-3">

        {/* Logo */}
        <a
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg shrink-0"
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero', 'home')}
        >
          <img src="/logo.png" alt="Logo Bonheur Nzau" className="h-9 w-9 md:h-11 md:w-11 object-contain group-hover:opacity-80 transition-opacity" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-surface-container-lowest rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleSmoothScroll(e, link.id, link.path)}
              className={getNavClass(link.path)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Language switcher — visible partout */}
          <div className="flex items-center bg-surface-container-low p-0.5 rounded-full text-[12px] font-semibold gap-0.5">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                i18n.language === 'en'
                  ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                i18n.language === 'fr'
                  ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              FR
            </button>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* CTA — masqué sur très petit écran */}
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary rounded-full text-[13px] font-bold hover:bg-primary transition-all shadow-[0_2px_10px_-2px_rgba(249,115,22,0.3)]"
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact', 'contact')}
          >
            <span>{t('nav.letsTalk')}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>

          {/* Hamburger — visible uniquement en dessous de lg */}
          <button
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] bg-surface-container-low rounded-lg text-on-surface hover:bg-surface-container transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-[18px] h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-[18px] h-[2px] bg-current rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-[18px] h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface/98 backdrop-blur-xl border-t border-surface-container shadow-2xl">
          <nav className="flex flex-col p-4 gap-1 overflow-y-auto max-h-[75vh]">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id, link.path)}
                className={getMobileNavClass(link.path)}
              >
                <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}

            {/* Divider */}
            <div className="my-2 border-t border-surface-container"></div>

            {/* CTA en pleine largeur sur mobile */}
            <a
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary-container text-on-primary rounded-xl font-bold hover:bg-primary transition-all shadow-sm text-[15px]"
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact', 'contact')}
            >
              <span>{t('nav.letsTalk')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
