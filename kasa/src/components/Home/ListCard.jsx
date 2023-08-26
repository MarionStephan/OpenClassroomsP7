import React, { useState,useEffect } from 'react'
import Card from './Card'


function ListCard() {
    const [logements, setLogements] = useState([]);
    const apiUrl = process.env.REACT_APP_API_LOGEMENTS;

    console.log(`API Base URL: ${apiUrl}`);
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_LOGEMENTS)
        .then((response) => response.json())
        .then((data) => setLogements(data))
        .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    return (
        <section className='listCard'>
            {logements.map(({ id, title, cover }) => (
                <Card
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
        </section>
    )
}

export default ListCard