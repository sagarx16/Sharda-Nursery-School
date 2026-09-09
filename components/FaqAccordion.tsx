"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig, getAcademicSession } from "@/config/site";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items?: FaqItem[] }) {
  const session = getAcademicSession();

  const defaultFaqs: FaqItem[] = [
    {
      question: "What is the minimum age criterion for Nursery and Playgroup?",
      answer:
        "For Playgroup, the child should be at least 2.5 years of age by March 31st of the academic year. For Nursery, the child should be 3+ years old. We focus on developmental readiness rather than rigid numerical cutoffs.",
    },
    {
      question: "How does the school prepare students for DAV, DPS, and GGPS entrance tests?",
      answer:
        "We run an integrated entrance program. Students practice pattern recognition, verbal English confidence, mental arithmetic, and participate in mock interview panels designed to replicate the exact entrance testing environments of premier Bokaro schools.",
    },
    {
      question: "Can students only join the evening Tuition Wing?",
      answer:
        "Yes! Our Tuition Center operates independently from 2:30 PM to 7:00 PM. Students enrolled in other schools across Bokaro are welcome to join our micro-batches for focused homework assistance, concept mastery, and exam revision.",
    },
    {
      question: `How do I claim the "Free Admission" benefit for session ${session.currentSession}?`,
      answer: `Simply submit your inquiry through the online form above or call our helpline (${siteConfig.phone}) during the current promotional phase for the ${session.currentSessionFull} academic session. Qualified early registrations receive an outright 100% waiver on the standard admission fee.`,
    },
    {
      question: "What is the teacher-to-scholar ratio in classrooms?",
      answer:
        "We maintain a strict 1:12 teacher-scholar ratio in early childhood & nursery wings, and maximum 12-15 scholars in primary and tuition micro-batches to guarantee individual attention.",
    },
  ];

  const faqList = items && items.length > 0 ? items : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary-container">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Everything parents ask when considering {siteConfig.name}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-title-md text-title-md text-on-surface hover:text-primary transition-colors gap-4 cursor-pointer"
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary-container" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-body-md text-on-surface-variant border-t border-surface-container-low leading-relaxed animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
