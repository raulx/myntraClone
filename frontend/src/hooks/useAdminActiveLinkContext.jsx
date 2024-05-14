import { useContext } from "react";
import { adminActiveLinkContext } from "@/context/adminActivePageContext";

function UseAdminActiveLinkContext() {
  return useContext(adminActiveLinkContext);
}

export default UseAdminActiveLinkContext;
