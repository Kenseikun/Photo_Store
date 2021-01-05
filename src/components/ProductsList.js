import React, { useContext } from "react";
import RootContext from "../context";
import ProductShow from "./atoms/ProductShow";

const ProductsList = () => {
  const context = useContext(RootContext);
  const { products, productCategory, productImage } = context;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li>
            <p>{product.productName}</p>
            <ProductShow color={productCategory} img={productImage} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
