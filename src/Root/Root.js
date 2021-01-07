import React, { useState, useEffect } from "react";
import RootContext from "../context";
import { localData } from "../localData";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Products from "../views/Products";
import { routes } from "../routes";

import Test from "../Test";
import MainTemplate from "../templates/MainTemplate";

const Root = () => {
  const [initialProducts, setInitialProducts] = useState([...localData]);
  const [products, setProducts] = useState([...localData]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleAddProductToBasket = (productId) => {
    const filteredProduct = products.find((product) => {
      return product.productId === productId;
    });
    setCart([...cart, filteredProduct]);
  };

  return (
    <>
      <RootContext.Provider
        value={{
          products,
          cart,
          isCartOpen,
          handleCartOpen,
          handleCartClose,
          handleAddProductToBasket,
        }}
      >
        {/* <Test /> */}
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.products} component={Products} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </RootContext.Provider>
    </>
  );
};

export default Root;
