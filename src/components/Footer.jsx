import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    localStorage.setItem('i18nextLng', lng);
  };

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <footer className="w-full bg-surface-container-lowest py-16 shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-12">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <img src="assets/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              {t('footer.subtitle')}
            </p>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-label-code text-label-code pt-1">
              <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
              <span>{t('footer.location')}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant pt-2">
              {t('footer.desc')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-primary-fixed flex items-center justify-center transition-colors"
                href="https://github.com/bonheur84"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-5 h-5 object-contain" style={{ filter: 'var(--github-filter, none)' }} />
              </a>
              <a
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-primary-fixed flex items-center justify-center transition-colors"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
              <a
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-primary-fixed flex items-center justify-center transition-colors"
                href="https://www.instagram.com/boo_nheur/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a
                aria-label="Email Contact"
                className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-primary-fixed flex items-center justify-center transition-colors"
                href="mailto:nzaubonheur84@gmail.com"
              >
                <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Email" className="w-5 h-5 object-contain" />
              </a>
            </div>
            <div className="flex items-center gap-3 pl-0 sm:pl-6">
              <div className="flex items-center bg-surface-container-low p-1 rounded-full text-label-badge font-label-badge">
                <button
                  className={`px-2 py-0.5 rounded-full ${i18n.language === 'en' ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : 'text-on-surface-variant hover:text-on-surface'}`}
                  type="button"
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </button>
                <button
                  className={`px-2 py-0.5 rounded-full ${i18n.language === 'fr' ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : 'text-on-surface-variant hover:text-on-surface'}`}
                  type="button"
                  onClick={() => changeLanguage('fr')}
                >
                  FR
                </button>
              </div>
              <button
                aria-label="Toggle theme in footer"
                className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                type="button"
                onClick={toggleTheme}
              >
                <span className="material-symbols-outlined text-[18px]">light_mode</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-md text-body-md text-on-surface-variant">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-on-surface transition-colors" href="#projects">
              {t('footer.links.projects')}
            </a>
            <a className="hover:text-on-surface transition-colors" href="#contact">
              {t('footer.links.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
