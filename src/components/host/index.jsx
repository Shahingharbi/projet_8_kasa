import React from 'react'

function Host({nom , photo}) {
  return (
    <div className='host'>
        <p className='host__nom'>{nom}</p>
        <img className='host__photo' src={photo} alt= {nom}   />
    </div>
  )
}

export default Host