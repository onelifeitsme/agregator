// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Импорт CSS для стилизации списка

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
