import React from "react";
import CV from "./IRIS_CV.pdf";
import {motion} from 'framer-motion';

const Home = () => {

  return (
    <motion.div className="homepage text-white m-20"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="home-body">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">Hi, Im John Iris...</h1>
        <h3 className="text-xl md:text-2xl lg:text-4xl">Nice To Meet You.</h3>
        <h4 className="title text-md text-red-500 md:text-lg lg:text-2xl">Web Developer</h4>
      </div>
      
      <div>
       <a href={CV} download>
        <button className="cv-button p-3 bg-red-500 rounded-xl text-xs">Download CV</button>
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
