import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative py-12 lg:py-20" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & CTAs */}
        <StaggerContainer className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Live Status & Greeting */}
          <StaggerItem className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-label-badge font-label-badge shadow-sm">
              <span>{t('hero.status')}</span>
            </span>
          </StaggerItem>
          {/* Headline */}
          <div className="space-y-2">
            <StaggerItem className="inline-flex items-center gap-2">
              <span className="text-headline-md font-headline-md text-on-surface-variant">
                {t('hero.greeting')}
              </span>
              <span className="h-1 w-8 rounded-full bg-primary-container"></span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display-hero text-display-hero tracking-tight text-on-surface">
                Bonheur <span className="text-primary-container inline-block">Nzau</span>
              </h1>
            </StaggerItem>
            <StaggerItem className="font-label-code text-label-code text-primary font-medium tracking-wide uppercase">
              NZAU WUMA BONHEUR • <span>{t('hero.specialization')}</span>
            </StaggerItem>
          </div>
          {/* Subtitle & Value statement */}
          <StaggerItem>
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold max-w-xl">
              {t('hero.subtitle')}
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>
          </StaggerItem>
          {/* CTA Action Buttons */}
          <StaggerItem className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-on-primary font-headline-sm text-body-md shadow-md hover:bg-primary transition-all group"
              href="#projects"
            >
              <span>{t('hero.viewWork')}</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-headline-sm text-body-md shadow-sm hover:bg-surface-container transition-all"
              href="/cv.pdf"
              download
            >
              <span className="material-symbols-outlined text-[18px] text-primary">download</span>
              <span>{t('hero.downloadResume')}</span>
            </a>
            <a
              className="inline-flex items-center gap-1 px-4 py-3.5 text-on-surface-variant hover:text-primary font-headline-sm text-body-md transition-colors"
              href="#contact"
            >
              <span>{t('hero.letsTalk')}</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </StaggerItem>
          {/* Terminal-like mini indicator */}
          <StaggerItem className="pt-2 flex items-center gap-3 font-label-code text-label-code text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-xl">
            <span className="text-primary font-semibold">$</span>
            <span>stack:</span>
            <span className="text-on-surface font-medium">React • Javascript • Python • Linux • Node.js • Github • Sql</span>
          </StaggerItem>
        </StaggerContainer>
        {/* Right Column: Editorial Line-Art Illustration */}
        <AnimatedSection 
          direction="left" 
          delay={0.2}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="w-full max-w-[440px] bg-surface-container-lowest rounded-3xl p-6 shadow-md relative overflow-hidden">
            {/* Subtle warm backdrop circle */}
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-primary-fixed/40 blur-2xl pointer-events-none"></div>
            {/* Editorial Custom SVG Illustration inspired by reference */}
            <svg
              className="w-full h-auto drop-shadow-sm"
              fill="none"
              viewBox="0 0 400 380"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 200 0 L 200 45" stroke="#1B1C1A" strokeLinecap="round" strokeWidth="2.5"></path>
              <path d="M 180 45 L 220 45 L 235 70 L 165 70 Z" fill="#FBF9F5" stroke="#1B1C1A" strokeLinejoin="round" strokeWidth="2.5"></path>
              <polygon className="text-primary-container" fill="currentColor" opacity="0.08" points="175,70 225,70 320,330 80,330"></polygon>
              <circle cx="200" cy="74" fill="#F97316" r="5"></circle>
              <line stroke="#1B1C1A" strokeLinecap="round" strokeWidth="3" x1="280" x2="380" y1="90" y2="90"></line>
              <path d="M 345 90 L 348 72 L 366 72 L 369 90 Z" fill="#E4E2DE" stroke="#1B1C1A" strokeWidth="2"></path>
              <path d="M 357 72 C 352 58 340 55 344 45 C 352 50 357 58 357 72 Z" fill="#F97316"></path>
              <path d="M 357 72 C 362 56 374 54 370 42 C 362 48 357 58 357 72 Z" fill="#9D4300"></path>
              <rect fill="#F97316" height="35" rx="1.5" stroke="#1B1C1A" strokeWidth="2" width="10" x="295" y="55"></rect>
              <rect fill="#E4E2DE" height="42" rx="1.5" stroke="#1B1C1A" strokeWidth="2" width="12" x="309" y="48"></rect>
              <rect fill="#DAE2FD" height="28" rx="1.5" stroke="#1B1C1A" strokeWidth="2" width="9" x="325" y="62"></rect>
              <path d="M 190 320 C 140 320 120 280 140 230 C 150 205 180 180 220 170 C 270 160 330 190 340 250 C 348 295 300 320 250 320 Z" fill="#F97316" stroke="#1B1C1A" strokeLinejoin="round" strokeWidth="3"></path>
              <path d="M 220 170 C 235 210 250 240 280 260" opacity="0.6" stroke="#9D4300" strokeLinecap="round" strokeWidth="2"></path>
              <path d="M 165 245 C 190 265 220 275 260 278" opacity="0.6" stroke="#9D4300" strokeLinecap="round" strokeWidth="2"></path>
              <ellipse cx="235" cy="140" fill="#FBF9F5" rx="19" ry="22" stroke="#1B1C1A" strokeWidth="2.5"></ellipse>
              <path d="M 218 135 C 215 120 230 110 245 115 C 255 118 260 128 252 138 C 248 130 240 125 228 128 C 220 130 219 135 218 135 Z" fill="#1B1C1A"></path>
              <circle cx="230" cy="138" fill="none" r="5.5" stroke="#1B1C1A" strokeWidth="2"></circle>
              <circle cx="243" cy="138" fill="none" r="5.5" stroke="#1B1C1A" strokeWidth="2"></circle>
              <line stroke="#1B1C1A" strokeWidth="2" x1="235.5" x2="237.5" y1="138" y2="138"></line>
              <path d="M 233 148 Q 237 152 242 148" fill="none" stroke="#1B1C1A" strokeLinecap="round" strokeWidth="2"></path>
              <path d="M 220 162 C 205 175 198 200 200 225 L 255 225 C 260 200 255 175 248 162 Z" fill="#FFFFFF" stroke="#1B1C1A" strokeLinejoin="round" strokeWidth="2.5"></path>
              <path d="M 225 162 Q 234 168 243 162" stroke="#1B1C1A" strokeWidth="2"></path>
              <path d="M 205 185 L 180 205 L 195 215" fill="none" stroke="#1B1C1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              <path d="M 245 185 L 215 208" fill="none" stroke="#1B1C1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              <path d="M 160 205 L 205 205 L 198 220 L 152 220 Z" fill="#E4E2DE" stroke="#1B1C1A" strokeWidth="2"></path>
              <path d="M 160 205 L 165 175 L 208 175 L 205 205 Z" fill="#FFFFFF" stroke="#1B1C1A" strokeWidth="2"></path>
              <circle cx="186" cy="190" fill="#F97316" r="3"></circle>
              <path d="M 205 225 C 190 240 180 270 170 275 L 140 275" fill="none" stroke="#1B1C1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
              <path d="M 225 225 C 220 250 200 278 185 285 L 165 285" fill="none" stroke="#1B1C1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
              <path d="M 140 270 L 132 282 C 128 285 132 290 142 290 L 152 290 L 150 278 Z" fill="#F97316" stroke="#1B1C1A" strokeWidth="2"></path>
              <path d="M 165 280 L 158 292 C 154 295 158 300 168 300 L 178 300 L 175 288 Z" fill="#F97316" stroke="#1B1C1A" strokeWidth="2"></path>
              <g fill="#9D4300" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600">
                <text x="75" y="150">&lt;div/&gt;</text>
                <text x="60" y="210">&#123; AI: true &#125;</text>
                <text x="290" y="145">const code = fn();</text>
                <text x="50" y="280">git commit</text>
              </g>
              <circle cx="100" cy="110" fill="#F97316" r="3"></circle>
              <circle cx="340" cy="120" fill="#F97316" r="2.5"></circle>
              <circle cx="320" cy="305" fill="#F97316" r="3"></circle>
              <line stroke="#1B1C1A" strokeLinecap="round" strokeWidth="2.5" x1="50" x2="360" y1="330" y2="330"></line>
            </svg>
            {/* Floating badge at corner */}
            <div className="absolute bottom-4 left-6 right-6 bg-surface-container-low/95 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </span>
                <div>
                  <p className="font-label-badge text-label-badge text-on-surface font-semibold">Nzau Wuma Bonheur</p>
                  <p className="font-label-code text-label-code text-on-surface-variant">Computer Science Student</p>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Hero;
