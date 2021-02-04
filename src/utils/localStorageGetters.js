export const getCartFromLocalStorage = () => {
  let localStorageCart;

  if (localStorage.getItem("cart")) {
    localStorageCart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorageCart = [];
  }

  return localStorageCart;
};

export const getProductsCounterFromLocalStorage = () => {
  let localStorageCounter;

  if (localStorage.getItem("counter")) {
    localStorageCounter = JSON.parse(localStorage.getItem("counter"));
  } else {
    localStorageCounter = 0;
  }

  return localStorageCounter;
};
