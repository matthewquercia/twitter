import React, {Fragment}  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';

const AppRoutes = () => {
    return (
        <div className="container pt-3">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;