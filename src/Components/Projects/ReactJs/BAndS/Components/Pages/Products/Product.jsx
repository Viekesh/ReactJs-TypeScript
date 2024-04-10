import React, { useState } from "react";
import ProductStyleSheet from "./Products.module.css";
import Plane from "../../../Img/plane.png";
import { ProductsData } from "../../../ServiceDB/Products";
import SubHead from "../../Featured/Headings/SubHeadings/SubHeading";



const Product = () => {

  // Here we can use "useState" hook to store our data 
  // "useState()" hook is also important because of this we filter our products categories
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  // Use JavaScript "filter" funtion for filter the product categories
  const filterProduct = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type))
  }

  return (
    <div className={ProductStyleSheet.product}>
      <h3>
        <SubHead headTitle="Our Usecase" />
        <span>
          <img src={Plane} alt="" />
        </span>
      </h3>

      <div className={ProductStyleSheet.container}>
        <div className={ProductStyleSheet.product_categories}>

          <ul className={ProductStyleSheet.menu}>
            <li onClick={() => setMenuProducts(ProductsData)}>All</li>
            <li onClick={() => filterProduct("skin care")}>Skin Care</li>
            <li onClick={() => filterProduct("conditioner")}>Conditioner</li>
            <li onClick={() => filterProduct("foundation")}>Foundations</li>
          </ul>

          <div className={ProductStyleSheet.list}>
            {
              menuProducts.map((product, i) => (
                <div className={ProductStyleSheet.product_image}>
                  <div className={ProductStyleSheet.left_s}>
                    <img src={product.img} alt="Product" className={ProductStyleSheet.img_p} />
                    <div className={ProductStyleSheet.name}>
                      <span>{product.name}</span>
                      <span>{product.detail}</span>
                      {/* <div>Shop Now</div> */}
                      {/* <span>{product.price}$</span> */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
