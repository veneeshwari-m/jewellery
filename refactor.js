const fs = require('fs');
<<<<<<< HEAD
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
let content = fs.readFileSync(filePath, 'utf8');

// Wrap setRates in dispatch
content = content.replace(/setRates\((.*?)\)/g, 'dispatch(setRates($1))');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully refactored setRates in Home.js to use dispatch!');
=======

let content = fs.readFileSync(String.raw`d:\jewellery\jewellery\src\components\Layout\Layout.js`, 'utf8');

// Update imports
content = content.replace("import './Home.css';", "import '../Home/Home.css';\nimport { useLocation } from 'react-router-dom';");

// Rename component
content = content.replace("function Home() {", "function Layout({ children }) {");

// Add useLocation
content = content.replace("const navigate = useNavigate();", "const navigate = useNavigate();\n  const { pathname } = useLocation();");

// Update scroll function
const scrollOld = `  // Auto-scroll to sections helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };`;

const scrollNew = `  // Scroll helper
  const scrollToSection = (id) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };`;

content = content.replace(scrollOld, scrollNew);

// Extract the middle body
const navIdx = content.indexOf('<Navbar />');
const footerIdx = content.indexOf('{/* 6. FOOTER */}');

if (navIdx !== -1 && footerIdx !== -1) {
  content = content.substring(0, navIdx + 10) + '\n\n      <main className="layout-content">\n        {children}\n      </main>\n\n      ' + content.substring(footerIdx);
} else {
  console.log("Could not find nav or footer idx");
}

// Rename export
content = content.replace("export default Home;", "export default Layout;");

fs.writeFileSync(String.raw`d:\jewellery\jewellery\src\components\Layout\Layout.js`, content);
console.log("Layout.js updated.");

// Now update Home.js
let homeContent = fs.readFileSync(String.raw`d:\jewellery\jewellery\src\components\Home\Home.js`, 'utf8');

// Remove everything before HERO SECTION up to the start of return
const returnIdx = homeContent.indexOf('return (');
const heroIdx = homeContent.indexOf('{/* 3. HERO SECTION');

if (returnIdx !== -1 && heroIdx !== -1) {
  // we want to keep the return ( <div className="App"> ) and then immediately the hero section.
  const appIdx = homeContent.indexOf('<div className="App">', returnIdx);
  homeContent = homeContent.substring(0, appIdx + 21) + '\n\n      ' + homeContent.substring(heroIdx);
} else {
  console.log("Could not find return or hero idx in Home.js");
}

// Remove the RATE HISTORY MODAL from Home.js
const modalIdx = homeContent.indexOf('{/* 8. RATE HISTORY MODAL */}');
const endDivIdx = homeContent.lastIndexOf('</div>'); // This is the closing div of <div className="App">
if (modalIdx !== -1) {
  homeContent = homeContent.substring(0, modalIdx) + '\n    </div>\n  );\n}\n\nexport default Home;';
}

fs.writeFileSync(String.raw`d:\jewellery\jewellery\src\components\Home\Home.js`, homeContent);
console.log("Home.js updated.");

>>>>>>> cf617e9b9508798170cf833358d1880d48c2edcf
