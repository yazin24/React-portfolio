import React, {useState,} from "react";
import {Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';
import { FaHome, FaAddressCard, FaFolderOpen, FaPhoneSquareAlt } from "react-icons/fa";
import {AnimatePresence} from 'framer-motion';



const AnimatedRoutes = () => {

    const [activeNav, setActiveNav]= useState('/');

    const location= useLocation();

  return (
    <div className="bg-gray-200">
        <nav>
      <ul className='nav-bar flex flex-row justify-center font-[0.2] font-bold gap-14 relative p-10 bg-none text-cyan-400 text-lg md:text-2xl md:gap-44'>
      
      

        <li onClick={()=> setActiveNav('/')}  className={activeNav=== '/' ? 'active-nav' : ''}>
          <Link to="/"><FaHome/></Link>
        </li>
       
        <li onClick={()=> setActiveNav('/Aboutme')} className={activeNav=== '/Aboutme' ? 'active-nav' : ''}>
          <Link to="/Aboutme"><FaAddressCard/></Link>
        </li>
        <li onClick={()=> setActiveNav('/Myprojects')} className={activeNav=== '/Myprojects' ? 'active-nav' : ''}>
          <Link to="/Myprojects"><FaFolderOpen/></Link>
        </li>
        <li onClick={()=> setActiveNav('/Contactme')} className={activeNav=== '/Contactme' ? 'active-nav' : ''}>
          <Link to="/Contactme"><FaPhoneSquareAlt/></Link>
        </li>
      </ul>
    </nav>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
        <Route path="/Aboutme" element={<Aboutme/>}/>
        <Route path="/Myprojects" element={<Projects/>}/>
        <Route path="/Contactme" element={<Contact/>}/>
    </Routes>
    </AnimatePresence>
    
    </div>
  )
}

export default AnimatedRoutes
