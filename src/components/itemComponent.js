import Reat, { useState, useEffect } from "react";

const ItemComponent = ({
  id,
  name,
  desc,
  src,
  cost,
  amount,
  increaseAmount,
  decreaseAmount,
  addToCart,
  removeFromCart,
  cartData,
  handleCartCount,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [inCart, setInCart] = useState(false);
  const handleIncrease = () => {
    increaseAmount(id);
  };
  const handleDecrease = () => {
    decreaseAmount(id);
  };
  const handleAddToCart = () => {
    if (inCart) {
      removeFromCart(id);
      setInCart(false);
    } else {
      addToCart(id);
      setInCart(true);
    }
  };
  useEffect(() => {
    amount == 1 ? setDisabled(true) : setDisabled(false);
    if (cartData.includes(id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  });
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <div className="itemComponent">
        <img src={src} />
        <p>{name}</p>
        <p>{desc}</p>
        <p>${cost}</p>
        <div className="buttonsContainer">
          <div>
            <button onClick={handleIncrease}>+</button>
            <span>{amount}</span>
            <button disabled={disabled} onClick={handleDecrease}>
              -
            </button>
          </div>
          <button onClick={handleAddToCart}>
            {inCart ? "Remove from Cart" : "Add to cart "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
