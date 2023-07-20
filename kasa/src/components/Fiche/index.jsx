import React, { useState,useEffect } from 'react'
import {NavLink, useParams} from 'react-router-dom'
import Slideshow from "../../layout/Slideshow/index"
import Collapse from "../../layout/Collapse/Collapse"
import Card from "../Home/Card"



function FicheCompo(){
    const [logements, setLogements] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/logements.json')
        .then((response) => response.json())
        .then((data) => setLogements(data))
        .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    const { id } = useParams()
    const housing = logements.find(housing => housing.id === id)
    if (housing === undefined) { 
        return <section className="error_page">
            <p className="error_page_subtitle">Malheureusement, le logement que vous recherchez n'est plus disponible ou n'existe pas.</p>
            <NavLink title='Accueil' end to='/home' className="error_page_link">Retourner sur la page d'accueil</NavLink> 
        </section>
    }

    return (
        <>
        </>


    )


}

export default FicheCompo