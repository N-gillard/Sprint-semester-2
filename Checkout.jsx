import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';

function Checkout() {
  const { cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - {item.quantity} x {item.price}</li>
        ))}
      </ul>
      <p>Total: {totalPrice}</p>
    </div>
  );
}

export default Checkout;

