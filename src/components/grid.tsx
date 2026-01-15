import type { GridParameters } from "./types";

export default function Grid({ systemStatusOnline, mouseIsMoving, mousePosition }: GridParameters) {
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

  return (
    <div>
      {/* static grid background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`background-layer grid-blue ${systemStatusOnline ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`background-layer grid-red ${!systemStatusOnline ? 'opacity-100' : 'opacity-0'}`} />
      </div>

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
    </div>
  );
} 