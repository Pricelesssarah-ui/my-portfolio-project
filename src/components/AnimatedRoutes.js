import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import Navbar from "./navbar/Navbar";
import Home from "../components/home/Home";
import SocialLinks from "./socialinks/SocialLinks";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";


function AnimatedRoutes() {
    const location = useLocation();


    return(
        <AnimatePresence>
            <Navbar />
            <SocialLinks />
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