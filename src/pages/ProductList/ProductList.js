import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductList.css';

const categoryData = {
  'gold-jewellery': {
    title: 'GOLD JEWELLERY',
    breadcrumb: 'GOLD JEWELLERY',
    description: 'Discover exquisite gold jewellery online with Thangam Jewels and enjoy a secure, hassle-free shopping experience with insured delivery. We offer a premium collection of beautifully crafted Gold Bangles, Bracelets, Chains, Necklaces, Rings, Earrings, Pendants, Haram, Malai, and other exclusive gold jewellery designs. Every piece is thoughtfully created with exceptional craftsmanship, elegant style, and trusted quality to make every special moment memorable.',
    sidebarList: ['Gold Bangles', 'Gold Malai', 'Gold Necklace', 'Gold Earrings', 'Gold Pendant', 'Gold Bracelet', 'Gold Ring', 'Gold Chain', 'Gold Nethicutti'],
    products: [
      { id: 1, image: 'gold-1.jpg', title: 'Elegant Gold Bangles', weight: '3.13 gm', price: '₹ 57,994.15' },
      { id: 2, image: 'gold-2.jpg', title: 'Traditional Gold Malai', weight: '4.75 gm', price: '₹ 81,351.46' },
      { id: 3, image: 'gold-3.jpg', title: 'Classic Gold Necklace', weight: '3.07 gm', price: '₹ 51,163.20' },
      { id: 4, image: 'gold-4.jpg', title: 'Floral Gold Earrings', weight: '2.47 gm', price: '₹ 45,890.62' },
      { id: 5, image: 'gold-5.jpg', title: 'Diamond Gold Pendant', weight: '2.47 gm', price: '₹ 45,890.62' },
      { id: 6, image: 'gold-6.jpg', title: 'Simple Gold Bracelet', weight: '2.47 gm', price: '₹ 45,890.62' },
      { id: 7, image: 'gold-7.jpg', title: 'Wedding Gold Ring', weight: '4.15 gm', price: '₹ 72,120.00' },
      { id: 8, image: 'gold-8.jpg', title: 'Daily Wear Gold Chain', weight: '2.90 gm', price: '₹ 48,500.00' },
      { id: 9, image: 'gold-9.jpg', title: 'Bridal Gold Nethicutti', weight: '5.60 gm', price: '₹ 94,800.00' },
      { id: 10, image: 'gold-1.jpg', title: 'Premium Gold Bangles', weight: '4.50 gm', price: '₹ 85,000.00' },
      { id: 11, image: 'gold-3.jpg', title: 'Modern Gold Necklace', weight: '5.20 gm', price: '₹ 95,000.00' },
      { id: 12, image: 'gold-4.jpg', title: 'Stud Gold Earrings', weight: '1.50 gm', price: '₹ 25,000.00' },
    ]
  },
  'diamond': {
    title: 'DIAMOND',
    breadcrumb: 'DIAMOND',
    description: 'A perfect choice for weddings, festivals, housewarming ceremonies, and memorable celebrations, Thangam Jewels offers timeless jewellery crafted with elegance and precision. Each piece beautifully combines traditional artistry with modern craftsmanship, making it a treasured addition to every special occasion.',
    sidebarList: ['Diamond Bangles', 'Diamond Necklace', 'Diamond Earrings', 'Diamond Pendant', 'Diamond Bracelet', 'Diamond Ring'],
    products: [
      { id: 1, image: 'diamond-5.jpg', weight: '3.13 gm', price: '₹ 57,994.15' },
      { id: 2, image: 'diamond_ring.png', weight: '4.75 gm', price: '₹ 81,351.46' },
      { id: 3, image: 'diamond-1.jpg', weight: '3.07 gm', price: '₹ 51,163.20' },
      { id: 4, image: 'diamond-4.jpg', weight: '2.47 gm', price: '₹ 45,890.62' },
      { id: 5, image: 'diamond-3.jpg', weight: '2.47 gm', price: '₹ 45,890.62' },
      { id: 6, image: 'diamond-2.png', weight: '2.47 gm', price: '₹ 45,890.62' },
    ]
  },
  'coins': {
    title: 'COINS',
    breadcrumb: 'COINS',
    description: 'Explore our exquisite collection of Gold and Silver coins. Perfect for gifting, investment, and auspicious occasions. Each coin represents purity, prosperity, and the timeless value of precious metals.',
    sidebarList: ['Gold Coins', 'Silver Coins', 'Pure Coins'],
    products: [
      { id: 1, image: 'coin-1.jpg', weight: '2.00 gm', price: '₹ 15,000.00' },
      { id: 2, image: 'coin-2.jpg', weight: '4.00 gm', price: '₹ 30,000.00' },
    ]
  },
  'silver': {
    title: 'SILVER',
    breadcrumb: 'SILVER',
    description: 'Discover beautiful silver articles, perfect for pooja and gifting. Crafted with devotion and precision to bring auspiciousness to your home.',
    sidebarList: ['Silver Articles', 'Pooja Articles', 'Silver Idols'],
    products: [
      { id: 1, image: 'silver-1.jpg', weight: '50.00 gm', price: '₹ 4,500.00' },
      { id: 2, image: 'silver-2.jpg', weight: '100.00 gm', price: '₹ 9,000.00' },
    ]
  },
  'silver-jewellry': {
    title: 'SILVER JEWELLRY',
    breadcrumb: 'SILVER JEWELLRY',
    description: 'Adorn yourself with our stunning collection of silver jewellery. From traditional anklets to modern chains, each piece is designed to highlight your elegance and style.',
    sidebarList: ['Kids Wear', 'Anklets', 'Chain', 'Earings', 'Malai'],
    products: [
      { id: 1, image: 'jew-1.jpg', weight: '10.50 gm', price: '₹ 1,250.00' },
      { id: 2, image: 'jew-2.jpg', weight: '15.20 gm', price: '₹ 1,850.00' },
      { id: 3, image: 'jew-3.jpg', weight: '8.40 gm', price: '₹ 980.00' },
      { id: 4, image: 'jew-4.jpg', weight: '12.00 gm', price: '₹ 1,500.00' },
      { id: 5, image: 'jew-5.jpg', weight: '25.50 gm', price: '₹ 3,200.00' },
    ]
  },
  'default': {
    title: 'COLLECTIONS',
    breadcrumb: 'COLLECTIONS',
    description: 'Explore our latest collections of premium jewellery and accessories crafted just for you.',
    sidebarList: ['New Arrivals', 'Best Sellers', 'Trending'],
    products: [
      { id: 1, image: 'gold-1.jpg', weight: '3.13 gm', price: '₹ 57,994.15' },
      { id: 2, image: 'diamond-1.jpg', weight: '3.07 gm', price: '₹ 51,163.20' },
      { id: 3, image: 'silver-1.jpg', weight: '50.00 gm', price: '₹ 4,500.00' },
    ]
  }
};

const FilterBlock = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && (
        <div className="sidebar-checkbox-group">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductList = () => {
  const { categoryId } = useParams();
  const data = categoryData[categoryId] || categoryData['default'];
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  // Scroll to top on mount and category change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSubCategory(null);
  }, [categoryId]);

  // Dummy filter state
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = (filterLabel) => {
    setSelectedFilters(prev => 
      prev.includes(filterLabel) 
        ? prev.filter(f => f !== filterLabel)
        : [...prev, filterLabel]
    );
  };

  const Checkbox = ({ label }) => (
    <label className="sidebar-checkbox">
      <input 
        type="checkbox" 
        checked={selectedFilters.includes(label)}
        onChange={() => handleFilterChange(label)}
      />
      <span>{label}</span>
    </label>
  );

  // Mock filtering logic based on selected filters and subcategory
  let filteredProducts = data.products;

  if (activeSubCategory) {
    // Filter by product title (or fallback to id trick if title missing for other categories)
    filteredProducts = filteredProducts.filter(p => {
      if (p.title) {
        return p.title.toLowerCase().includes(activeSubCategory.toLowerCase());
      }
      return (p.id + activeSubCategory.length) % 2 === 0;
    });
  }

  if (selectedFilters.length > 0) {
    filteredProducts = filteredProducts.filter(p => {
      if (selectedFilters.includes('Instock (850)')) return true;
      // Deterministic mock filtering: show some products based on id
      return p.id % 2 === (selectedFilters.length % 2);
    });
  }

  return (
    <div className="product-list-page">
      <div className="plp-breadcrumb">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <span>&gt;</span>
        <span>{data.breadcrumb}</span>
      </div>

      <div className="plp-container">
        {/* Mobile Filter Toggle */}
        <button 
          className="mobile-filter-toggle"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: 16, height: 16}}>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar */}
        <aside className={`plp-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-block">
            <h3 className="sidebar-title">{data.title}</h3>
            <ul className="sidebar-list">
              {data.sidebarList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveSubCategory(activeSubCategory === item ? null : item)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      color: activeSubCategory === item ? '#7b1e3e' : '#555',
                      fontSize: '0.85rem',
                      fontFamily: 'inherit',
                      textAlign: 'left'
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <FilterBlock title="OCCASION">
            <Checkbox label="Traditional (4)" />
            <Checkbox label="Trendy (2)" />
            <Checkbox label="Wedding Wear (6)" />
            <Checkbox label="Office Wear (1)" />
          </FilterBlock>

          <FilterBlock title="METAL COLOR">
            <Checkbox label="Yellow Gold (848)" />
            <Checkbox label="Rose Gold (1)" />
          </FilterBlock>

          <FilterBlock title="WEIGHT">
            <Checkbox label="100.01g - 200g (2)" />
            <Checkbox label="80.01g - 90.01g" />
            <Checkbox label="50.01g - 40.01g" />
            <Checkbox label="30.01g - 20.01g (1)" />
          </FilterBlock>

          <FilterBlock title="METAL PURITY">
            <Checkbox label="22k (850)" />
          </FilterBlock>

          <FilterBlock title="SIZE">
            <Checkbox label="10 (2)" />
            <Checkbox label="20 (1)" />
            <Checkbox label="30 (3)" />
            <Checkbox label="40 (1)" />
            <Checkbox label="50 (1)" />
            <Checkbox label="60 (1)" />
            <Checkbox label="70 (1)" />
            <Checkbox label="80 (1)" />
            <Checkbox label="90 (1)" />
            <Checkbox label="100 (1)" />
          </FilterBlock>

          <FilterBlock title="GENDER">
            <Checkbox label="Female (5)" />
            <Checkbox label="Male (5)" />
            <Checkbox label="Kids (1)" />
            <Checkbox label="Unisex (2)" />
          </FilterBlock>

          <FilterBlock title="STYLE">
            <Checkbox label="Jhummika (2)" />
            <Checkbox label="Earings (2)" />
            <Checkbox label="Plain (8)" />
            <Checkbox label="Floral (5)" />
            <Checkbox label="Heart (1)" />
            <Checkbox label="Drops (2)" />
          </FilterBlock>

          <FilterBlock title="STOCK AVAILABILITY">
            <Checkbox label="Instock (850)" />
          </FilterBlock>
        </aside>

        {/* Main Content */}
        <main className="plp-main">
          <p className="plp-description">
            {data.description}
          </p>

          <div className="plp-controls">
            <div className="plp-control-group">
              <label>Sort by:</label>
              <select>
                <option>Stock Availability</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="plp-control-group">
              <label>Show:</label>
              <select>
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
          </div>

          <div className="plp-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Link 
                  to={`/product/${product.id}`} 
                  key={product.id} 
                  state={{ product, categoryTitle: data.title }}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="plp-product-card">
                    <div className="plp-product-image">
                      <img src={`/image/${product.image}`} alt={product.title || data.title} />
                    </div>
                    <h4 className="plp-product-title" style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0', textAlign: 'center', color: '#333' }}>
                      {product.title || data.title}
                    </h4>
                    <div className="plp-product-weight">Weight: {product.weight}</div>
                    <div className="plp-product-price">{product.price}</div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-products-found" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0', color: '#666' }}>
                <h3>No products match the selected filters.</h3>
                <p>Try removing some filters to see more results.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
