import Link from "next/link";
import { getAcademicSession } from "@/config/site";
import AdmissionForm from "@/components/AdmissionForm";
import FaqAccordion from "@/components/FaqAccordion";
import CtaStrip from "@/components/CtaStrip";
import PhotoCarousel from "@/components/PhotoCarousel";
import { Home, Stars } from "lucide-react";

export const metadata = {
  title: `Academics & Admissions ${getAcademicSession().currentSession}`,
  description:
    "Comprehensive Academic Programs (Playgroup to Class 8th) & Premier CBSE School Entrance Exam Prep (DAV, DPS, GGPS, MGM) in Bokaro Steel City.",
};

export default function AcademicsAdmissionsPage() {
  return (
    <div className="w-full flex flex-col">

      {/* Breadcrumb Bar */}
      <div className="w-full bg-surface-container-low border-b border-surface-container-high/60">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-title-md font-semibold">Academics &amp; Admissions</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
            <Stars className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span className="font-title-md text-label-badge uppercase tracking-wider font-bold text-[11px] sm:text-xs">
              Limited Seats • Free Admission for Early Inquiries!
            </span>
          </div>
        </div>
      </div>

      {/* Hero Intro Section */}
      <section className="relative w-full bg-gradient-to-br from-primary via-primary to-primary-container overflow-hidden py-10 lg:py-14">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/20 border border-secondary-fixed/30 text-secondary-fixed font-label-badge text-xs font-bold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
            Session 2026–27 Admissions Open
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-primary font-bold leading-tight tracking-tight max-w-3xl mx-auto mb-3">
            Academics &amp;{" "}
            <span className="text-secondary-fixed">Admissions</span>
          </h1>

          <p className="text-on-primary/70 text-sm sm:text-base max-w-lg mx-auto">
            Playgroup to Class 8th · English Medium · Bokaro Steel City
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <PhotoCarousel />

      {/* Admission Form */}
      <AdmissionForm />

      {/* FAQs */}
      <FaqAccordion />

      {/* CTA Strip */}
      <CtaStrip />
    </div>
  );
}
