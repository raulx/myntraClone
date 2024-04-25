import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

function ProtectAdminPage() {
  const { isAuthenticated } = useSelector((state) => {
    return state.admin;
  });

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login/admin"} />;
  }
}

export default ProtectAdminPage;
