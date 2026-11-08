'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

const products = [1, 2, 3, 4, 5, 6] as const;

const gradeBadgeColor: Record<string, string> = {
  'Standard / Premium': 'bg-blue-50 text-blue-700 border-blue-200',
  'Food-Grade (E414)': 'bg-green-50 text-green-700 border-green-200',
  'USP / BP Grade': 'bg-purple-50 text-purple-700 border-purple-200',
  'Cosmetic-Grade': 'bg-pink-50 text-pink-700 border-pink-200',
  'Technical Grade': 'bg-orange-50 text-orange-700 border-orange-200',
  'Bespoke': 'bg-gold/10 text-gold-dark border-gold/30',
  // Arabic equivalents
  'قياسي / ممتاز': 'bg-blue-50 text-blue-700 border-blue-200',
  'درجة غذائية (E414)': 'bg-green-50 text-green-700 border-green-200',
  'درجة USP / BP': 'bg-purple-50 text-purple-700 border-purple-200',
  'درجة تجميلية': 'bg-pink-50 text-pink-700 border-pink-200',
  'درجة تقنية': 'bg-orange-50 text-orange-700 border-orange-200',
  'مصمم خصيصاً': 'bg-gold/10 text-gold-dark border-gold/30',
};

const productIcons = [
  // 1 - Spray-dried
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // 2 - Food
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  // 3 - Pharma
  <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  // 4 - Cosmetic
  <svg key="4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  // 5 - Industrial
  <svg key="5" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // 6 - Custom
  <svg key="6" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>,
];

export default function ProductsPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir}>
      {/* Hero */}
      <section className="bg-forest py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 70%, rgba(197,168,128,0.5) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-gold text-sm font-medium">Premium Gum Arabic · 6 Product Lines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-ivory mb-4">{t('products.hero.title')}</h1>
          <p className="text-xl text-ivory/70 max-w-xl mx-auto">{t('products.hero.subtitle')}</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-ivory">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">{t('products.portfolio.title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((n, i) => {
              const grade = t(`product.${n}.grade`);
              const badgeClass = gradeBadgeColor[grade] || 'bg-gray-50 text-gray-600 border-gray-200';

              return (
                <div key={n} className="card p-7 flex flex-col hover:border-gold/40 group">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-forest/10 group-hover:bg-forest/15 rounded-2xl flex items-center justify-center mb-5 text-forest transition-colors">
                    {productIcons[i]}
                  </div>

                  {/* Grade badge */}
                  <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${badgeClass}`}>
                    {t('products.grade')}: {grade}
                  </span>

                  <h3 className="text-forest font-bold text-lg mb-3 leading-snug">{t(`product.${n}.name`)}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed mb-5 flex-1">{t(`product.${n}.desc`)}</p>

                  {/* Applications */}
                  <div className="border-t border-ivory-dark pt-4">
                    <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">{t('products.applications')}</p>
                    <p className="text-charcoal-muted text-xs leading-relaxed">{t(`product.${n}.apps`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center bg-forest rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 rounded-3xl"
              style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(197,168,128,0.6) 0%, transparent 50%)' }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-ivory mb-4">{t('products.cta.title')}</h2>
              <p className="text-ivory/70 leading-relaxed mb-8 text-sm">{t('products.cta.desc')}</p>
              <Link href="/contact" className="btn-outline">
                {t('products.cta.btn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
