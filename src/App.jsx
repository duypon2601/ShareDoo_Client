import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage"; // đảm bảo đường dẫn đúng
import Register from "./components/pages/RegisterPage/RegisterPage"; // đảm bảo đường dẫn đúng
import OtpCode from "./components/pages/OtpCode/OtpCode"; // đảm bảo đường dẫn đúng
import PasswordAuthen from "./components/pages/PasswordAuthen/PasswordAuthen"; // đảm bảo đường dẫn đúng
import Home from "./components/pages/Home/Home";
import Dashboard from "./components/pages/dashboard/dashboard"; // đảm bảo đường dẫn đúng

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpCode />} />
        <Route path="/password-authen" element={<PasswordAuthen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<dashboard />} />
        {/* Thêm các route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default App;
