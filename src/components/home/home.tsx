import styles from './home.module.css';
import CatImage, { AboutButtons } from './homeClientSide';
import Links from '@/components/links/links';

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
      <div className={`${styles.link}`}>
        <Links/>
      </div>
      <div id="desc" className={`bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto 
                                 flex flex-col text-center content-center justify-center items-center`}>
        <p className={`${styles.introduction} mt-10 mb-10 w-3/4`}>
          Hi! I’m a computer science student with a passion for software development, computer graphics, and embedded systems. 
          My goal is to write high-quality, readable, and optimized code that makes a difference in real-world applications.
          Here are some quick facts about me:
        </p>
        {/* Learning is a core value of mine, and through my challenges and mistakes, I've learned not just how to solve problems
          but how to approach them with patience, curiosity, and humility. */}
        <div className={`${styles.facts} flex flex-row items-start justify-center content-center mb-10 gap-30`}>
          <div>
            <p className={`${styles.number} font-bold`}>8</p>
            <p>Months of Co-op/Internship Experience</p>
          </div>
          <div>
            <p className={`${styles.number} font-bold`}>16</p>
            <p>Months of Open Source Development</p>
            <p>(via School Clubs)</p>
          </div>
          <div>
            <p className={`${styles.number} font-bold`}>404</p>
            <p>Days spent centering a div</p>
            <p>;)</p>
          </div>
        </div>
      </div>
    </div>
  );
}