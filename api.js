const products = [
  { id: 1, name: 'Brake Rotors', description: 'Drilled and slottted brake rotors', price: 125 },
  { id: 2, name: 'Brake Rotor Set', description: 'Set of 2 drilled and slotted brake rotors', price: 235 },
  { id: 3, name: 'Calipers', description: 'Performance aluminum brake caliper', price: 200 },
  { id: 4, name: 'Ceramic Brake Pads', description: 'Performance Front and rear brake pad kit', price: 99 },
  { id: 5, name: 'Drum', description: 'Brake drum', price: 100 },
  { id: 6, name: 'Drum Set', description: 'Brake drum set(2)', price: 185 },
  { id: 7, name: 'Wheel Cylinder', description: 'Individual wheel cylinder', price: 40 },
  { id: 8, name: 'Ceramic Brake Shoes', description: 'Performance brake shoes set', price: 89 },
  { id: 9, name: 'Hold Down Kit', description: 'Hardware for drum brakes', price: 25 },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id == productId);

    if (product) {
      resolve(product);
    } else {
      reject(new Error('Product not found'));
    }
  });
};