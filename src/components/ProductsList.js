import React, { useContext } from "react";
import RootContext from "../context";
import DisplayProduct from "./molecules/DisplayProduct";

const ProductsList = () => {
  const context = useContext(RootContext);
  const { products } = context;

  return (
    <ul>
      {products.map((product) => {
        const {
          productId,
          productName,
          productPrice,
          productDescription,
          productCategory,
          productImage,
        } = product;
        return (
          <li key={productId}>
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
