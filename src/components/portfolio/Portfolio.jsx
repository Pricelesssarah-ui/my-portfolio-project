import React from "react";
import "./Portfolio.css";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SocialLinks from "../socialinks/SocialLinks";

import Group1 from "../../assets/images/Group (1).png";
import Arrow from "../../assets/icons/arrow.svg";
import Group3 from "../../assets/images/Group (3).png";
import Learnz from "../../assets/images/learnz_pic.png";
import Restaurant from "../../assets/images/restaurant.png";
import Lexandre from "../../assets/images/lexandre.png";
import Quiz from "../../assets/images/quizapp.png";



function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: Learnz,
      demo: "https://learnz.vercel.app",
      code: "https://github.com/learnable-2022/LMS-YC-2-FE.git",
    },

    {
      id: 2,
      src: Restaurant,
      demo: "https://first-website-saralina.netlify.app",
      code: "https://github.com/Pricelesssarah-ui/Sarah-first-website",
    },

    {
      id: 3,
      src: Lexandre,
      demo: "https://lexandre-4y5j87r7z-technical-team.vercel.app/en",
      code: "https://github.com/iStart-Technologies-Limited/lexandre.git",
    },

    {
      id: 4,
      src: Quiz,
      demo: "https://fca-assessment-1-72s4.vercel.app/",
      code: "https://github.com/Pricelesssarah-ui/FCA-assessment-1.git",
    }
  ]


  return (
    <motion.div name="portfolio"
      className="md:h-full"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <SocialLinks />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full">

        <div className="py-8">
          <h1 className="text-4xl font-bold mt-8 inline border-b-4
            border-gray-500">Completed Projects
          </h1>

          <p className="pt-10 text-2xl text-white animate-bounce">Check out my work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md-grid-cols-3 gap-8 
          px-12 sm:px-0">

          {
            portfolios.map(({ id, src, demo, code }) =>
              <div key={id} className="portcontainer shadow-md shadow-black rounded-lg">

                <div className="relative group overflow-hidden hover:rounded-md">
                  <img src={src}
                    alt=""
                    className="rounded-md duration-200 group-hover:scale-105"
                  />
                </div>
                


                <div className="portbutton flex items-center justify-center">

                  <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded
                    hover:scale-105"> <NavLink target="_blank" to={demo}>Demo</NavLink>
                  </button>

                  <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded
                    hover:scale-105"> <NavLink target="_blank" to={code}>Code</NavLink>
                  </button>

                </div>

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
          className='arrowicon w-10 h-10 absolute right-8 top-20 animate-ping'
        />

        <img src={Group3}
          alt='group'
          className='w-10 h-6 absolute bottom-20 right-20 animate-spin'
        />
      </div>
    </motion.div>
  )
}



export default Portfolio;