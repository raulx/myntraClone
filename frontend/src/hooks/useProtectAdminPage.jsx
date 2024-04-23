import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from "react-redux";

function ProtectAdminPage() {
  // const { isAuthenticated } = useSelector((state) => {
  //   return state.admin;
  // });
  const [isAuthenticated] = useState(true);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login/admin"} />;
  }
}

export default ProtectAdminPage;
