"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  // Initialize dark mode as true by default
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    
    if (theme === "light") {
      setDarkMode(false); // Set dark mode to false if theme is stored as light
      document.documentElement.classList.remove("dark");
    } else {
      // If there's no theme or it's set to dark, apply dark mode
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []); // Run once on component mount

  const toggleDarkMode = () => {
    const newMode = !darkMode; // Toggle the mode

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setDarkMode(newMode); // Update state with the new mode
  };

  return (
    <div
      className="cursor-pointer text-xl bg-black-500 dark:bg-white p-2 mt-1 border border-dashed rounded-full"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <BsSunFill className="text-black-800" />
      ) : (
        <FaMoon className="text-white" />
      )}
    </div>
  );
};

export default ThemeToggle;
