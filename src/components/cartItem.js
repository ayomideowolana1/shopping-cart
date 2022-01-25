import React, { useState, useEffect } from "react";

const CartItem = ({
  id,
  data,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
}) => {
  const [amount, setAmount] = useState();
  const [src, setSrc] = useState();
  const [cost, setCost] = useState();

  const handleIncrease = () => {
    increaseAmount(id);
  };
  const handleDecrease = () => {
    decreaseAmount(id);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  useEffect(() => {
    let item = data.filter((i) => {
      return i.id == id;
    });
    setAmount(item[0].amount);
    setSrc(item[0].src);
    setCost(item[0].cost);
  });

  return (
    <div className=" col-12 col-lg-6">
      <div className="container-fluid">
        <div className="row cartItem">
          <div className="col col-sm-12 col-md-6">
            <img src={src} />
          </div>
          <div className=" col-sm-8 m-auto col-md-6">
            <p>name</p>
            <p>
              <span>Cost: </span>
              <span>${(amount * cost).toFixed(2)}</span>
            </p>
            <div>
              <div className="cartButtonsCont">
                <button onClick={handleIncrease}>+</button>
                <span>{amount}</span>
                <button onClick={handleDecrease}>-</button>
              </div>
              <button onClick={handleRemove}>Remove from cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
