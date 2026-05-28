/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { contentKO, contentEN } from "./data";

export default function App() {
  // Brand defaults to Korean for native Korean Consulting feel, customizable via Header UI toggles
  const [isKo, setIsKo] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  const content = isKo ? contentKO : contentEN;

  // Track active scroll heights to dynamically highlight current navigation headers
  useEffect(() => {
    const sections = ["home", "problems", "services", "solutions", "why", "process", "about", "contact"];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // When problems/why are in view, map closer to major headers or section blocks
            if (sectionId === "problems" || sectionId === "services") {
              setActiveSection("services");
            } else if (sectionId === "why" || sectionId === "process") {
              setActiveSection("solutions");
            } else {
              setActiveSection(sectionId);
            }
          }
        },
        { threshold: 0.15, rootMargin: "-10% 0px -60% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    // If navigating to home, scroll to top
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensates for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden antialiased">
      {/* 1. Header Navigation */}
      <Header
        isKo={isKo}
        setIsKo={setIsKo}
        content={content}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero content={content} scrollToSection={scrollToSection} />

        {/* 3. Problem Section */}
        <Problems content={content} />

        {/* 4. Services Section */}
        <Services content={content} />

        {/* 5. Solutions Section */}
        <Solutions content={content} scrollToSection={scrollToSection} />

        {/* 6. Why Choose YounMe AI Section */}
        <WhyChooseUs content={content} />

        {/* 7. Process Section */}
        <Process content={content} />

        {/* 8. About Section */}
        <About content={content} />

        {/* 9. Call To Action (Free Strategy Pitch) Section */}
        <CallToAction content={content} scrollToSection={scrollToSection} />

        {/* 10. Contact Form Section */}
        <Contact content={content} />
      </main>

      {/* 11. Footer Section */}
      <Footer isKo={isKo} content={content} scrollToSection={scrollToSection} />
    </div>
  );
}
