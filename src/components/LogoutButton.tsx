import { IconButton } from "@mui/material";
import { FC } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

export const LogoutButton: FC = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    return navigate("/login");
  }

  return <IconButton onClick={handleLogout} color="inherit"> <LogoutIcon></LogoutIcon>  </IconButton>;
};
