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
        <div className="flex flex-col">
          
          <div className="flex flex-col md:flex-row justify-start gap-24">
            <div className="card">
              <div className="card-inner">
                <div className="card-front border border-green-700">
                  <div className="video border border-green-700 p-8 pb-16">
                    <video autoPlay muted>
                      <source src={Fave} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="mt-16 ml-4 text-xs md:text-lg vv">
                  <h2 className="text-black">Name: Fave Company System</h2>
                  <br />
                  <h4 className="text-black">Stacks: JAVASCRIPT PHP,LARAVEL, MYSQL, TAILWIND</h4>
                  <br />
                  <a href="https://github.com/yazin24/fave_system" className="text-black">
                    Code Here
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="card-front border border-green-700">
                  <div className="video border border-green-700 p-8">
                    <video autoPlay muted>
                      <source src={Shappy} type="video/mp4" />
                    </video>
                  </div>
                  <div className="mt-16 ml-4 text-xs md:text-lg">
                  <h2 className="text-black">Name: Shappy Online Shop</h2>
                  
                  <br />
                  <h4 className="text-black">Stacks: PHP,LARAVEL, MYSQL, TAILWIND</h4>
                  <br />
                  <a href="https://github.com/yazin24/capstoneproject.git" className="text-black">
                  Code Here
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-24 mt-8">
            <div className="card">
              <div className="card-inner">
                <div className="card-front border border-green-700">
                  <div className="video border border-green-700 p-8">
                    <video autoPlay muted>
                      <source src={Ennea} type="video/mp4" />
                    </video>
                  </div>
                  <div className="mt-16 ml-4 text-xs md:text-lg">
                  <h2 className="text-black">Name: Ennea Apparel Shop</h2>
                 
                  <br />
                  <h4 className="text-black">Stacks: HTML, CSS, JAVASCRIPT, PHP</h4>
                  <br />
                  <a href="https://github.com/cjpablo0318/miniproject2.git" className="text-black">
                  Code Here
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="card-front border border-green-700">
                  <div className="video border border-green-700 p-8">
                    <video autoPlay muted>
                      <source src={CovidTracker} type="video/mp4" />
                    </video>
                  </div>
                  <div className="mt-16 ml-4 text-xs md:text-lg">
                  <h2 className="text-black">Name: Covid-19 Tracker</h2>
                  <br />
                  <h4 className="text-black">Stacks: REACT, API</h4>
                  <br />
                  <a href="https://github.com/yazin24/Covid19-tracker.git" className="text-black">
                  Code Here
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
