import Link from "next/link";
import { getAcademicSession } from "@/config/site";
import WingCard from "@/components/WingCard";
import EntranceMentorship from "@/components/EntranceMentorship";
import TuitionSection from "@/components/TuitionSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import AdmissionForm from "@/components/AdmissionForm";
import FaqAccordion from "@/components/FaqAccordion";
import CtaStrip from "@/components/CtaStrip";
import PhotoCarousel from "@/components/PhotoCarousel";
import { Home, Stars, Baby, BookOpen, Microscope } from "lucide-react";

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

      {/* Photo Carousel — page ka pehla section */}
      <PhotoCarousel />

      {/* Wing Breakdown */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-badge text-label-badge uppercase font-bold tracking-wider mb-2">
              Structured Learning Continuum
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary-container">
              Wing-by-Wing Academic Architecture
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Tailored stages designed to respect individual developmental milestones while nurturing strong academic and cognitive agility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <WingCard
              icon={<Baby className="w-7 h-7 text-on-tertiary-fixed-variant" />}
              title="Early Childhood Wing"
              subTitle="Montessori & Play-Way Pedagogical Core"
              description="Creating a secure sanctuary where initial separation anxiety transforms into boundless curiosity, active verbal habits, and social joy."
              grades={["Playgroup", "Nursery", "LKG - UKG"]}
              features={[
                { title: "Rhymes & Phonics", desc: "Jolly phonics alphabet sounds & vocal articulation." },
                { title: "Number Magic", desc: "Tactile abacus, geometric sorting & counting beads." },
                { title: "Art & Motor Skills", desc: "Clay modeling, finger tracing & balance exercises." },
                { title: "Social Play", desc: "Table etiquette, sharing circles & handwashing routines." },
              ]}
              timings="8:30 AM – 12:00 PM"
              timingNote="Saturday: Closes early"
              accentColor="tertiary"
            />

            <WingCard
              icon={<BookOpen className="w-7 h-7 text-primary" />}
              title="Primary School Wing"
              subTitle="Interactive Experiential Academic Foundation"
              description="Transitioning from purely tactile play to conceptual literacy, analytical calculation, bilingual fluency, and civic consciousness."
              grades={["Class 1st", "to", "Class 5th"]}
              features={[
                { title: "English Fluency Lab", desc: "Spelling bee, loud reading & vocabulary journals." },
                { title: "Mental Mathematics", desc: "Vedic math shortcuts & word-problem deciphering." },
                { title: "Environmental Studies", desc: "Nature scrapbooks, experiments & conservation." },
                { title: "Moral Science & GK", desc: "Current affairs quizzes & civic value education." },
              ]}
              timings="8:30 AM – 12:00 PM"
              timingNote="Saturday: Closes early"
              accentColor="primary"
            />

            <WingCard
              icon={<Microscope className="w-7 h-7 text-on-tertiary" />}
              title="Middle School Wing"
              subTitle="Deep Conceptual Rigor & Examination Stamina"
              description="Preparing mature students for high school board readiness through disciplined analytical methods, experimental science, and rigorous assessment."
              grades={["Class 6th", "Class 7th", "Class 8th"]}
              features={[
                { title: "Physics, Chem & Bio", desc: "Integrated lab demonstrations & formulas." },
                { title: "Algebra & Geometry", desc: "Multi-step theorem proofs & coordinate systems." },
                { title: "Computer Fundamentals", desc: "MS Office tools, algorithms & digital safety." },
                { title: "Exam Stamina", desc: "Formal essay syntax drills & timed mock tests." },
              ]}
              timings="8:30 AM – 12:00 PM"
              timingNote="Saturday: Closes early"
              accentColor="secondary"
            />
          </div>
        </div>
      </section>

      {/* Flagship Entrance Mentorship */}
      <EntranceMentorship />

      {/* Tuition Wing */}
      <TuitionSection />

      {/* 3 Step Journey */}
      <AdmissionProcess />

      {/* Form */}
      <AdmissionForm />

      {/* FAQs */}
      <FaqAccordion />

      {/* CTA */}
      <CtaStrip />
    </div>
  );
}
