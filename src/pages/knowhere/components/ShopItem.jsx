import React from 'react';

function ShopItem({ item, price }) {
  return (
    <div className="shop-item">
      <h4>{item}</h4>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

export default ShopItem;
