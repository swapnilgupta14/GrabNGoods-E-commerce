import React from "react";

export const Subscribe = () => {
  return (
    <div className="my-10 bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
          Subscribe to Our Newsletter
          <br className="hidden lg:block" /> for Latest Updates
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mx-auto">
          Join GrabNGoods community and receive 20% off your first order! Stay updated
          with our latest collections and exclusive offers.
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <form className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="subscribe"
              placeholder="Enter Your Email"
              className="w-full rounded-md py-3 px-4 shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <button className="bg-green-900 text-white py-3 px-5 rounded-md shadow-md hover:bg-green-800 duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
};
