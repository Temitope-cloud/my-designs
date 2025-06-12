import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import gsap from "gsap";

const App = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".left-panel", { y: "-100%", duration: 1, ease: "power4.inOut" });
    tl.to(
      ".right-panel",
      { y: "100%", duration: 1, ease: "power4.inOut" },
      "<"
    );

    // Optional: remove preloader from DOM after animation
    tl.set(".preloader", { display: "none" });
  }, []);

  return (
    <>
      <main className="relative min-h-screen w-screen overflow-hidden">
        <div className="preloader flex flex-col fixed inset-0 z-[999]">
          <div className="panel left-panel flex-1 bg-black/50 backdrop-blur-[10px] w-screen h-[50%] "></div>
          <div className="panel right-panel flex-1  bg-black/50 backdrop-blur-[10px] w-screen h-[50%] "></div>
        </div>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
