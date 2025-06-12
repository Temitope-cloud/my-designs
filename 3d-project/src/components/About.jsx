import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top 100px",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <>
      <div className="min-h-screen w-screen ">
        <div className="flex-col flex items-center relative mt-22">
          <p className="font-general text-sm uppercase">Welcome To Zentry</p>
          <div>
            <div className="text-5xl font-zentry text-center">
              Discover the world's largest shared adventure
            </div>

            <div className="about-subtext">
              <p>The Game of Games begins—your life, now an epic MMORPG</p>
              <p className="text-gray-500">
                Zentry unites every player from countless games and platforms,
                both digital and physical, into a unified Play Economy
              </p>
            </div>
          </div>
          <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
              <img
                src="img/about.webp"
                alt="Background"
                className="absolute left-0 top-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
