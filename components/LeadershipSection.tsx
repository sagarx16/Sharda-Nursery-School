import Image from "next/image";
import { Award, Sparkles, Quote, ShieldCheck } from "lucide-react";

interface LeaderProfile {
  name: string;
  title: string;
  roleBadge: string;
  image: string;
  bio: string;
  credentials?: string;
}

const leaders: LeaderProfile[] = [
  {
    name: "Mr. Anup Kumar",
    title: "Director",
    roleBadge: "Est. 2003 · Co-Founder",
    image: "/images/director.jpg",
    bio: "Co-founded S.N. Public School & Tuition Center in 2003, bringing over two decades of vision and leadership to nurture generations of students in Bokaro.",
    credentials: "20+ Years Educational Leadership",
  },
  {
    name: "Mrs. Suman Kumari",
    title: "Principal",
    roleBadge: "Est. 2003 · Co-Founder",
    image: "/images/principal.jpg",
    bio: "Co-founded the school in 2003 alongside the Director, overseeing academic excellence, curriculum quality, and student welfare since inception.",
    credentials: "Academic Excellence & Curriculum Head",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-surface to-surface-container-low/60 border-b border-surface-container-high/60">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase font-bold tracking-wider mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Est. 2003 · Co-Founders</span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary-container font-bold tracking-tight">
            Our Leadership
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-3 mb-3" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Dedicated educators and founders guiding S.N. Public School with enduring vision, academic integrity, and personal mentorship.
          </p>
        </div>

        {/* 2 Profile Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Decorative Gradient Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary-container/20 via-transparent to-transparent rounded-tr-3xl pointer-events-none" />

              <div>
                {/* Top Row: Badge & Quote Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/80 text-on-secondary-container text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-secondary" />
                    {leader.roleBadge}
                  </span>
                  <Quote className="w-6 h-6 text-outline-variant/50 group-hover:text-secondary/60 transition-colors" />
                </div>

                {/* Profile Photo & Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-5 text-center sm:text-left">
                  {/* Circular / Rounded Headshot */}
                  <div className="relative shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl sm:rounded-full overflow-hidden ring-4 ring-secondary/30 group-hover:ring-secondary/70 shadow-md transition-all duration-300 relative bg-surface-container-low">
                      <Image
                        src={leader.image}
                        alt={`${leader.title} Photo`}
                        fill
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                    {/* Small verification badge */}
                    <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full shadow-sm ring-2 ring-white">
                      <ShieldCheck className="w-4 h-4 text-secondary-fixed" />
                    </div>
                  </div>

                  {/* Name, Title, Credentials */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs uppercase font-bold tracking-widest text-secondary block mb-1">
                      {leader.title}
                    </span>
                    <h3 className="font-headline-sm text-2xl sm:text-3xl text-primary-container font-bold leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-1 inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-md">
                      {leader.credentials}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed border-t border-surface-container-high/60 pt-4">
                  &ldquo;{leader.bio}&rdquo;
                </p>
              </div>

              {/* Bottom Card Accent Bar */}
              <div className="mt-6 pt-4 border-t border-surface-container-low flex items-center justify-between text-xs text-on-surface-variant/80 font-medium">
                <span className="text-primary font-semibold flex items-center gap-1">
                  S.N. Public School &amp; Tuition Center
                </span>
                <span className="text-secondary font-bold">Since 2003</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
