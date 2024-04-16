import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppComponent } from "./App";
import "./app.scss";
import { ExtensionPageComponent } from "./pages/extension/extension-page.component";
import { MobilePageComponent } from "./pages/mobile/mobile-page.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
  },
  {
    path: "extension",
    element: <ExtensionPageComponent />,
  },
  {
    path: "mobile",
    element: <MobilePageComponent />,
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
