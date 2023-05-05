import { Login } from "./pages/login";
import { Login as LoginLayout } from "./layouts/login";
import { Welcome } from "./pages/welcome";
import { ErrorPage } from "./pages/error";
import { Default } from "./layouts/default";
import { Profile } from "./pages/profile";
import { Listings } from "./pages/listings";

export const routes = [
  {
    path: "/login",
    element: (
      <LoginLayout>
        <Login />
      </LoginLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Default />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/listings",
        element: <Listings />,
      },
    ],
  },
];
