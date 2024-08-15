import React from "react";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/addToCartSlice";
import createSlug from "../../utils/createSlug";

export const ProductCard = ({ product }) => {
  const { id, image, description, rating, price, name } = product || {};
  const dispatch = useDispatch();

  // Create product slug
  const productSlug = createSlug(name);

  // Add to cart handler
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Product Added To Cart");
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-101">
      <Link to={`/product-details/${productSlug}/${id}`}>
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt="product"
            className="w-full h-48 object-contain p-4"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Link to={`/product-details/${productSlug}/${id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-200 ease-in-out">
              {name?.substring(0, 17)}
            </h3>
          </Link>
          <p className="text-lg font-bold text-gray-900">Rs {price}</p>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {description?.substring(0, 45)}...
        </p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < rating.rate ? "text-orange-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 text-sm font-thin ml-2">
            ({rating.rate})
          </span>
        </div>
        <button
          className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-orange-700 transition-colors duration-200 ease-in-out"
          onClick={() => addToCartHandler(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
