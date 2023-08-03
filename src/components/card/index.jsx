import React from 'react'
import data from '../../assets/data/logement.json'
import { Link } from 'react-router-dom'


function Card() {
    
  return (
    <section className='card'>
        {data.map((appartement) => (
          <Link key={appartement.id} to= {`/logement/${appartement.id}`}>
            <article  className='card__content'>
                <img className ="card__img" src= {appartement.cover} alt= {appartement.title} />
                <div className='card__bottom'>
                <h2 className='card__title'>{appartement.title}</h2>
                </div>
            </article>
            </Link>
        ))}
    </section>
   
  )
}

export default Card