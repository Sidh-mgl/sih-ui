import React, { useState } from "react";

export function MaskContainer({ children, revealText, className }) {
  const [maskPos, setMaskPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMaskPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* Revealed text with mask */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 text-black dark:text-white pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 150px at ${maskPos.x}% ${maskPos.y}%, white, transparent)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: `radial-gradient(circle 150px at ${maskPos.x}% ${maskPos.y}%, white, transparent)`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      >
        {revealText}
      </div>

      {/* Base content */}
      <div className="relative z-0">{children}</div>
    </div>
  );
}
