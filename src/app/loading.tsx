import styles from './glitch.module.css';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="inline-block relative">
        <h1 aria-hidden="true" className={`${styles.glitch}`}>
          <span>AHENDERSON.DEV</span>
          AHENDERSON.DEV
          <span>AHENDERSON.DEV</span>
        </h1>
        <div className={styles.bar}>
          <div className={styles.load}></div>
        </div>
      </div>
    </div>
  );
}