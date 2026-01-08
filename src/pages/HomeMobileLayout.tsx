import '../styles/HomeMobileLayout.css';

export default function HomeMobileLayout() {
  return (
    <div className="relative min-h-screen w-full bg-[#050a10] overflow-hidden group">
      {/* grid display */}
      <div className="absolute inset-0 z-0 overflow-hidden grid-green background-layer"></div>

      <div className='flex flex-col items-center py-11'>
        {/* header */}
        <div className='header-wrapper cursor-default p-0.5 w-auto inline-block'>
          <div className='header font-sans font-bold text-4xl'>
            <p className="p-10">AHENDERSON.DEV</p>
          </div>
        </div>
      </div>
    </div>
  );
};  