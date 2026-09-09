import Link from "next/link";
import { getAcademicSession } from "@/config/site";
import AdmissionForm from "@/components/AdmissionForm";
import FaqAccordion from "@/components/FaqAccordion";
import CtaStrip from "@/components/CtaStrip";

import AcademicCurriculum from "@/components/AcademicCurriculum";
import { Home, Stars } from "lucide-react";

export const metadata = {
  title: `Academics & Admissions ${getAcademicSession().currentSession}`,
  description:
    "Comprehensive Academic Programs (Playgroup to Class 8th) & Premier CBSE School Entrance Exam Prep (DAV, DPS, GGPS, MGM) in Bokaro Steel City.",
};

export default function AcademicsAdmissionsPage() {
  return (
    <div className="w-full flex flex-col pt-4">

      {/* Breadcrumb Bar */}
      <div className="w-full bg-surface-container-low border-b border-surface-container-high/60">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2.5">
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



      {/* Academic Curriculum & Learning Framework */}
      <AcademicCurriculum />

      {/* Admission Form */}
      <AdmissionForm />

      {/* FAQs */}
      <FaqAccordion />

      {/* CTA Strip */}
      <CtaStrip />
    </div>
  );
}
