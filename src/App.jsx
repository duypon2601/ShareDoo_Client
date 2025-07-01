  import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import LoginPage from "./components/pages/LoginPage/LoginPage";
    import Register from "./components/pages/RegisterPage/RegisterPage";
    import OtpCode from "./components/pages/OtpCode/OtpCode";
    import PasswordAuthen from "./components/pages/PasswordAuthen/PasswordAuthen";
    import Home from "./components/pages/Home/Home";
    import Dashboard from "./components/pages/dashboard/dashboard";
    import DashboardSection from "./components/pages/dashboardSection/DashboardSection";
    // import ListNewItem from "./components/pages/ListNewItem/MainContenSection";
    import MainContentSection from "./components/pages/ListNewItem/MainContenSection";
    import SelectNewItem from "./components/pages/selectNewItem/selectItem";
    import PricingAvailability from "./components/pages/PricingAvailability/PricingAvailabilitySection";
    import ReviewPublish from "./components/pages/ReviewPublish/ReviewPublishSection";
    import Succes from "./components/pages/Succesfull/Succes";
    import ListItem from "./components/pages/ListItem/ListItem";
    import RentalRequestsSection from "./components/pages/RentalRequest/Request";
    import DashBoardRental from "./components/pages/RentalRequest/DashBoardRental";
    import Profile from "./components/pages/profile/Profile";
    import Login from "./components/pages/login/login";
    import SearchItems from "./components/pages/SearchItems/Body";
    import { ProductListSection } from "./components/pages/ProductList/ProductListSection";
    import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
    import Booking from "./components/pages/Booking/Booking";
    import Payment from "./components/pages/Payment/Payment";
    import SuccessPayment from "./components/pages/SuccessPayment/SuccessPayment";
    import OrdersSection from "./components/pages/OrderPage/OrderSection";
    import ConfirmPage from "./components/pages/Confirm/ConfirmPage";

    const App = () => {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<OtpCode />} />
            <Route path="/password-authen" element={<PasswordAuthen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/SearchItems" element={<SearchItems />} />
            <Route path="/ProductList" element={<ProductListSection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/successpayment" element={<SuccessPayment />} />
            <Route path="/orderpage" element={<OrdersSection />} />
            <Route path="/confirm" element={<ConfirmPage />} />
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
          </Routes>
        </Router>
      );
    };

    export default App;