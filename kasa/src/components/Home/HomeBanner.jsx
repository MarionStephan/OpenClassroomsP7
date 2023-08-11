import React from 'react'
import Banner from '../../layout/Banner'
import imgBanner from '../../assets/imgBanner.webp'

function HomeBanner() {
    return (
        <Banner
        title='Chez vous, partout et ailleurs'
        src={imgBanner}
        />
    )
}

export default HomeBanner