import { Link } from "react-router-dom";

const GlobalNav = ({ cartAmount }) => {
  return (
    <div className="navBar">
      <div className="logo"></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart <span className="cartAmount">{cartAmount}</span>
        </Link>
      </nav>
    </div>
  );
};

export default GlobalNav;
