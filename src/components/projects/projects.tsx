import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className='bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto 
                    flex flex-col items-center justify-start w-screen'>
      <div className='flex flex-col items-start justify-start content-center'>
        <p className={`${styles.title} pt-10`}>Project Showcase</p>
      </div>
      <div className={`${styles.project} w-3/4 pb-10 mb-10`}>
        <p>
          For the 2025-2026 school year, I am a project lead at the McMaster AI Society. I am leading a group of 4 students
          (computer science, software engineering, and computer engineering) to build an open-source application within 6 months!
          The project focuses on giving guitar players feedback on how they play their chords by using algorithms for grading and 
          an LLM to give feedback. This project also takes advantage of embedded systems by having the code/AI hosted on a Raspberry Pi.
          This makes the project portable in any guitar case and will give all of the members a great learning experience with 
          hardware development.
        </p>
      </div>
    </div>
  );
}