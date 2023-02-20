import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaLinkedin, FaInstagramSquare} from 'react-icons/fa'
import {Link} from 'react-scroll';
// import { gsap } from "gsap";
import Logo from '../assets/DreamSplash7.png';

// gsap.from('li' , {duration: 1, x: '-100%'})

const NavBar = ({setAutoSlide}) => {
    const [nav, setNav] = useState(false);


    const handleClick = () => setNav(!nav);   


  return (
    <div className='fixed w-full h-[8vh] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  z-20'>
        <div className='flex items-center'>
            <img className='absolute top-0 w-[25vh]' src={Logo} alt="Logo" />
        </div>
        {/* menu */}
        
        <ul className='hidden md:flex text-base sm:text-base xl:text-2xl'>
            <li><Link activeClass="border-b-2 border-[#cd3a55] text-[#cd3a55] font-bold" spy={true} to="home" smooth={true} duration={500}>Home</Link></li>       
            <li><Link activeClass="border-b-2 border-[#cd3a55] text-[#cd3a55] font-bold" spy={true} to="gallery" smooth={true} duration={500}>Gallery</Link></li>
            {/* <li><Link activeClass="border-b-2 border-[#cd3a55] text-[#cd3a55] font-bold" spy={true} to="skills" smooth={true} duration={500}>Skills</Link></li> */}
            <li><Link activeClass="border-b-2 border-[#cd3a55] text-[#cd3a55] font-bold" spy={true} to="pricing" smooth={true} duration={500}>Pricing</Link></li>
            <li><Link activeClass="border-b-2 border-[#cd3a55] text-[#cd3a55] font-bold" spy={true} to="contact" smooth={true} duration={500}>Contacts</Link></li>
        </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
            {/*   */}

        {/* mobile menu */} 
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192ff5] flex flex-col justify-center items-center text-4xl'} >
            <li className='py-6'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6'><Link onClick={handleClick} to="gallery" smooth={true} duration={500}>Gallery</Link></li>
            {/* <li className='py-6'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li> */}
            <li className='py-6'><Link onClick={handleClick} to="pricing" smooth={true} duration={500}>Pricing</Link></li>
            <li className='py-6'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contacts</Link></li>
        </ul>

        {/* social icons */}
        <div className='hidden xl:flex fixed flex-col top-[40%] left-0'>
            <ul>
                <li className='social-icon bg-[#cd3a55] rounded-tr-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.instagram.com/serj_othary/">
                        Instagram  <FaInstagramSquare size={30}/>
                    </a>
                </li>
                <li className = 'social-icon bg-[#3A55CD]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/SerOthary">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li  className='social-icon bg-[#2c9b87] rounded-br-lg'> 
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/sergey-ivannikov-22b557160/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>           
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar
