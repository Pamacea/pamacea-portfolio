"use client"

import { Navbar } from "./Navbar";

export function Header() {
  return (
    <nav className="flex w-full justify-center">
      <div className="fixed top-0 z-50 w-auto px-4 py-2">
        <Navbar />
      </div>
    </nav>
  );
}

