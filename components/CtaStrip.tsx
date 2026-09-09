import Link from "next/link";
import { BellRing, ArrowRight } from "lucide-react";

export default function CtaStrip() {
  return (
    <section className="w-full bg-secondary-container py-8 text-on-secondary-container border-t border-secondary-fixed/40">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
            <BellRing className="w-6 h-6 text-secondary-fixed animate-bounce" />
          </div>
          <div>
            <h4 className="font-headline-sm text-title-lg text-primary-container font-bold">
              Enrollment Open for Session 2026–27
            </h4>
            <p className="font-body-sm text-body-sm text-on-secondary-container/90 mt-0.5">
              To uphold our 1:12 teacher-scholar ratio, batch admissions are strictly first-come, first-served.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#inquiry-form"
            className="px-6 py-3 rounded-full bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <span>Enroll Scholar Now</span>
            <ArrowRight className="w-4 h-4 text-secondary-fixed" />
          </a>
        </div>
      </div>
    </section>
  );
}
