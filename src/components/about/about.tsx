'use client';

import styles from './about.module.css';

export default function About() {
  return (
    // div for making the background gray
    <div className='bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto 
                    flex flex-col justify-center justify-items-center items-center h-screen w-screen'>
      {/* div for making a black circle */}
      <div className='bg-[#0a0a0a] flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <p className={`${styles.connectTitle} mb-3 pt-3`}>Connect with Me</p>
          <p className={`${styles.subText} w-4/10 text-center mb-5 pb-5`}>
            Whether you are a university student, industry professional, or you just want to say hi,
            feel free to email me!
          </p>
        </div>
        <div className='pb-3'>
          <button className={`${styles.emailButton} cursor-pointer`}>Email</button>
        </div>
      </div>
    </div>
  );
}