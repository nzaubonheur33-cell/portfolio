import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const servicesList = [
    {
      id: '01',
      icon: 'devices',
      i18nKey: 'webDev',
      tags: 'React • Next.js • Responsive Design',
    },
    {
      id: '02',
      icon: 'layers',
      i18nKey: 'fullStack',
      tags: 'Frontend + Backend + DB Architecture',
    },
    {
      id: '03',
      icon: 'api',
      i18nKey: 'api',
      tags: 'Express • Python • JWT • WebSockets',
    },
    {
      id: '04',
      icon: 'inventory_2',
      i18nKey: 'saas',
      tags: 'MVP Delivery • Product Logic • User Flows',
    },
    {
      id: '05',
      icon: 'school',
      i18nKey: 'edtech',
      tags: 'Social Utility • Accessibility • Content Discovery',
    },
    {
      id: '06',
      icon: 'terminal',
      i18nKey: 'linux',
      tags: 'Ubuntu/Debian • Nginx • Cisco Networking',
    },
  ];

  return (
    <section className="py-16" id="services">
      <div className="space-y-10">
        <div>
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
              {t('services.label')}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            {t('services.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-code text-headline-sm text-primary font-bold">
                    {srv.id}
                  </span>
                  <span className="material-symbols-outlined text-primary-container text-[24px]">
                    {srv.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm text-on-surface font-bold mb-2">
                  {t(`services.items.${srv.i18nKey}.title`)}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {t(`services.items.${srv.i18nKey}.desc`)}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container-high/50 font-label-code text-[11px] text-on-surface-variant">
                {srv.tags}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
