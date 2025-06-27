import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage"; // đảm bảo đường dẫn đúng
import Register from "./components/pages/RegisterPage/RegisterPage"; // đảm bảo đường dẫn đúng
import OtpCode from "./components/pages/OtpCode/OtpCode"; // đảm bảo đường dẫn đúng
import PasswordAuthen from "./components/pages/PasswordAuthen/PasswordAuthen"; // đảm bảo đường dẫn đúng
import Home from "./components/pages/Home/Home";
import Dashboard from "./components/pages/dashboard/dashboard"; // đảm bảo đường dẫn đúng
import DashboardSection from "./components/pages/dashboardSection/DashboardSection";
import ListNewItem from "./components/pages/ListNewItem/MainContenSection";
import MainContentSection from "./components/pages/ListNewItem/MainContenSection";
import SelectNewItem from "./components/pages/selectNewItem/selectItem";
import PricingAvailability from "./components/pages/PricingAvailability/PricingAvailabilitySection";
import  ReviewPublish  from "./components/pages/ReviewPublish/ReviewPublishSection";
import Succes from "./components/pages/Succesfull/Succes";
import ListItem from "./components/pages/ListItem/ListItem";
import RentalRequestsSection from "./components/pages/RentalRequest/Request";
import DashBoardRental from "./components/pages/RentalRequest/DashBoardRental";
import Profile from "./components/pages/profile/Profile";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardSection" element={<DashboardSection />} />
        <Route path="/ListNewItem" element={<MainContentSection />} />
        <Route path="/SelectNewItem" element={<SelectNewItem />} />
        <Route path="/PricingAvailability" element={<PricingAvailability />} />
        <Route path="/ReviewPublish" element={<ReviewPublish />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/ListItem" element={<ListItem />} />
        <Route path="/rental-requests" element={<RentalRequestsSection />} />
        <Route path="/dashboard-rental" element={<DashBoardRental />} />
        <Route path="/profile" element={<Profile />} />
        {/* Thêm các route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default App;
