import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutButton: FC = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    return navigate("/login");
  }

  return <Button onClick={handleLogout}> Logout </Button>;
};
