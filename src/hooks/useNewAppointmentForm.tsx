import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAppointmentSchema, type TCreateAppointmentSchema } from "../Schemas";

export const useNewAppointmentForm = () => {
  const form = useForm<TCreateAppointmentSchema>({
    resolver: zodResolver(createAppointmentSchema),
    mode: "onChange",
    defaultValues: {
      patientId: 0,
      date: "",
      description: "",
    },
  });

  return { form };
}