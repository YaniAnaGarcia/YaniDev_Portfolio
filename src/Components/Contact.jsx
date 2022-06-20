import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4 '>
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
        <div className='lg:hidden flex  '>
          {/* linkdin */}
          <li className='w-[60px] h-[60px] flex hover:mt-[-10px] duration-300  bg-blue-600'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/yaninagarcia-fullstackdeveloper/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}/>
            </a>
          </li>

          {/* github */}
          <li className='w-[60px] h-[60px] flex hover:mt-[-10px] duration-300  ml-[8px] bg-[#333333]'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/YaniAnaGarcia" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30}/>
            </a>
          </li>

          {/* mail */}
          <li className='w-[60px] h-[60px] flex hover:mt-[-10px] duration-300  ml-[8px]  bg-violet-600'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:yaninagarcia.ana@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail" target="_blank" rel="noopener noreferrer">
              <HiOutlineMail size={30}/>
            </a>
          </li>
          
          {/* cv */}
          <li className='w-[60px] h-[60px] flex hover:mt-[-10px] duration-300  ml-[8px]  bg-slate-400'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1FdzYvOTz8r2Pq2_rnwbbb5gBbD-nQFhn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </div>

    </div>
  )
}

export default Contact;
