import React, { useContext } from "react";
import RootContext from "../context";

const ProductsList = () => {
  const context = useContext(RootContext);
  const { products } = context;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li>
            <p>{product.productName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
