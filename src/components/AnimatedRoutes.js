import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";
import Home from "./home/Home";


function AnimatedRoutes() {
    const location = useLocation();


    return(
        <AnimatePresence>
            <Navbar />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence> 
    )
}

export default AnimatedRoutes;