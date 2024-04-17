import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppComponent } from "./App";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { ExtensionPageComponent } from "./pages/extension/extension-page.component";
import { MobilePageComponent } from "./pages/mobile/mobile-page.component";
import "./style.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorPageComponent />,
  },
  {
    path: "extension",
    element: <ExtensionPageComponent />,
    errorElement: <ErrorPageComponent />,
  },
  {
    path: "mobile",
    element: <MobilePageComponent />,
    errorElement: <ErrorPageComponent />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
