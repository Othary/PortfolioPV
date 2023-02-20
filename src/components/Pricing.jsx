import React from 'react';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[8vh] pb-5 sm:pb-3 xl:pb-5'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px]  w-full gap-8'>
                <div className='text-center  pb-8 '>
                    <p className='text-xl sm:text-2xl xl:text-4xl font-bold inline border-b-4 border-[#cd3a55] '>Pricing</p>
                </div>
                <div></div>
            </div>
            <table className='max-w-[800px] lg:max-w-[1000px] text-xs sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl table-auto border-separate border-spacing-2'>
                <thead>
                    <tr className='bg-[#cd3a5540] text-sm sm:text-lg lg:text-xl '>
                        <th className='rounded-md' >Packages</th>
                        <th className='rounded-md'>Description</th>                        
                        <th className='rounded-md'>Cost</th>
                    </tr>
                </thead>
                <tbody className='text-sm sm:base lg:text-lg xl:text-xl'>
                    <tr className='odd:bg-[#3a55cd14] even:bg-[#2c9b8714]'>
                        <td className='text-center rounded-md px-1 sm:px-2'>Initial</td>
                        <td className='text-center rounded-md px-1 sm:px-2'>50 edited images, 20 retouched images, 5 images exclusive author's editing, basic shooting duration two hours</td>                        
                        <td className='text-center rounded-md px-1 sm:px-2'>$250</td>
                    </tr>                
                    <tr className='odd:bg-[#3a55cd14] even:bg-[#2c9b8714]'>
                        <td className='text-center rounded-md px-1 sm:px-2'>Art</td>
                        <td className='text-center rounded-md px-1 sm:px-2'>1 high resolution art image edited in pre-requested style</td>                        
                        <td className='text-center rounded-md px-1 sm:px-2'>Extra $100-$200</td>
                    </tr>
                    <tr className='odd:bg-[#3a55cd14] even:bg-[#2c9b8714]'>
                        <td className='text-center rounded-md px-1 sm:px-2'>Golden hours</td>
                        <td className='text-center rounded-md px-1 sm:px-2'>Scheduling the shooting in early or late hours in order to catch the most beautiful light of the day</td>                        
                        <td className='text-center rounded-md px-1 sm:px-2'>Extra $50</td>
                    </tr>
                    <tr className='odd:bg-[#3a55cd14] even:bg-[#2c9b8714]'>
                        <td className='text-center rounded-md px-1 sm:px-2'>Transfer</td>
                        <td className='text-center rounded-md px-1 sm:px-2'>I will pick you up and deliver home safe and sound.</td>                        
                        <td className='text-center rounded-md px-1 sm:px-2'>$35/hours <br/> + fuel cost</td>
                    </tr>
                    <tr className='odd:bg-[#3a55cd14] even:bg-[#2c9b8714]'>
                        <td className='text-center rounded-md px-1 sm:px-2'>Tour Guide</td>
                        <td className='text-center rounded-md px-1 sm:px-2'>Creation of a whole day travel itinerary setting off for a trip of wonders. <br/> I will provide you with a detailed list of places we can visit not further than four hours of driving from Auckland. Including mountains, beaches, caves, forests, waterfalls and, of course, wineries. <br/> The list of edited pictures will stay the same, but all other images (approx. 500-2000) will be provided via a cloud storage link. <br/>Duration of the tour up to 15 hours</td>                        
                        <td className='text-center rounded-md px-1 sm:px-2'>$35/hour</td>
                    </tr>
                    <tr className='odd:bg-[#3a55cd14] even:bg-[#2c9b8714]'>
                        <td className='text-center rounded-md px-1 sm:px-2'>Additional options</td>
                        <td className='text-center rounded-md px-1 sm:px-2'>Organization tasks such as a studio rental, hiring a stylist, buying props for special effects, hiring a second person in case of a complicated work </td>                        
                        <td className='text-center rounded-md px-1 sm:px-2'>As per receipts</td>
                    </tr>
                </tbody>              
            </table>
        </div>
    </div>
  )
}

export default Pricing