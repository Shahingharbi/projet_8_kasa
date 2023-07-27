import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import Header from '../header';
import React from 'react';
import Footer from '../footer';

function Router() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>

    );
};

export default Router