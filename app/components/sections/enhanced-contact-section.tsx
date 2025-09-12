"use client";
import React from "react";
import { CONTACT_METHODS } from "../../constants";

export const EnhancedContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 mb-6">
            Let's Build Together
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's start with a conversation 
            about your challenges and opportunities.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.type}
              href={method.value}
              target={method.type === 'calendly' ? '_blank' : undefined}
              rel={method.type === 'calendly' ? 'noopener noreferrer' : undefined}
              className={`
                px-8 py-4 rounded-lg border transition-all duration-300 font-medium
                ${method.primary 
                  ? 'bg-zinc-800 dark:bg-zinc-100 text-white dark:text-black border-zinc-800 dark:border-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:scale-105' 
                  : 'bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-400 dark:border-zinc-600 hover:border-zinc-600 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }
              `}
            >
              {method.label}
            </a>
          ))}
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-200/30 dark:bg-zinc-800/30 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-400 text-sm">
          <span>🇨🇦</span>
          <span>Made in Toronto</span>
        </div>
      </div>
    </section>
  );
};