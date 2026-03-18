import { Button } from "@mui/material"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import useUpdateAppointmentSubmit from "../hooks/useUpdateAppointmentSubimit";

type TProps = {
  id: number;
  patientId: number;
}

export default function ButtonUpdateAppointmentWait({ id, patientId }: TProps) {

  const { mutate } = useUpdateAppointmentSubmit(patientId);

  return (
    <Button
      onClick={() => {
        mutate({ id, status: "EM_ATENDIMENTO" })
      }}
      size="small"
      variant="contained"
      color="success"
      startIcon={<PlayCircleFilledWhiteIcon />}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        px: 1.5,
        py: 0.3,
        minWidth: "auto",
        fontSize: "0.75rem",
      }}
    >
      Iniciar atendimento
    </Button>
  )
}