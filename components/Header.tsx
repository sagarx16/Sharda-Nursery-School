"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, getAcademicSession } from "@/config/site";
import {
  Phone,
  MapPin,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Home,
  GraduationCap,
  Camera,
  Compass,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const session = getAcademicSession();

  const getNavLabel = (href: string, fallback: string) => {
    switch (href) {
      case "/":
        return "Home";
      case "/academics-admissions":
        return "Academics";
      case "/campus-life-gallery":
        return "Campus";
      case "/contact":
        return "Contact";
      default:
        return fallback;
    }
  };

  // Helper to map route to matching icon symbol
  const getNavIcon = (href: string) => {
    switch (href) {
      case "/":
        return <Home className="w-4 h-4 shrink-0" />;
      case "/academics-admissions":
        return <GraduationCap className="w-4 h-4 shrink-0" />;
      case "/campus-life-gallery":
        return <Camera className="w-4 h-4 shrink-0" />;
      case "/contact":
        return <Compass className="w-4 h-4 shrink-0" />;
      default:
        return <Home className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Top Banner Bar */}
      <div className="w-full bg-primary text-on-primary border-b border-primary-container/50">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 h-9 flex items-center justify-between font-body-sm text-xs">
          <div className="min-w-0 flex items-center gap-2 sm:gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-secondary-fixed hover:text-white transition-colors font-title-md font-semibold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
            <span className="hidden sm:inline text-outline-variant/60">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-surface-container-lowest/90 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
              <span>{siteConfig.location}</span>
            </span>
          </div>

          <div className="min-w-0 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-secondary-fixed animate-pulse shrink-0" />
            <span className="font-title-md text-xs sm:text-base text-secondary-fixed tracking-wide font-semibold truncate">
              Admissions Open {session.currentSession}
            </span>
            <span className="hidden md:inline text-surface-container-lowest/85 font-medium">
              • Free Admission Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar - Fixed Height & Centered Layout */}
      <div className="h-20 w-full bg-surface-container-lowest/95 backdrop-blur-xl border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-6 h-full flex items-center justify-between gap-1 sm:gap-3 lg:gap-4 xl:gap-2">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink group py-1">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Image
                src="/School Emblem Logo.png"
                alt="Sharda Nursery Public School Emblem Crest"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex min-w-0 max-w-[175px] sm:max-w-none flex-col justify-center overflow-hidden">
              <span className="font-headline text-[10px] sm:text-base xl:text-base tracking-tight text-primary-container leading-tight font-bold group-hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                SHARDA NURSERY PUBLIC SCHOOL
              </span>
              <span className="hidden sm:block font-label-badge text-[10px] xl:text-[10px] uppercase text-secondary font-bold tracking-wider mt-1 whitespace-nowrap">
                &amp; TUITION CENTER • English Medium, Bokaro
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Single Line, Perfectly Centered */}
          <nav className="hidden xl:flex items-center gap-1.5 shrink-0">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`h-9 px-2.5 xl:px-3 rounded-full text-xs xl:text-xs font-title-md font-semibold transition-all inline-flex items-center gap-1 whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? "bg-primary-container/10 text-primary-container shadow-2xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  <span className={isActive ? "text-primary" : "text-on-surface-variant/75"}>
                    {getNavIcon(link.href)}
                  </span>
                  <span className="whitespace-nowrap">{getNavLabel(link.href, link.name)}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-primary-container rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-[10px] font-bold uppercase tracking-wide border border-secondary-container shrink-0 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
              <span>Admission Open</span>
            </div>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="h-8 w-8 sm:h-9 sm:w-auto sm:px-4 xl:px-3 rounded-full bg-primary-container text-on-primary font-title-md text-xs sm:text-sm hover:bg-primary transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center sm:justify-start gap-1.5 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
              <span className="hidden sm:inline">Enroll:</span>
              <span className="hidden sm:inline font-bold">{siteConfig.phoneRaw}</span>
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-surface-container text-primary hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-center shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[116px] bg-surface-container-lowest border-b border-surface-container-high shadow-2xl p-4 sm:p-5 transition-all animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary-container text-on-primary font-bold shadow-sm"
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container-high border border-surface-container/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-secondary-fixed" : "text-primary"}>
                      {getNavIcon(link.href)}
                    </span>
                    <span className="font-title-md text-sm whitespace-nowrap">
                      {getNavLabel(link.href, link.name)}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-70 shrink-0" />
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
