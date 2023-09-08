
import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../ProductList';

test('renders product list correctly', () => {
  const { getByText } = render(<ProductList />);
  const product1 = getByText('Product 1 - 10.99');
  const product2 = getByText('Product 2 - 19.99');

  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();
});
