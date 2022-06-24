import React, {Fragment}  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Navbar from './Navbar';

const AppRoutes = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container pt-3">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default AppRoutes;