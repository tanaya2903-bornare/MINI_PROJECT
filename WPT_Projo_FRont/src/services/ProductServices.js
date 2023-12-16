import axios from 'axios';
import { getToken } from '../utils/TokenUtil';

export async function fetchAllProduct() {
    try {
        
        const response = await axios.get("http://127.0.0.1:6749/Product",{headers:{'Authorization':`Bearer ${getToken()}`}});
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export async function fetchProductById(product_id) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:6749/Product/${product_id}`,{headers:{'Authorization':`Bearer ${getToken()}`}}
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function saveProduct(productData){
      try {
        const response = await axios.post(`http://127.0.0.1:6749/Product`,productData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
      } catch (error) {
        console.log(error);
      }
}

export async function deleteProduct(product_id) {
  try {
    const response = await axios.delete(`http://127.0.0.1:6749/Product/${product_id}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
    return response.data;
} catch (error) {
    
  }
}

export async function updateProduct(updatedData,product_id) {
  try {
    const response = await axios.put(`http://127.0.0.1:6749/Product/${product_id}`,updatedData,{headers:{'Authorization':`Bearer ${getToken()}`}});
    return response.data;
} 
  
  catch (error) {
    console.log(error);
  }
  
}