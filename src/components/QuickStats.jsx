import React from 'react';
import { useTranslation } from 'react-i18next';

function QuickStats() {
  const { t } = useTranslation();

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-code text-label-code text-primary font-semibold mb-1">
            {t('stats.stat1.label')}
          </p>
          <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {t('stats.stat1.title')}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {t('stats.stat1.subtitle')}
          </p>
        </div>
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-code text-label-code text-primary font-semibold mb-1">
            {t('stats.stat2.label')}
          </p>
          <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {t('stats.stat2.title')}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {t('stats.stat2.subtitle')}
          </p>
        </div>
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-code text-label-code text-primary font-semibold mb-1">
            {t('stats.stat3.label')}
          </p>
          <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {t('stats.stat3.title')}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {t('stats.stat3.subtitle')}
          </p>
        </div>
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-code text-label-code text-primary font-semibold mb-1">
            {t('stats.stat4.label')}
          </p>
          <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {t('stats.stat4.title')}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {t('stats.stat4.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuickStats;
