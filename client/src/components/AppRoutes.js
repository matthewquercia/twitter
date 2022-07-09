import React, {Fragment}  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Login from './Login';

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
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default AppRoutes;