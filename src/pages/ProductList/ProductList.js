import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
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

const getProductAttributes = (product) => {
  const id = product.id;
  const title = (product.title || '').toLowerCase();
  
  const attrs = {
    occasion: [],
    color: ['Yellow Gold'],
    weightRange: [],
    purity: ['22k'],
    size: [],
    gender: [],
    style: [],
    stock: ['Instock']
  };

  // Determine Occasion
  if (title.includes('traditional') || title.includes('malai') || id % 4 === 1) {
    attrs.occasion.push('Traditional');
  }
  if (title.includes('trendy') || title.includes('modern') || id % 4 === 2) {
    attrs.occasion.push('Trendy');
  }
  if (title.includes('wedding') || title.includes('bridal') || title.includes('elegant') || title.includes('premium') || id % 4 === 0) {
    attrs.occasion.push('Wedding Wear');
  }
  if (title.includes('office') || title.includes('daily') || title.includes('simple') || id % 4 === 3) {
    attrs.occasion.push('Office Wear');
  }

  // Determine Metal Color
  if (title.includes('rose') || id % 12 === 5) {
    attrs.color = ['Rose Gold'];
  } else {
    attrs.color = ['Yellow Gold'];
  }

  // Determine Weight Range
  const weightVal = parseFloat((product.weight || '').replace(/[^0-9.]/g, '')) || 0;
  if (weightVal >= 100) {
    attrs.weightRange.push('100.01g - 200g');
  } else if (weightVal >= 80) {
    attrs.weightRange.push('80.01g - 90.01g');
  } else if (weightVal >= 40) {
    attrs.weightRange.push('50.01g - 40.01g');
  } else {
    attrs.weightRange.push('30.01g - 20.01g');
  }

  // Determine Size
  const sizeOptions = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
  const sizeIdx = id % sizeOptions.length;
  attrs.size.push(sizeOptions[sizeIdx]);

  // Determine Gender
  if (title.includes('kids') || id % 5 === 4) {
    attrs.gender.push('Kids');
  } else if (title.includes('unisex') || id % 5 === 3) {
    attrs.gender.push('Unisex');
  } else if (title.includes('wedding') || title.includes('bridal') || id % 2 === 0) {
    attrs.gender.push('Male');
  } else {
    attrs.gender.push('Female');
  }

  // Determine Style
  if (title.includes('earings') || title.includes('earrings') || title.includes('stud') || id % 6 === 0) {
    attrs.style.push('Earings');
  }
  if (title.includes('jhummika') || id % 6 === 1) {
    attrs.style.push('Jhummika');
  }
  if (title.includes('plain') || title.includes('chain') || id % 6 === 2) {
    attrs.style.push('Plain');
  }
  if (title.includes('floral') || title.includes('flower') || id % 6 === 3) {
    attrs.style.push('Floral');
  }
  if (title.includes('heart') || title.includes('love') || id % 6 === 4) {
    attrs.style.push('Heart');
  }
  if (title.includes('drop') || title.includes('pendant') || id % 6 === 5) {
    attrs.style.push('Drops');
  }

  return attrs;
};

const getFilterBlockType = (cleanLabel) => {
  if (['Traditional', 'Trendy', 'Wedding Wear', 'Office Wear'].includes(cleanLabel)) return 'occasion';
  if (['Yellow Gold', 'Rose Gold'].includes(cleanLabel)) return 'color';
  if (['100.01g - 200g', '80.01g - 90.01g', '50.01g - 40.01g', '30.01g - 20.01g'].includes(cleanLabel)) return 'weightRange';
  if (['22k'].includes(cleanLabel)) return 'purity';
  if (['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'].includes(cleanLabel)) return 'size';
  if (['Female', 'Male', 'Kids', 'Unisex'].includes(cleanLabel)) return 'gender';
  if (['Jhummika', 'Earings', 'Plain', 'Floral', 'Heart', 'Drops'].includes(cleanLabel)) return 'style';
  if (['Instock'].includes(cleanLabel)) return 'stock';
  return null;
};

const ProductList = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const data = categoryData[categoryId] || categoryData['default'];
  const [activeSubCategory, setActiveSubCategory] = useState(location.state?.subcategory || null);

  // Scroll to top on mount and category change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSubCategory(location.state?.subcategory || null);
  }, [categoryId, location.state?.subcategory]);

  // Dummy filter state
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('stock');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showLimit, setShowLimit] = useState(12);

  // Generate at least 36 items dynamically for any category to allow full testing of limit dropdown
  let allProducts = data.products;
  if (allProducts.length > 0 && allProducts.length < 36) {
    const originalProducts = [...data.products];
    const expanded = [...originalProducts];
    const origLen = originalProducts.length;
    let multiplier = 1;

    const makeVariant = (p, mult, len) => ({
      ...p,
      id: p.id + (len * mult),
      title: `${p.title || 'Product'} - Variant ${mult}`
    });

    while (expanded.length < 36) {
      for (let i = 0; i < origLen; i++) {
        expanded.push(makeVariant(originalProducts[i], multiplier, origLen));
      }
      multiplier++;
    }
    allProducts = expanded;
  }

  const handleFilterChange = (filterLabel) => {
    setSelectedFilters(prev => 
      prev.includes(filterLabel) 
        ? prev.filter(f => f !== filterLabel)
        : [...prev, filterLabel]
    );
  };

  const getProductCountForFilter = (cleanLabel) => {
    const blockType = getFilterBlockType(cleanLabel);
    if (!blockType) return 0;
    return allProducts.filter(product => {
      const attrs = getProductAttributes(product);
      const productValues = attrs[blockType] || [];
      return productValues.includes(cleanLabel);
    }).length;
  };

  const Checkbox = ({ label }) => {
    const count = getProductCountForFilter(label);
    return (
      <label className="sidebar-checkbox">
        <input 
          type="checkbox" 
          checked={selectedFilters.includes(label)}
          onChange={() => handleFilterChange(label)}
        />
        <span>{label} ({count})</span>
      </label>
    );
  };

  // Mock filtering logic based on selected filters and subcategory
  let filteredProducts = allProducts;

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
    // Group selected filters by block type
    const groupedSelections = {};
    selectedFilters.forEach(label => {
      const cleanLabel = label.replace(/\s*\(\d+\)?$/, '').trim();
      const blockType = getFilterBlockType(cleanLabel);
      if (blockType) {
        if (!groupedSelections[blockType]) {
          groupedSelections[blockType] = [];
        }
        groupedSelections[blockType].push(cleanLabel);
      }
    });

    // Filter products: must match at least one selection in each active block type
    filteredProducts = filteredProducts.filter(product => {
      const attrs = getProductAttributes(product);
      for (const blockType in groupedSelections) {
        const selections = groupedSelections[blockType];
        const productValues = attrs[blockType] || [];
        const hasMatch = selections.some(sel => productValues.includes(sel));
        if (!hasMatch) {
          return false;
        }
      }
      return true;
    });
  }


  // Sort logic based on selected sortBy and sortDirection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'price') {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
      comparison = priceA - priceB;
    } else if (sortBy === 'weight') {
      const weightA = parseFloat(a.weight.replace(/[^0-9.]/g, '')) || 0;
      const weightB = parseFloat(b.weight.replace(/[^0-9.]/g, '')) || 0;
      comparison = weightA - weightB;
    } else if (sortBy === 'stock') {
      // For stock availability: if they are all in-stock (which mock data is), we can default to position or id
      comparison = a.id - b.id;
    } else {
      // Position: default order, which is id
      comparison = a.id - b.id;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const displayedProducts = sortedProducts.slice(0, showLimit);

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
                      color: '#555',
                      fontSize: '12px',
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
            <Checkbox label="Traditional" />
            <Checkbox label="Trendy" />
            <Checkbox label="Wedding Wear" />
            <Checkbox label="Office Wear" />
          </FilterBlock>

          <FilterBlock title="METAL COLOR">
            <Checkbox label="Yellow Gold" />
            <Checkbox label="Rose Gold" />
          </FilterBlock>

          <FilterBlock title="WEIGHT">
            <Checkbox label="100.01g - 200g" />
            <Checkbox label="80.01g - 90.01g" />
            <Checkbox label="50.01g - 40.01g" />
            <Checkbox label="30.01g - 20.01g" />
          </FilterBlock>

          <FilterBlock title="METAL PURITY">
            <Checkbox label="22k" />
          </FilterBlock>

          <FilterBlock title="SIZE">
            <Checkbox label="10" />
            <Checkbox label="20" />
            <Checkbox label="30" />
            <Checkbox label="40" />
            <Checkbox label="50" />
            <Checkbox label="60" />
            <Checkbox label="70" />
            <Checkbox label="80" />
            <Checkbox label="90" />
            <Checkbox label="100" />
          </FilterBlock>

          <FilterBlock title="GENDER">
            <Checkbox label="Female" />
            <Checkbox label="Male" />
            <Checkbox label="Kids" />
            <Checkbox label="Unisex" />
          </FilterBlock>

          <FilterBlock title="STYLE">
            <Checkbox label="Jhummika" />
            <Checkbox label="Earings" />
            <Checkbox label="Plain" />
            <Checkbox label="Floral" />
            <Checkbox label="Heart" />
            <Checkbox label="Drops" />
          </FilterBlock>

          <FilterBlock title="STOCK AVAILABILITY">
            <Checkbox label="Instock" />
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
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="position">Position</option>
                <option value="price">Price</option>
                <option value="weight">Weight</option>
                <option value="stock">Stock Availability</option>
              </select>
              <button 
                className="sort-direction-btn" 
                onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
                aria-label="Toggle sort direction"
              >
                {sortDirection === 'asc' ? '↑' : '↓'}
              </button>
            </div>
            <div className="plp-control-group">
              <label>Show:</label>
              <select value={showLimit} onChange={(e) => setShowLimit(Number(e.target.value))}>
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={36}>36</option>
              </select>
            </div>
          </div>

          <div className="plp-grid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
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
