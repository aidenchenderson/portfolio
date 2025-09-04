import Image from "next/image";
import styles from "./experience.module.css";

interface expBoxData {
  imgSrc: string;
  jobTitle: string;
  date: string;
  description: string,
  skills: string[];
}

export default function ExperienceBox({ imgSrc, jobTitle, date, description, skills }: expBoxData) {
  let displaySkills: string = "";
  for (let i = 0; i < skills.length; i++) {
    displaySkills += skills[i];
    displaySkills += i < skills.length - 1 ? ", " : "";
  }

  return (
    <div className='flex flex-row gap-5 mb-3'>
      <div className='flex flex-col shrink-0 relative'>
        <Image
          src={imgSrc}
          width={84}
          height={84}
          alt='logo of workplace'
          className={styles.logo}
          quality={100}
          unoptimized
        />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-3'>
          <p className={`${styles.jobtitle} leading-none`}>{jobTitle}</p>
          <p className={`${styles.jobdate} mb-2`}>{date}</p>
          <p className={`${styles.skills}`}>Skills learned: {displaySkills}</p>
        </div>
        <div>
          <p className={`${styles.jobinfo}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}