/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Store, Building2, Check, ArrowRight, Star } from "lucide-react";
import { LanguageContent, SolutionItem } from "../types";

interface SolutionsProps {
  content: LanguageContent;
  scrollToSection: (id: string) => void;
}

export default function Solutions({ content, scrollToSection }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>("indiv");

  const getIcon = (id: string) => {
    switch (id) {
      case "indiv":
        return <User className="w-5 h-5" />;
      case "smb":
        return <Store className="w-5 h-5" />;
      case "enterprise":
        return <Building2 className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const currentSolution =
    content.solutions.items.find((item) => item.id === activeTab) ||
    content.solutions.items[0];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-2/3 right-[-5%] w-[450px] h-[350px] rounded-full bg-gradient-to-tr from-blue-300/10 via-violet-300/10 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Target Group Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            {content.solutions.title}
          </h2>
          <p className="mt-4 font-sans text-base text-slate-500 leading-relaxed font-normal">
            {content.solutions.subtitle}
          </p>
        </div>

        {/* Desktop Layout split: Left Side Selector, Right Side Interactive Card details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Selector Drawer column */}
          <div className="lg:col-span-4 space-y-3">
            {content.solutions.items.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  id={`solution_tab_${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-slate-900 text-white border-transparent shadow-xl shadow-slate-200/40"
                      : "bg-white text-slate-700 border-slate-200/60 hover:bg-slate-50 hover:border-slate-350 shadow-sm shadow-slate-100/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600 border border-slate-100"
                    }`}
                  >
                    {getIcon(item.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-2xs font-extrabold uppercase tracking-widest ${
                      isActive ? "text-blue-400" : "text-slate-400"
                    }`}>
                      {item.id === "indiv" ? "PERSONAL" : item.id === "smb" ? "GROWTH TEAM" : "ENTERPRISE"}
                    </p>
                    <h3 className="font-sans font-bold text-sm tracking-tight truncate mt-0.5">
                      {item.id === "indiv" ? "Individuals & Creators" : item.id === "smb" ? "Small Businesses" : "Corp Companies & Teams"}
                    </h3>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? "text-blue-400 translate-x-1" : "text-slate-400"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Interactive Card details display with Framer Motion transitions */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Content Details (8 Columns) */}
                <div className="md:col-span-8 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="text-xs font-sans font-semibold text-blue-600 tracking-wider uppercase bg-blue-50/50 border border-blue-100 px-2.5 py-1 rounded-full">
                      Optimized Blueprint
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mt-4 leading-tight">
                      {currentSolution.title}
                    </h3>
                    <p className="text-xs font-sans font-semibold text-slate-400 uppercase tracking-widest mt-1">
                      {currentSolution.subtitle}
                    </p>
                    <p className="mt-4 font-sans text-sm text-slate-500 leading-relaxed">
                      {currentSolution.description}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-100">
                    {currentSolution.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-xs text-slate-600 font-medium">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      id="solution_cta_trigger"
                      onClick={() => scrollToSection("contact")}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                    >
                      <span>Inquire about this tier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Big Stat Box (4 Columns) */}
                <div className="md:col-span-4 bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xs self-stretch min-h-[220px]">
                  <p className="text-2xs font-extrabold text-blue-600 uppercase tracking-widest font-mono">
                    PROVEN ROI
                  </p>
                  <p className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-slate-900 my-3 select-none">
                    {currentSolution.stats}
                  </p>
                  <p className="font-sans text-xs text-slate-500 font-medium leading-relaxed px-2">
                    {currentSolution.statsLabel}
                  </p>
                  <div className="mt-6 w-full h-px bg-slate-200/60" />
                  <p className="mt-4 text-2xs font-mono text-slate-400">
                    YOUNME TARGET INDEX &copy;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
