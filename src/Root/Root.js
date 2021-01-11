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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const [category, setCategory] = useState("all");

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleAddProductToCart = (productId) => {
    const filteredProduct = products.find((product) => {
      return product.productId === productId;
    });
    // const filteredProduct = products.find(
    //   (product) => product.productId === productId
    // );
    filteredProduct.productQuantity += 1;
    setCart([...new Set([...cart, filteredProduct])]);
  };

  const calculate = () => {
    let tempCartTotalPrice = 0;

    cart.forEach((product) => {
      return (tempCartTotalPrice +=
        product.productPrice * product.productQuantity);
    });

    setCartTotalPrice(tempCartTotalPrice);
  };

  useEffect(() => {
    calculate();
  }, [cart]);

  const totalProductsQuantity = () => {
    let tempCartTotalQuantity = 0;

    cart.forEach((product) => {
      return (tempCartTotalQuantity += product.productQuantity);
    });

    setProductsQuantity(tempCartTotalQuantity);
  };

  useEffect(() => {
    totalProductsQuantity();
  }, [cart]);

  const handleProductQuantityAddBtn = (productId) => {
    const mappedProduct = cart.map((product) => {
      if (product.productId === productId) {
        product.productQuantity += 1;
      }
      return product;
    });

    setCart([...mappedProduct]);
  };

  const handleProductQuantityRemoveBtn = (productId) => {
    const mappedProduct = cart.map((product) => {
      if (product.productId === productId) {
        product.productQuantity -= 1;
      }
      return product;
    });

    setCart([...mappedProduct]);
  };

  const handleRemoveProductFromCartBtn = (productId) => {
    const mappedProduct = cart.filter((product) => {
      if (product.productId !== productId) {
        return product;
      }
    });

    setCart([...mappedProduct]);
  };

  return (
    <>
      <RootContext.Provider
        value={{
          products,
          cart,
          isCartOpen,
          category,
          handleCartOpen,
          handleCartClose,
          handleAddProductToCart,
          handleProductQuantityAddBtn,
          handleProductQuantityRemoveBtn,
          handleRemoveProductFromCartBtn,
          cartTotalPrice,
          productsQuantity,
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
