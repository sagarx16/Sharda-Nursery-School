"use client";

import { useState } from "react";
import { siteConfig, getAcademicSession } from "@/config/site";
import {
  UserCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
} from "lucide-react";

export default function AdmissionForm() {
  const session = getAcademicSession();
  const [formData, setFormData] = useState({
    parentName: "",
    contactPhone: "+91 ",
    childName: "",
    childDob: "",
    gradeSelect: "",
    residentialSector: "",
    parentMessage: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMsg(data.message);
        setFormData({
          parentName: "",
          contactPhone: "+91 ",
          childName: "",
          childDob: "",
          gradeSelect: "",
          residentialSector: "",
          parentMessage: "",
        });
      } else {
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please call +91 9835112975 directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry-form" className="w-full py-16 lg:py-24 bg-surface-container-low scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-5 sm:p-8 lg:p-10 rounded-2xl shadow-md border border-surface-container-high">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-[10px] sm:text-label-badge font-bold uppercase tracking-wider">
                Admissions Open {session.currentSession}
              </span>
              <span className="text-body-sm text-on-surface-variant font-title-md">
                Quick 2-Min Form
              </span>
            </div>

            <h3 className="font-headline-lg text-headline-md text-primary-container mb-2">
              Secure Your Child&apos;s Seat Today
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant mb-6 sm:mb-8">
              Avail the <strong className="text-primary">Free Admission Benefit</strong> for early registered inquiries. Our admissions desk will call back within 4 business hours.
            </p>

            {successMsg ? (
              <div className="p-5 sm:p-6 bg-secondary-container/40 rounded-xl border border-secondary-container text-on-secondary-container animate-in fade-in duration-300">
                <div className="flex items-center gap-2.5 font-title-md text-base sm:text-lg font-bold">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary shrink-0" />
                  <span>Inquiry Submitted Successfully!</span>
                </div>
                <p className="font-body-md text-body-md mt-2 text-on-secondary-container/90 leading-relaxed">
                  {successMsg}
                </p>
                <div className="mt-4 pt-4 border-t border-secondary-container/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-body-sm">
                  <span>Urgent inquiries? Call us directly:</span>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="font-bold underline text-primary">
                    {siteConfig.phone}
                  </a>
                </div>
                <button
                  onClick={() => setSuccessMsg(null)}
                  className="mt-4 text-xs font-bold text-primary uppercase underline tracking-wider cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {errorMsg && (
                  <div className="p-4 bg-error-container text-on-error-container rounded-xl flex items-center gap-3 text-body-sm font-medium">
                    <AlertCircle className="w-5 h-5 shrink-0 text-error" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Parent Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="parentName" className="font-title-md text-body-sm text-on-surface">
                      Parent&apos;s Full Name *
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contactPhone" className="font-title-md text-body-sm text-on-surface">
                      Contact Phone Number *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      required
                      placeholder="+91 9835112975"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Child Name & DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="childName" className="font-title-md text-body-sm text-on-surface">
                      Child&apos;s Name *
                    </label>
                    <input
                      id="childName"
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="childDob" className="font-title-md text-body-sm text-on-surface">
                      Child&apos;s Date of Birth *
                    </label>
                    <input
                      id="childDob"
                      type="date"
                      required
                      value={formData.childDob}
                      onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Grade & Sector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="gradeSelect" className="font-title-md text-body-sm text-on-surface">
                      Grade Applying For *
                    </label>
                    <select
                      id="gradeSelect"
                      required
                      value={formData.gradeSelect}
                      onChange={(e) => setFormData({ ...formData, gradeSelect: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                    >
                      <option value="" disabled>
                        Select Class / Program
                      </option>
                      {siteConfig.grades.map((g) => (
                        <option key={g.value} value={g.value}>
                          {g.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="residentialSector" className="font-title-md text-body-sm text-on-surface">
                      Sector / Area in Bokaro *
                    </label>
                    <input
                      id="residentialSector"
                      type="text"
                      required
                      placeholder="e.g. Sector 9/C, Sector 4, Chas..."
                      value={formData.residentialSector}
                      onChange={(e) => setFormData({ ...formData, residentialSector: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Optional Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="parentMessage" className="font-title-md text-body-sm text-on-surface">
                    Message / Specific Queries (Optional)
                  </label>
                  <textarea
                    id="parentMessage"
                    rows={3}
                    placeholder="Tell us about your child's interests, previous schooling, or entrance test targets (DAV/DPS/GGPS)..."
                    value={formData.parentMessage}
                    onChange={(e) => setFormData({ ...formData, parentMessage: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-md border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 sm:px-6 rounded-full bg-primary-container text-on-primary font-title-md text-sm sm:text-title-md hover:bg-primary shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer text-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-fixed shrink-0" />
                      <span className="whitespace-normal">
                        Submit Admission Inquiry (Free Admission Offer)
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Fee Transparency & Assistance Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Fee Transparency Box */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-md border border-surface-container-high">
              <div className="flex items-center gap-2 text-secondary font-title-md text-title-md mb-2 font-semibold">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <span>Fee Transparency Guarantee</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary-container mb-2">
                Affordable, Clear &amp; Fair
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                We pledge 100% transparency with zero hidden charges or surprise mid-term fees. High-quality education must remain accessible to every family in Bokaro.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container">
                  <div>
                    <div className="font-title-md text-title-md text-on-surface">Admission Fee</div>
                    <div className="text-body-sm text-on-surface-variant">Early registrations for {session.currentSession}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-outline line-through text-body-sm mr-1.5">₹2,500</span>
                    <span className="font-headline-sm text-title-lg text-primary font-bold">₹0 (Free)</span>
                  </div>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container">
                  <div>
                    <div className="font-title-md text-title-md text-on-surface">Monthly Tuition Fees</div>
                    <div className="text-body-sm text-on-surface-variant">Playgroup through Class 8th</div>
                  </div>
                  <div className="text-right">
                    <span className="font-title-md text-title-md text-on-surface font-bold">Highly Reasonable</span>
                  </div>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container">
                  <div>
                    <div className="font-title-md text-title-md text-on-surface">CBSE Entrance Coaching Batch</div>
                    <div className="text-body-sm text-on-surface-variant">Mock papers &amp; test kits included</div>
                  </div>
                  <div className="text-right">
                    <span className="font-title-md text-title-md text-secondary font-bold">Subsidized Bundle</span>
                  </div>
                </div>
              </div>

              {/* Concessions Callout */}
              <div className="mt-6 p-4 bg-secondary-fixed/30 rounded-xl flex items-start gap-3 border border-secondary-fixed/60">
                <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <div className="font-title-md text-title-md text-on-surface font-bold">
                    Merit &amp; Sibling Concessions
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Fee concessions available for single parents, siblings enrolled concurrently, and meritorious scholars scoring top tier in preliminary interaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Visit Card */}
            <div className="bg-primary-container text-on-primary p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between border border-primary-container">
              <div>
                <div className="flex items-center gap-2 text-secondary-fixed font-title-md text-body-sm mb-2 uppercase tracking-wider font-bold">
                  <MapPin className="w-4 h-4 text-secondary-fixed" />
                  <span>Visit Us in Person</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-2">
                  Experience Our Classrooms
                </h4>
                <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed mb-4">
                  Walk through our nursery play zone, meet our teaching faculty, and review our entrance prep curriculum firsthand.
                </p>
                <div className="text-body-sm text-surface-container-high space-y-1.5 border-t border-primary-container/80 pt-3">
                  <div><strong>Address:</strong> {siteConfig.address}</div>
                  <div><strong>Desk Hours:</strong> {siteConfig.hours.desk}</div>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-3 px-4 rounded-full bg-secondary-container text-on-secondary-container font-title-md text-body-md font-bold text-center hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Direct Call: {siteConfig.phoneRaw}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
