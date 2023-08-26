import React, { useState,useEffect } from 'react'
import Collapse from '../../layout/Collapse/Collapse'

function AproposCollapse() {
    const [aPropos, setApropos] = useState([])
    useEffect(() =>{
        fetch(process.env.REACT_APP_API_APROPOS)
        .then((response) => response.json())
        .then((data) => setApropos(data))
        .catch((error) => console.error('Erreur lors du chargement des données : ', error));

    },[]);
    return (
        <div>
        {aPropos.map(({aProposTitre, aProposTexte })=>(
        <Collapse
        titre={aProposTitre}
        texte={aProposTexte}
        />
        ))}
        </div>
    )
}


export default AproposCollapse