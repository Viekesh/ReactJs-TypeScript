import { useState, useEffect } from "react";
import ErrorManager from "./ErrorManager";
import getProducts from "./ProductListE";
import Product from "./ProductErrorUI";
import "./ErrorUI.scss";



const ErrorUI = () => {

    // declare state variable "products" to hold product data (initially empty array)
    const [products, setProducts] = useState([]);



    // declare state variable "category" to store the active category (initially empty string).
    const [category, setCategory] = useState("");



    // Fetches products using getProducts(), sets products state upon completion.
    // Doesn't handle potential errors in getProducts().
    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    });

    // Updates category state based on clicked category button.
    const filterByCategory = (cat) => {
        category === cat ? setCategory("") : setCategory(cat);
    };



    // Component render:
    // Wraps content in ErrorManager for error handling.
    // Renders category buttons:
    // Uses "Set" to get unique product types.
    // Maps unique categories to buttons with conditional styling.
    // Potential Issue: No error handling for setProducts inside useEffect.
    // Conditionally displays products or a "Pick a category" message:
    // Filters products based on selected category.
    // Renders individual Product components for filtered products.
    return (
        <div className="error_container">

            <ErrorManager onClose={() => setCategory("")}>

                <div className="categories">
                    {[...new Set(products.map((p) => p.type))].map((cat) => (
                        <div
                            className={category === cat ? "cat-btn cat-btn-on" : "cat-btn"}
                            key={cat}
                            onClick={() => filterByCategory(cat)}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                {
                    category ?
                        (
                            products
                                .filter((p) => p.type === category)
                                .map((p) => <Product item={p} key={p.id} />)
                        ) : (
                            <p className="pick-text">Pick a category</p>
                        )
                }

            </ErrorManager>
        </div>
    );
};



export default ErrorUI;
