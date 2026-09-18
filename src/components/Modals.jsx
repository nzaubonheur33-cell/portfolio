import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Modals() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null); // 'caseStudy', 'success'
  const [successName, setSuccessName] = useState('');

  useEffect(() => {
    const handleCaseStudy = () => setActiveModal('caseStudy');
    const handleSuccess = (e) => {
      setSuccessName(e.detail || 'Friend');
      setActiveModal('success');
    };

    window.addEventListener('openCaseStudy', handleCaseStudy);
    window.addEventListener('openSuccess', handleSuccess);

    return () => {
      window.removeEventListener('openCaseStudy', handleCaseStudy);
      window.removeEventListener('openSuccess', handleSuccess);
    };
  }, []);

  const closeModal = () => setActiveModal(null);

  if (!activeModal) return null;

  return (
    <>
      {activeModal === 'caseStudy' && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={closeModal}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <div className="space-y-1">
              <span className="font-label-code text-label-code text-primary font-bold">
                {t('modals.caseStudy.label')}
              </span>
              <h3 className="font-headline-lg text-headline-md text-on-surface font-bold">
                {t('modals.caseStudy.title')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t('modals.caseStudy.subtitle')}
              </p>
            </div>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="font-headline-sm text-[15px] font-bold text-on-surface mb-1">
                  {t('modals.caseStudy.highlightsTitle')}
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {t('modals.caseStudy.highlights', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-headline-sm text-[15px] font-bold text-on-surface mb-1">
                  {t('modals.caseStudy.challengesTitle')}
                </p>
                <p>{t('modals.caseStudy.challengesDesc')}</p>
              </div>
              <div>
                <p className="font-headline-sm text-[15px] font-bold text-on-surface mb-1">
                  {t('modals.caseStudy.repoTitle')}
                </p>
                <a
                  className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                  href="https://github.com/bonheur84/CampusGuide"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  <span>github.com/bonheur84/CampusGuide</span>
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-surface-container-high flex justify-end">
              <button
                className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface font-headline-sm text-body-md hover:bg-surface-container-high transition-colors"
                onClick={closeModal}
                type="button"
              >
                {t('modals.caseStudy.close')}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'success' && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl max-w-md w-full p-8 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-headline-lg text-headline-md text-on-surface font-bold">
              {t('modals.success.title')}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t('modals.success.desc1')}{' '}
              <span className="font-semibold text-on-surface">{successName}</span>
              {t('modals.success.desc2')}{' '}
              <strong className="text-primary">nzaubonheur84@gmail.com</strong>
              {t('modals.success.desc3')}
            </p>
            <button
              className="w-full py-3 rounded-full bg-primary-container text-on-primary font-headline-sm text-body-md hover:bg-primary transition-all"
              onClick={closeModal}
              type="button"
            >
              {t('modals.success.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modals;
