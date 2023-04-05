import React from "react";
import { FaEnvelope, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";


const Contact = () => {

  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2gei8an', 'template_xhe1vkl', form.current, 'JVCc5AGU5XgEtJvD_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <h1 className="text-center text-white text-lg md:text-2xl mt-5 md:mt-24">Get in touch by Contacting Me</h1>
      <div className="contact-container text-white">
        <br />
        <br />
        <div className="contact-option text-xs flex flex-row  justify-center gap-5 md:mb-12">
          <article className="options p-3 flex flex-row gap-2">
            <div>
              <FaEnvelope className="m-1 text-xl" />
            </div>
            <div>
              <h3 className="hidden md:block">By Email</h3>
              <h4 className="hidden md:block">Fill up the form</h4>
              <br />
            </div>
          </article>
          <article className="options p-3 flex flex-row gap-2">
            <div>
              <FaFacebookMessenger className="m-1 text-xl" />
            </div>
            <div>
              <h3 className="hidden md:block">By Messenger</h3>
              <h4 className="hidden md:block">John Iris Coniendo</h4>
              <br />
              <a href="https://m.me/johniris.coniendo" className="hidden md:block">Send a message</a>
            </div>
          </article>

          <article className="options p-3 flex flex-row gap-2">
            <div>
              <FaPhoneAlt className="m-1 text-xl" />
            </div>
            <div>
              <h3 className="hidden md:block">By phone </h3>
              <h4 className="hidden md:block">09994685156</h4>
              <br />
              <h4 className="hidden md:block">Send a message</h4>
            </div>
          </article>
        </div>
    
        <div>
          <form ref={form} onSubmit={sendEmail} className="contact-form mt-4 md:mt-24">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-slate-700"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="bg-slate-700"
              required
            />
            <textarea
              name="message"
              rows="9"
              column="10"
              placeholder="Your Message"
              className="bg-slate-700"
              required
            ></textarea>
            <button type="submit" className="cv-button bg-red-500 p-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
