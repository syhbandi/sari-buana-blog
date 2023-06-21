import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import KebijakanPrivasi from "../pages/Kebijakan-privasi";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "kebijakan-privasi",
        element: <KebijakanPrivasi />,
      },
      {
        path: "syarat-ketentuan",
        element: <KebijakanPrivasi />,
      },
    ],
    errorElement: <>Error router</>,
  },
]);

export default router;
