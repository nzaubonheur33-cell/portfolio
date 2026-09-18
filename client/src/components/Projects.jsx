import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjects } from '../services/projects.service';

function Projects() {
  const { t } = useTranslation();

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openCaseStudy'));
  };

  return (
    <>
      <section className="py-16" id="projects">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
                  {t('projects.label')}
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                {t('projects.title')}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
                {t('projects.subtitle')}
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-primary hover:text-on-surface font-headline-sm text-body-md transition-colors"
              href="https://github.com/bonheur84"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{t('projects.viewAll')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PROJECT 01: CampusGuide */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="w-full h-[220px] overflow-hidden">
                <img src="image copy.png" alt="CampusGuide Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                      CampusGuide
                    </h3>
                    <a
                      aria-label="CampusGuide GitHub"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="https://github.com/bonheur84/CampusGuide"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px]">north_east</span>
                    </a>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                    {t('projects.items.campusGuide.desc')}
                  </p>
                </div>
                <div className="pt-6">
                  <div className="flex flex-wrap items-center gap-1.5 font-label-code text-[11px] text-on-surface-variant">
                    <span>React</span> • <span>Node.js</span> • <span>Express</span> • <span>MySQL</span> • <span>Socket.IO</span>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      className="text-primary hover:underline font-label-badge text-label-badge font-semibold"
                      onClick={openModal}
                      type="button"
                    >
                      {t('projects.items.campusGuide.caseStudy')}
                    </button>
                    <a
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-code text-[11px] hover:bg-surface-container transition-colors"
                      href="https://github.com/bonheur84/CampusGuide"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      <span>{t('projects.items.campusGuide.repo')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 02: Portfolio */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="w-full h-[220px] overflow-hidden">
                <img src="image.png" alt="Portfolio Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                      Personal Portfolio
                    </h3>
                    <a
                      aria-label="Portfolio GitHub"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="https://github.com/bonheur84/portfolio"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px]">north_east</span>
                    </a>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                    {t('projects.items.portfolio.desc')}
                  </p>
                </div>
                <div className="pt-6">
                  <div className="flex flex-wrap items-center gap-1.5 font-label-code text-[11px] text-on-surface-variant">
                    <span>React</span> • <span>Tailwind CSS</span> • <span>JavaScript</span> • <span>Responsive</span>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-primary-container font-semibold">
                      {t('projects.items.portfolio.status')}
                    </span>
                    <a
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-code text-[11px] hover:bg-surface-container transition-colors"
                      href="https://github.com/bonheur84/portfolio"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      <span>{t('projects.items.portfolio.repo')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 03: Mikanda */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="w-full h-[220px] overflow-hidden">
                <img src="Opera Snapshot_2026-04-07_093130_127.0.0.1.png" alt="Mikanda Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-sm text-on-surface font-bold">
                      Mikanda
                    </h3>
                    <a
                      aria-label="Mikanda GitHub"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="https://github.com/bonheur84/mikanda"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px]">north_east</span>
                    </a>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                    {t('projects.items.mikanda.desc')}
                  </p>
                </div>
                <div className="pt-6">
                  <div className="flex flex-wrap items-center gap-1.5 font-label-code text-[11px] text-on-surface-variant">
                    <span>React</span> • <span>Node.js</span> • <span>Express</span> • <span>MySQL</span> • <span>JWT</span>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-primary font-semibold">
                      {t('projects.items.mikanda.status')}
                    </span>
                    <a
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-code text-[11px] hover:bg-surface-container transition-colors"
                      href="https://github.com/bonheur84/mikanda"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      <span>{t('projects.items.mikanda.repo')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Deep Dive */}
      <section className="py-12">
        <div className="bg-surface-container-low rounded-3xl p-8 lg:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-surface-container-high">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
                {t('projects.spotlight.label')}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                {t('projects.spotlight.title')}
              </h3>
            </div>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary font-label-badge text-label-badge self-start lg:self-auto hover:bg-primary transition-all"
              href="https://github.com/bonheur84/CampusGuide"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{t('projects.spotlight.explore')}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="font-label-code text-label-code text-primary font-semibold">
                {t('projects.spotlight.problemTitle')}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t('projects.spotlight.problemDesc')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-label-code text-label-code text-primary font-semibold">
                {t('projects.spotlight.solutionTitle')}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t('projects.spotlight.solutionDesc')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-label-code text-label-code text-primary font-semibold">
                {t('projects.spotlight.outcomesTitle')}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t('projects.spotlight.outcomesDesc')}
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 font-label-code text-[12px] text-on-surface">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
                FE
              </span>
              <div>
                <p className="font-semibold text-on-surface">React Client</p>
                <p className="text-[11px] text-on-surface-variant">Tailwind UI • State</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary-container rotate-90 md:rotate-0">
              arrow_forward
            </span>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold">
                API
              </span>
              <div>
                <p className="font-semibold text-on-surface">Node/Express</p>
                <p className="text-[11px] text-on-surface-variant">Auth • Routing</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary-container rotate-90 md:rotate-0">
              arrow_forward
            </span>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center font-bold">
                DB
              </span>
              <div>
                <p className="font-semibold text-on-surface">MySQL</p>
                <p className="text-[11px] text-on-surface-variant">Schemas • Queries</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary-container rotate-90 md:rotate-0">
              sync
            </span>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold">
                WS
              </span>
              <div>
                <p className="font-semibold text-on-surface">Socket.IO</p>
                <p className="text-[11px] text-on-surface-variant">Live Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
