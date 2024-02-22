import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Connect from "./Connect";
import EndPage from "./EndPage";
import MessengerPage from "./MessengerPage";
// import MessengerPage from "./MessengerPage";

const Route = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/connect",
      element: <Connect/>,
    },
    {
      path: "/end",
      element: <EndPage />,
    },
    {
      path: "/Message",
      element: <MessengerPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Route;
