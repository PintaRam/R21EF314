import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
