import React from 'react';
import {FaFacebook, FaLinkedin, FaInstagramSquare} from 'react-icons/fa'

const Contacts = () => {

  return (
    <> 
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center py-[8vh] px-[3vw] overflow-hidden'>
        <form method='POST' action="https://getform.io/f/857b9972-3ece-4abb-a0b5-5f6815204b04" className='flex flex-col w-screen sm:w-[500px] px-4 mt-4 sm:mt-4 xl:mt-0'>
            <div className='pt-[8vh] pb-8 text-center'>
                <p className='text-xl sm:text-2xl xl:text-4xl font-bold inline border-b-4 border-[#cd3a55] text-gray-300 '>Contact</p>
                <p className='text-gray-300 pt-5 text-sm sm:base lg:text-lg xl:text-xl'>If you have any questions submit the form below</p>
            </div>
            <input className=' p-2 bg-[#ccd6d6] rounded-t-sm' type="text" name='name' placeholder='Name' required/>
            <input className='my-4 p-2 bg-[#ccd6d6]' type="email" name='email' placeholder='Email' required />
            <textarea className='bg-[#ccd6d6] p-2 rounded-b-sm' name="message" id="" rows="10" placeholder='Message' required></textarea>
            <button className='text-[#ccd6f6] text-sm sm:base lg:text-lg xl:text-xl border-[#ccd6f6] border-2 hover:border-[#cd3a55] hover:bg-[#cd3a55] px-4 py-3 my-8 mx-auto flex items-center rounded'>Submit</button>            
        </form>        
    </div>
    <div className='w-full flex justify-center items-center text-xs sm:text-sm  bg-[#0a192f] px-[3vw] '>
            <ul className='flex flex-row w-screen sm:w-[500px] px-4 xl:mt-0 xl:hidden'>
                <li className='basis-1/3 bg-[#cd3a55] rounded-tl-lg py-[1vw]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.instagram.com/serj_othary/">
                        Instagram <FaInstagramSquare size={25}/>
                    </a>
                </li>
                <li className = 'basis-1/3 bg-[#3A55CD] py-[1vw]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/SerOthary">
                        Facebook <FaFacebook size={24}/>
                    </a>
                </li>
                <li  className='basis-1/3 bg-[#2c9b87] rounded-tr-lg py-[1vw]'> 
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/sergey-ivannikov-22b557160/">
                        LinkedIn <FaLinkedin size={25}/>
                    </a>
                </li>           
            </ul>
        </div>
    </>
    
  )
}


export default Contacts