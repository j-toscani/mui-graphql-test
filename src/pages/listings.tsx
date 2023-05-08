import { FC, useContext } from "react";
import { RequestContext } from "../context/RequestContext";
import {
  List,
  ListItem,
  Typography,
  Divider,
  Stack,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Listings: FC = () => {
  const requests = useContext(RequestContext);
  return (
    <List sx={{margin: "1rem 0"}} role="presentation">
      {requests.map((request) => (
        <ListItem key={request.id} component={Link} to={`/${request.id}`}>
          <Stack sx={{ width: "100%" }}>
            <Grid container justifyContent="space-between">
              <Grid item xs="auto">
                <Typography>
                  {request.firstname} {request.lastname}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{request.insuranceNumber}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginTop: "0.25rem" }}></Divider>
            <Typography variant="subtitle2">
              {request.zip} {request.city}, {request.street} {request.streetNr}
            </Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};
