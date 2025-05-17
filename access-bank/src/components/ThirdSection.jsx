import React, { useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { StickyNav } from "./ui/pageUI/stickyNav";
import accessApp from "@/assets/accessmoreapp.png";
import accessVideo from "@/assets/accessBankVideo.mov";

const ThirdSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const Skeleton = () => (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <>
      <div className="mt-10 h-screen">
        <div className="mx-5 flex h-screen justify-between">
          <div className="mt-20 flex-1 pe-10">
            <p className="text-4xl font-semibold uppercase">Access More App</p>
            <p className="mt-5">
              Banking made effortless. The Access More App gives you full
              control of your finances — anywhere, anytime. From transfers to
              airtime purchases, bills to budgeting — it’s your bank, right in
              your pocket.
            </p>
          </div>

          <div className="relative flex-1">
            <video
              ref={videoRef}
              src={accessVideo}
              muted
              playsInline
              loop
              className="h-full rounded-md object-cover"
            ></video>
            <div className="absolute bottom-0 h-100 w-full rounded-md bg-gradient-to-t from-[#f9b49b]"></div>
          </div>

          {/* <video
            ref={videoRef}
            src={accessVideo}
            muted
            playsInline
            loop
            className="h-screen w-full object-cover"
          ></video>
          <div className="absolute top-0 h-full w-full bg-amber-950/60 backdrop-blur-sm">
            <p className="pt-30 text-center font-[cal_sans] text-6xl font-semibold tracking-wider text-white">
              Acss More App
            </p>
          </div> */}
          {/* <BentoGrid className="mx-auto max-w-4xl">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid> */}
          {/* <StickyNav /> */}
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
