import React from 'react';

import "./Experience.css";

import html from '../../assets/images/html.jpg';
import css from '../../assets/images/css.png';
import javaScript from '../../assets/images/javascript.png';
import tailwind from '../../assets/images/tailwind.png';
import reactImage from '../../assets/images/react.png';
import github from '../../assets/images/github.png';




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
      style: "shadow-gray-500"
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-gray-500"
    },


    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-gray-500"
    },


    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-gray-500"
    },


    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500"
    },

    {
      id: 4,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },

    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500"
    },
    
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-500"
    }
  ]

  return (
    <div name="experience" className='w-full h-full'> 

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full'>

        <div className=''>
          <p className='text-4xl font-bold border-b-4 border-gray-500
            p-2 inline'>Experiences
          </p>

          <p className='py-6'>Technologies I have worked with</p>
        </div>


        <div className='w-full grid grid-row-2 sm:grid-cols-3 gap-8
          text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({id, src, title, style}) =>

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
    </div>
  )
}

Experience.propTypes = {

}



export default Experience;

