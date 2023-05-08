import { Typography, Stack, Divider } from "@mui/material";
import { FC, useContext } from "react";
import { CreateRequestForm } from "../components/CreateRequestForm";
import { RequestData } from "../interfaces/RequestData";
import { RequestActionsContext } from "../context/RequestContext";
import { useNavigate } from "react-router-dom";

export const Create: FC = () => {
  const dispatch = useContext(RequestActionsContext);
  const navigate = useNavigate();

  function handleSubmit(formData: RequestData) {
    if(!dispatch) return;
    dispatch({ type: "create", request: formData, id: formData.id });
    navigate("/");
  }

  return (
    <Stack spacing={2} p="1rem">
      <Typography variant="h5">Create a new Request!</Typography>
      <Divider sx={{ marginBottom: "1rem" }}></Divider>
      <CreateRequestForm onSubmit={handleSubmit} />
    </Stack>
  );
};
