import { Typography, Stack, Divider } from "@mui/material";
import { FC } from "react";
import { CreateRequestForm } from "../components/CreateRequestForm";

export const Create: FC = () => {
  return (
    <Stack spacing={2} p="1rem">
      <Typography variant="h5">Create a new Request!</Typography>
      <Divider sx={{ marginBottom: "1rem" }}></Divider>
      <CreateRequestForm />
    </Stack>
  );
};
