"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "/components/ui/button.jsx";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  const [isDarkMode, setIsDarkMode] = useState(true); // Set default to dark mode

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle 'dark' class
  };

  // Load theme preference from localStorage after the initial page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Save theme preference in localStorage
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm bg-gray-100 dark:bg-gray-800">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <div className="flex items-center gap-4">
        <Button>Get Started</Button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default Header;
