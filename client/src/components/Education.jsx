import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-16" id="education">
        <div className="space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
                {t('education.label')}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              {t('education.title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
              {t('education.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Université Nouveaux Horizons */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/30 rounded-bl-full pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-badge text-label-badge">
                    <span className="w-2 h-2 rounded-full bg-surface animate-pulse"></span>
                    <span>{t('education.items.unh.status')}</span>
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    {t('education.items.unh.date')}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                  {t('education.items.unh.degree')}
                </h3>
                <p className="font-body-lg text-body-md text-primary font-semibold mt-1">
                  {t('education.items.unh.specialty')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {t('education.items.unh.school')}
                </p>
              </div>
              <p className="font-label-code text-[11px] text-on-surface-variant pt-4 mt-4 border-t border-surface-container-high/60">
                {t('education.items.unh.tags')}
              </p>
            </div>
            {/* INPP */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-badge text-label-badge">
                    {t('education.items.inpp.status')}
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    {t('education.items.inpp.date')}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                  {t('education.items.inpp.degree')}
                </h3>
                <p className="font-body-lg text-body-md text-secondary font-semibold mt-1">
                  {t('education.items.inpp.specialty')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {t('education.items.inpp.school')}
                </p>
              </div>
              <p className="font-label-code text-[11px] text-on-surface-variant pt-4 mt-4 border-t border-surface-container-high/60">
                {t('education.items.inpp.tags')}
              </p>
            </div>
            {/* NUST English */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-badge text-label-badge">
                    {t('education.items.nust.status')}
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    {t('education.items.nust.date')}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                  {t('education.items.nust.degree')}
                </h3>
                <p className="font-body-lg text-body-md text-secondary font-semibold mt-1">
                  {t('education.items.nust.specialty')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {t('education.items.nust.school')}
                </p>
              </div>
              <p className="font-label-code text-[11px] text-on-surface-variant pt-4 mt-4 border-t border-surface-container-high/60">
                {t('education.items.nust.tags')}
              </p>
            </div>
            {/* Collège Tutazamie */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-badge text-label-badge">
                    {t('education.items.college.status')}
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    {t('education.items.college.date')}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                  {t('education.items.college.degree')}
                </h3>
                <p className="font-body-lg text-body-md text-secondary font-semibold mt-1">
                  {t('education.items.college.specialty')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {t('education.items.college.school')}
                </p>
              </div>
              <p className="font-label-code text-[11px] text-on-surface-variant pt-4 mt-4 border-t border-surface-container-high/60">
                {t('education.items.college.tags')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12">
        <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase font-bold">
                {t('education.certifications.label')}
              </span>
              <h3 className="font-headline-lg text-headline-md text-on-surface font-bold mt-0.5">
                {t('education.certifications.title')}
              </h3>
            </div>
            <span className="material-symbols-outlined text-primary text-[32px]">verified</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface-container-low rounded-2xl flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] shrink-0">network_check</span>
              <div>
                <p className="font-headline-sm text-[15px] font-bold text-on-surface">
                  {t('education.certifications.networkTitle')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  {t('education.certifications.networkDesc')}
                </p>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low rounded-2xl flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] shrink-0">router</span>
              <div>
                <p className="font-headline-sm text-[15px] font-bold text-on-surface">
                  {t('education.certifications.ciscoTitle')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  {t('education.certifications.ciscoDesc')}
                </p>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low rounded-2xl flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] shrink-0">badge</span>
              <div>
                <p className="font-headline-sm text-[15px] font-bold text-on-surface">
                  {t('education.certifications.inppTitle')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  {t('education.certifications.inppDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
