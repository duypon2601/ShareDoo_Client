import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import Register from "./components/pages/RegisterPage/RegisterPage";
import OtpCode from "./components/pages/OtpCode/OtpCode";
import PasswordAuthen from "./components/pages/PasswordAuthen/PasswordAuthen";
import Home from "./components/pages/Home/Home";
import Dashboard from "./components/pages/dashboard/dashboard";
import DashboardSection from "./components/pages/dashboardSection/DashboardSection";
import ListNewItem from "./components/pages/ListNewItem/MainContenSection";
import ListNewItemPage from "./components/pages/ListNewItem/ListNewItemPage";
import SelectNewItemPage from "./components/pages/selectNewItem/SelectNewItemPage";
import PricingPage from "./components/pages/PricingAvailability/PricingPage";
import ReviewPublish from "./components/pages/ReviewPublish/ReviewPublishSection";
import Succes from "./components/pages/Succesfull/Succes";
import ListItem from "./components/pages/ListItem/ListItem";
import RentalRequestsSection from "./components/pages/RentalRequest/Request";
import DashBoardRental from "./components/pages/RentalRequest/DashBoardRental";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/login/login";
import EditProfile from "./components/pages/EditProfile/Main";
import Rating from "./components/pages/Rating/Review";
import OrderDetails from "./components/pages/OrderDetails/OrderDetailsPage";
import Div from "./components/pages/CancelRental/Div";
import ReportPage from "./components/pages/ReportIssue/ReportPage";
import ChatPage from "./components/pages/Chat/ChatPage"
import ChatDetailPage from "./components/pages/Chat/ChatDetailPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpCode />} />
        <Route path="/password-authen" element={<PasswordAuthen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardSection" element={<DashboardSection />} />
        <Route path="/ListNewItem" element={<ListNewItemPage />} />
        <Route path="/SelectNewItemPage" element={<SelectNewItemPage />} />
        <Route path="/PricingPage" element={<PricingPage />} />
        <Route path="/ReviewPublish" element={<ReviewPublish />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/ListItem" element={<ListItem />} />
        <Route path="/rental-requests" element={<RentalRequestsSection />} />
        <Route path="/dashboard-rental" element={<DashBoardRental />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/Order-Detail" element={<OrderDetails />} />
        <Route path="/Cancel-Rental" element={<Div />} />
        <Route path="/Report" element={<ReportPage />} />
        <Route path="/message" element={<ChatPage />} />
        <Route path="/chat-detail/:id" element={<ChatDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
