import { Stack, Box } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type TProps = {
  label: string;
  legend: string;
  isValid: boolean | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any,
  readOnly?: boolean
}

export default function InputDateTime({ label, legend, isValid, field, readOnly }: TProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value  // vem como "YYYY-MM-DDTHH:mm"
    const formatted = value.replace("T", " ")  // transforma em "YYYY-MM-DD HH:mm"
    field.onChange(formatted)
  }

  // Converte de volta para o formato do input ao exibir
  const inputValue = field.value ? field.value.replace(" ", "T") : ""

  return (
    <Stack direction='column' spacing={1}>
      <Stack direction='column'>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <span style={{ fontSize: 12, fontWeight: 500, color: "black" }}>
            {label}
          </span>
          <CheckCircleIcon
            sx={{
              color: isValid ? "#1976d2" : "#bdbdbd",
              fontSize: 14,
            }}
          />
        </Stack>
        <span style={{ fontSize: 10, fontWeight: 200, color: "black" }}>
          {legend}
        </span>
      </Stack>
      <Box
        {...field}
        component='input'
        type='datetime-local'
        readOnly={readOnly}
        value={inputValue}
        onChange={handleChange}
        sx={{
          height: 40,
          border: "none",
          borderRadius: 2,
          outline: "none",
          backgroundColor: (theme) => theme.palette.action.hover,
          fontSize: 11,
          paddingX: 2,
          color: (theme) => theme.palette.text.secondary,
          cursor: "pointer",
        }}
      />
    </Stack>
  )
}