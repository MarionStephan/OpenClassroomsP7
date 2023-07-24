import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from "../../layout/Slideshow/index"
import Erreur from '../../pages/Erreur'
import FicheHeader from './FicheHeader'
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
    if (housing === undefined) {
        return (
            <Erreur />
        )
    }
    return (
        <>
            <Slideshow slides={housing.pictures} />
            <section className='logement'>
                <FicheHeader key={housing.id}
                title={housing.title}
                location={housing.location}
                host={housing.host.name}
                picture={housing.host.picture} />
            
                <div className='logement__section'>
                    <p className="logement__section__tags">
                        {housing.tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
                    </p>
                    <StarRating rating={parseInt(housing.rating)} />
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