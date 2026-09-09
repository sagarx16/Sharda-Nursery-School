import {
  BookOpen,
  Sparkles,
  Brain,
  Award,
  CheckCircle2,
  Cpu,
  Calculator,
  Languages,
  Atom,
  Users,
  Clock,
  Compass,
} from "lucide-react";

export default function AcademicCurriculum() {
  const learningStages = [
    {
      badge: "Foundational Stage",
      title: "Early Childhood & Nursery",
      classes: "Playgroup • Nursery • LKG • UKG",
      accent: "bg-tertiary-fixed text-on-tertiary-fixed-variant border-secondary-container",
      badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
      icon: <Brain className="w-6 h-6 text-secondary" />,
      desc: "Montessori-inspired play-way learning ensuring a joyful, fear-free introduction to language, numbers, and socialization.",
      outcomes: [
        "Jolly Phonics & letter-sound recognition",
        "Tactile counting, number sense & shapes",
        "Sensory play, clay modeling & motor skills",
        "Story circles, rhymes & table manners",
      ],
    },
    {
      badge: "Preparatory Stage",
      title: "Primary Academic Wing",
      classes: "Class 1st to Class 5th",
      accent: "bg-primary-fixed text-on-primary-fixed border-primary-container",
      badgeColor: "bg-primary-fixed text-primary",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      desc: "Structured CBSE-aligned foundation focused on conceptual clarity, fluent English communication, and analytical math.",
      outcomes: [
        "English fluency, loud reading & spelling bees",
        "Mental arithmetic & Vedic math problem solving",
        "Environmental Studies (EVS) & hands-on nature scrapbooks",
        "Moral values, daily general knowledge & civic habits",
      ],
    },
    {
      badge: "Middle Stage",
      title: "Middle School & Board Foundation",
      classes: "Class 6th to Class 8th",
      accent: "bg-secondary-container text-on-secondary-container border-secondary",
      badgeColor: "bg-secondary-container text-on-secondary-container",
      icon: <Atom className="w-6 h-6 text-tertiary" />,
      desc: "Deep academic rigor preparing scholars for CBSE high school competitions, Olympiads, and school entrance exams.",
      outcomes: [
        "Physics, Chemistry & Biology fundamental concepts",
        "Algebra, Geometry theorems & logical coordinate math",
        "Computer applications, algorithms & digital literacy",
        "Timed mock exams, essay composition & exam stamina",
      ],
    },
  ];

  const academicPillars = [
    {
      icon: <Languages className="w-5 h-5 text-primary" />,
      title: "English Fluency & Phonics Lab",
      desc: "Daily interactive speech drills, vocabulary journals, and pronunciation exercises so every child speaks with confidence.",
    },
    {
      icon: <Calculator className="w-5 h-5 text-secondary" />,
      title: "Mental Math & Logical Reasoning",
      desc: "Speed arithmetic techniques and word-problem decoding that make mathematics intuitive rather than intimidating.",
    },
    {
      icon: <Atom className="w-5 h-5 text-tertiary" />,
      title: "Experiential Science Demonstrations",
      desc: "Practical lab models and everyday science demonstrations connecting textbook theories to real-world observations.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: "Computer Basics & Digital Literacy",
      desc: "Hands-on computer fundamentals, MS Office tools, and digital safety from early primary grades onwards.",
    },
    {
      icon: <Users className="w-5 h-5 text-secondary" />,
      title: "1:12 Individual Scholar Attention",
      desc: "Strictly limited classroom batches ensuring teachers identify and nurture each student's unique learning pace.",
    },
    {
      icon: <Award className="w-5 h-5 text-tertiary" />,
      title: "Entrance Exam & Olympiad Readiness",
      desc: "Specialized pattern practice for premier CBSE schools (DAV, DPS, GGPS, MGM) and talent search competitions.",
    },
  ];

  const dailySchedule = [
    {
      time: "08:30 AM – 09:00 AM",
      title: "Morning Assembly & Value Thought",
      desc: "Sanskrit shlokas, thought for the day, news headlines, and national anthem.",
    },
    {
      time: "09:00 AM – 10:30 AM",
      title: "Core Language & Mathematics Periods",
      desc: "Focused morning hours dedicated to English grammar, writing drills, and mathematical calculations.",
    },
    {
      time: "10:30 AM – 10:50 AM",
      title: "Snack & Supervised Activity Break",
      desc: "Nutritious snack time with teacher guidance on handwashing, sharing, and etiquette.",
    },
    {
      time: "10:50 AM – 12:00 PM",
      title: "Science, Social Studies & Creative Arts",
      desc: "Interactive exploration, scrapbooks, drawing, clay modeling, and general knowledge quizzes.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        
        {/* Section 1: Curriculum Stages */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase font-bold tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            CBSE Aligned Curriculum
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container leading-tight">
            Comprehensive Academic Framework
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            A carefully sequenced learning journey from early childhood exploration to strong middle-school board foundation.
          </p>
        </div>

        {/* 3 Academic Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {learningStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-surface-container-high/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center border border-surface-container-high">
                    {stage.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full ${stage.badgeColor} font-label-badge text-[10px] sm:text-xs font-bold uppercase tracking-wider`}>
                    {stage.badge}
                  </span>
                </div>

                <h3 className="font-headline-sm text-title-lg sm:text-headline-sm text-primary-container mb-1">
                  {stage.title}
                </h3>
                <p className="font-title-md text-xs sm:text-sm text-secondary font-semibold mb-3">
                  {stage.classes}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  {stage.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-surface-container-high">
                  <div className="font-title-md text-xs sm:text-sm text-on-surface font-bold mb-2">
                    Core Learning Outcomes:
                  </div>
                  {stage.outcomes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-body-sm text-on-surface-variant">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Core Academic Pillars */}
        <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 lg:p-12 border border-surface-container-high/80 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-label-badge uppercase font-bold tracking-wider mb-2">
              Pedagogical Excellence
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary-container">
              Our 6 Core Academic Pillars
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              How we ensure every scholar develops conceptual mastery, self-discipline, and strong moral values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl shadow-xs hover:shadow-sm border border-surface-container-high transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center mb-3 border border-surface-container-high">
                  {pillar.icon}
                </div>
                <h4 className="font-title-md text-base sm:text-title-md text-on-surface font-bold mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Daily Academic Schedule & Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase font-bold tracking-wider w-fit">
              <Clock className="w-3.5 h-3.5" />
              <span>Structured Day</span>
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary-container">
              A Purposeful &amp; Balanced School Day
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every morning at S.N. Public School is thoughtfully structured to blend academic focus with physical health, moral guidance, and interactive creative play.
            </p>
            <div className="p-4 bg-primary-container text-on-primary rounded-xl mt-2 flex items-start gap-3">
              <Compass className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
              <div className="text-xs sm:text-body-sm">
                <strong className="text-secondary-fixed block mb-0.5">Instruction Timings:</strong>
                Mon – Sat: 8:30 AM – 12:00 PM (Saturday closes early for co-curricular activities).
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {dailySchedule.map((slot, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-surface-container-high shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
              >
                <div>
                  <div className="font-title-md text-sm sm:text-base text-primary-container font-bold">
                    {slot.title}
                  </div>
                  <div className="text-xs sm:text-body-sm text-on-surface-variant mt-0.5">
                    {slot.desc}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-[11px] sm:text-xs font-bold shrink-0 self-start sm:self-center font-mono">
                  {slot.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
