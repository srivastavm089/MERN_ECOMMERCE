import React from "react";
import { increment } from "./redux/counterSlice";
import Home from "./pages/Home";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductOverviewPage from "./pages/ProductOverviewPage";
import { useDispatch, useSelector } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path:'/cart',
    element:(<CartPage/>)
  },
  {
    path:'/checkout',
    element:(<CheckoutPage/>)
  },
  {
    path:'/product-details',
    element:(<ProductOverviewPage/>)
  }
]);
function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
  
  
    
    </div>
  );
}

export default App;
