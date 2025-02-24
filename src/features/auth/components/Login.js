import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkUserAsync, selectError, selectLoggedInUser } from "../authSlice";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const error = useSelector(selectError);
  const user =useSelector(selectLoggedInUser)

  return (
    <>
      {user && <Navigate to='/' replace={true} ></Navigate>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            className="space-y-6"
            onSubmit={ handleSubmit((data) => {
              dispatch( checkUserAsync({email:data.email, password:data.password}));
            
              
              console.log(data);

            })}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: "email is required",
                   
                  })}
                  type="email"
                  placeholder="Enter Your  Email-id"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />

                {errors.email && (
                  <p className="text-red-500"> {errors.email.message}</p>
                )}
              </div>
              

            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to='/forgot-password'
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                   
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />

                {errors.password && (
                  <p className="text-red-500"> {errors.password.message}</p>
                )}
              </div>
              {error && (
                  <p className="text-red-500"> {error.message}</p>
                )}

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-10  flex justify-center gap-2 text-center text-sm/6 text-gray-500">
            Don't have Account{" "}
            <p className="font-semibold text-indigo-600 hover:text-indigo-500">
              <Link to="/Signup"> Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
