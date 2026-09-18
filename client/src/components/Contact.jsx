import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../services/contact.service';
import { AnimatedSection, StaggerContainer, StaggerItem } from './motion/AnimatedSection';
import { Spinner } from './ui/Loaders';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit faire au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  subject: z.string().min(3, 'Le sujet doit faire au moins 3 caractères'),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères'),
});

function Contact() {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = React.useState(null); // null | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: 'Full-Stack Web App',
    },
  });

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      await submitContactForm(data);
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="py-16" id="contact">
      <AnimatedSection className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-sm space-y-12">
        <StaggerContainer className="text-center max-w-2xl mx-auto space-y-3">
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
        </StaggerContainer>
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
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-4 flex items-center gap-3 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[20px]">check_circle</span>
                <p className="text-green-700 dark:text-green-400 font-body-md text-body-md font-semibold">
                  Message envoyé avec succès. Je vous répondrai rapidement !
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-4 flex items-center gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-[20px]">error</span>
                <p className="text-red-700 dark:text-red-400 font-body-md text-body-md font-semibold">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              </div>
            )}

            <form className="space-y-4" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              {/* Honeypot anti-spam */}
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
                    className={`w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50 ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                    id="contact-name"
                    placeholder={t('contact.form.namePlaceholder')}
                    type="text"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1"
                    htmlFor="contact-email"
                  >
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    className={`w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                    id="contact-email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    type="email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
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
                    {...register('projectType')}
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
                    className={`w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50 ${errors.subject ? 'ring-2 ring-red-500' : ''}`}
                    id="contact-subject"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    type="text"
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                  )}
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
                  className={`w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50 ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                  id="contact-message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows="4"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-headline-sm text-body-md hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                id="submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner size="sm" className="text-on-primary border-r-transparent border-on-primary/30" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>{t('contact.form.submit')}</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Contact;
