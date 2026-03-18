import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IGetPatientResponse } from "../Schemas";

export default function useQueryPatient(patientId: number) {
  return useQuery<IGetPatientResponse>({
    queryKey: ["useQueryPatient", patientId],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_CONFIG_API}/patient/${patientId}`
      );
      return response.data;
    },
    retry: false,
    enabled: !!patientId,
  });
};