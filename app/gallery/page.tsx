'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';

const galleryImages = [
  {
    src: '/gallery/lab.jpeg',
    titleEn: 'Quality Control & Laboratory Testing',
    titleAr: 'مراقبة الجودة والفحوصات المخبرية',
  },
  {
    src: '/gallery/gum_sorting_machine.jpeg',
    titleEn: 'Automated Gum Sorting & Processing Line',
    titleAr: 'خط فرز ومعالجة الصمغ الآلي',
  },
  {
    src: '/gallery/hygiene.jpeg',
    titleEn: 'Facility Hygiene & Sterilization Station',
    titleAr: 'محطة النظافة والتعقيم في المنشأة',
  },
  {
    src: '/gallery/loading_bay.jpeg',
    titleEn: 'Logistics & Factory Loading Dock',
    titleAr: 'منطقة الخدمات اللوجستية ورصيف التحميل',
  },
  {
    src: '/gallery/store_area.jpeg',
    titleEn: 'Bulk Storage & Warehouse Facility',
    titleAr: 'منطقة التخزين بالجملة ومستودع البضائع',
  },
  {
    src: '/gallery/women_working.jpeg',
    titleEn: 'Precision Quality Inspection',
    titleAr: 'فحص دقيق لمستوى جودة المنتج',
  },
  {
    src: '/gallery/factory1.jpg',
    titleEn: 'Main Processing Plant Exterior',
    titleAr: 'الواجهة الخارجية لمصنع المعالجة الرئيسي',
  },
  {
    src: '/gallery/factory2.jpg',
    titleEn: 'Production Complex Overhead View',
    titleAr: 'نظرة علوية شاملة لمجمع الإنتاج',
  },
] as const;

export default function GalleryPage() {
  const { locale, dir } = useLanguage();
  const isArabic = locale === 'ar';
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex === null ? null : galleryImages[activeImageIndex];

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImageIndex(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <div dir={dir}>
      <section className="bg-forest py-16 sm:py-20">
        <div className={`section-container ${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {isArabic ? 'منشآتنا' : 'Our Facilities'}
          </p>
          <h1 className="text-4xl font-bold text-ivory sm:text-5xl">
            {isArabic ? 'معرض الصور' : 'Photo Gallery'}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            {isArabic
              ? 'اكتشف مرافقنا ومراحل معالجة الصمغ العربي ومراقبة جودته.'
              : 'Explore our facilities, Gum Arabic processing operations, and quality-control standards.'}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={isArabic ? `عرض ${image.titleAr}` : `View ${image.titleEn}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={image.src}
                    alt={isArabic ? image.titleAr : image.titleEn}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className={`p-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <h2 className="font-semibold leading-snug text-slate-800 transition-colors group-hover:text-emerald-800">
                    {isArabic ? image.titleAr : image.titleEn}
                  </h2>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-800/60">
                    {isArabic ? 'عرض الصورة' : 'View image'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={isArabic ? activeImage.titleAr : activeImage.titleEn}
            className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              aria-label={isArabic ? 'إغلاق' : 'Close'}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-black/30 p-3 sm:p-6">
              <img
                src={activeImage.src}
                alt={isArabic ? activeImage.titleAr : activeImage.titleEn}
                className="max-h-[70vh] max-w-full rounded-lg object-contain"
              />
            </div>

            <div className="grid gap-2 border-t border-white/10 px-5 py-4 text-center sm:grid-cols-2 sm:gap-6 sm:px-8 sm:py-5">
              <h2 className="text-base font-semibold leading-relaxed text-white sm:text-lg" dir="ltr">
                {activeImage.titleEn}
              </h2>
              <p className="text-base leading-relaxed text-emerald-100 sm:text-lg" dir="rtl">
                {activeImage.titleAr}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
