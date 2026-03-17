import type { IRoutes } from "../Schmas";
import { Navigate } from "react-router-dom";
import { Login } from "../pages/public";
import { Home, Patients, Appointments } from "../pages/private";
import Homeicon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
        element: <Home />,
        title: "Inicio",
        icon: <Homeicon />
      },
      {
        path: "/patients",
        available: true,
        element: <Patients />,
        title: "Pacientes",
        icon: <PeopleIcon />
      },
      {
        path: "/appointments",
        available: true,
        element: <Appointments />,
        title: "Atendimentos",
        icon: <CalendarMonthIcon />
      }
    ]
  };

  return {
    routes
  };

};