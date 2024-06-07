import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const cursor = document.querySelector(".cursor");

    const cursormover = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.002,
      });
    };

    const cursorHover = () => {
      gsap.to(cursor, {
        scale: 1.4,
        opacity: 1,
      });
    };

    const cursorNormal = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0.6,
      });
    };

    body.addEventListener("mousemove", cursormover);
    body.addEventListener("mouseover", cursorHover);
    body.addEventListener("mouseout", cursorNormal);

    return () => {
      body.removeEventListener("mousemove", cursormover);
      body.removeEventListener("mouseover", cursorHover);
      body.removeEventListener("mouseout", cursorNormal);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
