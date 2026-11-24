import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import CookieConsent from '@/components/CookieConsent';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'US Expat Tax Services | Specialist Cross-Border CPAs',
  description: 'Specialist cross-border tax compliance, Streamlined amnesty filing, FBAR, and corporate advisory for American expats, accidental Americans, and green card holders worldwide.',
  keywords: ['US expat tax', 'FBAR filing', 'Streamlined procedure', 'Form 5471', 'FEIE', 'Foreign Tax Credit', 'Form 8621 PFIC'],
  authors: [{ name: 'ExpatTax US CPA Advisory' }],
  metadataBase: new URL('https://expattax-us.com'),
  openGraph: {
    title: 'US Expat Tax Services | Specialist Cross-Border CPAs',
    description: 'Expert US cross-border tax compliance and Streamlined Amnesty filing for Americans living abroad.',
    url: 'https://expattax-us.com',
    siteName: 'ExpatTax US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'US Expat Tax CPA Specialists',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Expat Tax Services | Specialist Cross-Border CPAs',
    description: 'Expert cross-border tax compliance and Streamlined Amnesty filing for Americans living abroad.',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://expattax-us.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <JsonLd />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        <DisclaimerBanner />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
