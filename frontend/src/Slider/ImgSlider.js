import React, { useEffect, useState } from 'react'
import SliderContent from './SliderContent'
import Slider from './Slider'
import Arrows from './Arrows'
import Dots from './Dots'
import './ImgSlider.css'

const len = Slider.length -1

export default function ImgSlider() {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

  return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} Slider={Slider}/>
        <Arrows pre={()=> setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                next={()=> setActiveIndex(activeIndex === len ? 0: activeIndex + 1)}
        />
        <Dots activeIndex={activeIndex} Slider={Slider} onclick={(activeIndex)=> setActiveIndex(activeIndex)}/>
    </div>
  )
}
