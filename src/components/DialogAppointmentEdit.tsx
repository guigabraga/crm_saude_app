import { Dialog, DialogContent, Box, Stack, Button } from "@mui/material"
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import DialogHeader from "./DialogHeader";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { useUpdateAppointmentForm } from "../hooks/useUpdateAppointmentForm";
import { Controller } from "react-hook-form";
import InputTextArea from "./InputTextArea";
import { useEffect } from "react";
import useUpdateAppointmentSubimit from "../hooks/useUpdateAppointmentSubimit";
import { useLocation } from "react-router-dom";

export default function DialogAppointmentEdit() {

  const { isDialogAppointmentEdit, setDialogAppointmentEdit, setDialogAppointmentDetailsOpen, isAppointmentDetails } = useContext(GlobalContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const patientId = queryParams.get("patient-id");

  const closeDialog = () => {
    setDialogAppointmentEdit(false);
    setDialogAppointmentDetailsOpen(null!);
  }

  if (!isAppointmentDetails) return null!;

  const { mutate } = useUpdateAppointmentSubimit(Number(patientId))
  const { form } = useUpdateAppointmentForm({
    defaultValues: {
      id: isAppointmentDetails.id,
      description: isAppointmentDetails.description
    }
  });
  const { control, handleSubmit, getFieldState, formState, reset } = form;

  useEffect(() => {
    reset({
      description: isAppointmentDetails.description,
      id: isAppointmentDetails.id
    })
  }, [isAppointmentDetails])

  const onSubmit = handleSubmit((values) => {
    mutate(values);
    closeDialog();
  });

  return (
    <Dialog
      open={isDialogAppointmentEdit}
      onClose={() => {
        closeDialog()
      }}
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
          title="Editar atendimento"
          subtitle="Edite a descrição do atendimento"
          icon={<EditCalendarIcon />}
          functionClose={() => closeDialog()}
        />
        <Box
          component="form"
          noValidate
          onSubmit={onSubmit}
          sx={{
            width: "98%"
          }}
        >
          < Stack
            direction="column"
            spacing={3}
            sx={{
              paddingTop: 1,
              width: "100%"
            }}
          >
            <Controller
              name="description"
              control={control}
              render={({ field }) => {
                const fieldState = getFieldState("description", formState)
                const isValid = fieldState.isDirty ? !fieldState.invalid : null
                return (
                  <InputTextArea
                    label="Descrição"
                    legend="Informe a descrição do atendimento"
                    placeholder="Ex: Paciente relatou..."
                    field={field}
                    isValid={isValid}
                  />
                )
              }}
            />
          </Stack>
          <Stack
            flexDirection='row'
            justifyContent='flex-end'
            alignContent='center'
            pt={1}
            sx={{
              paddingTop: 3,
            }}
          >
            <Button
              disabled={!formState.isValid ? true : false}
              type="submit"
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
              Atualizar
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
