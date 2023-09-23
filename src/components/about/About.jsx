import React from "react";
import "./About.css";

import Myimg from "../../assets/images/myImg.png";
import { motion } from "framer-motion";


function About() {

  return (
    <motion.div name="about" 
      className="w-full h-screen max-w-screen-lg mx-auto p-4"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      
    >
      <div className=''>
        <h1 className='text-4xl font-bold border-b-4 border-gray-500
          p-2 inline'>About
        </h1>

        <p className='py-6 text-2xl'>This is me...</p>
      </div>


        <div className="aboutpage max-w-screen-lg slide-up
          justify-center w-full h-full">

          <img src={Myimg} alt="myimage" />

          <p className="text-xl mt-10">I'm a passionate developer
            who likes to code. I enjoy building anything that live on the internet.
            I pick interesting in technology right from time but didn't have the
            opportunity to study computer science. Guided by passion, I had the
            privilege to follow a training on web development in Genesys Tech Hub where
            I learned somuch and grew my skills.
          </p>
      </div>
    </motion.div>
  )
}


export default About;