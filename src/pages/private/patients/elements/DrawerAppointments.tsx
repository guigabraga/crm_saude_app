import { Drawer, Stack, Box, } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { DrawerHeader } from "../../../../components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ButtonNewAppointment from "./ButtonNewAppointment";
import DrawerAppointmentsDataTable from "./DrawerAppointmentsDataTable";

export default function DrawerAppointments() {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const drawer = queryParams.get("appointments-drawer");
  const open = drawer === "open" ? true : false;
  const patientId = queryParams.get("patient-id");

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
          width: 600,
          height: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
        }
      }}
    >
      <Stack
        direction="column"
        spacing={2}
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
        </Box>
        <Box
          sx={{
            paddingX: 2,
          }}
        >
          <ButtonNewAppointment patientId={Number(patientId)} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DrawerAppointmentsDataTable
            patientId={Number(patientId)}
          />
        </Box>
      </Stack>
    </Drawer>
  )
}