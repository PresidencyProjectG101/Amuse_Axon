import React from 'react'

export default function SliderContent({activeIndex, Slider}) {
  return (
    <section>
        {Slider.map((slide, index)=>(
            <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                <img className='slide-image' src={slide.urls} alt=''></img>
            </div>
        ))}
    </section>
  )
}
