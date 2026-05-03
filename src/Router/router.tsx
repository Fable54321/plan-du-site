import { createBrowserRouter } from "react-router-dom";
import SitesPlanPage from "../100--App/SitesPlanPage/SitesPlanPage";




export const router = createBrowserRouter([
  {
    path: "/plan/:token",
    element: <SitesPlanPage />,
  },
]);