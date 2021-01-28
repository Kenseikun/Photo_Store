import React, { useContext } from "react";
import RootContext from "../context";

const DisplayProductInPopper = () => {
  const context = useContext(RootContext);
  const { popperProducts } = context;

  return (
    <ul>
      {popperProducts.map((product) => {
        const { productName } = product;
        return (
          <li>
            <p>{productName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayProductInPopper;
