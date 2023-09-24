import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  MensClothing,
  WomensClothing,
} from "../pages";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "mens-clothing",
    element: <MensClothing />,
  },
  {
    path: "womens-clothing",
    element: <WomensClothing />,
  },
]);

export default Routes;
