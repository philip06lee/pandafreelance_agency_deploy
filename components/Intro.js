import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} />
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>BUILDING & TECHNOLOGY</span> EMPLOYMENT AGENCY IN SINGAPORE
        </h1>
        <p className={style.desc}>
        Tell us what you need. Provide as many details as possible, include your work history and skills but don’t worry about getting it perfect. Think about the things you are good at doing. We will explore opportunities aligned with your passions, skills and career goals. We specialize in Building and Construction industry in Singapore. If you are keen on job opportunities in other fields in Singapore, do not despair. We can utilize our vast network and endeavor to simply find the right work for you. Hopefully the job will spark your interest with an attractive competitive salary package, outstanding career growth and development opportunity.
        </p>
        <br></br>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/Avocado.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
