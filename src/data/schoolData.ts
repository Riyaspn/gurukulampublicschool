export interface SchoolInfo {
  name: string;
  tagline: string;
  affiliationNo: string;
  schoolCode: string;
  foundedYear: number;
  trustName: string;
  location: string;
  address: string;
  phone: string;
  phoneSecondary: string;
  email: string;
  principal: string;
  manager: string;
  admissionFormLink: string;
}

export const schoolInfo: SchoolInfo = {
  name: "Gurukulam Public School",
  tagline: "Where Wisdom Meets Future-Ready Innovation",
  affiliationNo: "930215",
  schoolCode: "75189",
  foundedYear: 1992,
  trustName: "Sree Narayana Educational Charitable Trust",
  location: "Venginissery, Thrissur, Kerala",
  address: "Venginissery, Paralam P.O, Thrissur - 680563, Kerala, India",
  phone: "+91 487 2311244",
  phoneSecondary: "+91 94473 11244",
  email: "gurukulampublicschool@gmail.com",
  principal: "Smt. Maya K.V. (M.Sc, B.Ed)",
  manager: "Sri. P.V. Shaji",
  admissionFormLink: "https://eschoolsolutions.xyz/admissiongurukulam/admissionform.php",
};

export const managerMessage = `Gurukulam Public School was established in 1992 under the auspices of Sree Narayana Educational Charitable Trust with a sacred vision: to impart holistic quality education rooted in moral integrity and modern scientific temper. Over three decades of academic leadership, our campus in Venginissery has grown from a humble beginning of 6 students into a premier CBSE institution in Thrissur. We are proud to be sanctioned with the 1st Atal Tinkering Laboratory (ATL Lab) in Thrissur District by NITI Aayog, Government of India, empowering our children to become innovators, thinkers, and compassionate global leaders.`;

export const principalMessage = `Welcome to Gurukulam Public School! As Principal, it is my privilege to lead an institution where academic excellence, emotional well-being, and technological innovation converge seamlessly. Our dedicated faculty ensures 100% pass results in CBSE Class X & XII examinations with distinction honors. With specialized Clinical Psychology counseling, state-of-the-art Science & ATL Robotics labs, vibrant sports coaching, and co-curricular programs, we nurture each child to discover their full potential in a serene, eco-friendly environment.`;

export const cbseResults = {
  classX: {
    passRate: "100%",
    distinction: "70%",
    firstClass: "27%",
    secondClass: "3%",
  },
  classXII: {
    passRate: "100%",
    distinction: "25%",
    firstClass: "56%",
    secondClass: "19%",
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Our History", href: "/ourhistory" },
      { name: "Management", href: "/management" },
      { name: "Principal's Desk", href: "/principal" },
      { name: "Faculty & Staff", href: "/staff" },
      { name: "Rules & Regulations", href: "/rules" },
    ],
  },
  { name: "In Campus", href: "/campus" },
  {
    name: "Academics",
    dropdown: [
      { name: "Activities & Co-Curricular", href: "/activities" },
      { name: "Curriculum & Remedial", href: "/curriculum" },
    ],
  },
  { name: "Facilities", href: "/facilities" },
  {
    name: "Admission",
    dropdown: [
      { name: "Procedure", href: "/procedure" },
      { name: "Fees Structure", href: "/feesstructure" },
    ],
  },
  { name: "Admission Forms", href: schoolInfo.admissionFormLink, isExternal: true },
  {
    name: "Gallery",
    dropdown: [
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Video Gallery", href: "/video_gallery" },
    ],
  },
  { name: "Mandatory Disclosure", href: "/mandatory_disclosure" },
];
