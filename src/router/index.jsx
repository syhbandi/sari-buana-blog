import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import KebijakanPrivasi from "../pages/Kebijakan-privasi";
import Home from "../pages/home";
import SyaratKetentuan from "../pages/Syarat-ketentuan";
import HapusAkun from "../pages/HapusAkun";
import HelpPage from "../pages/Help";
import CategoryPage from "../pages/Help/Category";
import TopicPage from "../pages/Help/Topic";

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
        element: <SyaratKetentuan />,
      },
      {
        path: "delete-account",
        element: <HapusAkun />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "help/:category",
        element: <CategoryPage />,
      },
      {
        path: "help/:category/:slug",
        element: <TopicPage />,
      },
    ],
    errorElement: <>Error router</>,
  },
]);

export default router;
