import React, { useState } from "react";
import cn from "@/lib/utils/cn";

interface NavTabsProps {
  isMobile?: boolean;
}

const tabs = ["Find Doctors", "Video Consults", "Surgeries"];

const NavTabs: React.FC<NavTabsProps> = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState("Find Doctors");

  return (
    <div className={cn("flex", isMobile ? "flex-col" : "flex-row gap-4")}>
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "text-center cursor-pointer pb-1 transition-all duration-200",
            activeTab === tab
              ? "border-b-5 border-sky-600 text-blue-800"
              : "border-b-2 border-transparent hover:text-blue-800"
          )}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
