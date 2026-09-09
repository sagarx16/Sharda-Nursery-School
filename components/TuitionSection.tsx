import Image from "next/image";
import { Users, CheckSquare, BarChart3, BookOpen } from "lucide-react";

export default function TuitionSection() {
  return (
    <section id="tuition-wing" className="w-full py-16 lg:py-24 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Image & Timing Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-surface-container-high border border-surface-container-highest">
              <Image
                src="/images/tuition-center.jpg"
                alt="Focused tuition classroom scene in Bokaro with small group of attentive students receiving personalized mentorship"
                width={800}
                height={600}
                className="w-full h-80 lg:h-[440px] object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-primary-container text-on-primary px-4 py-1.5 rounded-full font-label-badge text-label-badge font-bold uppercase tracking-wider shadow-md">
              Evening Wing (2:30 PM - 7:00 PM)
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-surface-container-highest text-primary font-label-badge text-label-badge uppercase font-bold tracking-wider w-fit">
              Academic Reinforcement
            </span>

            <h2 className="font-headline-lg text-headline-lg text-primary-container">
              Comprehensive Tuition Center Wing (Classes 3rd to 8th)
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              School classrooms often move faster than a child&apos;s questions. Our dedicated after-school tuition wing provides the unhurried individual mentoring required to solidify core fundamentals and banish academic exam anxiety.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed/40 text-secondary flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-title-md text-title-md text-on-surface mb-1">Strict Micro-Batches</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Only 8 to 12 students per batch ensuring no student is lost in the crowd.
                </p>
              </div>

              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-3">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <h4 className="font-title-md text-title-md text-on-surface mb-1">Daily HW Guidance</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Systematic daily homework resolution without turning into mindless spoon-feeding.
                </p>
              </div>

              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="font-title-md text-title-md text-on-surface mb-1">Weekly Diagnostic Reports</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Continuous performance testing with weekly diagnostic sheets sent to parents.
                </p>
              </div>
            </div>

            {/* Subjects Matrix */}
            <div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high flex flex-col gap-3">
              <div className="font-title-md text-title-md text-on-surface font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-container" />
                <span>Subjects Mentored with Specialization:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-body-sm text-on-surface-variant">
                <span className="px-3.5 py-1.5 bg-surface-container-high rounded-full font-medium">
                  Mathematics &amp; Mental Arithmetic
                </span>
                <span className="px-3.5 py-1.5 bg-surface-container-high rounded-full font-medium">
                  Science (Physics, Chem, Bio)
                </span>
                <span className="px-3.5 py-1.5 bg-surface-container-high rounded-full font-medium">
                  English Grammar &amp; Writing Composition
                </span>
                <span className="px-3.5 py-1.5 bg-surface-container-high rounded-full font-medium">
                  Social Sciences &amp; History
                </span>
                <span className="px-3.5 py-1.5 bg-surface-container-high rounded-full font-medium">
                  Hindi / Sanskrit Basics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
