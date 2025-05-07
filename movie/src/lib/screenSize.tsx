import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenWidth;
};

export const useIsMobile = () => {
  const screenWidth = useScreenWidth();
  return screenWidth <= 768;
};
