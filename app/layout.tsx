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
	title: "Extend Labs - Software Development Agency | Build Faster, Ship Better",
	description:
		"Transform your ideas into powerful software solutions. Expert developers specializing in AI applications, web platforms, mobile apps, and enterprise solutions. 50+ projects delivered, 99% on-time delivery.",
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
	],
	openGraph: {
		title: "Extend Labs - Software Development Agency",
		description: "Transform your ideas into powerful software solutions. Expert developers ready to build your next project.",
		type: "website",
	},
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
