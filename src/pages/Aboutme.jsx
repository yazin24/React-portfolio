import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Iris from "./irisimage.png";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.div
      className="text-sm m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-center font-bold text-gray-900">ABOUT ME</h2>

      <div className="flex flex-col lg:flex-row">

      <div className="flex flex-col gap-8 mt-4 lg:mt-24 lg:mx-12">

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="bg-white text-cyan-500 py-16 px-30 lg:px-32 text-center">SAMPLE</div>
          <div className="bg-white text-cyan-500 py-16 px-30 lg:px-32 text-center">SAMPLE</div>

        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="bg-white text-cyan-500 py-16 px-30 lg:px-32 text-center">SAMPLE</div>
          <div className="bg-white text-cyan-500 py-16 px-30 lg:px-32 text-center">SAMPLE</div>

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
        <button className="bg-cyan-400 hover:bg-cyan-500 p-2 font-bold text-white hover:shadow-md mt-4">DOWNLOAD CV</button>
      </div>

      </div>
    </motion.div>
  );
};

export default Aboutme;
