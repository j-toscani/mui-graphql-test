import { Login } from "./pages/login";
import { Login as LoginLayout } from "./layouts/login";
import { Create } from "./pages/create";
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        index: true,
        element: <Listings />,
      },
    ],
  },
];
