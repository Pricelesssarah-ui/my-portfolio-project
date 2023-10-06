import React from 'react';
import "./Contact.css";
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";


import Group1 from "../../assets/images/Group (1).png";
import Arrow from "../../assets/icons/arrow.svg";
import Group3 from "../../assets/images/Group (3).png";


function Contact() {
    return (

        <motion.div name="contact"
            className='w-full h-full p-4'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <div className='flex flex-col p-4 justify-center max-w-screen-lg 
            mx-auto h-full'>

                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline 
                    border-b-4 border-gray-500'>Let's connect
                    </h1>

                    <p className='pt-6 text-2xl text-white'>
                        Let me build something amazing for you!😊
                    </p>
                </div>


                <div className='formContainer'>
                        <div className='mysocials'>
                            <span className='emailSpan flex'>
                                <HiOutlineMail size={30} className='mr-3' />
                                pricelesssarah3@gmail.com
                            </span>

                            <span className='flex'>
                                <HiOutlinePhone size={30} className='mr-3' />
                                +2348162974435
                            </span>
                        </div>

                        <form action="https://getform.io/f/6f961cbd-c9f1-4586-a737-315a7bbc233e"
                            method='POST'
                            className='flex flex-col w-full md:w-1/2'>
                            <h1 className='text-2xl py-5 text-center'>Complete the form below</h1>
                            <input type="text"
                                name='name'
                                placeholder='Enter your name'
                                className='p-2 bg-transparent border-2 rounded-md
                                focus:outline-none'
                            />

                            <input type="text"
                                name='email'
                                placeholder='Enter your email'
                                className='my-4 p-2 bg-transparent border-2 rounded-md
                                focus:outline-none'
                            />

                            <textarea name="message"
                                rows="6"
                                placeholder='Enter your message...'
                                className='p-2 bg-transparent border-2 rounded-md
                                focus:outline-none'>
                            </textarea>


                            <button className='contactbutton px-6 py-2 my-8 rounded
                                mx-auto flex items-center hover:scale-100 duration-300'>
                                Let's talk
                            </button>
                        </form>
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

export default Contact;
