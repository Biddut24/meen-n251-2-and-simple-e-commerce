import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Product from './../Shop/Product/Product';

const Cart = ({ cart, handleClerCart }) => {
 
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for(const Product of cart){
   quantity = quantity + Product.quantity;
  total = total + Product.price * Product.quantity;
  shipping = shipping + Product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed (2));
  const grandTotal = total + shipping + tax;




  return (
    <div className="m-6 space-y-6">
      <h3 className="text-2xl font-semibold mb-10">Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge:${shipping}</p>
      <p>Tax:${tax}</p>
      <h4 className="text-[21px] font-bold">Grand Total: ${grandTotal}</h4>

      <button
        onClick={handleClerCart}
        className="btn bg-[#FF3030] text-white w-full"
      >
        Clear the Cart <FontAwesomeIcon className="ms-1" icon={faTrash} />
      </button>

      <Link to="/order">
        <button className="btn btn-primary text-white w-full">
          View The Order{" "}
          <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
        </button>
      </Link>
    </div>
  );
};

export default Cart; 