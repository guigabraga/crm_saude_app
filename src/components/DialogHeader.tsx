import { Stack, IconButton } from "@mui/material"
import XIcon from "@mui/icons-material/Close";

type TProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  functionClose: () => void;
}

export default function DialogHeader({ title, subtitle, functionClose, icon }: TProps) {
  return (
    <Stack
      direction='row'
      alignItems='flex-start'
      justifyContent='space-between'
      mb={2}
    >
      <Stack
        flexDirection='row'
        justifyContent='flex-start'
        alignContent='flex-start'
        gap={1}
        sx={{
          pb: 1
        }}
      >
        {icon}
        <Stack
          direction='column'
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "black"
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 300,
              color: "black"
            }}
          >
            {subtitle}
          </span>
        </Stack>
      </Stack>
      <IconButton
        onClick={() => functionClose()}
        sx={{
          padding: 0,
          margin: 0
        }}
      >
        <XIcon fontSize="small" />
      </IconButton>
    </Stack>
  )
}