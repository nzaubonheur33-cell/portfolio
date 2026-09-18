import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Full-Stack Web App',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id.replace('contact-', '')]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Use window.dispatchEvent to notify Modals component
    window.dispatchEvent(new CustomEvent('openSuccess', { detail: formData.name }));
  };

  return (
    <section className="py-16" id="contact">
      <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-sm space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-label-code text-label-code text-primary uppercase font-bold">
              {t('contact.label')}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold">
            {t('contact.title')}{' '}
            <span className="text-primary-container">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Direct Metadata & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <p className="font-label-code text-label-code text-on-surface-variant">
                    {t('contact.info.emailLabel')}
                  </p>
                  <a
                    className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-bold break-all"
                    href="mailto:nzaubonheur84@gmail.com"
                  >
                    nzaubonheur84@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div>
                  <p className="font-label-code text-label-code text-on-surface-variant">
                    {t('contact.info.phoneLabel')}
                  </p>
                  <a
                    className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-bold"
                    href="tel:0975079756"
                  >
                    +243 975 079 756
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div>
                  <p className="font-label-code text-label-code text-on-surface-variant">
                    {t('contact.info.locationLabel')}
                  </p>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {t('contact.info.locationValue')}
                  </p>
                </div>
              </div>
            </div>
            {/* Architecture transparency card */}
            <div className="p-5 bg-surface-container-low rounded-2xl space-y-2 font-label-code text-[11px] text-on-surface-variant">
              <div className="flex items-center gap-1.5 text-primary font-bold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>{t('contact.info.pipelineLabel')}</span>
              </div>
              <p>{t('contact.info.pipelineDesc')}</p>
            </div>
          </div>
          {/* Right: Interactive Validated Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-3xl">
            <form className="space-y-4" id="contact-form" onSubmit={handleContactSubmit}>
              <input autoComplete="off" className="hidden" name="_gotcha" tabIndex="-1" type="text" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1"
                    htmlFor="contact-name"
                  >
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50"
                    id="contact-name"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1"
                    htmlFor="contact-email"
                  >
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50"
                    id="contact-email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1"
                    htmlFor="contact-type"
                  >
                    {t('contact.form.categoryLabel')}
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="contact-type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Full-Stack Web App">{t('contact.form.categoryOptions.fullstack')}</option>
                    <option value="React Frontend UI">{t('contact.form.categoryOptions.frontend')}</option>
                    <option value="API / Backend Service">{t('contact.form.categoryOptions.backend')}</option>
                    <option value="AI / Machine Learning Exploration">{t('contact.form.categoryOptions.ai')}</option>
                    <option value="EdTech / Cultural Platform">{t('contact.form.categoryOptions.edtech')}</option>
                    <option value="Linux Systems Consulting">{t('contact.form.categoryOptions.linux')}</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1"
                    htmlFor="contact-subject"
                  >
                    {t('contact.form.subjectLabel')}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50"
                    id="contact-subject"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1"
                  htmlFor="contact-message"
                >
                  {t('contact.form.messageLabel')}
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50"
                  id="contact-message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-headline-sm text-body-md hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2"
                id="submit-btn"
                type="submit"
              >
                <span>{t('contact.form.submit')}</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
