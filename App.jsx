import React, { useState } from 'react';
import ProductList from '/src/components/ProductList.jsx';
import ProductDetail from '/src/components/ProductDetail.jsx';
import '/style.css';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <ProductList onSelect={handleSelectProduct} />
      <ProductDetail product={selectedProduct} />
    </div>
  );
};

export default App;


