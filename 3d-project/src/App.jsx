import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import gsap from "gsap";

const App = () => {
  const counterRef = useRef(null);
  // const [count, setCount] = useState(0)

  useEffect(() => {
    const obj = { val: 0 };
    const step = 5;
    const tl = gsap.timeline();

    tl.to(obj, {
      val: 100,
      duration: 3,
      ease: "power1.inOut",
      onUpdate: () => {
        const stepped = Math.floor(obj.val / step) * step;
        counterRef.current.textContent = `${stepped}%`;
      },
    });
    //
    tl.to(".left-panel", { y: "-10%", duration: 0.2, ease: "power2.inOut" });
    tl.to(
      ".right-panel",
      { y: "10%", duration: 0.2, ease: "power2.inOut" },
      "<"
    );
    tl.to({}, { duration: 0.3 });
    tl.fromTo(
      counterRef.current,
      { opacity: 1, y: 20 },
      { opacity: 0, y: 0, duration: 0.5, ease: "power2.out" }
    );
    tl.to(".left-panel", {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
    });
    tl.to(
      ".right-panel",
      {
        y: "100%",
        duration: 0.8,
        ease: "power4.inOut",
      },
      "<"
    );
    //
    tl.fromTo(
      counterRef.current,
      { opacity: 1, y: 20 },
      { opacity: 0, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Optional: remove preloader from DOM after animation
    tl.set(".preloader", { display: "none" });
  }, []);

  return (
    <>
      <main className="relative min-h-screen w-screen overflow-hidden">
        <div className="preloader flex flex-col absolute inset-0 z-[998] h-screen">
          <h1
            ref={counterRef}
            className="text-6xl  font-bold special-font text-center text-white absolute absolute-center top-1/2 z-[999] "
          >
            0
          </h1>
          {/* <div className="line-draw absolute left-1/2 top-1/2 h-[2px] bg-white z-[998] transform -translate-x-1/2"></div> */}
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
