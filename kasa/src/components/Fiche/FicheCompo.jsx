import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Slideshow from "../../layout/Slideshow/index"
import Erreur from '../../pages/Erreur'



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
        return (
        <Erreur/>
            )
    }
    return (
        <>
            <Slideshow slides={housing.pictures}/>
        </>


    )


}

export default FicheCompo