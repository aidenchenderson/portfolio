import styles from './about.module.css';
import Links from '../links/links';

export default function About() {
  return (
    <div className='bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto 
                    flex flex-col justify-center justify-items-center items-center h-screen w-screen'>
      <div className={`${styles.circle} bg-[#0a0a0a] flex flex-col items-center justify-center content-center w-[500px] h-[500px] rounded-[50%]`}>
        <div className='flex flex-col items-center'>
          <p className={`${styles.connectTitle} mb-3 pt-3`}>Connect with Me</p>
          <p className={`${styles.subText} w-1/2 text-center mb-2 pb-5`}>
            Whether you are a university student, an industry professional, or you just want to say hi,
            feel free to email me!
          </p>
        </div>
        <div className='flex relative pb-3'>
          <a href='mailto:aiden.henderson.c@gmail.com'>
            <button className={`${styles.emailButton} cursor-pointer`}>Email</button>
          </a>
        </div>
        <Links/>
      </div>
    </div>
  );
}