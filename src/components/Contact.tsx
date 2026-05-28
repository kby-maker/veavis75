/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Check, Copy, Hourglass, ArrowUpRight } from "lucide-react";
import { LanguageContent } from "../types";

interface ContactProps {
  content: LanguageContent;
}

export default function Contact({ content }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setIsSubmitting(true);

      // Simulate server latency for premium feel
      setTimeout(() => {
        // Persist contact form request into client storage safely
        const existingSubmissions = JSON.parse(
          localStorage.getItem("kocom_consult_submissions") || "[]"
        );
        const newSubmission = {
          ...formData,
          id: "submission_" + Date.now(),
          submittedAt: new Date().toISOString(),
        };
        existingSubmissions.push(newSubmission);
        localStorage.setItem(
          "kocom_consult_submissions",
          JSON.stringify(existingSubmissions)
        );

      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("customer@kocom.co.kr");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", project: "", description: "" });
    setShowSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-200/20 via-violet-200/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-200/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Descriptive info & Copy contact cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>Get In touch</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                {content.contact.title}
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-slate-505 leading-relaxed font-normal">
                {content.contact.subtitle}
              </p>
            </div>

            {/* Direct Email Click-to-copy block */}
            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-3xl space-y-4 shadow-sm">
              <span className="text-[10px] font-sans font-bold tracking-wider text-blue-600 uppercase block">
                DIRECT CONTACT CHANNEL
              </span>
              <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-200 hover:border-slate-350 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-xs text-slate-400 uppercase tracking-wide leading-none">
                      Consulting Desk
                    </p>
                    <p className="font-mono text-sm font-semibold text-slate-800 mt-1">
                      customer@kocom.co.kr
                    </p>
                  </div>
                </div>

                {/* Copy button */}
                <button
                  id="contact_copy_btn"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 cursor-pointer relative"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4.5 h-4.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-4.5 h-4.5" />
                  )}
                  {copiedEmail && (
                    <span className="absolute -top-7 right-0 text-[10px] bg-slate-150 text-slate-800 border border-slate-200 px-2 py-0.5 rounded shadow-md font-sans whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                <Hourglass className="w-4 h-4 text-violet-500 animate-spin" />
                <span>Response Promise: Typically under 24 hours on workdays.</span>
              </div>
            </div>

            {/* Support descriptive footnote */}
            <p className="font-sans text-xs text-slate-450 leading-normal">
              {content.contact.supportText}
            </p>
          </div>

          {/* Right Column: Dynamic Form panel or Success state */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/40 relative min-h-[450px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!showSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                        {content.contact.formName} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact_input_name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 font-sans"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                        {content.contact.formEmail} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact_input_email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 font-sans"
                        placeholder="example@gmail.com"
                      />
                    </div>

                    {/* Company field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                        {content.contact.formProject}
                      </label>
                      <input
                        id="contact_input_project"
                        type="text"
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 font-sans"
                        placeholder="부천 신흥 아파트 단지명 (또는 회사명)"
                      />
                    </div>

                    {/* Description field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                        {content.contact.formWhat} <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="contact_textarea_desc"
                        rows={4}
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 font-sans resize-none"
                        placeholder={content.contact.formWhatPlaceholder}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        id="contact_submit_btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-white font-sans font-bold text-sm tracking-wide shadow-xl shadow-slate-200/50 transition-all duration-250 cursor-pointer disabled:opacity-75 flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Sending Idea...</span>
                          </>
                        ) : (
                          <span>{content.contact.formSubmit}</span>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    className="text-center space-y-6 max-w-md mx-auto"
                  >
                    {/* Animated Check badge */}
                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8 text-blue-600 stroke-[3]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                        {content.contact.successTitle}
                      </h3>
                      <p className="font-sans text-sm text-slate-500 leading-relaxed font-normal">
                        {content.contact.successMessage}
                      </p>
                    </div>

                    {/* Summarized receipt output */}
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl text-left text-xs text-slate-700 space-y-1 shadow-xs">
                      <span className="text-slate-450 text-2xs uppercase block font-semibold mb-1">
                        Receipt Details:
                      </span>
                      <p>
                        <span className="text-slate-400 font-medium">NAME:</span> {formData.name}
                      </p>
                      <p>
                        <span className="text-slate-400 font-medium">EMAIL:</span> {formData.email}
                      </p>
                      <p>
                        <span className="text-slate-400 font-medium">PROJECT:</span>{" "}
                        {formData.project || "N/A"}
                      </p>
                    </div>

                    {/* Reset Button */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center">
                      <button
                        id="contact_reset_btn"
                        onClick={resetForm}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 transition cursor-pointer"
                      >
                        Submit another idea
                      </button>
                      <a
                        href={`mailto:customer@kocom.co.kr?subject=KOCOM%20Inquiry%20from%20${encodeURIComponent(
                          formData.name
                        )}&body=Site:%20${encodeURIComponent(
                          formData.project
                        )}%0AInquiry:%20${encodeURIComponent(formData.description)}`}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <span>Open Mail Client</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
