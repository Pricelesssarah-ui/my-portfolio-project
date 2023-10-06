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

      <div>
        <img src={Group1}
          alt='group'
          className='w-10 h-6 absolute left-20 top-60 animate-ping'
        />

        <img src={Arrow}
          alt='group'
          className='arrowicon w-10 h-10 absolute right-8 top-20 animate-ping'
        />

        <img src={Group3}
          alt='group'
          className='w-10 h-6 absolute bottom-20 right-20 animate-spin'
        />
      </div>


      <div className='py-8'>
        <h1 className='text-4xl font-bold mt-8 inline border-b-4
            border-gray-500'>About
        </h1>

        <p className='pt-10 text-2xl text-white animate-bounce z-10'>This is me...</p>
      </div>

      <div className="slide-up">
      <div className="aboutpage max-w-screen-lg w-full h-full">

        <img src={Myimg} className="myImg" alt="myimage" />

        <p className="text-1xl mt-0 text-center">
          Hello! 👋 I'm Sarah Adebayo, a passionate frontend developer with a love for
          creating visually appealing and user-friendly web experiences.
          <ul className="py-2">
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
      <h1 className="workplace pt-9 text-2xl">Places I have worked:</h1>
      <div>
        <ol className="items-center sm:flex pt-9">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="timelineTitle text-lg font-semibold text-gray-900">Istart Technologies Limited</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">August 2023 - Present</time>
              <p className="text-base font-normal text-white">★	Built functional, readable and responsive project for clients.</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="timelineTitle text-lg font-semibold text-gray-900">Genesys Tech Hub</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">November 2022 – June 2023</time>
              <p className="text-base font-normal text-white">★	Collaborated with a team to build a Learning management system.</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="timelineTitle text-lg font-semibold text-gray-900">Women Techsters Bootcamp</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">April 2023 - May-2023</time>
              <p className="text-base font-normal text-white">★ Led a team of few developers to improve code quality and resolve bugs.</p>
            </div>
          </li>
        </ol>

      </div>

      </div>


    </motion.div>
  )
}


export default About;
