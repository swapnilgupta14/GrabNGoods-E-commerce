import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeCart } from "../../../features/cart/addToCartSlice";

export const CheckOutItems = ({ item }) => {
  const { id, title, image, quantity, price, description, category, rating } = item || {};
  const dispatch = useDispatch();

  // Remove cart item handler
  const removeCartItemHandler = (id) => {
    dispatch(removeCart(id));
  };

  // Increase product quantity
  const increaseProductQtyHandler = (id) => {
    dispatch(increaseQty({ id, data: quantity + 1 }));
  };

  // Decrease product quantity
  const decreaseProductQtyHandler = (id) => {
    dispatch(decreaseQty({ id, data: quantity - 1 }));
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-6 py-4">
        <img
          src={image}
          alt="product"
          className="w-20 h-20 object-cover rounded-md"
        />
      </td>
      <td className="px-6 py-4 font-medium text-gray-700">
        <p className="text-lg">{title?.substring(0, 50)}...</p>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-xs text-gray-500">{description?.substring(0, 80)}...</p>
        <p className="text-sm text-yellow-500">
          Rating: {rating?.rate} ({rating?.count} reviews)
        </p>
      </td>
      <td className="px-6 py-4 font-medium text-gray-700">Rs {price.toFixed(2)}</td>
      <td className="px-6 py-4">
        <div className="flex items-center bg-green-700 rounded-md overflow-hidden">
          <button
            disabled={quantity <= 1}
            className="bg-green-900 text-white py-1 px-3"
            onClick={() => decreaseProductQtyHandler(id)}
          >
            -
          </button>
          <span className="w-10 bg-transparent text-gray-100 font-normal text-center">
            {quantity}
          </span>
          <button
            className="bg-green-900 text-white py-1 px-3"
            onClick={() => increaseProductQtyHandler(id)}
          >
            +
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-medium text-gray-700">Rs {(price * quantity).toFixed(2)}</td>
      <td className="px-6 py-4">
        <button
          className="text-red-600 hover:text-red-800 transition-colors duration-300"
          onClick={() => removeCartItemHandler(id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};
