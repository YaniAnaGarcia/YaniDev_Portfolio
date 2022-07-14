import React from 'react'

const Learning = () => {
  return (
    <div name='learning' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* contenedor */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* header */}
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#c6488c] '>Learning</p>
                <p className='py-4'>Tecnologías con las que trabajo.</p>
            </div>
        </div>
    </div>
  )
}

export default Learning;
