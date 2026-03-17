import type { IRoutes } from "../Schmas";
import { Navigate } from "react-router-dom";
import { Login } from "../pages/public";
import { Home } from "../pages/private";

export const useRoutes = () => {

  const routes: IRoutes = {
    public: [
      {
        path: "*",
        available: true,
        element: <Navigate to="/login" replace />
      },
      {
        path: "/login",
        available: true,
        element: <Login />
      }
    ],
    private: [
      {
        path: "*",
        available: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "/home",
        available: true,
        element: <Home />
      }
    ]
  };

  return {
    routes
  };

};