/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Layers, Lightbulb, TrendingUp, AlertCircle, HelpCircle } from "lucide-react";
import { LanguageContent, ProblemCard } from "../types";

interface ProblemsProps {
  content: LanguageContent;
}

export default function Problems({ content }: ProblemsProps) {
  // Helper to map string icon keyword to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-6 h-6 text-blue-600" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-violet-600" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-cyan-600" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <section id="problems" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-blue-300/10 via-violet-300/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-300/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Problem Statement</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            {content.problem.title}
          </h2>
          <p className="mt-4 font-sans text-base text-slate-500 leading-relaxed font-normal">
            {content.problem.description}
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.problem.cards.map((card, idx) => (
            <motion.div
              key={idx}
              id={`problem_card_${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xl shadow-slate-200/30 hover:border-slate-350 hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 group-hover:scale-105 transition-all duration-200">
                  {renderIcon(card.icon)}
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                  {card.title}
                </h3>

                {/* Solution Badge */}
                <div className="mt-2.5 inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 py-1 px-2.5 bg-blue-50/50 border border-blue-100/30 rounded-lg">
                  {card.solution}
                </div>

                {/* Card Description */}
                <p className="mt-4 font-sans text-sm text-slate-500 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Micro-detail */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span>Core Target Area</span>
                <span className="text-blue-600 font-semibold uppercase">KOCOM Smart</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
