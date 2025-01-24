import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
