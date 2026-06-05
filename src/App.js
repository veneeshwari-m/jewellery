import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
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
