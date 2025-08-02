"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="flex items-center gap-1 cursor-pointer"
    >
      <div className="rounded-full bg-sky-600 h-3 w-3"></div>
      <h1 className="text-blue-800 text-xl md:text-2xl sm:text-4xl font-bold">
        practo
      </h1>
      <div className="rounded-full bg-sky-600 h-3 w-3"></div>
    </div>
  );
};

export default Logo;
