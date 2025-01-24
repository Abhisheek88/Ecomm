import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount, selectItems } from "./CartSlice";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];

export default function Cart() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const items = useSelector(selectItems);
  const totalAmount = items.reduce((amount, item)=>item.price*item.quantity + amount, 0);
  const totalItems = items.reduce((total, item)=>item.quantity + total, 0);

  return (
    <>
      <div>
        <div className="mt-20 bg-stone-200 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8    rounded-md overflow-hidden">
          <h1 className="text-5xl font-serif font-semibold tracking-tighter text-slate-800 pl-10 py-5">
            {" "}
            Cart
          </h1>

          <div className="px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {items.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={product.title}
                        src={product.thumbnail}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.title}</a>
                          </h3>
                          <p className="ml-4">$ {product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          {product.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-600">
                      <label htmlFor="quantity" className="inline text-sm font-medium leading-6 text-gray-900 mr-3">
                      Qty
                      </label>
                          <select name="" id="" className="bg-slate-50 border-2 border-blue-100 focus:ring-2 focus:ring-blue-200  rounded-md p-1">
                            <option value="1">1</option>
                            <option value="2"> 2</option>
                            <option value="3">3</option>
                          </select>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subtotal and checkout button */}

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {totalAmount}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total items in Cart</p>
              <p className="text-gray-500">{totalItems}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-600">
              Shipping and taxes calculated at checkout.
            </p>
           <Link to='/checkout'>
           <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
           </Link>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-600">
              <p>
                or{" "}
               <Link to='/home'>
               <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button></Link>

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
