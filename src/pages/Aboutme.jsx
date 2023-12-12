import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Iris from "./irisimage.png";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.div
      className="about-me text-white text-sm m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2 className="text-center text-black text-xl mb-4">ABOUT ME</h2>
      <div className="flex flex-col md:flex-row md:gap-8 border border-green-700 p-8">
        
      <div className="my-image flex justify-center items-center align-center md:z-50 md:border-b-2">
        
        <img src={Iris}/>
        
      </div>

      <div className="myself flex flex-col justify-center">
        <h1 className="title text-black text-xl md:text-2xl border-b-2 border-green-700 pb-2">
          John Iris Coniendo
        </h1>
        <br />
        <p className="text-xs md-text-md text-black md:text-lg border-b-2 border-green-700 pb-2">
          A dedicated Web Developer with a proven ability to adapt in both
          self-starting and collaborative environments while staying focused on
          achieving high quality results under strict deadlines. Eager to obtain
          a challenging position at any prestigious company that will expand my
          learning and build upon my developer skills.
        </p>

        <br />
        <h2 className="title text-black text-xl md:text-2xl border-b-2 border-green-700 pb-2 mb-2">Skills:</h2>
        <p className="text-black text-xs md:text-md border-b-2 border-green-700 pb-2">
          HTML | CSS | BOOTSTRAP | TAILWIND | JAVASCRIPT | PHP | LARAVEL | MYSQL | SQL |
          REACT | REACT-NATIVE | NODE JS | EXPRESS JS | MONGODB
        </p>
        <br />

        <ul className="flex gap-4 text-green-700">
          <li>
            <a
              href="https://www.facebook.com/johniris.coniendo"
              className="text-lg md:text-2xl"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/john-iris-coniendo-08953b225/"
              className="text-lg md:text-2xl"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/yazin24" className="text-lg md:text-2xl">
              <FaGithubSquare />
            </a>
          </li>
        </ul>

        <br />
      </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
