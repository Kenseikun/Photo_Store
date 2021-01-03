import React, { useState, useEffect } from "react";
import axios from "axios";
import RootContext from "../context";

import { localData } from "../localData";

const Root = () => {
  const [initialProducts, setInitialProducts] = useState([...localData]);
  const [products, setProducts] = useState([...localData]);
  return (
    <>
      <RootContext.Provider value={{ products }}>
        <h1>aa</h1>
      </RootContext.Provider>
    </>
  );
};

export default Root;
