//const express = require('express');
//const mongoose = require('mongoose');
import mongoose, { Schema } from "mongoose";


const cartItemSchema = new mongoose.Schema({
    name: String,
  });

//const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/shopping-cart', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Define a simple schema for cart items


const CartItem = mongoose.model('CartItem', cartItemSchema);

// Middleware
//app.use(bodyParser.json());

// Routes
// app.get('/api/cart', async (req, res) => {
//   try {
//     const cartItems = await CartItem.find();
//     res.json(cartItems);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/api/cart', async (req, res) => {
//   try {
//     const newItem = new CartItem({ name: req.body.name });
//     await newItem.save();
//     res.json(newItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });