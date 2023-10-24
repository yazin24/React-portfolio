import CovidTracker from "./covidtracker.mp4";
import Shappy from "./shappy1.mp4";
import Ennea from "./ennea.mp4";
import Fave from "./fave_system.mp4";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <motion.div
        className="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col gap-8 justify-center">
        <h2 className="text-center text-black text-xl mb-4">PROJECTS AND EXPERIENCES</h2>
                <div className="border border-green-700 border-8 rounded-md mx-8 md:mx-48 pb-2">
                  <div className="border border-green-700 border-8 rounded-sm border-8 p-4">
                    <video autoPlay muted>
                      <source src={Fave} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="my-8 ml-4 text-xs md:text-lg vv">
                  <h2 className="text-black">Fave Company System</h2>
                  
                  <h4 className="text-black text-xs my-2">Stacks: JAVASCRIPT, PHP, LARAVEL, MYSQL, TAILWIND</h4>
                  
                  <a href="https://github.com/yazin24/fave_system" className="text-black text-xs pt-2">
                    Code Here
                  </a>
                  </div>
                </div>

                <div className="card-front border border-green-700 border-8 rounded-md mx-8 md:mx-48 pb-2">
                  <div className="border border-green-700 border-8 rounded-sm p-4">
                    <video autoPlay muted  >
                      <source src={Shappy} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="my-8 ml-4 text-xs md:text-lg vv">
                  <h2 className="text-black">Shappy Capstone Project</h2>
                  
                  <h4 className="text-black text-xs my-2">Stacks: PHP, LARAVEL, MYSQL, TAILWIND</h4>
                  
                  <a href="https://github.com/yazin24/capstoneproject" className="text-black text-xs mt-2">
                    Code Here
                  </a>
                  </div>
                </div>

                <div className="card-front border border-green-700 border-8 rounded-md mx-8 md:mx-48 pb-2">
                  <div className="border border-green-700 border-8 rounded-sm p-4">
                    <video autoPlay muted >
                      <source src={CovidTracker} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="my-8 ml-4 text-xs md:text-lg vv">
                  <h2 className="text-black">Covid Tracker</h2>
                  
                  <h4 className="text-black text-xs my-2">Stacks: REACT JS, COVID API</h4>
                  
                  <a href="https://github.com/yazin24/Covid19-tracker" className="text-black text-xs mt-2">
                    Code Here
                  </a>
                  </div>
                </div>

        </div>
      </motion.div>
    </>
  );
};

export default Projects;
