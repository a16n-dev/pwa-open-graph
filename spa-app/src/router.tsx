import { createBrowserRouter, Navigate } from "react-router-dom";
import RootPage from "./components/RootPage";
import ProductsList from "./components/ProductsList";
import ProductPage from "./components/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "",
        element: <Navigate to={"/products"} replace />,
      },
    ],
  },
]);

export default router;
