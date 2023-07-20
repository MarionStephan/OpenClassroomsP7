import React, { useState,useEffect } from 'react'
import Card from './Card'

function ListCard() {
    const [logements, setLogements] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/logements.json')
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