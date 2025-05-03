import React from 'react';

function DiningCard({ name, cuisine, description, priceRange }) {
  return (
    <div className="dining-card">
      <h3>{name}</h3>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p>{description}</p>
      <p><strong>Price Range:</strong> {priceRange}</p>
    </div>
  );
}

export default DiningCard;
