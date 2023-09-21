import React from "react";

import "./Home.css";
import { motion } from "framer-motion";
import Group1 from "../../assets/images/Group (1).png";
import Group2 from "../../assets/images/Group (2).png";
import Group3 from "../../assets/images/Group (3).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >


            <div className="textcontainer flex flex-col justify-center items-center px-2">
                <h1 className="flex justify-center items-center">Hi, I'm Sarah Adebayo.</h1>
                <h2 className="text-4xl flex justify-center items-center">A Frontend Developer.</h2>
                <p className="paratext text-white text-center">who is driven by deep passion for developing web applications
                    that are user-friendly with an overall user experience.
                </p>
                <div>
                    <NavLink to="portfolio" smooth duration={300}
                        className="portfoliobutton group w-fit px-6 py-3 my-5
                        flex items-center rounded-md cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </NavLink>
                </div>
            </div>

            <div>
                <img src={Group1}
                    alt='group'
                    className='w-10 h-6 absolute left-20 top-60 animate-ping'
                />

                <img src={Group2}
                    alt='group'
                    className='w-10 h-6 absolute right-10 top-36 animate-bounce'
                />

                <img src={Group3}
                    alt='group'
                    className='w-10 h-6 absolute bottom-20 right-20 animate-spin'
                />
            </div>
        </motion.div>
    )
}

export default Home;