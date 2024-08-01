// AdvertisementList.js
import React, { useState } from 'react';
import AdvertisementCard from './AdvertisementCard';
import FilterInput from './FilterInput';

const advertisements = [
  // Populate with your advertisements
  {
    id: 1,
    title: 'Product 1',
    description: 'Used car',
    
    contact: 'webdev@example.com'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Apartment for Rent ',
   
    contact: 'graphic@example.com'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Creative graphic design solutions',
    
    contact: 'graphic@example.com'
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Car Fixer',
   
    contact: 'graphic@example.com'
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Website solutions',
    
    contact: 'graphic@example.com'
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Part orgnizer',
    
    contact: 'graphic@example.com'
  },
  // Add more advertisements as needed
];

const AdvertisementList = () => {
  const [filter, setFilter] = useState('');

  const filteredAdvertisements = advertisements.filter(ad =>
    ad.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <FilterInput setFilter={setFilter} />
      <div className="row">
        {filteredAdvertisements.map(ad => (
          <AdvertisementCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementList;