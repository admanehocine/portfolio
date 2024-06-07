import React, { useState, useEffect } from "react";

const TypingEffect = ({ word, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + word.charAt(i));
      i++;
      if (i >= word.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [word, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
