/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { KoreanNavLinks, navLinks } from "../data";
import { LanguageContent } from "../types";

interface HeaderProps {
  isKo: boolean;
  setIsKo: (val: boolean) => void;
  content: LanguageContent;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Header({
  isKo,
  setIsKo,
  content,
  scrollToSection,
  activeSection,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = isKo ? KoreanNavLinks : navLinks;

  return (
    <header
      id="header_main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-xl shadow-slate-250/20"
          : "py-6 bg-white/30 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="header_logo"
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/10 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-display font-extrabold text-xs tracking-tighter">KO</span>
            </div>
            <span className="text-xl font-display font-black tracking-tight text-slate-950">
              KOCOM <span className="font-sans font-normal text-xs text-blue-600 align-super ml-0.5">IoT</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="header_nav_desktop" className="hidden md:flex items-center space-x-8">
            {links.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans font-medium text-sm transition-colors duration-200 hover:text-blue-600 relative py-1 cursor-pointer focus:outline-none ${
                  activeSection === link.id
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Controls (Language & CTA) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Lang switcher */}
            <button
              id="header_lang_toggle"
              onClick={() => setIsKo(!isKo)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-xs font-semibold text-gray-700 transition-all duration-200 cursor-pointer"
              title="Change Language / 언어 변경"
            >
              <Globe className="w-3.5 h-3.5 text-gray-500" />
              <span>{isKo ? "English" : "한국어"}</span>
            </button>

            {/* CTA */}
            <button
              id="header_desktop_cta"
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-white text-sm font-semibold rounded-full shadow-xl shadow-slate-200 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{content.header.cta}</span>
            </button>
          </div>

          {/* Mobile triggers */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Lang Switcher icon */}
            <button
              id="header_lang_toggle_mobile"
              onClick={() => setIsKo(!isKo)}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
            </button>

            <button
              id="header_mobile_menu_btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile_drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-gray-100 bg-white/95 backdrop-blur-xl absolute top-full left-0 right-0 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => scrollToSection(link.id), 200);
                    }}
                    className={`text-left py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button
                  id="mobile_drawer_cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => scrollToSection("contact"), 200);
                  }}
                  className="w-full text-center py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                >
                  {content.header.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
