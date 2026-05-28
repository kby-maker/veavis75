/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Globe,
  Cpu,
  BookOpen,
  MessageSquareCode,
  Share2,
  Zap,
  Check,
  Sparkles,
} from "lucide-react";
import { LanguageContent, ServiceCard } from "../types";

interface ServicesProps {
  content: LanguageContent;
}

export default function Services({ content }: ServicesProps) {
  // Helper to map icon components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-600" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-violet-600" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case "MessageSquareCode":
        return <MessageSquareCode className="w-5 h-5 text-emerald-600" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-pink-600" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-indigo-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/55 relative overflow-hidden">
      {/* Background gradients for SaaS tech mood */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-blue-100/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full bg-violet-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            {content.services.title}
          </h2>
          <p className="mt-4 font-sans text-base text-gray-500 leading-relaxed font-normal">
            {content.services.subtitle}
          </p>
        </div>

        {/* 6 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.cards.map((card, idx) => (
            <motion.div
              key={idx}
              id={`service_card_${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.colorClass} flex items-center justify-center border border-slate-250/20`}>
                    {renderIcon(card.icon)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-snug tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Service description */}
                <p className="font-sans text-sm text-slate-500 leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              {/* Service Details (Bullet items with checkmarks) */}
              <div className="border-t border-slate-100 pt-5 space-y-3">
                {card.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                    </div>
                    <span className="font-sans text-xs text-gray-600 font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
