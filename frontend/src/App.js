import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://0.0.0.0:8000/products') // Это URL, который соответствует вашему эндпоинту в FastAPI
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Ошибка при получении товаров:', error));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
