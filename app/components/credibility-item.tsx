"use client";
import React from "react";
import { CredibilityItem } from "../constants";

interface CredibilityItemProps {
  item: CredibilityItem;
  index: number;
}

export const CredibilityItemComponent: React.FC<CredibilityItemProps> = ({ 
  item, 
  index 
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
      {item.icon && (
        <div className="text-4xl mb-4">
          {item.icon}
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3 font-display">
        {item.title}
      </h3>
      
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};