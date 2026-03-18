import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateAppointmentSchema, type TUpdateAppointmentSchema } from "../Schemas";

type TProps = {
  defaultValues: TUpdateAppointmentSchema
}

export const useUpdateAppointmentForm = ({ defaultValues }: TProps) => {
  const form = useForm<TUpdateAppointmentSchema>({
    resolver: zodResolver(updateAppointmentSchema),
    mode: "onChange",
    defaultValues,
  })

  return { form };
}