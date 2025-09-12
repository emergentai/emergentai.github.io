import React from "react";
import { CapabilitiesSection } from "./sections/capabilities-section";
import { CredibilitySection } from "./sections/credibility-section";
import { EnhancedContactSection } from "./sections/enhanced-contact-section";

export const SectionsWrapper: React.FC = () => {
  return (
    <>
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
    </>
  );
};