import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteProduct, fetchAllProduct } from "../services/ProductServices";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
//import  fetchAllProduct  from "../services/ProductServices";

export default function ProductListDisplay() {
  const [products, setProducts] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const navigate = useNavigate();

  const openModelDialog = () => {
    setShowDialog(true);
  };

  const closeModelDialog = () => {
    setShowDialog(false);
  };

  async function populateProductState() {
    try {
      const data = await fetchAllProduct();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateProductState();
  }, []);

  const handleProductDelete = async () => {
    try {
      await deleteProduct(selectedId);
      populateProductState();
      closeModelDialog();
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <>
    <NavigationBar></NavigationBar>
    <Container className="container-fluid">
        
      <Header text="List of all the products"></Header>
      

      {products.length !== 0 ? (
        <Table className="mt-1">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product_Name</th>
              <th>Description</th>
              <th>price</th>
              <th>category</th>
              <th>quantity_in_stock</th>
              <th>image_url</th>
            </tr>
          </thead>
          <tbody>
            {products.map((s) => {
              return (
                <tr>
                  <td>{s.product_id}</td>
                  <td>{s.product_name}</td>
                  <td>{s.description}</td>
                  <td>{s.price}</td>
                  <td>{s.category}</td>
                  <td>{s.quantity_in_stock}</td>
                  <td>{s.image_url}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        openModelDialog();
                        setSelectedId(s.product_id);
                      }}>
                      Delete
                    </Button>&nbsp;&nbsp;&nbsp;<Button
                      variant="primary"
                      onClick={() => {
                        navigate(`/edit/${s.product_id}`);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        "No products found"
      )}
      <Modal show={showDialog} onHide={closeModelDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete ${selectedId}?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleProductDelete();
            }}
          >
            yes
          </Button>
          <Button variant="primary" onClick={closeModelDialog}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
}