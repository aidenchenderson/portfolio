'use client';
import { useState, MouseEvent, useRef } from "react";
import Image from "next/image";
import "../styles/HomePage.css";
import Grid from "../components/grid";

import type { MousePosition } from "../components/types";
import Container from "../components/container";

export default function HomePage() {
  // initialize mouse position to (0, 0) on component render
  const [mousePosition, setMousePosition] = useState<MousePosition>(() => { return { x: 0, y: 0 } });

  // initialize a state to track user mouse movement
  // timeout controls whether the mask layer is visible
  const [mouseIsMoving, setMouseIsMoving] = useState(() => { return false });
  const movementTimerRef = useRef<NodeJS.Timeout | null>(null);

  // time (in miliseconds) to show the masked layer after the user stops moving
  const maskFadeTime: number = 400;

  // update mouse position and mouse movement tracking when called on mouse move
  const handleMousePositionChange = (event: MouseEvent) => {
    // update the mouse's position relative to the target elements viewport position
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });

    setMouseIsMoving(true);

    // reset the movement detection timer
    if (movementTimerRef.current) clearTimeout(movementTimerRef.current);

    movementTimerRef.current = setTimeout(() => {
      setMouseIsMoving(false);
    }, maskFadeTime);
  };

  // state to control active system status vs critical system status
  const [systemStatusOnline, setSystemStatusOnline] = useState(() => { return true; });

  const handleSystemStatusChange = () => {
    setSystemStatusOnline(prev => !prev);
  };

  return (
    <div
      onMouseMove={handleMousePositionChange}
      className="relative min-h-screen w-full bg-[#050a10] overflow-hidden group flex items-center justify-center"
    >
      {/* neon grid */}
      <Grid
        systemStatusOnline={systemStatusOnline}
        mouseIsMoving={mouseIsMoving}
        mousePosition={mousePosition} 
      />

      {/* content container */}
      <Container
        systemStatusOnline={systemStatusOnline}
      />
    </div>
  );
};