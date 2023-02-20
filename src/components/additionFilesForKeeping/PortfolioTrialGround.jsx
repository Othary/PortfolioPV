import React, {useState, useRef, useEffect} from 'react'
import slide1 from '../../assets/Slide1.jpg';
import slide2 from '../../assets/Slide2.jpg';
import slide3 from '../../assets/Slide3.jpg';
import slide4 from '../../assets/Slide4.jpg';
import slide5 from '../../assets/Slide5.jpg';
import slide6 from '../../assets/Slide6.jpg';
import slide7 from '../../assets/Slide7.jpg';
import slide8 from '../../assets/Slide8.jpg';
import slide9 from '../../assets/Slide9.jpg';
import slide10 from '../../assets/Slide10.jpg';
// import slide12 from '../assets/Slide12.jpg';
import ArrowLeftWhiteCustom from '../../assets/ArrowLeftWhiteCustom.png';
import ArrowRightWhiteCustom from '../../assets/ArrowRightWhiteCustom.png';



// This solution works for Vite, upload all images from a folder into an array
// const images = import.meta.glob("../assets/img/avatars/*") 



// TODO: replace sliding duration with one variable

// TODO: reproduce the same with a pre-existing slider and measure productivity

// TODO: add loading spinner
// TODO: auto slide with pose one hover 

let slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10
];

const PortfolioTrialGround= (autoSlide) => {

  const [slider, setSlider] = useState(slides);  

  const length = slides.length;
  
  const bgRef = useRef(null);
  const leftBgRef = useRef(null);
  const rightBgRef = useRef(null);

  const leftMostRef = useRef(null);
  const leftRef = useRef(null);
  const midRef = useRef(null);
  const rightRef = useRef(null);  
  const rightMostRef = useRef(null);

  const prevSlideRef = useRef(null);
  const nextSlideRef = useRef(null);

  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const onSlidesHoverLeft = () => {
    leftArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] left-[1%] sm:-left-[2%] transition ease-in-out hover:scale-[1.15] scale-[1.15]';
  }

  const onSlidesCursorExitLeft = () => {
    leftArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] left-[1%] sm:-left-[2%] transition ease-in-out hover:scale-[1.15]';
  }

  const onSlidesHoverRight = () => {
    rightArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] right-[1%] sm:-right-[2%] transition ease-in-out hover:scale-[1.15]  scale-[1.3]';
  }

  const onSlidesCursorExitRight = () => {
    rightArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] right-[1%] sm:-right-[2%] transition ease-in-out hover:scale-[1.15]';
  }


  useEffect(() =>{
    console.log('render');  
    
    bgRef.current.className = ' absolute w-screen  blur-[3px] mix-blend-overlay';
    leftBgRef.current.className = 'absolute w-screen  blur-[3px] mix-blend-overlay opacity-0';
    rightBgRef.current.className = 'absolute w-screen  blur-[3px] mix-blend-overlay opacity-0';
    
    prevSlideRef.current.className = 'max-w-[10vw] sm:max-w-[25vw] z-[9] cursor-pointer sm:p-[2vw]'
    nextSlideRef.current.className = 'max-w-[10vw] sm:max-w-[25vw] z-[9]  cursor-pointer sm:p-[2vw]'
    
    leftMostRef.current.className = 'opacity-0';
    leftMostRef.current.style = '';
    leftRef.current.className = 'opacity-0 sm:opacity-100';
    leftRef.current.style = '';
    midRef.current.className = '';
    midRef.current.style = '';
    rightRef.current.className = `opacity-0 sm:opacity-100`;
    rightRef.current.style = '';
    rightMostRef.current.className = 'opacity-0';
    rightMostRef.current.style = '';

    leftArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] left-[1%] sm:-left-[2%] transition ease-in-out hover:scale-[1.15]';
    rightArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] right-[1%] sm:-right-[2%] transition ease-in-out hover:scale-[1.15]';
    return () => clearTimeout(); 
  },[slider]);

  const coordScaleX = (nextObj, prevObj) => {
    const wx = nextObj.current.getBoundingClientRect().width /prevObj.current.getBoundingClientRect().width;
    return (wx)
  }
  const coordScaleY = (nextObj, prevObj) => {
    const wy = nextObj.current.getBoundingClientRect().height /prevObj.current.getBoundingClientRect().height;
    return (wy)
  }

  const coordX = (nextObj, prevObj) => {
    const x = (nextObj.current.getBoundingClientRect().x - prevObj.current.getBoundingClientRect().x)
    return (x)
  }

  const onChangeSlide = (direction) => { 
    if (direction === "left") {
      setTimeout(() => {  
        slides.splice(0, 0, slides.splice(length-1, 1)[0]);  
        setSlider((prev) => ({...prev , ...slides}));
      },2700);       
      bgRef.current.className = 'absolute w-screen  blur-[3px] mix-blend-overlay opacity-0 duration-primaryDuration';
      leftBgRef.current.className = 'absolute w-screen  blur-[3px] mix-blend-overlay animate-fade';      
      prevSlideRef.current.className = 'max-w-[10vw] sm:max-w-[25vw] z-[12] cursor-pointer  sm:p-[2vw] pointer-events-none';

      leftMostRef.current.className = 'transform origin-[0%_50%] opacity-0 sm:opacity-100 sm:animate-fade  duration-primaryDuration ';        
      leftMostRef.current.style=`translate:${coordX(leftRef, leftMostRef)}px; scale:${coordScaleX(leftRef, leftMostRef)} ${coordScaleY(leftRef, leftMostRef)}`;
      
      leftRef.current.className = `transform origin-[0%_50%] duration-primaryDuration animate-fade sm:animate-none`;
      leftRef.current.style=`translate: ${coordX(midRef, leftRef)}px; scale: ${coordScaleX(midRef, leftRef)} ${coordScaleY(midRef, leftRef)}`;

      midRef.current.className = 'transform origin-[0%_50%] duration-primaryDuration opacity-0 sm:opacity-100';
      midRef.current.style=`translate: ${coordX(rightRef, midRef)}px; scale: ${coordScaleX(rightRef, midRef)} ${coordScaleY(rightRef, midRef)}`;

      rightRef.current.className = 'transform  translate-x-[7vw] scale-[0.5] opacity-0 duration-primaryDuration overflow-y-hidden';
      rightMostRef.current.className = 'hidden';

      leftArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] left-[1%] sm:-left-[2%] transition ease-in-out hover:scale-[1.15]';
      rightArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] right-[1%] sm:-right-[2%] transition ease-in-out hover:scale-[1.15]';

      

    } else if (direction === "right") {setTimeout(() => {
        slides.splice(length-1, 0, slides.splice(0, 1)[0]);
        setSlider((prev) => ({...prev , ...slides}));
      },2700);

      bgRef.current.className = 'absolute w-screen  blur-[3px] mix-blend-overlay opacity-0 duration-primaryDuration';
      rightBgRef.current.className = 'absolute w-screen  blur-[3px] mix-blend-overlay animate-fade';
      nextSlideRef.current.className = 'max-w-[10vw] sm:max-w-[25vw] z-[12] cursor-pointer  sm:p-[2vw] pointer-events-none';      
      leftMostRef.current.className = 'hidden ';
      leftRef.current.className = 'transform  -translate-x-[7vw] scale-[0.5] opacity-0 duration-primaryDuration overflow-y-hidden';
 
      midRef.current.className = 'transform origin-[0%_50%] duration-primaryDuration opacity-0 sm:opacity-100';
      midRef.current.style=`translate: ${coordX(leftRef, midRef)}px; scale: ${coordScaleX(leftRef, midRef)} ${coordScaleY(leftRef, midRef)}`;


      rightRef.current.className = 'transform origin-[0%_50%] duration-primaryDuration animate-fade sm:animate-none';
      rightRef.current.style=`translate: ${coordX(midRef, rightRef)}px; scale: ${coordScaleX(midRef, rightRef)} ${coordScaleY(midRef, rightRef)} `;

      rightMostRef.current.className = 'transform origin-[0%_50%] opacity-0 sm:opacity-100 sm:animate-fade duration-primaryDuration';
      rightMostRef.current.style=`translate: ${coordX(rightRef, rightMostRef)}px; scale: ${coordScaleX(rightRef, rightMostRef)} ${coordScaleY(rightRef, rightMostRef)} `;

      leftArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] left-[1%] sm:-left-[2%] transition ease-in-out hover:scale-[1.15]';
      rightArrowRef.current.className = 'z-[100] w-[8vw] sm:w-[3vw] absolute top-[35%] xl:top-[40%] md:top-[42%] sm:top-[44%] right-[1%] sm:-right-[2%] transition ease-in-out hover:scale-[1.15]';
    }
  }
 

  return (
    <div name='gallery' className='relative z-10 flex items-center justify-center w-full min-h-screen bg-[#0a192f] border-2 border-[#0a192f] text-gray-300 overflow-hidden sm:pt-[8vh]'>
      <img ref={leftBgRef} src={slider[1]} className='absolute w-screen  blur-[3px] mix-blend-overlay opacity-0 '  alt="" />
      <img ref={rightBgRef} src={slider[3]} className='absolute w-screen  blur-[3px] mix-blend-overlay opacity-0 '  alt="" />

      <img ref={bgRef} src={slider[2]} className='absolute w-screen  blur-[3px] mix-blend-overlay ' alt="" />
       
      <div className="z-10 flex flex-col items-center pt-[4vh] max-w-screen">
        <h3 className='text-xl sm:text-2xl xl:text-4xl font-bold inline border-b-4 border-[#cd3a55] selection:bg-pink-600 '>
          Gallery
        </h3>

        <div name='slider' className='block relative pt-[3vh] sm:pt-[5vh] sm:mb-[5vh]'>

            {/* Pictures */}
          <div className='flex items-center w-full pb-[4vh] sm:pb-0   '>
            <div className="absolute z-[8] opacity-100 left-0 max-w-[0vw] sm:max-w-[10vw] ">
              <img ref={leftMostRef} src={slider[0]} alt="" />
            </div>

            {/* LEFT */}
            <div 
              onMouseOver={onSlidesHoverLeft} 
              onMouseLeave={onSlidesCursorExitLeft}  
              onClick={() => onChangeSlide('left')}  
              ref={prevSlideRef}>
              <button ref={leftArrowRef}>
                <img  src={ArrowLeftWhiteCustom} alt="" />
              </button>
              <div  className="">
                <img ref={leftRef} src={slider[1]} alt="" />
              </div>
            </div>
            
            {/* CENTER */}
            <div className="max-w-[80vw] sm:max-w-[40vw] xl:max-w-[calc(15vw+15vw)] z-[10] ">
              <div> 
                <img ref={midRef}  src={slider[2]} alt="" />
              </div>
            </div>

            {/* RIGHT */}
            <div onMouseOver={onSlidesHoverRight}
               onMouseLeave={onSlidesCursorExitRight} 
               onClick={() => onChangeSlide('right')} 
               ref={nextSlideRef}>
              <button ref={rightArrowRef}>
                <img src={ArrowRightWhiteCustom} alt="" />
              </button>
              <div>
                <img ref={rightRef} src={slider[3]} alt="" />
              </div>
            </div>   

            <div className="absolute z-[8] opacity-100 right-0 max-w-[0.1vw] sm:max-w-[10vw]">
              <img ref={rightMostRef} src={slider[4]} alt="" />
            </div>         
          </div>
        </div>     
      </div>
    </div>
  )
}

export default PortfolioTrialGround;