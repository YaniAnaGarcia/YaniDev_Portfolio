import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/Logo, sticker flor.png';
import { Link } from 'react-scroll';

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
          <li>
            <Link to="home" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>

      {/* menu hambur. */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {
          !nav ? <FaBars/> : <FaTimes/>
        }
      </div>

      {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              Sobre Mi
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Proyectos
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>

      {/* social */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0 '>
        <ul>
          {/* linkdin */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/yaninagarcia-fullstackdeveloper/" target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          {/* github */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/YaniAnaGarcia" target="_blank" rel="noopener noreferrer">
              Github <FaGithub size={30}/>
            </a>
          </li>
          {/* mail */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-600'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:yaninagarcia.ana@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail" target="_blank" rel="noopener noreferrer">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          {/* cv */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400'> {/* ml-->marginleft */}
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1FdzYvOTz8r2Pq2_rnwbbb5gBbD-nQFhn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              CV <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
