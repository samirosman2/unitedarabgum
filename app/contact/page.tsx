'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const { t, dir } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.form.error.name');
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = t('contact.form.error.email');
    if (formData.message.trim().length < 10) newErrors.message = t('contact.form.error.message');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate async submission (static MVP — no backend)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('contact.info.phone'),
      value: '+968 9662 7766',
      href: 'tel:+96896627766',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('contact.info.email'),
      value: 'info@unitedgum.com',
      href: 'mailto:info@unitedgum.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact.info.hq'),
      value: t('contact.info.hq.addr'),
      href: null,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      label: t('contact.info.plant'),
      value: t('contact.info.plant.addr'),
      href: null,
    },
  ];

  return (
    <div dir={dir}>
      {/* Hero */}
      <section className="bg-forest py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(197,168,128,0.5) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-ivory mb-4">{t('contact.hero.title')}</h1>
          <p className="text-xl text-ivory/70 max-w-xl mx-auto">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-ivory">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-forest mb-8">{t('contact.form.title')}</h2>

                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-forest mb-2">{t('contact.form.success.title')}</h3>
                    <p className="text-charcoal-muted">{t('contact.form.success.desc')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          {t('contact.form.name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.form.placeholder.name')}
                          className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 transition ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                          }`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          {t('contact.form.email')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.form.placeholder.email')}
                          className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 transition ${
                            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">{t('contact.form.company')}</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t('contact.form.placeholder.company')}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">{t('contact.form.subject')}</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t('contact.form.placeholder.subject')}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 transition"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        {t('contact.form.message')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.placeholder.message')}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 transition resize-none ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                        }`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-primary py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-7">
                <h2 className="text-xl font-bold text-forest mb-6">{t('contact.info.title')}</h2>
                <ul className="space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-forest/10 rounded-lg flex items-center justify-center text-forest shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            dir={item.href.startsWith('tel:') ? 'ltr' : undefined}
                            className="text-sm text-charcoal hover:text-forest transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-charcoal-light leading-relaxed">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authorized Rep */}
              <div className="card p-7 border-gold/30">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">{t('contact.info.rep')}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-forest text-sm">Mr. Said Salim Said Al Buraiki</p>
                    <p className="text-charcoal-muted text-xs">Chairman, United Arab Gum LLC</p>
                  </div>
                </div>
              </div>

              {/* Launch badge */}
              <div className="bg-forest rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-gold/30">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gold font-bold text-lg">March 2027</p>
                <p className="text-ivory/70 text-xs mt-1">Planned Commercial Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
