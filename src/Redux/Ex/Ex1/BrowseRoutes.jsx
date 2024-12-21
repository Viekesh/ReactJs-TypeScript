import { BrowserRouter, Link, Route } from "react-router-dom"
import NavButton from "./NavButton"
import CartButton from "./CartButton"
import { Switch } from "@mui/material"
import Catalog from "./Catalog"
import Cart from "./Cart"



const BrowseRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <div className="root">
                    <div className="app-bar">
                        <h1 className="title">ShopCart</h1>
                        <div className="navigation">
                            <Link to="/">
                                <NavButton label="CATALOG" />
                            </Link>
                            <Link to="/cart">
                                <CartButton items={0} />
                            </Link>
                        </div>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Catalog />
                            </Route>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
};



export default BrowseRoutes;