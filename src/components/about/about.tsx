'use client';

import styles from './about.module.css';
import externalStyles from '../home/home.module.css'

export default function About() {
  return (
    <div className='bg-[#151515] border-none rounded-tl-[3rem] rounded-tr-[3rem] mx-auto 
                    flex flex-col justify-center justify-items-center items-center h-screen w-screen'>
      <div className='bg-[#0a0a0a] flex flex-col items-center overflow-visible relative'>
        <div className='flex flex-col items-center'>
          <p className={styles.connectTitle}>Connect with Me</p>
          <p className={`${styles.subText} w-4/10 text-center`}>
            Whether you are a university student or industry professional with any questions, or you just want to say hi,
            feel free to email me or message me on LinkedIn!
          </p>
        </div>
        <div>
          <button className={`${externalStyles.contact} cursor-pointer`}>Email</button>
        </div>
      </div>
    </div>
  );
}