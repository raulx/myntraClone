import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";

import AdminHomePage from "../pages/AdminPages/AdminHomePage";
import AdminLoginPage from "../pages/AdminPages/AdminLoginPage";
import ErrorPage from "../pages/ErrorPage";

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
    element: <AdminHomePage />,
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
