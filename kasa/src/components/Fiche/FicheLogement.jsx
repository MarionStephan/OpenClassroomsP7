import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from "../../layout/Slideshow/index"
import Erreur from '../../pages/Erreur'
import Tag from './Tag'
import StarRating from './StarRating'
import Collapse from '../../layout/Collapse/Collapse'

function FicheLogement() {
    // État local pour stocker les données des logements
    const [logements, setLogements] = useState([]);
    const apiUrl = process.env.REACT_APP_API_LOGEMENTS;

    console.log(`API Base URL: ${apiUrl}`);
    // Utilisation de useEffect pour charger les données des logements lors du montage du composant
    useEffect(() => {
        fetch(process.env.REACT_APP_API_LOGEMENTS)
            .then((response) => response.json())
            .then((data) => setLogements(data))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);

    // Récupération de l'identifiant de logement à partir des paramètres d'URL
    const { id } = useParams();

    // Recherche du logement correspondant à l'identifiant dans les données chargées
    const housing = logements.find(housing => housing.id === id);

    // Vérification si le logement a été trouvé
    if (housing === undefined) {
        return (
            <Erreur />
        );
    }

    return (
        <>
            {/* Affichage du slideshow avec les images du logement */}
            <Slideshow slides={housing.pictures} />

            {/* Section d'informations sur le logement */}
            <section className='logement'>
                <div className='logement__header' key={id}>
                    <div className='logement__infos'>
                        {/* Affichage du titre, emplacement et tags du logement */}
                        <h1 className='logement__infos__titre'>{housing.title}</h1>
                        <p className='logement__infos__loc'>{housing.location}</p>
                        <p className="logement__infos__tags">
                            {housing.tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
                        </p>
                    </div>
                    <div className='logement__section'>
                        {/* Affichage de l'hôte et de la notation du logement */}
                        <div className='logement__section__host'>
                            <p className='logement__section__host__para'>{housing.host.name}</p>
                            <img className='logement__section__host__img' src={housing.host.picture} alt=""></img>
                        </div>
                        <StarRating rating={parseInt(housing.rating)} />
                    </div>
                </div>
                {/* Section collapsible pour la description et les équipements du logement */}
                <div className='logement__collapse'>
                    <Collapse
                        titre="Description"
                        texte={housing.description}
                    />
                    <Collapse
                        titre="Équipements"
                        texte={housing.equipments}
                    />
                </div>
            </section>
        </>
    );
}

export default FicheLogement;
