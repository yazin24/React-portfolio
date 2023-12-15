import React, { useState } from "react";
import { FaEnvelope, FaFacebookMessenger, FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import SubmitSuccessMessage from "./SubmitSuccessMessage";


const Contact = () => {

  const [showMessage, setShowMessage] = useState(false);

  const submitSuccess = (e) => {
    e.preventDefault();

    setShowMessage(true);

  };

  const handleCloseMessage = () => {

    setShowMessage(false);
    window.location.reload();
  };


  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      >

        <h2 className="text-center font-bold text-xl my-8">CONTACT ME</h2>

      <div className="flex flex-col justify-center mx-auto md:flex-row bg-white text-cyan-500 font-bold md:w-3/4 m-4">

        <div className="md:w-1/2 flex flex-col justify-center text-xl gap-4 bg-cyan-400 text-white font-bold py-4">
          <h2 className="text-center">Address: Oriole st. San Juan Cainta, Rizal</h2>
          <h2 className="text-center">Email: yazinconiendo@gmail.com</h2>
          <h2 className="text-center">Phone: 09994685156</h2>
          <div className="flex flex-row gap-8 text-4xl mt-4 justify-center">
            <a href="https://www.facebook.com/yazin24/"><FaFacebookMessenger/></a>
            <a href="https://www.linkedin.com/in/john-iris-coniendo-08953b225/"><FaLinkedin /></a>
            <a href="https://www.gmail.com"><FaEnvelope/></a>
          </div>
        </div>

        <div className="p-8 md:w-1/2 mb-4">
          <form onSubmit={submitSuccess}>
            <input type="text" placeholder="Name" className="text-xl md:text-2xl border border-2 rounded-sm w-full mb-2" required/>
            <input type="text" placeholder="Email" className="text-xl md:text-2xl border border-2 rounded-sm w-full mb-2" required/>
            <input type="text" placeholder="Subject" className="text-xl md:text-2xl border border-2 rounded-sm w-full mb-4" required/>
            <label className="text-xl md:text-2xl">Message:</label>
            <textarea name="message" id="" cols="20" rows="7" className="text-xl border border-2 rounded-sm w-full" required></textarea>
            <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-white hover:shadow-md px-2 py-1 font-bold">Submit</button>
          </form>
          <SubmitSuccessMessage show={showMessage} handleCloseMessage={handleCloseMessage}/>
        </div>

      </div>

    </motion.div>
  );
};

export default Contact;
