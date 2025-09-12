"use client";
import React from "react";
import { SimpleCard } from "./simple-card";
import { CapabilityItem } from "../constants";

interface CapabilityCardProps {
  capability: CapabilityItem;
  index: number;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ 
  capability, 
  index 
}) => {
  return (
    <SimpleCard>
      <div className="relative p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl">{capability.icon}</div>
          <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 font-display">
            {capability.title}
          </h3>
        </div>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          {capability.description}
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {capability.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-md border border-zinc-300 dark:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              {capability.useCases.map((useCase, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs bg-zinc-100/50 dark:bg-zinc-700/30 text-zinc-600 dark:text-zinc-400 rounded-md"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SimpleCard>
  );
};