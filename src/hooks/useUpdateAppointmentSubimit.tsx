import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { TUpdateAppointmentSchema } from "../Schemas";

export default function useUpdateAppointmentSubmit(patientId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: TUpdateAppointmentSchema) => {
      const body: Record<string, unknown> = {}
      if (data.description) body.description = data.description
      if (data.status) body.status = data.status

      return await axios.put(
        `${import.meta.env.VITE_CONFIG_API}/appointment/${data.id}`,
        body
      )
    },
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["useQueryPatient", patientId] })

      const previous = queryClient.getQueryData(["useQueryPatient", patientId])

      queryClient.setQueryData(["useQueryPatient", patientId], (old: any) => {
        if (!old) return old
        return {
          ...old,
          data: {
            ...old.data,
            appointments: old.data.appointments.map((a: any) =>
              a.id === data.id ? { ...a, ...data } : a
            )
          }
        }
      })

      return { previous }
    },
    onError: (_err, _data, context) => {
      queryClient.setQueryData(
        ["useQueryPatient", patientId],
        context?.previous
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["useQueryPatient", patientId] })
    }
  })
}