import React, { useState, useEffect } from "react";
export const Responsivehook = ({ mobile, pc }) => {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 760;

  useEffect(() => {
    const handleWindowResize = () =>
      setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return isMobile ? mobile : pc;
};
