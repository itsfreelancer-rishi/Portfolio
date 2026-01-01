import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rishifreelancer.me'),
  title: {
    default: "Rishi Ramandwal - Premium Web Design Portfolio",
    template: "%s | Rishi Ramandwal"
  },
  description: "Freelance web developer specializing in high-converting portfolio websites for US & UK service professionals. Transform your online presence and attract premium clients.",
  keywords: ["freelance web developer", "portfolio website design", "high-converting websites", "web design for photographers", "web design for lawyers", "premium web development", "Rishi Ramandwal"],
  authors: [{ name: "Rishi Ramandwal" }],
  creator: "Rishi Ramandwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rishifreelancer.me",
    title: "Rishi Ramandwal - Premium Web Design Portfolio",
    description: "Freelance web developer specializing in high-converting portfolio websites for service professionals.",
    siteName: "Rishi Ramandwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Ramandwal - Premium Web Design Portfolio",
    description: "Freelance web developer specializing in high-converting portfolio websites.",
    creator: "@itsfreelancer.rishi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pStf4pSm-EZCuj5KlJtXnJNHr_vP6DDBFCDcLoOGJ9g', // Add your Google Search Console verification code
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema, websiteSchema } from "@/lib/schema";

// ... (rest of imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H6CYYT61C4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H6CYYT61C4');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased min-h-screen bg-background text-foreground font-sans selection:bg-white/20"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
