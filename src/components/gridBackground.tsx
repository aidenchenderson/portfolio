'use client';
import { useState, MouseEvent, useRef } from "react";
import Image from "next/image";

interface MousePosition {
  x: number;
  y: number;
}

interface HoverInformation {
  text: string;
  visible: boolean;
}

export default function GridBackground() {
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

  // initialize the additional hover info to hidden on component render
  const [hoverInformation, setHoverInformation] = useState<HoverInformation>(() => { return { text: "", visible: false } });

  const handleEnterHoverText = (hoverText: string) => {
    setHoverInformation({ text: hoverText, visible: true });
  };

  const handleExitHoverText = () => {
    setHoverInformation(prev => ({ ...prev, visible: false }));
  }

  return (
    <div
      onMouseMove={handleMousePositionChange}
      className="relative min-h-screen w-full bg-[#050a10] overflow-hidden group"
    >

      {/* static grid background */}
      <div className="
        absolute inset-0 z-0 filter
        bg-[linear-gradient(to_right,#4dabf7_3px,transparent_3px),linear-gradient(to_bottom,#4dabf7_3px,transparent_3px)]
        bg-size-[58px_58px]
        bg-position-[-29px_-29px]
        drop-shadow-[0_0_10px_#4dabf7]"
      />

      {/* masked grid for interactive mouse move */}
      <div
        className="
          absolute inset-0 z-0 transition-opacity duration-300
          bg-[linear-gradient(to_right,#f783ac_3px,transparent_3px),linear-gradient(to_bottom,#f783ac_3px,transparent_3px)]
          bg-size-[58px_58px]
          bg-position-[-29px_-29px]
          drop-shadow-[0_0_10px_#f783ac]
        "
        style={{
          opacity: mouseIsMoving ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
        }}
      />


      {/* container for website header */}
      <div className="relative z-10 p-10 pointer-events-none">
        <div className="
          relative inline-block p-10
          bg-(--color-box-background) border-(--color-box-border) border-2
          shadow-[0_0_20px_var(--color-box-background-shadow)] 
          pointer-events-auto"
        >
          <h1
            aria-hidden="true"
            className="text-8xl font-bold font-sans select-none relative"
          >
            <span className="relative z-10 text-[#FFFFFF]">AHENDERSON.DEV</span>
            <span className="absolute top-[-2] left-0 -ml-px text-(--color-grid-blue) opacity-75 z-0">AHENDERSON.DEV</span>
            <span className="absolute top-[2] left-0 ml-px text-(--color-grid-pink) opacity-75 z-0">AHENDERSON.DEV</span>
          </h1>
          <p className="font-sans text-[2.29rem] font-bold select-none text-[#FFFFFF]">
            Computer Science Student & Software Developer
          </p>
          <p className="font-sans text-(--color-grid-blue) mt-10 uppercase tracking-widest text-sm select-none">
            System Status: <span className="animate-pulse">Active</span>
          </p>
        </div>
      </div>

      {/* container for personal links */}
      <div className="relative z-10 px-10 pointer-events-none whitespace-nowrap flex flex-row items-start gap-10">
        <div className="
          relative inline-block p-10
          bg-(--color-box-background) border-(--color-box-border) border-2
          shadow-[0_0_20px_var(--color-box-background-shadow)] 
          pointer-events-auto"
        >
          <div className="flex flex-col text-4xl space-y-8">

            {/* email information */}
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 flex justify-center shrink-0">
                <Image
                  src={'/WhiteMailIcon.png'}
                  width={60}
                  height={60}
                  alt="Mail Icon"
                  className="select-none"
                />
              </div>
              <a
                className="cursor-pointer hover:text-(--color-grid-blue) transition-colors"
                href="mailto:aiden.henderson.c@gmail.com"
                target="_blank"
                onMouseEnter={() => handleEnterHoverText("Feel free to reach out regarding my resume, projects, or just to say hi. I'm always open for a chat!")}
                onMouseLeave={handleExitHoverText}
              >
                aiden.henderson.c@gmail.com
              </a>
            </div>

            {/* linkedin information */}
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 flex justify-center shrink-0">
                <Image
                  src={'/LinkedInLogo.png'}
                  width={50}
                  height={50}
                  alt="LinkedIn Logo"
                  className="select-none"
                />
              </div>
              <a
                className="cursor-pointer hover:text-(--color-grid-blue) transition-colors"
                href="https://linkedin.com/in/aidenchenderson"
                target="_blank"
                onMouseEnter={() => handleEnterHoverText("Check out my LinkedIn to explore my professional experience, skills, and academic journey.")}
                onMouseLeave={handleExitHoverText}
              >
                linkedin.com/in/aidenchenderson
              </a>
            </div>

            {/* github information */}
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 flex justify-center shrink-0">
                <Image
                  src={'/GitHubLogo.png'}
                  width={64}
                  height={64}
                  alt="GitHub Logo"
                  className="select-none"
                />
              </div>
              <a
                className="cursor-pointer hover:text-(--color-grid-blue) transition-colors"
                href="https://github.com/aidenchenderson"
                target="_blank"
                onMouseEnter={() => handleEnterHoverText("Explore my GitHub to see the architecture, code, and ideas behind my projects.")}
                onMouseLeave={handleExitHoverText}
              >
                github.com/aidenchenderson
              </a>
            </div>

          </div>
        </div>

        {/* extra information container that appears on hover */}
        <div
          className="transition-opacity duration-300"
          style={{
            opacity: hoverInformation.visible ? 1 : 0
          }}
        >
          <div className="
          relative inline-block p-5 w-59
          bg-(--color-box-background) border-(--color-box-border) border-2
          shadow-[0_0_20px_var(--color-box-background-shadow)] 
          pointer-events-auto
          whitespace-normal"
          >
            <p
              className="text-[#FFFFFF] text-1xl"
            >
              {hoverInformation.text}
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}