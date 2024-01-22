import React from "react";



const Products = ({ product, update }) => {
    return (
        <>
            <div className="product">
                <div className="product-name">{product.name}</div>
                <div className="product-qty">
                    <input
                        type="number"
                        defaultValue="1"
                        onChange={e => update(product.id, Number(e.target.value))}
                    />
                </div>
                <div className="product-cost">${product.cost}</div>
                <div className="product-total-cost">
                    ${Math.ceil(product.qty * product.cost)}
                </div>
            </div>
        </>
    )
}



export default Products;