import React from 'react'
import banniere from '../../assets/images/Image_source.png'

function Banner() {
  return (
    <section className='banner'>
        <div className='banner__txt'>
            <img  src= {banniere} alt="bannière" />
        </div>
        <div className='banner__txt'>
            <h1>
                Chez vous, partout et ailleurs
            </h1>
        </div>
    </section>
  )
}

export default Banner