import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"; // đảm bảo đường dẫn đúng
import Register from "./pages/RegisterPage/RegisterPage"; // đảm bảo đường dẫn đúng
import OtpCode from "./pages/OtpCode/OtpCode"; // đảm bảo đường dẫn đúng
import PasswordAuthen from "./pages/PasswordAuthen/PasswordAuthen"; // đảm bảo đường dẫn đúng
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpCode />} />
        <Route path="/password-authen" element={<PasswordAuthen />} />
        <Route path="/home" element={<Home />} />
        {/* Thêm các route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default App;
