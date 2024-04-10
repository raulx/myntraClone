import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/login/admin",
    element: <AdminPage />,
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
