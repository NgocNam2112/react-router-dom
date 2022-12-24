import Root from "../pages/root";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contact from "../pages/contact";
import Edit from "../pages/edit";
import Index from "../pages";

export const routesName = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contacts/edit/:contactId",
        element: <Edit />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
