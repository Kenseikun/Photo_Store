import React from "react";
import DisplayProduct from "./molecules/DisplayProduct";

const ProductsList = ({ products }) => {
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
          freeDelivery,
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
              productId={productId}
              freeDelivery={freeDelivery}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
