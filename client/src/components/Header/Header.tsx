import React from "react";
import Logo from "../ui/Logo";
import Navbar from "./Navbar";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="text-black bg-white fixed top-0 left-0 z-50 w-full px-1 sm:px-2 md:px-6 py-3 flex justify-between items-center shadow-lg">
      <Logo />
      <Navbar />
      <Button className="text-sm">login/Sign up</Button>
    </header>
  );
}
