import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage.js';
import Menu from './Pages/Menu.js';
import Reservation from './Pages/Reservation.js';
import OrderOnline from './Pages/OrderOnline.js';
import Login from './Pages/Login.js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/about" element="AboutPage" />
      <Route path="/menu" element="Menu" />
      <Route path="/reservation" element="Reservation"/>
      <Route path="/order-online" element="OrderOnline" />
      <Route path="/login" element="Login"/>
    </Routes>
  )
}

export default AppRoutes