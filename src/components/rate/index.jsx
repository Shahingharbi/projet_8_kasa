import React from 'react'
import EtoileRouge from '../../assets/images/etoile_rouge.png'
import EtoileGris from '../../assets/images/etoile_grise.png'

function Rate({etoile}) {
    const etoiles = [];

    for (let i = 0 ; i < etoile ; i++) {
        etoiles.push(<img
            className='rate__etoile' 
            key={i} 
            src={EtoileRouge} 
            alt='etoile rouge'
            />)
    }

    for (let i = etoile; i < 5 ; i++) {
        etoiles.push(<img
            className='rate__etoile' 
            key={i} 
            src={EtoileGris} 
            alt='etoile grise' 
            />)
    }
  return (
    <div className='rate'>
        {etoiles}
    </div>
  )
}

export default Rate