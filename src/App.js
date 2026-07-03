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
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
