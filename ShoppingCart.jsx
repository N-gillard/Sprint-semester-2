import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { cartItems, removeItem } = useShoppingCart();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}{' '}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to="/checkout">Continue to Checkout</Link>
    </div>
  );
};

export default ShoppingCart;




