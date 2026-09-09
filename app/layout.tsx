import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, getAcademicSession } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const session = getAcademicSession();

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Admissions Open ${session.currentSession}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "S.N. Public School",
    "Tuition Center Bokaro",
    "School in Bokaro Sector 9/C",
    "Nursery School Bokaro",
    "DAV Entrance Coaching",
    "DPS Entrance Coaching Bokaro",
    "GGPS Entrance Exam Prep",
    "Best Playgroup Bokaro",
    "CBSE English Medium School Bokaro",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: "https://shardanurserybokaro.com",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full pt-[128px] sm:pt-[116px] bg-surface min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
