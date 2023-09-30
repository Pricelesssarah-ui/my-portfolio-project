import React from "react";

import "./About.css";
import { motion } from "framer-motion";

import Myimg from "../../assets/icons/bg-img.svg";
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


      <div className="aboutpage max-w-screen-lg slide-up w-full h-full">

        <img src={Myimg} className="myImg" alt="myimage" />

        <p className="text-1xl mt-0 px-12 w-[105%]">
          Hello! 👋 I'm Sarah Adebayo, a passionate frontend developer with a love for 
          creating visually appealing and user-friendly web experiences.
          <ul>
            <li>💻 Tech Stack:</li>
            <li>Languages: HTML, CSS, JavaScript</li>
            <li>Libraries/Frameworks: React.js, Next.js</li>
            <li>Styling: Sass, CSS-in-JS (Styled Components)</li>
            <li>Version Control: Git, GitHub</li>
          </ul>
          🚀 What I Do:
          I specialize in turning design concepts into responsive and interactive web applications.
          I enjoy the challenge of optimizing for performance and ensuring a seamless user experience across devices.
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
