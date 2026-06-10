import React, { useState } from 'react';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import StoreLocator from './components/StoreLocator/StoreLocator';
import AuspiciousDays from './components/AuspiciousDays/AuspiciousDays';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'faq' && <FAQ onNavigate={setCurrentPage} />}
      {currentPage === 'storeLocator' && <StoreLocator onNavigate={setCurrentPage} />}
      {currentPage === 'auspiciousDays' && <AuspiciousDays onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
