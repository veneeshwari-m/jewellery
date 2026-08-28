const fs = require('fs');
const path = require('path');

{
  const filePath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/dispatch\(setRates\(\{ \.\.\.rates, (.*?): parseInt\(e\.target\.value\)\) \|\| 0 \}\)\}/g, 'dispatch(setRates({ ...rates, $1: parseInt(e.target.value) || 0 }))');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed syntax error in Home.js!');
}

{
  let content = fs.readFileSync(String.raw`d:\jewellery\jewellery\src\components\Layout\Layout.js`, 'utf8');

  const badStart = content.indexOf('<button \n            className="rate-history-btn"');
  const badEnd = content.indexOf('<div className="virtual-shopping"');

  if (badStart !== -1 && badEnd !== -1) {
    const replacement = `<button 
            className="rate-history-btn"
            onClick={() => setIsHistoryOpen(true)}
          >
            RATE HISTORY
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION BAR (Sticky navigation below the rate board) */}
      <header className="main-header">
        {/* Top Utility Bar */}
        <div className="top-utility-bar">
          <div className="utility-left">
            <button onClick={() => navigate('/contact-us')} className="utility-link bold-link">CONTACT US | ENQUIRY FORM</button>
            <button onClick={() => scrollToSection('footer')} className="utility-link bold-link">STORE LOCATOR</button>
          </div>
          <div className="utility-right">
            <button onClick={() => scrollToSection('rates')} className="utility-link bold-link">AUSPICIOUS DAYS</button>
            <button onClick={() => scrollToSection('calculator')} className="utility-link scheme-btn bold-link">SAVINGS SCHEME PAYMENT</button>
            <button onClick={() => scrollToSection('collections')} className="utility-link bold-link">BLOG</button>
            <button onClick={() => navigate('/create-account')} className="utility-link bold-link">CREATE AN ACCOUNT</button>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar-new">
          <div className="navbar-left">
            <img src="/image/jewel-logo.png" alt="Jewel Logo" className="jewel-logo-img" />
            `;

    content = content.substring(0, badStart) + replacement + content.substring(badEnd);
    fs.writeFileSync(String.raw`d:\jewellery\jewellery\src\components\Layout\Layout.js`, content);
    console.log('Fixed Layout.js successfully');
  } else {
    console.log('Could not find indices', badStart, badEnd);
  }
}
