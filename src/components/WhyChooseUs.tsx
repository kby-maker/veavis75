/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, Clock, Target, Heart } from "lucide-react";
import { LanguageContent } from "../types";

interface WhyChooseUsProps {
  content: LanguageContent;
}

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-6 h-6 text-indigo-600" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-blue-600" />;
      case "Target":
        return <Target className="w-6 h-6 text-emerald-600" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-pink-500" />;
      default:
        return <Compass className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <section id="why" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 right-[-5%] w-[300px] h-[300px] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[5%] w-[350px] h-[350px] rounded-full bg-cyan-100/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Why Partner With Us</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            {content.why.title}
          </h2>
          <p className="mt-4 font-sans text-base text-slate-500 leading-relaxed font-normal">
            {content.why.subtitle}
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.why.cards.map((card, idx) => (
            <motion.div
              key={idx}
              id={`why_card_${idx}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group bg-white border border-slate-200/60 p-6 rounded-3xl shadow-xl shadow-slate-205/30 hover:shadow-2xl hover:shadow-slate-300/40 hover:border-slate-350 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper badge */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 group-hover:scale-110 transition-all duration-300">
                  {getIcon(card.icon)}
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3.5 font-sans text-xs text-slate-500 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Little styling ribbon accent */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-sans text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  KOCOM PROMISE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
