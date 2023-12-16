import axios from "axios";
import { BASE_URL } from "./APIConstants";
import { getToken } from "../utils/TokenUtil";



export async function fetchCustomers() {
    try {
        const response =  await axios.get(`${BASE_URL}/customer`,
            {headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
    
}


export async function saveCustomer(customerData) {
    try {
        const response = await axios.post(`${BASE_URL}/customer`,customerData,
        {headers:{'Authorization':`Bearer ${getToken()}`
    }});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCustomer(customer_id) {
    try {
        const response = await axios.delete(
          `${BASE_URL}/customer/${customer_id}`,
          { headers: { 'Authorization': `Bearer ${getToken()}` } }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function fetchCustomerId(customer_id) {
  try {
    const response = await axios.get(`${BASE_URL}/customer/${customer_id}`, {
      headers: { 'Authorization': `Bearer ${getToken()}` 
    }});
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export async function updateCustomer(updatedData, customer_id) {
  try {
    const response = await axios.put(
      `${BASE_URL}/customer/${customer_id}`,
      updatedData,
      { headers: { 'Authorization': `Bearer ${getToken()}` } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}