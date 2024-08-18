import React, { useEffect, useState } from "react";
import { AiOutlineBug } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { setTitle } from "../../utils/setTitle";
import { toast } from "react-hot-toast";
import { Error } from "../../components/ui/Error";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Login Successful");
      navigate("/order");
    }
    if (!isLoading && !isSuccess && error) {
      console.log("Login Error:", error);
    }
  }, [isLoading, isSuccess, navigate, error]);

  // Mock user login handler for testing
  const userLoginHandler = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); 
  };

  // Set page title
  setTitle("User Login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl p-8 sm:p-10 w-full max-w-lg mx-4">
        <div className="flex flex-col items-center pb-6">
          <span className="text-green-600 text-7xl">
            <AiOutlineBug />
          </span>
          <h3 className="text-3xl font-semibold text-gray-800 mt-4">
            Login to Your Account
          </h3>
        </div>
        <Form onSubmit={userLoginHandler}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            name={isLoading ? "Logging in..." : "Login"}
            className="w-full mt-6"
            disabled={isLoading}
          />
        </Form>
        {error && <Error error={error} className="mt-4" />}
        <div className="mt-8 text-center">
          <span className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-600 font-semibold">
              Register here.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
