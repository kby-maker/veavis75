/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, Target, ShieldCheck, Heart, Share } from "lucide-react";
import { LanguageContent } from "../types";

interface AboutProps {
  content: LanguageContent;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Soft color glowing orb */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-200/20 via-violet-200/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-cyan-200/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Conceptual Copy & Mission branding */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase w-fit">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Who We Are</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              {content.about.title}
            </h2>

            <p className="font-display font-semibold text-slate-800 text-lg sm:text-xl leading-relaxed">
              {content.about.heading}
            </p>

            <div className="space-y-4 font-sans text-sm text-slate-500 leading-relaxed font-normal">
              <p>{content.about.text1}</p>
              <p>{content.about.text2}</p>
            </div>

            {/* Mission Statement Callout Plate */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-xl shadow-slate-200/50 mt-6 group">
              <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-blue-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300" />
              <div className="relative z-10">
                <h4 className="font-display font-bold text-sm text-blue-400 uppercase tracking-widest mb-2 flex items-center space-x-1.5">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>{content.about.missionTitle}</span>
                </h4>
                <p className="font-sans text-sm md:text-base font-semibold leading-relaxed text-slate-100">
                  {content.about.missionText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Connection Board / Stats */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl shadow-slate-200/40 relative z-20 space-y-8"
            >
              {/* Mini Brand Panel display */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                    <ShieldCheck className="w-4.5 h-4.5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-slate-950 leading-none">
                      Trust Infrastructure
                    </h5>
                    <span className="font-sans text-[10px] text-slate-400 uppercase tracking-wider mt-1 block">
                      VERIFIED PLATFORM
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-50 text-slate-800 font-bold border border-slate-200 px-2 py-0.5 rounded-full">
                  100% SECURE
                </span>
              </div>

              {/* Core metrics visual items */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 text-center">
                  <p className="text-2xs font-bold text-slate-450 uppercase tracking-wider">
                    SUCCESS RATE
                  </p>
                  <p className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                    99.8%
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 text-center">
                  <p className="text-2xs font-bold text-slate-450 uppercase tracking-wider">
                    LAUNCH SPEED
                  </p>
                  <p className="font-display font-extrabold text-2xl text-blue-600 mt-1">
                    10x Fast
                  </p>
                </div>
              </div>

              {/* Pure, elegant design headline banner instead of terminal console */}
              <div className="relative overflow-hidden h-20 bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400 rounded-2xl flex items-center justify-between px-6 shadow-md shadow-blue-500/15">
                <div className="relative z-10 text-white font-sans text-sm font-bold tracking-tight">
                  <p className="text-white opacity-80 text-2xs font-semibold uppercase tracking-wider">Core Philosophy</p>
                  <p className="text-base text-white font-bold leading-none mt-1">Smart Space, Happy Life</p>
                </div>
                <Heart className="w-8 h-8 text-white/20 flex-shrink-0 animate-pulse" />
              </div>

              {/* Quality commitment footnote */}
              <div className="flex items-center space-x-2.5 text-xs text-slate-400">
                <Heart className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span className="font-sans leading-normal">
                  코콤은 친환경 고효율 스마트 조명 및 주거 안전 보급을 지속하여 행복한 내일을 개척합니다.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
