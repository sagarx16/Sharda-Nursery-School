/**
 * S.N. Public School & Tuition Center - Central Site Configuration
 * Handles dynamic academic session calculations, contact details, navigation, and intake years.
 */

export function getAcademicSession() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0 = Jan, 3 = April

  // Academic year in India usually runs April to March
  const startYear = month >= 3 ? year : year - 1;
  const endYear = startYear + 1;
  const endYearShort = String(endYear).slice(-2);

  return {
    currentSession: `${startYear}-${endYearShort}`,
    currentSessionFull: `${startYear} – ${endYear}`,
    nextSession: `${endYear}-${String(endYear + 1).slice(-2)}`,
    nextSessionFull: `${endYear} – ${endYear + 1}`,
    startYear,
    endYear,
    copyrightYear: year,
  };
}

export const siteConfig = {
  name: "S.N. Public School & Tuition Center",
  shortName: "S.N. Public School",
  subTitle: "English Medium • Playgroup to Class 8th & CBSE Entrance Mentorship",
  tagline:
    "Nurturing young minds with values, wisdom, and excellence from Playgroup to Class 8th in Bokaro Steel City.",
  phone: "+91 9835112975",
  phoneRaw: "9835112975",
  email: "contact@shardanurserybokaro.com",
  address: "Sector 9/C, Shopping Center, Bokaro Steel City, Jharkhand - 827009",
  location: "Sector 9/C, Shopping Center, Bokaro",
  hours: {
    school: "Mon – Sat: 7:30 AM – 1:30 PM",
    nursery: "Mon – Sat: 8:30 AM – 12:00 PM (Saturday closes early)",
    tuition: "Mon – Sat: 2:30 PM – 7:00 PM",
    desk: "Mon – Sat: 8:00 AM – 4:00 PM",
  },
  stats: {
    intakeRecord: "100%",
    intakeRecordLabel: "DAV/DPS Intake Record",
    ratio: "1:12",
    ratioLabel: "Teacher-Scholar Ratio",
    feeOffer: "Zero",
    feeOfferLabel: "Admission Fee Offer",
    experience: "12+",
    experienceLabel: "Years of Academic Excellence",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Academics & Admissions", href: "/academics-admissions" },
    { name: "Campus Life & Gallery", href: "/campus-life-gallery" },
    { name: "Contact & Locate Us", href: "/contact" },
  ],
  schoolsTargeted: [
    "D.A.V. Public School",
    "Delhi Public School (DPS)",
    "Guru Gobind Singh Public School (GGPS)",
    "M.G.M. Higher Secondary School",
    "Chinmaya Vidyalaya",
  ],
  grades: [
    { label: "Playgroup (Age 2.5+)", value: "Play Group" },
    { label: "Nursery (Age 3+)", value: "Nursery" },
    { label: "LKG (Lower Kindergarten)", value: "LKG" },
    { label: "UKG (Upper Kindergarten)", value: "UKG" },
    { label: "Class 1st", value: "Class 1" },
    { label: "Class 2nd", value: "Class 2" },
    { label: "Class 3rd", value: "Class 3" },
    { label: "Class 4th", value: "Class 4" },
    { label: "Class 5th", value: "Class 5" },
    { label: "Class 6th", value: "Class 6" },
    { label: "Class 7th", value: "Class 7" },
    { label: "Class 8th", value: "Class 8" },
    { label: "CBSE Entrance Prep Batch", value: "Entrance Only" },
    { label: "Tuition Center Only (Classes 1-8)", value: "Tuition Only" },
  ],
};
