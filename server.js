const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample product data (this could be from a database)
const products = [
  { id: 1, name: "cloth", price: 29.99, category: "Mens", imageUrl: "https://tse3.mm.bing.net/th?id=OIP._BKvokRcB18vkGtw9ifdOAHaEo&pid=Api&P=0&h=220" },
  { id: 2, name: "Product 2", price: 49.99, category: "Womens", imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 19.99, category: "Kids", imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", price: 99.99, category: "Kids", imageUrl: "https://via.placeholder.com/150" },
];

// API to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
