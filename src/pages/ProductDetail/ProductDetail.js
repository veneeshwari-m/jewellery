import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { addToWishlist } from '../../store/wishlistSlice';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const passedProduct = location.state?.product;
  const categoryTitle = location.state?.categoryTitle || "ELEGANT CROWN KIDS GOLD BANGLES";
  
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [policyTab, setPolicyTab] = useState('Best Quality'); // Defaulting to Best Quality as requested, or can be Best Price

  const policyData = {
    'Best Price': <>At Thangam Jewels, We Are Committed To Offering Exceptional Value With Competitive Pricing Across Our Entire Jewellery Collection. Our Gold And Silver Jewellery Prices Are Regularly Updated To Reflect Current Market Trends, Ensuring Complete Transparency And Fair Value For Every Purchase. Whether You Shop In-Store Or Online, You Can Trust Us To Provide Premium Quality, Certified Craftsmanship, And Outstanding Designs At Prices That Make Your Investment Truly Worthwhile.</>,
    'Best Quality': <>A one-stop-shop for the most supreme ornaments and articles, backed by the quality revolution. Having pioneered the quality revolution by educating customers about various Government-certified quality aspects, Thangam is one of the first institutions to offer only BIS 916-hallmarked jewellery in the market. Home to sophisticated machinery that accurately determines the quality and carat value of jewellery, the measurements obtained at Thangam are scientific and tamper proof, thereby giving the customer an assurance with regards to the quality of jewellery offered.</>,
    'Secured Shipping': <>Secured, Fully-insured, PAN-India shipping. We ship to all nooks and corners of India. Thangam is delighted to provide Secured shipping to customers within the geographical boundary of India. All the items bought online will be fully insured against theft, damage or loss during transit. The operations team and their associates strive to ensure all deliveries are made promptly, with the product(s) in perfect condition. Rest assured, our customers will receive the jewellery in an 'as is, where is' condition. Thangam takes precautionary care while packing, with the items placed in a tamper proof package along with the certificates. We request our customers to inspect the package for signs of damage or tampering before signing the courier receipt.</>,
    '15 day return': <>Exchange your jewel for another, should you choose to, within 15 days of purchase. Customer satisfaction is our first and utmost priority. If for any valid reason the customer is not satisfied with jewellery bought online or wish to exchange it for a different design, our 15-day <span style={{color: '#9e1a1a'}}>Return & Exchange policy</span> will take care the customer's needs.</>,
    '100% Refund': <>Customers are protected with 100% moneyback guarantee if there is an issue with product quality, size or delivery. Your purchasing experience on Thangam won't go wrong. But if it does, for genuine cases on refunding of the returned jewel, without deducting shipping, processing fee and bank transaction charges the amount shall be credited to the bank account through internet banking or cheque to the account that was used for the purchase. For more detail refer <span style={{color: '#9e1a1a'}}>Return & Exchange policy</span> section.</>,
    'Lifetime Exchange': <>Stay relevant to the ever-changing times.Exchange your old pieces for current, trendsetting ones. Customers can choose to exchange their existing Thangam jewellery at any of our showrooms for newer or modern pieces of jewellery, with an appropriate price tag for the jewel being exchanged.</>,
    'Certification': <>The foremost institution to retail only BIS Hallmarked jewellery.A center for pure quality and impeccable standards.The jewellery at Thangam are certified for authenticity by the Indian Government and the company itself accredited a BIS Hallmark center. Being among the first to offer certified jewellery in the retail market, customers can be assured that the products displayed online are made under stringent quality control measures and come with the necessary certification. We guarantee every gold item we sell is BIS Hallmarked. Similarly, diamond and platinum jewellery will also be accompanied by a certificate which establishes the genuineness of the product.</>
  };
  
  // Use passed product data or fallback to mock data
  const product = {
    title: passedProduct?.title || "Elegant Crown Kids Gold Bangles",
    price: passedProduct?.price || "â‚¹75,850.23",
    description: "A 22KT Yellow Gold Traditional Necklace (4.75 Gms). A Delightful Blend Of Ethnic And Contemporary, This Bangles Will Complement Any Look! (With Back Chain)",
    availability: "IN STOCK",
    productCode: passedProduct?.id || productId || "123",
    images: passedProduct?.images || (passedProduct?.image ? [passedProduct.image, 'gold-4.jpg'] : ['gold-bangles.png', 'gold-4.jpg']),
    breakup: {
      gold: "â‚¹61,845.00",
      mc: "â‚¹11,751.00",
      hmc: "â‚¹45.00",
      gst: "â‚¹2,209.00"
    }
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState('MORE INFORMATION');

  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isInCart = cartItems.some(item => item.productCode === product.productCode);
  const isInWishlist = wishlistItems.some(item => item.productCode === product.productCode);

  const handleAddToCart = () => {
    if (isInCart) {
      navigate('/place-order', { state: { product } });
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      navigate('/place-order', { state: { product } });
    } else {
      dispatch(addToWishlist(product));
    }
  };

  // Reset active image when product changes
  useEffect(() => {
    setActiveImage(product.images[0]);
  }, [product.productCode, product.images]);

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId, location.key]);

  return (
    <div className="product-detail-page">
      <div className="pdp-breadcrumb">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <span>&gt;</span>
        <span style={{color: '#888'}}>{categoryTitle}</span>
      </div>

      <div className="pdp-container">
        {/* Left Side: Images */}
        <div className="pdp-left">
          <div className="pdp-main-image">
            <img src={`/image/${activeImage}`} alt={product.title} />
          </div>
          <div className="pdp-thumbnails">
            {product.images.map((img, index) => (
              <div 
                key={index} 
                className="pdp-thumbnail" 
                onClick={() => setActiveImage(img)}
                style={{ borderColor: activeImage === img ? '#7b1e3e' : '#eee' }}
              >
                <img src={`/image/${img}`} alt={`${product.title} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="pdp-right">
          <h1 className="pdp-title">{product.title}</h1>
          <div className="pdp-price">{product.price}</div>
          <p className="pdp-description">{product.description}</p>
          
          <div className="pdp-meta">
            <span className="pdp-meta-label">AVAILABILITY:</span>
            <span className="pdp-meta-value">{product.availability}</span>
          </div>
          <div className="pdp-meta">
            <span className="pdp-meta-label">PRODUCT CODE NO:</span>
            <span className="pdp-meta-value">{product.productCode}</span>
          </div>

          <div className="pdp-price-breakup-section">
            <h3 className="pdp-section-title">PRICE BREAKUP</h3>
            <div className="pdp-breakup-grid">
              <div className="pdp-breakup-item">
                <span className="pdp-breakup-label">22KT GOLD</span>
                <span className="pdp-breakup-value">{product.breakup.gold}</span>
              </div>
              <span className="pdp-breakup-plus">+</span>
              <div className="pdp-breakup-item">
                <span className="pdp-breakup-label">MC</span>
                <span className="pdp-breakup-value">{product.breakup.mc}</span>
              </div>
              <span className="pdp-breakup-plus">+</span>
              <div className="pdp-breakup-item">
                <span className="pdp-breakup-label">HMC</span>
                <span className="pdp-breakup-value">{product.breakup.hmc}</span>
              </div>
              <span className="pdp-breakup-plus">+</span>
              <div className="pdp-breakup-item">
                <span className="pdp-breakup-label">GST(3.00%)</span>
                <span className="pdp-breakup-value">{product.breakup.gst}</span>
              </div>
            </div>
          </div>

          <hr className="pdp-divider" />

          <div className="pdp-action-buttons">
            <button className="pdp-buy-now" onClick={() => navigate('/place-order', { state: { product } })}>
              <svg viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              BUY NOW
            </button>
            
            <button className="pdp-add-to-cart" onClick={handleAddToCart}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {isInCart ? 'GO TO PLACE ORDER' : 'ADD TO CART'}
            </button>
            
            <button className="pdp-add-to-wishlist" onClick={handleAddToWishlist}>
              <svg viewBox="0 0 24 24" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {isInWishlist ? 'WISHLISTED - PLACE ORDER' : 'ADD TO WISHLIST'}
            </button>
          </div>

          <hr className="pdp-divider" />

          <div className="pdp-pincode-section">
            <h3 className="pdp-section-title" style={{marginBottom: '0.2rem'}}>CHECK YOUR PINCODE</h3>
            <p className="pdp-pincode-subtitle">Secured Shipping To Selected Cities Across India</p>
            <input 
              type="text" 
              className="pdp-pincode-input" 
              placeholder="PINCODE"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
                setPincodeStatus(null);
              }}
              maxLength={6}
            />
            <button 
              className="pdp-check-btn"
              onClick={() => {
                if (/^\d{6}$/.test(pincode)) {
                  setPincodeStatus({ type: 'success', text: 'Available for delivery within 3-5 days!' });
                } else {
                  setPincodeStatus({ type: 'error', text: 'Please enter a valid 6-digit pincode.' });
                }
              }}
            >
              CHECK AVAILABILITY
            </button>
            {pincodeStatus && (
              <p style={{
                marginTop: '10px', 
                fontSize: '0.9rem', 
                fontWeight: '600',
                color: pincodeStatus.type === 'success' ? '#4CAF50' : '#d32f2f'
              }}>
                {pincodeStatus.text}
              </p>
            )}
          </div>

          <div className="pdp-whatsapp">
            <span>Have Questions? Whatsapp</span>
            <div className="pdp-whatsapp-contact">
              <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              +91 97862 21122
            </div>
          </div>
        </div>
      </div>

      <div className="pdp-bottom-section">
        <div className="pdp-tabs">
          <div 
            className={`pdp-tab ${activeTab === 'MORE INFORMATION' ? 'active' : ''}`}
            onClick={() => setActiveTab('MORE INFORMATION')}
          >
            MORE INFORMATION
          </div>
          <div 
            className={`pdp-tab ${activeTab === 'REVIEWS' ? 'active' : ''}`}
            onClick={() => setActiveTab('REVIEWS')}
          >
            REVIEWS
          </div>
        </div>
        <div className="pdp-tab-content">
          {activeTab === 'MORE INFORMATION' && (
            <div className="pdp-attributes">
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Product Code No</span>
                <span className="pdp-attr-value">CGL25KNEC00100</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Stock Availability</span>
                <span className="pdp-attr-value">In Stock</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Metal Color</span>
                <span className="pdp-attr-value">Yellow Gold</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Gender</span>
                <span className="pdp-attr-value">FEMALE</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">No. Of Pieces</span>
                <span className="pdp-attr-value">No. Of Pieces</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Product Type</span>
                <span className="pdp-attr-value">Product Type</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Metal Purity</span>
                <span className="pdp-attr-value">Metal Purity</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Weight</span>
                <span className="pdp-attr-value">Weight</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Making Charge Type</span>
                <span className="pdp-attr-value">Making Charge Type</span>
              </div>
              <div className="pdp-attr-row">
                <span className="pdp-attr-key">Making Charge</span>
                <span className="pdp-attr-value">Making Charge</span>
              </div>
            </div>
          )}
          {activeTab === 'REVIEWS' && (
            <div className="pdp-reviews">No reviews yet.</div>
          )}
        </div>

        <div className="pdp-policy-section">
          <h3 className="pdp-policy-title">SHIPPING AND RETURN POLICY</h3>
          <div className="pdp-policy-tabs">
            {Object.keys(policyData).map(tab => (
              <div 
                key={tab} 
                className={`pdp-policy-tab ${policyTab === tab ? 'active' : ''}`}
                onClick={() => setPolicyTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <p className="pdp-policy-text">
            {policyData[policyTab]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

