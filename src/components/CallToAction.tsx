/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { LanguageContent } from "../types";

interface CallToActionProps {
  content: LanguageContent;
  scrollToSection: (id: string) => void;
}

export default function CallToAction({ content, scrollToSection }: CallToActionProps) {
  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Big Gradient Plate */}
        <div className="relative rounded-3xl bg-slate-950 text-white overflow-hidden p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          
          {/* Custom vector blur gradient overlays inside key card */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 via-violet-900/30 to-indigo-950/40 mix-blend-overlay" />
          <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-violet-600/25 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            
            {/* Pulsing visual badge */}
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-blue-300 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Free Consultation</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight md:leading-[1.15]">
              {content.ctaSection.headline}
            </h2>

            {/* Subheadline description */}
            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
              {content.ctaSection.subheadline}
            </p>

            {/* Conversion Trigger Button */}
            <div className="pt-4 w-full sm:w-auto">
              <button
                id="cta_section_main_btn"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-950 font-sans font-bold text-base shadow-lg hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <span>{content.ctaSection.buttonText}</span>
                <ArrowRight className="w-5 h-5 text-indigo-600" />
              </button>
            </div>

            {/* Micro value badge footnote */}
            <p className="text-2xs font-mono text-gray-400 tracking-wider pt-2">
              ZERO STRINGS ATTACHED &middot; 24-HOUR STRATEGY REPORT DELIVERED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
