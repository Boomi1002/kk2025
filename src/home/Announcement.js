import React, { useState, useEffect, useRef } from "react";
import "./Announcement.css";

const messages = [
  "Welcome TO கல்லூரி கலைத் திருவிழா 2024-2025",
  "Register Fastly",
  "Album Page updated. Check it out!",
];

const Announcement = () => {
  const marqueeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation on mount
    setAnimate(true);
  }, []);

  const handleAnimationEnd = () => {
    // Reset animation after it finishes
    setAnimate(false);
    // Optional: restart after 1 second
    setTimeout(() => setAnimate(true), 1000);
    
  };

  return (
    <div className="announcement-wrapper">
      <div
        ref={marqueeRef}
        className={`marquee-set ${animate ? "animate" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {messages.map((msg, index) => (
          <span key={index} className="marquee-item">{msg}</span>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
