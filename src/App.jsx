/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author: Brian McCarthy
 */

import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import './App.css';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div id="app-container" className="font-sans text-stone-900 antialiased selection:bg-green-100 selection:text-green-900">
      {showProductList ? (
        <div className={`transition-opacity duration-700 ${showProductList ? 'opacity-100' : 'opacity-0'}`}>
          <ProductList />
        </div>
      ) : (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
    </div>
  );
}
