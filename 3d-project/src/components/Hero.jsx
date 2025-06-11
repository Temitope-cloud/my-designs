import React, { useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setloadedVideos] = useState(1);
  const handleMiniVideoPlayer = (unique) => {
    setHasClicked(true);
    setcurrentIndex((prev) => (prev >= totalVideos ? 1 : prev + 1));
  };
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const totalVideos = 4;
  return (
    <>
      <div className="relative min-h-screen w-screen overflow-hidden text-white">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          <video
            loop
            muted
            autoPlay
            src={getVideoSrc(currentIndex)}
            className="h-screen w-screen object-cover"
          ></video>

          <div onClick={() => handleMiniVideoPlayer(currentIndex)}>
            <video
              src={getVideoSrc((currentIndex % totalVideos) + 1)}
              loop
              muted
              autoPlay
              className={` absolute w-50 h-50 object-cover rounded-md top-1/2 left-1/2 transform -translate-1/2 scale-50 opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-100 cursor-pointer `}
            />
          </div>
        </div>{" "}
        <div className="absolute z-10 top-20 left-5">
          <div>
            <h2 className=" hero-heading text-9xl ">
              Redefi<span className="special-font">N</span>e
            </h2>
            <div className="leading-0">
              <p className="text-xs">Enter the metagame</p>
              <p className="text-xs">Unleash the play economy</p>
              <Button
                id="watch-trailer"
                title="Watch Trailer"
                containerClass="bg-yellow-300 flex-center gap-1"
                leftIcon={<TiLocationArrow />}
              />
            </div>
          </div>
        </div>
        <h2 className="z-40 special-font hero-heading absolute bottom-5 right-5 ">
          Gaming
        </h2>
      </div>
    </>
  );
};

export default Hero;
