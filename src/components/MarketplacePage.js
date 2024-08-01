// src/components/MarketplacePage.js
import React, { useState } from 'react';
import ProductList from './AdvertisementList';
import SearchBar from './SearchBar';

import './MarketplacePage.css';

const MarketplacePage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 200 },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 100 },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 200 },
    { id: 5, name: 'Product 5', category: 'Category 5', price: 100 },
    { id: 6, name: 'Product 6', category: 'Category 6', price: 200 },
    // Add more products as needed
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1>Marketplace</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default MarketplacePage;
