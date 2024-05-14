/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const adminActiveLinkContext = createContext();

function AdminActiveLinkContextProvider({ children }) {
  const [activeLink, setLink] = useState("products");

  const setActiveLink = (value) => {
    setLink(value);
  };
  return (
    <adminActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </adminActiveLinkContext.Provider>
  );
}

export default AdminActiveLinkContextProvider;
