"use client";

import { useState, useEffect } from "react";
import { siteConfig, getAcademicSession } from "@/config/site";
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  ShieldCheck,
  Send,
} from "lucide-react";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
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

  // Close on Escape key & manage body overflow
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      setErrorMsg("Network error. Please check your connection or call the desk directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-on-surface/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container-high overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-primary-container to-primary p-5 sm:p-6 text-on-primary relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Admissions Open {session.currentSession}</span>
          </div>

          <h3 id="modal-title" className="font-headline-sm text-2xl sm:text-3xl font-bold leading-tight">
            Enroll Scholar Today
          </h3>
          <p className="text-on-primary/90 font-body-sm text-xs sm:text-sm mt-1">
            Fill this quick inquiry to reserve your seat &amp; avail the <strong className="text-secondary-fixed">Free Admission Offer</strong>.
          </p>
        </div>

        {/* Modal Body / Scrollable Form Area */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          {successMsg ? (
            <div className="p-6 bg-secondary-container/30 rounded-2xl border border-secondary-container text-on-secondary-container text-center py-8">
              <div className="w-14 h-14 rounded-full bg-secondary-container text-secondary flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-2xl text-primary-container font-bold mb-2">
                Inquiry Received!
              </h4>
              <p className="text-on-secondary-container/90 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
                {successMsg}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-bold text-sm hover:bg-primary transition-all"
                >
                  <Phone className="w-4 h-4 text-secondary-fixed" />
                  <span>Call Desk: {siteConfig.phone}</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 bg-error/10 border border-error/20 rounded-xl text-error text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent / Guardian Name */}
                <div>
                  <label htmlFor="modal-parentName" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    Parent / Guardian Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="modal-parentName"
                    type="text"
                    required
                    placeholder="e.g., Rajesh Kumar"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="modal-contactPhone" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    WhatsApp / Calling Phone <span className="text-error">*</span>
                  </label>
                  <input
                    id="modal-contactPhone"
                    type="tel"
                    required
                    placeholder="+91 98351 12975"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Child Name */}
                <div>
                  <label htmlFor="modal-childName" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    Child&apos;s Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="modal-childName"
                    type="text"
                    required
                    placeholder="e.g., Aarav Kumar"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Grade Seeking */}
                <div>
                  <label htmlFor="modal-gradeSelect" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    Seeking Admission For <span className="text-error">*</span>
                  </label>
                  <select
                    id="modal-gradeSelect"
                    required
                    value={formData.gradeSelect}
                    onChange={(e) => setFormData({ ...formData, gradeSelect: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select Grade or Program</option>
                    {siteConfig.grades.map((grade, idx) => (
                      <option key={idx} value={grade.value}>
                        {grade.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Child DOB */}
                <div>
                  <label htmlFor="modal-childDob" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    Child&apos;s Date of Birth (Optional)
                  </label>
                  <input
                    id="modal-childDob"
                    type="date"
                    value={formData.childDob}
                    onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Residential Sector */}
                <div>
                  <label htmlFor="modal-residentialSector" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    Bokaro Sector / Area (Optional)
                  </label>
                  <input
                    id="modal-residentialSector"
                    type="text"
                    placeholder="e.g. Sector 9/C, Sector 4, Chas..."
                    value={formData.residentialSector}
                    onChange={(e) => setFormData({ ...formData, residentialSector: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="modal-parentMessage" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                  Questions or Special Requirements (Optional)
                </label>
                <textarea
                  id="modal-parentMessage"
                  rows={2}
                  placeholder="Any specific curriculum requirements, school transport queries, or tuition timing preferences..."
                  value={formData.parentMessage}
                  onChange={(e) => setFormData({ ...formData, parentMessage: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-primary-container text-on-primary font-title-md text-sm sm:text-base font-bold hover:bg-primary active:scale-[0.99] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-secondary-fixed" />
                      <span>Submit Admission Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              {/* Security & Privacy Assurance */}
              <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant/80 pt-1">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Zero Admission Fee for Early Inquiries • Callback within 4 hours</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
