import React, {useState,} from "react";
import {BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { FaHome, FaAddressCard, FaFolderOpen, FaPhoneSquareAlt } from "react-icons/fa";
import AnimatedRoutes from "./pages/AnimatedRoutes";


function App() {



  return (
    <>
   <BrowserRouter>
    {/* <div className='stars z-10'>
    <div className='stars2 z-10'>
			<div className='stars3 z-10'>
      </div>
      </div>
      </div> */}

  {/* <div className="bg"></div> */}
       
      <AnimatedRoutes/>
      </BrowserRouter>
   
    </>
  );
}

export default App;
