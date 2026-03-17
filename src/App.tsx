import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import Public from "./routes/Public";
import Private from "./routes/Private";

export default function App() {

  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Public />;

  return (
    <>
      <Private />
    </>
  );
}