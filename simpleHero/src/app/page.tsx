import React from "react";
import { NavbarDemo } from "./components/Header";

const Simro = () => {
  return (
    <>
      <div className="relative h-screen w-screen bg-[url(/paper.jpg)]">
        <div className="h-full w-full bg-white/10 px-10 py-5 backdrop-blur-md">
          {/* Header */}
          <NavbarDemo className="`" />
        </div>
      </div>
    </>
  );
};

export default Simro;
