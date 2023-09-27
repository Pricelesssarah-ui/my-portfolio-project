import React from 'react';

import "./Experience.css";
import { motion } from 'framer-motion';

import Group1 from "../../assets/images/Group (1).png";
import Arrow from "../../assets/icons/arrow.svg";
import Group3 from "../../assets/images/Group (3).png";
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import sass from '../../assets/icons/sass.svg';
import javaScript from '../../assets/icons/js.svg';
import typescript from '../../assets/icons/ts.svg';
import tailwind from '../../assets/icons/tailwind.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';
import react from '../../assets/icons/react.svg';
import next from '../../assets/icons/next.svg';
import git from '../../assets/icons/git.svg';
import figma from '../../assets/icons/figma.svg';
import github from '../../assets/icons/github.svg';




function Experience() {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500"
    },

    {
      id: 3,
      src: sass,
      title: "SASS",
      style: "shadow-pink-500"
    },


    {
      id: 4,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },


    {
      id: 5,
      src: typescript,
      title: "Typescript",
      style: "shadow-green-500"
    },


    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500"
    },

    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500"
    },

    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-blue-700"
    },

    {
      id: 9,
      src: next,
      title: "Next",
      style: "shadow-white"
    },

    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-orange-500"
    },

    {
      id: 11,
      src: figma,
      title: "Figma",
      style: "shadow-green-500"
    },

    {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-gray-500"
    }
  ]

  return (
    <motion.div name="experience"
      className='w-full h-full'

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full'>

        <div className=''>
          <h1 className='text-4xl font-bold border-b-4 border-gray-500
            p-2 inline'>Experiences
          </h1>

          <p className='py-6 text-2xl'>Technologies I have worked with</p>
        </div>


        <div className='w-full grid grid-row-2 sm:grid-cols-4 gap-8 slide-up
          text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({ id, src, title, style }) =>

              <div key={id}
                className={`shadow-md hover:scale-105 duration-500
              py-2 rounded-lg ${style}`}>

                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            )
          }

        </div>
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

Experience.propTypes = {

}



export default Experience;

