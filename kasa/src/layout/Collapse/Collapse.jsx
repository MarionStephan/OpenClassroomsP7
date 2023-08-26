import React from "react";
import { useState } from "react";
import arrow from '../../assets/arrow.svg'

function Collapse(props) {
    // Utilisation du hook d'état pour gérer l'état d'ouverture ou de fermeture du contenu
    const [collapse, openCollapse] = useState(false);
    
    // Fonction pour inverser l'état d'ouverture/fermeture du contenu
    const dropdown = () => { openCollapse(!collapse); }
    
    // Vérification si le contenu passé est un tableau
    const isContentArray = Array.isArray(props.texte);
    
    return (
        <>
            <div className="collapse">
                {/* En-tête du collapsible, cliquer ici pour ouvrir/fermer */}
                <div onClick={dropdown} className="collapse__header">
                    <h2 className="collapse__title">{props.titre}</h2>
                    {/* Icône chevron qui tourne en fonction de l'état */}
                    <img src={arrow} alt="chevron" className={collapse ? "collapse__chevron rotated" : "collapse__chevron"} />
                </div>
                {/* Afficher le contenu si le collapsible est ouvert */}
                {collapse &&
                    (isContentArray ? (
                        // Si le contenu est un tableau, afficher chaque élément en tant qu'élément de liste
                        <ul className="collapse__list">
                            {props.texte.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        // Si le contenu n'est pas un tableau, afficher simplement le texte
                        <p className="collapse__texte">{props.texte}</p>
                    ))}
            </div>
        </>
    );
}

export default Collapse;
