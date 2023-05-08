import { FC, useContext } from "react";
import { RequestContext } from "../context/RequestContext";

export const Listings: FC = () => {
  const requests = useContext(RequestContext);
  return (
    <pre style={{textAlign: "left"}}>
      {JSON.stringify(requests, null, 2)}
    </pre>
  );
};
