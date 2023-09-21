import React from 'react';
import "./Contact.css";



function Contact() {
  return (

    <div name="contact" className='w-full h-full p-4'>
    
        <div className='flex flex-col p-4 justify-center max-w-screen-lg 
            mx-auto h-full'> 

            <div className='pb-8'>
                <p className='text-4xl font-bold inline 
                    border-b-4 border-gray-500'>Contact
                </p>

                <p className='py-6'>
                    Submit the form below to get in touch with me
                </p>
            </div>


            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/6f961cbd-c9f1-4586-a737-315a7bbc233e"
                method='POST' 
                className='flex flex-col w-full md:w-1/2'>

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
                        rows="10"
                        placeholder='Enter your message...'
                        className='p-2 bg-transparent border-2 rounded-md
                        focus:outline-none'>
                    </textarea>


                    <button className='contactbutton px-6 py-3 my-8 
                        mx-auto flex items-center rounded-md'>
                        Let's talk
                    </button>






                </form>
            </div>

        </div>

    </div>
  )
}

export default Contact;
