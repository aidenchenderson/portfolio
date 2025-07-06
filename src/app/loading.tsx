import styles from './glitch.module.css';

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 aria-hidden="true" className={styles.glitch}>
                <span>ahenderson.dev</span>
                ahenderson.dev
                <span>ahenderson.dev</span>
            </h1>
        </div>
    );
}