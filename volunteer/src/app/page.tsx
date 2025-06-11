import { MultiStepForm } from "@/components/form";
import React from "react";

const Volunteer = () => {
  return (
    <>
      <div className="flex items-center h-screen bg-amber-50">
        <div className="relative h-screen flex-1 my-auto rounded-xl">
          <div className="absolute rounded-xl h-[100%] bottom-0 w-full bg-gradient-to-t from-black via-black-30% to-transparent backdrop-blur-[2px]">
            <h2 className="font-[Orbitron] text-2xl font-extrabold uppercase text-gray-100 mx-5 tracking-widest ">
              Volunteer
            </h2>
            <div className="absolute bottom-20 mx-5  text-white">
              <h2 className="text-xl font-bold">
                Stand Up. Show Up. Volunteer.
              </h2>
              <p className="">
                When you volunteer, you’re not just giving your time — you’re
                creating moments that matter. Whether it’s lending a hand,
                sharing a smile, or standing for a cause, your presence can
                change a story.
              </p>

              <div className="flex items-center gap-3 mt-2">
                <button className="px-4 py-1 rounded bg-amber-800/50 flex items-center gap-2 backdrop-blur-2xl">
                  Homepage <i className="bx bx-link-external"></i>
                </button>
                <button className="px-4 py-1 rounded bg-amber-800/50 flex items-center gap-2 backdrop-blur-2xl">
                  Merch <i className="bx bx-store-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <img
            src="/volunteer.jpg"
            className="h-screen object-cover rounded-2xl"
            alt=""
          />
        </div>

        <div className="flex-1">
          <MultiStepForm />
        </div>
      </div>
    </>
  );
};

export default Volunteer;
