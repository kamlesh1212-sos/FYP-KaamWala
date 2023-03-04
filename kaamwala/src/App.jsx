import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import Landingnav from "./components/landing/landingnav";
import Landing from "./components/landing/landing";
import VendorRegistrationForm from "./components/landing/VendorRegistrationForm";
import ElectricianServices from "./components/landing/ElectricianServices";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Routes */}

        <Route path="/" element={<Landingnav />}>
          <Route path="" element={<Landing />} />
          <Route
            path="/VendorRegistrationForm"
            element={<VendorRegistrationForm />}
          />
          <Route
            path="/ElectricianServices"
            element={<ElectricianServices />}
          />
          {/* <Route path="landing" element={<Landing />} /> */}
          {/* <Route path="support" element={<Support />} />
          <Route path="features" element={<Features />} />
          <Route path="" element={<Contact />} /> */}
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/recovery" element={<Recovery />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<Reset />} /> */}

        <Route />
      </Routes>
    </Router>
  );
}
export default App;
