import { FC, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  RequestActionsContext,
  RequestContext,
} from "../context/RequestContext";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export const RequestDetail: FC = () => {
  const { id: requestId } = useParams();
  const requests = useContext(RequestContext);
  const dispatch = useContext(RequestActionsContext);
  const navigate = useNavigate();

  if (!requestId) {
    throw new Error("Id was not provided");
  }

  const request = requests.find((request) => request.id === requestId);

  function handleDelete() {
    if (!dispatch || !requestId) return;
    dispatch({ type: "delete", id: requestId });
    navigate("/");
  }

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h6">Name und Versicherungsnummer</Typography>
        <Typography>
          {request?.firstname} {request?.lastname}; {request?.insuranceNr}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Adresse:</Typography>
        <Typography>
          {request?.zip} {request?.city} - {request?.street}, Nr.{" "}
          {request?.streetNr}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Kontakt</Typography>
        <Typography>
          Tel: {request?.phone} <br />
          Mail: {request?.email}
        </Typography>
      </Box>
      <Grid container spacing={2} my="0.5rem">
        <Grid item>
          <Button color="error" variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained">
            <Link to={`/request/${requestId}`}> Edit </Link>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
