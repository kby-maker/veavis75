/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, PencilRuler, Hammer, Rocket, HelpCircle } from "lucide-react";
import { LanguageContent } from "../types";

interface ProcessProps {
  content: LanguageContent;
}

export default function Process({ content }: ProcessProps) {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 1:
        return <PencilRuler className="w-5 h-5 text-violet-600" />;
      case 2:
        return <Hammer className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Rocket className="w-5 h-5 text-indigo-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background Matrix Grids */}
      <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-slate-50/50 border border-slate-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Rocket className="w-3.5 h-3.5 text-blue-600" />
            <span>Operational Method</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            {content.process.title}
          </h2>
          <p className="mt-4 font-sans text-base text-slate-500 leading-relaxed font-normal">
            {content.process.subtitle}
          </p>
        </div>

        {/* 4 Steps timeline Layout */}
        <div className="relative">
          {/* Horizontal Line connector (Visible on large screen) */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-100 via-violet-100 to-cyan-100 -translate-y-1/2 rounded-full hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {content.process.steps.map((stepItem, idx) => (
              <motion.div
                key={idx}
                id={`process_step_${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-white border border-slate-200/60 p-6 rounded-3xl relative transition-all duration-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-1"
              >
                {/* Connecting Circle/Node marker */}
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-slate-900 border border-slate-800 text-white font-sans text-2xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                  STEP {stepItem.step}
                </div>

                {/* Step Icon circle wrapper */}
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-6 group-hover:scale-105 transition-all duration-200">
                  {getStepIcon(idx)}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  {stepItem.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-sans text-xs text-slate-500 leading-relaxed font-normal">
                  {stepItem.description}
                </p>

                {/* Key Deliverable Block */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-sans font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Deliverable:
                  </span>
                  <div className="font-sans text-[11px] font-semibold text-slate-800 bg-slate-50 border border-slate-100/80 rounded-lg p-2 leading-relaxed">
                    {stepItem.deliverable}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
