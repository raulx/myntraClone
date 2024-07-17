import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import ProtectAdminPage from "./hooks/useProtectAdminPage";
import AdminHomePage from "./pages/Admin/AdminHomePage";
import AddProductPage from "./pages/Admin/AdminPages/AddProductPage";
import ProductOrdersPage from "./pages/Admin/AdminPages/ProductOrdersPage";
import ProductAnalyticsPage from "./pages/Admin/AdminPages/ProductAnalyticsPage";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/Admin/AdminPages/ProductsPage/ProductsPage";
import QueryPage from "./pages/QueryPage";
import ProductPage, {
  PreProductPage,
} from "./pages/Admin/AdminPages/ProductsPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/:query", element: <QueryPage /> },
    ],
  },
  {
    path: "/login/admin",
    element: <AdminLoginPage />,
  },
  {
    path: "/page/admin",
    element: <ProtectAdminPage />,
    children: [
      {
        path: "/page/admin",
        element: <Navigate to={"/page/admin/products"} />,
      },
      {
        path: "/page/admin/products",
        element: <AdminHomePage />,
        children: [
          {
            path: "/page/admin/products/",
            element: <ProductsPage />,
            children: [
              {
                path: "/page/admin/products/",
                element: <PreProductPage />,
              },
              {
                path: "/page/admin/products/product",
                element: <ProductPage />,
              },
            ],
          },
          {
            path: "/page/admin/products/insert",
            element: <AddProductPage />,
          },
          {
            path: "/page/admin/products/analytics",
            element: <ProductAnalyticsPage />,
          },
          {
            path: "/page/admin/products/orders",
            element: <ProductOrdersPage />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
