import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/Logo, sticker flor.png'

export const NavBar = () => {
const[nav, setNav] = useState(false); //seteo el estado inicial en false

const handleClick = () => {
  setNav(!nav)
}

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
      <div>
        <img src={logo} alt="logo" style={{width: '70px'}} />
      </div>
      {/* menu */}
        <ul className='hidden md:flex'> {/* md--> dislpay media  */}
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Skills</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>

      {/* menu hambur. */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {
          !nav ? <FaBars/> : <FaTimes/>
        }
      </div>

      {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Inicio</li>
          <li className='py-6 text-4xl'>Sobre mi</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Proyectos</li>
          <li className='py-6 text-4xl'>Contacto</li>
        </ul>

      {/* social */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          {/* linkdin */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          {/* github */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          {/* mail */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-600'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          {/* cv */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              CV <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
