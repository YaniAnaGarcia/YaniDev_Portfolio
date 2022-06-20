import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/524c4c4c-141b-448d-8973-a3432939d246" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#c6488c] text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'> 
                  ¿Te gustaría trabajar conmigo, o simplemente dejarme un comentario? <br /> Dejame tu mensaje, y te contactaré a la brevedad.
                </p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6]' />
            <input type="email" placeholder='email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2'></textarea>
            <button className='text-white border-2 hover:bg-[#c6488c] hover:border-[#c6488c] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>

    </div>
  )
}

export default Contact;
