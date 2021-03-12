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
import {
  getCartFromLocalStorage,
  getProductsCounterFromLocalStorage,
} from "../utils/localStorageGetters";
import { client } from "../contentfulConfig";

const Root = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [filteredCart, setFilteredCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [productsInCartQuantity, setProductsInCartQuantity] = useState(
    getProductsCounterFromLocalStorage()
  );
  const [category, setCategory] = useState("all");

  const [freeDeliveryCheckbox, setFreeDeliveryCheckbox] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [maxProductPrice, setMaxProductPrice] = useState(0);
  const [filteredPrice, setFilteredPrice] = useState(0);
  const [productSearchValue, setProductSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [popperInputSearchValue, setPopperInputSearchValue] = useState("");
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [popperProducts, setPopperProducts] = useState([]);

  const setContentfulProducts = (data) => {
    const contentfulProducts = data.map((item) => {
      const productId = item.sys.id;
      const formattedProductImage = item.fields.productImage.fields.file.url;
      const product = {
        productId,
        ...item.fields,
        productImage: formattedProductImage,
      };

      return product;
    });

    console.log(contentfulProducts);
    setInitialProducts([...contentfulProducts]);
    setProducts([...contentfulProducts]);

    const maxPrice = contentfulProducts.map((product) => {
      return product.productPrice;
    });

    const productMaxPrice = Math.max(...maxPrice);

    setMaxProductPrice(productMaxPrice);
    setFilteredPrice(productMaxPrice);
  };

  const getContentfulProducts = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((res) => {
        console.log(res.items);
        setContentfulProducts(res.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContentfulProducts();
  }, []);

  const setCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    setCartToLocalStorage();
  }, [cart]);

  const setProductsCounterToLocalStorage = () => {
    localStorage.setItem("counter", JSON.stringify(productsInCartQuantity));
  };

  useEffect(() => {
    setProductsCounterToLocalStorage();
  }, [productsInCartQuantity]);

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
    let filteredProduct = products.find((product) => {
      return product.productId === productId;
    });

    if (filteredProduct.freeDelivery) {
      const discountedProductPrice =
        filteredProduct.productPrice - filteredProduct.productPrice * 0.1;
      filteredProduct = {
        ...filteredProduct,
        discountedProductPrice,
      };
    }

    let isProductAlreadyInCart;

    cart.forEach((product) => {
      if (product.productId === productId) {
        isProductAlreadyInCart = true;
      }
    });

    increaseProductsInCartQuantity();
    if (isProductAlreadyInCart) {
      setCart([...new Set([...cart])]);
    } else {
      setCart([...new Set([...cart, filteredProduct])]);
    }
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
      if (product.freeDelivery) {
        tempCartTotalPrice +=
          product.discountedProductPrice * product.productQuantity;
      } else {
        tempCartTotalPrice += product.productPrice * product.productQuantity;
      }
    });

    setCartTotalPrice(Math.floor(tempCartTotalPrice));
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

  const filterProducts = () => {
    let tempProducts = [...initialProducts];
    console.log(tempProducts);

    if (filterCategory !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.productCategory === filterCategory
      );
    }

    if (freeDeliveryCheckbox) {
      tempProducts = tempProducts.filter(
        (product) => product.freeDelivery === true
      );
    }

    tempProducts = tempProducts.filter(
      (product) => product.productPrice <= filteredPrice
    );

    if (productSearchValue.length !== 0) {
      tempProducts = tempProducts.filter((product) => {
        const productName = product.productName.toLowerCase();
        const searchValue = productSearchValue.toLowerCase();
        return productName.slice(0, searchValue.length) === searchValue;
      });
    }

    setProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
  }, [filterCategory, freeDeliveryCheckbox, filteredPrice, productSearchValue]);

  const handleProductPriceFilterChange = (e) => {
    setFreeDeliveryCheckbox(e.target.checked);
  };

  const filteredByPrice = (e) => {
    // setCheck(!check);

    // const sortedProducts = products.sort((a, b) => {
    //   if (check === true) {
    //     return a.productPrice - b.productPrice;
    //   } else {
    //     return b.productPrice - a.productPrice;
    //   }
    // });

    if (freeDeliveryCheckbox === true) {
      const freeDeliveryProducts = products.filter((product) => {
        if (product.freeDelivery === true) {
          return product;
        }
      });

      setProducts([...freeDeliveryProducts]);
    } else {
      const productsWithoutFreeDelivery = products.filter((product) => {
        if (product.freeDelivery === false) {
          return product;
        }
      });
      setProducts([...productsWithoutFreeDelivery]);
    }
  };

  // useEffect(() => {
  //   filteredByPrice();
  // }, [freeDeliveryCheckbox]);

  const handleFilterCategorySelectChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filterByCategory2 = () => {
    if (filterCategory !== "all") {
      const filteredProducts = initialProducts.filter(
        (product) => product.productCategory === filterCategory
      );
      setProducts([...filteredProducts]);
    } else {
      setProducts([...initialProducts]);
    }
  };

  // useEffect(() => {
  //   filterByCategory2();
  // }, [filterCategory]);

  const filterByCategory = (e) => {
    const filter = e.target.value;
    console.log(filter);

    switch (filter) {
      case "cameras":
        const filteredByCameras = initialProducts.filter((product) => {
          if (product.productCategory === "cameras") {
            return product;
          }
        });
        setProducts([...filteredByCameras]);

        break;
      case "lenses":
        const filteredByLenses = initialProducts.filter((product) => {
          if (product.productCategory === "lenses") {
            return product;
          }
        });
        setProducts([...filteredByLenses]);

        break;
      case "speedlights":
        const filteredBySpeedlights = initialProducts.filter((product) => {
          if (product.productCategory === "speedlights") {
            return product;
          }
        });
        setProducts([...filteredBySpeedlights]);

        break;

      default:
        setProducts([...initialProducts]);
        break;
    }

    // if (filter === "cameras") {
    //   const filteredByCameras = products.filter((product) => {
    //     if (product.productCategory === "cameras") {
    //       return product;
    //     }
    //     setProducts([...filteredByCameras]);
    //   });
    // }
  };

  const handleRangePriceChange = (e) => {
    setFilteredPrice(e.target.value);
  };

  // const setMaxPriceOfProduct = () => {
  //   const maxPrice = initialProducts.map((product) => {
  //     return product.productPrice;
  //   });

  //   const productMaxPrice = Math.max(...maxPrice);

  //   setMaxProductPrice(productMaxPrice);
  //   setFilteredPrice(productMaxPrice);
  // };
  // useEffect(() => {
  //   setMaxPriceOfProduct();
  // }, []);

  const hangleProductSearchChange = (e) => {
    setProductSearchValue(e.target.value);
  };

  const showAndHidePopper = (e) => {
    setAnchorEl(e.currentTarget);
    setPopperInputSearchValue(e.target.value);

    console.log(e.target.value);
  };

  useEffect(() => {
    if (popperInputSearchValue.length !== 0) {
      setIsPopperOpen(true);
    } else {
      setIsPopperOpen(false);
    }
  }, [popperInputSearchValue]);

  const filterProductsInPopper = () => {
    if (popperInputSearchValue.length !== 0) {
      const filteredProducts = initialProducts.filter((product) => {
        const productName = product.productName.toLowerCase();
        const popperInputSearchValueLowerCase = popperInputSearchValue.toLowerCase();
        return (
          productName.slice(0, popperInputSearchValue.length) ===
          popperInputSearchValueLowerCase
        );
      });

      setPopperProducts([...filteredProducts]);
    }
  };

  useEffect(() => {
    filterProductsInPopper();
  }, [popperInputSearchValue]);

  // TODO:

  const calculateFreeDeliveryProductPrice = () => {
    const mappedCart = cart.map((product) => {
      if (product.freeDelivery === true) {
        // let deliveryValue = product.productPrice * 0.1;
        // product.productPrice -= deliveryValue;

        const discountedProductPrice =
          product.productPrice - product.productPrice * 0.1;

        product = {
          ...product,
          discountedProductPrice,
        };
      }
      return product;
    });
    // setCart([...mappedCart]);
  };

  useEffect(() => {
    // calculateFreeDeliveryProductPrice();
  }, [cart]);
  // TODO:

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
          freeDeliveryCheckbox,
          filteredByPrice,
          handleProductPriceFilterChange,
          initialProducts,
          filterByCategory,
          handleFilterCategorySelectChange,
          maxProductPrice,
          filteredPrice,
          handleRangePriceChange,
          productSearchValue,
          hangleProductSearchChange,
          anchorEl,
          popperInputSearchValue,
          isPopperOpen,
          showAndHidePopper,
          popperProducts,
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
