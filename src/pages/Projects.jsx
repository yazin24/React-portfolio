
import { motion } from "framer-motion";
import Aces4 from './aces4.png';
import Aces41 from './aces41.png';
import Superset from './superset.png';
import Superset1 from './superset1.png';
import Fave from './fave.png';
import Fave1 from './fave1.png';
import Fave2 from './fave2.png';
import Shappy from './shappy.png';
import Shappy1 from './shappy1.png';
import Shappy2 from './shappy2.png';
import Tracker from './tracker.png';
import Tracker1 from './tracker1.png';
import Tracker2 from './tracker2.png';

const Projects = () => {

  const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }

  return (
    <>
      <motion.div
        className="projects p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ transition }}
      >

        <h2 className="text-center font-bold text-xl">WORK EXPERIENCES AND PROJECTS</h2>

        <div className="">

          <div className=" bg-white flex flex-col lg:flex-row mt-8">

            <div className="p-2 flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row w-full">
                <img src={Fave2} className="w-full lg:hidden" />
                <img src={Superset} className="hidden lg:block lg:w-1/4" />
                <img src={Superset1} className="hidden lg:block lg:w-1/4" />
                <div className="lg:mx-8 my-8">
                  <h2 className="text-xl lg:text-4xl font-bold text-cyan-400">Aces4ItWorksCompany</h2>
                  <p className="md:text-xl lg:text-2xl my-8">Install and configure apache superset dashbooard on linux server and embed it in a existing web based system. Create charts on top of the dashboard depending on user and admin request.</p>
                  <h2 className="font-bold mb-2">Stacks Use: </h2>

                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">APACHE SUPPERSET</h3>
                      <h3 className="text-cyan-400 font-bold">LINUX UBUNTU SERVER</h3>
                      <h3 className="text-cyan-400 font-bold">MSSQL</h3>
                      <h3 className="text-cyan-400 font-bold">C#</h3>
                    </div>

                  </div>
                  <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md p-4 font-bold text-white my-8"><a href="https://github.com/yazin24/fave_system">GITHUB LINK HERE</a></button>
                </div>
              </div>

            </div>
          </div>

          <div className=" bg-white flex flex-col lg:flex-row mt-8">

            <div className="p-2 flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row w-full">
                <img src={Shappy2} className="w-full lg:hidden" />

                <div className="lg:mx-8 my-8">
                  <h2 className="text-xl lg:text-4xl font-bold text-cyan-400">Elisa Polystar</h2>
                  <p className="md:text-xl lg:text-2xl my-8">Creating SQL queries based on client's request. Reingesting old data into new projects and checking data files for smooth company process.</p>
                  <h2 className="font-bold mb-2">Stacks Use: </h2>

                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">SQL</h3>
                      <h3 className="text-cyan-400 font-bold">ELASTICSEARCH</h3>
                      <h3 className="text-cyan-400 font-bold">CITRIX</h3>

                    </div>


                  </div>
                  <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md p-4 font-bold text-white my-8"><a href="https://github.com/yazin24/capstoneproject">GITHUB LINK HERE</a></button>
                </div>
                <img src={Aces4} className="hidden lg:block lg:w-1/4" />
                <img src={Aces41} className="hidden lg:block lg:w-1/4" />
              </div>
            </div>
          </div>


          <div className=" bg-white flex flex-col lg:flex-row mt-8">

            <div className="p-2 flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row w-full">
                <img src={Fave2} className="w-full lg:hidden" />
                <img src={Fave} className="hidden lg:block lg:w-1/4" />
                <img src={Fave1} className="hidden lg:block lg:w-1/4" />
                <div className="lg:mx-8 my-8">
                  <h2 className="text-xl lg:text-4xl font-bold text-cyan-400">FAVE ECOMMERCE INC.</h2>
                  <p className="md:text-xl lg:text-2xl my-8">Make a web based system using the LAMPSTACK(LINUX, APACHE, MYSQL, PHP).</p>
                  <h2 className="font-bold mb-2">Stacks Use: </h2>

                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">TAILWIND</h3>
                      <h3 className="text-cyan-400 font-bold">CSS</h3>
                      <h3 className="text-cyan-400 font-bold">JAVASCRIPT</h3>
                      <h3 className="text-cyan-400 font-bold">PHP</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">LARAVEL</h3>
                      <h3 className="text-cyan-400 font-bold">MYSQL</h3>
                      <h3 className="text-cyan-400 font-bold">APACHE</h3>
                      <h3 className="text-cyan-400 font-bold">LINUX</h3>
                    </div>
                  </div>
                  <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md p-4 font-bold text-white my-8"><a href="https://github.com/yazin24/fave_system">GITHUB LINK HERE</a></button>
                </div>
              </div>

            </div>
          </div>

          {/* shappy */}

          <div className=" bg-white flex flex-col lg:flex-row mt-8">

            <div className="p-2 flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row w-full">
                <img src={Shappy2} className="w-full lg:hidden" />

                <div className="lg:mx-8 my-8">
                  <h2 className="text-xl lg:text-4xl font-bold text-cyan-400">SHAPPY CAPSTONE PROJECT</h2>
                  <p className="md:text-xl lg:text-2xl my-8">As part of a 3 man team, create a fully functional ecommerce system using PHP and LARAVEL with MYSQL as database. </p>
                  <h2 className="font-bold mb-2">Stacks Use: </h2>

                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">TAILWIND</h3>
                      <h3 className="text-cyan-400 font-bold">CSS</h3>
                      <h3 className="text-cyan-400 font-bold">JAVASCRIPT</h3>
                      <h3 className="text-cyan-400 font-bold">PHP</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">LARAVEL</h3>
                      <h3 className="text-cyan-400 font-bold">MYSQL</h3>
                    </div>
                  </div>
                  <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md p-4 font-bold text-white my-8"><a href="https://github.com/yazin24/capstoneproject">GITHUB LINK HERE</a></button>
                </div>
                <img src={Shappy} className="hidden lg:block lg:w-1/4" />
                <img src={Shappy1} className="hidden lg:block lg:w-1/4" />
              </div>
            </div>
          </div>

          {/* covid tracker */}

          <div className=" bg-white flex flex-col lg:flex-row mt-8">

            <div className="p-2 flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row w-full">
                <img src={Tracker2} className="w-full lg:hidden" />
                <img src={Tracker} className="hidden lg:block lg:w-1/4" />
                <img src={Tracker1} className="hidden lg:block lg:w-1/4" />
                <div className="lg:mx-8 my-8">
                  <h2 className="text-xl lg:text-4xl font-bold text-cyan-400">COVID-19 TRACKER</h2>
                  <p className="md:text-xl lg:text-2xl my-8">A personal project created using react js and covid-19 api.</p>
                  <h2 className="font-bold mb-2">Stacks Use: </h2>

                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">TAILWIND</h3>
                      <h3 className="text-cyan-400 font-bold">CSS</h3>
                      <h3 className="text-cyan-400 font-bold">JAVASCRIPT</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-cyan-400 font-bold">REACT JS</h3>
                      <h3 className="text-cyan-400 font-bold">COVID-19 API</h3>
                    </div>
                  </div>
                  <button className="bg-cyan-400 hover:bg-cyan-500 hover:shadow-md p-4 font-bold text-white my-8"><a href="https://github.com/yazin24/Covid19-tracker">GITHUB LINK HERE</a></button>
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
