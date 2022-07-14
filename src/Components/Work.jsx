import React from 'react';
import p1 from '../assets/powerGym.jpeg';
import p2 from '../assets/LandingFood.jpeg';
import p3 from '../assets/WeatherAppFull.jpeg';
import p4 from '../assets/TodoList.jpeg';
import p5 from '../assets/proyecto-CardinalH.jpeg';
import {FaGithub} from 'react-icons/fa';
import {HiLink} from 'react-icons/hi';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* encabezado */}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#c6488c]'>Proyectos</p>
                <p className='py-6'>Algunos de los proyectos en los que estuve trabajando.</p>
            </div>
            {/* card container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* card item - gym*/}
                <div 
                    style={{backgroundImage:`url(${p1})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Gym Control 
                        </span>
                        <p className='text-sm text-justify px-2'>
                            Tecnologías utilizadas: React, Redux, CSS, Node.js, Express, PostgreSQL y Sequelize.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://pf-gym-final.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <HiLink/>
                                </button>
                            </a>
                            <a href="https://github.com/agskbr/PF-Gym-Control-App" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <FaGithub/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item - foodApp */}
                <div 
                    style={{backgroundImage:`url(${p2})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Food App
                        </span>
                        <p className='text-sm text-justify px-2'>
                            Tecnologías utilizadas: PostgreSQL, Node.js, JS, express, React, Redux, CSS.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://henry-food-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <HiLink/>
                                </button>
                            </a>
                            <a href="https://github.com/YaniAnaGarcia/Henry-Food" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <FaGithub/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item - weatherApp */}
                <div 
                    style={{backgroundImage:`url(${p3})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather-App
                        </span>
                        <p className='text-sm text-justify px-2'>
                            Tecnologías utilizadas: React.Js, CSS puro. Axios para la comunicación con la API Y Vercel, para el deploy
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://weather-app-one-flax.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <HiLink/>
                                </button>
                            </a>
                            <a href="https://github.com/YaniAnaGarcia/Weather-App" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <FaGithub/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item - TodoList*/}
                <div 
                    style={{backgroundImage:`url(${p4})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Todo-List App
                        </span>
                        <p className='text-sm text-justify px-2'>
                            Tecnologías utilizadas: ReactJs, Hooks, y CSS.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://app-to-do-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <HiLink/>
                                </button>
                            </a>
                            <a href="https://github.com/YaniAnaGarcia/App-ToDo" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <FaGithub/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card item- Cardinal */}
                <div 
                    style={{backgroundImage:`url(${p5})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Cardinal Home
                        </span>
                        <p className='text-sm text-justify px-2'>
                            Tecnologías utilizadas: HTML, CSS, Js.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://proyecto-cardinalhome.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <HiLink/>
                                </button>
                            </a>
                            <a href="https://github.com/YaniAnaGarcia/cardinalHome" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c6488c] hover:text-white'>
                                    <FaGithub/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work;
