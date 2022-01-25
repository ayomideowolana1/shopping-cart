import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import GlobalNav from "./components/GlobalNav";
import ItemComponent from "./components/itemComponent";

function App({
  data,
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  cartData,
  cartAmount,
  handleCartCount,
}) {
  return (
    <div className="App">
      <GlobalNav cartAmount={cartAmount} />
      <div className="container-fluid">
        <div className="row">
          {data.map((i) => {
            return (
              <ItemComponent
                key={i.id}
                id={i.id}
                name={i.name}
                desc={i.desc}
                src={i.src}
                cost={i.cost}
                amount={i.amount}
                increaseAmount={increaseAmount}
                decreaseAmount={decreaseAmount}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartData={cartData}
                handleCartCount={handleCartCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
