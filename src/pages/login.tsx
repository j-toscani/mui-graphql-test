import { useState, FC, ChangeEvent, FormEvent } from "react";
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
  const [emailErrorText, setEmailErrorText] = useState("");
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const hasEmailError = emailErrorText.length > 0;

  function setPassword(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, password: e.currentTarget.value });
  }
  
  function setEmail(e: ChangeEvent<HTMLInputElement>) {
    if (!e.currentTarget.value.includes("@")) {
      setEmailErrorText('Email is missing "@" sign.');
    } else {
        setEmailErrorText('');
    }
    setFormData({ ...formData, email: e.currentTarget.value });
  }

  function logInput(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (hasEmailError) return;
    console.log(formData);
  }

  return (
    <Card sx={{ width: "24rem", maxWidth: "100%", margin: "1rem" }}>
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
            onSubmit={logInput}
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
            Sie haben ihr Passwort vergesen?
          </Typography>
          <Box>
            <Button
              disabled={hasEmailError}
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
