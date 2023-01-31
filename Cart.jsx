import React from "react";
const Cart = (props) => {

    return (<>
        <div id="product" className="Cart1">
            <div className="Cart2">
                {props.value.length === 0 ? <div className="Cart"><h1>No Items in Cart</h1></div> : <div className="box1">
                    <h1></h1>
                    <h1 className="Cart">Your Cart Items</h1>
                    <button className="btn1" onClick={() => props.handleClearProducts()}>Clear Cart</button>
                </div>
                }
                <div className="card">
                    {
                        props.value.map((item, index) => {
                            return (
                                <div id={index} className="cardcart">
                                    <img src={item.img_url} />
                                    <div className="cardcart1" >
                                        <h2>{item.product_name}</h2>
                                        <div className="qunatity">
                                            <button className="btn" onClick={() => props.handleAddProduct(item)}>+</button>
                                            <span> Quantity : {item.qty} </span>
                                            <button className="btn" onClick={() => props.handleRemoveProduct(item)}>-</button>
                                        </div>
                                        <span>Price : &#8377; {item.price * item.qty}</span>
                                    </div>
                                </div>
                            )
                        })
                    }</div>

                {props.value.length > 0 ? <div className="total">
                    <h2>Total Price: &#8377; {props.total_price}</h2> </div> : null}
            </div>

        </div>
    </>)
}
export default Cart