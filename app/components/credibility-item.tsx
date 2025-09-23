"use client";
import React from "react";
import { CredibilityItem } from "../constants";
import { SimpleCard } from "./simple-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faMicroscope, faBriefcase, faHandshake } from "@fortawesome/free-solid-svg-icons";

interface CredibilityItemProps {
  item: CredibilityItem;
  index: number;
}

export const CredibilityItemComponent: React.FC<CredibilityItemProps> = ({ 
  item, 
  index 
}) => {
  const iconMap: Record<string, any> = {
    MapPin: faMapPin,
    Microscope: faMicroscope,
    Briefcase: faBriefcase,
    Handshake: faHandshake,
  };
  const iconKey = item.icon ?? "Briefcase";
  const faIcon = iconMap[iconKey] ?? faBriefcase;

  return (
    <SimpleCard>
      <div className="flex flex-col items-center text-center p-6 h-full">
        {item.icon && (
          <div className="text-4xl mb-4 text-green-600 dark:text-green-400">
            <FontAwesomeIcon icon={faIcon} className="w-9 h-9" />
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3 font-display">
          {item.title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </SimpleCard>
  );
};