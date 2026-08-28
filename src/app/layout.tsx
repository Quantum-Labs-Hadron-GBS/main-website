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

import { generatePageMetadata } from "./lib/seo";
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from "./lib/schema";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Hadron GBS | IT Consulting, ServiceNow, AI & Digital Transformation",
    description: "Hadron GBS is a global IT consulting and digital transformation company specializing in ServiceNow, AI, Cloud, Enterprise Service Management, Automation, and Custom Software Development for enterprises worldwide.",
    path: "/",
  }),
  metadataBase: new URL("https://www.hadrongbs.com"),
  icons: {
    icon: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} data-theme="light" suppressHydrationWarning>
      <body className="light-theme" suppressHydrationWarning>
        {/* Anti-FOUC script for the Hero intro sequence */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.pathname === '/') {
                document.body.classList.add('intro-running');
              }
            `
          }}
        />
        
        {/*
          GlobeWrapper handles route-based blurring of the globe canvas.
        */}
        <GlobeWrapper />
        
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
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
