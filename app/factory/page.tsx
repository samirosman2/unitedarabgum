'use client';

import { useLanguage } from '@/lib/i18n';

export default function FactoryPage() {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <div dir={dir}>
      <section className="relative overflow-hidden bg-forest py-20 sm:py-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(197,168,128,0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className={`section-container relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {t('factory.eyebrow')}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-ivory sm:text-5xl">
            {t('factory.title')}
          </h1>
          <p className="mt-7 max-w-4xl text-base leading-8 text-ivory/75 sm:text-lg">
            {t('factory.body')}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <figure className="overflow-hidden rounded-2xl border border-forest/15 bg-white p-2 shadow-xl shadow-forest/10">
              <img
                src="/images/factory1.jpg"
                alt={t('factory.image1.alt')}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-forest/15 bg-white p-2 shadow-xl shadow-forest/10">
              <img
                src="/images/factory2.jpg"
                alt={t('factory.image2.alt')}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
