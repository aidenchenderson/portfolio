'use client';

import styles from "./home.module.css";
import Image from "next/image";
import catPng1 from '../../../public/cat1.png';
import catPng2 from '../../../public/cat2.png';
import { useState } from 'react';

export default function CatImage() {

  const [catIndex, setCatIndex] = useState(() => {
    return 0; // run only once
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
      <div className={styles.catcontainer} onClick={changeCat}>
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
