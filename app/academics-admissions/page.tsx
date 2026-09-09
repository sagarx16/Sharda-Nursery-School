import Metadata from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getAcademicSession } from "@/config/site";
import WingCard from "@/components/WingCard";
import EntranceMentorship from "@/components/EntranceMentorship";
import TuitionSection from "@/components/TuitionSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import AdmissionForm from "@/components/AdmissionForm";
import FaqAccordion from "@/components/FaqAccordion";
import CtaStrip from "@/components/CtaStrip";
import PhotoCarousel from "@/components/PhotoCarousel";
import { Home, Stars, ArrowRight, Phone, Baby, BookOpen, Microscope, Award, Building2 } from "lucide-react";

export const metadata = {
  title: `Academics & Admissions ${getAcademicSession().currentSession}`,
  description:
    "Comprehensive Academic Programs (Playgroup to Class 8th) & Premier CBSE School Entrance Exam Prep (DAV, DPS, GGPS, MGM) in Bokaro Steel City.",
};

export default function AcademicsAdmissionsPage() {
  const session = getAcademicSession();

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb & Top Hero Header */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-12 lg:py-16 border-b border-surface-container-high/60">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
          {/* Breadcrumb & Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-primary font-title-md font-semibold">Academics &amp; Admissions</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
              <Stars className="w-4 h-4 text-secondary shrink-0" />
              <span className="font-title-md text-label-badge uppercase tracking-wider font-bold">
                Limited Seats • Free Admission Offered for Early Inquiries!
              </span>
            </div>
          </div>

          {/* Hero Titles & Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest text-primary w-fit font-label-badge text-label-badge uppercase font-bold tracking-widest border border-surface-container-high">
                Session {session.currentSessionFull} Admissions
              </div>

              <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary-container tracking-tight leading-tight font-bold">
                Comprehensive Academic Programs &amp; Admissions {session.currentSession}
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                From playful early steps in Nursery to high-achievement Class 8th foundation and premier school entrance coaching. Fostering discipline, inquisitive thinking, and holistic character in the heart of Bokaro Steel City.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary shadow-md hover:shadow-xl transition-all"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-5 h-5 text-secondary-fixed" />
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-lowest text-primary font-title-md text-title-md shadow-sm hover:bg-surface-container-high transition-colors border border-surface-container-high"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary-container leading-none font-bold">100%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">DAV/DPS Intake Record</span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col">
                  <span className="font-headline-md text-headline-md text-secondary leading-none font-bold">1:12</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">Teacher-Scholar Ratio</span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col">
                  <span className="font-headline-md text-headline-md text-tertiary leading-none font-bold">Zero</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">Admission Fee Offer</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high border border-surface-container-highest">
                <Image
                  src="/images/classroom-hero.jpg"
                  alt="Indian kindergarten and primary school children in tidy uniforms happily engaged in creative learning in Bokaro"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-80 lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-5 h-5 text-secondary-fixed" />
                    <span className="font-title-md text-title-md text-secondary-fixed font-bold">Affiliated Academic Methodology</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-surface-container-lowest/90">
                    Holistic curriculum blending foundational English phonics with CBSE aligned analytical reasoning.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-4 rounded-xl shadow-lg border border-surface-container-high hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-title-md text-title-md text-on-surface leading-tight font-bold">Sec 9/C Campus</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Morning &amp; Daycare Friendly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wing Breakdown */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-badge text-label-badge uppercase font-bold tracking-wider mb-2">
              Structured Learning Continuum
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-container">
              Wing-by-Wing Academic Architecture
            </h2>
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

      {/* Campus Photo Carousel */}
      <PhotoCarousel />

      {/* Form */}
      <AdmissionForm />

      {/* FAQs */}
      <FaqAccordion />

      {/* CTA */}
      <CtaStrip />
    </div>
  );
}
