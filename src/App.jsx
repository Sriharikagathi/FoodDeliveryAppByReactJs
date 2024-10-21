// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;