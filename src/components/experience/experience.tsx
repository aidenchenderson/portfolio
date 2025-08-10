'use client';

import { useState } from 'react';
import styles from './experience.module.css';

export default function Experience() {
  const [activeYear, setActiveYear] = useState(() => {
    return 0;
  });

  function changeYear(year: number) {
    setActiveYear(year);
  }

  return (
    <div className="flex flex-col justify-items-center items-center h-screen">
      <div className="bg-[#151515] w-full">
        <div className="bg-[var(--background)] pt-10 w-full rounded-tl-[3rem] rounded-tr-[3rem] flex flex-col items-center content-center justify-center">
          <p className={styles.title}>Experience</p>
        </div>
      </div>
      <p className="mt-1 mb-1">Select a year for a breakdown of my notable experience</p>
      <div className="flex flex-row justify-items-center items-center content-center mt-5 gap-30">
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2022)}>2022</button>
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2024)}>2024</button>
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2025)}>2025</button>
      </div>
      {activeYear != 0 &&
        <div className={`mt-5 bg-[#151515] w-[70vw] h-[70vh] rounded-2xl`}>
          {activeYear == 2022 &&
            <ExperienceHeader year="2022" onClose={() => changeYear(0)}/>
          }
          {activeYear == 2024 &&
            <ExperienceHeader year="2024" onClose={() => changeYear(0)}/>
          }
          {activeYear == 2025 &&
            <ExperienceHeader year="2025" onClose={() => changeYear(0)}/>
          }
        </div>
      }
    </div>
  );
}

type headerParam = {
  year: string;
  onClose: () => void;
}

export function ExperienceHeader({year, onClose}: headerParam) {
  return (
    <div className={`mx-3 my-3`}>
      <div className={`flex flex-row items-center justify-between`}>
        <p>My Work Experience in {year}</p>
        <p className={`cursor-pointer`} onClick={onClose}>[x]</p>
      </div>
    </div>
  );
}