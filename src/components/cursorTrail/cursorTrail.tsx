import styles from './cursorTrail.module.css';
import { useState } from 'react';

export default function CursorTrail() {
  return (
    <div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
      <div className={`${styles.trail}`}></div>
    </div>
  );
}