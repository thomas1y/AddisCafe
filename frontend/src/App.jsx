import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPopup from "./components/LoginPopup";

import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import PlaceOrderPage from "./pages/PlaceOrder/PlaceOrderPage";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import ErrorPage from "./ErrorPage";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter> {/* ✅ Added this wrapper */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<PlaceOrderPage />} />
          <Route path="/verify-payment" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
