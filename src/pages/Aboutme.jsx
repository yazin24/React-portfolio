import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Iris from "./iris-image.png";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.div
      className="about-me text-white text-sm m-14 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="my-image flex justify-center items-center align-center md:z-50">
        <img src={Iris} className="flex justify-center items-center align-center w-48 mb-8"/>
      </div>

      <div className="myself">
        <h1 className="title text-green-700 text-2xl md:text-4xl">
          John Iris Coniendo
        </h1>
        <br />
        <p className="text-xs md-text-md text-green-700 md:text-xl">
          A dedicated Web Developer with a proven ability to adapt in both
          self-starting and collaborative environments while staying focused on
          achieving high quality results under strict deadlines. Eager to obtain
          a challenging position at any prestigious company that will expand my
          learning and build upon my developer skills.
        </p>

        <br />
        <h2 className="title text-green-700 text-2xl">Skills:</h2>
        <p className="text-green-700 text-xs md:text-md">
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
    </motion.div>
  );
};

export default Aboutme;
