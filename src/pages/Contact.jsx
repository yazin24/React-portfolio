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
   
         <div className="flex flex-col justify-center md:flex-row bg-white text-cyan-500 font-bold md:w-3/4 m-4">
             <div>asdasd</div>
             <div className="p-8">
              <input type="text" placeholder="Name" className="text-xl md:text-2xl border border-2 rounded-sm w-full mb-2"/>
              <input type="text" placeholder="Email" className="text-xl md:text-2xl border border-2 rounded-sm w-full mb-2"/>
              <input type="text" placeholder="Subject" className="text-xl md:text-2xl border border-2 rounded-sm w-full mb-2"/>
              <textarea name="message" id="" cols="20" rows="7" className="text-xl border border-2 rounded-sm w-full" value='Enter Message '></textarea>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white hover:shadow-md px-2 py-1 font-bold">Submit</button>
             </div>
         </div>
         
    </motion.div>
  );
};

export default Contact;
