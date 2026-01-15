import { HeaderParameters } from "./types";

export default function Header({ systemStatusOnline }: HeaderParameters) {
  return (
    <div>
      {/* heading */}
      <h1
        aria-hidden="true"
        className="text-[clamp(2.5rem,8vw,6rem)] leading-none font-bold font-sans select-none relative"
      >
        <span className="relative z-10 text-[#FFFFFF]">AHENDERSON.DEV</span>
        <span className={`
          absolute top-[-2] left-0 -ml-px 
          ${systemStatusOnline ? 'text-(--color-grid-blue)' : 'text-(--color-grid-meltdown)'} 
          opacity-75 z-0`
        }>
          AHENDERSON.DEV
        </span>
        <span className="absolute top-[2] left-0 ml-px text-(--color-grid-pink) opacity-75 z-0">AHENDERSON.DEV</span>
      </h1>
      {/* subheading */}
      <p aria-hidden="true" className="relative font-sans text-[clamp(0.95rem,3vw,2.294rem)] font-bold select-none text-[#FFFFFF]">
        <span className="relative z-10 text-[#FFFFFF]">Computer Science Student & Software Developer</span>
        <span className={`
          absolute top-[-2] left-0 -ml-px 
          ${systemStatusOnline ? 'text-(--color-grid-blue)' : 'text-(--color-grid-meltdown)'} 
          opacity-75 z-0`
        }>
          Computer Science Student & Software Developer
        </span>
        <span className="absolute top-[2] left-0 ml-px text-(--color-grid-pink) opacity-75 z-0">Computer Science Student & Software Developer</span>
      </p>
    </div>
  );
}