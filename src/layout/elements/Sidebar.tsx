import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRoutes } from "../../hooks/useRoutes";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const { routes } = useRoutes();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: "50px",
        width: 200,
        height: "100vh",
        borderRight: "1px solid rgba(0,0,0,0.12)",
      }}
    >
      <List>
        {routes.private.filter((item) => item.available).map((item, key) => {

          const isActive = location.pathname === item.path;

          return (
            <ListItem key={key} disablePadding sx={{ px: 1, mb: 0.5 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  py: 0.5,
                  "& .MuiListItemText-primary": {
                    fontSize: "0.875rem"
                  },
                  "& .MuiListItemIcon-root": {
                    minWidth: 36,
                    "& svg": {
                      fontSize: "1.2rem",
                    },
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#000",
                    color: "#fff",
                    "& .MuiListItemIcon-root": {
                      color: "#fff",
                    },
                    "&:hover": {
                      backgroundColor: "#222",
                    },
                  },
                }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );
}