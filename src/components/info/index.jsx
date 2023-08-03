import React from 'react'

function Info({ titre , localisation}) {
  return (
    <div className='info'>
        <h1 className='info__titre'>{titre}</h1>
        <h3 className='info__localisation'>{localisation}</h3>
    </div>
  )
}

export default Info