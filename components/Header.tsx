'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';

export default function Header() {
  const { t, locale, toggleLocale, dir } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document dir on locale change
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/factory', label: t('nav.factory') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/products', label: t('nav.products') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full py-6 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}
      dir={dir}
    >
      <div className="section-container">
        <div className="flex items-center justify-between gap-4 min-h-[88px] overflow-visible">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="United Arab Gum home">
            <img
              src="/logo.png"
              alt="United Arab Gum LLC logo"
              className="h-20 md:h-24 lg:h-28 w-auto max-w-[38vw] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'bg-forest/10 text-forest'
                    : 'text-charcoal-light hover:text-forest hover:bg-forest/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right-side controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-gold/40 text-gold hover:bg-gold/10 rounded-lg text-base font-medium transition-colors"
              aria-label="Toggle language"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {t('nav.lang')}
            </button>

            {/* CTA button */}
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-base py-2.5 px-4">
              {t('nav.contact')}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-charcoal hover:bg-forest/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                    <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                    <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-ivory-dark py-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-forest/10 text-forest'
                    : 'text-charcoal-light hover:text-forest hover:bg-forest/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-ivory-dark flex gap-2">
              <button
                onClick={() => { toggleLocale(); setMenuOpen(false); }}
                className="flex-1 py-2.5 border border-gold/40 text-gold rounded-lg text-base font-medium"
              >
                {t('nav.lang')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
