import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Pages
import LoginPage from "./components/pages/LoginPage/LoginPage";
import Register from "./components/pages/RegisterPage/RegisterPage";
import OtpCode from "./components/pages/OtpCode/OtpCode";
import PasswordAuthen from "./components/pages/PasswordAuthen/PasswordAuthen";
import Login from "./components/pages/login/login";

// Home and Dashboard
import Home from "./components/pages/Home/Home";
import Dashboard from "./components/pages/dashboard/dashboard";
import DashboardSection from "./components/pages/dashboardSection/DashboardSection";

// Item Creation Flow
import ListNewItemPage from "./components/pages/ListNewItem/ListNewItemPage";
import MainContentSection from "./components/pages/ListNewItem/MainContenSection";
import SelectNewItemPage from "./components/pages/selectNewItem/SelectNewItemPage";
import SelectNewItem from "./components/pages/selectNewItem/selectItem";
import PricingPage from "./components/pages/PricingAvailability/PricingPage";
import PricingAvailability from "./components/pages/PricingAvailability/PricingAvailabilitySection";
import ReviewPublish from "./components/pages/ReviewPublish/ReviewPublishSection";

// Others
import Succes from "./components/pages/Succesfull/Succes";
import ListItem from "./components/pages/ListItem/ListItem";
import RentalRequestsSection from "./components/pages/RentalRequest/Request";
import DashBoardRental from "./components/pages/RentalRequest/DashBoardRental";
import Profile from "./components/pages/profile/Profile";
import EditProfile from "./components/pages/EditProfile/Main";
import Rating from "./components/pages/Rating/Review";
import OrderDetails from "./components/pages/OrderDetails/OrderDetailsPage";
import Div from "./components/pages/CancelRental/Div";
import ReportPage from "./components/pages/ReportIssue/ReportPage";
import ChatPage from "./components/pages/Chat/ChatPage";
import ChatDetailPage from "./components/pages/Chat/ChatDetailPage";

import Wallet from "./components/pages/WalletPage/Wallet";
import SearchItems from "./components/pages/SearchItems/Body";
import { ProductListSection } from "./components/pages/ProductList/ProductListSection";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import Booking from "./components/pages/Booking/Booking";
import Payment from "./components/pages/Payment/Payment";
import SuccessPayment from "./components/pages/SuccessPayment/SuccessPayment";
import OrdersSection from "./components/pages/OrderPage/OrderSection";
import ConfirmPage from "./components/pages/Confirm/ConfirmPage";
import OrderSectioPage from "./components/pages/OrderPage/OrderSectioPage";
import Dashboards from "./components/pages/dashboardSection/DashBoards";
import Rental from "./components/pages/RentalRequest/Request";
import Admin from "./components/pages/AdminPage/Admin";
import WithdrawalRequestsSection from "./components/pages/AdminPage/WithdrawalRequestsSection";
import DashboardStatsSection from "./components/pages/AdminPage/DashboardStatsSection";     
  
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpCode />} />
        <Route path="/password-authen" element={<PasswordAuthen />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/admin" element={<Admin />} />

        {/* Item Listing Flow */}
        <Route path="/ListNewItem" element={<ListNewItemPage />} />
        <Route path="/MainContentSection" element={<MainContentSection />} />
        <Route path="/SelectNewItemPage" element={<SelectNewItemPage />} />
        <Route path="/SelectNewItem" element={<SelectNewItem />} />
        <Route path="/PricingPage" element={<PricingPage />} />
        <Route path="/PricingAvailability" element={<PricingAvailability />} />
        <Route path="/ReviewPublish" element={<ReviewPublish />} />
        <Route path="/succes" element={<Succes />} />

        {/* Other Features */}
        <Route path="/ListItem" element={<ListItem />} />
        <Route path="/rental-requests" element={<RentalRequestsSection />} />
        <Route path="/dashboard-rental" element={<DashBoardRental />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/Order-Detail" element={<OrderDetails />} />
        <Route path="/Cancel-Rental" element={<Div />} />
        <Route path="/Report" element={<ReportPage />} />

        {/* Chat Pages */}
        <Route path="/message" element={<ChatPage />} />
        <Route path="/chat-detail/:id" element={<ChatDetailPage />} />

        {/* E-commerce Flow */}
        <Route path="/SearchItems" element={<SearchItems />} />
        <Route path="/products" element={<ProductListSection />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* da keo api nhung chua fix request chuan*/}
        <Route path="/booking" element={<Booking />} />

        {/* da keo api */}
        <Route path="/payment" element={<Payment />} />

        {/* da keo api */}
        <Route path="/successpayment" element={<SuccessPayment />} />
        <Route path="/orderpage" element={<OrderSectioPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
};

export default App;
