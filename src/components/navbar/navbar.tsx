import styles from '../navbar/navbar.module.css';

export default function NavBar() {
  return(
    <div className="flex flex-row py-6 px-8 absolute w-screen items-center justify-between">

      <div className="flex flex-row py-0 px-0 my-0 mx-0 items-center">
        <img src="favicon.ico" className="cursor-pointer mr-2 h-7 w-auto"></img>
        <p className="cursor-pointer text-3xl">AHENDERSON.DEV</p>
      </div>

      <div className="flex flex-row py-0 px-0 my-0 mx-0 space-x-8">
        <p className="cursor-pointer text-3xl">Experience</p>
        <p className="cursor-pointer text-3xl">Skills</p>
        <p className="cursor-pointer text-3xl">Projects</p>
        <p className="cursor-pointer text-3xl">About</p>
      </div>

    </div>
  );
}