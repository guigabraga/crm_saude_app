import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useRemoveAppointment(patientId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      return await axios.delete(
        `${import.meta.env.VITE_CONFIG_API}/appointment/${id}`
      )
    },
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ["useQueryPatient", patientId] })

      const previous = queryClient.getQueryData(["useQueryPatient", patientId])

      queryClient.setQueryData(["useQueryPatient", patientId], (old: any) => {
        if (!old) return old
        return {
          ...old,
          data: {
            ...old.data,
            appointments: old.data.appointments.filter((a: any) => a.id !== id)
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