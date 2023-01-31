import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Nav";
import Products from "./Products";
import Cart from "./Cart";
import "./Nav.css"
import "./Products.css"
import "./Cart.css"
const Ecommerce = () => {
    const [CartItems, SetCartItems] = useState([])
    const handleAddProduct = (product) => {
        const exist = CartItems.find((item) => product.id === item.id)//item exists in cart or not //exits contains info of that product
        if (exist) {  //if exists then find that cart item and increase the qua
            SetCartItems(CartItems.map((item) => product.id === item.id ? { ...exist, qty: exist.qty + 1 } : item));
        }
        else {
            SetCartItems([...CartItems, product]);
        }
    }
    const handleRemoveProduct = (product) => {
        const exist = CartItems.find((item) => product.id === item.id)//item exists in cart or not //exits contains info of that product
        if (exist) {  //if exists then find that cart item and decrease the qua
            if (exist.qty > 1) {
                SetCartItems(CartItems.map((item) => product.id === item.id ? { ...exist, qty: exist.qty - 1 } : item));
            }
            //quantity=0 //dont display product having 0 quantity(item.id===product.id) remove it only display remaning 
            else {
                SetCartItems(CartItems.filter((item) => item.id !== product.id))
            }
        }
    }
    const handleClearProducts = () => {
        SetCartItems([])
    }
    const total_price = CartItems.reduce((price, item) => price + item.price * item.qty, 0)
    return (<>
        <Router>
            <Nav length={CartItems.length} />
            <Routes>
                <Route path="/" element={<Products event={handleAddProduct} />} />
                <Route path="/cart" element={<Cart value={CartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearProducts={handleClearProducts} total_price={total_price} />} />
            </Routes>
        </Router>
    </>)
}
export default Ecommerce