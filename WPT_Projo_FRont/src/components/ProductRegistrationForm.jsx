import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { saveProduct } from "../services/ProductServices";
import NavigationBar from "./NavigationBar";

export default function ProductRegistrationForm() {
  const [formData, setFormData] = useState({
    product_id: "",
    product_name: "",
    description: "",
    price: "",
    category: "",
    quantity_in_stock: "",
    image_url: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation to check if fields are not empty
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

    if (!isFormValid) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }

    // Validate Price and Quantity in Stock as integers
    const isPriceValid = /^\d+$/.test(formData.price);
    const isQuantityValid = /^\d+$/.test(formData.quantity_in_stock);

    if (!isPriceValid || !isQuantityValid) {
      alert("Price and Quantity in Stock must be valid integers.");
      return;
    }

    try {
      const result = await saveProduct(formData);
      setFormData({
        product_id: "",
        product_name: "",
        description: "",
        price: "",
        category: "",
        quantity_in_stock: "",
        image_url: "",
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Product ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product ID"
                  name="product_id"
                  value={formData.product_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Quantity in Stock</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Quantity in Stock"
                  name="quantity_in_stock"
                  value={formData.quantity_in_stock}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="mt-3">
          <Col lg={4}>
            {isSubmitted ? (
              <Alert variant="success">Product Registered</Alert>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
}