import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import ProtectAdminPage from "../hooks/useProtectAdminPage";
import AdminHomePage from "../pages/Admin/AdminHomePage";
import AddProductPage from "../pages/Admin/AdminPages/AddProductPage";
import ProductOrdersPage from "../pages/Admin/AdminPages/ProductOrdersPage";
import ProductAnalyticsPage from "../pages/Admin/AdminPages/ProductAnalyticsPage";
import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import ErrorPage from "../pages/ErrorPage";
import ProductsPage from "../pages/Admin/AdminPages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/login/admin",
    element: <AdminLoginPage />,
  },
  {
    path: "/page/admin",
    // element: <AdminHomePage />,
    element: <ProtectAdminPage />,
    children: [
      {
        path: "/page/admin/products",
        element: <AdminHomePage />,
        children: [
          {
            path: "/page/admin/products/",
            element: <ProductsPage />,
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
