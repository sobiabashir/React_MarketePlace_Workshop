import React from 'react';

const FilterInput = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Filter by title"
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterInput;