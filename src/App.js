import { FaxRounded } from "@mui/icons-material"
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from "./components/pages/home/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './app.css';
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";


function App(){
    return(

    <Router>
        
        <Topbar />
        <div className="container">
            <Sidebar />
           
     
          <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/users" element={<UserList />}/>
             <Route exact path="/user/:userId" element={<User />}/>
             <Route exact path="/newUser" element={<NewUser />}/>
             <Route exact path="/products" element={<ProductList />}/>
             <Route exact path="/product/:produtId" element={<Product />}/>
             <Route exact path="/newProduct" element={<NewProduct />}/>
    
         
          </Routes>

        </div>
    </Router>

    )
}

export default App