import { Stack, Box } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type TProps = {
  label: string;
  legend: string;
  placeholder: string;
  isValid: boolean | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any,
  readOnly?: boolean
}

export default function InputText({ label, legend, placeholder, isValid, field, readOnly }: TProps) {
  return (
    <Stack
      direction='column'
      spacing={1}
    >
      <Stack
        direction='column'
      >
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "black"
            }}
          >
            {label}
          </span>
          <CheckCircleIcon
            sx={{
              color: isValid ? "#1976d2" : "#bdbdbd",
              fontSize: 14,
            }}
          />
        </Stack>
        <span
          style={{
            fontSize: 10,
            fontWeight: 200,
            color: "black"
          }}
        >
          {legend}
        </span>
      </Stack>
      <Box
        {...field}
        component='input'
        placeholder={placeholder}
        readOnly={readOnly}
        sx={{
          height: 40,
          border: "none",
          borderRadius: 2,
          outline: "none",
          backgroundColor: (theme) => theme.palette.action.hover,
          fontSize: 11,
          paddingX: 2,
          color: (theme) => theme.palette.text.secondary,
          "::placeholder": {
            color: (theme) => theme.palette.text.disabled,
            fontSize: "11px"
          },
        }}
      />
    </Stack>
  )
};