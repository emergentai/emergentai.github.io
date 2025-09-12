"use client";
import React from "react";
import { CredibilityItemComponent } from "../credibility-item";
import { CREDIBILITY_ITEMS } from "../../constants";

export const CredibilitySection: React.FC = () => {
  return (
    <section id="why-us" className="w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 mb-6">
            Why Choose Emergent AI
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Toronto-based AI expertise with a business-first approach to solving real problems.
          </p>
        </div>

        {/* Credibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREDIBILITY_ITEMS.map((item, index) => (
            <CredibilityItemComponent
              key={item.type}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};