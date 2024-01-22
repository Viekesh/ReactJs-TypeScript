import React, { Component } from "react";
import ProductAdd from "./ProductAdd";
import getProducts from "./ProductDB";
import ProductUpdate from "./ProductUpdate";
import "./ProductList.css";



class ProductList extends Component {
    state = {
        products: [],
        cart: []
    }



    componentDidMount = async () => {
        const fetchProducts = await getProducts();
        this.setState({
            products: fetchProducts,
        })
    }



    addProduct = (product) => {
        this.state.cart.find(p => p.id === product.id)
            ? alert("Product is already in the cart! Please adjust its quantity!")
            : this.setState({
                cart: [{ ...product, qty: 1 }, ...this.state.cart]
            })
    }



    updateQuantity = (id, qty) => {
        qty === 0
            ? this.setState({
                cart: this.state.cart.filter(p => p.id !== id)
            }) : this.setState({
                cart: this.state.cart.map(p => {
                    if (p.id === id) {
                        return { ...p, qty: qty }
                    }

                    return p;
                })
            });
    };



    getTotals = () => {
        return this.state.cart.reduce(
            (prev, curr) => prev + curr.qty * curr.cost,
            0
        );
    };



    render() {
        return (
            <>
                <div className="main">
                    <ProductAdd data={this.state.products} add={this.addProduct} />
                    <ProductUpdate
                        data={this.state.cart}
                        update={(id, qty) => this.updateQuantity(id, qty)}
                    />

                    <div className="totals">
                        <div className="totals-v">Total Cost: ${this.getTotals()}</div>
                    </div>
                </div>
            </>
        )
    }
}



export default ProductList;