import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPatientSchema, type TCreatePatientSchema } from "../Schemas";

export const useNewPatientForm = () => {
  const form = useForm<TCreatePatientSchema>({
    resolver: zodResolver(createPatientSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  return { form };
}