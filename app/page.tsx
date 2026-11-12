'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

const sectors = [
  {
    key: 'food',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    key: 'pharma',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    key: 'nutra',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    key: 'cosm',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    key: 'ind',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const highlights = ['privately', 'facility', 'launch', 'quality'] as const;

export default function HomePage() {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <div dir={dir}>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative z-0 w-full min-h-[90vh] flex items-center overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/landscape-bg.jpg"
            alt=""
            className={`h-full w-full object-cover object-center ${isRTL ? '-scale-x-100' : 'scale-x-[-1]'}`}
            style={isRTL ? undefined : { objectPosition: 'left center' }}
          />
        </div>

        <div
          className={`absolute inset-0 z-0 ${
            isRTL ? 'bg-gradient-to-l from-[#0B3B2C]/90 via-[#0B3B2C]/80 to-transparent' : 'bg-gradient-to-r from-[#0B3B2C]/90 via-[#0B3B2C]/70 to-transparent'
          }`}
          aria-hidden="true"
        />

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center" aria-hidden="true">
          <div className="absolute -left-20 -top-24 hidden h-[28rem] w-[28rem] rounded-full bg-emerald-600/20 blur-3xl animate-glow will-change-transform sm:block" />
          <div className="absolute -bottom-32 left-1/3 hidden h-[24rem] w-[24rem] rounded-full bg-amber-500/15 blur-3xl animate-glow will-change-transform sm:block" />
          <div className="absolute -right-16 top-8 hidden h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-glow will-change-transform sm:block" />

          <svg
            className="absolute inset-0 h-full w-full opacity-40 sm:opacity-60"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            fill="none"
          >
            <g stroke="#34D399" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="5 8" fill="none">
              <path id="export-arc-europe" d="M790 260 C700 155 535 115 345 135" />
              <path id="export-arc-east-asia" d="M790 260 C875 145 930 100 1020 72" />
              <path id="export-arc-americas" d="M790 260 C620 365 390 410 -20 390" />
            </g>

            <g>
              <circle
                cx="790"
                cy="260"
                r="15"
                fill="#34D399"
                fillOpacity="0.7"
                className="animate-ping motion-reduce:animate-none"
                style={{
                  animationDuration: '3.5s',
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                }}
              />
              <circle cx="790" cy="260" r="8" fill="#10B981" fillOpacity="0.35" />
              <circle cx="790" cy="260" r="4" fill="#6EE7B7" />
            </g>

            <g>
              <circle r="4" fill="#FBBF24">
                <animateMotion dur="15s" repeatCount="indefinite" path="M790 260 C700 155 535 115 345 135" />
              </circle>
              <circle r="3.5" fill="#6EE7B7">
                <animateMotion dur="20s" begin="-8s" repeatCount="indefinite" path="M790 260 C875 145 930 100 1020 72" />
              </circle>
              <circle r="4" fill="#FBBF24">
                <animateMotion dur="18s" begin="-5s" repeatCount="indefinite" path="M790 260 C620 365 390 410 -20 390" />
              </circle>
            </g>
          </svg>
        </div>

        <div
          className={`absolute bottom-0 z-[5] flex h-[82%] w-[78%] items-center justify-center max-w-3xl ${
            isRTL ? 'left-[-4%] lg:left-[-2%] right-auto' : 'right-[-4%] lg:right-[-2%] left-auto'
          }`}
        >
          <div
            className="h-full w-full animate-fade-up-blur"
            style={{ animationDelay: '1000ms', willChange: 'transform, opacity' }}
          >
            <img
              src="/images/hero-elements.png"
              alt=""
              className="h-full w-full object-contain"
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div
            className={`max-w-3xl ${
              isRTL ? 'mr-auto text-right lg:ml-auto lg:mr-0' : 'ml-0 text-left lg:mr-auto'
            } ${isRTL ? 'pr-0 lg:pl-20 xl:pl-32' : 'pr-8 lg:pr-20 xl:pr-32'}`}
          >
            <div
              className={`inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6 ${
                isRTL ? 'flex-row-reverse' : ''
              } animate-fade-up-blur`}
              style={{ animationDelay: '0ms', willChange: 'transform, opacity, filter' }}
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-gold text-sm font-medium">Sultanate of Oman · Salalah Free Zone</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ivory leading-tight mb-6 animate-fade-up-blur"
              style={{ animationDelay: '250ms', willChange: 'transform, opacity, filter' }}
            >
              {t('hero.tagline')}
            </h1>

            <p
              className="text-lg sm:text-xl text-ivory/75 leading-relaxed mb-10 max-w-2xl animate-fade-up-blur"
              style={{ animationDelay: '500ms', willChange: 'transform, opacity, filter' }}
            >
              {t('hero.subtitle')}
            </p>

            <div
              className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''} animate-fade-up-blur`}
              style={{ animationDelay: '750ms', willChange: 'transform, opacity, filter' }}
            >
              <Link href="/products" className="btn-primary text-base px-8 py-3.5">
                {t('hero.cta.products')}
              </Link>
              <Link href="/contact" className="btn-outline text-base px-8 py-3.5">
                {t('hero.cta.contact')}
              </Link>
            </div>

            <div
              className={`mt-16 grid grid-cols-3 gap-6 max-w-lg bg-[#0B3B2C]/10 backdrop-blur-[1px] rounded-2xl p-4 border border-gold/20 ${
                isRTL ? 'text-right' : 'text-left'
              } animate-fade-up-blur`}
              style={{ animationDelay: '750ms', willChange: 'transform, opacity, filter' }}
            >
              {[
                { label: isRTL ? 'الإطلاق التجاري' : 'Commercial Launch', value: '2027' },
                { label: isRTL ? 'درجات التصنيع' : 'Industry Grades', value: '5+' },
                { label: isRTL ? 'المقر الرئيسي' : 'Headquarters', value: 'Muscat' },
              ].map((s) => (
                <div key={s.label} className="border-t border-gold/30 pt-4">
                  <div className="text-gold font-bold text-2xl">{s.value}</div>
                  <div className="text-ivory/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L1440 80L1440 20C1200 70 960 10 720 40C480 70 240 10 0 40L0 80Z" fill="#FAF7F2" />
          </svg>
        </div>
      </section>

      {/* ── CORPORATE HIGHLIGHTS ─────────────────── */}
      <section className="py-20 bg-ivory">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t('highlights.title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((key) => (
              <div key={key} className="card p-6 group hover:border-gold/30 transition-all">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest/15 transition-colors">
                  <HighlightIcon type={key} />
                </div>
                <h3 className="font-bold text-forest text-base mb-2">{t(`highlights.${key}.title`)}</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{t(`highlights.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t('sectors.title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((sector) => (
              <Link
                key={sector.key}
                href="/products"
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-ivory-dark hover:border-forest/30 hover:shadow-md hover:bg-forest hover:text-ivory transition-all duration-200"
              >
                <div className="w-14 h-14 bg-forest/10 group-hover:bg-ivory/20 rounded-2xl flex items-center justify-center mb-4 text-forest group-hover:text-ivory transition-colors">
                  {sector.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2 text-forest group-hover:text-ivory transition-colors">
                  {t(`sectors.${sector.key}`)}
                </h3>
                <p className="text-xs text-charcoal-muted group-hover:text-ivory/80 transition-colors leading-relaxed">
                  {t(`sectors.${sector.key}.desc`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACTORY ──────────────────────────────── */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="section-container">
          <div
            className={`overflow-hidden rounded-3xl border border-forest/10 bg-gradient-to-br from-white via-white to-emerald-50 shadow-lg shadow-forest/5 ${
              isRTL ? 'lg:flex-row-reverse' : ''
            } flex flex-col lg:flex-row`}
          >
            <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[480px] lg:w-1/2">
              <img
                src="/gallery/factory1.jpg"
                alt={isRTL ? 'الواجهة الخارجية لمصنع المعالجة الرئيسي' : 'Main processing plant exterior'}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-gold/80 sm:bottom-7 sm:left-7" />
            </div>

            <div className={`flex flex-col justify-center p-7 sm:p-10 lg:w-1/2 lg:p-14 ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-800/5 px-4 py-1.5 text-sm font-semibold text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-gold" />
                {t('home.factory.eyebrow')}
              </span>
              <h2 className="text-3xl font-bold leading-tight text-forest sm:text-4xl">
                {t('home.factory.title')}
              </h2>
              <div className={`my-6 h-1 w-16 rounded-full bg-gold ${isRTL ? 'mr-0' : 'ml-0'}`} />
              <p className="max-w-xl text-base leading-8 text-charcoal-light sm:text-lg">
                {t('home.factory.description')}
              </p>
              <Link
                href="/factory"
                className="btn-primary mt-8 w-fit gap-3 text-base"
              >
                {t('home.factory.cta')}
                <span aria-hidden="true">{isRTL ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section className="py-16 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(197,168,128,0.6) 0%, transparent 50%)',
          }}
        />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ivory mb-4">
            {dir === 'rtl' ? 'هل أنت مستعد للعمل معنا؟' : 'Ready to Work With Us?'}
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-8">
            {dir === 'rtl'
              ? 'نبدأ عملياتنا التجارية في مارس 2027. تواصل مع فريقنا الآن لمناقشة احتياجاتك من الصمغ العربي.'
              : 'Launching commercially in March 2027. Connect with our team now to discuss your Gum Arabic requirements.'}
          </p>
          <Link href="/contact" className="btn-outline text-base px-8 py-3.5">
            {t('hero.cta.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
}

function HighlightIcon({ type }: { type: string }) {
  const cls = 'w-6 h-6 text-forest';
  if (type === 'privately')
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  if (type === 'facility')
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  if (type === 'launch')
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
