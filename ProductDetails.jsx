import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from './api';
import { useShoppingCart } from './ShoppingCartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useShoppingCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [productId]);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/ShoppingCart');
  };

  if (error) {
    return <p>Error fetching product details: {error}</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;




