import React, { useState } from 'react';


const AdvertisementCard = ({ ad }) => {
  const [showContact, setShowContact] = useState(false);

  const handleToggleContact = () => {
    setShowContact(!showContact);
  };

  const handleDetailsClick = () => {
    alert(`Contact Information: ${ad.contact}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
       
        <div className="card-body">
          <h5 className="card-title">{ad.title}</h5>
          <p className="card-text">{ad.description}</p>
          <p className="card-text">
            Contact: {showContact ? ad.contact : '***'}
          </p>
          <button
            className="btn btn-primary mr-2"
            onClick={handleToggleContact}
          >
            {showContact ? 'Hide Contact' : 'Show Contact'}
          </button>
          <button className="btn btn-secondary" onClick={handleDetailsClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;