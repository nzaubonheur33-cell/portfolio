import React from 'react';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="py-16" id="experience">
      <div className="space-y-10">
        <div>
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
              {t('experience.label')}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            {t('experience.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            {t('experience.subtitle')}
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-20 h-12 rounded-2xl bg-primary-fixed/50 flex items-center justify-center text-primary shrink-0">
                  <img src="image copy 2.png" alt="SODEICO Logo" className="h-8 w-16 object-contain hover:opacity-80 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                    SODEICO MANPOWER
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {t('experience.items.sodeico.role')}
                  </p>
                </div>
              </div>
              <div className="font-label-code text-label-badge text-primary bg-surface-container px-3.5 py-1.5 rounded-full self-start md:self-auto font-medium">
                {t('experience.items.sodeico.date')}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-surface-container-high/60 font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span>{t('experience.items.sodeico.task1')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span>{t('experience.items.sodeico.task2')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span>{t('experience.items.sodeico.task3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
