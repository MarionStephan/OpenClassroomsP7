import React from 'react'
import { NavLink } from 'react-router-dom'


function ErreurCompo() {
    return(
        <div className='erreur'>
            <h2 className='erreur__code'>404</h2>
            <p className='erreur__para'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className='erreur__link'>Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default ErreurCompo