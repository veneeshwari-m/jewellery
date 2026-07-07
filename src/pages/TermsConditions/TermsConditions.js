import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TermsContent } from './TermsContent';
import './TermsConditions.css';

const TermsConditions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.state?.section || 'Terms & Conditions');

  useEffect(() => {
    if (location.state?.section) {
      setActiveMenu(location.state.section);
    }
  }, [location.state]);
  
  // Sidebar data based on screenshot
  const sidebarData = [
    {
      title: 'Terms & Conditions',
      subItems: ['Greetings from Thangamayil Jewellery!!!', 'Owned and operated by']
    },
    {
      title: 'Annotation',
      subItems: []
    },
    {
      title: 'User Agreement',
      subItems: [
        'Amendments', 
        'Eligibility Criteria',
        'Registration Obligation',
        'User Registration',
        'Contact & Personal Information',
        'Email Verification',
        'Acceptance of User Agreement & Privacy Policy',
        'Create User Info',
        'Confirm Registration',
        'Registration for Guest User',
        'Tax & Value Added Charges',
        'Termination of Agreement'
      ]
    },
    {
      title: 'Products Online',
      subItems: [
        'Product Availability',
        'Photography',
        'Product Customization',
        'Product Price',
        'Confirmation of Order',
        'Payments'
      ]
    },
    {
      title: 'Lifetime Exchange',
      subItems: []
    },
    {
      title: 'Return, Exchange & Refund Policy',
      subItems: [
        'i)Terms for Return before Delivery',
        'ii)Terms for Return on defects',
        'iii)Terms for Return on Dissatisfaction - Limited Duration',
        'Terms for Gifts',
        'Terms for Exchange'
      ]
    },
    {
      title: 'Repairs',
      subItems: []
    },
    {
      title: 'Insurance',
      subItems: []
    },
    {
      title: 'Shipping Policy',
      subItems: [
        'Delivery Schedule',
        'Shipment Procedure',
        'Force Majeure',
        'Return Shipments',
        'Packaging'
      ]
    },
    {
      title: 'Cancellation Terms',
      subItems: [
        'Cancellation from Customer',
        'Cancellation by Company'
      ]
    },
    {
      title: 'Fraudulent Transactions',
      subItems: [
        'Legal Actions'
      ]
    },
    {
      title: 'Rights about the Content',
      subItems: [
        'Website Contents',
        'Third Party Content',
        'Ownership of Content, Copyrights and Trademark'
      ]
    },
    {
      title: 'Communications',
      subItems: [
        'Electronic Communications',
        'Feedbacks, Reviews and Customer Interaction',
        'Indemnification'
      ]
    },
    {
      title: 'Privacy Policy',
      subItems: [
        'Information from User',
        'Information to be Utilized',
        'Information Sharing',
        'Duration of Information Stored',
        'Security about contents',
        'Securities for Transaction'
      ]
    },
    {
      title: 'Law and Jurisdiction',
      subItems: []
    },
    {
      title: 'Modification Rights',
      subItems: []
    },
    {
      title: 'Disclaimer',
      subItems: []
    }
  ];

  const scrollToSubItem = (subTitle) => {
    // Generate the same ID format we used in TermsContent (lowercase, hyphenated)
    const id = subTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const element = document.getElementById(id);
    if (element) {
      // Find the scrollable container and scroll to the element's offset
      const container = document.querySelector('.terms-content-scrollable');
      if (container) {
        container.scrollTo({
          top: element.offsetTop - container.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="terms-page">
      <div className="terms-container">
        
        <div className="terms-breadcrumb-area">
          <svg 
            className="terms-home-icon" 
            onClick={() => { navigate('/'); window.scrollTo(0,0); }} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="terms-breadcrumb-separator">&gt;</span>
          <h1 className="terms-main-title">TERMS CONDITIONS</h1>
        </div>

        <div className="terms-layout">
          {/* Sidebar */}
          <div className="terms-sidebar">
            <div className="terms-sidebar-scrollable">
              <ul className="terms-sidebar-menu">
                {sidebarData.map((menu, index) => (
                  <li key={index} className="terms-sidebar-item-container">
                    <div 
                      className={`terms-sidebar-item ${activeMenu === menu.title ? 'active' : ''}`}
                      onClick={() => setActiveMenu(menu.title)}
                    >
                      {menu.title}
                    </div>
                    {menu.subItems.length > 0 && activeMenu === menu.title && (
                      <ul className="terms-sidebar-submenu">
                        {menu.subItems.map((sub, idx) => (
                          <li 
                            key={idx} 
                            className="terms-sidebar-subitem"
                            onClick={() => scrollToSubItem(sub)}
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="terms-content">
            <div className="terms-content-scrollable">
              {TermsContent[activeMenu]}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;
