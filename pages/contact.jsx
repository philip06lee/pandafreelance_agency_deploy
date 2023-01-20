import { useState, useReducer } from 'react';
import emailjs from '@emailjs/browser';
import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";
import ReCAPTCHA from 'react-google-recaptcha';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

export default function MessageForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === '' || email === '' || message === '') {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    setFormSubmitted({ title: 'Sending message...', paragraph: '' });
    emailjs.send(
      'service_peojdwc', 'template_5ccydbh', params, '7vlwrLv2W6Wczjtc8',)
      .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({ title: 'Message has been sent', paragraph: 'Pandafreelance will be in contact with you soon.' });
        } else {
          setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Pandafreelance by email.' });
        }
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mike either by phone or email.' });
      });
  };

  return formSubmitted.title === '' ? (
    <div className={style.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="orange" right="-30vh" bottom="-60vh" className={style.circle}/>
      <h1 className={style.title}>Get in Touch</h1>
      <h2 className="text-lato text-2xl font-light text-white">Send me a message</h2>
      {!showCaptcha ? (
        <form onSubmit={submitFormAndShowCaptcha}>
          <div className={style.form}>
            <div className={style.inputS}>
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-name">
                Name:  <input
                  id="contact-form-name"
                  className={style.inputS} 
                  type="text"
                  value={name}
                  onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                  required
                />
              </label>
              <br />
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-email">
                Email:   <input
                  id="contact-form-email"
                  className={style.inputL} 
                  type="email"
                  value={email}
                  onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                  required
                />
              </label>
            </div>
            <div className={style.inputL}>
              <label className="block text-gray-500 font-bold my-2" htmlFor="contact-form-message">
                Message:
                <textarea
                  rows="5"
                  id="contact-form-message"
                  className={style.textArea}
                  type="text"
                  value={message}
                  onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                  required
                />
              </label>
            </div>
          </div>
          <div className="w-full flex justify-end items-center flex-col sm:flex-row">
            {showFormErr ? <p className="sm:mr-4 text-red-400">Please fill in all three input boxes to send a message</p> : null}
            <button className={style.button} type="submit">
              Send
            </button>
          </div>
        </form>
      ) : (
        <ReCAPTCHA
          sitekey={"6Lc3BrgjAAAAABp5E-vGVv6rs7RquIGqsx_kymZR"}
          onChange={sendEmail}
        />
      )}
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">{formSubmitted.title}</h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
}
