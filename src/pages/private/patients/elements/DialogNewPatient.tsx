import { Dialog, DialogContent, Box, Stack, Button } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom";
import { DialogHeader, InputText } from "../../../../components";
import { Controller, useWatch } from "react-hook-form";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNewPatientForm } from "../../../../hooks/useNewPatientForm";
import useNewPatientSubmit from "../../../../hooks/useNewPatientSubmit";

type TInputs = {
  label: string;
  legend: string;
  placeholder: string;
  name: "name" | "phone"
}

export default function DialogNewPatient() {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dialog = queryParams.get("new-patient-dialog");
  const open = dialog === "open" ? true : false;

  const { mutate } = useNewPatientSubmit();
  const { form } = useNewPatientForm();
  const { control, handleSubmit, getFieldState, formState, reset } = form;

  const onSubmit = handleSubmit((values) => {
    navigate("/patients")
    mutate(values);
    reset();
  });

  const inputs: TInputs[] = [
    {
      label: "Nome",
      legend: "Informe o nome completo",
      placeholder: "Ex: JOÃO SILVA",
      name: "name"
    },
    {
      label: "Telefone",
      legend: "Informe o telefone incluindo o DDD",
      placeholder: "Ex: 119999999999",
      name: "phone"
    }
  ];

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
          title="Cadastrar paciente"
          subtitle="Informe os dados do novo paciente"
          icon={<PersonAddIcon />}
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
            {inputs.map((item, index) => {
              useWatch({
                control,
                name: item.name
              });
              const fieldState = getFieldState(item.name, formState);
              const isValidField =
                fieldState.isDirty
                  ? !fieldState.invalid
                  : null;
              return (
                <Controller
                  key={index}
                  name={item.name}
                  control={control}
                  render={({ field }) => (
                    <InputText
                      label={item.label}
                      legend={item.legend}
                      placeholder={item.placeholder}
                      field={field}
                      isValid={isValidField}
                    />)}
                />
              );
            })}
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
}