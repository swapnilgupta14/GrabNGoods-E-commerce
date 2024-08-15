import React, { useEffect, useState } from "react";
import { AiOutlineBug } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { useUserLoginMutation } from "../../features/auth/userAuthApi";
import { setTitle } from "../../utils/setTitle";
import { toast } from "react-hot-toast";
import { Error } from "../../components/ui/Error";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [userLoggedIn, { isLoading, isSuccess, error: resError }] =
    useUserLoginMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Login Successful");
      navigate("/");
    }
    if (!isLoading && !isSuccess && resError) {
      setError(resError.data?.message);
      console.log(resError);
    }
  }, [isLoading, isSuccess, navigate, resError]);

  //user Login Handler
  const userLoginHandler = (e) => {
    e.preventDefault();
    setError("");
    userLoggedIn({ email, password });
  };

  //set page title
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

          <Button name="Login" className="w-full mt-6" />
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
