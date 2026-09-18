import React from 'react';
import { useTranslation } from 'react-i18next';

function Process() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
            {t('process.label')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            {t('process.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t('process.subtitle')}
          </p>
        </div>
        <div className="relative w-full max-w-[1120px] mx-auto pt-8">
          <div className="hidden lg:block absolute top-[60px] left-[7%] right-[7%] border-t-2 border-dashed border-gray-300 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-2 relative z-10">
            {/* 01 Discover */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#f96e1b] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#f96e1b]/30">
                <span className="material-symbols-outlined text-[24px]">search</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">01</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.discover.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.discover.desc')}
              </p>
            </div>
            
            {/* 02 Plan */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent">
              <div className="w-14 h-14 rounded-full bg-white border-[1.5px] border-gray-200 flex items-center justify-center text-[#f96e1b] mb-4">
                <span className="material-symbols-outlined text-[24px]">content_paste</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">02</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.plan.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.plan.desc')}
              </p>
            </div>
            
            {/* 03 Design */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent">
              <div className="w-14 h-14 rounded-full bg-white border-[1.5px] border-gray-200 flex items-center justify-center text-[#f96e1b] mb-4">
                <span className="material-symbols-outlined text-[24px]">web</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">03</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.design.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.design.desc')}
              </p>
            </div>
            
            {/* 04 Develop */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#f96e1b] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#f96e1b]/30">
                <span className="material-symbols-outlined text-[24px]">code</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">04</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.develop.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.develop.desc')}
              </p>
            </div>
            
            {/* 05 Test */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent">
              <div className="w-14 h-14 rounded-full bg-white border-[1.5px] border-gray-200 flex items-center justify-center text-[#f96e1b] mb-4">
                <span className="material-symbols-outlined text-[24px]">check_circle</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">05</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.test.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.test.desc')}
              </p>
            </div>
            
            {/* 06 Deploy */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent">
              <div className="w-14 h-14 rounded-full bg-white border-[1.5px] border-gray-200 flex items-center justify-center text-[#f96e1b] mb-4">
                <span className="material-symbols-outlined text-[24px]">publish</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">06</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.deploy.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.deploy.desc')}
              </p>
            </div>
            
            {/* 07 Improve */}
            <div className="flex flex-col items-center text-center bg-background lg:bg-transparent sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-full bg-[#f96e1b] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#f96e1b]/30">
                <span className="material-symbols-outlined text-[24px]">trending_up</span>
              </div>
              <span className="font-bold text-[#f96e1b] text-sm">07</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{t('process.items.improve.title')}</h3>
              <p className="text-gray-500 text-[13px] mt-2 px-2 leading-relaxed">
                {t('process.items.improve.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
