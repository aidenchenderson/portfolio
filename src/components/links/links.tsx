import githubLogo from '../../../public/githubLink.png';
import linkedinLogo from '../../../public/linkedinLink.png';
import Image from 'next/image';

export default function Links() {
  return (
    <div className="flex flex-row gap-3">
      <a href="https://github.com/aidenchenderson/">
        <Image
          src={githubLogo}
          alt="github logo link"
          className="w-8 h-8"
        />
      </a>
      <a href="https://www.linkedin.com/in/aidenchenderson/">
        <Image 
          src={linkedinLogo}
          alt="linkedin logo link"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}