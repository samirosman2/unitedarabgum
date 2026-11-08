import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'United Arab Gum LLC — Premium Gum Arabic | Oman',
  description:
    'United Arab Gum LLC is a premier Omani manufacturer and processor of Gum Arabic for Food, Pharmaceutical, Nutraceutical, Cosmetics, and Industrial markets.',
  keywords: 'Gum Arabic, Acacia, Oman, food grade, pharmaceutical, cosmetic, Salalah Free Zone',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'United Arab Gum LLC',
    description: 'Premier Gum Arabic manufacturer based in Oman',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
