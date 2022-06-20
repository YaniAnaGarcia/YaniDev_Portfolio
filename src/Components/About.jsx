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
                            Full stack developer, con marcada orientacion al Desarrollo Front End.
                        </p>
                    </div>
                    <div>
                        <p>
                            Comencé a estudiar desarrollo web de manera autodidacta, como un hobby. Pero a mediados de 2021 decidí capacitarme de manera formal, e ingresé a Henry. Fue todo un desafío y requirió de mucho esfuerzo, pero en mayo de 2022 finalmente, logré egresarme. <br />
                            Actualmente sigo capacitandome, y buscando mi primer empleo formal como #Developer.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About;
