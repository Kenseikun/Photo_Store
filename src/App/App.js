import React, { useState, useEffect } from "react";
import axios from "axios";
import { localData } from "../localData";

const App = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts([...localData]);
  // }, []);

  // const jsonData = JSON.stringify(localData);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_FIREBASE_API}`)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      {/* <ul>
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
      </ul> */}
    </div>
  );
};

export default App;
