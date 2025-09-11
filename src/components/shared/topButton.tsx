'use client';

import { useEffect, useState } from "react";
import styles from "./topButton.module.css";

export default function TopButton() {
  const [buttonVisibility, setButtonVisibility] = useState(false);

  useEffect(() => {
    const toggleButtonVisibility = () => {
      setButtonVisibility(window.scrollY > 500); // Show button when scrolled 500px
    };

    window.addEventListener('scroll', toggleButtonVisibility);
    return () => window.removeEventListener('scroll', toggleButtonVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className={`${styles.button} ${buttonVisibility ? styles.visible : ''}`}>
      ↑
    </button>
  );
}
