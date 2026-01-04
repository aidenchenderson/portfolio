'use client';
import { useState, MouseEvent, useRef } from "react";
import Image from "next/image";
import "../styles/homePage.css";

interface MousePosition {
  x: number;
  y: number;
};

interface HoverInformation {
  text: string;
  visible: boolean;
};

enum InformationDescriptionState {
  Empty = 1,
  QuickFacts,
  Projects,
  Secret
};

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

  // initialize the additional hover info to hidden on component render
  const [hoverInformation, setHoverInformation] = useState<HoverInformation>(() => { return { text: "", visible: false } });

  const handleEnterHoverText = (hoverText: string) => {
    setHoverInformation({ text: hoverText, visible: true });
  };

  const handleExitHoverText = () => {
    setHoverInformation(prev => ({ ...prev, visible: false }));
  };

  // state to control active system status vs critical system status
  const [systemStatusOnline, setSystemStatusOnline] = useState(() => { return true; });

  const handleSystemStatusChange = () => {
    setSystemStatusOnline(prev => !prev);
  };

  // static grid background color
  const staticGridBackgroundColor = systemStatusOnline
    ? 'bg-[linear-gradient(to_right,#4dabf7_3px,transparent_3px),linear-gradient(to_bottom,#4dabf7_3px,transparent_3px)]'
    : 'bg-[linear-gradient(to_right,#ff003c_3px,transparent_3px),linear-gradient(to_bottom,#ff003c_3px,transparent_3px)]';

  const staticGridDropshadowColor = systemStatusOnline
    ? 'drop-shadow-[0_0_10px_#4dabf7]'
    : 'drop-shadow-[0_0_10px_#ff003c]';

  // system status message
  const gridBoxColor = systemStatusOnline
    ? 'bg-(--color-box-background) border-(--color-box-border) shadow-[0_0_20px_var(--color-box-background-shadow)]'
    : 'bg-(--color-box-background-meltdown) border-(--color-box-border-meltdown) shadow-[0_0_20px_var(--color-box-background-shadow-meltdown)]';

  // masked grid background color
  const maskedGridBackgroundColor = systemStatusOnline
    ? 'bg-[linear-gradient(to_right,#f783ac_3px,transparent_3px),linear-gradient(to_bottom,#f783ac_3px,transparent_3px)]'
    : 'bg-[linear-gradient(to_right,#ff8c00_3px,transparent_3px),linear-gradient(to_bottom,#ff8c00_3px,transparent_3px)]';

  // masked grid dropshadow color
  const maskedGridDropshadowColor = systemStatusOnline
    ? 'drop-shadow-[0_0_10px_#f783ac]'
    : 'drop-shadow-[0_0_10px_#ff8c00]';

  // shows the text in the 'info vault' related to the last button pressed
  const [informationDescription, setInformationDescription] = useState(() => {
    let startingDescription: string = 'Select an option on the left, and the related information will appear here';
    return startingDescription;
  });

  const handleInformationDescriptionChange = (state: InformationDescriptionState) => {
    if (state == InformationDescriptionState.QuickFacts) {
      let newDescription: string = '';
      setInformationDescription(newDescription);
    } else if (state == InformationDescriptionState.Projects) {

    } else if (state == InformationDescriptionState.Secret) {

    } else {

    }
  };
    
  return (
    <div
      onMouseMove={handleMousePositionChange}
      className="relative min-h-screen w-full bg-[#050a10] overflow-hidden group"
    >

      {/* static grid background */}
      <div
        className={`
          absolute inset-0 z-0 filter
          bg-size-[58px_58px]
          bg-position-[-29px_-29px]
          ${staticGridBackgroundColor}
          ${staticGridDropshadowColor}
        `}
      />

      {/* masked grid for interactive mouse move (flashlight effect) */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-300 bg-size-[58px_58px] bg-position-[-29px_-29px] 
          ${maskedGridBackgroundColor}
          ${maskedGridDropshadowColor}
        `}
        style={{
          opacity: mouseIsMoving ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
        }}
      />


      {/* container for website header */}
      <div className="relative z-10 p-10 pointer-events-none">
        <div
          className={`
            relative inline-block p-10
            border-2
            pointer-events-auto
            ${gridBoxColor}
          `}
        >
          <h1
            aria-hidden="true"
            className="text-8xl font-bold font-sans select-none relative"
          >
            <span className="relative z-10 text-[#FFFFFF]">AHENDERSON.DEV</span>
            <span className={`
              absolute top-[-1] left-0 -ml-px 
              ${systemStatusOnline ? 'text-(--color-grid-blue)' : 'text-(--color-grid-meltdown)'} 
              opacity-75 z-0`
            }>
              AHENDERSON.DEV
            </span>
            <span className="absolute top-[2] left-0 ml-px text-(--color-grid-pink) opacity-75 z-0">AHENDERSON.DEV</span>
          </h1>
          <p aria-hidden="true" className="relative font-sans text-[2.29rem] font-bold select-none text-[#FFFFFF]">
            <span className="relative z-10 text-[#FFFFFF]">Computer Science Student & Software Developer</span>
            <span className={`
              absolute top-[-1] left-0 -ml-px 
              ${systemStatusOnline ? 'text-(--color-grid-blue)' : 'text-(--color-grid-meltdown)'} 
              opacity-75 z-0`
            }>
              Computer Science Student & Software Developer
            </span>
            <span className="absolute top-[2] left-0 ml-px text-(--color-grid-pink) opacity-75 z-0">Computer Science Student & Software Developer</span>
          </p>
          <p className={`
            font-sans mt-10 uppercase tracking-widest text-sm select-none
            ${systemStatusOnline ? 'text-(--color-grid-blue)' : 'text-(--color-grid-meltdown)'}`
          }>
            System Status: <span className="animate-pulse">{systemStatusOnline ? 'Online' : 'Critical'}</span>
          </p>
        </div>
      </div>

      {/* container for personal links */}
      <div className="relative z-10 px-10 pointer-events-none whitespace-nowrap flex flex-row items-start gap-10">
        <div className={`
            relative inline-block p-10
            border-2
            pointer-events-auto
            ${gridBoxColor}
          `}
        >
          <div className="flex flex-col text-4xl space-y-8 font-sans">

            {/* email information */}
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 flex justify-center shrink-0">
                <Image
                  src={'/WhiteMailIcon.png'}
                  width={58}
                  height={58}
                  alt="Mail Icon"
                  className="select-none"
                />
              </div>
              <a
                className={`${systemStatusOnline ? 'hover:text-(--color-grid-blue)' : 'hover:text-(--color-grid-meltdown)'} cursor-pointer transition-colors`}
                href="mailto:aiden.henderson.c@gmail.com"
                target="_blank"
                onMouseEnter={() => handleEnterHoverText("Feel free to reach out regarding my resume, projects, or just to say hi! I'm always open for a chat!")}
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
                className={`${systemStatusOnline ? 'hover:text-(--color-grid-blue)' : 'hover:text-(--color-grid-meltdown)'} cursor-pointer transition-colors`}
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
                  width={54}
                  height={54}
                  alt="GitHub Logo"
                  className="select-none"
                />
              </div>
              <a
                className={`${systemStatusOnline ? 'hover:text-(--color-grid-blue)' : 'hover:text-(--color-grid-meltdown)'} cursor-pointer transition-colors`}
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
          <div className={`
            relative inline-block p-5 w-52
            pointer-events-auto select-none
            whitespace-normal border-2
            ${gridBoxColor}
          `}
          >
            <p
              className="text-[#FFFFFF] text-1xl font-sans"
            >
              {hoverInformation.text}
            </p>
          </div>
        </div>

        {/* container for more information about me */}
        <div className="relative z-10 px-12 py-20">
          <div className={`
            relative inline-block p-5
            border-2
            pointer-events-auto
            ${gridBoxColor}
          `}
          >
            <div className="flex flex-col items-center">

              {/* section title */}
              <div className="font-sans font-bold text-3xl mb-4">
                <p>Info Vault </p>
              </div>

              <div className="flex flex-row gap-5">
                {/* buttons to load each preview */}
                <div className="flex flex-col gap-2">
                  <div className={`${systemStatusOnline ? 'info-button-wrapper' : 'info-button-wrapper-meltdown'} cursor-pointer p-0.5`}>
                    <button className="info-button px-3 py-2 cursor-pointer font-sans font-bold text-xl w-full border-none">
                      Quick Facts
                    </button>
                  </div>
                  <div className={`${systemStatusOnline ? 'info-button-wrapper-yellow' : 'info-button-wrapper-yellow-meltdown'} cursor-pointer p-0.5`}>
                    <button className="info-button-yellow px-3 py-2 cursor-pointer font-sans font-bold text-xl w-full border-none">
                      Projects
                    </button>
                  </div>
                  <div className={`${systemStatusOnline ? 'info-button-wrapper-red' : 'info-button-wrapper-red-meltdown'} cursor-pointer p-0.5`}>
                    <button
                      className="info-button-red px-3 py-2 cursor-pointer font-sans font-bold text-xl w-full border-none"
                      onClick={handleSystemStatusChange}
                    >
                      ???
                    </button>
                  </div>
                </div>

                {/* the previews of information */}
                <div className={`
                  relative inline-block w-87.5 h-69 border-2
                  ${gridBoxColor}
                `}
                >
                  <div className="font-sans text-xl text-wrap items-center justify-center text-center px-10 content-center">
                    <p>{informationDescription}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};