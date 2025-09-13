import styles from './skills.module.css';
import SkillBox from './skillBox';
import externalStyles from '../home/home.module.css';

export default function Skills() {
  const skillsTools: string = `I've used the Git CLI and GitHub for many personal projects and school clubs. 
    I've also used Azure for website deployment and build pipelines.`

  const frontendSkills: string[] = [
    '/skills/tsLogo.png',
    '/skills/htmLogo.png',
    '/skills/cssLogo.png',
    '/skills/angularLogo.png',
    '/skills/nextLogo.png',
    ''
  ];

  const backendSkills: string[] = [
    '/skills/cLogo.png',
    '/skills/cppLogo.png',
    '/skills/csharpLogo.png',
    '/skills/javaLogo.png',
    '/skills/hidden_square_lol.png',
    ''
  ];

  const toolsSkills: string[] = [
    '/skills/gitLogo.png',
    '/skills/openGLogo.png',
    '/skills/azureDevopsLogo.png',
    '/skills/githubLogoSkill.png',
    '/skills/hidden_square_lol.png',
    ''
  ];

  return (
    <div className='flex flex-col justify-items-center items-center'>
      <div className='bg-[#151515] w-full'>
        <div className='bg-[var(--background)] pt-10 w-full rounded-tl-[3rem] rounded-tr-[3rem] flex
                        flex-col items-center content-center justify-center'>
          <p className={`${styles.title}`}>Skills</p>
        </div>
      </div>
      <div className={`${styles.shrinkable}`}>
        <div className={`${externalStyles.facts} flex flex-row items-start justify-center content-center mb-10 gap-x-30`}>
          <div className='flex flex-col items-center text-center max-w-sm px-4'>
            <p className={styles.subtitle}>Frontend</p>
            <SkillBox images={frontendSkills} />
            <p className='mt-4 text-lg leading-relaxed'>
              I have professional experience with the Angular framework, and I made this website with Next.JS!
            </p>
          </div>
          <div className='flex flex-col items-center text-center max-w-sm px-4'>
            <p className={`${styles.subtitle}`}>Backend</p>
            <SkillBox images={backendSkills} />
            <p className='mt-4 text-lg leading-relaxed'>
              I have taken classes in C, C++, and Java, such as Operating Systems, Computer Graphics, and OOP. I also have
              professional experience building APIs with C#.
            </p>
          </div>
          <div className='flex flex-col items-center text-center max-w-sm px-4'>
            <p className={`${styles.subtitle}`}>Tools/Tech</p>
            <SkillBox images={toolsSkills} />
            <p className='mt-4 text-lg leading-relaxed'>
              {skillsTools}
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.learn} w-1/2 mt-5 mb-10`}>
        <p>
          Learning has always been a core value of mine; whether in club projects, coursework, or professional experience.
          Every co-op I am looking to learn new skills, both technical and soft, and to challenge myself by trying new roles.
        </p>
      </div>
    </div>
  );
}