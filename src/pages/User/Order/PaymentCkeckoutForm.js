import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../../features/auth/userAuthSelectors";

export const PaymentCheckoutForm = ({ shippingInfo }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const items = useSelector((state) => state.cartItems.cartItems);

  const user = useSelector(selectUserInfo);
  const accessToken = useSelector(selectUserAccessToken);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment Successful");
      navigate("/");
    }, 2000);
  };

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="flex items-center justify-center min-h-300 bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold text-gray-800 pb-4 border-b border-gray-200">
          Payment Details
        </h2>
        <Form onSubmit={handleSubmit}>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Amount: ${totalAmount}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Shipping to: {shippingInfo?.address}, {shippingInfo?.city},{" "}
              {shippingInfo?.zip}
            </p>
          </div>

          <Button
            type="submit"
            name={isProcessing ? "Processing..." : "Pay Now"}
            className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
            disabled={isProcessing}
          />
        </Form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Your payment information is securely processed.
          </p>
        </div>
      </div>
    </div>
  );
};
