import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";



import About from "./components/About";
import "./components/About.css" ; 


import ContactUs from "./components/ContactUs";
import ProductList from "./components/ProductList";
//import NavigationBar from "./components/NavigationBar";
import AddToCart from "./components/AddToCart";
import { LoginForm } from "./components/LoginForm";
import { Signup } from "./components/Signup";
import  CartTotal from "./components/CartTotal";
import ProductRegistrationForm from "./components/ProductRegistrationForm";
import ProductListDisplay from "./components/ProductListDisplay";
import ProductEditList from "./components/ProductEditList";
import { PrivateRoute } from "./components/PrivateRoute";
import { RedirectIfLoggedIn } from "./components/RedirectIfLoggedIn";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        
      <Route path="/" element={<RedirectIfLoggedIn><LoginForm/></RedirectIfLoggedIn>}></Route>
      <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}></Route>

      <Route path="/about" element={<About/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route path="/ProductList" element={<PrivateRoute><ProductList/></PrivateRoute>}></Route>
      <Route path="/AddToCart" element={<AddToCart/>}></Route>
      <Route path="/CartTotal" element={<CartTotal/>}></Route>
      <Route path="/edit/:product_id" element={<PrivateRoute><ProductEditList/></PrivateRoute>}></Route>

      <Route path="/ProductListDisplay" element={<PrivateRoute><ProductListDisplay/></PrivateRoute>}></Route>
      <Route path="/ProductRegistrationForm" element={<PrivateRoute><ProductRegistrationForm/></PrivateRoute>}></Route>
      


        
        
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
