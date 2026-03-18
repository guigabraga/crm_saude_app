import { Box, Stack } from "@mui/material"
import { HeaderPage, DialogNewPatient, DataTable, DialogNewAppointment, DrawerAppointments } from "./elements";
import { DialogAppointmentDetails, DialogAppointmentEdit } from "../../../components";

export default function Patients() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
      >
        <HeaderPage />
        <DataTable />
        <DialogNewPatient />
        <DialogNewAppointment />
        <DrawerAppointments />
        <DialogAppointmentDetails />
        <DialogAppointmentEdit />
      </Stack>
    </Box>
  )
}