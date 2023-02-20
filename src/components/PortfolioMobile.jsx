import React, {useState, useRef, useLayoutEffect} from 'react'
import slide1 from '../assets/Slide1.jpg';
import slide2 from '../assets/Slide2.jpg';
import slide3 from '../assets/Slide3.jpg';
import slide4 from '../assets/Slide4.jpg';
import slide5 from '../assets/Slide5.jpg';
import slide6 from '../assets/Slide6.jpg';
import slide7 from '../assets/Slide7.jpg';
import slide8 from '../assets/Slide8.jpg';
import slide9 from '../assets/Slide9.jpg';
import slide10 from '../assets/Slide10.jpg';
import ArrowLeftWhiteCustom from '../assets/ArrowLeftWhiteCustom.png';
import ArrowRightWhiteCustom from '../assets/ArrowRightWhiteCustom.png';



// This solution works for Vite, upload all images from a folder into an array
// const images = import.meta.glob("../assets/img/avatars/*") 





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



const PortfolioMobile= (autoSlide) => {

 
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
    leftArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -left-[25%] transition ease-in-out hover:scale-[1.15] scale-[1.15]';
  };

  const onSlidesCursorExitLeft = () => {
    leftArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -left-[25%] transition ease-in-out hover:scale-[1.15]';
  };

  const onSlidesHoverRight = () => {
    rightArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -right-[25%] transition ease-in-out hover:scale-[1.15]  scale-[1.15]';
  };

  const onSlidesCursorExitRight = () => {
    rightArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -right-[25%] transition ease-in-out hover:scale-[1.15]';
  };

// TODO:
  useLayoutEffect(() =>{
    console.log('render');  
    
    bgRef.current.className = ' absolute w-screen h-[80vh] z-[5] blur-[3px] mix-blend-overlay';
    leftBgRef.current.className = 'absolute w-screen h-[80vh] z-[4]  blur-[3px] mix-blend-overlay opacity-0';
    rightBgRef.current.className = 'absolute w-screen h-[80vh] z-[4]  blur-[3px] mix-blend-overlay opacity-0';
    
    prevSlideRef.current.className = 'absolute -left-[10vw] bottom-[5vh] w-[50vw] z-[9] cursor-pointer';
    nextSlideRef.current.className = 'absolute -right-[10vw] top-[5vh] w-[50vw] z-[9]  cursor-pointer';
       
    leftMostRef.current.className = 'opacity-0';
    leftMostRef.current.style = '';
    leftRef.current.className = 'opacity-60';
    leftRef.current.style = '';
    midRef.current.className = '';
    midRef.current.style = '';
    rightRef.current.className = 'opacity-60';
    rightRef.current.style = '';
    rightMostRef.current.className = 'opacity-0';
    rightMostRef.current.style = '';

    leftArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -left-[25%] transition ease-in-out hover:scale-[1.0]';
    rightArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -right-[25%] transition ease-in-out hover:scale-[1.0]';
    return () => clearTimeout(); 
  },[slider]);

  const coordScaleX = (nextObj, prevObj) => {
    const wx = nextObj.current.getBoundingClientRect().width /prevObj.current.getBoundingClientRect().width;
    return (wx);
  };
  const coordScaleY = (nextObj, prevObj) => {
    const wy = nextObj.current.getBoundingClientRect().height /prevObj.current.getBoundingClientRect().height;
    return (wy);
  };

  const coordX = (nextObj, prevObj) => {
    const x = (nextObj.current.getBoundingClientRect().x - prevObj.current.getBoundingClientRect().x)
    return (x);
  };

  const coordY = (nextObj, prevObj) => {
    const y = (nextObj.current.getBoundingClientRect().y - prevObj.current.getBoundingClientRect().y)
    return (y);
  };

  const onChangeSlide = (direction) => { 
    if (direction === "left") {
      setTimeout(() => {  
        slides.splice(0, 0, slides.splice(length-1, 1)[0]);  
        setSlider((prev) => ({...prev , ...slides}));

        // setSlider(slider =>  [slider[slider.length-1], ...slider.slice(0, slider.length-1)]);
        },700);

      bgRef.current.className = 'absolute z-[5] w-screen h-[80vh] blur-[3px] mix-blend-overlay opacity-0 duration-primaryDuration';
      leftBgRef.current.className = 'absolute z-[5] w-screen h-[80vh] blur-[3px] mix-blend-overlay animate-fade';      
      prevSlideRef.current.className = 'absolute -left-[10vw] bottom-[5vh] w-[50vw] z-[12] cursor-pointer pointer-events-none';

      leftMostRef.current.className = 'origin-[0%_0%] opacity-60   duration-primaryDuration ';        
      leftMostRef.current.style=`translate:${coordX(leftRef, leftMostRef)}px ${coordY(leftRef, leftMostRef)}px; scale:${coordScaleX(leftRef, leftMostRef)} ${coordScaleY(leftRef, leftMostRef)}`;
      
      leftRef.current.className = `origin-[0%_0%]  duration-primaryDuration `;
      leftRef.current.style=`translate: ${coordX(midRef, leftRef)}px ${coordY(midRef, leftRef)}px; scale: ${coordScaleX(midRef, leftRef)} ${coordScaleY(midRef, leftRef)}`;

      midRef.current.className = 'origin-[0%_0%] duration-primaryDuration opacity-60';
      midRef.current.style=`translate: ${coordX(rightRef, midRef)}px ${coordY(rightRef, midRef)}px; scale: ${coordScaleX(rightRef, midRef)} ${coordScaleY(rightRef, midRef)}`;

      rightRef.current.className = 'origin-[0%_0%]  opacity-0 duration-primaryDuration overflow-y-hidden';
      rightRef.current.style=`translate: ${coordX(rightMostRef, rightRef)}px ${coordY(rightMostRef, rightRef)}px; scale: ${coordScaleX(rightMostRef, rightRef)} ${coordScaleY(rightMostRef, rightRef)}`;

      rightMostRef.current.className = 'hidden';

      leftArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -left-[25%] transition ease-in-out hover:scale-[1.15] pointer-events-none';
      rightArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -right-[25%] transition ease-in-out hover:scale-[1.15] pointer-events-none';

      

    } else if (direction === "right") {setTimeout(() => {
        slides.splice(length-1, 0, slides.splice(0, 1)[0]);
        setSlider((prev) => ({...prev , ...slides}));

        // setSlider(slider =>  [...slider.slice(1), slider[0]]);
      },700);


      bgRef.current.className = 'absolute z-[5] w-screen h-[80vh] blur-[3px] mix-blend-overlay opacity-0 duration-primaryDuration';
      rightBgRef.current.className = 'absolute z-[5] w-screen h-[80vh] blur-[3px] mix-blend-overlay animate-fade';
      nextSlideRef.current.className = 'absolute -right-[10vw] top-[5vh] w-[50vw] z-[12] cursor-pointer pointer-events-none';  

      leftMostRef.current.className = 'hidden ';
      leftRef.current.className = 'transform origin-[0%_0%] opacity-0 duration-primaryDuration overflow-y-hidden';
      leftRef.current.style=`translate: ${coordX(leftMostRef, leftRef)}px 260px; scale: ${coordScaleX(leftMostRef, leftRef)} ${coordScaleY(leftMostRef, leftRef)}`;
 
      midRef.current.className = 'transform origin-[0%_0%] duration-primaryDuration opacity-60';
      midRef.current.style=`translate: ${coordX(leftRef, midRef)}px ${coordY(leftRef, midRef)}px; scale: ${coordScaleX(leftRef, midRef)} ${coordScaleY(leftRef, midRef)}`;


      rightRef.current.className = 'transform origin-[0%_0%] duration-primaryDuration';
      rightRef.current.style=`translate: ${coordX(midRef, rightRef)}px ${coordY(midRef, rightRef)}px; scale: ${coordScaleX(midRef, rightRef)} ${coordScaleY(midRef, rightRef)} `;

      rightMostRef.current.className = 'transform origin-[0%_0%] opacity-60 duration-primaryDuration';
      rightMostRef.current.style=`translate: ${coordX(rightRef, rightMostRef)}px ${coordY(rightRef, rightMostRef)}px; scale: ${coordScaleX(rightRef, rightMostRef)} ${coordScaleY(rightRef, rightMostRef)} `;

      leftArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -left-[25%] transition ease-in-out hover:scale-[1.15] pointer-events-none';
      rightArrowRef.current.className = 'z-[100] w-[8vw] absolute top-[40%] -right-[25%] transition ease-in-out hover:scale-[1.15] pointer-events-none';
    }
  };
 



  return (
    <div name='gallery'  className='relative z-10 flex items-center justify-center w-full min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden '>
      <img ref={leftBgRef} src={slider[1]}  alt="invisible blurred background 1" />
      <img ref={bgRef} src={slider[2]}   alt="blurred shade" />
      <img ref={rightBgRef} src={slider[3]}   alt="invisible blurred background 2" />

   

      <div className="z-10 flex flex-col items-center  max-w-screen">
      

          {/* Pictures */}
        <div className='relative flex items-center w-full py-[10vh] px-[0vw] '>
          <div className="absolute z-[8] opacity-100 -left-[25vw] bottom-[0vw] w-[10vw] ">
            <img ref={leftMostRef} src={slider[0]} alt="hidden item" />
          </div>

          {/* LEFT */} 
          <div 
            onMouseOver={onSlidesHoverLeft} 
            onMouseLeave={onSlidesCursorExitLeft}  
            onClick={() => onChangeSlide('left')}  
            ref={prevSlideRef}
            >


            <div  className="">
              <img ref={leftRef} src={slider[1]} alt="prev work example" />
            </div>
          </div>
          
          {/* CENTER */}
          <div className="w-[65vw] z-[10] ">
            <div className='absolute z-50 left-[50%] -translate-x-2/4 -translate-y-2/4 top-[5px] items-center '>
              <h3 className='text-xl font-bold inline border-b-4 border-[#cd3a55] selection:bg-pink-600'>
                Gallery
              </h3> 
            </div> 
            <button ref={leftArrowRef}
            onClick={() => onChangeSlide('left')} >
              <img  src={ArrowLeftWhiteCustom} alt="prev button" />
            </button>
            <div> 
              <img ref={midRef}  src={slider[2]} alt="frontal work example" />
            </div>
            <button ref={rightArrowRef}
            onClick={() => onChangeSlide('right')}>
              <img src={ArrowRightWhiteCustom} alt="next button" />
            </button>
          </div>

          {/* RIGHT */}
          <div 
              onMouseOver={onSlidesHoverRight}
              onMouseLeave={onSlidesCursorExitRight} 
              onClick={() => onChangeSlide('right')} 
              ref={nextSlideRef}>

            <div>
              <img ref={rightRef} src={slider[3]} alt="next work example" />
            </div>
          </div>   

          <div className="absolute z-[8] opacity-100 -right-[25vw] top-[5vw]  w-[10vw]">
            <img ref={rightMostRef} src={slider[4]} alt="hidden item" />
          </div>         
        </div>
             
      </div>
    </div>
  )
}

export default PortfolioMobile;
