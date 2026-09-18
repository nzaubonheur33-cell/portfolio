import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();
  const [bioLang, setBioLang] = useState(i18n.language);

  // Sync the bio switcher if global language changes
  useEffect(() => {
    setBioLang(i18n.language);
  }, [i18n.language]);

  return (
    <section className="py-16" id="about">
      <div className="flex flex-col space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
                {t('about.label')}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              {t('about.title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
              {t('about.subtitle')}
            </p>
          </div>
          {/* Language Bio Switcher */}
          <div className="inline-flex bg-surface-container-low p-1 rounded-xl font-label-badge text-label-badge self-start md:self-auto">
            <button
              className={`px-3 py-1.5 rounded-lg transition-all ${
                bioLang === 'en'
                  ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setBioLang('en')}
              type="button"
            >
              {t('about.btnEn')}
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-all ${
                bioLang === 'fr'
                  ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setBioLang('fr')}
              type="button"
            >
              {t('about.btnFr')}
            </button>
          </div>
        </div>
        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Illustration */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[340px] bg-surface-container-lowest rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
              <svg className="w-full h-auto" fill="none" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
                <path d="M 60 220 L 60 110 C 60 60 220 60 220 110 L 220 220 Z" fill="#F5F3EF" stroke="#1B1C1A" strokeWidth="2.5"></path>
                <line stroke="#1B1C1A" strokeWidth="2" x1="140" x2="140" y1="65" y2="220"></line>
                <line stroke="#1B1C1A" strokeWidth="2" x1="60" x2="220" y1="130" y2="130"></line>
                <path d="M 85 95 C 90 90 100 90 105 95 C 112 95 116 102 110 108 L 82 108 Z" fill="#FFFFFF"></path>
                <circle cx="140" cy="165" fill="#FBF9F5" r="22" stroke="#1B1C1A" strokeWidth="2.5"></circle>
                <path d="M 120 160 C 122 145 135 140 150 142 C 160 144 163 155 158 165 C 150 158 140 155 128 158 Z" fill="#1B1C1A"></path>
                <path d="M 105 220 C 110 195 125 188 140 188 C 155 188 170 195 175 220 Z" fill="#FFFFFF" stroke="#1B1C1A" strokeWidth="2.5"></path>
                <rect fill="#F97316" height="22" rx="3" stroke="#1B1C1A" strokeWidth="2" width="18" x="170" y="195"></rect>
                <path d="M 188 200 C 194 200 194 212 188 212" fill="none" stroke="#1B1C1A" strokeWidth="2"></path>
                <path d="M 175 190 Q 177 184 175 178" fill="none" stroke="#9D4300" strokeLinecap="round" strokeWidth="1.5"></path>
                <path d="M 182 190 Q 184 184 182 178" fill="none" stroke="#9D4300" strokeLinecap="round" strokeWidth="1.5"></path>
              </svg>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-4">
                {t('about.name')}
              </p>
              <p className="font-label-code text-label-code text-primary font-medium">
                {t('about.role')}
              </p>
            </div>
          </div>
          {/* Right: Dynamic Bio Text */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            {bioLang === 'en' && (
              <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t('about.bio1', { lng: 'en' }) }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('about.bio2', { lng: 'en' }) }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('about.bio3', { lng: 'en' }) }}></p>
              </div>
            )}
            {bioLang === 'fr' && (
              <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t('about.bio1', { lng: 'fr' }) }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('about.bio2', { lng: 'fr' }) }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('about.bio3', { lng: 'fr' }) }}></p>
              </div>
            )}
            
            {/* 6 Value Traits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">psychology</span>
                <div>
                  <p className="font-headline-sm text-[14px] leading-tight text-on-surface font-semibold">
                    {t('about.traits.problemSolver')}
                  </p>
                  <p className="font-label-code text-[11px] text-on-surface-variant mt-0.5">
                    {t('about.traits.problemSolverDesc')}
                  </p>
                </div>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">menu_book</span>
                <div>
                  <p className="font-headline-sm text-[14px] leading-tight text-on-surface font-semibold">
                    {t('about.traits.alwaysLearning')}
                  </p>
                  <p className="font-label-code text-[11px] text-on-surface-variant mt-0.5">
                    {t('about.traits.alwaysLearningDesc')}
                  </p>
                </div>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">filter_center_focus</span>
                <div>
                  <p className="font-headline-sm text-[14px] leading-tight text-on-surface font-semibold">
                    {t('about.traits.detailOriented')}
                  </p>
                  <p className="font-label-code text-[11px] text-on-surface-variant mt-0.5">
                    {t('about.traits.detailOrientedDesc')}
                  </p>
                </div>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">group</span>
                <div>
                  <p className="font-headline-sm text-[14px] leading-tight text-on-surface font-semibold">
                    {t('about.traits.teamPlayer')}
                  </p>
                  <p className="font-label-code text-[11px] text-on-surface-variant mt-0.5">
                    {t('about.traits.teamPlayerDesc')}
                  </p>
                </div>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">code</span>
                <div>
                  <p className="font-headline-sm text-[14px] leading-tight text-on-surface font-semibold">
                    {t('about.traits.cleanCode')}
                  </p>
                  <p className="font-label-code text-[11px] text-on-surface-variant mt-0.5">
                    {t('about.traits.cleanCodeDesc')}
                  </p>
                </div>
              </div>
              <div className="p-3.5 bg-surface-container-low rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">lightbulb</span>
                <div>
                  <p className="font-headline-sm text-[14px] leading-tight text-on-surface font-semibold">
                    {t('about.traits.curiousMind')}
                  </p>
                  <p className="font-label-code text-[11px] text-on-surface-variant mt-0.5">
                    {t('about.traits.curiousMindDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
