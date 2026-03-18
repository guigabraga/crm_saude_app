import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

type TProps = {
  patientId: number;
}

export default function ButtonNewAppointment({ patientId }: TProps) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/patients?new-appointment-dialog=open&patient-id=${patientId}`)}
      type="submit"
      size="small"
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        px: 1.5,
        py: 0.3,
        minWidth: "auto",
        fontSize: "0.75rem",
      }}
    >
      Novo atendimento
    </Button>
  )
};


