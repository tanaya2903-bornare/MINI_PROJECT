import React, { useEffect, useState } from 'react';
import { Container, Row,  } from 'react-bootstrap';
import { fetchAllProduct } from '../services/ProductServices';
import { ProductCard } from './ProductCard';
import NavigationBar from './NavigationBar';

const ProductList = () => {

  const[products,setProducts]= useState([]);

  async function fetchProductList() {
    try {
    const data = await  fetchAllProduct();
    setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
      fetchProductList();
  },[])

  return (
    <>
    <NavigationBar></NavigationBar>
    <Container className="mt-4">
      
      <Row >
        {
          products.map((product)=>{
            return(
              <ProductCard product={product}></ProductCard>
            )
          })
        }
      </Row>
    </Container>
    </>
  );
};

export default ProductList;