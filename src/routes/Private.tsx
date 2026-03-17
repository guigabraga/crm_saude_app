import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRoutes } from "../hooks/useRoutes";
import Layout from "../layout/Main";

export default function Private() {

  const { routes } = useRoutes();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout />}
        >
          {routes.private.filter((e) => e.available).map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={item?.element}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}