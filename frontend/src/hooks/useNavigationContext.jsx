import { useContext } from "react";
import { navigationContext } from "../context/NavigationContext";

function UseNavigationContext() {
  return useContext(navigationContext);
}

export default UseNavigationContext;
