import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center pt-[20vh] '>
            <p className='text-[#cd3a55]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl  xl:text-7xl font-bold text-[#ccd6f6]'>Sergey</h1>
            <h2 className='text-4xl sm:text-5xl  xl:text-7xl font-bold text-[#8892b0]'>I am an Auckland based photographer</h2>
            <p className='text-[#8892b0] text-sm sm:base lg:text-lg xl:text-xl  py-4 max-w-[700px]'>I focus on portrait and family photography with a splash of art effects, light play and Photoshop editing. <br/> If you like my style then feel free to contact me and book your first fantasy photo-shoot. <br/>Believe me, it will be a pure joy! <br/><br/>P.S. Also, happy to collaborate in creative ideas without much editing if it is your choice.</p>

            {/* Expand the IF explanation */}

        </div>
    </div>
  )
}

export default Home