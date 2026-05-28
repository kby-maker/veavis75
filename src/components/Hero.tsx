/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Code,
  ArrowRight,
  Database,
  Cpu,
  Workflow,
  CheckCircle,
  MessageSquare,
  Globe,
  Settings,
} from "lucide-react";
import { LanguageContent } from "../types";

interface HeroProps {
  content: LanguageContent;
  scrollToSection: (id: string) => void;
}

export default function Hero({ content, scrollToSection }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"visual" | "autom" | "prompt">("visual");
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-rotate mock dashboard tabs for visual storytelling
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "visual") return "autom";
        if (prev === "autom") return "prompt";
        return "visual";
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-400/20 via-violet-400/20 to-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-[5%] left-[-15%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-violet-400/20 via-cyan-400/10 to-transparent blur-3xl" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-400/15 via-blue-400/10 to-transparent blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text branding */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Super creative chip badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200/60 px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="font-sans font-semibold text-xs tracking-wide text-slate-800 uppercase">
                kocom.co.kr
              </span>
              <span className="h-3 w-px bg-slate-200" />
              <span className="font-sans text-xs text-blue-600 font-medium">
                Established 1976
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12]"
            >
              {content.hero.headline}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-slate-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {content.hero.subheadline}
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero_primary_cta"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-white font-sans font-bold text-base shadow-xl shadow-slate-200/80 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1" />
              </button>

              <button
                id="hero_secondary_cta"
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-sans font-bold text-base border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all duration-200 cursor-pointer text-center"
              >
                {content.hero.ctaSecondary}
              </button>
            </motion.div>

            {/* Supporting Trust Badging */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-gray-100 max-w-md mx-auto lg:mx-0"
            >
              <p className="font-sans text-xs text-gray-400 font-medium tracking-wider uppercase mb-2">
                Core Capabilities
              </p>
              <div className="font-sans text-xs text-gray-500 font-semibold leading-relaxed">
                {content.hero.trustText}
              </div>
            </motion.div>
          </div>

          {/* Interactive AI Dashboard Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full max-w-md bg-white border border-slate-200/60 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden p-6 hover:shadow-xl hover:shadow-slate-300/40 transition-shadow duration-300"
              onMouseEnter={() => setAutoRotate(false)}
            >
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-2xs font-mono bg-gray-100 text-gray-500 px-3 py-1 rounded-full border border-gray-200">
                  smart.kocom.co.kr
                </div>
                <Settings className="w-4 h-4 text-gray-400" />
              </div>

              {/* Demo Mode Selection Tabs */}
              <div className="flex items-center space-x-2 mt-4">
                <button
                  id="tab_visual"
                  onClick={() => setActiveTab("visual")}
                  className={`flex-1 flex items-center justify-center space-x-1 py-2 px-1 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    activeTab === "visual"
                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-500 border border-transparent"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Smart Home</span>
                </button>

                <button
                  id="tab_autom"
                  onClick={() => setActiveTab("autom")}
                  className={`flex-1 flex items-center justify-center space-x-1 py-2 px-1 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    activeTab === "autom"
                      ? "bg-violet-50 text-violet-600 border border-violet-100"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-500 border border-transparent"
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">CCTV Security</span>
                </button>

                <button
                  id="tab_prompt"
                  onClick={() => setActiveTab("prompt")}
                  className={`flex-1 flex items-center justify-center space-x-1 py-2 px-1 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    activeTab === "prompt"
                      ? "bg-amber-50 text-amber-600 border border-amber-100"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-500 border border-transparent"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Smart Light</span>
                </button>
              </div>

              {/* Simulated Sandbox Terminal Window Content */}
              <div className="mt-5 min-h-[220px] bg-slate-950 rounded-2xl p-4 text-white font-mono text-[11px] leading-relaxed relative flex flex-col justify-between shadow-inner">
                <div className="absolute top-2 right-2 flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-2xs text-emerald-400 font-bold uppercase tracking-wider">
                    live compile
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "visual" && (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="space-y-2 flex-grow"
                    >
                      <p className="text-gray-400">// Connecting IoT Wallpad Network...</p>
                      <p className="text-blue-400">&gt; kocom-iot-status --check</p>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
                        <div className="flex justify-between items-center text-gray-400 text-2xs mb-1">
                          <span>kocom_wallpad_v12.tsx</span>
                          <span className="text-blue-400 font-bold">100% Online</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="bg-blue-500 h-full rounded-full"
                          />
                        </div>
                      </div>
                      <div className="pt-2 flex items-center space-x-2 text-emerald-400 text-2xs">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Success! 5.2M domestic housing networks active on kocom.co.kr</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "autom" && (
                    <motion.div
                      key="autom"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="space-y-2.5 flex-grow"
                    >
                      <p className="text-gray-400">// Activating AI CCTV Surveillance...</p>
                      <div className="flex items-center justify-between text-2xs">
                        <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-indigo-300">
                          IP Camera Feed
                        </span>
                        <span className="text-gray-500">→</span>
                        <span className="bg-indigo-950/50 border border-indigo-700/50 px-2 py-0.5 rounded text-indigo-400 font-bold">
                          AI Chip Guardian
                        </span>
                        <span className="text-gray-500">→</span>
                        <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-indigo-300">
                          Alarm Signal
                        </span>
                      </div>
                      <p className="text-violet-400 text-2xs">
                        &gt; trigger event @intrusion_alert
                      </p>
                      <div className="p-2 bg-slate-900/60 rounded border border-slate-800 text-gray-300 text-2xs">
                        [CCTV-01 Alert] Automated defense system output: "Warning: Secured Area Active". Push notification sent.
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "prompt" && (
                    <motion.div
                      key="prompt"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="space-y-2.5 flex-grow"
                    >
                      <p className="text-gray-400">// Tuning Building Energy Dimmer Grid...</p>
                      <div className="p-2.5 bg-slate-900 rounded border border-slate-800 space-y-1">
                        <span className="text-amber-400 text-2xs font-semibold">
                          LED Lighting Grid Status:
                        </span>
                        <p className="text-gray-300 text-2xs italic leading-relaxed">
                          "Optimal brightness levels configured automatically according to ambient solar sensor indices."
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-gray-500 text-2xs">
                        <span>Dimmer Server v3</span>
                        <span className="text-amber-500 font-bold">Energy Saved: +34.5%</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Simulated Bottom Terminal Action */}
                <div className="border-t border-slate-800 pt-2.5 flex justify-between items-center">
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <Database className="w-3.5 h-3.5" />
                    <span>Memory: Standard Sync</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400 text-2xs">
                    <Cpu className="w-3 h-3 text-indigo-400" />
                    <span>Server: Local Cluster</span>
                  </div>
                </div>
              </div>

              {/* floating interactive cards badges */}
              <div className="absolute -bottom-2 -left-2 bg-white/90 border border-slate-100 rounded-xl px-3.5 py-2.5 flex items-center space-x-2 shadow-xl backdrop-blur-md">
                <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-900 text-[10px]">
                    Automation Speed
                  </div>
                  <div className="font-mono text-2xs text-cyan-600 font-extrabold">
                    0.41s Execute
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 bg-white/90 border border-slate-100 rounded-xl px-3.5 py-2.5 flex items-center space-x-2 shadow-xl backdrop-blur-md hidden xs:flex">
                <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-900 text-[10px]">
                    No-code Platform
                  </div>
                  <div className="font-mono text-2xs text-violet-600 font-extrabold">
                    Ready to Scale
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
