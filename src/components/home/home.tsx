import styles from './home.module.css';

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-wrap flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center flex-1">
          <div>
            <p className={`${styles.title}`}>Aiden Henderson</p>
            <p className={`${styles.subtitle}`}>Computer Science Student</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <p>
            right
          </p>
        </div>
      </div>
      <div>
        <p>
          Hey! I'm a computer science student with a passion for software development, 
          computer graphics, and embedded systems. My goal is to write high-quality, readable, 
          and optimized code that has impactful applicational uses. Every day I strive to become 
          a better software developer than I was yesterday. 
          Thank you for visiting my website!
        </p>
      </div>
    </div>
  
  );
}