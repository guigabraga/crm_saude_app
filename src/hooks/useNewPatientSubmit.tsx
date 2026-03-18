import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { TCreatePatientSchema } from "../Schemas";

export default function useNewPatientSubmit() {
  return useMutation({
    mutationFn: async (data: TCreatePatientSchema) => {
      return await axios.post(`${import.meta.env.VITE_CONFIG_API}/patient`, data);
    }
  });
};