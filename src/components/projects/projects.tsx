import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className='bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto 
                    flex flex-col justify-center justify-items-center items-center h-screen w-screen'>
      <div className='flex flex-col items-start justify-center content-center'>
        <p className={`${styles.title}`}>Projects</p>
      </div>
    </div>
  );
}