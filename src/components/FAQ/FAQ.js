import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css';
import './FAQ.css';

const faqData = [
  { question: "Do I need to sign up an account to place an order?", answer: "You can browse through the collection and select the jewel you like. But at the time of purchasing from the cart, you will be required to create an account which is fairly a simple process. Creating an account will ensure you purchase in a safe and secure environment." },
  { question: "What should I do, if I have forgotten my password?", answer: "If you have forgotten your password, click here to change it or follow the 'FORGOT PASSWORD' instructions on the SIGN IN menu." },
  { question: "How do I know that the products you sell are BIS Hallmarked?", answer: "We can guarantee that every item we sell is BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product" },
  { question: "Are the colors of products shown on the website accurate?", answer: "Care has been taken while photographing the jewels to provide the users with better viewing experience and make it appear as accurate as possible. High resolution pictures of the Jewels are captured to give the users the feel of design, the way it is crafted, the expertise and the workmanship, the color and the size in detail. However, there can be a slight variation in the photograph with the actual product and the cause can be due to lighting, camera and sensor quality, photo effects, reflection of stones or the background etc." },
  { question: "How do I know if an item is in stock?", answer: "Majority of the products displayed on the website will be available in stock as only stock on hand products ensure a hassle free and quick delivery to the customer. However, sometimes there may be a situation where the particular product is either sold or not available. In such a case Thangam will arrange it either from a third party or manufacture the same in their factory and will pass on the information to the customer either through email or through phone. In situations where the neither of this is possible the amount will be refunded to their respective account." },
  { question: "Is it safe to use my credit card online at Thangam ?", answer: "We take appropriate precautions to protect the security of Personally Identifiable Information. We encrypt certain sensitive information using Secure Socket Layer (SSL) technology to ensure that your Personally Identifiable Information is safe as it is transmitted to us. However, no data transmission over the Internet can be guaranteed to be completely secure." },
  { question: "Does Thangam ship to multiple addresses?", answer: " Unfortunately, we can ship items only to a single address as per order. If your order contains gifts or items that require shipping to multiple locations/addresses, you will need to place separate orders for each address." },
  { question: "Do I need to sign for my order?", answer: " Due to the high value of the goods that we sell and in the interest of our customers, we require proof of delivery for all orders. This is to ensure additional security and hence it is imperative that the customer who has made the purchase sign for the package. We will not be in a position to authorize packages to be delivered without the customer's signature." },
  { question: "Can I change my shipping address after my order has been dispatched?", answer: "We are unfortunately unable to redirect orders once your items have been dispatched. Therefore, please ensure you provide a suitable shipping address for the specified delivery times." },
  { question: "Can I add items to an existing order?", answer: " Unfortunately, it is not possible to combine orders or add items to an existing order. If you would like all your items to be delivered together, you will need to cancel your order/s (this you can do only if the order has not already been dispatched) and place a new order which contains all the items you require. Please refer Cancellation process in the Terms and Condition section." },
  { question: "How will I know you received my order and when will payment be deducted?", answer: "After you place your order, you will be sent an email confirmation that your order has been confirmed. The amount will be debited from your credit/debit card/netbanking at the time of placement of order itself. In a rare circumstance that any of the items you have ordered are not available, we will contact you by email and will only charge your credit/debit card for the value of the items in stock." },
  { question: "How can I track my order?", answer: "Once your package ships we will send an email with a link to track your order. You can also check the status of your order by logging into your account." },
  { question: "Is my package insured?", answer: "All Jewellery bought online will be fully insured against theft, damage or loss on transit from Thangam to the shipping address. Once your items have been delivered to the specified delivery address and signed for, they are no longer covered by insurance." },
  { question: "What packaging will my order be shipped in?", answer: "Thangam Jewellery takes special care in the package of the user's precious purchase. The jewels purchased are secured in a metal box, layered with durable and tamper proof seal along with the security tag from TMJL. Every packing is video covered for security reason." },
  { question: "How can i ensure my product arrive safely?", answer: "We do send the items in a metal box with tamper proof package along with the certificates (if any). If your box is damaged upon arrival, we recommend that you either refuse the delivery, or make a note when signing for it that you are accepting a damaged box." },
  { question: "Is my personal information kept private?", answer: "We understand that privacy is important to you so your privacy is of high importance to us and Thangam works to ensure that the users privacy is protected when using our service. Thangam.com has a policy setting out how the personal information of a user is processed and protected. Users can visit our website to find the changes(if any) has been made to the user policy. Thangam Jewellery will not make any financial benefits or sell or lease the user information to any third party. When processing your order online we require your billing address, shipping address, telephone number, credit card number and expiration date. If necessary, these details may be shared with a credit reference agency to verify your order. We may use your contact details to inform you of the latest arrivals of the latest trendy collections / designs & other new services via email. If you would prefer not to receive these updates, please email unsubscribe@thangam.com" },
  { question: "How do I return a defective product?", answer: "Please refer to our Refund Policy. You can find a link to it at the footer. Alternatively you can write in to us through the contact email ID provided at the footer or reach us via the toll free number displayed prominently in the site." },
  { question: "What if a product/s is out of stock?", answer: "Thangam makes every reasonable effort to keep all products in stock. However, there may be times when unforeseen demands go past supply. In such an event, Thangam will try to arrange it either from a third party or manufacture the same in their factory and will pass on the information to the customer either through email or through phone. There can be a change in the price of jewel." }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-main-content">
      <h1 className="faq-title">FAQ'S</h1>
      <div className="faq-breadcrumb">
        <svg 
          className="breadcrumb-home-icon" 
          onClick={() => { navigate('/'); window.scrollTo(0,0); }} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ cursor: 'pointer' }}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span className="breadcrumb-separator">&gt;</span>
      </div>
      
      <div className="faq-body">
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <svg className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
