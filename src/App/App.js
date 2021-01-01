import React, { useState, useEffect } from "react";
import { localData } from "../localData";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([...localData]);
  }, []);

  return (
    <div className="App">
      <ul>
        {products.map((product) => {
          const { productId, productName, productImage } = product;
          return (
            <li key={productId}>
              <p>{productName}</p>
              <img
                src={productImage}
                alt="product"
                style={{ width: "220px" }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
