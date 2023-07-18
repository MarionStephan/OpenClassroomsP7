import React from 'react'


function Card({ id, title, cover }) {
    return (

        <a className="card__link" key={id} href={'/fiche/' + id}>
            <figure className='card__figure'>
                <img className='card__img' src={cover} alt={title} />
                <figcaption className='card__figcaption'>
                    <h2 className='card__title'>{title}</h2>
                </figcaption>
            </figure>
        </a>

    )
}
export default Card