import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRoutes } from "../hooks/useRoutes";

export default function Public() {

  const { routes } = useRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {routes.public.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={item?.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}