import Header from "./header";
import { ContainerParameters } from "./types";

export default function Container({ systemStatusOnline }: ContainerParameters) {
  // system status message
  const gridBoxColor = systemStatusOnline
    ? 'bg-(--color-box-background) border-(--color-box-border) shadow-[0_0_20px_var(--color-box-background-shadow)]'
    : 'bg-(--color-box-background-meltdown) border-(--color-box-border-meltdown) shadow-[0_0_20px_var(--color-box-background-shadow-meltdown)]';

  return (
    <div className="relative z-10 pointer-events-none">
      <div className={`
        relative flex p-10
        border-2 transition-all duration-700 ease-in-out
        pointer-events-auto flex-col
        ${gridBoxColor}`
      }>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <Header
              systemStatusOnline={systemStatusOnline}
            />
          </div>
        </div>




      </div>
    </div>
  );
}