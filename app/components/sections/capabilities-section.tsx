"use client";
import React from "react";
import { CapabilityCard } from "../capability-card";
import { AI_CAPABILITIES } from "../../constants";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 mb-6">
            What We Build
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From intelligent document processing to autonomous business workflows, 
            we create AI solutions that transform how your business operates.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_CAPABILITIES.map((capability, index) => (
            <CapabilityCard 
              key={capability.id} 
              capability={capability} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};