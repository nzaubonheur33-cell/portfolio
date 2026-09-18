import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

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

  const getNavClass = (path) => {
    const isActive = activeSection === path || (activeSection === 'hero' && path === 'home');
    const activeClasses = "bg-surface-container text-primary font-semibold";
    const inactiveClasses = "text-on-surface-variant hover:text-on-surface transition-colors";
    return `px-3.5 py-1.5 rounded-full transition-colors ${isActive ? activeClasses : inactiveClasses}`;
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
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1120px] mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 shrink-0">
          <a
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, 'hero', 'home')}
          >
            <img src="assets/logo.png" alt="Logo" className="h-12 w-12 object-contain group-hover:opacity-80 transition-opacity" />
          </a>
        </div>
        <nav
          className="hidden lg:flex items-center gap-1 p-1 bg-surface-container-lowest rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
        >
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero', 'home')} className={getNavClass('home')}>{t('nav.home')}</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about', 'about')} className={getNavClass('about')}>{t('nav.about')}</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills', 'skills')} className={getNavClass('skills')}>{t('nav.skills')}</a>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services', 'services')} className={getNavClass('services')}>{t('nav.services')}</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects', 'projects')} className={getNavClass('projects')}>{t('nav.projects')}</a>
          <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience', 'experience')} className={getNavClass('experience')}>{t('nav.experience')}</a>
          <a href="#education" onClick={(e) => handleSmoothScroll(e, 'education', 'education')} className={getNavClass('education')}>{t('nav.education')}</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact', 'contact')} className={getNavClass('contact')}>{t('nav.contact')}</a>
        </nav>
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center bg-surface-container-low p-1 rounded-full text-label-badge font-label-badge">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-0.5 rounded-full transition-all ${i18n.language === 'en' ? 'bg-surface-container-lowest text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
              type="button"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`px-2 py-0.5 rounded-full transition-all ${i18n.language === 'fr' ? 'bg-surface-container-lowest text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
              type="button"
            >
              FR
            </button>
          </div>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary rounded-full font-label-badge text-label-badge hover:bg-primary transition-all shadow-[0_2px_10px_-2px_rgba(249,115,22,0.3)]"
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact', 'contact')}
          >
            <span>{t('nav.letsTalk')}</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
