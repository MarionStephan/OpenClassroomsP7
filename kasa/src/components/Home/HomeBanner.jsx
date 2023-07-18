import React from 'react'
import Banner from '../../layout/Banner'
import imgBanner from '../../assets/imgBanner.svg'

function HomeBanner() {
    return (
        <Banner
        title='Chez vous, partout et ailleurs'
        src={imgBanner}
        />
    )
}

export default HomeBanner