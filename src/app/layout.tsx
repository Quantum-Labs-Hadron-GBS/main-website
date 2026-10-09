import type { Metadata } from "next";
import "./globals.css";
import GlobeWrapper from "./components/GlobalGlobe/GlobeWrapper";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import { PAGES, SITE_URL, SITE_NAME, SITE_SHORT_NAME, OG_IMAGE } from "./lib/seo";
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from "./lib/schema";

// Site-wide defaults. Each route sets its own title/description/canonical via pageMetadata() in lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGES["/"].title,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: PAGES["/"].description,
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HadronGBS",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png",
  },
};

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SmoothScrollProvider from "./components/SmoothScroll/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} data-theme="light" suppressHydrationWarning>
      <body className="light-theme" suppressHydrationWarning>
        {/* Legacy Hero intro script removed as PartnerRingSection does not use it */}
        
        {/*
          GlobeWrapper handles route-based blurring of the globe canvas.
        */}
        <GlobeWrapper />
        
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
        
        {/* Global Scroll to Top Button */}
        <ScrollToTop />

        
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
