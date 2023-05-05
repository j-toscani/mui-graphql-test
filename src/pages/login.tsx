import { useState, FC, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Box,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const Login: FC = () => {
  const navigate = useNavigate();

  const [emailErrorText, setEmailErrorText] = useState("");
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const hasEmailError = emailErrorText.length > 0;
  const hasPassword = formData.password.length > 0;

  function setPassword(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, password: e.currentTarget.value });
  }

  function setEmail(e: ChangeEvent<HTMLInputElement>) {
    if (!e.currentTarget.value.includes("@")) {
      setEmailErrorText('Email is missing "@" sign.');
    } else {
      setEmailErrorText("");
    }
    setFormData({ ...formData, email: e.currentTarget.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (hasEmailError || formData.email.length <= 0) return;
    localStorage.setItem("isLoggedIn", "y");
    navigate("/");
  }

  return (
    <Card sx={{ width: "24rem", maxWidth: "calc(100% - 2rem)", margin: "0 1rem" }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography component="h1" variant="h5">
            Antragsverwaltung
          </Typography>
          <Divider role="presentation">
            <Typography
              sx={{ padding: "0 2rem" }}
              component="span"
              variant="h6"
            >
              Login
            </Typography>
          </Divider>
          <Stack
            id="login"
            onSubmit={handleSubmit}
            component="form"
            noValidate
            autoComplete="off"
            spacing={2}
          >
            <TextField
              label="Email"
              variant="outlined"
              required
              error={hasEmailError}
              helperText={emailErrorText}
              value={formData.email}
              onChange={setEmail}
            />
            <TextField
              label="Password"
              variant="outlined"
              required
              value={formData.password}
              onChange={setPassword}
            />
          </Stack>
          <Typography variant="subtitle2">
            Sie haben ihr Passwort vergessen?
          </Typography>
          <Box>
            <Button
              disabled={hasEmailError || !hasPassword}
              variant="contained"
              type="submit"
              form="login"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
