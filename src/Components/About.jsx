import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#c6488c]'>
                        Sobre mi
                    </p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, molestias?
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae commodi, placeat cupiditate accusantium dicta nesciunt debitis incidunt non nihil quo fugiat ipsum sapiente ratione! Ducimus expedita debitis nesciunt cum fugit necessitatibus ex minus, cupiditate consectetur, recusandae aperiam illo qui?
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About;
