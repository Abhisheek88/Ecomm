import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/Protected";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home></Home>
            </Protected>
          }
        ></Route>
        <Route
          path="/Home"
          element={
            <Protected>
              <Home></Home>
            </Protected>
          }
        ></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>

        <Route
          path="/cart"
          element={
            <Protected>
              <CartPage></CartPage>
            </Protected>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckoutPage></CheckoutPage>
            </Protected>
          }
        ></Route>
        <Route
          path="/Product-detail/:id"
          element={
            <Protected>
              <ProductDetailPage></ProductDetailPage>
            </Protected>
          }
        ></Route>

        {/* Onl for test  */}
      </Routes>
    </>
  );
}

export default App;
