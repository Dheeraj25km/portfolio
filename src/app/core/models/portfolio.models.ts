/**
 * Central type definitions for all portfolio content.
 * Keeping these separate from the data file means the shape of the
 * content is documented and type-checked independently of the values.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // key into the <app-icon> icon map
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  current: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  /** Short, scannable outcomes shown as bullets on the card. */
  outcomes: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  icon: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  /** One line explaining how this group is actually used day to day. */
  blurb: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  detail: string;
}

/** A single profile/avatar image plus its alt text. */
export interface ProfileImage {
  /** Path under /public. Swap this file to change the photo everywhere. */
  src: string;
  alt: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  headline: { lead: string; accent: string; trail: string };
  tagline: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  summary: string;
  /** Short status shown in the hero availability pill. */
  availability: string;
  profile: ProfileImage;
  /** Logos/labels scrolled in the hero ticker. */
  marquee: string[];
  socials: SocialLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  certifications: string[];
  /** Short "how I work" principles surfaced in the About section. */
  principles: { title: string; detail: string; icon: string }[];
  stats: { label: string; value: string }[];
}
