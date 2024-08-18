import React, { useState } from "react";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { PaymentCheckoutForm } from "./PaymentCkeckoutForm";

export const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const shippingInfo = {
    name,
    email,
    number,
    address,
  };

  return (
    <div className="container mx-auto my-10 flex flex-col lg:flex-row justify-center items-start gap-6 px-4 h-screen">
      {/* Shipping Details Form */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md transition-transform hover:scale-105 duration-300 ease-in-out">
        <Form>
          <h2 className="text-2xl font-bold text-gray-800 pb-4">Shipping Details</h2>
          <FormInput
            label="Full Name"
            type="text"
            name="name"
            placeholder="Swapnil Gupta"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
          />
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            placeholder="mail.grabNgoods@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
          />
          <FormInput
            label="Phone Number"
            type="text"
            name="number"
            placeholder="0512-23452345345"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mb-3"
          />
          <FormInput
            label="Shipping Address"
            type="text"
            name="address"
            placeholder="GrabNGoods, Kanpur, India"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mb-3"
          />
        </Form>
      </div>

      {/* Payment Checkout Form */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md transition-transform hover:scale-105 duration-300 ease-in-out">
        <PaymentCheckoutForm shippingInfo={shippingInfo} />
      </div>
    </div>
  );
};
