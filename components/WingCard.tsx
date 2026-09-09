import { Clock, CheckCircle2 } from "lucide-react";

export interface WingCardProps {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  description: string;
  grades: string[];
  features: { title: string; desc: string; icon?: React.ReactNode }[];
  timings: string;
  timingNote?: string;
  accentColor: "tertiary" | "primary" | "secondary";
}

export default function WingCard({
  icon,
  title,
  subTitle,
  description,
  grades,
  features,
  timings,
  timingNote,
  accentColor,
}: WingCardProps) {
  const accentClasses = {
    tertiary: {
      iconBg: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
      lineBg: "bg-secondary-container",
      titleColor: "text-secondary",
      badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
    primary: {
      iconBg: "bg-primary-fixed text-primary",
      lineBg: "bg-primary-container",
      titleColor: "text-primary-container",
      badgeBg: "bg-primary-fixed text-on-primary-fixed",
    },
    secondary: {
      iconBg: "bg-tertiary-container text-on-tertiary",
      lineBg: "bg-tertiary",
      titleColor: "text-tertiary",
      badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
  }[accentColor];

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/80">
      <div>
        {/* Header Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className={`w-12 h-12 rounded-xl ${accentClasses.iconBg} flex items-center justify-center`}>
            {icon}
          </div>
          <div className="flex flex-wrap gap-1">
            {grades.map((grade) => (
              <span
                key={grade}
                className={`px-2.5 py-0.5 rounded-full ${accentClasses.badgeBg} font-label-badge text-label-badge font-bold`}
              >
                {grade}
              </span>
            ))}
          </div>
        </div>

        {/* Top Accent Line */}
        <div className={`h-1 w-full ${accentClasses.lineBg} rounded-full mb-4`} />

        {/* Title */}
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{title}</h3>
        <p className={`font-title-md text-title-md ${accentClasses.titleColor} mb-3 font-semibold`}>
          {subTitle}
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
          {description}
        </p>

        {/* Bullet List */}
        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-on-surface">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-1" />
              <span className="font-body-sm text-body-sm">
                <strong className="font-title-md text-on-surface">{feature.title}: </strong>
                <span className="text-on-surface-variant">{feature.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timings Footer */}
      <div className="pt-3 bg-surface-container-low p-3.5 rounded-xl border border-surface-container/60">
        <div className="flex items-center justify-between text-body-sm font-title-md text-on-surface">
          <span className="flex items-center gap-1.5 text-on-surface-variant">
            <Clock className="w-4 h-4 text-primary" />
            <span>Hours:</span>
          </span>
          <span className="font-bold text-primary-container">{timings}</span>
        </div>
        {timingNote && (
          <p className="mt-2 text-right font-label-badge text-label-badge font-semibold text-primary-container">
            {timingNote}
          </p>
        )}
      </div>
    </div>
  );
}
