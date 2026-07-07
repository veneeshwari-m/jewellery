import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import StoreLocator from './components/StoreLocator/StoreLocator';
import AuspiciousDays from './components/AuspiciousDays/AuspiciousDays';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import ContactUs from './pages/ContactUs/ContactUs';
import EnquiryForm from './pages/EnquiryForm/EnquiryForm';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import RateHistory from './pages/RateHistory/RateHistory';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';
import AboutUs from './pages/AboutUs/AboutUs';
import CorporateGovernance from './pages/CorporateGovernance/CorporateGovernance';
import NewsAndMedia from './pages/NewsAndMedia/NewsAndMedia';
import BangleSizeGuide from './pages/BangleSizeGuide/BangleSizeGuide';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/auspicious-days" element={<AuspiciousDays />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/enquiry-form" element={<EnquiryForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/corporate-governance" element={<CorporateGovernance />} />
            <Route path="/news-and-media" element={<NewsAndMedia />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/bangle-size-guide" element={<BangleSizeGuide />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/category/:categoryId" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/rate-history" element={<RateHistory />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
