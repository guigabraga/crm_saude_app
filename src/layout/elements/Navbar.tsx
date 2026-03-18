import { AppBar, Toolbar } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      elevation={0}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        borderBottom: "1px solid rgba(0,0,0,0.12)"
      })}
    >
      <Toolbar>

      </Toolbar>
    </AppBar>
  )
}