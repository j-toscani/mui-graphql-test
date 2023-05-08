import { Login } from "./pages/login";
import { Login as LoginLayout } from "./layouts/login";
import { Create } from "./pages/create";
import { ErrorPage } from "./pages/error";
import { Default } from "./layouts/default";
import { Profile } from "./pages/profile";
import { Listings } from "./pages/listings";
import { RequestDetail } from "./pages/request-detail";
import { Edit } from "./pages/edit";

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
        path: "/request",
        element: <Create />,
      },
      {
        path: "/request/:id",
        element: <Edit />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        index: true,
        element: <Listings />,
      },
      {
        path: "/:id",
        element: <RequestDetail />,
      },
    ],
  },
];
