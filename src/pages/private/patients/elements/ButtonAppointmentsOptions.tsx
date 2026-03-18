import { Stack, IconButton, Tooltip } from "@mui/material"
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import type { IAppointmentDetails } from "../../../../Schemas";
import useRemoveAppointment from "../../../../hooks/useRemoveAppointment";
import { useLocation } from "react-router-dom";

export default function ButtonAppointmentsOptions({ id, description, date, status }: IAppointmentDetails) {

  const { setDialogAppointmentDetailsOpen, setAppointmentDetails, setDialogAppointmentEdit } = useContext(GlobalContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const patientId = queryParams.get("patient-id");

  const { mutate } = useRemoveAppointment(Number(patientId));

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100%"
      }}
    >
      <Tooltip title="Detalhes" arrow>
        <IconButton
          onClick={() => {
            setDialogAppointmentDetailsOpen(true);
            setAppointmentDetails({
              id,
              description,
              date,
              status
            });
          }}
          size="small"
          color="primary"
        >
          <SearchIcon
            sx={{
              fontSize: 20
            }}
          />
        </IconButton>
      </Tooltip>
      {status !== "FINALIZADO" &&
        <Tooltip title="Editar" arrow>
          <IconButton
            onClick={() => {
              setDialogAppointmentEdit(true);
              setAppointmentDetails({
                id,
                description,
                date,
                status
              });
            }}
            size="small"
            color="secondary"
          >
            <EditSquareIcon
              sx={{
                fontSize: 20
              }}
            />
          </IconButton>
        </Tooltip>
      }
      {status !== "FINALIZADO" && status !== "EM_ATENDIMENTO" &&
        <Tooltip title="Remover" arrow>
          <IconButton
            size="small"
            color="error"
            onClick={() => mutate({ id })}
          >
            <DeleteForeverIcon
              sx={{
                fontSize: 20
              }}
            />
          </IconButton>
        </Tooltip>
      }
    </Stack>
  )
}