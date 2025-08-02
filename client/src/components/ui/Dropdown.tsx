"use client";

import React, { useEffect, useRef, useState } from "react";
import cn from "@/lib/utils/cn";

interface DropdownProps<T extends React.ReactNode = React.ReactNode> {
  items: T[];
  selected?: T;
  onSelect?: (item: T) => void;
  renderItem?: (item: T, isSelected: boolean) => React.ReactNode;
  label?: React.ReactNode;
  buttonClassName?: string;
  dropdownClassName?: string;
  placement?: "left" | "right";
}

const Dropdown = <T extends React.ReactNode>({
  items,
  selected,
  onSelect,
  renderItem,
  label,
  buttonClassName,
  dropdownClassName,
  placement = "right",
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-1 px-3 py-2 border border-gray-400 bg-white text-sm font-medium",
          buttonClassName
        )}
      >
        {label ?? selected}
      </button>

      {open && (
        <div
          className={cn(
            "max-h-[350px] overflow-y-auto absolute mt-2 shadow-lg border border-gray-400 bg-white z-10",
            placement === "right" ? "right-0" : "left-0",
            dropdownClassName
          )}
        >
          {items.map((item, index) => (
            <button
              key={index}
              className="text-black w-full text-left px-4 py-2 hover:bg-gray-300"
              onClick={() => {
                onSelect?.(item);
                setOpen(false);
              }}
            >
              {renderItem ? renderItem(item, item === selected) : item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
