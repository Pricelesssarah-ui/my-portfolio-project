import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import Logo from "../../assets/icons/logo.svg";


const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [

        {
            id: 1,
            link: "about"
        },

        {
            id: 2,
            link: "portfolio"
        },

        {
            id: 3,
            link: "experience"
        }
    ];

    return (
        <div className=" navbar flex justify-between items-center opacity-80 w-full h-20 px-4
            text-white">

            <NavLink to="/">
                <img src={Logo} className="pl-4" alt="logo" />
            </NavLink>

            <ul className="hidden md:flex">

                {links.map(({ id, link }) =>
                    <li key={id} className="px-6 cursor-pointer 
                     capitalize font-medium text-white 
                     hover:scale-125 duration-300">

                        <NavLink to={link} smooth duration={300}>{link}</NavLink>

                    </li>

                )}

                <button className="rounded"> <NavLink to="/contact" className="hover:scale-100 duration-300">Let's connect</NavLink> </button>

            </ul>


            <div onClick={() => setNav(!nav)} className="cursor-pointer 
                pr-4 z-10 text-gray-500  md:hidden">

                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>


            {nav && (

                <ul className="flex flex-col justify-center items-center
                    absolute top-0 left-0 w-full h-screen b-screen bg-black text-white">

                    {links.map(({ id, link }) =>

                        <li key={id} className="px-4 cursor-pointer 
                            capitalize py-6 text-4xl">

                            <NavLink
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth duration={300}>
                                {link}
                            </NavLink>

                        </li>

                    )}

                    <button className="rounded"><NavLink to="/contact" className="hover:scale-100 duration-300">Let's connect</NavLink> </button>
                </ul>
            )}



        </div>
    );
};


export default NavBar;



