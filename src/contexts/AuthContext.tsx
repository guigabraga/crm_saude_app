import React, { createContext, useState, type ReactNode } from "react";

type TAuthContext = {
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isToken: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<TAuthContext>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const token = localStorage.getItem("token");
  const [isToken, setToken] = useState(token ?? null!);
  const [isAuth, setAuth] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        isToken, setToken,
        isAuth, setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};