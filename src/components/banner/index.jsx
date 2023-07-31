import React from 'react'

function Banner({image , text}) {
  
  return (
    <section className='banner'>
        <div className='banner__txt'>
            <img  src={image} alt="bannière" />
        </div>
        <div className='banner__txt'>
            <h1>
                {text}
            </h1>
        </div>
    </section>
  )
}

export default Banner