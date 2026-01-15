import '../styles/HomeMobileLayout.css';

export default function HomeMobileLayout() {
  return (
    <div className='relative min-h-screen w-full bg-[#050a10] overflow-hidden group'>
      {/* grid display */}
      <div className='absolute inset-0 z-0 overflow-hidden grid-green background-layer'></div>

      <div className='flex flex-col items-center py-10'>
        {/* header */}
        <div className='header-wrapper cursor-default p-0.5 w-auto inline-block'>
          <div className='header font-sans text-center'>
            <p className='pt-5 font-bold text-3xl'>AHENDERSON.DEV</p>
            <p className='pb-5 font-bold text-[1.05rem]'>CS Student & Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};  