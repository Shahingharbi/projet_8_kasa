import React from 'react'

function Tag({tags}) {
  return (
    <div className='tag'>
        {tags.map ((tag , index ) => (
            <p 
            className='tag__content'
            key={index}>
            {tag}
            </p>
        ))}     
    </div>
  )
}

export default Tag