import {
  Award,
  Brain,
  MessageSquare,
  SpellCheck,
  Zap,
  Calendar,
} from "lucide-react";

export default function EntranceMentorship() {
  return (
    <section
      id="entrance-coaching"
      className="w-full py-16 lg:py-24 bg-primary text-on-primary relative overflow-hidden"
    >
      {/* Decorative ambient halo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/20 text-secondary-fixed w-fit font-label-badge text-label-badge uppercase font-bold tracking-widest border border-secondary/30">
              Private Tuition for Classes 4 to 8
            </div>

            <h2 className="font-headline-lg text-headline-lg text-secondary-fixed leading-tight">
              Focused Private Tuition for Stronger School Performance
            </h2>

            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
              Personalised after-school support for students from Class 4 to Class 8, with patient guidance, regular practice, and focused attention for every learner.
            </p>

            {/* Tuition Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["Classes 4 to 8", "Small Batches", "Personal Attention", "Regular Doubt Clearing"].map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1.5 rounded-lg bg-primary-container text-secondary-fixed font-title-md text-body-sm shadow-sm border border-primary-container/80"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Syllabus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-primary-container/60 rounded-xl border border-primary-container/80">
                <div className="flex items-center gap-2 text-secondary-fixed font-title-md text-title-md mb-1">
                  <Brain className="w-5 h-5 text-secondary-fixed" />
                  <span>Strong Concept Clarity</span>
                </div>
                <p className="text-surface-container-high text-body-sm">
                  Build clear fundamentals in Maths, Science, and core school subjects.
                </p>
              </div>

              <div className="p-4 bg-primary-container/60 rounded-xl border border-primary-container/80">
                <div className="flex items-center gap-2 text-secondary-fixed font-title-md text-title-md mb-1">
                  <MessageSquare className="w-5 h-5 text-secondary-fixed" />
                  <span>Homework &amp; Revision Support</span>
                </div>
                <p className="text-surface-container-high text-body-sm">
                  Complete schoolwork on time with guided revision before tests and exams.
                </p>
              </div>

              <div className="p-4 bg-primary-container/60 rounded-xl border border-primary-container/80">
                <div className="flex items-center gap-2 text-secondary-fixed font-title-md text-title-md mb-1">
                  <SpellCheck className="w-5 h-5 text-secondary-fixed" />
                  <span>Individual Doubt Clearing</span>
                </div>
                <p className="text-surface-container-high text-body-sm">
                  Get step-by-step explanations and ask questions without hesitation.
                </p>
              </div>

              <div className="p-4 bg-primary-container/60 rounded-xl border border-primary-container/80">
                <div className="flex items-center gap-2 text-secondary-fixed font-title-md text-title-md mb-1">
                  <Zap className="w-5 h-5 text-secondary-fixed" />
                  <span>Test Preparation</span>
                </div>
                <p className="text-surface-container-high text-body-sm">
                  Regular worksheets and practice tests to improve accuracy and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Batch Schedules Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface-container-lowest text-on-surface rounded-2xl p-6 sm:p-8 shadow-xl border border-surface-container-high">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <h3 className="font-headline-sm text-headline-sm text-primary-container">
                  Private Tuition Batches
                </h3>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge font-bold uppercase">
                      Classes 4–8
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface">
                      Morning Tuition Batch
                    </span>
                    <span className="text-secondary font-bold text-body-sm">8:30 AM – 12:00 PM</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Focus: Guided learning, revision, and daily practice.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface">
                      Evening Tuition Batch
                    </span>
                    <span className="text-secondary font-bold text-body-sm">3:00 PM – 6:00 PM</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Focus: Homework support, concept building, and doubt clearing. Summer and winter timings may vary.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface">
                      Saturday Support Batch
                    </span>
                    <span className="text-secondary font-bold text-body-sm">Saturday: Closes early</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Extra practice and weekly progress support for Classes 4–8.
                  </p>
                </div>
              </div>

              <a
                href="#inquiry-form"
                className="w-full py-3.5 px-6 rounded-full bg-secondary-container text-on-secondary-container font-title-md text-title-md font-bold hover:bg-secondary-fixed shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Book Private Tuition</span>
                <Calendar className="w-5 h-5" />
              </a>
            </div>

            {/* Track Record Trust Bar */}
            <div className="bg-primary-container p-5 rounded-2xl border border-primary-container/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-title-md text-secondary-fixed">Proven 12+ Year Track Record</div>
                <div className="text-body-sm text-surface-container-high leading-snug">
                  Hundreds of our scholars currently study and rank high in premier Bokaro schools.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
