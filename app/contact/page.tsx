import Link from "next/link";
import { siteConfig } from "@/config/site";
import AdmissionForm from "@/components/AdmissionForm";
import CtaStrip from "@/components/CtaStrip";
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  CheckCircle2,
  Building2,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Contact & Locate Us",
  description:
    `Visit or contact ${siteConfig.name} in Sector 9/C Shopping Center, Bokaro Steel City. Call +91 9835112975.`,
};

export default function ContactPage() {
  // Google Maps Embed API v1/place — Google geocodes the address server-side and places the pin.
  // Falls back gracefully to the q= format if no API key is configured.
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const encodedQuery = encodeURIComponent(siteConfig.mapQuery);
  const mapEmbedSrc = mapsApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodedQuery}&zoom=17&language=en`
    : `https://maps.google.com/maps?q=${encodedQuery}&hl=en&z=17&output=embed`;

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-12 lg:py-16 border-b border-surface-container-high/60">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-6">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-title-md font-semibold">Contact &amp; Locate Us</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge font-bold uppercase tracking-wider w-fit">
              We&apos;re Here to Help
            </div>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary-container tracking-tight leading-tight font-bold">
              Contact &amp; Visit Our Campus
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Have questions regarding admissions, fee structure, CBSE entrance mentorship, or evening tuition batches? Walk into our campus in Sector 9/C or call our admissions helpline directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid & Map */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm border border-surface-container-high">
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  <span>Campus Contact Desk</span>
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-title-md text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Helpline &amp; Direct Call
                      </div>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="font-headline-sm text-xl text-primary-container font-bold hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-body-sm text-on-surface-variant mt-0.5">
                        Available Mon – Sat: 8:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 pt-4 border-t border-surface-container-high">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-title-md text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Campus Location
                      </div>
                      <p className="font-title-md text-body-md text-on-surface font-bold mt-1">
                        {siteConfig.address}
                      </p>
                      <p className="text-body-sm text-on-surface-variant mt-1">
                        Landmark: Sector 9/C Shopping Center, Bokaro Steel City
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 pt-4 border-t border-surface-container-high">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-title-md text-body-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Official Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-title-md text-body-md text-primary font-bold hover:underline block mt-1"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-primary-container text-on-primary p-6 sm:p-8 rounded-2xl shadow-md border border-primary-container">
                <div className="flex items-center gap-2 text-secondary-fixed font-title-md text-body-sm uppercase tracking-wider font-bold mb-3">
                  <Clock className="w-5 h-5 text-secondary-fixed" />
                  <span>Instruction &amp; Desk Schedule</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">
                  Campus Operating Hours
                </h4>

                <div className="space-y-3 font-body-sm text-body-sm text-surface-container-high">
                  <div className="p-3 bg-primary/40 rounded-xl flex items-center justify-between border border-primary-container/80">
                    <span>Regular School Hours:</span>
                    <strong className="text-secondary-fixed">{siteConfig.hours.school}</strong>
                  </div>
                  <div className="p-3 bg-primary/40 rounded-xl flex items-center justify-between border border-primary-container/80">
                    <span>Nursery &amp; Playgroup:</span>
                    <strong className="text-secondary-fixed">{siteConfig.hours.nursery}</strong>
                  </div>
                  <div className="p-3 bg-primary/40 rounded-xl flex items-center justify-between border border-primary-container/80">
                    <span>Evening Tuition Batches:</span>
                    <strong className="text-secondary-fixed">{siteConfig.hours.tuition}</strong>
                  </div>
                  <div className="p-3 bg-primary/40 rounded-xl flex items-center justify-between border border-primary-container/80">
                    <span>Admission Inquiry Desk:</span>
                    <strong className="text-secondary-fixed">{siteConfig.hours.desk}</strong>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-primary-container/80 flex items-center justify-between">
                  <span className="text-body-sm text-surface-container-high">Need urgent directions?</span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-title-md text-body-sm font-bold hover:bg-secondary-fixed transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Placeholder & Quick Directions */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm border border-surface-container-high flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary-container flex items-center gap-2">
                    <Navigation className="w-6 h-6 text-secondary" />
                    <span>Interactive Location Map</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge font-bold uppercase">
                    Bokaro Steel City
                  </span>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Conveniently situated at Sector 9/C Shopping Center, easily accessible from Sector 9, Sector 4, Sector 8, Sector 11, and Chas.
                </p>

                {/* Google Map Iframe Embed — address geocoded by Google, no hardcoded lat/lng */}
                <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden border border-surface-container-high shadow-inner bg-surface-container-high relative">
                  <iframe
                    title="S.N. Public School & Tuition Center Exact Location Map"
                    src={mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Floating Location Card */}
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-surface-container-high flex items-center gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-secondary-fixed" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-title-md text-xs sm:text-sm font-bold text-primary-container truncate">
                        {siteConfig.shortName}
                      </div>
                      <div className="text-[10px] sm:text-xs text-on-surface-variant truncate">
                        {siteConfig.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps Action CTA */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-surface-container-low rounded-xl border border-surface-container">
                  <div className="flex items-center gap-2 text-xs sm:text-body-sm text-on-surface-variant font-medium">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{siteConfig.address}</span>
                  </div>
                  <a
                    href={siteConfig.mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-on-primary font-title-md text-xs sm:text-body-sm font-bold hover:bg-primary transition-all shadow-xs shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-secondary-fixed" />
                    <span>Get Directions in Google Maps →</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container">
                    <div className="font-title-md text-title-md text-on-surface font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>By Bus / Local Auto</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Direct auto-rickshaws available from Sector 4 market and Chas main road to Sector 9/C Shopping Center stop.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container">
                    <div className="font-title-md text-title-md text-on-surface font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span>Parent Parking Area</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Ample free two-wheeler and four-wheeler parking right in front of the campus entrance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <AdmissionForm />

      {/* CTA */}
      <CtaStrip />
    </div>
  );
}
