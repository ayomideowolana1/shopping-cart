import React, { useState, useEffect } from "react";
import CartItem from "./cartItem";
import GlobalNav from "./GlobalNav";

const Cart = ({
  cartData,
  data,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
  cartAmount,
  cartCost,
}) => {
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    cartCost > 0 ? setShowCart(true) : setShowCart(false);
  });
  return (
    <div className="cart">
      <GlobalNav cartAmount={cartAmount} />
      {showCart ? (
        <div className="container-fluid">
          <div className="row cartItemsCont m-auto">
            <div>
              <p className="p-2">
                Number of items: {cartAmount} | Total cost: ${cartCost}
              </p>
            </div>
            {cartData.map((i) => {
              return (
                <CartItem
                  key={i}
                  id={i}
                  increaseAmount={increaseAmount}
                  decreaseAmount={decreaseAmount}
                  removeFromCart={removeFromCart}
                  data={data}
                  cartData={cartData}
                />
              );
            })}
          </div>
        </div>
      ) : (
        "Your cart is empty"
      )}
    </div>
  );
};

export default Cart;
