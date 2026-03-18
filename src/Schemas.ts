import type { ReactElement } from "react";
import { z } from "zod";

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

export const createPatientSchema = z.object({
  name: z.string("Campo obrigatório").min(1, "Nome obrigatório"),
  phone: z.string().min(11, "Telefone obrigatório").regex(/^\d+$/, "Telefone deve conter apenas números").length(11, "Telefone deve conter 11 digitos"),
});
export type TCreatePatientSchema = z.infer<typeof createPatientSchema>;

export interface IPatient {
  id: number;
  name: string;
  phone: string;
  _count: {
    appointments: number;
  };
}

export type IPatientsList = IPatient[];

export const createAppointmentSchema = z.object({
  description: z.string("Campo obrigatório").min(15, "A descrição precisa conter no minímo 15 caracteres"),
  patientId: z.number("O ID do paciente precisa ser um número").int("O ID do paciente precisa ser um número").positive("O ID do paciente não pode ser 0"),
  date: z.string("Campo obrigatório").regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/, "Formato de data inválido. Data precisa ser no formato YYYY-MM-DD HH:mm").refine((date) => new Date(date) > new Date(), { message: "Data de agendamento inválida" })
})
export type TCreateAppointmentSchema = z.infer<typeof createAppointmentSchema>;

export interface IAppointment {
  id: number;
  date: string;
  description: string;
  status: "AGUARDANDO" | "EM_ATENDIMENTO" | "FINALIZADO";
}

export interface IPatientAppointments {
  id: number;
  name: string;
  phone: string;
  appointments: IAppointment[];
}

export interface IGetPatientResponse {
  status: boolean;
  data: IPatientAppointments;
}

export interface IAppointmentDetails {
  id: number;
  date: string;
  description: string;
  status: "AGUARDANDO" | "EM_ATENDIMENTO" | "FINALIZADO";
}

export const updateAppointmentSchema = z.object({
  description: z.string("Campo obrigatório").min(15, "A descrição precisa conter no minímo 15 caracteres").optional(),
  status: z.enum(["EM_ATENDIMENTO", "FINALIZADO"], { error: "Status inválido" }).optional(),
  id: z.number()
});
export type TUpdateAppointmentSchema = z.infer<typeof updateAppointmentSchema>;