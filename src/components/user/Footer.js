import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../images/playstore.png";

export const Footer = () => {
  return (
    <footer className="px-4 py-6 bg-gray-100 text-gray-700">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <h1 className="text-2xl text-green-900 font-semibold">
              GrabNGoods
            </h1>
            <div className="space-y-4 mt-4">
              <p className="font-medium text-base">Contact Us</p>
              <div className="flex space-x-3">
                <AiOutlineWhatsApp className="text-2xl text-green-900" />
                <div>
                  <p className="text-sm">WhatsApp</p>
                  <p className="text-sm">+91-9999990000</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <AiOutlinePhone className="text-2xl text-green-900" />
                <div>
                  <p className="text-sm">Call Us</p>
                  <p className="text-sm">0512-234432234</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <AiOutlineMail className="text-2xl text-green-900" />
                <div>
                  <p className="text-sm">Email Us</p>
                  <p className="text-sm">mail.swapnilgupta@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-base text-green-900 font-medium">
              Popular Categories
            </h1>
            <div className="flex flex-col mt-4 space-y-2">
              <Link to="/" className="hover:text-green-900 duration-100">
                Groceries
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Premium Fruits
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Home & Kitchen
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Fashion
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Toys & Luggage
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Electronics
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Home Improvement
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-base text-green-900 font-medium">
              Customer Services
            </h1>
            <div className="flex flex-col mt-4 space-y-2">
              <Link to="/" className="hover:text-green-900 duration-100">
                About Us
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Terms & Conditions
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                FAQ
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                E-waste Policy
              </Link>
              <Link to="/" className="hover:text-green-900 duration-100">
                Cancellation & Return Policy
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-base text-green-900 font-medium">
              Download App
            </h1>
            <div className="mt-4">
              <img src={image} className="max-w-full h-12" alt="Download App" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          Developed by GrabNGoods - Kanpur, UP, India
        </div>
      </div>
    </footer>
  );
};
