'use client';
import styles from './navbar.module.css';
import { scrollSections, scrollToSection } from '../shared/scrolling';
import Image from 'next/image';

export default function NavBar() {

  return (
    <div className={`${styles.logodiv} flex flex-row py-6 px-8 absolute w-screen items-center justify-between`}>
      <div className="flex flex-row py-0 px-0 my-0 mx-0 items-center">
        <Image
          src="/favicon.ico"
          alt="website logo"
          width={24}
          height={24}
          className="cursor-pointer mr-1"
        />
        <p className={`${styles.webaddress} cursor-pointer`} aria-hidden="true" style={{ fontSize: '1.5rem', fontWeight: '400' }}>
          AHENDERSON.DEV
        </p>
      </div>

      <div className={`${styles.navbar} flex flex-row py-0 px-0 my-0 mx-0 space-x-8`}>
        <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[0])}>Experience</p>
        <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[1])}>Projects</p>
        <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[2])}>Skills</p>
        <p className={`${styles.highlight} cursor-pointer text-2xl`} onClick={() => scrollToSection(scrollSections[3])}>About</p>
      </div>
    </div>
  );
}