import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../features/cart/cartSelectors";
import { setTitle } from "../../../utils/setTitle";
import { CheckOutItems } from "./CheckOutItems";
import { CheckOutTotal } from "./CheckOutTotal";

export const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);

  let content;
  if (cartItems?.length === 0) {
    content = (
      <tr>
        <td colSpan="6" className="text-center py-8 text-gray-500">
          Your cart is empty.
        </td>
      </tr>
    );
  } else {
    content = cartItems?.map((item) => (
      <CheckOutItems key={item._id} item={item} />
    ));
  }

  // Set page title
  setTitle("CheckOut");

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="md:grid md:grid-cols-5 md:gap-8">
        <div className="shadow-lg rounded-lg p-6 w-full bg-white md:col-span-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700">
              <thead className="text-xs text-gray-600 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-4 text-left">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-left">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4 text-left">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-4 text-left">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
        <CheckOutTotal />
      </div>
    </div>
  );
};
