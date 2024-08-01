// src/App.js
import React from 'react';
import AdvertisementList from './components/AdvertisementList';

import MarketplacePage from './components/MarketplacePage';


import Header from './components/Header';
import Navbar from './components/Navbar';


const App = () => {
  const logo = "logo.jpg";
  const links = ["Login", "Sign up", "About"];

  return (
    <>
      <Navbar logo={logo} links={links} />
      
      <Header />
      <AdvertisementList/>
     
    </>
  );
};

export default App;
