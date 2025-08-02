"use client";

import React from "react";
import Dropdown from "@/components/ui/Dropdown";
import { ChevronDown } from "lucide-react";

const FilterBar: React.FC = () => {
  const dropdownItems = [
    {
      label: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Patient Stories",
      options: ["All", "Video", "Written"],
    },
    {
      label: "Experience",
      options: ["0-5 years", "5-10 years", "10+ years"],
    },
    {
      label: "All Filters",
      options: ["Fee", "Availability", "Rating"],
    },
    {
      label: "Relevance",
      options: ["Relevance", "Price Low to High", "Price High to Low"],
    },
  ];

  return (
    <div className="w-full bg-blue-800 px-4 py-2">
      <div className="w-fit flex flex-wrap gap-3 items-center text-white mx-auto">
        {dropdownItems.slice(0, 3).map((item, index) => (
          <Dropdown
            key={index}
            label={
              <span className="flex items-center gap-1">
                <p>{item.label}</p>
                <ChevronDown size={16} />
              </span>
            }
            items={item.options}
            buttonClassName="border-0 bg-white/20 text-white"
          />
        ))}

        {/* All Filters Dropdown */}
        <Dropdown
          label={
            <span className="flex items-center gap-1">
              <p>{dropdownItems[3].label}</p>
              <ChevronDown size={16} />
            </span>
          }
          items={dropdownItems[3].options}
          buttonClassName="border-0 bg-white/20 text-white"
        />

        <span className="whitespace-nowrap">Sort By</span>

        {/* Relevance Dropdown */}
        <Dropdown
          label={
            <span className="flex items-center gap-1">
              <p>{dropdownItems[4].label}</p>
              <ChevronDown size={16} />
            </span>
          }
          items={dropdownItems[4].options}
          buttonClassName="border-0 bg-white/20 text-white"
        />
      </div>
    </div>
  );
};

export default FilterBar;
