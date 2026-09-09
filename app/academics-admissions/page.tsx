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

      {/* Hero Intro Section */}
      <section className="relative w-full bg-gradient-to-br from-primary via-primary to-primary-container overflow-hidden py-14 lg:py-20">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 w-[28rem] h-[28rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-secondary-fixed/5 blur-2xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10 text-center">

          {/* Session badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/20 border border-secondary-fixed/30 text-secondary-fixed font-label-badge text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
            Session 2026–27 Admissions Now Open
          </div>

          {/* Main heading */}
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-primary font-bold leading-tight tracking-tight max-w-3xl mx-auto mb-4">
            Where Every Child's Journey{" "}
            <span className="text-secondary-fixed">Begins with Purpose</span>
          </h1>

          {/* Subtext */}
          <p className="font-body-lg text-on-primary/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            From curious Playgroup beginners to confident Class 8th scholars — Sharda Nursery Public School nurtures minds, builds character, and prepares every student for a brilliant future in Bokaro Steel City.
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            {[
              { value: "20+", label: "Years of Excellence" },
              { value: "100%", label: "DAV / DPS Selection" },
              { value: "1 : 12", label: "Teacher–Student Ratio" },
              { value: "Zero", label: "Admission Fee Offer" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-5 py-3 rounded-2xl bg-on-primary/10 border border-on-primary/15 backdrop-blur-sm min-w-[110px]"
              >
                <span className="font-headline text-xl sm:text-2xl font-bold text-secondary-fixed leading-none">{stat.value}</span>
                <span className="font-body-sm text-on-primary/70 text-[11px] mt-1 text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary-fixed text-primary font-title-md font-bold text-sm hover:bg-secondary-fixed/90 shadow-lg hover:shadow-xl transition-all"
            >
              Apply for Admission →
            </a>
            <a
              href="tel:+919835112975"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-on-primary/10 border border-on-primary/20 text-on-primary font-title-md font-semibold text-sm hover:bg-on-primary/20 transition-all"
            >
              📞 Call: +91 98351 12975
            </a>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
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
