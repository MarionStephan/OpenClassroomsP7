import React from 'react'


function FicheHeader({ id, title, location, host, picture }) {
  return (
    <div className='logement__header' key={id}>
      <div className='logement__infos'>
      <h1 className='logement__infos__titre'>{title}</h1>
      <p className='logement__infos__loc'>{location}</p>
      </div>
      <div className='logement__host'>
        <p className='logement__host__para'>{host}</p>
        <img className='logement__host__img' src={picture} alt=""></img>
      </div>
    </div>
  )
}

export default FicheHeader