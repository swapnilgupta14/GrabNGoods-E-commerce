import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../../features/cart/cartSelectors";

export const CheckOutTotal = () => {
  const cartItems = useSelector(selectCartItems);

  const deliveryCharge = 0;

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Total price calculation
  const totalPrice = subtotal + deliveryCharge;

  return (
    <div className="shadow-md rounded-md p-6 bg-white">
      <div className="border-b pb-4 mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">Order Summary</h3>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <p>Items ({cartItems.length}):</p> 
          <p>Rs {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p>Delivery Charge:</p> 
          <p>Rs {deliveryCharge.toFixed(2)}</p>
        </div>
        <div className="border-t pt-4 flex justify-between text-lg font-semibold text-gray-800">
          <p>Total:</p> 
          <p>Rs {totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/order">
            <button className="w-full py-1 px-10 rounded-md text-white bg-green-700 hover:bg-green-800 transition duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
