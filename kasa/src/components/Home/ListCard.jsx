import React from 'react'
import Card from './Card'
import logements from '../../data/logements.json'

function ListCard() {
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