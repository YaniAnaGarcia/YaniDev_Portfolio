import React from 'react';
import Css from '../assets/css.png';
import Github from '../assets/github.png';
import HTML from '../assets/html.png';
import Js from '../assets/javascript.png';
import Node from '../assets/node.png';
import ReactJs from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Redux from '../assets/redux-logo.png';
import Firebase from '../assets/firebase.png'
//import PostgreSQL from '';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* contenedor */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* header */}
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#c6488c] '>Skills</p>
                <p className='py-4'>Tecnologías con las que trabajo.</p>
            </div>
            {/* body */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                {/* HTML */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                {/* CSS */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                {/* JAVASCRIPT */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Js} alt="JavaScript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                {/* REACT */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJs} alt="React icon" />
                    <p className='my-4'>REACT</p>
                </div>
                {/* NODE */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="NodeJs icon" />
                    <p className='my-4'>NODE</p>
                </div>
                {/* TAILWIND */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                {/* GITHUB */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                {/* redux */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Redux} alt="Redux icon" />
                    <p className='my-4'>REDUX</p>
                </div>
                {/* sequelize */}
                {/* express */}
                {/* postgreSQL */}
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={} alt="PostgreSQL icon" />
                    <p className='my-4'>POSTGRE SQL</p>
                </div> */}
                {/* firebase */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
                    <p className='my-4'>FIREBASE</p>
                </div>
                {/* mongo */}
                {/* nextJS */}
            </div>
            <div>
                {/* <p className='text-4xl font-bold inline border-b-4 border-[#c6488c] '>Skills</p> */}
                <p className='py-4'>Aprendiendo sobre.</p>
            </div>
        </div>
    </div>
  )
}

export default Skills;