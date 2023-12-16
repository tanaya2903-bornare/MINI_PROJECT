import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById, updateProduct } from "../services/ProductServices";
import NavigationBar from "./NavigationBar";
//import { NavigationBar } from "./NavigationBar";

export default function ProductEditForm() {
  const params = useParams();
  const [formData, setFormData] = useState({
    product_id: "",
    product_name: "",
    description: "",
    price: "",
    category: "",
    quantity_in_stock: "",
    image_url: "",
  });
  const [isSubmitted,setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateProduct(formData, params.product_id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const populateProductState = async () => {
    try {
      const result = await fetchProductById(params.product_id);
      setFormData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateProductState();
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
      
        <Header text="Update student here"></Header>
        {formData ? (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Product ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.product_id}
                    placeholder="Enter product id"
                    name="product_id"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.product_name}
                    placeholder="Enter Product name"
                    name="product_name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    value={isSubmitted ? formData.description : null}
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter price"
                    name="price"
                    value={isSubmitted ? formData.price : null}
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    name="category"
                    value={isSubmitted ? formData.category : null}
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>quantity_in_stock</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter quantity_in_stock"
                    name="quantity_in_stock"
                    value={isSubmitted ? formData.quantity_in_stock : null}
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>image_url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image_url"
                    name="image_url"
                    value={isSubmitted ? formData.image_url : null}
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col lg={3}>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <p>No data found for given Product Id</p>
        )}

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