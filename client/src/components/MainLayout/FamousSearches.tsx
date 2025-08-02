"use client";

import React from "react";
import Dropdown from "@/components/ui/Dropdown";
import { ChevronDown } from "lucide-react";

const FamousSearches = () => {
  const popular = [
    "Dermatologist",
    "Pediatrician",
    "Gynecologist/Obstetrician",
  ];

  const otherSpecialists = [
    "Dentist",
    "Cardiologist",
    "Orthopedic",
    "ENT Specialist",
    "Psychiatrist",
    "Urologist",
  ];

  return (
    <div className="text-sm text-gray-400 flex flex-wrap items-center gap-4 mt-2">
      <span className="font-semibold">Popular searches:</span>
      {popular.map((item) => (
        <span
          key={item}
          className="cursor-pointer transition-colors hover:text-white hover:underline"
        >
          {item}
        </span>
      ))}
      <Dropdown
        label={
          <span className="flex items-center gap-2">
            <p>Others</p>
            <ChevronDown size={16} />
          </span>
        }
        buttonClassName="cursor-pointer bg-transparent border-0 transition-colors hover:text-white hover:underline"
        items={otherSpecialists}
      />
    </div>
  );
};

export default FamousSearches;
