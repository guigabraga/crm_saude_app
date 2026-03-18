import type { IRoutes } from "../Schemas";
import { Navigate } from "react-router-dom";
import { Login } from "../pages/public";
import { Patients } from "../pages/private";
import PeopleIcon from "@mui/icons-material/People";

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
        element: <Navigate to="/patients" replace />
      },
      {
        path: "/patients",
        available: true,
        element: <Patients />,
        title: "Pacientes",
        icon: <PeopleIcon />
      }
    ]
  };

  return {
    routes
  };

};