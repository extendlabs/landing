import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://extend-labs.com"
  ),
  title: {
    default:
      "Extend Labs - Software Development Agency | Build Faster, Ship Better",
    template: "%s | Extend Labs",
  },
  description:
    "Transform your ideas into powerful software solutions. Expert developers specializing in AI, web platforms, mobile apps, and enterprise solutions.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI development",
    "software house",
    "custom software",
    "full-stack development",
    "React development",
    "Python development",
    "Next.js development",
    "TypeScript development",
  ],
  authors: [{ name: "Extend Labs" }],
  creator: "Extend Labs",
  publisher: "Extend Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Extend Labs",
    title: "Extend Labs - Ship Faster with Expert Developers",
    description:
      "Hire an experienced and talented team of developers to build your next project. Transform your ideas into powerful software solutions.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Extend Labs - Ship Faster with Expert Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extend Labs - Ship Faster with Expert Developers",
    description:
      "Hire an experienced and talented team of developers to build your next project.",
    images: ["/og_image.png"],
    creator: "@extendlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://extend-labs.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Extend Labs",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      description:
        "Transform your ideas into powerful software solutions. Expert developers specializing in AI, web platforms, mobile apps, and enterprise solutions.",
      sameAs: ["https://twitter.com/extendlabs"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Extend Labs",
      description:
        "Transform your ideas into powerful software solutions. Expert developers specializing in AI, web platforms, mobile apps, and enterprise solutions.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "Software Development",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: "Worldwide",
      description:
        "Expert software development services including AI applications, web platforms, mobile apps, and enterprise solutions.",
      offers: {
        "@type": "Offer",
        description: "Custom software development services",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
