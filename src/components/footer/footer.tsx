'use client';
import styles from './footer.module.css';
import { scrollSections, scrollToSection } from '../shared/scrolling';

export default function Footer() {
  return (
    <div className='flex flex-col pt-10 pb-10'>
      <div className='items-center justify-center content-center text-center mb-3'>
        <p className={`${styles.thankyou}`}>Thanks for visiting!</p>
      </div>
      <div className='flex flex-col bg-[#0a0a0a] w-screen items-center justify-center'>
        <div className='flex lg:flex-row gap-5 flex-col'>
          <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[0])}>Experience</p>
          <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[1])}>Projects</p>
          <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[2])}>Skills</p>
          <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[3])}>About</p>
        </div>
      </div>
    </div>
  );
}