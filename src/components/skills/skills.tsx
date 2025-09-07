import styles from './skills.module.css';
import SkillBox from './skillBox';
import externalStyles from '../home/home.module.css';

export default function Skills() {
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
    '', 
    '', 
    ''
  ];

  const toolsSkills: string[] = [
    '/skills/gitLogo.png', 
    '', 
    '', 
    '', 
    '', 
    ''
  ];

  return (
    <div className='flex flex-col justify-items-center items-center h-screen'>
      <div className='bg-[#151515] w-full'>
        <div className='bg-[var(--background)] pt-10 w-full rounded-tl-[3rem] rounded-tr-[3rem] flex
                        flex-col items-center content-center justify-center'>
          <p className={`${styles.title}`}>Skills</p>
        </div>
      </div>
      <div className={`${externalStyles.facts} flex flex-row items-start justify-center content-center mb-10 gap-30`}>
        <div className={``}>
          <SkillBox images={frontendSkills}/>
        </div>
        <div className={``}>
          <SkillBox images={backendSkills}/>
        </div>
        <div className={``}>
          <SkillBox images={toolsSkills}/>
        </div>
      </div>
    </div>
  );
}