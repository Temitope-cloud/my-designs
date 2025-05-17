"use client";
import React from "react";
import { NavbarDemo } from "./components/Header";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import { Button } from "./components/ui/moving-border";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";

const Dashly = () => {
  const placeholders = ["Enter your email"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className="relative h-screen w-screen bg-[url(/paper.jpg)]">
        <div className="h-full w-full bg-white/10 px-10 py-5 backdrop-blur-md">
          {/* Header */}
          <NavbarDemo className="" />

          <div className="w-full mt-[12%]">
            <div className="flex justify-center my-2">
              <Button
                borderRadius="1.75rem"
                className="flex gap-2 mb-3 items-center justify-center border rounded-full px-2  w-fit bg-white  text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <p className="bg-purple-400 text-white px-2 rounded-full text-sm ">
                  New
                </p>
                <p className="primaryText font-bold">
                  Simro Version 1.0 is Lunching
                </p>
              </Button>
            </div>

            <p className="uppercase text-slate-600  text-center  text-5xl  gap-2  font-bold ">
              Connect with{" "}
              <span className="font-[cal_sans] bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-200 bg-clip-text text-transparent">
                Loved Ones
              </span>
            </p>
            <p className="font-[Ancizar_Sans] primaryText text-center tracking-wider text-lg opacity-80">
              a batter way to flow
            </p>
          </div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Dashly;
