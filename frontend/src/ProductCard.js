// ProductCard.js
import React from 'react';
import './ProductCard.css'; // Импорт CSS для стилизации карточки

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{product.price}</span>
      {/* Добавьте другие данные товара */}
    </div>
  );
}

export default ProductCard;