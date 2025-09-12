'use client';

import { useState } from 'react';
import styles from './experience.module.css';
import ExperienceBox from './experienceBox';

export default function Experience() {
  // skills and description for Sept 2025 - ??? 2026 club
  const skillsMacAi2: string[] = ["AI, Raspberry PI, Embedded Systems"];
  const descMacAi2: string = ``;

  // skills and description for May 2025 - Aug 2025 co-op.
  const skillsOpg2: string[] = ["C#", ".NET core", "TypeScript", "Angular", "Project Management"];
  const descOpg2: string = `Joining my team mid-development, I quickly learned tools like C#, Angular, Azure Devops, and company-specific technologies. 
    Through tasks like building REST APIs, I was able to learn these technologies within two weeks. As I grew more familiar with these tools, 
    I became a lead developer, hosting stakeholder meetings and mentoring other students. With the app serving 500+ users, this co-op taught 
    me not only how to write code but also to create high quality solutions and use user feedback to drive improvements.`;

  // skills and description for Sept 2024 - April 2025 club
  const skillsGDSC: string[] = ["Express JS", "MySQL", "OpenAI API"];
  const descGDSC: string = `I volunteered to be an open-source developer at the McMaster Google Student Developer Club.
    The team created a mental health journalling web application, with a focus on helping the user document their thoughts and receive feedback 
    from the AI. My role was a frontend and AI developer on the team, implementing the chatbot 'texting' page with Express JS and OpenAI's API. I also
    helped fellow teammates develop the backend with the planning and creation of tables.`;

  const skillsMacAi1: string[] = ["Python", "React JS"];
  const descMacAi1: string = `At McMaster AI I was an open-source developer working on the full-stack team. The project was an
    art medium detection application. i.e., the AI would detect what tools you had (paint, pens, pencils) and produce suggestions with images
    on what you can make with those tools. This role taught me about REST APIs as I created endpoints for 
    retrieving and uploading images to our database.`;

  // skills and description for May 2024 - Aug 2024 co-op
  const skillsOpg1: string[] = ["SQL", "Power BI", "Databases", "Data Analysis"];
  const descOpg1: string = `During my first university co-op, I quickly adapted to a fast-paced environment by learning SQL and Power BI within days. 
    I developed automated data visualizations to support procedure writers during a nuclear reactor refurbishment. 
    The end product was multiple automated reports that showed procedure writers what tasks they had due, the task urgency, 
    and which department needed the procedure. These visualizations were used by the 'maintenance support' department of 50 users.`;

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
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2024)}>2024</button>
        <button className={`${styles.year} cursor-pointer`} onClick={() => changeYear(2025)}>2025</button>
      </div>
      {activeYear != 0 &&
        <div className={`mt-5 bg-[#0a0a0a] w-[70vw] h-[70vh] rounded-lg text-[#ffffff]`}>
          {activeYear == 2024 &&
            <div className={`${styles.fade} ${styles.scrollable} flex flex-col gap-6`}>
              <ExperienceBox
                imgSrc='/opgLogo.png'
                jobTitle='Data Analysis Intern'
                date='May 2024 - Aug 2024'
                description={descOpg1}
                skills={skillsOpg1} />
              <ExperienceBox
                imgSrc='/gdscMcmaster.png'
                jobTitle='Google Student Club Open Source Developer'
                date='Sep 2024 - Apr 2025'
                description={descGDSC}
                skills={skillsGDSC} />
              <ExperienceBox
                imgSrc='/MacAI.png'
                jobTitle='Mac AI Open Source Developer'
                date='Sep 2024 - Apr 2025'
                description={descMacAi1}
                skills={skillsMacAi1} />
            </div>
          }
          {activeYear == 2025 &&
            <div className={`${styles.fade} ${styles.scrollable} flex flex-col gap-6`}>
              <ExperienceBox
                imgSrc='/opgLogo.png'
                jobTitle='Full Stack Software Development Intern'
                date='May 2025 - Aug 2025'
                description={descOpg2}
                skills={skillsOpg2} />
              {/* <ExperienceBox 
                imgSrc='/MacAI.png'
                jobTitle='Mac AI Project Lead'
                date='Sep 2025 - ??? 2026'
                description={descMacAi2}
                skills={skillsMacAi2} /> */}
            </div>
          }
        </div>
      }
    </div>
  );
}