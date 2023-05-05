import { TextField, Box, Button } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { RequestData } from "../interfaces/RequestData";

export const CreateRequestForm: FC = () => {
  const initialFormData: RequestData = {
    id: crypto.randomUUID(),
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    streetNr: "",
    phone: "",
    zip: "",
    insuranceNr: "",
  };

  const [formData, setFormData] =
    useState<typeof initialFormData>(initialFormData);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  function updateFormProp(key: keyof typeof initialFormData) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [key]: e.currentTarget.value,
      });
    };
  }

  return (
    <Box
      component="form"
      id="create-request"
      display="grid"
      gap="1rem"
      p="1rem"
      onSubmit={handleSubmit}
      sx={{ gridTemplateColumns: "repeat(6, 1fr)" }}
    >
      <TextField
        sx={{ gridColumn: { xs: "span 6", sm: "span 3" } }}
        label="Vorname"
        required
        size="small"
        onChange={updateFormProp("firstname")}
        value={formData.firstname}
      ></TextField>
      <TextField
        sx={{ gridColumn: { xs: "span 6", sm: "span 3" } }}
        label="Name"
        required
        size="small"
        onChange={updateFormProp("lastname")}
        value={formData.lastname}
      ></TextField>
      <TextField
        sx={{ gridColumn: "span 5" }}
        label="Straße"
        size="small"
        onChange={updateFormProp("street")}
        value={formData.street}
      ></TextField>
      <TextField
        sx={{ gridColumn: "span 1" }}
        label="Haus-Nr."
        size="small"
        onChange={updateFormProp("streetNr")}
        value={formData.streetNr}
      ></TextField>
      <TextField
        sx={{ gridColumn: { xs: "span 3", sm: "span 1" } }}
        label="Postleitzahl"
        required
        size="small"
        onChange={updateFormProp("zip")}
        value={formData.zip}
      ></TextField>
      <TextField
        sx={{ gridColumn: { xs: "span 3", sm: "span 5" } }}
        label="Stadt"
        size="small"
        onChange={updateFormProp("city")}
        value={formData.city}
      ></TextField>
      <TextField
        sx={{ gridColumn: { xs: "span 6", sm: "span 3" } }}
        label="E-Mail"
        required
        size="small"
        onChange={updateFormProp("email")}
        value={formData.email}
      ></TextField>
      <TextField
        sx={{ gridColumn: { xs: "span 6", sm: "span 3" } }}
        label="Telefon Nr."
        required
        size="small"
        onChange={updateFormProp("phone")}
        value={formData.phone}
      ></TextField>
      <TextField
        sx={{ gridColumn: { xs: "span 6", sm: "span 3" } }}
        label="Versicherungsnummner"
        required
        size="small"
        onChange={updateFormProp("insuranceNr")}
        value={formData.insuranceNr}
      ></TextField>
      <Box sx={{ gridColumn: "span 6" }}>
        <Button variant="contained" form="create-request" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};
