import React from 'react';
import { useTranslation } from 'react-i18next';

function Learning() {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Continuous Growth Banner */}
        <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <span className="font-label-code text-label-code text-primary uppercase font-bold">
              {t('learning.label')}
            </span>
            <h3 className="font-headline-lg text-headline-md text-on-surface font-bold mt-1">
              {t('learning.title')}
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
              {t('learning.quote')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-surface-container-low rounded-xl">
              <p className="font-label-code text-[11px] text-primary font-bold">
                {t('learning.focus.title1')}
              </p>
              <p className="font-headline-sm text-[13px] font-semibold text-on-surface mt-1">
                {t('learning.focus.desc1')}
              </p>
            </div>
            <div className="p-3 bg-surface-container-low rounded-xl">
              <p className="font-label-code text-[11px] text-primary font-bold">
                {t('learning.focus.title2')}
              </p>
              <p className="font-headline-sm text-[13px] font-semibold text-on-surface mt-1">
                {t('learning.focus.desc2')}
              </p>
            </div>
            <div className="p-3 bg-surface-container-low rounded-xl">
              <p className="font-label-code text-[11px] text-primary font-bold">
                {t('learning.focus.title3')}
              </p>
              <p className="font-headline-sm text-[13px] font-semibold text-on-surface mt-1">
                {t('learning.focus.desc3')}
              </p>
            </div>
          </div>
        </div>
        {/* Spoken Languages Card */}
        <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <span className="font-label-code text-label-code text-primary uppercase font-bold">
              {t('learning.languages.label')}
            </span>
            <h3 className="font-headline-lg text-headline-md text-on-surface font-bold mt-1">
              {t('learning.languages.title')}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              {t('learning.languages.subtitle')}
            </p>
          </div>
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
              <span className="font-headline-sm text-[14px] font-semibold text-on-surface">
                {t('learning.languages.items.french.name')}
              </span>
              <span className="font-label-badge text-label-badge text-primary bg-surface-container-lowest px-2.5 py-0.5 rounded-full font-semibold">
                {t('learning.languages.items.french.level')}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
              <span className="font-headline-sm text-[14px] font-semibold text-on-surface">
                {t('learning.languages.items.english.name')}
              </span>
              <span className="font-label-badge text-label-badge text-primary bg-surface-container-lowest px-2.5 py-0.5 rounded-full font-semibold">
                {t('learning.languages.items.english.level')}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
              <span className="font-headline-sm text-[14px] font-semibold text-on-surface">
                {t('learning.languages.items.lingala.name')}
              </span>
              <span className="font-label-badge text-label-badge text-on-surface-variant bg-surface-container-lowest px-2.5 py-0.5 rounded-full">
                {t('learning.languages.items.lingala.level')}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
              <span className="font-headline-sm text-[14px] font-semibold text-on-surface">
                {t('learning.languages.items.swahili.name')}
              </span>
              <span className="font-label-badge text-label-badge text-on-surface-variant bg-surface-container-lowest px-2.5 py-0.5 rounded-full">
                {t('learning.languages.items.swahili.level')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learning;
