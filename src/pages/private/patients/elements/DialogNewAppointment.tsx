import { Dialog, DialogContent, Box, Stack, Button } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom";
import { DialogHeader, InputTextArea, InputDateTime } from "../../../../components";
import { Controller } from "react-hook-form";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { useNewAppointmentForm } from "../../../../hooks/useNewAppointmentForm";
import { useEffect } from "react";
import useNewAppointmentSubmit from "../../../../hooks/useNewAppointmentSubmit";

export default function DialogNewAppointment() {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dialog = queryParams.get("new-appointment-dialog");
  const patientId = queryParams.get("patient-id");
  const open = dialog === "open" ? true : false;

  const { mutate } = useNewAppointmentSubmit();
  const { form } = useNewAppointmentForm();
  const { control, handleSubmit, getFieldState, formState, reset, setValue } = form;

  useEffect(() => {
    if (patientId) {
      setValue("patientId", Number(patientId))
    }
  }, [patientId])

  const onSubmit = handleSubmit((values) => {
    navigate("/patients")
    mutate(values);
    reset();
  });

  return (
    <Dialog
      open={open}
      onClose={() => {
        navigate("/patients");
        reset();
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
          title="Novo atendimento"
          subtitle="Informe os dados para agendar um novo atendimento"
          icon={<EditCalendarIcon />}
          functionClose={() => navigate("/patients")}
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
            <Controller
              name="date"
              control={control}
              render={({ field }) => {
                const fieldState = getFieldState("date", formState)
                const isValid = fieldState.isDirty ? !fieldState.invalid : null
                return (
                  <InputDateTime
                    label="Data do atendimento"
                    legend="Informe a data e hora do atendimento"
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
              Cadastrar
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
};