import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";

import "./SocialLinks.css";



function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedIn.com/in/sarahadebayo",
            style: 'rounded-tr-md',
        },

        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Pricelesssarah-ui",
            style: 'rounded-tr-md',
        },

        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:pricelesssarah3@gmail.com",
            style: 'rounded-tr-md',
        },

        {
            id: 4,
            child: (
                <>
                    Resume <FaFilePdf size={30} />
                </>
            ),
            href: "https://docs.google.com/document/d/1bv739NQUphp0TMXHq0Hnu7QL3X4hykGpNZZu5eJlgyo/edit?usp=sharing",
            style: 'rounded-br-md',
            download: "true",
        }
    ]

    return (
        <div className="flex flex-col top-[63%] left-0 fixed">
            <ul>

                {links.map(({ id, child, href, style, download }) =>

                    <li key={id} className={`socials flex justify-between items-center w-40 h-14
                        px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 + " " + ${style}`}>
                        <a href={href}
                            target="_blank"
                            className="flex justify-between items-center w-full text-white"
                            download={true}>

                            {child}

                        </a>
                    </li>

                )}

            </ul>
        </div>
    )
}

export default SocialLinks



