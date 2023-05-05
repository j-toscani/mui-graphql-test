import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";

export const Default: FC<PropsWithChildren<object>> = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "y";

  return !isLoggedIn ? (
    <Navigate replace to="/login" />
  ) : (
    <Box sx={{ backgroundColor: "#DDD", minHeight: "100%" }}>
      <Outlet />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Home"
            component={Link}
            to="/"
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="List"
            component={Link}
            to="/list"
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Profile"
            to="/profile"
            component={Link}
          ></BottomNavigationAction>
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
