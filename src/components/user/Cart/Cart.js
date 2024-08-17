import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartOpen } from "../../../features/cart/cartOpenSelector";
import { openCart } from "../../../features/cart/cartOpenSlice";
import { selectCartItems } from "../../../features/cart/cartSelectors";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartIsOpen = useSelector(selectCartOpen);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  let content;

  if (cartItems?.length === 0) {
    content = (
      <div className="text-center py-8 text-gray-500">
        <p>Your cart is empty.</p>
      </div>
    );
  } else {
    content = cartItems?.map((item) => (
      <CartItem key={item._id} item={item} />
    ));
  }

  return (
    <div
      className={`fixed z-50 right-0 top-0 h-full w-5/6 sm:w-[400px] bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto border-l
        ${cartIsOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Cart Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <p className="text-lg font-semibold">Shopping Cart</p>
        <button
          className="text-lg text-gray-500 hover:text-gray-800 transition-colors duration-200"
          onClick={() => dispatch(openCart(false))}
        >
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4">{content}</div>

      {/* Checkout Button */}
      <div className="px-4 py-4 bg-gray-100 border-t flex justify-center">
        <Link to="/checkout">
          <button className="bg-orange-600 text-white w-full p-2 rounded-md text-center font-medium hover:bg-orange-700 transition-all duration-200">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
