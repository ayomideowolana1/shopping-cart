import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../App";
import Cart from "./Cart";
import getData from "./data";

const RouterComponent = () => {
  const [data, setData] = useState(getData());
  const [cartData, setCartData] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartCost, setCartCost] = useState(0);

  const handleCartCount = (action) => {
    let totalAmount = 0;
    let totalCost = 0;
    cartData.forEach((item) => {
      let arr = data.filter((i) => {
        return i.id == item;
      });
      totalAmount += arr[0].amount;
      totalCost += arr[0].amount * arr[0].cost;
    });
    setCartAmount(totalAmount);
    setCartCost(totalCost.toFixed(2));
  };

  const increaseAmount = (id) => {
    let arr = data;
    let item = arr.filter((i) => {
      return i.id == id;
    });
    let index = arr.indexOf(item[0]);
    arr[index].amount = arr[index].amount + 1;
    setData([...arr]);
  };

  const decreaseAmount = (id) => {
    let arr = data;
    let item = arr.filter((i) => {
      return i.id == id;
    });
    let index = arr.indexOf(item[0]);
    arr[index].amount = arr[index].amount - 1;
    setData([...arr]);
  };

  const addToCart = (id) => {
    setCartData([...cartData, id]);
  };

  const removeFromCart = (id) => {
    let arr = cartData;
    let newArr = arr.filter((i) => {
      return i != id;
    });
    setCartData([...newArr]);
  };

  useEffect(() => {
    // console.log(cartData);
    handleCartCount();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <App
              data={data}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartData={cartData}
              cartAmount={cartAmount}
              handleCartCount={handleCartCount}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              data={data}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
              removeFromCart={removeFromCart}
              cartData={cartData}
              cartAmount={cartAmount}
              cartCost={cartCost}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
