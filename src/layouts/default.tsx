import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import Listings from "@mui/icons-material/List";
import Create from "@mui/icons-material/Create";
import Profile from "@mui/icons-material/Person";

import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, PropsWithChildren, useState, useReducer, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LogoutButton } from "../components/LogoutButton";
import { getRequests, requestReducer } from "../reducers/requestReducer";
import {
  RequestActionsContext,
  RequestContext,
} from "../context/RequestContext";

export const Default: FC<PropsWithChildren<object>> = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "y";

  const location = useLocation();
  const navigate = useNavigate();

  const [requests, dispatch] = useReducer(requestReducer, getRequests());
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", text: "Show Listings", icon: <Listings /> },
    { to: "/request", text: "Create Request", icon: <Create /> },
    { to: "/profile", text: "Show my Profile", icon: <Profile /> },
  ];

  return !isLoggedIn ? (
    <Navigate replace to="/login" />
  ) : (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon sx={{ color: "white" }}></MenuIcon>
          </IconButton>
          <Typography variant="h6" textAlign="center" sx={{ flexGrow: 1 }}>
            Cool App!
          </Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="left"
      >
        <List>
          {links.map((link) => (
            <DrawerLink key={link.text} to={link.to} text={link.text}>
              {link.icon}
            </DrawerLink>
          ))}
        </List>
      </Drawer>
      <RequestContext.Provider value={requests}>
        <RequestActionsContext.Provider value={dispatch}>
          <Container component="main">
            {history.length && (
              <Box>
                <Button onClick={() => navigate(-1)}>Back</Button>
              </Box>
            )}
            <Outlet />
          </Container>
        </RequestActionsContext.Provider>
      </RequestContext.Provider>
    </Box>
  );
};

const DrawerLink: FC<PropsWithChildren<{ to: string; text: string }>> = ({
  to,
  text,
  children,
}) => {
  return (
    <ListItem component={Link} to={to}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};
