import React, { createContext, useState, type ReactNode } from "react";
import type { IDataResult } from "../Schmas";

type TGlobalContext = {
  isGlobalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isGlobalDataResult: IDataResult;
  setGlobalDataResult: React.Dispatch<React.SetStateAction<IDataResult>>;
}

export const GlobalContext = createContext<TGlobalContext>(null!);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

  const [isGlobalLoading, setGlobalLoading] = useState<boolean>(false);
  const [isGlobalDataResult, setGlobalDataResult] = useState<IDataResult>(null!);

  return (
    <GlobalContext.Provider
      value={{
        isGlobalLoading, setGlobalLoading,
        isGlobalDataResult, setGlobalDataResult
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};