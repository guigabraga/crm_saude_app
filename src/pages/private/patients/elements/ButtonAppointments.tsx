import { Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

type TProps = {
  patientId: number;
}

export default function ButtonAppointment({ patientId }: TProps) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/patients?appointments-drawer=open&patient-id=${patientId}`)}
      type="submit"
      size="small"
      variant="contained"
      color="secondary"
      startIcon={<SearchIcon />}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        px: 1.5,
        py: 0.3,
        minWidth: "auto",
        fontSize: "0.75rem",
      }}
    >
      Visualizar atendimentos
    </Button>
  )
};


