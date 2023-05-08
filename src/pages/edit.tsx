import { Typography, Stack, Divider } from "@mui/material";
import { FC, useContext } from "react";
import { CreateRequestForm } from "../components/CreateRequestForm";
import { RequestData } from "../interfaces/RequestData";
import { RequestActionsContext, RequestContext } from "../context/RequestContext";
import { useNavigate, useParams } from "react-router-dom";

export const Edit: FC = () => {
  const dispatch = useContext(RequestActionsContext);
  const requests = useContext(RequestContext);
  const { id: requestId } = useParams(); 
  const navigate = useNavigate();

  const request = requests.find((request) => request.id === requestId);

  function handleSubmit(formData: RequestData) {
    if(!dispatch) return;
    dispatch({ type: "update", request: formData, id: formData.id });
    navigate(`/${requestId}`);
  }

  return (
    <Stack spacing={2} p="1rem">
      <Typography variant="h5">Edit request {request?.insuranceNumber}!</Typography>
      <Divider sx={{ marginBottom: "1rem" }}></Divider>
      <CreateRequestForm onSubmit={handleSubmit} request={request}/>
    </Stack>
  );
};
