import React from 'react'

export default function Dots({activeIndex, onclick, Slider}) {
  return (
    <div className='all-dots'>
        {Slider.map(
            (slide, index) => (
                <span key={index} className={`${activeIndex === index ? "dot active-dot": "dot"}`}
                onClick={()=> onclick(index)}
                ></span>
            )
        )}
    </div>
  )
}
