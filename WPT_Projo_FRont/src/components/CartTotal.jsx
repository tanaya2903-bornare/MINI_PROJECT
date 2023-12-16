// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Product = ({ id, name, price, addToCart }) => {
//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>${price.toFixed(2)}</Card.Text>
//         <Button variant="primary" onClick={() => addToCart(id, name, price)}>
//           Add to Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// const Cart = ({ cartItems, removeFromCart }) => {
//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <Col xs={12} md={4}>
//       <h2>Shopping Cart</h2>
//       <div>
//         <Badge pill variant="info">
//           {totalQuantity} items
//         </Badge>{' '}
//         ${totalPrice.toFixed(2)}
//       </div>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
//             <Button variant="danger" size="sm" className="ml-2" onClick={() => removeFromCart(item.id)}>
//               Remove
//             </Button>
//           </li>
//         ))}
//       </ul>
//     </Col>
//   );
// };

// const AddToCartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (id, name, price) => {
//     const existingItem = cartItems.find((item) => item.id === id);

//     if (existingItem) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { id, name, price, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const products = [
//     { id: 1, name: 'Product 1', price: 19.99 },
//     { id: 2, name: 'Product 2', price: 29.99 },
//     { id: 3, name: 'Product 3', price: 39.99 },
//   ];

//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={8}>
//           <h2>Product List</h2>
//           <Row>
//             {products.map((product) => (
//               <Product key={product.id} {...product} addToCart={addToCart} />
//             ))}
//           </Row>
//         </Col>
//         {cartItems.length > 0 && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
//       </Row>
//     </Container>
//   );
// };

// export default AddToCartPage;

































           

// Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  useEffect(() => {
    // Fetch cart items from the server
    axios.get('/api/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error(error));
  }, []); // Empty dependency array to run the effect only once

  const addToCart = () => {
    // Add a new item to the server and update the local state
    axios.post('/api/cart', { name: newItemName })
      .then(response => setCartItems([...cartItems, response.data]))
      .catch(error => console.error(error));

    // Clear the input field after adding to the cart
    setNewItemName('');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <div>
        <h3>Available Items</h3>
        <input
          type="text"
          placeholder="Enter item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cart;