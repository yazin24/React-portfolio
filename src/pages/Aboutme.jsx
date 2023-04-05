import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Iris from "./irisjohn.png";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.div
      className="about-me text-white text-sm m-14 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="my-image mb-14 md:z-50">
        <img src={Iris} />
      </div>

      <div className="myself">
        <h1 className="title text-red-500 text-2xl md:text-4xl">
          John Iris Coniendo
        </h1>
        <br />
        <p className="text-md md:text-xl">
          A dedicated Web Developer with a proven ability to adapt in both
          self-starting and collaborative environments while staying focused on
          achieving high quality results under strict deadlines. Eager to obtain
          a challenging position at any prestigious company that will expand my
          learning and build upon my developer skills.
        </p>

        <br />
        <h2 className="title text-red-500 text-2xl">Skills:</h2>
        <p>
          HTML | CSS | BOOTSTRAP | TAILWIND | JAVASCRIPT | REACT | REACT-NATIVE | NODE JS | EXPRESS JS | MONGODB
        </p>
        <br />

        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.facebook.com/johniris.coniendo"
              className="text-2xl"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/john-iris-coniendo-08953b225/"
              className="text-2xl"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/yazin24" className="text-2xl">
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
