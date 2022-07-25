import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";



const Contact = () => {
  
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ljg0s43', 'template_5ccydbh', form.current, 'WbiMXRHW-0NIC2YiZ')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
    };



  return (
    <div className={style.container}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
      <h1 className={style.title}>Get in Touch</h1>
      <form className={style.form} ref={form} onSubmit={sendEmail}     >
        <input className={style.inputS} type="text" name="user_name" placeholder="Name" />
        {/* <input className={style.inputS} type="text" placeholder="Phone" /> */}
        <input className={style.inputL} type="text" name="user_email" placeholder="Email" />
        <input className={style.inputL} type="text" name="subject" placeholder="Subject" />
        {/* <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        /> */}
        <button className={style.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;