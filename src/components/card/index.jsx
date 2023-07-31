import React from 'react'
import data from '../../assets/data/logement.json'
import { Link } from 'react-router-dom'


function Card() {
    console.log(data)
  return (
    <section className='card'>
        {data.map((appartement) => (
          <Link to= {`/logement/${appartement.id}`}>
            <article key={appartement.id} className='card__content'>
                <img className ="card__img" src= {appartement.cover} alt= {appartement.title} />
                <h2 className='card__title'>{appartement.title}</h2>
            </article>
            </Link>
        ))}
    </section>
   
  )
}

export default Card