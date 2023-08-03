import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from "../../layout/Slideshow/index"
import Erreur from '../../pages/Erreur'
import Tag from './Tag'
import StarRating from './StarRating'
import Collapse from '../../layout/Collapse/Collapse'



function FicheLogement() {
    const [logements, setLogements] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/logements.json')
            .then((response) => response.json())
            .then((data) => setLogements(data))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    const { id } = useParams()
    const housing = logements.find(housing => housing.id === id)
    console.log(housing)
    if (housing === undefined) {
        return (
            <Erreur />
        )
    }
    return (
        <>
            <Slideshow slides={housing.pictures} />
            <section className='logement'>
                <div className='logement__header' key={id}>
                    <div className='logement__infos'>
                        <h1 className='logement__infos__titre'>{housing.title}</h1>
                        <p className='logement__infos__loc'>{housing.location}</p>
                        <p className="logement__infos__tags">
                            {housing.tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
                        </p>
                    </div>
                    <div className='logement__section'>
                        <div className='logement__section__host'>
                            <p className='logement__section__host__para'>{housing.host.name}</p>
                            <img className='logement__section__host__img' src={housing.host.picture} alt=""></img>
                        </div>
                        <StarRating rating={parseInt(housing.rating)} />
                    </div>

                </div>
                <div className='logement__collapse'>
                    <Collapse
                        titre="Description"
                        texte={housing.description}
                    />
                    <Collapse
                        titre="Équipements"
                        texte={housing.equipments} />
                </div>
            </section>
        </>
    )

}

export default FicheLogement