import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apropos from '../../pages/Apropos';
import Erreur from '../../pages/Erreur';
import Home from '../../pages/Home';
import Fiche from '../../pages/Fiche';
import Header from '../../layout/Header';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/apropos" element={<Apropos />} />
                <Route exact path="/fiche/:id" element={<Fiche />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;