import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>OPPORTUNITY AHEAD</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>COME JOIN US  </Link>
          <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
          />
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
        <Link href="/About">About Us</Link>        
        </div>
        <div className={style.cardItem}>      
        <Link href="/Privacy">Privacy Policy</Link>           
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardCopyright}>
          Copyright ©2022 Pandafreelance. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
