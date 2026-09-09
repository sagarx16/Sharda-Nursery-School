import { ShieldCheck, Smile, Gift } from "lucide-react";

export default function AdmissionProcess() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface border-t border-b border-surface-container-high/60">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase font-bold tracking-wider mb-3">
            Transparent &amp; Stress-Free
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container">
            3-Step Simple Admission Journey
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            We believe joining a school should be a joyful milestone for both the student and the family, devoid of intimidating entrance filters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-surface-container-high/80 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center mb-6 font-bold">
                1
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                Form Submission &amp; Counseling
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Fill out our simple inquiry form online or visit Sector 9/C campus. Our principal or head counselor meets you to understand the child&apos;s temperament, learning style, and specific goals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center gap-2 text-primary font-title-md text-body-sm font-semibold">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Zero Processing Fees</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-surface-container-high/80 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center mb-6 font-bold">
                2
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                Child-Friendly Interaction
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A warm, casual 15-minute informal chat in our play zone or classroom. We evaluate baseline literacy or numeracy without high-pressure tests to ensure the ideal grade-level placement.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center gap-2 text-secondary font-title-md text-body-sm font-semibold">
              <Smile className="w-5 h-5 text-secondary" />
              <span>Zero Stress Environment</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-surface-container-high/80 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary font-headline-sm text-headline-sm flex items-center justify-center mb-6 font-bold">
                3
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                Confirmation &amp; Welcome Kit
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Instant admission confirmation upon document verification. Receive the customized Student Welcome Kit containing academic calendar, book checklist, and uniform guidelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center gap-2 text-tertiary font-title-md text-body-sm font-semibold">
              <Gift className="w-5 h-5 text-tertiary" />
              <span>Welcome Kit Provided</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
