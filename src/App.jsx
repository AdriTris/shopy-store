//import { useState } from 'react'
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Home from "./pages/home/Home";
import MyAcount from "./pages/myAcount/MyAcount";
import MyOrder from "./pages/myOrder/MyOrder";
import MyOrders from "./pages/myOrders/MyOrders";
import NotFound from "./pages/notFound/NotFound";
import SingIn from "./pages/signIn/SignIn";
import Navbar from "./components/Navbar/Navbar";
import CheckoutSideMenu from "./components/CheckoutSideMenu/CheckoutSideMenu";
import "./App.css";
import Layout from "./components/layout/Layout";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/women-clothing", element: <Home /> },
    { path: "/men-clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/my-acount", element: <MyAcount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
