import React from "react";
import CV from "./john_iris_cv.pdf";
import { motion } from 'framer-motion';
import Footer from "./Footer";

const Home = () => {

  return (
    <motion.div className="flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">

        <div className="flex flex-col justify-center mx-auto">
          <h2 className="font-black text-cyan-400 mx-auto">FULL STACK DEVELOPER</h2>
          <h2 className="fullName text-3xl font-black mx-auto">I'm John Iris Coniendo</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 mt-2">
          <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md text-white font-bold text-xs mx-4 md:mx-0 p-4 md:px-16"><a href="">MORE ABOUT ME</a></button>
          <button className="bg-white hover:shadow-md font-bold text-xs mx-4 md:mx-0 p-4 md:px-16"><a>DOWNLOAD CV</a></button>
        </div>

      </div>

     
    </motion.div>
  );
};

export default Home;
