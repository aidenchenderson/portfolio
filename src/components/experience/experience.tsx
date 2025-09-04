'use client';

import { useState } from 'react';
import styles from './experience.module.css';
import ExperienceBox from './experienceBox';

export default function Experience() {
  // Skills and description for May 2025 - Aug 2025 Co-op.
  const skillsOpg2: string[] = ["C#", ".NET core", "TypeScript", "Angular", "Project Management"];
  const descOpg2: string = `Joining my team mid-development, I quickly learned tools like C#, Angular, Azure Devops, and company-specific 
  technologies. Through tasks like building REST APIs, I was able to learn these technologies in weeks. As I grew more familiar, I became a lead developer, 
  hosting stakeholder meetings and mentoring other students. With the app serving 500+ users, this co-op taught me not only how to write 
  code but also to create high-quality solutions and use user feedback to drive improvements.`;

  const skillsMacAi2: string[] = [""];
  const descMacAi2: string = ``;

  const [activeYear, setActiveYear] = useState(() => {
    return 0;
  });

  function changeYear(year: number) {
    setActiveYear(year);
  }

  return (
    <div className="flex flex-col justify-items-center items-center h-screen">
      <div className="bg-[#151515] w-full">
        <div className="bg-[var(--background)] pt-10 w-full rounded-tl-[3rem] rounded-tr-[3rem] flex 
                        flex-col items-center content-center justify-center">
          <p className={styles.title}>Experience</p>
        </div>
      </div>
      <p className={`${styles.description} mt-1 mb-1`}>Select a year for a breakdown of my notable experience</p>
      <div className={`${styles.buttonContainer} flex flex-row justify-items-center items-center content-center mt-5 gap-30`}>
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2022)}>2022</button>
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2024)}>2024</button>
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2025)}>2025</button>
      </div>
      {activeYear != 0 &&
        <div className={`${styles.fade} mt-5 bg-[#0a0a0a] w-[70vw] h-[70vh] rounded-lg text-[#ffffff]`}>
          {activeYear == 2022 &&
            <div>

            </div>
          }
          {activeYear == 2024 &&
            <div>

            </div>
          }
          {activeYear == 2025 &&
          <div className='flex flex-col gap-6'>
            <ExperienceBox
              imgSrc='/opgLogo.png'
              jobTitle='Full Stack Software Developer'
              date='May 2025 - Aug 2025'
              description={descOpg2}
              skills={skillsOpg2} />
            <ExperienceBox 
              imgSrc='/MacAI.png'
              jobTitle='Mac AI Project Lead'
              date='Sept 2025 - ??? 2026'
              description={descMacAi2}
              skills={skillsMacAi2}
              />
          </div>
          }
        </div>
      }
    </div>
  );
}