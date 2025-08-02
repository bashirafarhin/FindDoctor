"use client";

import React from "react";
import Dropdown from "@/components/ui/Dropdown";
import NavTabs from "./NavTabs";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const rightDropdowns = [
    {
      label: "For Corporate",
      newLabel: true,
      items: ["Enterprise Services", "Insurance"],
    },
    {
      label: "For Providers",
      items: ["Doctor Onboarding", "Partner Clinics"],
    },
    {
      label: "Security & Help",
      items: ["Privacy Policy", "Customer Support"],
    },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-1 md:px-3 gap-4 py-2">
      {/* Left Tabs - Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <NavTabs />
      </div>

      {/* Right Dropdowns - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        {rightDropdowns.map((dropdown) => (
          <div key={dropdown.label} className="flex items-center">
            {dropdown.newLabel && (
              <span className="text-xs text-white bg-blue-800 rounded-lg p-0.5">
                New
              </span>
            )}
            <Dropdown
              label={
                <span className="flex items-center gap-1">
                  <p>{dropdown.label}</p>
                  <ChevronDown size={16} />
                </span>
              }
              items={dropdown.items}
              renderItem={(item) => <span>{item}</span>}
              buttonClassName="border-0 p-0.5 bg-transparent hover:text-blue-700"
              dropdownClassName="w-48"
            />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="w-full md:hidden flex items-center justify-between">
        {/* Left Tabs as Dropdown */}
        <Dropdown
          label={
            <span className="flex items-center gap-1">
              <p>Menu</p>
              <ChevronDown size={16} />
            </span>
          }
          buttonClassName="border-0 bg-transparent hover:text-blue-700"
          items={["Find Doctors", "Video Consults", "Surgeries"]}
          renderItem={(item) => <span>{item}</span>}
        />

        {/* Right Section Combined */}
        <Dropdown
          label={
            <span className="flex items-center gap-1">
              <p>More</p>
              <ChevronDown size={16} />
            </span>
          }
          buttonClassName="border-0 bg-transparent hover:text-blue-700"
          items={rightDropdowns.flatMap((group) => [
            <div key={group.label}>{group.label}</div>,
            ...group.items.map((item) => (
              <div key={item} className="px-6 py-1">
                {item}
              </div>
            )),
          ])}
          renderItem={(item) => item}
        />
      </div>
    </nav>
  );
};

export default Navbar;
