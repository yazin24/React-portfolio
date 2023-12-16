import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaHandsHelping, FaMugHot, FaClock, FaClipboardList } from "react-icons/fa";
import CV from "./john_iris_coniendo.pdf";
import { motion } from "framer-motion";

const Aboutme = () => {

  const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }

  return (
    <motion.div
      className="text-sm m-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={ {transition} }
    >
      <h2 className="text-center font-bold text-xl text-gray-900">ABOUT ME</h2>

      <div className="flex flex-col lg:flex-row justify-center">

      <div className="flex flex-col gap-8 mt-4 lg:mt-24 lg:mx-12">

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="bg-white text-cyan-500 py-12 px-30 lg:px-28 text-center text-6xl"><FaHandsHelping className="text-center mx-auto"/></div>
          <div className="bg-white text-cyan-500 py-12 px-30 lg:px-28 text-center text-6xl"><FaMugHot className="text-center mx-auto"/></div>

        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="bg-white text-cyan-500 py-12 px-30 lg:px-28 text-center text-6xl"><FaClock className="text-center mx-auto"/></div>
          <div className="bg-white text-cyan-500 py-12 px-30 lg:px-28 text-center text-6xl"><FaClipboardList className="text-center mx-auto"/></div>

        </div>

      </div>

      <div className="mt-16 lg:mt-24 pb-16">
        <h1 className="text-xl font-bold">A FULLSTACK DEVELOPER BASED IN PHILIPPINES</h1>
        <p className="my-8 lg:text-xl">Navigating the intricate maze of code, I uncover the artistry in logic,<br></br> where every keystroke is a brushstroke painting the canvas of a virtual masterpiece.</p>
        
        <div className="flex flex-col lg:flex-row lg:gap-8">
        <div>
        <h2 className="mb-8 font-bold">Name: <span className="text-cyan-400 font-bold ml-4"> JOHN IRIS CONIENDO</span></h2>
        <h2 className="mb-8 font-bold">Birthdate: <span className="text-cyan-400 font-bold ml-4"> DECEMBER 14, 1996</span></h2>
        <h2 className="mb-8 font-bold">Address: <span className="text-cyan-400 font-bold ml-4"> SAN JUAN CAINTA RIZAL</span></h2>
        </div>
       <div>
       <h2 className="mb-8 font-bold">Zip code: <span className="text-cyan-400 font-bold ml-4">1900</span></h2>
        <h2 className="mb-8 font-bold">Email: <span className="text-cyan-400 font-bold ml-4">YAZINCONIENDO@GMAIL.COM</span></h2>
        <h2 className="mb-8 font-bold">Phone: <span className="text-cyan-400 font-bold ml-4">09994685156 / 09352703145</span></h2>
       </div>
       
        </div>

        <div className="flex flex-row text-2xl gap-6 mb-4 text-cyan-400">
          <a href="https://www.facebook.com/yazin24/"><FaFacebookSquare/></a>
          <a href="https://www.linkedin.com/in/john-iris-coniendo-08953b225/"><FaLinkedin/></a>
          <a href="https://github.com/yazin24"><FaGithubSquare/></a>
        
       </div>

        <button className="bg-cyan-400 hover:bg-cyan-500 p-2 font-bold text-white hover:shadow-md mt-4"><a href={CV} download>DOWNLOAD CV</a></button>
      </div>

      </div>
    </motion.div>
  );
};

export default Aboutme;
