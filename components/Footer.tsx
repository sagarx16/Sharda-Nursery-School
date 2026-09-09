import Link from "next/link";
import Image from "next/image";
import { siteConfig, getAcademicSession } from "@/config/site";
import { MapPin, Phone, Mail, ChevronRight, GraduationCap } from "lucide-react";

export default function Footer() {
  const session = getAcademicSession();

  return (
    <footer className="w-full bg-primary text-on-primary pt-16 pb-10 border-t border-primary-container">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-primary-container/60">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/School Emblem Logo.png"
                  alt="Sharda Nursery Public School Emblem Crest"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline-sm text-title-md text-secondary-fixed leading-tight font-bold">
                Sharda Nursery Public School
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider">
                CBSE Orientation • Est. Bokaro
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-title-md text-title-md text-secondary-fixed pb-1 border-b border-primary-container/40">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-surface-container-high">
              <li>
                <Link href="/" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
                  <ChevronRight className="w-4 h-4 text-secondary-fixed" />
                  <span>Home &amp; Welcome</span>
                </Link>
              </li>
              <li>
                <Link href="/academics-admissions" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
                  <ChevronRight className="w-4 h-4 text-secondary-fixed" />
                  <span>Academic Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/academics-admissions#entrance-coaching" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
                  <ChevronRight className="w-4 h-4 text-secondary-fixed" />
                  <span>CBSE Admissions Prep (DAV, DPS, GGPS, MGM)</span>
                </Link>
              </li>
              <li>
                <Link href="/campus-life-gallery" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
                  <ChevronRight className="w-4 h-4 text-secondary-fixed" />
                  <span>Campus Life &amp; Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="/campus-life-gallery#gallery" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
                  <ChevronRight className="w-4 h-4 text-secondary-fixed" />
                  <span>Annual Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors">
                  <ChevronRight className="w-4 h-4 text-secondary-fixed" />
                  <span>Contact &amp; Locate Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="font-title-md text-title-md text-secondary-fixed pb-1 border-b border-primary-container/40">
              Contact &amp; Timings
            </h4>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm text-surface-container-high">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary-fixed shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary-fixed shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-secondary-fixed font-semibold">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary-fixed shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary-fixed">
                  {siteConfig.email}
                </a>
              </div>
              <div className="p-3 bg-primary-container/50 rounded-xl border border-primary-container/80 mt-1">
                <div className="font-title-md text-secondary-fixed text-label-badge uppercase tracking-wider mb-1">
                  Instruction Hours
                </div>
                <p className="text-surface-container-high text-[11px] leading-relaxed">
                  Mon - Sat: 7:30 AM - 1:30 PM<br />
                  <span className="text-secondary-fixed-dim font-medium">Tuition Batches: 2:30 PM - 7:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Target Schools */}
          <div className="flex flex-col gap-3">
            <h4 className="font-title-md text-title-md text-secondary-fixed pb-1 border-b border-primary-container/40">
              Affiliation &amp; Pedagogy
            </h4>
            <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
              English Medium curriculum strictly formulated under CBSE recommendations. Specialized competitive foundation &amp; school entrance preparation for:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.schoolsTargeted.map((school) => (
                <span
                  key={school}
                  className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-title-md text-label-badge shadow-sm"
                >
                  {school}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-body-sm text-body-sm text-surface-container-high/80">
          <p>© {session.copyrightYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-secondary-fixed-dim font-title-md text-body-sm flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-secondary-fixed" />
            <span>Built with devotion to Vidya (Knowledge).</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
