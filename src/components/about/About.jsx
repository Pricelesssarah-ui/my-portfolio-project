import React from "react";

import "./About.css";
import { motion } from "framer-motion";

import Myimg from "../../assets/images/myImg.png";
import Group1 from "../../assets/images/Group (1).png";
import Arrow from "../../assets/icons/arrow.svg";
import Group3 from "../../assets/images/Group (3).png";



function About() {

  return (
    <motion.div name="about"
      className="w-full h-screen max-w-screen-lg mx-auto p-4"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

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

        <p className="text-1xl mt-10 px-12 w-[105%]">I'm a passionate developer
          who likes to code. I enjoy building anything that live on the internet.
          I pick interesting in technology right from time but didn't have the
          opportunity to study computer science. Guided by passion, I had the
          privilege to follow a training on web development in Genesys Tech Hub where
          I learned somuch and grew my skills.
        </p>
      </div>

      <div>
        <img src={Group1}
          alt='group'
          className='w-10 h-6 absolute left-20 top-60 animate-ping'
        />

        <img src={Arrow}
          alt='group'
          className='arrowicon w-10 h-10 absolute right-10 top-20 animate-ping'
        />

        <img src={Group3}
          alt='group'
          className='w-10 h-6 absolute bottom-20 right-20 animate-spin'
        />
      </div>
    </motion.div>
  )
}


export default About;