import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile.jsx";

// Define all routes
let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,// Profile page
  },
]);

// Create the root of the application
const root = createRoot(document.getElementById("root"));

// Render the application
root.render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
