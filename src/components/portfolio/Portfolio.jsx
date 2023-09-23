import React from "react";
import "./Portfolio.css";

import { motion } from "framer-motion";

import Netflix from "../../assets/images/myImg.png";
import Netflixp from "../../assets/images/myImg.png";
import Netflixi from "../../assets/images/myImg.png";
import Netflixx from "../../assets/images/myImg.png";


function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: Netflix,
    },

    {
      id: 2,
      src: Netflixp,
    },

    {
      id: 3,
      src: Netflixi,
    },

    {
      id: 4,
      src: Netflixx,
    }
  ]


  return (
    <motion.div name="portfolio"
      className="md:h-full"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full">

        <div className="py-8">
          <h1 className="text-4xl font-bold mt-8 inline border-b-4
            border-gray-500">Completed Projects
          </h1>

          <p className="py-6 text-2xl animate-bounce">Check out my work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md-grid-cols-3 gap-8 
          px-12 sm:px-0">

          {
            portfolios.map(({ id, src }) =>
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                <img src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />


                <div className="flex items-center justify-center">

                  <button className="w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105">Demo
                  </button>

                  <button className="w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105">Code
                  </button>

                </div>

              </div>

            )
          }
        </div>

      </div>
    </motion.div>
  )
}



export default Portfolio;