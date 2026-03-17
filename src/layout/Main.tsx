import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "./elements";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
        <Sidebar />
        <Box
          component="main"
          sx={(t) => ({
            bgcolor: t.palette.action.hover,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: 10,
            paddingBottom: 2,
            paddingX: 2,
            overflow: "auto",
          })}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}