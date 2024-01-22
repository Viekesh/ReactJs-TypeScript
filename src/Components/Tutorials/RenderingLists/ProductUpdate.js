import React from "react";
import Products from "./Products";

const ProductUpdate = ({ data, update }) => {
    return (
        <div className="products-list">
            {data.map((p, index) => (
                <Products key={p.id} product={p} update={(id, qty) => update(id, qty)} />
            ))}
        </div>
    );
};

export default ProductUpdate;
