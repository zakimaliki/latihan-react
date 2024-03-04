import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Product from '../../pages/Product';
import About from '../../pages/About';
import Detail from '../../pages/Detail';
import Page404 from '../../pages/Page404';

const Router = () => {
    return (
        <BrowserRouter>
            <nav>
                {/* <Link to="/Home">Home</Link> */}
                <Link to="/">Home</Link>

                <br />
                <Link to="/About">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Product />} />

                {/* <Route path="/" element={<Navigate to="/home" replace="true" />} /> */}
                {/* <Route path="/Home" element={<Product />} /> */}
                <Route path="/About" element={<About />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/product/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router