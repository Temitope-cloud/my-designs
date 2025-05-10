"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";
import MenuDrawer from "./menudrawer";
import { useScreenWidth } from "@/lib/screenSize";

const Navbar = ({ className }: { className: string }) => {
  const { theme, toggleTheme } = useTheme();
  const screenSize = useScreenWidth();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const middleMenu: { name: string }[] = [
    { name: "Home" },
    { name: "Movies" },
    { name: "TV Shows" },
    { name: "My List" },
  ];

  console.log(screenSize);
  return (
    <>
      <div className={`mx-2 mt-1 ${className} w-[99%]`}>
        {screenSize > 0 && (
          <div
            className={`flex border border-slate-600 backdrop-blur-sm transition-all duration-500 ${
              screenSize > 768 ? "mx-12" : "mx-0"
            } items-center justify-between rounded-full`}
          >
            <div className="flex items-center">
              <MenuDrawer />
              <p className="primaryText text-2xl font-semibold uppercase">
                MovHer
              </p>
              <div className="mx-2 h-3 w-3 rounded-full bg-[#693c5c] opacity-80"></div>
            </div>

            {/* Middle Menu */}

            <div className="hidden w-[50%] md:flex">
              <ul className="flex w-full justify-between gap-2">
                {middleMenu.map((m, index) => (
                  <li key={index} className="primaryText text-lg">
                    {m.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-none px-5">
              <button className="rounded-md bg-[#693c5c] px-3 py-1">
                Login In
              </button>
            </div>
          </div>
        )}

        {/* <button onClick={toggleTheme} className="px-4 py-2 rounded button">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <p>Screen size is {screenSize}px</p> */}
      </div>
    </>
  );
};

export default Navbar;
