/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  id: string;
  label: string;
}

export interface ProblemCard {
  icon: string; // Lucide icon identifier
  title: string;
  solution: string;
  description: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  details: string[];
  colorClass: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  stats: string;
  statsLabel: string;
}

export interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface LanguageContent {
  header: {
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
  };
  problem: {
    title: string;
    description: string;
    cards: ProblemCard[];
  };
  services: {
    title: string;
    subtitle: string;
    cards: ServiceCard[];
  };
  solutions: {
    title: string;
    subtitle: string;
    items: SolutionItem[];
  };
  why: {
    title: string;
    subtitle: string;
    cards: BenefitCard[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  about: {
    title: string;
    heading: string;
    text1: string;
    text2: string;
    missionTitle: string;
    missionText: string;
  };
  ctaSection: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formProject: string;
    formWhat: string;
    formWhatPlaceholder: string;
    formSubmit: string;
    successTitle: string;
    successMessage: string;
    supportText: string;
  };
  footer: {
    desc: string;
    rights: string;
  };
}
