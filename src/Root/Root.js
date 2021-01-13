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
import { Check } from "@material-ui/icons";

const Root = () => {
  const [initialProducts, setInitialProducts] = useState([...localData]);
  const [products, setProducts] = useState([...localData]);
  const [cart, setCart] = useState([]);
  const [filteredCart, setFilteredCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [productsInCartQuantity, setProductsInCartQuantity] = useState(0);
  const [category, setCategory] = useState("all");

  const [check, setCheck] = useState(true);
  const [filterCategory, setFilterCategory] = useState("all");

  const increaseProductsInCartQuantity = () => {
    setProductsInCartQuantity(productsInCartQuantity + 1);
  };

  const decreaseProductsInCartQuantity = () => {
    setProductsInCartQuantity(productsInCartQuantity - 1);
  };

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
    increaseProductsInCartQuantity();
    setCart([...new Set([...cart, filteredProduct])]);
  };

  const handleDuplicatesInCart = (productId) => {
    const mappedProduct = cart.map((product) => {
      if (product.productId === productId) {
        product.productQuantity += 1;
      }
      return product;
    });

    setCart([...mappedProduct]);
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

  const handleProductQuantityInCartAdd = (productId) => {
    const mappedProduct = cart.map((product) => {
      if (product.productId === productId) {
        product.productQuantity += 1;
      }
      return product;
    });

    increaseProductsInCartQuantity();
    setCart([...mappedProduct]);
  };

  const handleProductQuantityInCartRemove = (productId) => {
    const mappedProduct = cart.map((product) => {
      if (product.productId === productId) {
        product.productQuantity -= 1;
      }
      return product;
    });
    decreaseProductsInCartQuantity();
    setCart([...mappedProduct]);
  };

  const handleRemoveProductFromCartBtn = (productId, productQuantity) => {
    const mappedProduct = cart.filter((product) => {
      if (product.productId !== productId) {
        return product;
      } else {
        setProductsInCartQuantity(
          productsInCartQuantity - product.productQuantity
        );
        product.productQuantity = 1;
      }
    });

    setCart([...mappedProduct]);

    // setProductsInCartQuantity(productsInCartQuantity - productQuantity);\
  };

  const filteredByPrice = (e) => {
    // setCheck(!check);

    const sortedProducts = products.sort((a, b) => {
      if (check === true) {
        return a.productPrice - b.productPrice;
      } else {
        return b.productPrice - a.productPrice;
      }
    });
    setProducts([...sortedProducts]);
  };

  // const filterByCategory = (e) => {
  //   const filter = e.target.value;
  //   console.log(filter);

  //   switch (filter) {
  //     case "cameras":
  //       const filteredByCameras = products.filter((product) => {
  //         if (product.productCategory === "cameras") {
  //           return product;
  //         }
  //         setProducts([...filteredByCameras]);
  //       });
  //       break;
  //     case "lenses":
  //       const filteredByLenses = products.filter((product) => {
  //         if (product.productCategory === "lenses") {
  //           return product;
  //         }
  //         setProducts([...filteredByLenses]);
  //       });
  //       break;
  //     case "speedlights":
  //       const filteredBySpeedlights = products.filter((product) => {
  //         if (product.productCategory === "speedlights") {
  //           return product;
  //         }
  //         setProducts([...filteredBySpeedlights]);
  //       });
  //       break;

  //     default:
  //       setProducts([...initialProducts]);
  //       break;
  //   }

  //   if (filter === "cameras") {
  //     const filteredByCameras = products.filter((product) => {
  //       if (product.productCategory === "cameras") {
  //         return product;
  //       }
  //       setProducts([...filteredByCameras]);
  //     });
  //   }
  // };

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
          handleProductQuantityInCartAdd,
          handleProductQuantityInCartRemove,
          handleRemoveProductFromCartBtn,
          cartTotalPrice,
          productsInCartQuantity,
          handleDuplicatesInCart,
          check,
          filteredByPrice,
          // filterByCategory,
          // filterCategory,
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
