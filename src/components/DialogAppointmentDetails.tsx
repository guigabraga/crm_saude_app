import { Dialog, DialogContent, Box } from "@mui/material"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import DialogHeader from "./DialogHeader";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import dayjs from "dayjs";

export default function DialogAppointmentDetails() {

  const { isDialogAppointmentDetailsOpen, setDialogAppointmentDetailsOpen, isAppointmentDetails } = useContext(GlobalContext);

  if (!isAppointmentDetails) return null!;

  return (
    <Dialog
      open={isDialogAppointmentDetailsOpen}
      onClose={() => setDialogAppointmentDetailsOpen(false)}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: (theme) => theme.palette.background.default,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.09)",
          border: "1px solid",
          borderColor: (theme) => theme.palette.divider,
          paddingX: 1,
          paddingY: 2,
          minWidth: "364px",
          minHeight: "180px",
          width: 450
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 0.5,
          justifyContent: "center"
        }}
      >
        <DialogHeader
          title={dayjs(isAppointmentDetails.date).format('DD/MM/YYYY HH:mm')}
          subtitle={isAppointmentDetails.status}
          icon={<CalendarTodayIcon />}
          functionClose={() => setDialogAppointmentDetailsOpen(false)}
        />
        <Box
          sx={{
            width: "100%",
            backgroundColor: (theme) => theme.palette.action.hover,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingY: 2,
          }}
        >
          <Box
            sx={{
              width: "90%"
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 500
              }}
            >
              {isAppointmentDetails.description}
            </span>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}