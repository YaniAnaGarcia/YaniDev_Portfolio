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
                            {/* Apasionada por la Tecnología y el desarrollo. Enfocada en el area Front-End. */}
                            Soy creativa, curiosa , y dispuesta a afrontar nuevos desafíos y trabajar duro para superarlos🚀
                        </p>
                    </div>
                    <div>
                        <p>
                            {/* Comencé a estudiar desarrollo web de manera autodidacta, como un hobby. Pero a mediados de 2021 decidi hacerlo de manera formal, e ingresé a Henry <br />
                            Actualmente sigo capacitandome, y buscando mi primer empleo formal como #Developer. */}
                            Soy desarrolladora Full Stack 💻 y Analista en RRHH. Luego de varios años dedicados al area de RRHH, redirigí mi perfil hacia la programación. 
                            Poseo gran motivación y capacidad para aprender cosas nuevas. Actualmente estoy aprendiendo Next.js y diseño UX/UI para ampliar mis skills. 
                            Además, mi experiencia previa en el área de RRHH, me permitio enriquecer mis soft skills aportando valor a mi perfil profesional.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About;
