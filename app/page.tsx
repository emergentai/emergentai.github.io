import React from "react";
import Particles from "./components/particles";
import { CapabilitiesSection } from "./components/sections/capabilities-section";
import { CredibilitySection } from "./components/sections/credibility-section";
import { EnhancedContactSection } from "./components/sections/enhanced-contact-section";
import { Navigation } from "./components/navigation";

export default function Home() {
  return (
    <div className="bg-gradient-to-tl from-white via-zinc-100/20 to-white dark:from-black dark:via-zinc-600/20 dark:to-black">
      <Navigation />
      {/* Hero Section */}
      <div id="hero" className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden relative pt-20 px-4">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto text-center z-10">
          {/* Main Heading */}
          <h1 className="py-3.5 px-0.5 text-5xl text-transparent duration-1000 bg-black dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text mb-8">
            emergent ai
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300 mb-8 animate-fade-in animation-delay-300">
            AI Solutions That Actually Work for Your Business
          </h2>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animation-delay-500">
            <a
              href="https://calendly.com/emergentai/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 shadow-2xl hover:shadow-zinc-900/25 dark:hover:shadow-white/25 hover:scale-105"
            >
              Book Free Consultation
            </a>
            <a
              href="#capabilities"
              className="border-2 border-zinc-700 dark:border-zinc-300 text-zinc-700 dark:text-zinc-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-700 hover:text-white dark:hover:bg-zinc-300 dark:hover:text-zinc-900 transition-all duration-300"
            >
              See What We Build
            </a>
          </div>

          {/* Simple Trust Indicator */}
          <div className="text-sm text-zinc-500 dark:text-zinc-500 animate-fade-in animation-delay-700">
            Made in Toronto 🇨🇦 serving the World 🌍
          </div>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0 mt-16" />
      </div>

      {/* Section Separator */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Section Separator */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />

      {/* Credibility Section */}
      <CredibilitySection />

      {/* Section Separator */}
      <div className="w-screen h-px bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />

      {/* Enhanced Contact Section */}
      <EnhancedContactSection />
    </div>
  );
}
