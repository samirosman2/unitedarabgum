'use client';

import { useLanguage } from '@/lib/i18n';

export default function AboutPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir}>
      {/* Hero */}
      <section className="bg-forest py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(197,168,128,0.5) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-gold text-sm font-medium">United Arab Gum LLC · ذ.م.م</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-ivory mb-4">{t('about.hero.title')}</h1>
          <p className="text-xl text-ivory/70">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Corporate Identity */}
      <section className="py-20 bg-ivory">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">{t('about.identity.title')}</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">{t('about.identity.p1')}</p>
              <p className="text-charcoal-light leading-relaxed">{t('about.identity.p2')}</p>
            </div>
            {/* Visual card */}
            <div className="bg-forest rounded-3xl p-8 text-ivory relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 rounded-3xl"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(197,168,128,0.6) 0%, transparent 50%)' }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 border border-gold/30">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">{t('about.mission.title')}</h3>
                <p className="text-ivory/80 leading-relaxed text-sm">{t('about.mission.text')}</p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Est.', value: '2024' },
                    { label: 'Launch', value: '2027' },
                    { label: 'HQ', value: 'Muscat' },
                    { label: 'Plant', value: 'Salalah' },
                  ].map((s) => (
                    <div key={s.label} className="border-t border-gold/20 pt-3">
                      <div className="text-gold font-bold text-lg">{s.value}</div>
                      <div className="text-ivory/50 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t('about.locations.title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* HQ */}
            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">Head Office</span>
                  <h3 className="font-bold text-forest text-lg mt-0.5">{t('about.locations.hq.title')}</h3>
                </div>
              </div>
              <p className="text-charcoal-muted text-sm leading-relaxed">{t('about.locations.hq.desc')}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-charcoal-muted">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Commercial Registration & Administration
              </div>
            </div>

            {/* Plant */}
            <div className="card p-8 border-forest/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">Manufacturing</span>
                  <h3 className="font-bold text-forest text-lg mt-0.5">{t('about.locations.plant.title')}</h3>
                </div>
              </div>
              <p className="text-charcoal-muted text-sm leading-relaxed">{t('about.locations.plant.desc')}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-charcoal-muted">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Processing & Manufacturing Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-ivory">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t('about.leadership.title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 md:p-10 text-center">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gold/20">
                <svg className="w-12 h-12 text-forest/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-forest">{t('about.leadership.name')}</h3>
              <p className="text-gold font-semibold mt-1 mb-6">{t('about.leadership.role')}</p>
              <p className="text-charcoal-light leading-relaxed text-sm">{t('about.leadership.bio')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Sustainability */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title mb-6">{t('about.quality.title')}</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">{t('about.quality.p1')}</p>
              <p className="text-charcoal-light leading-relaxed">{t('about.quality.p2')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🏅', label: 'ISO Standards', desc: 'International quality management alignment' },
                { icon: '🔬', label: 'GMP Certified', desc: 'Good Manufacturing Practice protocols' },
                { icon: '🌿', label: 'Sustainable Sourcing', desc: 'Responsible raw material procurement' },
                { icon: '🌍', label: 'Global Standards', desc: 'JECFA, USP, BP, E414 compliance' },
              ].map((item) => (
                <div key={item.label} className="bg-ivory rounded-xl p-5 border border-ivory-dark">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-forest text-sm mb-1">{item.label}</h4>
                  <p className="text-charcoal-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
