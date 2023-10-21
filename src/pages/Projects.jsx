import CovidTracker from "./covidtracker.mp4";
import Shappy from "./shappy1.mp4";
import Ennea from "./ennea.mp4";
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

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="video">
                <video autoPlay muted>
                  <source src={Shappy} type="video/mp4" />
                </video>
              </div>
              <h2>Shappy Online Shop</h2>
              <br />
              <h4>
                A full-stack e-commerce app design to sell anything online. Just
                like every online shop out there, you can buy here anything at
                the comfort of your home.
              </h4>
              <br />
              <h4>Built using: PHP,LARAVEL, MYSQL, TAILWIND</h4>
              <br />
              <a href="https://github.com/yazin24/capstoneproject.git">
                See code here
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="video">
                <video autoPlay muted>
                  <source src={Ennea} type="video/mp4" />
                </video>
              </div>
              <h2>Ennea Apparel Shop</h2>
              <br />
              <h4>
                An online store that sell all kinds of clothes. If you're a fan
                of fashion, then this store is best suit for your needs.
              </h4>
              <br />
              <h4>Built using: HTML, CSS, JAVASCRIPT, PHP</h4>
              <br />
              <a href="https://github.com/cjpablo0318/miniproject2.git">
                See code here
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="video">
                <video autoPlay muted>
                  <source src={CovidTracker} type="video/mp4" />
                </video>
              </div>
              <h2>Covid-19 Tracker</h2>
              <br />
              <h4>
                This web app can track covid-19 infected people around the
                world. You can monitor covid-19 anytime anywhere by using this
                app.
              </h4>
              <br />
              <h4>Built using: REACT, API</h4>
              <br />
              <a href="https://github.com/yazin24/Covid19-tracker.git">
                See code here
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
