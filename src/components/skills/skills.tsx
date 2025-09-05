import styles from './skills.module.css';

export default function Skills() {
  return (
    <div className='flex flex-col justify-items-center items-center h-screen'>
      <div className='bg-[#151515] w-full'>
        <div className='bg-[var(--background)] pt-10 w-full rounded-tl-[3rem] rounded-tr-[3rem] flex
                        flex-col items-center content-center justify-center'>
          <p className={`${styles.title}`}>Skills</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}