import React from 'react'

function Banner(props) {
    return(
        <div className="banner">
            <h1 className="banner__title">{props.title}</h1>
            <img src={props.src} alt="Bannière Kasa" className='banner__img' />
        </div>
    )
}
export default Banner