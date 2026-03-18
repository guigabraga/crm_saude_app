import { Button } from "@mui/material"
import StopCircleIcon from '@mui/icons-material/StopCircle';
import useUpdateAppointmentSubmit from "../hooks/useUpdateAppointmentSubimit";

type TProps = {
  id: number;
  patientId: number;
}

export default function ButtonAppointmentEnd({ id, patientId }: TProps) {

  const { mutate } = useUpdateAppointmentSubmit(patientId);

  return (
    <Button
      onClick={() => mutate({ id, status: "FINALIZADO" })}
      size="small"
      variant="contained"
      color="error"
      startIcon={<StopCircleIcon />}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        px: 1.5,
        py: 0.3,
        minWidth: "auto",
        fontSize: "0.75rem",
      }}
    >
      Finalizar atendimento
    </Button>
  )
}