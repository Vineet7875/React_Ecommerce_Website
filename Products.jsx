import React from "react";
import JSONDATA from "./Data.json"
const Products = (props) => {
    return (<>
        <div id="product" className="Product1">
            <h1 id="Product">Our Products</h1>
            <div className="Product2">
                {JSONDATA.map((product) => {
                    return (
                        <div id={product.id} className="cardpro" >
                            <img src={product.img_url} />
                            <h2>{product.product_name}</h2>
                            <span>&#8377; {product.price}</span>
                            <button onClick={() => props.event(product)}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </>)
}
export default Products