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
       
       <h2 className="text-center font-bold">WORK EXPERIENCES AND PROJECTS</h2> 

       <div>
        <div className="bg-white">
          <div>
            <img/>
          </div>

          <div>
            asdas
          </div>
        </div>
       </div>
       
      </motion.div>
    </>
  );
};

export default Projects;
