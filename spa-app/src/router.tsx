import { createBrowserRouter, Navigate } from "react-router-dom";
import RootPage from "./components/RootPage";
import ProductsList from "./components/ProductsList";
import ProductPage from "./components/ProductPage";
import LinkPage from "./components/LinkPage";

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
        path: "/link",
        element: <LinkPage />,
      },
      {
        path: "",
        element: <Navigate to={"/products"} replace />,
      },
    ],
  },
]);

export default router;
