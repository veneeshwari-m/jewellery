const fs = require('fs');
const path = require('path');

// 1. Fix App.js
const appPath = path.join(__dirname, 'src', 'App.js');
let appContent = `import React from 'react';
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
`;
fs.writeFileSync(appPath, appContent);

// 2. Fix Footer.js
const footerPath = path.join(__dirname, 'src', 'components', 'Footer', 'Footer.js');
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(/<<<<<<< HEAD[\s\S]*?=======\n/g, '');
footerContent = footerContent.replace(/>>>>>>> .*\n/g, '');
fs.writeFileSync(footerPath, footerContent);

// 3. Fix Home.css
const homeCssPath = path.join(__dirname, 'src', 'components', 'Home', 'Home.css');
let homeCssContent = fs.readFileSync(homeCssPath, 'utf8');
// Keep HEAD changes for Home.css (which likely has our gradient and rate board changes)
homeCssContent = homeCssContent.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n[\s\S]*?>>>>>>> .*\n/g, '$1');
fs.writeFileSync(homeCssPath, homeCssContent);

// 4. Fix Home.js
const homeJsPath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
let homeJsContent = fs.readFileSync(homeJsPath, 'utf8');

// For the first conflict (Navigation Bar deletion), we accept the incoming change (remove it)
// because Layout.js now has the Navbar.
homeJsContent = homeJsContent.replace(/<<<<<<< HEAD\n\s*{\/\* 2\. NAVIGATION BAR.*?=======\n/s, '');
homeJsContent = homeJsContent.replace(/>>>>>>> .*\n/g, '');

// For the second conflict (Footer and Modals deletion), we want to KEEP our Simulator Panel
// but we can remove the Rate History Modal from Home.js if Layout.js handles it. Wait, Layout.js doesn't use Redux.
// Let's just keep our HEAD changes for the second conflict block so that the Simulator Panel remains.
homeJsContent = homeJsContent.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n/s, '$1');

fs.writeFileSync(homeJsPath, homeJsContent);

console.log("Conflicts resolved.");
