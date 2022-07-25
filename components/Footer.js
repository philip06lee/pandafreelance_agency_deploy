import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>DREAMER CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          14 CHANGI ROAD,
          <br /> SINGAPORE
        </div>
        <div className={style.cardItem}>
          CONTACT@PHILIP.DEV
          <br /> 6373_5244
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          
        FOLLOW US:

               
        <Link href='https://www.facebook.com/philip.lee.94009'><a> <AiFillFacebook size="2em" fill="rgb(52,158,84)" />  </a></Link>

        <Link href='https://www.facebook.com/philip.lee.94009'><a> <AiFillInstagram size="2em" fill="rgb(52,158,84)" /> </a></Link>

          
                  
        </div>
        <div className={style.cardItem}>
          © 2022 PHILIP INTERACTIVE,
                   
          
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;




// import React from 'react';
// import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <p>2022 PHILIP Watches & Headphones All rights reserverd</p>
//       <p className="icons">

//         {/* <AiFillInstagram />
//         <AiFillFacebook /> */}

      

//         <Link href='https://www.facebook.com/philip.lee.94009'><a> <AiFillFacebook />  </a></Link>

//         <Link href='https://www.facebook.com/philip.lee.94009'><a> <AiFillInstagram /> </a></Link>

//       </p>
//     </div>
//   )
// }

// export default Footer