import React, { useContext } from "react";
import RootContext from "../context";
import ProductShow from "./atoms/ProductShow";

const ProductsList = () => {
  const context = useContext(RootContext);
  const { products } = context;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li>
            <p>{product.productName}</p>
            <ProductShow
              color={product.productCategory}
              img={product.productImage}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
