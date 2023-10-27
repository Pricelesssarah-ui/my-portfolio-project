import React from "react";
import "./Portfolio.css";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SocialLinks from "../socialinks/SocialLinks";

import Group1 from "../../assets/images/Group (1).png";
import Arrow from "../../assets/icons/arrow.svg";
import Group3 from "../../assets/images/Group (3).png";
import DietApp from "../../assets/images/dietApp.png";
import Learnz from "../../assets/images/learnz_pic.png";
import ConferenceApp from "../../assets/images/conferenceApp.png";
import Patricia from "../../assets/images/patricia.png";


function Portfolio({ nav }) {

  const portfolios = [
    {
      id: 1,
      src: Learnz,
      demo: "https://learnz.vercel.app",
      code: "https://github.com/learnable-2022/LMS-YC-2-FE.git",
    },

    {
      id: 2,
      src: ConferenceApp,
      demo: "https://conference-app-pied.vercel.app",
      code: "https://github.com/Pricelesssarah-ui/conference-app.git"
    },

    {
      id: 3,
      src: DietApp,
      demo: "https://diet-plan-app.vercel.app/",
      code: "https://github.com/Pricelesssarah-ui/Diet-plan-app.git",
    },

    {
      id: 4,
      src: Patricia,
      demo: "https://patricia-crypto.vercel.app",
      code: "https://github.com/Pricelesssarah-ui/PatriciaCrypto.git",
    }
  ]


  return (
    <motion.div name="portfolio"
      className={`md:h-full ${nav ? "hidden" : ""}`}

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