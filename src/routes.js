import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


const Router = () => {
    return (
    
                <Routes>
                <Route path='/' index element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                </Routes>
       
    );
}

export default Router