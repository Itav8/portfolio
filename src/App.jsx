import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes/routes";
import Nav from "./Nav";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
);
