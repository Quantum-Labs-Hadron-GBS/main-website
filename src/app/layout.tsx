import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import GlobeWrapper from "./components/GlobalGlobe/GlobeWrapper";

export const metadata: Metadata = {
  title: "Hadron GBS | The Fastest Growing ServiceNow Partner",
  description: "Hadron GBS is the leading software development company who provides Enterprise Service Management, end to end Digital Transformation, Cloud Management, Robotic Process Automation, and Custom App Development.",
  keywords: ["Enterprise Service Management", "Digital Transformation", "Cloud Management", "Robotic Process Automation", "ServiceNow Partner", "Hadron GBS"],
  openGraph: {
    title: "Hadron GBS | The Fastest Growing ServiceNow Partner",
    description: "Hadron GBS is the leading software development company who provides Enterprise Service Management, end to end Digital Transformation, Cloud Management, Robotic Process Automation, and Custom App Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hadron GBS",
              "url": "https://www.hadrongbs.com",
              "logo": "https://res.cloudinary.com/djxbxhgat/image/upload/v1784309674/Hadron-Logo_sb3pfk.png",
              "sameAs": [
                "https://x.com/HadronGBS",
                "https://www.linkedin.com/company/hadron-gbs/",
                "https://www.youtube.com/@HadronGBS",
                "https://www.facebook.com/profile.php?id=61560719736422"
              ],
              "description": "Hadron GBS is the leading software development company who provides Enterprise Service Management, end to end Digital Transformation, Cloud Management, Robotic Process Automation, and Custom App Development."
            })
          }}
        />
      </body>
    </html>
  );
}
