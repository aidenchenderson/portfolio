import styles from './home.module.css';
import CatImage, { AboutButtons } from './homeClientSide';

export default function HomePage() {
  return (
    <div>
      <div id="homepage" className={`${styles.homecontainer} flex flex-wrap justify-center items-center min-h-screen`}>
        <div className={`${styles.homediv} flex flex-col justify-center items-center`}>
          <div>
            <p className={`${styles.title}`}>Aiden Henderson</p>
            <p className={`${styles.subtitle}`}>Computer Science Student</p>
            <div className="self-start">
              <AboutButtons/>
            </div>
          </div>
        </div>
        <div className={`${styles.homediv} flex flex-col justify-center items-center`}>
          <CatImage/>
        </div>
      </div>
      <div id="desc" className={`bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto flex text-center content-center justify-center items-center`}>
        <p className={`${styles.introduction} mt-10 mb-10 w-5/8`}>
          Hey! I'm a computer science student with a passion for software development, 
          computer graphics, and embedded systems. My goal is to write high-quality, readable, 
          and optimized code that has impactful applicational uses. Every day I try to become 
          a better software developer than I was yesterday. Thank you for visiting my website!
        </p>
      </div>
      <div className='bg-[#151515] pt-10'>
        <div className='bg-[var(--background)] w-full h-full rounded-tl-[3rem] rounded-tr-[3rem]'>test</div>
      </div>
    </div>
  );
}