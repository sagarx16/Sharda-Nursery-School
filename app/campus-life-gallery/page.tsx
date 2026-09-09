import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import GalleryFilter from "@/components/GalleryFilter";
import AdmissionForm from "@/components/AdmissionForm";
import CtaStrip from "@/components/CtaStrip";
import CampusHeroSlider from "@/components/CampusHeroSlider";
import {
  Home,
  ShieldCheck,
  Tv,
  Microscope,
  BookOpen,
  Lock,
  Users,
  Camera,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Campus Life & Annual Photo Gallery",
  description:
    "Explore the vibrant campus facilities, safe playrooms, science labs, smart classrooms, and annual student achievements at S.N. Public School, Bokaro.",
};

export default function CampusLifeGalleryPage() {
  const facilities = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Safe & Hygienic Play Area",
      description:
        "Soft padded play zones equipped with non-toxic Montessori building blocks, slides, and sanitized activity bins designed specifically for nursery toddlers.",
    },
    {
      icon: <Tv className="w-6 h-6 text-secondary" />,
      title: "Audio-Visual Smart Classrooms",
      description:
        "Digital screens for interactive phonics recitations, animated story sessions, and visual mathematical concept demonstrations.",
    },
    {
      icon: <Microscope className="w-6 h-6 text-tertiary" />,
      title: "Science & Practical Corner",
      description:
        "Hands-on science kits, microscope demonstrations, and environmental project scrapbooks fostering early curiosity.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Children Library & Story Corner",
      description:
        "Curated collection of English & Hindi picture storybooks, encyclopedias, and vocabulary builder journals.",
    },
    {
      icon: <Lock className="w-6 h-6 text-secondary" />,
      title: "24/7 CCTV & Campus Security",
      description:
        "Gated security entrance, strict visitor logs, and comprehensive CCTV monitoring across all classrooms and hallways.",
    },
    {
      icon: <Users className="w-6 h-6 text-tertiary" />,
      title: "Evening Tuition Study Desks",
      description:
        "Unhurried micro-batch study desks with individual whiteboards for evening student mentoring and homework completion.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Full-width photo slider — sits right below navbar */}
      <CampusHeroSlider />

      {/* Hero Header */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-12 lg:py-16 border-b border-surface-container-high/60">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-6">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-title-md font-semibold">Campus Life &amp; Gallery</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge font-bold uppercase tracking-wider w-fit">
              Vibrant &amp; Secure Environment
            </div>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary-container tracking-tight leading-tight font-bold">
              Campus Life &amp; Student Experience in Bokaro
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              At {siteConfig.name}, learning extends far beyond textbooks. We provide a warm, secure, and inspiring atmosphere where scholars develop self-confidence, artistic expression, physical health, and lifelong friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="w-full py-16 lg:py-24 bg-surface border-b border-surface-container-high/60">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-badge text-label-badge uppercase font-bold tracking-wider mb-2">
              Infrastructure &amp; Safety
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-container">
              Nurturing Facilities Designed for Young Scholars
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Every room and play corner at our Sector 9/C campus is thoughtfully engineered for safety, cleanliness, and active cognitive engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-surface-container-high flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center mb-4 border border-surface-container-high">
                    {fac.icon}
                  </div>
                  <h3 className="font-headline-sm text-title-lg text-on-surface mb-2 font-bold">
                    {fac.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {fac.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-low flex items-center gap-2 text-primary text-body-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Maintained Daily</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase font-bold tracking-wider mb-2">
              <Camera className="w-4 h-4 text-secondary" />
              <span>Memories &amp; Milestones</span>
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-container">
              Annual Student Photo Gallery
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Moments of joy, learning breakthroughs, sports days, and cultural celebrations at S.N. Public School.
            </p>
          </div>

          <GalleryFilter />
        </div>
      </section>

      {/* Form & CTA */}
      <AdmissionForm />
      <CtaStrip />
    </div>
  );
}
