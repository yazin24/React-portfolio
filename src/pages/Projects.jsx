import CovidTracker from "./covidtracker.mp4";
import Ennea from "./ennea.mp4";
import { motion } from "framer-motion";
import Fave from './fave.png';
import Shappy from './shappy.png';
import Tracker from './tracker.png';

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
        <div className="bg-white flex flex-col lg:flex-row">
          <div className="p-8">
            <img src={Fave} className="w-1/4"/>
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
