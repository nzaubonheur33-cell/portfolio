import React from 'react';
import { useTranslation } from 'react-i18next';

function BeyondCode() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
            {t('beyondCode.label')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            {t('beyondCode.title')}
          </h2>
          <blockquote className="font-body-lg text-body-lg text-on-surface italic border-l-2 border-primary-container pl-4">
            {t('beyondCode.quote')}
          </blockquote>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI & Neural Networks */}
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-[22px]">neurology</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              {t('beyondCode.items.ai.title')}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {t('beyondCode.items.ai.desc')}
            </p>
          </div>
          {/* Linux Kernel & Shell */}
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-secondary-container/50 flex items-center justify-center text-secondary mb-4">
              <span className="material-symbols-outlined text-[22px]">terminal</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              {t('beyondCode.items.linux.title')}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {t('beyondCode.items.linux.desc')}
            </p>
          </div>
          {/* Computer Networking */}
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-[22px]">lan</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              {t('beyondCode.items.networking.title')}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {t('beyondCode.items.networking.desc')}
            </p>
          </div>
          {/* Clean Architecture */}
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[22px]">architecture</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              {t('beyondCode.items.architecture.title')}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {t('beyondCode.items.architecture.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
