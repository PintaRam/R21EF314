import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Company: {product.company}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Rating: {product.rating}</p>
        <p className="card-text">Discount: {product.discount}%</p>
        <p className="card-text">Availability: {product.availability}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
