import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts = category === 'All'
    ? products
    : products.filter(product => product.category === category);

  return (
    <div>
      <h1>Product Listing</h1>
      <div>
        <label>Filter by Category: </label>
        <select onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 3 }}>
          <h2>Products</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '150px' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                          
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price}
                  <button onClick={() => removeFromCart(product)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
