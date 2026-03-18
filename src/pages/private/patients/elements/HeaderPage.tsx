import { Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Headerpage() {

  const navigate = useNavigate();

  return (
    <Box>
      <Button
        onClick={() => navigate("/patients?new-patient-dialog=open")}
        size="small"
        variant="contained"
        sx={{
          bgcolor: "#000",
          color: "#fff",
          textTransform: "none",
          borderRadius: 3,
          px: 3,
          "&:hover": {
            bgcolor: "#222",
          },
        }}
      >
        Cadastrar paciente
      </Button>
    </Box>
  )
}