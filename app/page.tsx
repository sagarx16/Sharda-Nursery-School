import Image from "next/image";
import Link from "next/link";
import { siteConfig, getAcademicSession } from "@/config/site";
import WingCard from "@/components/WingCard";
import EntranceMentorship from "@/components/EntranceMentorship";
import TuitionSection from "@/components/TuitionSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import AdmissionForm from "@/components/AdmissionForm";
import FaqAccordion from "@/components/FaqAccordion";
import CtaStrip from "@/components/CtaStrip";
import {
  Sparkles,
  ArrowRight,
  Phone,
  Baby,
  BookOpen,
  Microscope,
  CheckCircle2,
  Award,
  Users,
  Building2,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  const session = getAcademicSession();

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-16 lg:py-24 border-b border-surface-container-high/60">
        {/* Subtle Ambient Gold/Crimson Blurred Circles */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="font-title-md text-label-badge uppercase tracking-wider font-bold">
                Limited Seats • Free Admission Offered for Session {session.currentSession}!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest text-primary w-fit font-label-badge text-label-badge uppercase font-bold tracking-widest border border-surface-container-high">
                Session {session.currentSessionFull} Admissions
              </div>

              <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-primary-container tracking-tight leading-[1.15] font-bold">
                Nurturing Excellence from Early Steps to Scholastic Success
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Welcome to <strong className="text-primary-container">{siteConfig.name}</strong> in Bokaro Steel City. We combine play-way Montessori foundation for early years with disciplined CBSE academic rigor and specialized entrance mentorship for premier schools like D.A.V., D.P.S., and G.G.P.S.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary shadow-md hover:shadow-xl transition-all"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-5 h-5 text-secondary-fixed" />
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-surface-container-lowest text-primary font-title-md text-title-md shadow-sm hover:bg-surface-container-high transition-colors border border-surface-container-high"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-container-high/80">
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                    {siteConfig.stats.intakeRecord}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                    {siteConfig.stats.intakeRecordLabel}
                  </span>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col">
                  <span className="font-headline-md text-headline-md text-secondary leading-none font-bold">
                    {siteConfig.stats.ratio}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                    {siteConfig.stats.ratioLabel}
                  </span>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col">
                  <span className="font-headline-md text-headline-md text-tertiary leading-none font-bold">
                    {siteConfig.stats.feeOffer}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                    {siteConfig.stats.feeOfferLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high border border-surface-container-highest">
                <Image
                  src="/images/classroom-hero.jpg"
                  alt="Indian kindergarten and primary school children in tidy uniforms engaged in creative learning in Bokaro classroom"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-80 lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-5 h-5 text-secondary-fixed" />
                    <span className="font-title-md text-title-md text-secondary-fixed font-bold">
                      Affiliated Academic Methodology
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-surface-container-lowest/90">
                    Holistic curriculum blending foundational English phonics with CBSE aligned analytical reasoning.
                  </p>
                </div>
              </div>

              {/* Overlapping Decorative Badge */}
              <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-4 rounded-xl shadow-lg border border-surface-container-high hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-title-md text-title-md text-on-surface leading-tight font-bold">
                    Sector 9/C Campus
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Morning &amp; Daycare Friendly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Architecture Section */}
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
                { title: "Rhymes & Phonics", desc: "Jolly phonics alphabet sounds & storytelling." },
                { title: "Number Magic", desc: "Tactile abacus, geometric sorting & counting." },
                { title: "Art & Motor Skills", desc: "Clay modeling, finger tracing & balance exercises." },
                { title: "Social Play", desc: "Table etiquette, handwashing routines & sharing circles." },
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
                { title: "English Fluency Lab", desc: "Spelling bee challenges, speech & reading." },
                { title: "Mental Mathematics", desc: "Vedic math shortcuts & word problem decoding." },
                { title: "Environmental Studies", desc: "Practical nature scrapbooks & simple experiments." },
                { title: "Moral Science & GK", desc: "Weekly quizzes, value stories & civic basics." },
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
                { title: "Physics, Chem & Bio", desc: "Integrated lab demos & structured diagrams." },
                { title: "Algebra & Geometry", desc: "Multi-step theorem proofs & coordinate systems." },
                { title: "Computer Fundamentals", desc: "MS Office tools, logic algorithms & safety." },
                { title: "Exam Stamina", desc: "Formal essay writing & timed mock tests." },
              ]}
              timings="8:30 AM – 12:00 PM"
              timingNote="Saturday: Closes early"
              accentColor="secondary"
            />
          </div>
        </div>
      </section>

      {/* Flagship Entrance Mentorship Section */}
      <EntranceMentorship />

      {/* Evening Tuition Center Wing */}
      <TuitionSection />

      {/* Admission Journey Steps */}
      <AdmissionProcess />

      {/* Interactive Admission Inquiry Form */}
      <AdmissionForm />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* Final Call to Action Ribbon */}
      <CtaStrip />
    </div>
  );
}
