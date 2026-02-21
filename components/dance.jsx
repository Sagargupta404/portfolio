"use client";
import { useState, useEffect } from "react";


export default function CText() {
  const words = ["Doctor", "Leader", "Saviour", "Creator"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      I am a <span className="text-red-600">{displayedText}</span>
      <span className="border-r-2 border-red-600 animate-pulse ml-1"></span>
    </h2>
  );
}
