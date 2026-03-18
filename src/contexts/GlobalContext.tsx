import React, { createContext, useState, type ReactNode } from "react";
import type { IDataResult, IAppointmentDetails } from "../Schemas";

type TGlobalContext = {
  isGlobalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isGlobalDataResult: IDataResult;
  setGlobalDataResult: React.Dispatch<React.SetStateAction<IDataResult>>;
  isDialogAppointmentDetailsOpen: boolean;
  setDialogAppointmentDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAppointmentDetails: IAppointmentDetails | null;
  setAppointmentDetails: React.Dispatch<React.SetStateAction<IAppointmentDetails | null>>;
  isDialogAppointmentEdit: boolean;
  setDialogAppointmentEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<TGlobalContext>(null!);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

  const [isGlobalLoading, setGlobalLoading] = useState<boolean>(false);
  const [isGlobalDataResult, setGlobalDataResult] = useState<IDataResult>(null!);
  const [isDialogAppointmentDetailsOpen, setDialogAppointmentDetailsOpen] = useState<boolean>(false);
  const [isAppointmentDetails, setAppointmentDetails] = useState<IAppointmentDetails | null>(null);
  const [isDialogAppointmentEdit, setDialogAppointmentEdit] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        isGlobalLoading, setGlobalLoading,
        isGlobalDataResult, setGlobalDataResult,
        isDialogAppointmentDetailsOpen, setDialogAppointmentDetailsOpen,
        isAppointmentDetails, setAppointmentDetails,
        isDialogAppointmentEdit, setDialogAppointmentEdit
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};