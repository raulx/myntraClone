import { useContext } from "react";
import { navigationContext } from "../context/navigationContext";

function UseNavigationContext() {
  return useContext(navigationContext);
}

export default UseNavigationContext;
