import type { ReactElement } from "react";

export interface IDataResult {
  type: "success" | "error" | "warning";
  message?: string;
}

export interface IRoutes {
  public: IRoutesObjetct[];
  private: IRoutesObjetct[];
}

export interface IRoutesObjetct {
  path: string;
  available: boolean;
  element?: ReactElement;
  icon?: ReactElement;
  title?: string;
}
