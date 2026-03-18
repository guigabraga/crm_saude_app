import { Drawer, Stack, Box, } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { DrawerHeader } from "../../../../components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ButtonNewAppointment from "./ButtonNewAppointment";

export default function DrawerAppointments() {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const drawer = queryParams.get("appointments-drawer");
  const open = drawer === "open" ? true : false;
  const patientId = queryParams.get("patient-id");
  console.log(patientId)

  return (
    <Drawer
      open={open}
      onClose={() => navigate("/patients")}
      anchor="right"
      elevation={0}
      sx={{
        "& .MuiDrawer-paper": {
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          width: 400,
          height: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
        }
      }}
    >
      <Stack
        direction="column"
      >
        <Box
          sx={{
            width: "100%",
            height: 120,
            backgroundColor: (theme) => theme.palette.action.hover,
          }}
        >
          <DrawerHeader
            title="Atendimentos"
            subtitle="Todos atendimentos vinculados ao paciente"
            functionClose={() => navigate("/patients")}
            icon={<CalendarMonthIcon />}
          />
          <Box
            sx={{
              paddingX: 2,
              paddingTop: 2
            }}
          >
            <ButtonNewAppointment patientId={Number(patientId)} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 2
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  )
}