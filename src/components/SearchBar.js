// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;