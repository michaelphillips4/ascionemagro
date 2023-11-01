"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        className="float-right border rounded-full bg-gray-900 dark:bg-white p-2 mr-4"
        onClick={(e) => {
          const n = theme === "dark" ? "system" : "dark";
          return setTheme(n);
        }}
      ></button>
    </>
  );
};

export default ThemeSwitch;
