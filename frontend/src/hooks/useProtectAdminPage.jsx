import { Outlet, Navigate } from "react-router-dom";

function ProtectAdminPage() {
  const isAdminAuthenticated = localStorage.getItem("_ad");

  if (isAdminAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login/admin"} />;
  }
}

export default ProtectAdminPage;
