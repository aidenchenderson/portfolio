import Image from "next/image";
import styles from "./skills.module.css";

interface skillBoxData {
  images: string[],
}

export default function SkillBox({ images }: skillBoxData) {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <div className='flex flex-row gap-3'>
        {images[0] != "" &&
          <div>
            <Image
              src={images[0]}
              width={100}
              height={100}
              alt='skill image'
              className={styles.image}
              quality={100}
              unoptimized
            />
          </div>
        }
        {images[1] != "" &&
          <div>
            <Image
              src={images[1]}
              width={100}
              height={100}
              alt='skill image 2'
              className={styles.image}
              quality={100}
              unoptimized
            />
          </div>
        }
        {images[2] != "" &&
          <div>
            <Image
              src={images[2]}
              width={100}
              height={100}
              alt='skill image 2'
              className={styles.image}
              quality={100}
              unoptimized
            />
          </div>
        }
      </div>
      <div className='flex flex-row gap-3'>
        {images[3] != "" &&
          <div>
            <Image
              src={images[3]}
              width={100}
              height={100}
              alt='skill image'
              className={styles.image}
              quality={100}
              unoptimized
            />
          </div>
        }
        {images[4] != "" &&
          <div>
            <Image
              src={images[4]}
              width={100}
              height={100}
              alt='skill image 2'
              className={styles.image}
              quality={100}
              unoptimized
            />
          </div>
        }
        {images[5] != "" &&
          <div>
            <Image
              src={images[5]}
              width={100}
              height={100}
              alt='skill image 2'
              className={styles.image}
              quality={100}
              unoptimized
            />
          </div>
        }
      </div>
    </div>
  );
}