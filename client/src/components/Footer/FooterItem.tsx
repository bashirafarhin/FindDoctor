import React from "react";
import { LucideIcon } from "lucide-react";
import Button from "../ui/Button";
import cn from "@/lib/utils/cn"; // adjust this path based on your project

interface FooterItemProps {
  icon: LucideIcon;
  label: string;
  showNewButton?: boolean;
  className?: string;
}

const FooterItem: React.FC<FooterItemProps> = ({
  icon: Icon,
  label,
  showNewButton = false,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "group flex flex-col items-center px-2 py-2 sm:py-1",
        "border-t border-t-gray-500 sm:border-t-0 sm:border-l sm:border-l-gray-500",
        "transition-all duration-200 ease-in-out cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-1">
        <Icon
          className={cn(
            "text-gray-300 transition-transform duration-200 group-hover:scale-110 group-hover:text-white"
          )}
        />
        {showNewButton && (
          <Button className="text-sm bg-green-500 text-white border-white px-2 py-0.5 rounded-md">
            New
          </Button>
        )}
      </div>
      <h1 className="text-sm text-center text-gray-400 transition-colors duration-200 group-hover:text-white">
        {label}
      </h1>
    </div>
  );
};

export default FooterItem;
