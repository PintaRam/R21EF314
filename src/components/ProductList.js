import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product, index) => (
        <div className="col-md-4" key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
