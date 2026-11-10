'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t, dir } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/factory', label: t('nav.factory') },
    { href: '/products', label: t('nav.products') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const footerCopyright =
    dir === 'rtl' ? '© 2026 الصمغ العربي المتحدة. جميع الحقوق محفوظة.' : t('footer.copyright');

  return (
    <footer className="bg-forest text-ivory/90" dir={dir}>
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                role="img"
                aria-label="United Arab Gum LLC logo"
                className="h-[144px] w-[180px] max-w-[180px] min-w-[120px]"
                style={{
                  backgroundColor: 'rgb(197 168 128 / var(--tw-text-opacity, 1))',
                  maskImage: "url('/logo.png')",
                  WebkitMaskImage: "url('/logo.png')",
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                }}
              />
            </div>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">{t('footer.desc')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+96896627766" className="hover:text-gold transition-colors">+968 9662 7766</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@unitedgum.com" className="hover:text-gold transition-colors">info@unitedgum.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bousher, Muscat, Oman</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <span>{footerCopyright}</span>
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block"></span>
            <span>Sultanate of Oman</span>
            <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block"></span>
            <span>Commercial Launch: March 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
