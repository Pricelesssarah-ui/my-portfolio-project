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



      <div>

        <ol class="items-center sm:flex">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
          </li>
        </ol>

      </div>



    </motion.div>
  )
}


export default About;
