import { useQuery } from "@tanstack/react-query";
import type { IPatientsList } from "../Schemas";
import axios from "axios";

export default function useQueryPatients() {
  return useQuery<IPatientsList>({
    queryKey: ["useQueryPatients"],
    queryFn: async () => {
      const response = await axios.get<IPatientsList>(
        `${import.meta.env.VITE_CONFIG_API}/patients`
      );

      return response.data;
    }
  });
}