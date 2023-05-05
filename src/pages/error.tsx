import { FC } from "react";
import { useRouteError, Link } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  return (
    <div>
      <h1>An Error Occured:</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};
