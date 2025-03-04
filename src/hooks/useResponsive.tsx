import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

const useResponsive = () => {
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= breakpoints.mobile) {
        setScreenType("mobile");
      } else if (width <= breakpoints.tablet) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useResponsive;
