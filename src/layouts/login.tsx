import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

export const Login: FC<PropsWithChildren<object>> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "y";

  return isLoggedIn ? (
    <Navigate replace to="/" />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: "#DDD"
      }}
    >
      {children}
      <Outlet />
    </Box>
  );
};
