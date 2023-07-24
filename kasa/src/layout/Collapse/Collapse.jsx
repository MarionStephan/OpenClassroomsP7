import React from "react";
import { useState } from "react";
import arrow from '../../assets/arrow.svg'


function Collapse(props) {
    const [collapse, openCollapse] = useState(false)
    const dropdown = () => { openCollapse(!collapse); }
    const isContentArray = Array.isArray(props.texte);
    return (
        <>
            <div className="collapse">
                <div onClick={dropdown} className="collapse__header">
                    <h2 className="collapse__title">{props.titre}</h2>
                    <img src={arrow} alt="chevron" className={collapse ? "collapse__chevron rotated" : "collapse__chevron"} />
                </div>
                {collapse &&
                    (isContentArray ? (
                        <ul className="collapse__list">
                            {props.texte.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="collapse__texte">{props.texte}</p>
                    ))}
            </div>
        </>
    );
}

export default Collapse;