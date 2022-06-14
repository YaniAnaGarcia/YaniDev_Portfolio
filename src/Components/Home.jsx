import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*contenedor*/} {/* mx- margin px_padding */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#c6488c]'>Hola, mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Yanina Garcia</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>#Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Eaque neque quia adipisci facere officiis ex a est eligendi.</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c6488c] hover:border-[#c6488c]'>
                    Ver proyectos <HiArrowNarrowRight className='ml-3'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home;
