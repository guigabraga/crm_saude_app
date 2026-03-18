import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { TCreateAppointmentSchema } from "../Schemas";

export default function useNewAppointmentSubmit() {
  return useMutation({
    mutationFn: async (data: TCreateAppointmentSchema) => {
      return await axios.post(`${import.meta.env.VITE_CONFIG_API}/appointment`, data);
    }
  });
}