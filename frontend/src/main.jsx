import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { RouterProvider } from "react-router-dom";
import NavigationContextProvider from "./context/NavigationContext.jsx";
import AdminActiveLinkContextProvider from "./context/adminActivePageContext.jsx";
import router from "./Router.jsx";
import "./index.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavigationContextProvider>
        <AdminActiveLinkContextProvider>
          <RouterProvider router={router} />
        </AdminActiveLinkContextProvider>
      </NavigationContextProvider>
    </Provider>
  </React.StrictMode>
);
