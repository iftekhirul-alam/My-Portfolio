import type { StaticImageData } from "next/image";
import BazarImg from "@/src/assets/image/Bazar Monitoring.png";
import FitLogImg from "@/src/assets/image/FitLog.png";
import MyPhoto from "@/src/assets/image/IftekhirulAlam2.png";

export interface HeroData {
  name: string;
  designations: string[];
  tagline: string;
  location: string;
  email: string;
  phone: string;
  resumeLink: string;
  photo: StaticImageData;
  socials: {
    linkedin: string;
    github: string;
  };
}

export interface AboutData {
  bio: string;
  programmingJourney: string;
  workEnjoyed: string;
  hobbies: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  result: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  image: StaticImageData;
  techStack: string[];
  liveLink: string;
  githubClient: string;
  challenges: string;
  futurePlans: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  link: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillGroup[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Md. Iftekhirul Alam",
    designations: ["IT Administrator", "Junior Frontend Developer"],
    tagline: "Bridging reliable IT operations and modern, user-focused web applications.",
    location: "Dhaka, Bangladesh",
    email: "mmdtahin@gmail.com",
    phone: "+880 1679-279663",
    resumeLink: "https://drive.google.com/file/d/1mvZhVUq30IZDpx5KKqhtpHrisn9gxrsz/view",
    photo: MyPhoto,
    socials: {
      linkedin: "https://www.linkedin.com/in/md-iftekhirul-alam/",
      github: "https://github.com/iftekhirul-alam",
    },
  },
  about: {
    bio: "I am an IT professional with extensive experience in IT operations, infrastructure support, system administration, and networking, alongside hands-on technical expansion into front-end web development. My goal is to maintain secure, stable technology operations while crafting practical, responsive, and intuitive web apps.",
    programmingJourney: "My journey started within computer science and engineering (earning both B.Sc. and M.Sc. degrees), leading me into professional IT administration. Driven by a passion for building software, I expanded my core technical stack into modern web development technologies like JavaScript, React, and Tailwind CSS.",
    workEnjoyed: "I enjoy solving complex technical bottlenecks, designing structured network or software architectures, and turning raw requirements into seamless browser-based user experiences.",
    hobbies: "Outside of work and programming, I have a deep history with academic debate and research (former member of FSET Debate and Research Clubs at USTC), competitive programming participation, and following technology innovations.",
  },
  skills: [
    {
      category: "IT & Infrastructure",
      items: [
        "IT Administration",
        "Windows Server",
        "System Administration",
        "LAN/WAN Networking",
        "Network Troubleshooting",
        "MikroTik",
        "Access Management",
        "Cybersecurity Fundamentals",
      ],
    },
    {
      category: "Web Development",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      category: "Programming & Databases",
      items: ["C", "C++", "Java", "MySQL", "Oracle Database", "SQL"],
    },
    {
      category: "Tools & Deployment",
      items: ["Git", "GitHub", "Vercel"],
    },
  ],
  education: [
    {
      degree: "Master of Science (M.Sc.) in Computer Science & Engineering",
      institution: "International Islamic University Chittagong (IIUC)",
      year: "2023",
      result: "CGPA: 3.75 / 4.00",
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
      institution: "University of Science and Technology Chittagong (USTC)",
      year: "2019",
      result: "CGPA: 3.58 / 4.00",
    },
  ],
  experience: [
    {
      role: "IT & CDBL In-charge",
      company: "KDS Shares & Securities Ltd.",
      duration: "February 2023 – Present",
      responsibilities: [
        "Manage day-to-day IT infrastructure, user support, endpoint systems, and business technology operations.",
        "Maintain server and network environments; troubleshoot LAN/WAN, connectivity, and system issues.",
        "Support back-office applications and CDBL-related operational technology; coordinate technical issues with stakeholders.",
        "Assist with user access administration, IT security practices, system maintenance, and vendor coordination.",
      ],
    },
    {
      role: "IT Officer",
      company: "SKYS Securities Limited",
      duration: "January 2020 – February 2023",
      responsibilities: [
        "Provided technical support and maintained office computer systems, software, and network resources.",
        "Diagnosed hardware, software, and network faults and supported seamless continuity of daily business operations.",
      ],
    },
  ],
  projects: [
    {
      id: "bazar-monitoring",
      title: "Bazar Monitoring Web Application",
      shortDescription: "A web application built to present bazar/market-related information via an accessible browser interface.",
      image: BazarImg,
      techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      liveLink: "https://bazar-monitoring.vercel.app/",
      githubClient: "https://github.com/iftekhirul-alam/bazar-monitoring",
      challenges: "Structuring dynamic market datasets to render cleanly and responsively across diverse screen resolutions without layout shifts.",
      futurePlans: "Integrating real-time price alerts, backend data filtering, and trend analytics charts.",
    },
    {
      id: "fit-log",
      title: "Fit Log Frontend Web Project",
      shortDescription: "A practical fitness tracking frontend project demonstrating robust layout structuring and modern interface design.",
      image: FitLogImg,
      techStack: ["JavaScript", "React", "Tailwind CSS", "Vercel"],
      liveLink: "https://my-assignment-6-app.vercel.app/",
      githubClient: "https://github.com/iftekhirul-alam/my-assignment-6-app",
      challenges: "Managing local state efficiently for user workout entries and ensuring instant responsiveness on mobile devices.",
      futurePlans: "Adding user authentication, persistent cloud database storage, and graphical progress analytics.",
    },
  ],
  certifications: [
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google, Coursera",
      link: "https://www.coursera.org",
    },
  ],
};
