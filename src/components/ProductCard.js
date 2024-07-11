import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.productname}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <p>Discount: ${product.discount}</p>
      <p>{product.availablity}</p>
    </div>
  );
};

export default ProductCard;
