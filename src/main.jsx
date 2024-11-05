import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import { CartProvider } from "./components/CartContext"; 
import { WishlistProvider } from "./components/WishlistContext";
import { ToastContainer, toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/product/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/Data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'cart',
            element: <Cart></Cart>,
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
          },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <ToastContainer position="top-center" />
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
