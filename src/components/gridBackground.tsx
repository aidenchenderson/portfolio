'use client';
import React, {useState, MouseEvent} from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function GridBackground() {
  // initialize mouse position as (0, 0)
  const [mousePosition, setMousePosition] = useState<MousePosition>(() => {return {x: 0, y: 0}});

  const handleMousePositionChange = (event: MouseEvent) => {
    // get the mouse position relative to the target elements viewport position
    const rect = event.currentTarget.getBoundingClientRect();
    // update the mouse position relative to the target element
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    })
  }

  return (
    <div 
      onMouseMove={handleMousePositionChange}
      className="relative min-h-screen w-full bg-[#050a10] overflow-hidden group"
    >

      {/* static grid background */}
      <div className="
        absolute inset-0 z-0 filter
        bg-[linear-gradient(to_right,#4dabf7_1.5px,transparent_1.5px),linear-gradient(to_bottom,#4dabf7_1.5px,transparent_1.5px)]
        bg-[size:58px_58px]
        bg-[position:-29px_-29px]
        drop-shadow-[0_0_10px_#4dabf7]"      
      />

      {/* masked grid for interactive mouse move */}
      <div 
        className="
          absolute inset-0 z-0 transition-opacity duration-300
          bg-[linear-gradient(to_right,#ff007f_1.5px,transparent_1.5px),linear-gradient(to_bottom,#ff007f_1.5px,transparent_1.5px)]
          bg-[size:58px_58px]
          bg-[position:-29px_-29px]
          drop-shadow-[0_0_10px_#ff007f]
        "
        style={{
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
        }}
      />

      {/* content containers */}
      <div>

      </div>
    </div>
  );
}