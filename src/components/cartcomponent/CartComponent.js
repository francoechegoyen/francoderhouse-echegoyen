import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
const CartComponent = ({ show, onMouseEnter, onMouseLeave }) => {
  return (
    <React.Fragment>
      <nav>
        <FaCartArrowDown className="cart">
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          </FaCartArrowDown>
      </nav>
      <div className={`cart ${show ? "" : "invisible"}`}>
      </div>
    </React.Fragment>
  );
};

export default CartComponent;
