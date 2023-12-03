import React from 'react'

export default function Arrows({pre,next}) {
  return (
    <div className='arrows'>
        <span className='pre' onClick={pre}>
            &#10094;
        </span>
        <span className='next' onClick={next}>
            &#10095;
        </span>
    </div>
  )
}
