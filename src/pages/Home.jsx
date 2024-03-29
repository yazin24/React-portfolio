import React from "react";
import CV from "./john_iris_coniendo.pdf";
import { motion } from 'framer-motion';
import Footer from "./Footer";
import Iris from './image-iris.png';

const Home = () => {

  const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }

  return (
    <motion.div className="flex flex-col lg:flex-row justify-center min-h-screen"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={ {transition} }
    >
      <div className="lg:mt-96 w-full">

        <div className="flex flex-col justify-center ">
          <h2 className="font-black text-cyan-400 mx-auto">FULL STACK DEVELOPER</h2>
          <h2 className="fullName text-3xl font-black mx-auto">I'm John Iris Coniendo</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 lg:mt-8">
          <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md text-white font-bold text-xs mx-4 md:mx-0 p-4 md:px-16"><a href="">MORE ABOUT ME</a></button>
          <button className="bg-white hover:shadow-md font-bold text-xs mx-4 md:mx-0 p-4 md:px-16"><a href={CV}download>DOWNLOAD CV</a></button>
        </div>

      </div>

      <div className="min-h-screen flex justify-center lg:justify-start min-h-min w-full md:bg-cyan-400 pt-12 md:p-0 md:mt-16 md:pt-8 lg:p-16  ">
        <img src={Iris} alt="iris_image" className="h-96 md:h-3/4 lg:h-full text-center z-50 scale-x-[-1]"/>
      </div>

     
    </motion.div>
  );
};

export default Home;
