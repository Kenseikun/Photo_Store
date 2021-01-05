import React, { useContext } from "react";
import RootContext from "../context";
import Button from "./atoms/Button";
import ProductShow from "./atoms/ProductShow";
import DisplayProduct from "./molecules/DisplayProduct";

const ProductsList = () => {
  const context = useContext(RootContext);
  const { products } = context;

  return (
    <ul>
      {products.map((product) => {
        const {
          productName,
          productPrice,
          productDescription,
          productCategory,
          productImage,
        } = product;
        return (
          <li>
            {/* <p>{product.productName}</p> */}
            {/* <ProductShow
              type={product.productCategory}
              img={product.productImage}
            /> */}
            <DisplayProduct
              // {...product}
              productPrice={productPrice}
              productName={productName}
              productDescription={productDescription}
              productCategory={productCategory}
              productImage={productImage}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
