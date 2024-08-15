import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  FaCashRegister,
  FaChair,
  FaRegHeart,
  FaSearchLocation,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductDetailsSkeleton } from "../../../components/ui/ProductDetailsSkeleton";
import { addToCart } from "../../../features/cart/addToCartSlice";
import { setTitle } from "../../../utils/setTitle";
import { RelatedProduct } from "./RelatedProduct";

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState({});
  const rating = product?.rating?.rate || 0;
  let isSuccess = false;

  async function fetchData(url) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const product = await response.json();
      setProduct(product);
      console.log(product);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: true, message: error.message };
    }
  }

  useEffect(() => {
    const url = "https://fakestoreapi.com/products/" + productId;
    fetchData(url);
  }, [productId]);

  if (isLoading)
    return (
      <>
        <ProductDetailsSkeleton />
      </>
    );

  if (!isLoading && isError)
    return (
      <h3 className="text-center uppercase font-medium text-red-600">
        Something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && !product)
    return (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );

  const { title, image, price, category, description } = product || {};
  const categoryId = category?._id;

  // Add to cart handler
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Product added to cart");
  };

  // Set page title
  setTitle(`${title} - Product Details`);

  return (
    <div className="container mx-auto my-7 px-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white rounded-md shadow-lg p-5">
        {/* Product Image */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-center items-center">
          <img src={image} alt="product" className="rounded-md max-w-full h-auto" />
        </div>

        {/* Product Details */}
        <div className="col-span-12 md:col-span-7 lg:col-span-5 space-y-4">
          <h1 className="text-2xl font-semibold">{title}</h1>

          <div className="flex flex-col space-y-3 border-b pb-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-yellow-500">
                {Array(Math.floor(rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                {rating % 1 > 0 && <FaStar className="text-yellow-300" />}
              </div>
              <span className="text-green-800 text-sm hover:underline cursor-pointer">
                {rating.toFixed(1)} Ratings
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-green-800 text-sm hover:underline cursor-pointer">
                6 Answered Questions
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Brand:</span> HP
              </p>
              <span className="text-gray-500">|</span>
              <Link to="/" className="text-green-800 text-sm hover:underline">
                More from this brand
              </Link>
            </div>
            <div className="bg-white rounded-md p-5 space-y-3">
            <h2 className="text-xl font-semibold">Product Details of {title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-3xl font-semibold text-orange-600">
              Rs {price.toFixed(2)}
            </p>
            <p className="text-gray-500 line-through">Rs 2000</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="bg-orange-600 text-white w-full py-2 rounded-md hover:bg-white hover:text-orange-600 border border-orange-600 transition duration-200"
              onClick={() => addToCartHandler(product)}
            >
              Add To Cart
            </button>
            <button
              className="bg-white text-orange-600 w-full py-2 rounded-md hover:bg-orange-600 hover:text-white border border-orange-600 transition duration-200"
              onClick={() => addToCartHandler(product)}
            >
              Buy Now
            </button>
          </div>         
        </div>

        {/* Delivery and Services */}
        <div className="col-span-12 lg:col-span-3 p-4 bg-gray-50 rounded-md space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Delivery</h3>
            <div className="flex items-center space-x-2 mt-2">
              <FaSearchLocation className="text-xl text-gray-600" />
              <p className="text-gray-700">
                Kanpur, Uttar Pradesh, 208001, India{" "}
                <span className="text-green-700 font-medium cursor-pointer">
                  change
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">
                Standard Delivery (7 - 14 days)
              </p>
              <p className="text-gray-700 font-medium">Rs {price.toFixed(2)}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Services</h3>
            <div className="flex items-center space-x-2 mt-2">
              <FaChair className="text-xl text-gray-600" />
              <div>
                <p className="font-medium text-gray-700">7 Days Returns</p>
                <p className="text-sm text-gray-500">
                  Change of mind is not applicable
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <FaCashRegister className="text-xl text-gray-600" />
              <p className="font-medium text-gray-700">Cash on Delivery Available</p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct categoryId={categoryId} />
    </div>
  );
};
