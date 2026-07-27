import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main><div style={{padding: '100px 20px', textAlign: 'center'}}><h2>Loading Home page...</h2></div></main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
export default App;
