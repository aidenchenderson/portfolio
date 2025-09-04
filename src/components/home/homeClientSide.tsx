'use client';

import styles from "./home.module.css";
import Image from "next/image";
import catPng1 from '../../../public/cat1.png';
import catPng2 from '../../../public/cat2.png';
import { useState } from 'react';
import { scrollSections, scrollToSection } from "../shared/scrolling";

export default function CatImage() {

  const [catIndex, setCatIndex] = useState(() => {
    return 0; // run only once on mounting
  });

  const catInfo = [
    { src: catPng1, style: styles.acatimg },
    { src: catPng2, style: styles.bcatimg }
  ];

  function changeCat() {
    setCatIndex(previousIndex => (previousIndex + 1) % catInfo.length);
  }

  const currentCat = catInfo[catIndex];
  const nextCat = catInfo[(catIndex + 1) % catInfo.length];

  return (
    <div className="flex flex-col items-center">
      <p className={`${styles.clicktext} pb-1`}>click to view my cats!</p>
      <div className={styles.catcontainer} onClick={changeCat}>
        <div className={styles.catbackground}></div>
        <Image
          src={nextCat.src}
          alt="cat image slider"
          className={`${nextCat.style} ${styles.fade}`}
        />
        <Image
          src={currentCat.src}
          alt="cat image slider"
          className={currentCat.style}
        />
      </div>
    </div>
  );

}

export function AboutButtons() {
  return (
    <div className="flex flex-row flex-start mt-5">
      <button className={`${styles.more} cursor-pointer`} onClick={() => scrollToSection(scrollSections[4])}>more about me</button>
      <button className={`${styles.contact} cursor-pointer`} onClick={() => scrollToSection(scrollSections[3])}>let's connect!</button>
    </div>
  );
}