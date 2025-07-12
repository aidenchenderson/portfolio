import styles from './navbar.module.css';

export default function NavBar() {
  return(
    <div className={`${styles.logodiv} flex flex-row py-6 px-8 absolute w-screen items-center justify-between`}>
      <div className="flex flex-row py-0 px-0 my-0 mx-0 items-center">
        <img src="favicon.ico" className="cursor-pointer mr-1 h-6 w-auto"></img>
        <p className={`${styles.webaddress} cursor-pointer`} aria-hidden="true" style={{ fontSize: '1.5rem', fontWeight: '400' }}>
          AHENDERSON.DEV
        </p>
      </div>

      <div className={`${styles.navbar} flex flex-row py-0 px-0 my-0 mx-0 space-x-8`}>
        <p className={`${styles.highlight} cursor-pointer text-2xl`}>Experience</p>
        <p className={`${styles.highlight} cursor-pointer text-2xl`}>Skills</p>
        <p className={`${styles.highlight} cursor-pointer text-2xl`}>Projects</p>
        <p className={`${styles.highlight} cursor-pointer text-2xl`}>About</p>
      </div>
    </div>
  );
}